# pyrcbm

[![CI Status](https://img.shields.io/github/workflow/status/lirc572/pyrcbm/Tests?style=for-the-badge)](https://github.com/lirc572/pyrcbm/actions/workflows/test.yml)
[![CD Status](https://img.shields.io/github/workflow/status/lirc572/pyrcbm/Package%20and%20Distribute%20on%20PyPI?style=for-the-badge)](https://github.com/lirc572/pyrcbm/actions/workflows/distribute.yml)
[![PyPI](https://img.shields.io/pypi/v/pyrcbm?style=for-the-badge)](https://pypi.org/project/pyrcbm/)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/pyrcbm?style=for-the-badge)](https://pypi.org/project/pyrcbm/)

This repository contains command line tools to generate [RCbenchmark](https://www.rcbenchmark.com/pages/rcbenchmark-software) scripts.

The scripts provided in this package are:

- `ulog2rcbm`: convert PWM outputs from a ULog file to an RCbencemark script
- `csv2rcbm`: convert a CSV file to an RCbencemark script
- `sin_rcbm`: generate an RCbencemark script that outputs a sin wave

## Installation

[Install with pipx](https://packaging.python.org/guides/installing-stand-alone-command-line-tools/):

```sh
pipx install pyrcbm
```

Install from source:

```sh
python setup.py build install
```

## Development

In a virtual environment or conda environment:

```sh
pip install build
pip install twine

python setup.py develop

# uninstall with `python setup.py develop -u`
```

## Scripts

### Convert PWM outputs from a ULog file to an RCbencemark script (ulog2rcbm)

```
usage: ulog2rcbm [-h] [-m MULTI] [-a ACTUATOR] [--avg AVERAGE] file.ulg

Convert ULog to RCbenchmark script

positional arguments:
  file.ulg              ULog input file

optional arguments:
  -h, --help            show this help message and exit
  -m MULTI, --multi MULTI
                        multi_id (which actuator_outputs to use, '0' or '1', default is '0')
  -a ACTUATOR, --actuator ACTUATOR
                        which actuator's output to use ('0' - '15', default is '0')
  --avg AVERAGE         sample average (default is '1')
```

### Convert a CSV file to an RCbencemark script (csv2rcbm)

```
usage: csv2rcbm [-h] [-c COLUMN] [-t TIME] [--avg AVERAGE] file.csv

Convert CSV to RCbenchmark script

positional arguments:
  file.csv              CSV input file

optional arguments:
  -h, --help            show this help message and exit
  -c COLUMN, --col COLUMN
                        column name (which column to use)
  -t TIME, --time TIME  time column name (which column to use as time, default is 'timestamp')
  --avg AVERAGE         sample average (default is '1')
```

### Generate an RCbencemark script that outputs a sin wave (sin_rcbm)

```
usage: sin_rcbm [-h] [-o OFFSET] [-a AMPLITUDE] [-f FREQUENCY] [-p PHASE] [-r] [--avg AVERAGE]

Generate a RCbenchmark script that produces sinusoidal wave

optional arguments:
  -h, --help            show this help message and exit
  -o OFFSET, --offset OFFSET
                        offset of the wave ('1000' - '2000', default is '1500')
  -a AMPLITUDE, --amplitude AMPLITUDE
                        amplitude, the peak deviation of the wave from offset ('0' - '500', default is '500')
  -f FREQUENCY, --frequency FREQUENCY
                        angular frequency in radians per second (default is '1')
  -p PHASE, --phase PHASE
                        phase, specifies in radians where in its cycle the oscillation is at t=0 (default is '0')
  -r, --rampup          ramp up from 1000 to initial value (disabled by default)
  --avg AVERAGE         sample average (default is '1')
```
