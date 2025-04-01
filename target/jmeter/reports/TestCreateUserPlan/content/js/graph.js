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
        data: {"result": {"minY": 97.0, "minX": 0.0, "maxY": 3673.0, "series": [{"data": [[0.0, 97.0], [0.1, 98.0], [0.2, 99.0], [0.3, 99.0], [0.4, 100.0], [0.5, 100.0], [0.6, 100.0], [0.7, 101.0], [0.8, 101.0], [0.9, 101.0], [1.0, 102.0], [1.1, 103.0], [1.2, 103.0], [1.3, 103.0], [1.4, 103.0], [1.5, 104.0], [1.6, 105.0], [1.7, 105.0], [1.8, 106.0], [1.9, 106.0], [2.0, 106.0], [2.1, 106.0], [2.2, 107.0], [2.3, 107.0], [2.4, 107.0], [2.5, 107.0], [2.6, 108.0], [2.7, 108.0], [2.8, 108.0], [2.9, 108.0], [3.0, 108.0], [3.1, 109.0], [3.2, 109.0], [3.3, 109.0], [3.4, 110.0], [3.5, 111.0], [3.6, 111.0], [3.7, 111.0], [3.8, 111.0], [3.9, 112.0], [4.0, 112.0], [4.1, 112.0], [4.2, 113.0], [4.3, 113.0], [4.4, 113.0], [4.5, 113.0], [4.6, 113.0], [4.7, 114.0], [4.8, 114.0], [4.9, 114.0], [5.0, 115.0], [5.1, 115.0], [5.2, 115.0], [5.3, 115.0], [5.4, 115.0], [5.5, 115.0], [5.6, 116.0], [5.7, 116.0], [5.8, 116.0], [5.9, 116.0], [6.0, 116.0], [6.1, 116.0], [6.2, 117.0], [6.3, 117.0], [6.4, 117.0], [6.5, 117.0], [6.6, 117.0], [6.7, 117.0], [6.8, 117.0], [6.9, 117.0], [7.0, 117.0], [7.1, 118.0], [7.2, 118.0], [7.3, 118.0], [7.4, 118.0], [7.5, 118.0], [7.6, 118.0], [7.7, 118.0], [7.8, 118.0], [7.9, 119.0], [8.0, 119.0], [8.1, 119.0], [8.2, 119.0], [8.3, 119.0], [8.4, 119.0], [8.5, 120.0], [8.6, 120.0], [8.7, 120.0], [8.8, 120.0], [8.9, 120.0], [9.0, 120.0], [9.1, 120.0], [9.2, 121.0], [9.3, 121.0], [9.4, 121.0], [9.5, 122.0], [9.6, 122.0], [9.7, 122.0], [9.8, 122.0], [9.9, 122.0], [10.0, 122.0], [10.1, 122.0], [10.2, 123.0], [10.3, 123.0], [10.4, 123.0], [10.5, 123.0], [10.6, 123.0], [10.7, 123.0], [10.8, 123.0], [10.9, 123.0], [11.0, 123.0], [11.1, 123.0], [11.2, 123.0], [11.3, 123.0], [11.4, 123.0], [11.5, 123.0], [11.6, 124.0], [11.7, 124.0], [11.8, 124.0], [11.9, 124.0], [12.0, 124.0], [12.1, 124.0], [12.2, 124.0], [12.3, 124.0], [12.4, 124.0], [12.5, 125.0], [12.6, 125.0], [12.7, 125.0], [12.8, 125.0], [12.9, 125.0], [13.0, 126.0], [13.1, 126.0], [13.2, 126.0], [13.3, 126.0], [13.4, 126.0], [13.5, 126.0], [13.6, 126.0], [13.7, 127.0], [13.8, 127.0], [13.9, 127.0], [14.0, 127.0], [14.1, 127.0], [14.2, 127.0], [14.3, 127.0], [14.4, 127.0], [14.5, 127.0], [14.6, 128.0], [14.7, 128.0], [14.8, 128.0], [14.9, 128.0], [15.0, 128.0], [15.1, 128.0], [15.2, 128.0], [15.3, 128.0], [15.4, 128.0], [15.5, 128.0], [15.6, 128.0], [15.7, 128.0], [15.8, 128.0], [15.9, 129.0], [16.0, 129.0], [16.1, 129.0], [16.2, 129.0], [16.3, 129.0], [16.4, 129.0], [16.5, 129.0], [16.6, 129.0], [16.7, 129.0], [16.8, 129.0], [16.9, 129.0], [17.0, 130.0], [17.1, 130.0], [17.2, 130.0], [17.3, 130.0], [17.4, 130.0], [17.5, 130.0], [17.6, 130.0], [17.7, 130.0], [17.8, 130.0], [17.9, 131.0], [18.0, 131.0], [18.1, 131.0], [18.2, 131.0], [18.3, 131.0], [18.4, 131.0], [18.5, 131.0], [18.6, 131.0], [18.7, 131.0], [18.8, 131.0], [18.9, 132.0], [19.0, 132.0], [19.1, 132.0], [19.2, 132.0], [19.3, 132.0], [19.4, 132.0], [19.5, 132.0], [19.6, 132.0], [19.7, 132.0], [19.8, 132.0], [19.9, 132.0], [20.0, 133.0], [20.1, 133.0], [20.2, 133.0], [20.3, 133.0], [20.4, 133.0], [20.5, 133.0], [20.6, 133.0], [20.7, 133.0], [20.8, 133.0], [20.9, 133.0], [21.0, 133.0], [21.1, 134.0], [21.2, 134.0], [21.3, 134.0], [21.4, 134.0], [21.5, 134.0], [21.6, 134.0], [21.7, 134.0], [21.8, 134.0], [21.9, 134.0], [22.0, 135.0], [22.1, 135.0], [22.2, 135.0], [22.3, 135.0], [22.4, 135.0], [22.5, 135.0], [22.6, 135.0], [22.7, 135.0], [22.8, 135.0], [22.9, 135.0], [23.0, 135.0], [23.1, 136.0], [23.2, 136.0], [23.3, 136.0], [23.4, 136.0], [23.5, 136.0], [23.6, 136.0], [23.7, 136.0], [23.8, 136.0], [23.9, 136.0], [24.0, 137.0], [24.1, 137.0], [24.2, 137.0], [24.3, 137.0], [24.4, 137.0], [24.5, 137.0], [24.6, 137.0], [24.7, 137.0], [24.8, 138.0], [24.9, 138.0], [25.0, 138.0], [25.1, 138.0], [25.2, 138.0], [25.3, 138.0], [25.4, 138.0], [25.5, 138.0], [25.6, 138.0], [25.7, 139.0], [25.8, 139.0], [25.9, 139.0], [26.0, 139.0], [26.1, 139.0], [26.2, 139.0], [26.3, 139.0], [26.4, 139.0], [26.5, 139.0], [26.6, 139.0], [26.7, 139.0], [26.8, 139.0], [26.9, 140.0], [27.0, 140.0], [27.1, 140.0], [27.2, 140.0], [27.3, 140.0], [27.4, 140.0], [27.5, 140.0], [27.6, 140.0], [27.7, 140.0], [27.8, 140.0], [27.9, 140.0], [28.0, 141.0], [28.1, 141.0], [28.2, 142.0], [28.3, 142.0], [28.4, 142.0], [28.5, 142.0], [28.6, 142.0], [28.7, 142.0], [28.8, 142.0], [28.9, 142.0], [29.0, 142.0], [29.1, 143.0], [29.2, 143.0], [29.3, 143.0], [29.4, 143.0], [29.5, 143.0], [29.6, 143.0], [29.7, 143.0], [29.8, 143.0], [29.9, 143.0], [30.0, 143.0], [30.1, 144.0], [30.2, 144.0], [30.3, 144.0], [30.4, 144.0], [30.5, 144.0], [30.6, 144.0], [30.7, 144.0], [30.8, 144.0], [30.9, 144.0], [31.0, 144.0], [31.1, 144.0], [31.2, 144.0], [31.3, 145.0], [31.4, 145.0], [31.5, 145.0], [31.6, 145.0], [31.7, 145.0], [31.8, 145.0], [31.9, 145.0], [32.0, 145.0], [32.1, 145.0], [32.2, 145.0], [32.3, 145.0], [32.4, 145.0], [32.5, 146.0], [32.6, 146.0], [32.7, 146.0], [32.8, 146.0], [32.9, 146.0], [33.0, 146.0], [33.1, 146.0], [33.2, 146.0], [33.3, 147.0], [33.4, 147.0], [33.5, 147.0], [33.6, 147.0], [33.7, 147.0], [33.8, 147.0], [33.9, 147.0], [34.0, 147.0], [34.1, 147.0], [34.2, 147.0], [34.3, 147.0], [34.4, 148.0], [34.5, 148.0], [34.6, 148.0], [34.7, 148.0], [34.8, 148.0], [34.9, 148.0], [35.0, 148.0], [35.1, 148.0], [35.2, 148.0], [35.3, 148.0], [35.4, 148.0], [35.5, 148.0], [35.6, 149.0], [35.7, 149.0], [35.8, 149.0], [35.9, 149.0], [36.0, 149.0], [36.1, 149.0], [36.2, 149.0], [36.3, 149.0], [36.4, 149.0], [36.5, 149.0], [36.6, 150.0], [36.7, 150.0], [36.8, 150.0], [36.9, 150.0], [37.0, 150.0], [37.1, 151.0], [37.2, 151.0], [37.3, 151.0], [37.4, 151.0], [37.5, 152.0], [37.6, 152.0], [37.7, 152.0], [37.8, 152.0], [37.9, 153.0], [38.0, 153.0], [38.1, 153.0], [38.2, 153.0], [38.3, 153.0], [38.4, 154.0], [38.5, 154.0], [38.6, 154.0], [38.7, 154.0], [38.8, 154.0], [38.9, 154.0], [39.0, 155.0], [39.1, 155.0], [39.2, 155.0], [39.3, 156.0], [39.4, 156.0], [39.5, 156.0], [39.6, 156.0], [39.7, 156.0], [39.8, 156.0], [39.9, 156.0], [40.0, 156.0], [40.1, 156.0], [40.2, 157.0], [40.3, 157.0], [40.4, 157.0], [40.5, 157.0], [40.6, 157.0], [40.7, 157.0], [40.8, 158.0], [40.9, 158.0], [41.0, 158.0], [41.1, 158.0], [41.2, 158.0], [41.3, 158.0], [41.4, 158.0], [41.5, 159.0], [41.6, 159.0], [41.7, 159.0], [41.8, 159.0], [41.9, 159.0], [42.0, 160.0], [42.1, 160.0], [42.2, 160.0], [42.3, 160.0], [42.4, 160.0], [42.5, 160.0], [42.6, 160.0], [42.7, 160.0], [42.8, 160.0], [42.9, 161.0], [43.0, 161.0], [43.1, 161.0], [43.2, 161.0], [43.3, 161.0], [43.4, 161.0], [43.5, 161.0], [43.6, 161.0], [43.7, 162.0], [43.8, 162.0], [43.9, 162.0], [44.0, 162.0], [44.1, 162.0], [44.2, 162.0], [44.3, 162.0], [44.4, 163.0], [44.5, 163.0], [44.6, 163.0], [44.7, 163.0], [44.8, 163.0], [44.9, 163.0], [45.0, 164.0], [45.1, 164.0], [45.2, 164.0], [45.3, 164.0], [45.4, 164.0], [45.5, 164.0], [45.6, 164.0], [45.7, 165.0], [45.8, 165.0], [45.9, 165.0], [46.0, 165.0], [46.1, 165.0], [46.2, 165.0], [46.3, 165.0], [46.4, 165.0], [46.5, 166.0], [46.6, 166.0], [46.7, 166.0], [46.8, 166.0], [46.9, 166.0], [47.0, 166.0], [47.1, 166.0], [47.2, 167.0], [47.3, 167.0], [47.4, 167.0], [47.5, 167.0], [47.6, 167.0], [47.7, 167.0], [47.8, 167.0], [47.9, 168.0], [48.0, 168.0], [48.1, 168.0], [48.2, 168.0], [48.3, 168.0], [48.4, 168.0], [48.5, 168.0], [48.6, 169.0], [48.7, 169.0], [48.8, 169.0], [48.9, 169.0], [49.0, 169.0], [49.1, 169.0], [49.2, 170.0], [49.3, 170.0], [49.4, 170.0], [49.5, 170.0], [49.6, 170.0], [49.7, 170.0], [49.8, 170.0], [49.9, 171.0], [50.0, 171.0], [50.1, 171.0], [50.2, 171.0], [50.3, 172.0], [50.4, 172.0], [50.5, 172.0], [50.6, 173.0], [50.7, 173.0], [50.8, 174.0], [50.9, 174.0], [51.0, 174.0], [51.1, 174.0], [51.2, 175.0], [51.3, 175.0], [51.4, 175.0], [51.5, 176.0], [51.6, 176.0], [51.7, 176.0], [51.8, 176.0], [51.9, 176.0], [52.0, 176.0], [52.1, 177.0], [52.2, 177.0], [52.3, 177.0], [52.4, 177.0], [52.5, 177.0], [52.6, 177.0], [52.7, 177.0], [52.8, 178.0], [52.9, 178.0], [53.0, 179.0], [53.1, 179.0], [53.2, 180.0], [53.3, 180.0], [53.4, 180.0], [53.5, 180.0], [53.6, 181.0], [53.7, 181.0], [53.8, 181.0], [53.9, 181.0], [54.0, 182.0], [54.1, 182.0], [54.2, 182.0], [54.3, 182.0], [54.4, 185.0], [54.5, 186.0], [54.6, 186.0], [54.7, 187.0], [54.8, 187.0], [54.9, 187.0], [55.0, 188.0], [55.1, 188.0], [55.2, 189.0], [55.3, 189.0], [55.4, 190.0], [55.5, 190.0], [55.6, 191.0], [55.7, 191.0], [55.8, 191.0], [55.9, 192.0], [56.0, 192.0], [56.1, 193.0], [56.2, 193.0], [56.3, 193.0], [56.4, 195.0], [56.5, 195.0], [56.6, 196.0], [56.7, 196.0], [56.8, 196.0], [56.9, 196.0], [57.0, 197.0], [57.1, 199.0], [57.2, 199.0], [57.3, 199.0], [57.4, 199.0], [57.5, 200.0], [57.6, 201.0], [57.7, 201.0], [57.8, 201.0], [57.9, 201.0], [58.0, 203.0], [58.1, 205.0], [58.2, 205.0], [58.3, 205.0], [58.4, 205.0], [58.5, 205.0], [58.6, 205.0], [58.7, 206.0], [58.8, 206.0], [58.9, 207.0], [59.0, 207.0], [59.1, 207.0], [59.2, 208.0], [59.3, 208.0], [59.4, 210.0], [59.5, 210.0], [59.6, 211.0], [59.7, 212.0], [59.8, 213.0], [59.9, 213.0], [60.0, 214.0], [60.1, 219.0], [60.2, 220.0], [60.3, 220.0], [60.4, 225.0], [60.5, 226.0], [60.6, 227.0], [60.7, 228.0], [60.8, 229.0], [60.9, 230.0], [61.0, 230.0], [61.1, 231.0], [61.2, 231.0], [61.3, 232.0], [61.4, 234.0], [61.5, 237.0], [61.6, 237.0], [61.7, 238.0], [61.8, 238.0], [61.9, 239.0], [62.0, 242.0], [62.1, 242.0], [62.2, 250.0], [62.3, 250.0], [62.4, 252.0], [62.5, 254.0], [62.6, 259.0], [62.7, 264.0], [62.8, 265.0], [62.9, 265.0], [63.0, 266.0], [63.1, 278.0], [63.2, 280.0], [63.3, 280.0], [63.4, 282.0], [63.5, 289.0], [63.6, 290.0], [63.7, 296.0], [63.8, 297.0], [63.9, 297.0], [64.0, 297.0], [64.1, 298.0], [64.2, 299.0], [64.3, 300.0], [64.4, 300.0], [64.5, 301.0], [64.6, 312.0], [64.7, 313.0], [64.8, 322.0], [64.9, 331.0], [65.0, 350.0], [65.1, 354.0], [65.2, 360.0], [65.3, 361.0], [65.4, 365.0], [65.5, 371.0], [65.6, 372.0], [65.7, 383.0], [65.8, 385.0], [65.9, 386.0], [66.0, 388.0], [66.1, 390.0], [66.2, 432.0], [66.3, 433.0], [66.4, 433.0], [66.5, 433.0], [66.6, 435.0], [66.7, 436.0], [66.8, 437.0], [66.9, 445.0], [67.0, 447.0], [67.1, 448.0], [67.2, 449.0], [67.3, 450.0], [67.4, 450.0], [67.5, 455.0], [67.6, 461.0], [67.7, 500.0], [67.8, 514.0], [67.9, 554.0], [68.0, 555.0], [68.1, 559.0], [68.2, 559.0], [68.3, 561.0], [68.4, 562.0], [68.5, 562.0], [68.6, 564.0], [68.7, 565.0], [68.8, 567.0], [68.9, 581.0], [69.0, 582.0], [69.1, 582.0], [69.2, 582.0], [69.3, 583.0], [69.4, 584.0], [69.5, 585.0], [69.6, 586.0], [69.7, 587.0], [69.8, 604.0], [69.9, 604.0], [70.0, 607.0], [70.1, 609.0], [70.2, 622.0], [70.3, 630.0], [70.4, 636.0], [70.5, 640.0], [70.6, 643.0], [70.7, 651.0], [70.8, 652.0], [70.9, 663.0], [71.0, 663.0], [71.1, 666.0], [71.2, 675.0], [71.3, 681.0], [71.4, 683.0], [71.5, 685.0], [71.6, 690.0], [71.7, 691.0], [71.8, 694.0], [71.9, 695.0], [72.0, 700.0], [72.1, 706.0], [72.2, 725.0], [72.3, 743.0], [72.4, 747.0], [72.5, 747.0], [72.6, 748.0], [72.7, 753.0], [72.8, 768.0], [72.9, 797.0], [73.0, 800.0], [73.1, 800.0], [73.2, 802.0], [73.3, 803.0], [73.4, 807.0], [73.5, 811.0], [73.6, 812.0], [73.7, 856.0], [73.8, 858.0], [73.9, 858.0], [74.0, 861.0], [74.1, 876.0], [74.2, 879.0], [74.3, 886.0], [74.4, 943.0], [74.5, 944.0], [74.6, 945.0], [74.7, 948.0], [74.8, 951.0], [74.9, 951.0], [75.0, 952.0], [75.1, 953.0], [75.2, 954.0], [75.3, 958.0], [75.4, 961.0], [75.5, 961.0], [75.6, 965.0], [75.7, 965.0], [75.8, 979.0], [75.9, 1004.0], [76.0, 1006.0], [76.1, 1012.0], [76.2, 1016.0], [76.3, 1022.0], [76.4, 1029.0], [76.5, 1034.0], [76.6, 1035.0], [76.7, 1037.0], [76.8, 1038.0], [76.9, 1040.0], [77.0, 1043.0], [77.1, 1043.0], [77.2, 1046.0], [77.3, 1048.0], [77.4, 1048.0], [77.5, 1055.0], [77.6, 1055.0], [77.7, 1069.0], [77.8, 1079.0], [77.9, 1117.0], [78.0, 1118.0], [78.1, 1121.0], [78.2, 1124.0], [78.3, 1148.0], [78.4, 1154.0], [78.5, 1198.0], [78.6, 1202.0], [78.7, 1202.0], [78.8, 1207.0], [78.9, 1216.0], [79.0, 1220.0], [79.1, 1221.0], [79.2, 1221.0], [79.3, 1232.0], [79.4, 1242.0], [79.5, 1263.0], [79.6, 1264.0], [79.7, 1345.0], [79.8, 1355.0], [79.9, 1362.0], [80.0, 1373.0], [80.1, 1450.0], [80.2, 2107.0], [80.3, 2269.0], [80.4, 2269.0], [80.5, 2274.0], [80.6, 2275.0], [80.7, 2287.0], [80.8, 2290.0], [80.9, 2311.0], [81.0, 2316.0], [81.1, 2324.0], [81.2, 2328.0], [81.3, 2329.0], [81.4, 2352.0], [81.5, 2355.0], [81.6, 2366.0], [81.7, 2368.0], [81.8, 2369.0], [81.9, 2392.0], [82.0, 2401.0], [82.1, 2408.0], [82.2, 2409.0], [82.3, 2424.0], [82.4, 2425.0], [82.5, 2442.0], [82.6, 2456.0], [82.7, 2463.0], [82.8, 2466.0], [82.9, 2473.0], [83.0, 2474.0], [83.1, 2477.0], [83.2, 2481.0], [83.3, 2484.0], [83.4, 2498.0], [83.5, 2503.0], [83.6, 2521.0], [83.7, 2640.0], [83.8, 2788.0], [83.9, 2792.0], [84.0, 2905.0], [84.1, 2922.0], [84.2, 2931.0], [84.3, 2941.0], [84.4, 2955.0], [84.5, 2978.0], [84.6, 3009.0], [84.7, 3012.0], [84.8, 3015.0], [84.9, 3017.0], [85.0, 3044.0], [85.1, 3055.0], [85.2, 3058.0], [85.3, 3060.0], [85.4, 3080.0], [85.5, 3081.0], [85.6, 3084.0], [85.7, 3085.0], [85.8, 3103.0], [85.9, 3144.0], [86.0, 3151.0], [86.1, 3152.0], [86.2, 3157.0], [86.3, 3173.0], [86.4, 3183.0], [86.5, 3185.0], [86.6, 3193.0], [86.7, 3222.0], [86.8, 3225.0], [86.9, 3228.0], [87.0, 3238.0], [87.1, 3244.0], [87.2, 3269.0], [87.3, 3296.0], [87.4, 3305.0], [87.5, 3306.0], [87.6, 3323.0], [87.7, 3327.0], [87.8, 3331.0], [87.9, 3332.0], [88.0, 3335.0], [88.1, 3335.0], [88.2, 3344.0], [88.3, 3346.0], [88.4, 3348.0], [88.5, 3353.0], [88.6, 3354.0], [88.7, 3357.0], [88.8, 3359.0], [88.9, 3359.0], [89.0, 3361.0], [89.1, 3366.0], [89.2, 3384.0], [89.3, 3387.0], [89.4, 3397.0], [89.5, 3399.0], [89.6, 3435.0], [89.7, 3444.0], [89.8, 3462.0], [89.9, 3462.0], [90.0, 3468.0], [90.1, 3487.0], [90.2, 3488.0], [90.3, 3496.0], [90.4, 3512.0], [90.5, 3519.0], [90.6, 3523.0], [90.7, 3536.0], [90.8, 3539.0], [90.9, 3560.0], [91.0, 3561.0], [91.1, 3561.0], [91.2, 3561.0], [91.3, 3561.0], [91.4, 3563.0], [91.5, 3565.0], [91.6, 3572.0], [91.7, 3573.0], [91.8, 3573.0], [91.9, 3573.0], [92.0, 3573.0], [92.1, 3575.0], [92.2, 3577.0], [92.3, 3582.0], [92.4, 3582.0], [92.5, 3587.0], [92.6, 3590.0], [92.7, 3590.0], [92.8, 3590.0], [92.9, 3594.0], [93.0, 3595.0], [93.1, 3597.0], [93.2, 3599.0], [93.3, 3599.0], [93.4, 3601.0], [93.5, 3602.0], [93.6, 3604.0], [93.7, 3604.0], [93.8, 3607.0], [93.9, 3607.0], [94.0, 3607.0], [94.1, 3609.0], [94.2, 3610.0], [94.3, 3610.0], [94.4, 3611.0], [94.5, 3615.0], [94.6, 3616.0], [94.7, 3617.0], [94.8, 3617.0], [94.9, 3618.0], [95.0, 3619.0], [95.1, 3619.0], [95.2, 3620.0], [95.3, 3620.0], [95.4, 3621.0], [95.5, 3622.0], [95.6, 3622.0], [95.7, 3624.0], [95.8, 3624.0], [95.9, 3624.0], [96.0, 3625.0], [96.1, 3625.0], [96.2, 3627.0], [96.3, 3629.0], [96.4, 3630.0], [96.5, 3631.0], [96.6, 3632.0], [96.7, 3633.0], [96.8, 3634.0], [96.9, 3636.0], [97.0, 3636.0], [97.1, 3636.0], [97.2, 3636.0], [97.3, 3636.0], [97.4, 3637.0], [97.5, 3637.0], [97.6, 3643.0], [97.7, 3644.0], [97.8, 3644.0], [97.9, 3646.0], [98.0, 3646.0], [98.1, 3647.0], [98.2, 3648.0], [98.3, 3648.0], [98.4, 3648.0], [98.5, 3649.0], [98.6, 3650.0], [98.7, 3651.0], [98.8, 3651.0], [98.9, 3652.0], [99.0, 3653.0], [99.1, 3658.0], [99.2, 3660.0], [99.3, 3662.0], [99.4, 3666.0], [99.5, 3667.0], [99.6, 3667.0], [99.7, 3668.0], [99.8, 3671.0], [99.9, 3673.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 571.0, "series": [{"data": [[0.0, 3.0], [600.0, 22.0], [700.0, 10.0], [800.0, 14.0], [900.0, 15.0], [1000.0, 20.0], [1100.0, 7.0], [1200.0, 11.0], [1300.0, 4.0], [1400.0, 1.0], [100.0, 571.0], [2100.0, 1.0], [2300.0, 11.0], [2200.0, 6.0], [2400.0, 15.0], [2500.0, 2.0], [2600.0, 1.0], [2700.0, 2.0], [2900.0, 6.0], [3000.0, 12.0], [3100.0, 9.0], [200.0, 68.0], [3300.0, 22.0], [3200.0, 7.0], [3400.0, 8.0], [3500.0, 30.0], [3600.0, 66.0], [300.0, 20.0], [400.0, 15.0], [500.0, 21.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 124.0, "minX": 0.0, "ticks": [[0, "Requêtes \ntemps de réponse <= 500ms"], [1, "Requêtes \ntemps de réponse > 500ms et <= 1 500ms"], [2, "Requêtes \ntemps de réponse > 1 500ms"], [3, "Requêtes en erreur"]], "maxY": 678.0, "series": [{"data": [[0.0, 678.0]], "color": "#9ACD32", "isOverall": false, "label": "Requêtes \ntemps de réponse <= 500ms", "isController": false}, {"data": [[1.0, 124.0]], "color": "yellow", "isOverall": false, "label": "Requêtes \ntemps de réponse > 500ms et <= 1 500ms", "isController": false}, {"data": [[2.0, 198.0]], "color": "orange", "isOverall": false, "label": "Requêtes \ntemps de réponse > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requêtes en erreur", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 88.73699999999994, "minX": 1.7435154E12, "maxY": 88.73699999999994, "series": [{"data": [[1.7435154E12, 88.73699999999994]], "isOverall": false, "label": "TestCreateUserSet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 97.0, "minX": 1.0, "maxY": 3666.0, "series": [{"data": [[2.0, 117.0], [3.0, 101.0], [4.0, 136.0], [5.0, 97.0], [6.0, 120.33333333333333], [7.0, 120.66666666666667], [8.0, 132.0], [9.0, 123.79999999999998], [10.0, 138.3846153846154], [11.0, 128.07692307692307], [12.0, 143.65], [13.0, 126.83333333333331], [14.0, 138.04761904761904], [15.0, 143.79166666666663], [16.0, 175.84615384615384], [17.0, 147.42857142857142], [18.0, 158.13513513513516], [19.0, 161.40000000000003], [20.0, 158.8421052631579], [21.0, 191.08695652173913], [22.0, 204.45714285714283], [23.0, 201.15384615384616], [24.0, 304.79999999999995], [25.0, 273.79999999999995], [26.0, 220.0333333333334], [27.0, 232.60000000000008], [28.0, 248.0555555555555], [29.0, 203.66666666666666], [30.0, 237.375], [31.0, 138.5], [32.0, 196.5], [34.0, 176.90909090909088], [37.0, 175.0], [36.0, 177.0], [39.0, 291.8], [38.0, 171.0], [40.0, 218.71428571428572], [41.0, 271.3333333333333], [43.0, 338.0], [42.0, 165.2], [45.0, 192.5], [44.0, 320.3333333333333], [47.0, 165.24999999999997], [46.0, 157.33333333333334], [49.0, 384.87500000000006], [48.0, 167.0], [50.0, 192.33333333333334], [51.0, 189.66666666666666], [52.0, 455.3333333333333], [55.0, 635.0], [54.0, 382.5], [57.0, 165.0], [56.0, 167.0], [59.0, 701.75], [58.0, 165.0], [60.0, 802.0], [62.0, 819.75], [63.0, 202.29999999999998], [66.0, 807.0], [64.0, 858.0], [69.0, 575.0], [68.0, 661.3333333333334], [75.0, 581.0], [72.0, 858.0], [77.0, 581.0], [76.0, 582.0], [82.0, 517.0], [86.0, 584.5], [84.0, 650.0], [90.0, 631.2], [88.0, 585.0], [94.0, 643.6666666666666], [99.0, 948.0], [97.0, 297.0], [96.0, 620.5], [102.0, 961.0], [101.0, 945.0], [100.0, 290.0], [107.0, 954.0], [106.0, 951.0], [105.0, 951.0], [110.0, 961.0], [109.0, 1079.0], [108.0, 958.0], [113.0, 379.0], [112.0, 1630.5], [119.0, 360.0], [118.0, 383.0], [116.0, 563.8], [122.0, 380.3333333333333], [121.0, 361.0], [127.0, 626.3333333333334], [125.0, 265.0], [133.0, 446.5], [132.0, 435.0], [131.0, 433.0], [130.0, 348.5], [129.0, 432.0], [143.0, 3139.5], [142.0, 2050.0], [150.0, 2784.5], [149.0, 3512.0], [146.0, 2301.777777777778], [159.0, 2827.0], [158.0, 2917.0], [156.0, 3658.0], [154.0, 3644.0], [153.0, 3266.3333333333335], [167.0, 3397.0], [165.0, 1155.0], [164.0, 3376.0], [163.0, 3666.0], [160.0, 3311.5], [175.0, 1727.0], [171.0, 299.0], [169.0, 2451.3333333333335], [183.0, 3621.0], [182.0, 2993.0], [180.0, 2749.5], [178.0, 3084.0], [177.0, 3150.0], [176.0, 280.0], [190.0, 2902.0], [188.0, 3646.0], [185.0, 2274.0], [198.0, 3616.0], [196.0, 3207.0], [193.0, 3602.25], [207.0, 3515.0], [206.0, 3625.0], [204.0, 2757.5], [203.0, 3482.0], [201.0, 3173.0], [200.0, 2765.5], [215.0, 3359.0], [213.0, 3400.5], [211.0, 3653.0], [210.0, 3630.0], [222.0, 3353.0], [220.0, 3524.5], [218.0, 238.0], [217.0, 2002.5], [216.0, 3539.0], [231.0, 3381.3333333333335], [228.0, 2275.0], [227.0, 2817.8], [225.0, 3652.0], [239.0, 3622.0], [237.0, 3126.0], [236.0, 3607.0], [232.0, 3646.0], [247.0, 3432.5], [246.0, 3215.5], [243.0, 2941.3333333333335], [242.0, 2355.0], [255.0, 3152.0], [253.0, 500.0], [251.0, 2714.6666666666665], [248.0, 3319.5], [259.0, 3225.0], [269.0, 2761.6666666666665], [268.0, 2832.0], [265.0, 3616.0], [263.0, 3609.0], [262.0, 3636.0], [261.0, 3636.5], [257.0, 3611.0], [256.0, 3269.0], [286.0, 2369.0], [284.0, 3631.0], [283.0, 2311.0], [282.0, 2342.0], [280.0, 3561.0], [278.0, 248.5], [276.0, 3058.0], [275.0, 3162.25], [272.0, 3636.0], [291.0, 2845.0], [303.0, 773.3333333333333], [300.0, 1148.5], [299.0, 1161.6666666666667], [297.0, 1221.0], [295.0, 2272.0], [293.0, 1232.0], [290.0, 3620.3333333333335], [288.0, 3620.0], [307.0, 3346.0], [317.0, 2414.5], [315.0, 3406.0], [313.0, 1023.5], [311.0, 1023.0], [309.0, 1037.0], [308.0, 1034.0], [306.0, 1069.0], [305.0, 1055.0], [335.0, 2978.0], [334.0, 3435.0], [331.0, 3005.5], [330.0, 3306.0], [327.0, 3605.0], [325.0, 3305.0], [322.0, 2938.5], [320.0, 3622.0], [351.0, 3590.0], [350.0, 3577.0], [348.0, 3582.0], [346.0, 3573.0], [344.0, 3462.0], [342.0, 3452.0], [339.0, 3575.0], [337.0, 3582.0], [336.0, 301.0], [353.0, 2367.8367346938776], [1.0, 108.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}, {"data": [[88.73299999999999, 866.4329999999986]], "isOverall": false, "label": "Requête HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 353.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3666.6666666666665, "minX": 1.7435154E12, "maxY": 18506.033333333333, "series": [{"data": [[1.7435154E12, 18506.033333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7435154E12, 3666.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 866.4329999999986, "minX": 1.7435154E12, "maxY": 866.4329999999986, "series": [{"data": [[1.7435154E12, 866.4329999999986]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 825.0729999999987, "minX": 1.7435154E12, "maxY": 825.0729999999987, "series": [{"data": [[1.7435154E12, 825.0729999999987]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 401.5970000000002, "minX": 1.7435154E12, "maxY": 401.5970000000002, "series": [{"data": [[1.7435154E12, 401.5970000000002]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 97.0, "minX": 1.7435154E12, "maxY": 3673.0, "series": [{"data": [[1.7435154E12, 3673.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7435154E12, 97.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7435154E12, 3467.3999999999996]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7435154E12, 3652.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7435154E12, 171.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7435154E12, 3618.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 115.0, "minX": 63.0, "maxY": 2474.0, "series": [{"data": [[145.0, 175.0], [339.0, 2474.0], [107.0, 133.0], [110.0, 154.0], [116.0, 154.0], [120.0, 144.0], [63.0, 115.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 339.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 115.0, "minX": 63.0, "maxY": 2344.0, "series": [{"data": [[145.0, 175.0], [339.0, 2344.0], [107.0, 133.0], [110.0, 154.0], [116.0, 153.5], [120.0, 144.0], [63.0, 115.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 339.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7435154E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7435154E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7435154E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7435154E12, 16.666666666666668]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7435154E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7435154E12, 16.666666666666668]], "isOverall": false, "label": "Requête HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7435154E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7435154E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Total Transactions Per Second"}},
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

