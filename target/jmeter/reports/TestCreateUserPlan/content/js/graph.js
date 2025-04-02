/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 70.0, "minX": 0.0, "maxY": 4467.0, "series": [{"data": [[0.0, 70.0], [0.1, 74.0], [0.2, 75.0], [0.3, 75.0], [0.4, 76.0], [0.5, 76.0], [0.6, 76.0], [0.7, 76.0], [0.8, 78.0], [0.9, 78.0], [1.0, 79.0], [1.1, 79.0], [1.2, 79.0], [1.3, 80.0], [1.4, 80.0], [1.5, 81.0], [1.6, 81.0], [1.7, 81.0], [1.8, 81.0], [1.9, 82.0], [2.0, 82.0], [2.1, 82.0], [2.2, 82.0], [2.3, 82.0], [2.4, 82.0], [2.5, 82.0], [2.6, 83.0], [2.7, 83.0], [2.8, 83.0], [2.9, 83.0], [3.0, 83.0], [3.1, 83.0], [3.2, 83.0], [3.3, 84.0], [3.4, 84.0], [3.5, 84.0], [3.6, 84.0], [3.7, 85.0], [3.8, 85.0], [3.9, 85.0], [4.0, 85.0], [4.1, 85.0], [4.2, 86.0], [4.3, 86.0], [4.4, 86.0], [4.5, 86.0], [4.6, 86.0], [4.7, 86.0], [4.8, 86.0], [4.9, 86.0], [5.0, 86.0], [5.1, 86.0], [5.2, 87.0], [5.3, 87.0], [5.4, 87.0], [5.5, 87.0], [5.6, 87.0], [5.7, 87.0], [5.8, 88.0], [5.9, 88.0], [6.0, 88.0], [6.1, 88.0], [6.2, 88.0], [6.3, 88.0], [6.4, 88.0], [6.5, 88.0], [6.6, 89.0], [6.7, 89.0], [6.8, 89.0], [6.9, 89.0], [7.0, 89.0], [7.1, 89.0], [7.2, 89.0], [7.3, 89.0], [7.4, 89.0], [7.5, 89.0], [7.6, 89.0], [7.7, 90.0], [7.8, 90.0], [7.9, 90.0], [8.0, 90.0], [8.1, 90.0], [8.2, 90.0], [8.3, 90.0], [8.4, 90.0], [8.5, 90.0], [8.6, 90.0], [8.7, 90.0], [8.8, 90.0], [8.9, 91.0], [9.0, 91.0], [9.1, 91.0], [9.2, 91.0], [9.3, 91.0], [9.4, 91.0], [9.5, 91.0], [9.6, 91.0], [9.7, 91.0], [9.8, 91.0], [9.9, 91.0], [10.0, 92.0], [10.1, 92.0], [10.2, 92.0], [10.3, 92.0], [10.4, 92.0], [10.5, 92.0], [10.6, 92.0], [10.7, 92.0], [10.8, 92.0], [10.9, 92.0], [11.0, 92.0], [11.1, 93.0], [11.2, 93.0], [11.3, 93.0], [11.4, 93.0], [11.5, 93.0], [11.6, 93.0], [11.7, 93.0], [11.8, 93.0], [11.9, 94.0], [12.0, 94.0], [12.1, 94.0], [12.2, 94.0], [12.3, 94.0], [12.4, 94.0], [12.5, 94.0], [12.6, 94.0], [12.7, 94.0], [12.8, 94.0], [12.9, 95.0], [13.0, 95.0], [13.1, 95.0], [13.2, 95.0], [13.3, 95.0], [13.4, 95.0], [13.5, 95.0], [13.6, 96.0], [13.7, 96.0], [13.8, 96.0], [13.9, 96.0], [14.0, 96.0], [14.1, 96.0], [14.2, 96.0], [14.3, 96.0], [14.4, 96.0], [14.5, 96.0], [14.6, 96.0], [14.7, 96.0], [14.8, 97.0], [14.9, 97.0], [15.0, 97.0], [15.1, 97.0], [15.2, 97.0], [15.3, 97.0], [15.4, 97.0], [15.5, 97.0], [15.6, 98.0], [15.7, 98.0], [15.8, 98.0], [15.9, 98.0], [16.0, 98.0], [16.1, 98.0], [16.2, 98.0], [16.3, 98.0], [16.4, 98.0], [16.5, 98.0], [16.6, 98.0], [16.7, 98.0], [16.8, 98.0], [16.9, 98.0], [17.0, 98.0], [17.1, 98.0], [17.2, 99.0], [17.3, 99.0], [17.4, 99.0], [17.5, 99.0], [17.6, 99.0], [17.7, 99.0], [17.8, 99.0], [17.9, 99.0], [18.0, 99.0], [18.1, 99.0], [18.2, 99.0], [18.3, 100.0], [18.4, 100.0], [18.5, 100.0], [18.6, 100.0], [18.7, 100.0], [18.8, 100.0], [18.9, 100.0], [19.0, 100.0], [19.1, 100.0], [19.2, 100.0], [19.3, 100.0], [19.4, 100.0], [19.5, 100.0], [19.6, 100.0], [19.7, 100.0], [19.8, 100.0], [19.9, 100.0], [20.0, 101.0], [20.1, 101.0], [20.2, 101.0], [20.3, 101.0], [20.4, 101.0], [20.5, 101.0], [20.6, 101.0], [20.7, 102.0], [20.8, 102.0], [20.9, 102.0], [21.0, 102.0], [21.1, 102.0], [21.2, 102.0], [21.3, 102.0], [21.4, 102.0], [21.5, 103.0], [21.6, 103.0], [21.7, 103.0], [21.8, 103.0], [21.9, 103.0], [22.0, 103.0], [22.1, 103.0], [22.2, 103.0], [22.3, 103.0], [22.4, 103.0], [22.5, 103.0], [22.6, 104.0], [22.7, 104.0], [22.8, 104.0], [22.9, 104.0], [23.0, 104.0], [23.1, 104.0], [23.2, 104.0], [23.3, 104.0], [23.4, 104.0], [23.5, 104.0], [23.6, 104.0], [23.7, 104.0], [23.8, 104.0], [23.9, 104.0], [24.0, 105.0], [24.1, 105.0], [24.2, 105.0], [24.3, 105.0], [24.4, 105.0], [24.5, 105.0], [24.6, 105.0], [24.7, 105.0], [24.8, 106.0], [24.9, 106.0], [25.0, 106.0], [25.1, 106.0], [25.2, 106.0], [25.3, 106.0], [25.4, 106.0], [25.5, 106.0], [25.6, 106.0], [25.7, 107.0], [25.8, 107.0], [25.9, 107.0], [26.0, 107.0], [26.1, 107.0], [26.2, 107.0], [26.3, 107.0], [26.4, 107.0], [26.5, 107.0], [26.6, 107.0], [26.7, 108.0], [26.8, 108.0], [26.9, 108.0], [27.0, 108.0], [27.1, 108.0], [27.2, 108.0], [27.3, 108.0], [27.4, 108.0], [27.5, 108.0], [27.6, 108.0], [27.7, 109.0], [27.8, 109.0], [27.9, 109.0], [28.0, 109.0], [28.1, 109.0], [28.2, 109.0], [28.3, 109.0], [28.4, 110.0], [28.5, 110.0], [28.6, 110.0], [28.7, 110.0], [28.8, 110.0], [28.9, 110.0], [29.0, 110.0], [29.1, 110.0], [29.2, 111.0], [29.3, 111.0], [29.4, 111.0], [29.5, 111.0], [29.6, 111.0], [29.7, 111.0], [29.8, 111.0], [29.9, 111.0], [30.0, 111.0], [30.1, 111.0], [30.2, 111.0], [30.3, 112.0], [30.4, 112.0], [30.5, 112.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 112.0], [31.0, 112.0], [31.1, 112.0], [31.2, 112.0], [31.3, 112.0], [31.4, 112.0], [31.5, 113.0], [31.6, 113.0], [31.7, 113.0], [31.8, 113.0], [31.9, 113.0], [32.0, 113.0], [32.1, 113.0], [32.2, 113.0], [32.3, 113.0], [32.4, 113.0], [32.5, 113.0], [32.6, 113.0], [32.7, 114.0], [32.8, 114.0], [32.9, 114.0], [33.0, 114.0], [33.1, 114.0], [33.2, 115.0], [33.3, 115.0], [33.4, 115.0], [33.5, 115.0], [33.6, 115.0], [33.7, 115.0], [33.8, 115.0], [33.9, 115.0], [34.0, 115.0], [34.1, 116.0], [34.2, 116.0], [34.3, 116.0], [34.4, 116.0], [34.5, 116.0], [34.6, 116.0], [34.7, 116.0], [34.8, 116.0], [34.9, 116.0], [35.0, 116.0], [35.1, 116.0], [35.2, 117.0], [35.3, 117.0], [35.4, 117.0], [35.5, 117.0], [35.6, 117.0], [35.7, 117.0], [35.8, 117.0], [35.9, 117.0], [36.0, 118.0], [36.1, 118.0], [36.2, 118.0], [36.3, 118.0], [36.4, 119.0], [36.5, 119.0], [36.6, 119.0], [36.7, 119.0], [36.8, 119.0], [36.9, 119.0], [37.0, 119.0], [37.1, 119.0], [37.2, 120.0], [37.3, 120.0], [37.4, 120.0], [37.5, 120.0], [37.6, 120.0], [37.7, 120.0], [37.8, 120.0], [37.9, 120.0], [38.0, 120.0], [38.1, 120.0], [38.2, 120.0], [38.3, 121.0], [38.4, 121.0], [38.5, 121.0], [38.6, 121.0], [38.7, 121.0], [38.8, 121.0], [38.9, 122.0], [39.0, 122.0], [39.1, 122.0], [39.2, 122.0], [39.3, 122.0], [39.4, 122.0], [39.5, 122.0], [39.6, 122.0], [39.7, 122.0], [39.8, 123.0], [39.9, 123.0], [40.0, 123.0], [40.1, 124.0], [40.2, 124.0], [40.3, 124.0], [40.4, 124.0], [40.5, 124.0], [40.6, 124.0], [40.7, 124.0], [40.8, 124.0], [40.9, 124.0], [41.0, 124.0], [41.1, 124.0], [41.2, 125.0], [41.3, 125.0], [41.4, 125.0], [41.5, 125.0], [41.6, 125.0], [41.7, 126.0], [41.8, 126.0], [41.9, 126.0], [42.0, 126.0], [42.1, 126.0], [42.2, 126.0], [42.3, 126.0], [42.4, 127.0], [42.5, 127.0], [42.6, 127.0], [42.7, 127.0], [42.8, 127.0], [42.9, 127.0], [43.0, 127.0], [43.1, 127.0], [43.2, 128.0], [43.3, 128.0], [43.4, 128.0], [43.5, 128.0], [43.6, 128.0], [43.7, 128.0], [43.8, 128.0], [43.9, 129.0], [44.0, 129.0], [44.1, 129.0], [44.2, 129.0], [44.3, 129.0], [44.4, 129.0], [44.5, 129.0], [44.6, 130.0], [44.7, 130.0], [44.8, 130.0], [44.9, 130.0], [45.0, 130.0], [45.1, 130.0], [45.2, 130.0], [45.3, 130.0], [45.4, 130.0], [45.5, 131.0], [45.6, 131.0], [45.7, 131.0], [45.8, 131.0], [45.9, 131.0], [46.0, 132.0], [46.1, 132.0], [46.2, 132.0], [46.3, 132.0], [46.4, 132.0], [46.5, 132.0], [46.6, 133.0], [46.7, 133.0], [46.8, 133.0], [46.9, 133.0], [47.0, 133.0], [47.1, 133.0], [47.2, 134.0], [47.3, 134.0], [47.4, 134.0], [47.5, 134.0], [47.6, 135.0], [47.7, 135.0], [47.8, 135.0], [47.9, 135.0], [48.0, 135.0], [48.1, 136.0], [48.2, 136.0], [48.3, 136.0], [48.4, 137.0], [48.5, 137.0], [48.6, 137.0], [48.7, 137.0], [48.8, 137.0], [48.9, 137.0], [49.0, 137.0], [49.1, 137.0], [49.2, 137.0], [49.3, 137.0], [49.4, 137.0], [49.5, 138.0], [49.6, 138.0], [49.7, 138.0], [49.8, 138.0], [49.9, 138.0], [50.0, 138.0], [50.1, 138.0], [50.2, 138.0], [50.3, 138.0], [50.4, 138.0], [50.5, 139.0], [50.6, 139.0], [50.7, 139.0], [50.8, 139.0], [50.9, 139.0], [51.0, 140.0], [51.1, 140.0], [51.2, 140.0], [51.3, 140.0], [51.4, 140.0], [51.5, 140.0], [51.6, 140.0], [51.7, 141.0], [51.8, 141.0], [51.9, 141.0], [52.0, 141.0], [52.1, 141.0], [52.2, 141.0], [52.3, 141.0], [52.4, 141.0], [52.5, 141.0], [52.6, 141.0], [52.7, 141.0], [52.8, 142.0], [52.9, 142.0], [53.0, 142.0], [53.1, 142.0], [53.2, 142.0], [53.3, 143.0], [53.4, 143.0], [53.5, 143.0], [53.6, 144.0], [53.7, 144.0], [53.8, 144.0], [53.9, 144.0], [54.0, 144.0], [54.1, 145.0], [54.2, 145.0], [54.3, 145.0], [54.4, 146.0], [54.5, 146.0], [54.6, 147.0], [54.7, 147.0], [54.8, 147.0], [54.9, 148.0], [55.0, 148.0], [55.1, 148.0], [55.2, 148.0], [55.3, 148.0], [55.4, 148.0], [55.5, 149.0], [55.6, 149.0], [55.7, 150.0], [55.8, 150.0], [55.9, 151.0], [56.0, 151.0], [56.1, 152.0], [56.2, 152.0], [56.3, 153.0], [56.4, 154.0], [56.5, 154.0], [56.6, 154.0], [56.7, 155.0], [56.8, 155.0], [56.9, 156.0], [57.0, 156.0], [57.1, 156.0], [57.2, 157.0], [57.3, 158.0], [57.4, 158.0], [57.5, 159.0], [57.6, 159.0], [57.7, 159.0], [57.8, 160.0], [57.9, 160.0], [58.0, 161.0], [58.1, 161.0], [58.2, 161.0], [58.3, 162.0], [58.4, 163.0], [58.5, 164.0], [58.6, 164.0], [58.7, 165.0], [58.8, 165.0], [58.9, 166.0], [59.0, 167.0], [59.1, 168.0], [59.2, 168.0], [59.3, 170.0], [59.4, 171.0], [59.5, 172.0], [59.6, 173.0], [59.7, 173.0], [59.8, 174.0], [59.9, 174.0], [60.0, 174.0], [60.1, 174.0], [60.2, 176.0], [60.3, 176.0], [60.4, 177.0], [60.5, 177.0], [60.6, 177.0], [60.7, 178.0], [60.8, 179.0], [60.9, 180.0], [61.0, 181.0], [61.1, 181.0], [61.2, 182.0], [61.3, 184.0], [61.4, 185.0], [61.5, 185.0], [61.6, 185.0], [61.7, 186.0], [61.8, 189.0], [61.9, 189.0], [62.0, 190.0], [62.1, 191.0], [62.2, 193.0], [62.3, 194.0], [62.4, 196.0], [62.5, 196.0], [62.6, 197.0], [62.7, 197.0], [62.8, 198.0], [62.9, 205.0], [63.0, 206.0], [63.1, 206.0], [63.2, 207.0], [63.3, 208.0], [63.4, 209.0], [63.5, 211.0], [63.6, 212.0], [63.7, 212.0], [63.8, 218.0], [63.9, 218.0], [64.0, 221.0], [64.1, 232.0], [64.2, 237.0], [64.3, 255.0], [64.4, 262.0], [64.5, 282.0], [64.6, 298.0], [64.7, 300.0], [64.8, 304.0], [64.9, 308.0], [65.0, 328.0], [65.1, 347.0], [65.2, 347.0], [65.3, 358.0], [65.4, 377.0], [65.5, 404.0], [65.6, 407.0], [65.7, 415.0], [65.8, 415.0], [65.9, 419.0], [66.0, 420.0], [66.1, 427.0], [66.2, 444.0], [66.3, 445.0], [66.4, 457.0], [66.5, 470.0], [66.6, 481.0], [66.7, 482.0], [66.8, 531.0], [66.9, 546.0], [67.0, 566.0], [67.1, 584.0], [67.2, 592.0], [67.3, 593.0], [67.4, 597.0], [67.5, 600.0], [67.6, 602.0], [67.7, 602.0], [67.8, 612.0], [67.9, 614.0], [68.0, 620.0], [68.1, 622.0], [68.2, 628.0], [68.3, 628.0], [68.4, 630.0], [68.5, 635.0], [68.6, 635.0], [68.7, 635.0], [68.8, 637.0], [68.9, 691.0], [69.0, 716.0], [69.1, 717.0], [69.2, 738.0], [69.3, 768.0], [69.4, 771.0], [69.5, 804.0], [69.6, 861.0], [69.7, 890.0], [69.8, 895.0], [69.9, 922.0], [70.0, 929.0], [70.1, 942.0], [70.2, 947.0], [70.3, 951.0], [70.4, 968.0], [70.5, 971.0], [70.6, 990.0], [70.7, 1002.0], [70.8, 1016.0], [70.9, 1027.0], [71.0, 1040.0], [71.1, 1062.0], [71.2, 1062.0], [71.3, 1096.0], [71.4, 1102.0], [71.5, 1106.0], [71.6, 1126.0], [71.7, 1132.0], [71.8, 1132.0], [71.9, 1134.0], [72.0, 1136.0], [72.1, 1161.0], [72.2, 1162.0], [72.3, 1164.0], [72.4, 1183.0], [72.5, 1350.0], [72.6, 1384.0], [72.7, 1432.0], [72.8, 1448.0], [72.9, 1451.0], [73.0, 1461.0], [73.1, 1462.0], [73.2, 1470.0], [73.3, 1474.0], [73.4, 1513.0], [73.5, 1517.0], [73.6, 1521.0], [73.7, 1522.0], [73.8, 1537.0], [73.9, 1539.0], [74.0, 1568.0], [74.1, 1568.0], [74.2, 1580.0], [74.3, 1583.0], [74.4, 1680.0], [74.5, 1700.0], [74.6, 1726.0], [74.7, 1767.0], [74.8, 1783.0], [74.9, 1785.0], [75.0, 1785.0], [75.1, 1796.0], [75.2, 1798.0], [75.3, 1798.0], [75.4, 1800.0], [75.5, 1801.0], [75.6, 1802.0], [75.7, 1804.0], [75.8, 1810.0], [75.9, 1812.0], [76.0, 1818.0], [76.1, 1820.0], [76.2, 1824.0], [76.3, 1865.0], [76.4, 1888.0], [76.5, 1893.0], [76.6, 1900.0], [76.7, 1900.0], [76.8, 1903.0], [76.9, 2235.0], [77.0, 2317.0], [77.1, 2325.0], [77.2, 2365.0], [77.3, 2377.0], [77.4, 2398.0], [77.5, 2411.0], [77.6, 2415.0], [77.7, 2437.0], [77.8, 2443.0], [77.9, 2456.0], [78.0, 2463.0], [78.1, 2464.0], [78.2, 2468.0], [78.3, 2480.0], [78.4, 2500.0], [78.5, 2510.0], [78.6, 2538.0], [78.7, 2552.0], [78.8, 2555.0], [78.9, 2561.0], [79.0, 2567.0], [79.1, 2577.0], [79.2, 2579.0], [79.3, 2605.0], [79.4, 2627.0], [79.5, 2635.0], [79.6, 2640.0], [79.7, 2682.0], [79.8, 2686.0], [79.9, 2691.0], [80.0, 2710.0], [80.1, 2713.0], [80.2, 2716.0], [80.3, 2723.0], [80.4, 2723.0], [80.5, 2730.0], [80.6, 2737.0], [80.7, 2737.0], [80.8, 2738.0], [80.9, 2742.0], [81.0, 2749.0], [81.1, 2763.0], [81.2, 2773.0], [81.3, 2783.0], [81.4, 2792.0], [81.5, 2793.0], [81.6, 2796.0], [81.7, 2806.0], [81.8, 2814.0], [81.9, 2822.0], [82.0, 2841.0], [82.1, 2844.0], [82.2, 2846.0], [82.3, 2865.0], [82.4, 2877.0], [82.5, 2878.0], [82.6, 2922.0], [82.7, 2944.0], [82.8, 2952.0], [82.9, 2956.0], [83.0, 2958.0], [83.1, 2998.0], [83.2, 3071.0], [83.3, 3075.0], [83.4, 3083.0], [83.5, 3084.0], [83.6, 3088.0], [83.7, 3119.0], [83.8, 3119.0], [83.9, 3136.0], [84.0, 3139.0], [84.1, 3151.0], [84.2, 3151.0], [84.3, 3191.0], [84.4, 3196.0], [84.5, 3214.0], [84.6, 3223.0], [84.7, 3238.0], [84.8, 3239.0], [84.9, 3250.0], [85.0, 3256.0], [85.1, 3260.0], [85.2, 3267.0], [85.3, 3275.0], [85.4, 3290.0], [85.5, 3295.0], [85.6, 3300.0], [85.7, 3325.0], [85.8, 3341.0], [85.9, 3342.0], [86.0, 3350.0], [86.1, 3352.0], [86.2, 3353.0], [86.3, 3366.0], [86.4, 3368.0], [86.5, 3371.0], [86.6, 3384.0], [86.7, 3387.0], [86.8, 3389.0], [86.9, 3439.0], [87.0, 3475.0], [87.1, 3484.0], [87.2, 3505.0], [87.3, 3514.0], [87.4, 3520.0], [87.5, 3529.0], [87.6, 3553.0], [87.7, 3563.0], [87.8, 3564.0], [87.9, 3584.0], [88.0, 3586.0], [88.1, 3597.0], [88.2, 3602.0], [88.3, 3606.0], [88.4, 3607.0], [88.5, 3613.0], [88.6, 3621.0], [88.7, 3622.0], [88.8, 3634.0], [88.9, 3635.0], [89.0, 3647.0], [89.1, 3650.0], [89.2, 3698.0], [89.3, 3709.0], [89.4, 3720.0], [89.5, 3724.0], [89.6, 3730.0], [89.7, 3745.0], [89.8, 3756.0], [89.9, 3764.0], [90.0, 3776.0], [90.1, 3781.0], [90.2, 3784.0], [90.3, 3786.0], [90.4, 3797.0], [90.5, 3823.0], [90.6, 3823.0], [90.7, 3825.0], [90.8, 3831.0], [90.9, 3838.0], [91.0, 3842.0], [91.1, 3850.0], [91.2, 3864.0], [91.3, 3879.0], [91.4, 3880.0], [91.5, 3889.0], [91.6, 3899.0], [91.7, 3906.0], [91.8, 3917.0], [91.9, 3926.0], [92.0, 3931.0], [92.1, 3931.0], [92.2, 3936.0], [92.3, 3941.0], [92.4, 3958.0], [92.5, 3967.0], [92.6, 3976.0], [92.7, 3984.0], [92.8, 3988.0], [92.9, 3988.0], [93.0, 3990.0], [93.1, 3998.0], [93.2, 4002.0], [93.3, 4003.0], [93.4, 4003.0], [93.5, 4008.0], [93.6, 4013.0], [93.7, 4021.0], [93.8, 4022.0], [93.9, 4023.0], [94.0, 4026.0], [94.1, 4027.0], [94.2, 4027.0], [94.3, 4028.0], [94.4, 4034.0], [94.5, 4038.0], [94.6, 4043.0], [94.7, 4048.0], [94.8, 4058.0], [94.9, 4062.0], [95.0, 4065.0], [95.1, 4070.0], [95.2, 4083.0], [95.3, 4095.0], [95.4, 4099.0], [95.5, 4105.0], [95.6, 4114.0], [95.7, 4120.0], [95.8, 4120.0], [95.9, 4121.0], [96.0, 4123.0], [96.1, 4125.0], [96.2, 4150.0], [96.3, 4151.0], [96.4, 4160.0], [96.5, 4163.0], [96.6, 4167.0], [96.7, 4168.0], [96.8, 4186.0], [96.9, 4192.0], [97.0, 4199.0], [97.1, 4202.0], [97.2, 4205.0], [97.3, 4207.0], [97.4, 4222.0], [97.5, 4233.0], [97.6, 4237.0], [97.7, 4241.0], [97.8, 4242.0], [97.9, 4244.0], [98.0, 4246.0], [98.1, 4247.0], [98.2, 4251.0], [98.3, 4253.0], [98.4, 4259.0], [98.5, 4264.0], [98.6, 4266.0], [98.7, 4275.0], [98.8, 4276.0], [98.9, 4283.0], [99.0, 4286.0], [99.1, 4323.0], [99.2, 4346.0], [99.3, 4351.0], [99.4, 4370.0], [99.5, 4421.0], [99.6, 4450.0], [99.7, 4456.0], [99.8, 4467.0], [99.9, 4467.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 445.0, "series": [{"data": [[0.0, 183.0], [600.0, 15.0], [700.0, 5.0], [800.0, 4.0], [900.0, 8.0], [1000.0, 7.0], [1100.0, 11.0], [1300.0, 2.0], [1400.0, 7.0], [1500.0, 10.0], [100.0, 445.0], [1600.0, 1.0], [1700.0, 9.0], [1800.0, 12.0], [1900.0, 3.0], [2200.0, 1.0], [2300.0, 5.0], [2400.0, 9.0], [2500.0, 9.0], [2600.0, 7.0], [2800.0, 9.0], [2700.0, 17.0], [2900.0, 6.0], [3000.0, 5.0], [3100.0, 8.0], [200.0, 18.0], [3200.0, 11.0], [3300.0, 13.0], [3400.0, 3.0], [3500.0, 10.0], [3600.0, 11.0], [3700.0, 12.0], [3800.0, 12.0], [3900.0, 15.0], [4000.0, 23.0], [4100.0, 16.0], [4200.0, 20.0], [4300.0, 4.0], [4400.0, 5.0], [300.0, 9.0], [400.0, 13.0], [500.0, 7.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requêtes \ntemps de réponse <= 500ms"], [1, "Requêtes \ntemps de réponse > 500ms et <= 1 500ms"], [2, "Requêtes \ntemps de réponse > 1 500ms"], [3, "Requêtes en erreur"]], "maxY": 668.0, "series": [{"data": [[0.0, 668.0]], "color": "#9ACD32", "isOverall": false, "label": "Requêtes \ntemps de réponse <= 500ms", "isController": false}, {"data": [[1.0, 66.0]], "color": "yellow", "isOverall": false, "label": "Requêtes \ntemps de réponse > 500ms et <= 1 500ms", "isController": false}, {"data": [[2.0, 266.0]], "color": "orange", "isOverall": false, "label": "Requêtes \ntemps de réponse > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requêtes en erreur", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 76.553, "minX": 1.7436153E12, "maxY": 76.553, "series": [{"data": [[1.7436153E12, 76.553]], "isOverall": false, "label": "TestCreateUserSet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7436153E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 83.0, "minX": 1.0, "maxY": 4246.0, "series": [{"data": [[2.0, 100.0], [3.0, 85.0], [4.0, 83.0], [8.0, 821.6666666666667], [9.0, 99.0], [10.0, 1843.6], [11.0, 1844.5], [12.0, 1102.25], [14.0, 997.0], [15.0, 1891.5000000000002], [16.0, 1328.5555555555557], [17.0, 1075.375], [18.0, 2256.0], [19.0, 1303.6923076923074], [20.0, 1029.9166666666667], [21.0, 564.625], [22.0, 949.142857142857], [23.0, 575.8947368421051], [24.0, 528.5], [25.0, 583.2142857142858], [26.0, 744.4799999999999], [27.0, 252.23076923076917], [28.0, 376.7058823529411], [29.0, 550.0000000000001], [30.0, 333.0], [31.0, 164.28571428571428], [33.0, 271.5199999999999], [32.0, 457.65000000000003], [35.0, 382.79999999999995], [34.0, 336.2173913043478], [37.0, 578.8421052631579], [36.0, 133.39285714285714], [38.0, 292.7857142857143], [39.0, 103.71428571428571], [41.0, 645.0714285714284], [40.0, 192.11111111111111], [43.0, 362.5625], [42.0, 842.3000000000001], [45.0, 343.0], [44.0, 541.75], [46.0, 564.0909090909091], [47.0, 206.54545454545453], [49.0, 580.1250000000001], [48.0, 766.1111111111111], [51.0, 133.5], [50.0, 165.4], [52.0, 883.0909090909091], [53.0, 192.28571428571428], [55.0, 1090.5], [54.0, 539.1666666666666], [57.0, 974.8333333333333], [56.0, 539.0], [59.0, 538.1666666666666], [58.0, 821.5], [61.0, 1428.1666666666667], [60.0, 458.5], [62.0, 374.58333333333337], [63.0, 359.1666666666667], [65.0, 468.19999999999993], [64.0, 979.0], [67.0, 113.00000000000001], [66.0, 332.5], [71.0, 1750.4], [70.0, 1514.5], [68.0, 559.9], [69.0, 125.18181818181817], [74.0, 123.33333333333334], [72.0, 120.0], [75.0, 207.0], [79.0, 1442.5], [78.0, 2330.0], [77.0, 426.66666666666663], [76.0, 362.75], [83.0, 3730.3333333333335], [81.0, 1449.5], [87.0, 4115.0], [85.0, 4192.5], [91.0, 3967.0], [90.0, 3750.0], [89.0, 4168.0], [95.0, 2579.0], [94.0, 2523.0], [93.0, 1700.0], [98.0, 4246.0], [96.0, 3764.0], [103.0, 2577.0], [102.0, 3352.0], [100.0, 3030.5], [107.0, 3797.0], [106.0, 4237.0], [105.0, 3342.0], [104.0, 3760.0], [109.0, 2133.5], [115.0, 4207.0], [112.0, 3480.3333333333335], [119.0, 3475.0], [118.0, 2398.0], [117.0, 3638.0], [116.0, 4058.0], [123.0, 2552.0], [122.0, 2686.0], [127.0, 3756.0], [125.0, 3295.0], [124.0, 3099.0], [135.0, 3223.5], [134.0, 3151.0], [133.0, 4163.0], [131.0, 2377.0], [130.0, 4186.0], [129.0, 2561.0], [128.0, 2510.0], [143.0, 3889.0], [142.0, 3067.5], [140.0, 3756.0], [139.0, 3518.0], [137.0, 4167.0], [136.0, 4027.0], [150.0, 4043.0], [148.0, 2525.6666666666665], [145.0, 3883.0], [157.0, 3602.0], [155.0, 4120.0], [154.0, 3709.0], [153.0, 2845.5], [152.0, 3776.5], [167.0, 3389.0], [166.0, 3055.6666666666665], [163.0, 2443.0], [161.0, 2853.5], [160.0, 3458.3333333333335], [174.0, 2456.0], [172.0, 2614.5], [170.0, 2548.0], [169.0, 3926.0], [168.0, 3724.0], [183.0, 3958.0], [181.0, 691.0], [180.0, 2544.0], [178.0, 2643.0], [177.0, 1583.0], [176.0, 3880.0], [191.0, 2571.0], [189.0, 2058.5], [188.0, 3196.0], [185.0, 3647.0], [184.0, 2822.0], [199.0, 4070.0], [198.0, 2719.5], [197.0, 2686.5], [194.0, 2765.0], [193.0, 4099.0], [206.0, 3825.0], [205.0, 3086.0], [203.0, 3823.0], [202.0, 3119.0], [201.0, 2761.5], [211.0, 2730.0], [210.0, 3864.0], [209.0, 2499.5], [208.0, 3607.0], [223.0, 2055.0], [221.0, 2361.0], [218.0, 1470.0], [217.0, 2480.5], [231.0, 2998.0], [230.0, 3941.0], [228.0, 4034.0], [227.0, 4018.0], [225.0, 3190.0], [239.0, 3879.0], [238.0, 3373.0], [237.0, 3191.0], [234.0, 2386.5], [247.0, 1910.0], [246.0, 2952.0], [244.0, 592.0], [243.0, 3514.0], [242.0, 3988.0], [240.0, 2104.0], [255.0, 3892.0], [253.0, 3070.3333333333335], [251.0, 3976.0], [250.0, 3214.0], [249.0, 1899.5], [270.0, 3931.0], [271.0, 137.0], [269.0, 1503.6666666666665], [268.0, 145.0], [266.0, 4002.0], [265.0, 139.0], [264.0, 2944.0], [261.0, 141.0], [259.0, 173.0], [258.0, 2365.0], [257.0, 87.0], [260.0, 160.0], [284.0, 192.0], [281.0, 539.1], [279.0, 993.2500000000001], [276.0, 838.0], [275.0, 113.83333333333333], [274.0, 2958.0], [273.0, 2878.0], [272.0, 124.0], [282.0, 2008.5], [280.0, 108.0], [287.0, 108.0], [286.0, 109.0], [285.0, 108.0], [277.0, 3167.0], [289.0, 209.0], [288.0, 100.0], [1.0, 137.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}, {"data": [[76.553, 1016.2199999999993]], "isOverall": false, "label": "Requête HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 289.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3666.6666666666665, "minX": 1.7436153E12, "maxY": 18523.283333333333, "series": [{"data": [[1.7436153E12, 18523.283333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7436153E12, 3666.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7436153E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1016.2199999999993, "minX": 1.7436153E12, "maxY": 1016.2199999999993, "series": [{"data": [[1.7436153E12, 1016.2199999999993]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7436153E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 894.4609999999991, "minX": 1.7436153E12, "maxY": 894.4609999999991, "series": [{"data": [[1.7436153E12, 894.4609999999991]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7436153E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 780.2350000000002, "minX": 1.7436153E12, "maxY": 780.2350000000002, "series": [{"data": [[1.7436153E12, 780.2350000000002]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7436153E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 70.0, "minX": 1.7436153E12, "maxY": 4467.0, "series": [{"data": [[1.7436153E12, 4467.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7436153E12, 70.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7436153E12, 3774.7999999999997]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7436153E12, 4285.97]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7436153E12, 138.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7436153E12, 4064.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7436153E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 100.0, "minX": 23.0, "maxY": 3084.0, "series": [{"data": [[144.0, 119.0], [329.0, 3084.0], [185.0, 134.0], [23.0, 100.0], [101.0, 104.0], [102.0, 117.0], [116.0, 130.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 329.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 100.0, "minX": 23.0, "maxY": 2694.0, "series": [{"data": [[144.0, 119.0], [329.0, 2694.0], [185.0, 134.0], [23.0, 100.0], [101.0, 104.0], [102.0, 117.0], [116.0, 130.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 329.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7436153E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7436153E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7436153E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7436153E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7436153E12, 16.666666666666668]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7436153E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7436153E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7436153E12, 16.666666666666668]], "isOverall": false, "label": "Requête HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7436153E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7436153E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7436153E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7436153E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

