# pyrcbm

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lirc572/pyrcbm/Tests?style=for-the-badge)](https://github.com/lirc572/pyrcbm/actions/workflows/tests.yml)
[![PyPI](https://img.shields.io/pypi/v/pyrcbm?style=for-the-badge)](https://pypi.org/project/pyrcbm/)

This repository contains command line tools to generate [RCbenchmark](https://www.rcbenchmark.com/pages/rcbenchmark-software) scripts.

The scripts provided in this package are:

- `ulog2rcbm`: convert PWM outputs from a ULog file to an RCbencemark script
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
  --avg AVERAGE         sample average (default is '20')
```

### Generate an RCbencemark script that outputs a sin wave (sin_rcbm)

```
usage: sin_rcbm [-h] [-o OFFSET] [-a AMPLITUDE] [-f FREQUENCY] [-p PHASE] [--avg AVERAGE]

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
  --avg AVERAGE         sample average (default is '20')
```