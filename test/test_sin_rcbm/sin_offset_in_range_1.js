/* //////////////// generated by ulog2rcbm ////////////////
- filePrefix
- data -- [[timestamp_in_ms, pwm_output], [..., ...], ...]
- samplesAvg
///////////// User defined variables //////////// */

const filePrefix = "sin_wave";
const data = [[0.0,1500],[0.025,1512],[0.05,1524],[0.075,1537],[0.1,1549],[0.125,1562],[0.15,1574],[0.175,1587],[0.2,1599],[0.225,1611],[0.25,1623],[0.275,1635],[0.3,1647],[0.325,1659],[0.35,1671],[0.375,1683],[0.4,1694],[0.425,1706],[0.45,1717],[0.475,1728],[0.5,1739],[0.525,1750],[0.55,1761],[0.575,1771],[0.6,1782],[0.625,1792],[0.65,1802],[0.675,1812],[0.7,1822],[0.725,1831],[0.75,1840],[0.775,1849],[0.8,1858],[0.825,1867],[0.85,1875],[0.875,1883],[0.9,1891],[0.925,1899],[0.95,1906],[0.975,1913],[1.0,1920],[1.025,1927],[1.05,1933],[1.075,1939],[1.1,1945],[1.125,1951],[1.15,1956],[1.175,1961],[1.2,1966],[1.225,1970],[1.25,1974],[1.275,1978],[1.3,1981],[1.325,1984],[1.35,1987],[1.375,1990],[1.4,1992],[1.425,1994],[1.45,1996],[1.475,1997],[1.5,1998],[1.525,1999],[1.55,1999],[1.575,1999],[1.6,1999],[1.625,1999],[1.65,1998],[1.675,1997],[1.7,1995],[1.725,1994],[1.75,1991],[1.775,1989],[1.8,1986],[1.825,1983],[1.85,1980],[1.875,1977],[1.9,1973],[1.925,1968],[1.95,1964],[1.975,1959],[2.0,1954],[2.025,1949],[2.05,1943],[2.075,1937],[2.1,1931],[2.125,1925],[2.15,1918],[2.175,1911],[2.2,1904],[2.225,1896],[2.25,1889],[2.275,1881],[2.3,1872],[2.325,1864],[2.35,1855],[2.375,1846],[2.4,1837],[2.425,1828],[2.45,1818],[2.475,1809],[2.5,1799],[2.525,1789],[2.55,1778],[2.575,1768],[2.6,1757],[2.625,1746],[2.65,1736],[2.675,1724],[2.7,1713],[2.725,1702],[2.75,1690],[2.775,1679],[2.8,1667],[2.825,1655],[2.85,1643],[2.875,1631],[2.9,1619],[2.925,1607],[2.95,1595],[2.975,1582],[3.0,1570],[3.025,1558],[3.05,1545],[3.075,1533],[3.1,1520],[3.125,1508],[3.15,1495],[3.175,1483],[3.2,1470],[3.225,1458],[3.25,1445],[3.275,1433],[3.3,1421],[3.325,1408],[3.35,1396],[3.375,1384],[3.4,1372],[3.425,1360],[3.45,1348],[3.475,1336],[3.5,1324],[3.525,1312],[3.55,1301],[3.575,1290],[3.6,1278],[3.625,1267],[3.65,1256],[3.675,1245],[3.7,1235],[3.725,1224],[3.75,1214],[3.775,1204],[3.8,1194],[3.825,1184],[3.85,1174],[3.875,1165],[3.9,1156],[3.925,1147],[3.95,1138],[3.975,1129],[4.0,1121],[4.025,1113],[4.05,1105],[4.075,1098],[4.1,1090],[4.125,1083],[4.15,1077],[4.175,1070],[4.2,1064],[4.225,1058],[4.25,1052],[4.275,1047],[4.3,1041],[4.325,1037],[4.35,1032],[4.375,1028],[4.4,1024],[4.425,1020],[4.45,1017],[4.475,1014],[4.5,1011],[4.525,1008],[4.55,1006],[4.575,1004],[4.6,1003],[4.625,1001],[4.65,1000],[4.675,1000],[4.7,1000],[4.725,1000],[4.75,1000],[4.775,1000],[4.8,1001],[4.825,1003],[4.85,1004],[4.875,1006],[4.9,1008],[4.925,1011],[4.95,1014],[4.975,1017],[5.0,1020],[5.025,1024],[5.05,1028],[5.075,1032],[5.1,1037],[5.125,1041],[5.15,1047],[5.175,1052],[5.2,1058],[5.225,1064],[5.25,1070],[5.275,1077],[5.3,1083],[5.325,1090],[5.35,1098],[5.375,1105],[5.4,1113],[5.425,1121],[5.45,1129],[5.475,1138],[5.5,1147],[5.525,1156],[5.55,1165],[5.575,1174],[5.6,1184],[5.625,1194],[5.65,1204],[5.675,1214],[5.7,1224],[5.725,1235],[5.75,1245],[5.775,1256],[5.8,1267],[5.825,1278],[5.85,1290],[5.875,1301],[5.9,1313],[5.925,1324],[5.95,1336],[5.975,1348],[6.0,1360],[6.025,1372],[6.05,1384],[6.075,1396],[6.1,1408],[6.125,1421],[6.15,1433],[6.175,1446],[6.2,1458],[6.225,1470],[6.25,1483],[6.275,1495],[6.3,1508],[6.325,1520],[6.35,1533],[6.375,1545],[6.4,1558],[6.425,1570],[6.45,1583],[6.475,1595],[6.5,1607],[6.525,1619],[6.55,1631],[6.575,1643],[6.6,1655],[6.625,1667],[6.65,1679],[6.675,1690],[6.7,1702],[6.725,1713],[6.75,1725],[6.775,1736],[6.8,1747],[6.825,1757],[6.85,1768],[6.875,1778],[6.9,1789],[6.925,1799],[6.95,1809],[6.975,1818],[7.0,1828],[7.025,1837],[7.05,1846],[7.075,1855],[7.1,1864],[7.125,1872],[7.15,1881],[7.175,1889],[7.2,1896],[7.225,1904],[7.25,1911],[7.275,1918],[7.3,1925],[7.325,1931],[7.35,1937],[7.375,1943],[7.4,1949],[7.425,1954],[7.45,1959],[7.475,1964],[7.5,1968],[7.525,1973],[7.55,1977],[7.575,1980],[7.6,1983],[7.625,1986],[7.65,1989],[7.675,1992],[7.7,1994],[7.725,1995],[7.75,1997],[7.775,1998],[7.8,1999],[7.825,1999],[7.85,1999],[7.875,1999],[7.9,1999],[7.925,1998],[7.95,1997],[7.975,1996],[8.0,1994],[8.025,1992],[8.05,1990],[8.075,1987],[8.1,1984],[8.125,1981],[8.15,1978],[8.175,1974],[8.2,1970],[8.225,1965],[8.25,1961],[8.275,1956],[8.3,1951],[8.325,1945],[8.35,1939],[8.375,1933],[8.4,1927],[8.425,1920],[8.45,1913],[8.475,1906],[8.5,1899],[8.525,1891],[8.55,1883],[8.575,1875],[8.6,1867],[8.625,1858],[8.65,1849],[8.675,1840],[8.7,1831],[8.725,1822],[8.75,1812],[8.775,1802],[8.8,1792],[8.825,1782],[8.85,1771],[8.875,1761],[8.9,1750],[8.925,1739],[8.95,1728],[8.975,1717],[9.0,1706],[9.025,1694],[9.05,1683],[9.075,1671],[9.1,1659],[9.125,1647],[9.15,1635],[9.175,1623],[9.2,1611],[9.225,1599],[9.25,1586],[9.275,1574],[9.3,1562],[9.325,1549],[9.35,1537],[9.375,1524],[9.4,1512],[9.425,1499],[9.45,1487],[9.475,1474],[9.5,1462],[9.525,1449],[9.55,1437],[9.575,1425],[9.6,1412],[9.625,1400],[9.65,1388],[9.675,1376],[9.7,1364],[9.725,1352],[9.75,1340],[9.775,1328],[9.8,1316],[9.825,1305],[9.85,1293],[9.875,1282],[9.9,1271],[9.925,1260],[9.95,1249],[9.975,1238],[10.0,1227],[10.025,1217],[10.05,1207],[10.075,1197],[10.1,1187],[10.125,1177],[10.15,1168],[10.175,1159],[10.2,1150],[10.225,1141],[10.25,1132],[10.275,1124],[10.3,1116],[10.325,1108],[10.35,1100],[10.375,1093],[10.4,1086],[10.425,1079],[10.45,1072],[10.475,1066],[10.5,1060],[10.525,1054],[10.55,1048],[10.575,1043],[10.6,1038],[10.625,1033],[10.65,1029],[10.675,1025],[10.7,1021],[10.725,1018],[10.75,1015],[10.775,1012],[10.8,1009],[10.825,1007],[10.85,1005],[10.875,1003],[10.9,1002],[10.925,1001],[10.95,1000],[10.975,1000],[11.0,1000],[11.025,1000],[11.05,1000],[11.075,1001],[11.1,1002],[11.125,1004],[11.15,1005],[11.175,1008],[11.2,1010],[11.225,1013],[11.25,1016],[11.275,1019],[11.3,1022],[11.325,1026],[11.35,1031],[11.375,1035],[11.4,1040],[11.425,1045],[11.45,1050],[11.475,1056],[11.5,1062],[11.525,1068],[11.55,1074],[11.575,1081],[11.6,1088],[11.625,1095],[11.65,1103],[11.675,1111],[11.7,1119],[11.725,1127],[11.75,1135],[11.775,1144],[11.8,1153],[11.825,1162],[11.85,1171],[11.875,1181],[11.9,1190],[11.925,1200],[11.95,1210],[11.975,1221],[12.0,1231],[12.025,1242],[12.05,1253],[12.075,1264],[12.1,1275],[12.125,1286],[12.15,1297],[12.175,1309],[12.2,1320],[12.225,1332],[12.25,1344],[12.275,1356],[12.3,1368],[12.325,1380],[12.35,1392],[12.375,1404],[12.4,1417],[12.425,1429],[12.45,1441],[12.475,1454],[12.5,1466],[12.525,1479],[12.55,1491],[12.575,1504],[12.6,1516],[12.625,1529],[12.65,1541],[12.675,1554],[12.7,1566],[12.725,1578],[12.75,1591],[12.775,1603],[12.8,1615],[12.825,1627],[12.85,1639],[12.875,1651],[12.9,1663],[12.925,1675],[12.95,1687],[12.975,1698],[13.0,1710],[13.025,1721],[13.05,1732],[13.075,1743],[13.1,1754],[13.125,1765],[13.15,1775],[13.175,1785],[13.2,1796],[13.225,1806],[13.25,1815],[13.275,1825],[13.3,1834],[13.325,1843],[13.35,1852],[13.375,1861],[13.4,1870],[13.425,1878],[13.45,1886],[13.475,1894],[13.5,1901],[13.525,1909],[13.55,1916],[13.575,1923],[13.6,1929],[13.625,1935],[13.65,1941],[13.675,1947],[13.7,1952],[13.725,1958],[13.75,1962],[13.775,1967],[13.8,1971],[13.825,1975],[13.85,1979],[13.875,1982],[13.9,1986],[13.925,1988],[13.95,1991],[13.975,1993],[14.0,1995],[14.025,1996],[14.05,1998],[14.075,1999],[14.1,1999],[14.125,1999],[14.15,1999],[14.175,1999],[14.2,1999],[14.225,1998],[14.25,1996],[14.275,1995],[14.3,1993],[14.325,1991],[14.35,1988],[14.375,1985],[14.4,1982],[14.425,1979],[14.45,1975],[14.475,1971],[14.5,1967],[14.525,1962],[14.55,1957],[14.575,1952],[14.6,1947],[14.625,1941],[14.65,1935],[14.675,1929],[14.7,1922],[14.725,1916],[14.75,1909],[14.775,1901],[14.8,1894],[14.825,1886],[14.85,1878],[14.875,1869],[14.9,1861],[14.925,1852],[14.95,1843],[14.975,1834],[15.0,1825],[15.025,1815],[15.05,1805],[15.075,1795],[15.1,1785],[15.125,1775],[15.15,1764],[15.175,1754],[15.2,1743],[15.225,1732],[15.25,1721],[15.275,1709],[15.3,1698],[15.325,1686],[15.35,1675],[15.375,1663],[15.4,1651],[15.425,1639],[15.45,1627],[15.475,1615],[15.5,1603],[15.525,1590],[15.55,1578],[15.575,1566],[15.6,1553],[15.625,1541],[15.65,1528],[15.675,1516],[15.7,1503],[15.725,1491],[15.75,1478],[15.775,1466],[15.8,1454],[15.825,1441],[15.85,1429],[15.875,1416],[15.9,1404],[15.925,1392],[15.95,1380],[15.975,1368],[16.0,1356],[16.025,1344],[16.05,1332],[16.075,1320],[16.1,1308],[16.125,1297],[16.15,1286],[16.175,1274],[16.2,1263],[16.225,1252],[16.25,1242],[16.275,1231],[16.3,1220],[16.325,1210],[16.35,1200],[16.375,1190],[16.4,1180],[16.425,1171],[16.45,1162],[16.475,1152],[16.5,1144],[16.525,1135],[16.55,1126],[16.575,1118],[16.6,1110],[16.625,1103],[16.65,1095],[16.675,1088],[16.7,1081],[16.725,1074],[16.75,1068],[16.775,1062],[16.8,1056],[16.825,1050],[16.85,1045],[16.875,1040],[16.9,1035],[16.925,1030],[16.95,1026],[16.975,1022],[17.0,1019],[17.025,1016],[17.05,1013],[17.075,1010],[17.1,1007],[17.125,1005],[17.15,1004],[17.175,1002],[17.2,1001],[17.225,1000],[17.25,1000],[17.275,1000],[17.3,1000],[17.325,1000],[17.35,1001],[17.375,1002],[17.4,1003],[17.425,1005],[17.45,1007],[17.475,1009],[17.5,1012],[17.525,1015],[17.55,1018],[17.575,1021],[17.6,1025],[17.625,1029],[17.65,1034],[17.675,1038],[17.7,1043],[17.725,1048],[17.75,1054],[17.775,1060],[17.8,1066],[17.825,1072],[17.85,1079],[17.875,1086],[17.9,1093],[17.925,1100],[17.95,1108],[17.975,1116],[18.0,1124],[18.025,1132],[18.05,1141],[18.075,1150],[18.1,1159],[18.125,1168],[18.15,1178],[18.175,1187],[18.2,1197],[18.225,1207],[18.25,1217],[18.275,1228],[18.3,1238],[18.325,1249],[18.35,1260],[18.375,1271],[18.4,1282],[18.425,1294],[18.45,1305],[18.475,1317],[18.5,1328],[18.525,1340],[18.55,1352],[18.575,1364],[18.6,1376],[18.625,1388],[18.65,1400],[18.675,1413],[18.7,1425],[18.725,1437],[18.75,1450],[18.775,1462],[18.8,1475],[18.825,1487],[18.85,1500],[18.875,1512],[18.9,1525],[18.925,1537],[18.95,1550],[18.975,1562],[19.0,1574],[19.025,1587],[19.05,1599],[19.075,1611],[19.1,1623],[19.125,1635],[19.15,1647],[19.175,1659],[19.2,1671],[19.225,1683],[19.25,1694],[19.275,1706],[19.3,1717],[19.325,1728],[19.35,1739],[19.375,1750],[19.4,1761],[19.425,1772],[19.45,1782],[19.475,1792],[19.5,1802],[19.525,1812],[19.55,1822],[19.575,1831],[19.6,1840],[19.625,1850],[19.65,1858],[19.675,1867],[19.7,1875],[19.725,1883],[19.75,1891],[19.775,1899],[19.8,1906],[19.825,1913],[19.85,1920],[19.875,1927],[19.9,1933],[19.925,1939],[19.95,1945],[19.975,1951]];
const samplesAvg = 20;

let lastTimestamp = data[0][0];
let position = 0; // index of data array
let timeDifference;

///////////////// Beginning of the script //////////////////

if (!data) {
    rcb.console.print("Error: data is not an array of length > 0");
    rcb.endScript();
}

rcb.files.newLogFile({prefix: filePrefix});

rcb.wait(readSensor, lastTimestamp);
function readSensor() {
    rcb.console.setVerbose(false);
    rcb.sensors.read(readDone, samplesAvg);
    rcb.console.setVerbose(true);
}
function readDone(result) {
    rcb.console.setVerbose(false);
    rcb.files.newLogEntry(result, readSensor);
    rcb.console.setVerbose(true);
}

rcb.console.print("Starting...");
rcb.console.setVerbose(true);

rcb.wait(callback, lastTimestamp);

function callback() {
    rcb.output.set("esc", data[position][1]);
    position++;
    if (data.length > position) {
        timeDifference = data[position][0] - lastTimestamp;
        lastTimestamp = data[position][0];
        rcb.wait(callback, timeDifference);
    } else {
        rcb.wait(function() {
            rcb.endScript();
        }, 1000);
    }
}