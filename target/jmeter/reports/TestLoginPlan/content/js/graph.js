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
        data: {"result": {"minY": 74.0, "minX": 0.0, "maxY": 3045.0, "series": [{"data": [[0.0, 74.0], [0.1, 75.0], [0.2, 76.0], [0.3, 76.0], [0.4, 76.0], [0.5, 77.0], [0.6, 78.0], [0.7, 78.0], [0.8, 79.0], [0.9, 79.0], [1.0, 79.0], [1.1, 79.0], [1.2, 79.0], [1.3, 80.0], [1.4, 81.0], [1.5, 81.0], [1.6, 81.0], [1.7, 82.0], [1.8, 82.0], [1.9, 83.0], [2.0, 83.0], [2.1, 83.0], [2.2, 83.0], [2.3, 83.0], [2.4, 83.0], [2.5, 84.0], [2.6, 84.0], [2.7, 84.0], [2.8, 84.0], [2.9, 84.0], [3.0, 84.0], [3.1, 84.0], [3.2, 85.0], [3.3, 85.0], [3.4, 85.0], [3.5, 85.0], [3.6, 85.0], [3.7, 85.0], [3.8, 85.0], [3.9, 85.0], [4.0, 86.0], [4.1, 86.0], [4.2, 86.0], [4.3, 86.0], [4.4, 86.0], [4.5, 86.0], [4.6, 86.0], [4.7, 87.0], [4.8, 87.0], [4.9, 88.0], [5.0, 88.0], [5.1, 88.0], [5.2, 88.0], [5.3, 88.0], [5.4, 88.0], [5.5, 88.0], [5.6, 88.0], [5.7, 89.0], [5.8, 89.0], [5.9, 89.0], [6.0, 89.0], [6.1, 89.0], [6.2, 90.0], [6.3, 90.0], [6.4, 90.0], [6.5, 90.0], [6.6, 90.0], [6.7, 90.0], [6.8, 90.0], [6.9, 90.0], [7.0, 90.0], [7.1, 91.0], [7.2, 91.0], [7.3, 91.0], [7.4, 91.0], [7.5, 91.0], [7.6, 91.0], [7.7, 91.0], [7.8, 92.0], [7.9, 92.0], [8.0, 92.0], [8.1, 92.0], [8.2, 92.0], [8.3, 92.0], [8.4, 92.0], [8.5, 92.0], [8.6, 92.0], [8.7, 92.0], [8.8, 93.0], [8.9, 93.0], [9.0, 93.0], [9.1, 93.0], [9.2, 93.0], [9.3, 93.0], [9.4, 93.0], [9.5, 93.0], [9.6, 94.0], [9.7, 94.0], [9.8, 94.0], [9.9, 94.0], [10.0, 94.0], [10.1, 94.0], [10.2, 94.0], [10.3, 94.0], [10.4, 95.0], [10.5, 95.0], [10.6, 95.0], [10.7, 95.0], [10.8, 95.0], [10.9, 95.0], [11.0, 95.0], [11.1, 95.0], [11.2, 95.0], [11.3, 95.0], [11.4, 96.0], [11.5, 96.0], [11.6, 96.0], [11.7, 96.0], [11.8, 96.0], [11.9, 96.0], [12.0, 96.0], [12.1, 96.0], [12.2, 96.0], [12.3, 96.0], [12.4, 96.0], [12.5, 96.0], [12.6, 97.0], [12.7, 97.0], [12.8, 97.0], [12.9, 97.0], [13.0, 97.0], [13.1, 97.0], [13.2, 97.0], [13.3, 97.0], [13.4, 97.0], [13.5, 97.0], [13.6, 97.0], [13.7, 97.0], [13.8, 98.0], [13.9, 98.0], [14.0, 98.0], [14.1, 98.0], [14.2, 98.0], [14.3, 98.0], [14.4, 98.0], [14.5, 98.0], [14.6, 98.0], [14.7, 98.0], [14.8, 98.0], [14.9, 98.0], [15.0, 98.0], [15.1, 99.0], [15.2, 99.0], [15.3, 99.0], [15.4, 99.0], [15.5, 99.0], [15.6, 99.0], [15.7, 99.0], [15.8, 99.0], [15.9, 99.0], [16.0, 99.0], [16.1, 99.0], [16.2, 99.0], [16.3, 99.0], [16.4, 99.0], [16.5, 99.0], [16.6, 99.0], [16.7, 99.0], [16.8, 100.0], [16.9, 100.0], [17.0, 100.0], [17.1, 100.0], [17.2, 100.0], [17.3, 100.0], [17.4, 100.0], [17.5, 100.0], [17.6, 100.0], [17.7, 100.0], [17.8, 100.0], [17.9, 100.0], [18.0, 100.0], [18.1, 100.0], [18.2, 101.0], [18.3, 101.0], [18.4, 101.0], [18.5, 101.0], [18.6, 101.0], [18.7, 101.0], [18.8, 101.0], [18.9, 101.0], [19.0, 101.0], [19.1, 101.0], [19.2, 101.0], [19.3, 101.0], [19.4, 101.0], [19.5, 101.0], [19.6, 101.0], [19.7, 101.0], [19.8, 101.0], [19.9, 101.0], [20.0, 101.0], [20.1, 101.0], [20.2, 102.0], [20.3, 102.0], [20.4, 102.0], [20.5, 102.0], [20.6, 102.0], [20.7, 102.0], [20.8, 102.0], [20.9, 102.0], [21.0, 102.0], [21.1, 102.0], [21.2, 102.0], [21.3, 102.0], [21.4, 102.0], [21.5, 103.0], [21.6, 103.0], [21.7, 103.0], [21.8, 103.0], [21.9, 103.0], [22.0, 103.0], [22.1, 103.0], [22.2, 103.0], [22.3, 103.0], [22.4, 103.0], [22.5, 103.0], [22.6, 103.0], [22.7, 103.0], [22.8, 103.0], [22.9, 103.0], [23.0, 103.0], [23.1, 103.0], [23.2, 103.0], [23.3, 104.0], [23.4, 104.0], [23.5, 104.0], [23.6, 104.0], [23.7, 104.0], [23.8, 104.0], [23.9, 104.0], [24.0, 104.0], [24.1, 104.0], [24.2, 105.0], [24.3, 105.0], [24.4, 105.0], [24.5, 105.0], [24.6, 105.0], [24.7, 105.0], [24.8, 105.0], [24.9, 106.0], [25.0, 106.0], [25.1, 106.0], [25.2, 106.0], [25.3, 106.0], [25.4, 106.0], [25.5, 106.0], [25.6, 106.0], [25.7, 106.0], [25.8, 106.0], [25.9, 106.0], [26.0, 106.0], [26.1, 106.0], [26.2, 107.0], [26.3, 107.0], [26.4, 107.0], [26.5, 107.0], [26.6, 107.0], [26.7, 107.0], [26.8, 107.0], [26.9, 107.0], [27.0, 107.0], [27.1, 107.0], [27.2, 107.0], [27.3, 107.0], [27.4, 108.0], [27.5, 108.0], [27.6, 108.0], [27.7, 108.0], [27.8, 108.0], [27.9, 108.0], [28.0, 108.0], [28.1, 108.0], [28.2, 108.0], [28.3, 108.0], [28.4, 108.0], [28.5, 108.0], [28.6, 109.0], [28.7, 109.0], [28.8, 109.0], [28.9, 109.0], [29.0, 109.0], [29.1, 109.0], [29.2, 109.0], [29.3, 109.0], [29.4, 109.0], [29.5, 109.0], [29.6, 109.0], [29.7, 109.0], [29.8, 109.0], [29.9, 109.0], [30.0, 109.0], [30.1, 110.0], [30.2, 110.0], [30.3, 110.0], [30.4, 110.0], [30.5, 110.0], [30.6, 110.0], [30.7, 111.0], [30.8, 111.0], [30.9, 111.0], [31.0, 111.0], [31.1, 111.0], [31.2, 111.0], [31.3, 111.0], [31.4, 111.0], [31.5, 112.0], [31.6, 112.0], [31.7, 112.0], [31.8, 112.0], [31.9, 112.0], [32.0, 112.0], [32.1, 112.0], [32.2, 112.0], [32.3, 112.0], [32.4, 112.0], [32.5, 112.0], [32.6, 112.0], [32.7, 112.0], [32.8, 112.0], [32.9, 113.0], [33.0, 113.0], [33.1, 113.0], [33.2, 113.0], [33.3, 113.0], [33.4, 113.0], [33.5, 113.0], [33.6, 113.0], [33.7, 113.0], [33.8, 113.0], [33.9, 113.0], [34.0, 113.0], [34.1, 113.0], [34.2, 113.0], [34.3, 113.0], [34.4, 113.0], [34.5, 114.0], [34.6, 114.0], [34.7, 114.0], [34.8, 114.0], [34.9, 114.0], [35.0, 114.0], [35.1, 114.0], [35.2, 114.0], [35.3, 114.0], [35.4, 114.0], [35.5, 114.0], [35.6, 114.0], [35.7, 114.0], [35.8, 114.0], [35.9, 115.0], [36.0, 115.0], [36.1, 115.0], [36.2, 115.0], [36.3, 115.0], [36.4, 115.0], [36.5, 115.0], [36.6, 115.0], [36.7, 115.0], [36.8, 115.0], [36.9, 115.0], [37.0, 115.0], [37.1, 115.0], [37.2, 115.0], [37.3, 115.0], [37.4, 116.0], [37.5, 116.0], [37.6, 116.0], [37.7, 116.0], [37.8, 116.0], [37.9, 116.0], [38.0, 116.0], [38.1, 116.0], [38.2, 116.0], [38.3, 117.0], [38.4, 117.0], [38.5, 117.0], [38.6, 117.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 117.0], [39.1, 117.0], [39.2, 117.0], [39.3, 117.0], [39.4, 118.0], [39.5, 118.0], [39.6, 118.0], [39.7, 118.0], [39.8, 118.0], [39.9, 118.0], [40.0, 118.0], [40.1, 118.0], [40.2, 118.0], [40.3, 118.0], [40.4, 118.0], [40.5, 118.0], [40.6, 118.0], [40.7, 118.0], [40.8, 118.0], [40.9, 118.0], [41.0, 118.0], [41.1, 119.0], [41.2, 119.0], [41.3, 119.0], [41.4, 119.0], [41.5, 119.0], [41.6, 119.0], [41.7, 119.0], [41.8, 119.0], [41.9, 120.0], [42.0, 120.0], [42.1, 120.0], [42.2, 120.0], [42.3, 120.0], [42.4, 120.0], [42.5, 120.0], [42.6, 120.0], [42.7, 120.0], [42.8, 120.0], [42.9, 120.0], [43.0, 121.0], [43.1, 121.0], [43.2, 121.0], [43.3, 121.0], [43.4, 121.0], [43.5, 121.0], [43.6, 121.0], [43.7, 121.0], [43.8, 121.0], [43.9, 122.0], [44.0, 122.0], [44.1, 122.0], [44.2, 122.0], [44.3, 122.0], [44.4, 122.0], [44.5, 122.0], [44.6, 122.0], [44.7, 122.0], [44.8, 122.0], [44.9, 122.0], [45.0, 123.0], [45.1, 123.0], [45.2, 123.0], [45.3, 123.0], [45.4, 123.0], [45.5, 123.0], [45.6, 123.0], [45.7, 123.0], [45.8, 123.0], [45.9, 123.0], [46.0, 123.0], [46.1, 123.0], [46.2, 124.0], [46.3, 124.0], [46.4, 124.0], [46.5, 124.0], [46.6, 124.0], [46.7, 124.0], [46.8, 124.0], [46.9, 124.0], [47.0, 124.0], [47.1, 124.0], [47.2, 125.0], [47.3, 125.0], [47.4, 125.0], [47.5, 125.0], [47.6, 125.0], [47.7, 125.0], [47.8, 125.0], [47.9, 125.0], [48.0, 125.0], [48.1, 125.0], [48.2, 126.0], [48.3, 126.0], [48.4, 126.0], [48.5, 126.0], [48.6, 126.0], [48.7, 126.0], [48.8, 126.0], [48.9, 127.0], [49.0, 127.0], [49.1, 127.0], [49.2, 127.0], [49.3, 127.0], [49.4, 127.0], [49.5, 128.0], [49.6, 128.0], [49.7, 128.0], [49.8, 128.0], [49.9, 128.0], [50.0, 128.0], [50.1, 128.0], [50.2, 129.0], [50.3, 129.0], [50.4, 129.0], [50.5, 129.0], [50.6, 129.0], [50.7, 130.0], [50.8, 130.0], [50.9, 130.0], [51.0, 130.0], [51.1, 130.0], [51.2, 130.0], [51.3, 130.0], [51.4, 131.0], [51.5, 131.0], [51.6, 131.0], [51.7, 132.0], [51.8, 132.0], [51.9, 132.0], [52.0, 132.0], [52.1, 133.0], [52.2, 133.0], [52.3, 133.0], [52.4, 134.0], [52.5, 134.0], [52.6, 135.0], [52.7, 135.0], [52.8, 135.0], [52.9, 135.0], [53.0, 135.0], [53.1, 135.0], [53.2, 135.0], [53.3, 136.0], [53.4, 136.0], [53.5, 136.0], [53.6, 137.0], [53.7, 137.0], [53.8, 137.0], [53.9, 137.0], [54.0, 137.0], [54.1, 137.0], [54.2, 137.0], [54.3, 137.0], [54.4, 138.0], [54.5, 138.0], [54.6, 139.0], [54.7, 139.0], [54.8, 139.0], [54.9, 139.0], [55.0, 139.0], [55.1, 139.0], [55.2, 140.0], [55.3, 140.0], [55.4, 140.0], [55.5, 140.0], [55.6, 141.0], [55.7, 141.0], [55.8, 141.0], [55.9, 141.0], [56.0, 141.0], [56.1, 142.0], [56.2, 142.0], [56.3, 142.0], [56.4, 142.0], [56.5, 142.0], [56.6, 143.0], [56.7, 143.0], [56.8, 143.0], [56.9, 143.0], [57.0, 143.0], [57.1, 144.0], [57.2, 144.0], [57.3, 144.0], [57.4, 144.0], [57.5, 144.0], [57.6, 145.0], [57.7, 145.0], [57.8, 145.0], [57.9, 145.0], [58.0, 145.0], [58.1, 145.0], [58.2, 146.0], [58.3, 146.0], [58.4, 146.0], [58.5, 147.0], [58.6, 147.0], [58.7, 148.0], [58.8, 148.0], [58.9, 148.0], [59.0, 149.0], [59.1, 149.0], [59.2, 149.0], [59.3, 149.0], [59.4, 150.0], [59.5, 150.0], [59.6, 151.0], [59.7, 151.0], [59.8, 151.0], [59.9, 152.0], [60.0, 154.0], [60.1, 156.0], [60.2, 157.0], [60.3, 158.0], [60.4, 158.0], [60.5, 159.0], [60.6, 159.0], [60.7, 159.0], [60.8, 159.0], [60.9, 159.0], [61.0, 160.0], [61.1, 161.0], [61.2, 161.0], [61.3, 162.0], [61.4, 162.0], [61.5, 163.0], [61.6, 163.0], [61.7, 164.0], [61.8, 164.0], [61.9, 164.0], [62.0, 170.0], [62.1, 170.0], [62.2, 171.0], [62.3, 172.0], [62.4, 175.0], [62.5, 175.0], [62.6, 176.0], [62.7, 177.0], [62.8, 177.0], [62.9, 178.0], [63.0, 179.0], [63.1, 180.0], [63.2, 180.0], [63.3, 180.0], [63.4, 182.0], [63.5, 182.0], [63.6, 186.0], [63.7, 194.0], [63.8, 196.0], [63.9, 217.0], [64.0, 228.0], [64.1, 229.0], [64.2, 230.0], [64.3, 231.0], [64.4, 233.0], [64.5, 235.0], [64.6, 235.0], [64.7, 236.0], [64.8, 236.0], [64.9, 236.0], [65.0, 237.0], [65.1, 240.0], [65.2, 240.0], [65.3, 240.0], [65.4, 244.0], [65.5, 248.0], [65.6, 250.0], [65.7, 250.0], [65.8, 251.0], [65.9, 260.0], [66.0, 262.0], [66.1, 268.0], [66.2, 285.0], [66.3, 287.0], [66.4, 288.0], [66.5, 289.0], [66.6, 296.0], [66.7, 323.0], [66.8, 372.0], [66.9, 381.0], [67.0, 382.0], [67.1, 387.0], [67.2, 403.0], [67.3, 411.0], [67.4, 413.0], [67.5, 414.0], [67.6, 416.0], [67.7, 425.0], [67.8, 431.0], [67.9, 440.0], [68.0, 452.0], [68.1, 462.0], [68.2, 468.0], [68.3, 469.0], [68.4, 471.0], [68.5, 477.0], [68.6, 486.0], [68.7, 488.0], [68.8, 491.0], [68.9, 492.0], [69.0, 499.0], [69.1, 499.0], [69.2, 503.0], [69.3, 503.0], [69.4, 504.0], [69.5, 524.0], [69.6, 530.0], [69.7, 532.0], [69.8, 534.0], [69.9, 534.0], [70.0, 534.0], [70.1, 536.0], [70.2, 559.0], [70.3, 564.0], [70.4, 570.0], [70.5, 576.0], [70.6, 576.0], [70.7, 587.0], [70.8, 588.0], [70.9, 606.0], [71.0, 607.0], [71.1, 628.0], [71.2, 629.0], [71.3, 636.0], [71.4, 638.0], [71.5, 657.0], [71.6, 658.0], [71.7, 667.0], [71.8, 671.0], [71.9, 681.0], [72.0, 681.0], [72.1, 682.0], [72.2, 684.0], [72.3, 686.0], [72.4, 689.0], [72.5, 694.0], [72.6, 705.0], [72.7, 707.0], [72.8, 711.0], [72.9, 720.0], [73.0, 722.0], [73.1, 722.0], [73.2, 723.0], [73.3, 726.0], [73.4, 727.0], [73.5, 733.0], [73.6, 740.0], [73.7, 761.0], [73.8, 764.0], [73.9, 764.0], [74.0, 775.0], [74.1, 781.0], [74.2, 787.0], [74.3, 788.0], [74.4, 797.0], [74.5, 812.0], [74.6, 815.0], [74.7, 816.0], [74.8, 816.0], [74.9, 826.0], [75.0, 827.0], [75.1, 827.0], [75.2, 843.0], [75.3, 847.0], [75.4, 852.0], [75.5, 863.0], [75.6, 864.0], [75.7, 882.0], [75.8, 894.0], [75.9, 897.0], [76.0, 917.0], [76.1, 922.0], [76.2, 930.0], [76.3, 936.0], [76.4, 939.0], [76.5, 939.0], [76.6, 944.0], [76.7, 952.0], [76.8, 959.0], [76.9, 963.0], [77.0, 967.0], [77.1, 978.0], [77.2, 978.0], [77.3, 989.0], [77.4, 994.0], [77.5, 1006.0], [77.6, 1020.0], [77.7, 1022.0], [77.8, 1024.0], [77.9, 1028.0], [78.0, 1029.0], [78.1, 1034.0], [78.2, 1041.0], [78.3, 1046.0], [78.4, 1050.0], [78.5, 1053.0], [78.6, 1056.0], [78.7, 1073.0], [78.8, 1074.0], [78.9, 1078.0], [79.0, 1080.0], [79.1, 1086.0], [79.2, 1097.0], [79.3, 1099.0], [79.4, 1099.0], [79.5, 1104.0], [79.6, 1112.0], [79.7, 1118.0], [79.8, 1131.0], [79.9, 1155.0], [80.0, 1181.0], [80.1, 1182.0], [80.2, 1194.0], [80.3, 1197.0], [80.4, 1200.0], [80.5, 1201.0], [80.6, 1207.0], [80.7, 1214.0], [80.8, 1216.0], [80.9, 1219.0], [81.0, 1224.0], [81.1, 1230.0], [81.2, 1232.0], [81.3, 1234.0], [81.4, 1241.0], [81.5, 1243.0], [81.6, 1246.0], [81.7, 1277.0], [81.8, 1281.0], [81.9, 1294.0], [82.0, 1303.0], [82.1, 1316.0], [82.2, 1327.0], [82.3, 1329.0], [82.4, 1329.0], [82.5, 1329.0], [82.6, 1329.0], [82.7, 1335.0], [82.8, 1336.0], [82.9, 1356.0], [83.0, 1362.0], [83.1, 1365.0], [83.2, 1367.0], [83.3, 1370.0], [83.4, 1370.0], [83.5, 1382.0], [83.6, 1391.0], [83.7, 1395.0], [83.8, 1406.0], [83.9, 1418.0], [84.0, 1418.0], [84.1, 1418.0], [84.2, 1430.0], [84.3, 1431.0], [84.4, 1433.0], [84.5, 1435.0], [84.6, 1436.0], [84.7, 1457.0], [84.8, 1461.0], [84.9, 1477.0], [85.0, 1483.0], [85.1, 1483.0], [85.2, 1488.0], [85.3, 1489.0], [85.4, 1490.0], [85.5, 1494.0], [85.6, 1494.0], [85.7, 1495.0], [85.8, 1496.0], [85.9, 1498.0], [86.0, 1498.0], [86.1, 1506.0], [86.2, 1510.0], [86.3, 1512.0], [86.4, 1513.0], [86.5, 1515.0], [86.6, 1515.0], [86.7, 1515.0], [86.8, 1517.0], [86.9, 1520.0], [87.0, 1520.0], [87.1, 1521.0], [87.2, 1521.0], [87.3, 1522.0], [87.4, 1522.0], [87.5, 1525.0], [87.6, 1526.0], [87.7, 1528.0], [87.8, 1530.0], [87.9, 1536.0], [88.0, 1541.0], [88.1, 1541.0], [88.2, 1547.0], [88.3, 1556.0], [88.4, 1560.0], [88.5, 1564.0], [88.6, 1566.0], [88.7, 1569.0], [88.8, 1570.0], [88.9, 1573.0], [89.0, 1598.0], [89.1, 1604.0], [89.2, 1624.0], [89.3, 1629.0], [89.4, 1640.0], [89.5, 1646.0], [89.6, 1648.0], [89.7, 1653.0], [89.8, 1661.0], [89.9, 1682.0], [90.0, 1695.0], [90.1, 1703.0], [90.2, 1704.0], [90.3, 1707.0], [90.4, 1712.0], [90.5, 1724.0], [90.6, 1741.0], [90.7, 1748.0], [90.8, 1752.0], [90.9, 1758.0], [91.0, 1781.0], [91.1, 1783.0], [91.2, 1792.0], [91.3, 1822.0], [91.4, 1822.0], [91.5, 1823.0], [91.6, 1841.0], [91.7, 1864.0], [91.8, 1871.0], [91.9, 1878.0], [92.0, 1901.0], [92.1, 1907.0], [92.2, 1925.0], [92.3, 1937.0], [92.4, 1939.0], [92.5, 1977.0], [92.6, 1992.0], [92.7, 2079.0], [92.8, 2114.0], [92.9, 2137.0], [93.0, 2164.0], [93.1, 2197.0], [93.2, 2203.0], [93.3, 2304.0], [93.4, 2544.0], [93.5, 2579.0], [93.6, 2586.0], [93.7, 2599.0], [93.8, 2688.0], [93.9, 2775.0], [94.0, 2806.0], [94.1, 2812.0], [94.2, 2820.0], [94.3, 2834.0], [94.4, 2838.0], [94.5, 2838.0], [94.6, 2858.0], [94.7, 2865.0], [94.8, 2874.0], [94.9, 2885.0], [95.0, 2887.0], [95.1, 2890.0], [95.2, 2893.0], [95.3, 2894.0], [95.4, 2895.0], [95.5, 2901.0], [95.6, 2902.0], [95.7, 2903.0], [95.8, 2907.0], [95.9, 2909.0], [96.0, 2914.0], [96.1, 2915.0], [96.2, 2915.0], [96.3, 2916.0], [96.4, 2916.0], [96.5, 2917.0], [96.6, 2920.0], [96.7, 2926.0], [96.8, 2936.0], [96.9, 2938.0], [97.0, 2938.0], [97.1, 2940.0], [97.2, 2940.0], [97.3, 2940.0], [97.4, 2940.0], [97.5, 2942.0], [97.6, 2947.0], [97.7, 2951.0], [97.8, 2952.0], [97.9, 2957.0], [98.0, 2961.0], [98.1, 2963.0], [98.2, 2964.0], [98.3, 2965.0], [98.4, 2968.0], [98.5, 2968.0], [98.6, 2972.0], [98.7, 2974.0], [98.8, 2977.0], [98.9, 2980.0], [99.0, 2982.0], [99.1, 2990.0], [99.2, 2995.0], [99.3, 2996.0], [99.4, 2998.0], [99.5, 3002.0], [99.6, 3006.0], [99.7, 3025.0], [99.8, 3029.0], [99.9, 3045.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 470.0, "series": [{"data": [[0.0, 168.0], [600.0, 17.0], [700.0, 19.0], [800.0, 15.0], [900.0, 15.0], [1000.0, 20.0], [1100.0, 9.0], [1200.0, 16.0], [1300.0, 18.0], [1400.0, 23.0], [1500.0, 30.0], [1600.0, 10.0], [100.0, 470.0], [1700.0, 12.0], [1800.0, 7.0], [1900.0, 7.0], [2000.0, 1.0], [2100.0, 4.0], [2300.0, 1.0], [2200.0, 1.0], [2500.0, 4.0], [2600.0, 1.0], [2800.0, 15.0], [2700.0, 1.0], [2900.0, 40.0], [3000.0, 5.0], [200.0, 29.0], [300.0, 5.0], [400.0, 20.0], [500.0, 17.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 139.0, "minX": 0.0, "ticks": [[0, "Requêtes \ntemps de réponse <= 500ms"], [1, "Requêtes \ntemps de réponse > 500ms et <= 1 500ms"], [2, "Requêtes \ntemps de réponse > 1 500ms"], [3, "Requêtes en erreur"]], "maxY": 692.0, "series": [{"data": [[0.0, 692.0]], "color": "#9ACD32", "isOverall": false, "label": "Requêtes \ntemps de réponse <= 500ms", "isController": false}, {"data": [[1.0, 169.0]], "color": "yellow", "isOverall": false, "label": "Requêtes \ntemps de réponse > 500ms et <= 1 500ms", "isController": false}, {"data": [[2.0, 139.0]], "color": "orange", "isOverall": false, "label": "Requêtes \ntemps de réponse > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requêtes en erreur", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 44.38699999999995, "minX": 1.74361536E12, "maxY": 44.38699999999995, "series": [{"data": [[1.74361536E12, 44.38699999999995]], "isOverall": false, "label": "LoginSetTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361536E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 98.44444444444443, "minX": 1.0, "maxY": 2996.0, "series": [{"data": [[2.0, 103.0], [3.0, 1174.25], [4.0, 128.0], [5.0, 107.5], [6.0, 1105.6], [7.0, 99.0], [8.0, 325.0], [9.0, 477.0], [10.0, 303.50000000000006], [11.0, 98.44444444444443], [12.0, 174.1875], [13.0, 102.0], [14.0, 589.4444444444446], [15.0, 107.28571428571429], [16.0, 440.1304347826087], [17.0, 110.71428571428572], [18.0, 118.9047619047619], [19.0, 139.68421052631578], [20.0, 158.0], [21.0, 265.29411764705884], [22.0, 431.75862068965523], [23.0, 473.1818181818182], [24.0, 279.00000000000006], [25.0, 376.5416666666667], [26.0, 591.6296296296297], [27.0, 228.90909090909093], [28.0, 317.0714285714286], [29.0, 248.6153846153847], [30.0, 171.70833333333331], [31.0, 153.78787878787878], [33.0, 513.4583333333335], [32.0, 205.14999999999998], [35.0, 661.8571428571429], [34.0, 366.35294117647067], [36.0, 601.2307692307693], [37.0, 537.75], [38.0, 593.5], [39.0, 346.22222222222223], [40.0, 555.2777777777779], [41.0, 464.1428571428571], [42.0, 1020.1111111111111], [43.0, 534.8333333333333], [44.0, 352.4], [45.0, 106.4], [47.0, 599.1999999999999], [46.0, 867.4545454545457], [49.0, 321.7692307692307], [48.0, 307.1764705882353], [51.0, 1180.7142857142856], [50.0, 323.22222222222223], [53.0, 344.9], [52.0, 314.99999999999994], [55.0, 313.09999999999997], [54.0, 318.6666666666667], [57.0, 517.9166666666667], [56.0, 462.0], [59.0, 995.3333333333333], [58.0, 788.9999999999999], [61.0, 1057.4], [60.0, 388.5], [63.0, 1104.2], [62.0, 269.5], [67.0, 2996.0], [66.0, 231.0], [65.0, 511.5], [64.0, 512.0], [71.0, 1517.0], [68.0, 1816.25], [70.0, 564.0], [69.0, 573.0], [75.0, 1244.6666666666667], [72.0, 1344.6], [74.0, 499.0], [73.0, 504.0], [78.0, 778.0], [79.0, 488.0], [76.0, 491.0], [83.0, 1232.5], [82.0, 2219.5], [80.0, 1016.6666666666667], [81.0, 559.0], [85.0, 1598.3333333333335], [84.0, 1689.0], [87.0, 403.0], [86.0, 416.0], [90.0, 1701.1666666666667], [88.0, 1660.5], [91.0, 411.0], [89.0, 372.0], [95.0, 655.0], [93.0, 1017.5], [94.0, 268.0], [92.0, 288.0], [99.0, 1587.5], [96.0, 2248.25], [98.0, 230.5], [103.0, 751.0], [102.0, 2918.6666666666665], [100.0, 1779.75], [106.0, 1567.5], [104.0, 235.0], [111.0, 989.0], [109.0, 2452.3333333333335], [108.0, 2938.0], [115.0, 1116.0], [114.0, 1929.3333333333333], [119.0, 1363.0], [118.0, 894.0], [123.0, 1483.0], [122.0, 1234.0], [121.0, 2137.0], [120.0, 1034.0], [126.0, 1833.0], [125.0, 2079.5], [134.0, 1457.0], [133.0, 1329.0], [132.0, 2938.0], [130.0, 2075.0], [128.0, 1118.0], [139.0, 2730.0], [138.0, 1441.5], [136.0, 2051.0], [151.0, 1483.0], [150.0, 1477.0], [147.0, 1749.6666666666667], [157.0, 2874.0], [156.0, 1653.0], [154.0, 2582.5], [153.0, 1624.0], [152.0, 1545.6666666666667], [167.0, 2901.0], [166.0, 1669.0], [164.0, 2134.0], [162.0, 2775.0], [160.0, 2500.3333333333335], [175.0, 1442.0], [173.0, 1053.0], [172.0, 2911.5], [171.0, 1984.0], [168.0, 1436.0], [182.0, 1205.5], [181.0, 2907.0], [180.0, 2812.0], [179.0, 1056.0], [178.0, 1319.5], [176.0, 994.0], [1.0, 617.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}, {"data": [[44.38699999999995, 578.7320000000004]], "isOverall": false, "label": "Requête HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 182.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4050.0, "minX": 1.74361536E12, "maxY": 18072.35, "series": [{"data": [[1.74361536E12, 18072.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74361536E12, 4050.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361536E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 578.7320000000004, "minX": 1.74361536E12, "maxY": 578.7320000000004, "series": [{"data": [[1.74361536E12, 578.7320000000004]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361536E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 578.4599999999989, "minX": 1.74361536E12, "maxY": 578.4599999999989, "series": [{"data": [[1.74361536E12, 578.4599999999989]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361536E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 443.5609999999992, "minX": 1.74361536E12, "maxY": 443.5609999999992, "series": [{"data": [[1.74361536E12, 443.5609999999992]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361536E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 74.0, "minX": 1.74361536E12, "maxY": 3045.0, "series": [{"data": [[1.74361536E12, 3045.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74361536E12, 74.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74361536E12, 1693.6999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74361536E12, 2981.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74361536E12, 128.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74361536E12, 2886.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361536E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 96.0, "minX": 39.0, "maxY": 1536.0, "series": [{"data": [[132.0, 125.5], [135.0, 125.0], [128.0, 103.0], [39.0, 96.0], [215.0, 1536.0], [115.0, 534.0], [114.0, 113.0], [122.0, 117.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 215.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 96.0, "minX": 39.0, "maxY": 1536.0, "series": [{"data": [[132.0, 125.5], [135.0, 125.0], [128.0, 103.0], [39.0, 96.0], [215.0, 1536.0], [115.0, 533.0], [114.0, 113.0], [122.0, 117.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 215.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74361536E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74361536E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361536E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74361536E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74361536E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361536E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74361536E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74361536E12, 16.666666666666668]], "isOverall": false, "label": "Requête HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361536E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74361536E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74361536E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361536E12, "title": "Total Transactions Per Second"}},
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

