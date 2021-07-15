mkdir tmp
cd tmp

# test_sin_rcbm

# test_default
python  ../pyrcbm/sin_rcbm.py
mv *.js ../test/test_sin_rcbm/sin_default.js

# test_offset_in_range_1
python  ../pyrcbm/sin_rcbm.py -o 1000
mv *.js ../test/test_sin_rcbm/sin_offset_in_range_1.js

# test_offset_in_range_2
python  ../pyrcbm/sin_rcbm.py -o 2000
mv *.js ../test/test_sin_rcbm/sin_offset_in_range_2.js

# test_amplitude_in_range
python  ../pyrcbm/sin_rcbm.py -a 0
mv *.js ../test/test_sin_rcbm/sin_amplitude_in_range.js

# test_frequency_1
python  ../pyrcbm/sin_rcbm.py -f 0.1
mv *.js ../test/test_sin_rcbm/sin_frequency_1.js

# test_frequency_2
python  ../pyrcbm/sin_rcbm.py -f 99
mv *.js ../test/test_sin_rcbm/sin_frequency_2.js

# test_phase_1
python  ../pyrcbm/sin_rcbm.py -p 6.28
mv *.js ../test/test_sin_rcbm/sin_phase_1.js

# test_phase_2
python  ../pyrcbm/sin_rcbm.py -p -5
mv *.js ../test/test_sin_rcbm/sin_phase_2.js

# test_rampup
python  ../pyrcbm/sin_rcbm.py -r
mv *.js ../test/test_sin_rcbm/sin_rampup.js

# test_avg
python  ../pyrcbm/sin_rcbm.py --avg 100
mv *.js ../test/test_sin_rcbm/sin_avg.js

# test_ulog2rcbm

cp ../test/test_ulog2rcbm/sample1.ulg ./

# test_default
python  ../pyrcbm/ulog2rcbm.py sample1.ulg
mv *.js ../test/test_ulog2rcbm/ulog_default.js

# test_actuator_1
python  ../pyrcbm/ulog2rcbm.py sample1.ulg -a 3
mv *.js ../test/test_ulog2rcbm/ulog_actuator_1.js

# test_actuator_2
python  ../pyrcbm/ulog2rcbm.py sample1.ulg -a 15
mv *.js ../test/test_ulog2rcbm/ulog_actuator_2.js

# test_avg
python  ../pyrcbm/ulog2rcbm.py sample1.ulg --avg 100
mv *.js ../test/test_ulog2rcbm/ulog_avg.js

cd ..
rm tmp -r
