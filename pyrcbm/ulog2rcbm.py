#! /usr/bin/env python

"""
Convert PWM outputs from a ULog file into an RCbencemark script

This script depends on https://github.com/PX4/pyulog (which depends on numpy)
"""

from __future__ import print_function
import argparse
from pyulog import ULog


js_template = '''/* //////////////// generated by ulog2rcbm ////////////////
- filePrefix
- data -- [[timestamp_in_ms, pwm_output], [..., ...], ...]
- samplesAvg
///////////// User defined variables //////////// */

const filePrefix = {};
const data = {};
const samplesAvg = {};

let lastTimestamp = data[0][0];
let position = 0; // index of data array
let timeDifference;

///////////////// Beginning of the script //////////////////

if (!data) {{
    rcb.console.print("Error: data is not an array of length > 0");
    rcb.endScript();
}}

rcb.console.setVerbose(false);

rcb.files.newLogFile({{prefix: filePrefix}});

readSensor();

function readSensor() {{
    rcb.sensors.read(readDone, samplesAvg);
}}
function readDone(result) {{
    rcb.files.newLogEntry(result, readSensor);
}}

rcb.console.print("Starting...");

rcb.wait(callback, lastTimestamp > 5 ? 5 : lastTimestamp); // wait 5s or first timestamp, whichever smaller

function callback() {{
    rcb.output.set("esc", data[position][1]);
    position++;
    if (data.length > position) {{
        timeDifference = data[position][0] - lastTimestamp;
        lastTimestamp = data[position][0];
        rcb.wait(callback, timeDifference);
    }} else {{
        rcb.wait(function() {{
            rcb.endScript();
        }}, 1);
    }}
}}
'''

def main():
    parser = argparse.ArgumentParser(description='Convert ULog to RCbenchmark script')
    parser.add_argument('filename', metavar='file.ulg', help='ULog input file')
    parser.add_argument('-m', '--multi', dest='multi', action='store',
                        help="multi_id (which actuator_outputs to use, '0' or '1', default is '0')", default='0')
    parser.add_argument('-a', '--actuator', dest='actuator', action='store',
                        help="which actuator's output to use ('0' - '15', default is '0')", default='0')
    parser.add_argument('--avg', dest='average', action='store',
                        help="sample average (default is '1')", default='1')
    args = parser.parse_args()
    convert_ulog2rcbm(args.filename, args.multi, args.actuator, args.average)

def convert_ulog2rcbm(ulog_file_name, multi_id, actuator, sample_average):
    multi_id = int(multi_id)
    sample_average = int(sample_average)
    ulog = ULog(ulog_file_name, 'actuator_outputs', False)
    for d in ulog.data_list:
        if d.multi_id == multi_id:
            data = d
            break
    output_file_prefix = ulog_file_name
    if output_file_prefix.lower().endswith('.ulg'):
        output_file_prefix = output_file_prefix[:-4]
    output_file_prefix = '{0}_{1}_{2}_{3}'.format(output_file_prefix, d.name, d.multi_id, actuator)
    with open(output_file_prefix + '.js', 'w') as js_file:
        timestamp_list = data.data['timestamp']
        pwm_list = data.data['output[{}]'.format(actuator)]
        data_string = '[{}]'.format(
            ','.join(
                [ '[{},{}]'.format(row[0] / 1000000, int(row[1])) for row in list(zip(timestamp_list, pwm_list)) ]
            )
        )

        if output_file_prefix[:2] == './' or output_file_prefix[:2] == '.\\':
            output_file_prefix = output_file_prefix[2:]


        js_file.write(js_template.format('"{}"'.format(output_file_prefix), data_string, sample_average))

if __name__ == '__main__':
    main()
