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
        data: {"result": {"minY": 88.0, "minX": 0.0, "maxY": 8467.0, "series": [{"data": [[0.0, 88.0], [0.1, 94.0], [0.2, 95.0], [0.3, 95.0], [0.4, 97.0], [0.5, 97.0], [0.6, 97.0], [0.7, 99.0], [0.8, 99.0], [0.9, 99.0], [1.0, 99.0], [1.1, 99.0], [1.2, 99.0], [1.3, 100.0], [1.4, 100.0], [1.5, 100.0], [1.6, 101.0], [1.7, 101.0], [1.8, 102.0], [1.9, 102.0], [2.0, 102.0], [2.1, 102.0], [2.2, 103.0], [2.3, 103.0], [2.4, 103.0], [2.5, 103.0], [2.6, 104.0], [2.7, 104.0], [2.8, 104.0], [2.9, 104.0], [3.0, 104.0], [3.1, 105.0], [3.2, 105.0], [3.3, 105.0], [3.4, 105.0], [3.5, 106.0], [3.6, 106.0], [3.7, 106.0], [3.8, 106.0], [3.9, 106.0], [4.0, 106.0], [4.1, 106.0], [4.2, 107.0], [4.3, 107.0], [4.4, 107.0], [4.5, 108.0], [4.6, 108.0], [4.7, 108.0], [4.8, 108.0], [4.9, 108.0], [5.0, 109.0], [5.1, 109.0], [5.2, 109.0], [5.3, 109.0], [5.4, 109.0], [5.5, 109.0], [5.6, 110.0], [5.7, 110.0], [5.8, 110.0], [5.9, 110.0], [6.0, 110.0], [6.1, 110.0], [6.2, 110.0], [6.3, 111.0], [6.4, 111.0], [6.5, 111.0], [6.6, 111.0], [6.7, 111.0], [6.8, 112.0], [6.9, 112.0], [7.0, 112.0], [7.1, 112.0], [7.2, 112.0], [7.3, 112.0], [7.4, 112.0], [7.5, 112.0], [7.6, 112.0], [7.7, 112.0], [7.8, 114.0], [7.9, 114.0], [8.0, 114.0], [8.1, 114.0], [8.2, 115.0], [8.3, 115.0], [8.4, 115.0], [8.5, 115.0], [8.6, 115.0], [8.7, 116.0], [8.8, 116.0], [8.9, 116.0], [9.0, 116.0], [9.1, 116.0], [9.2, 117.0], [9.3, 117.0], [9.4, 117.0], [9.5, 117.0], [9.6, 117.0], [9.7, 117.0], [9.8, 117.0], [9.9, 118.0], [10.0, 118.0], [10.1, 118.0], [10.2, 118.0], [10.3, 118.0], [10.4, 118.0], [10.5, 118.0], [10.6, 118.0], [10.7, 118.0], [10.8, 119.0], [10.9, 119.0], [11.0, 119.0], [11.1, 119.0], [11.2, 119.0], [11.3, 119.0], [11.4, 119.0], [11.5, 119.0], [11.6, 120.0], [11.7, 120.0], [11.8, 120.0], [11.9, 120.0], [12.0, 120.0], [12.1, 120.0], [12.2, 120.0], [12.3, 120.0], [12.4, 120.0], [12.5, 120.0], [12.6, 120.0], [12.7, 120.0], [12.8, 121.0], [12.9, 121.0], [13.0, 121.0], [13.1, 121.0], [13.2, 121.0], [13.3, 121.0], [13.4, 121.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 122.0], [13.9, 122.0], [14.0, 122.0], [14.1, 122.0], [14.2, 123.0], [14.3, 123.0], [14.4, 123.0], [14.5, 123.0], [14.6, 123.0], [14.7, 123.0], [14.8, 124.0], [14.9, 124.0], [15.0, 124.0], [15.1, 124.0], [15.2, 124.0], [15.3, 124.0], [15.4, 124.0], [15.5, 124.0], [15.6, 124.0], [15.7, 124.0], [15.8, 124.0], [15.9, 125.0], [16.0, 125.0], [16.1, 125.0], [16.2, 125.0], [16.3, 125.0], [16.4, 125.0], [16.5, 126.0], [16.6, 126.0], [16.7, 126.0], [16.8, 126.0], [16.9, 126.0], [17.0, 126.0], [17.1, 126.0], [17.2, 126.0], [17.3, 127.0], [17.4, 127.0], [17.5, 127.0], [17.6, 127.0], [17.7, 127.0], [17.8, 127.0], [17.9, 127.0], [18.0, 127.0], [18.1, 127.0], [18.2, 128.0], [18.3, 128.0], [18.4, 128.0], [18.5, 128.0], [18.6, 128.0], [18.7, 128.0], [18.8, 128.0], [18.9, 128.0], [19.0, 128.0], [19.1, 128.0], [19.2, 128.0], [19.3, 128.0], [19.4, 128.0], [19.5, 128.0], [19.6, 128.0], [19.7, 128.0], [19.8, 128.0], [19.9, 128.0], [20.0, 129.0], [20.1, 129.0], [20.2, 129.0], [20.3, 129.0], [20.4, 129.0], [20.5, 129.0], [20.6, 129.0], [20.7, 129.0], [20.8, 130.0], [20.9, 130.0], [21.0, 130.0], [21.1, 130.0], [21.2, 130.0], [21.3, 130.0], [21.4, 130.0], [21.5, 130.0], [21.6, 130.0], [21.7, 130.0], [21.8, 130.0], [21.9, 130.0], [22.0, 130.0], [22.1, 131.0], [22.2, 131.0], [22.3, 131.0], [22.4, 131.0], [22.5, 131.0], [22.6, 131.0], [22.7, 131.0], [22.8, 132.0], [22.9, 132.0], [23.0, 132.0], [23.1, 132.0], [23.2, 132.0], [23.3, 132.0], [23.4, 132.0], [23.5, 133.0], [23.6, 133.0], [23.7, 133.0], [23.8, 133.0], [23.9, 133.0], [24.0, 133.0], [24.1, 133.0], [24.2, 133.0], [24.3, 133.0], [24.4, 133.0], [24.5, 133.0], [24.6, 134.0], [24.7, 134.0], [24.8, 134.0], [24.9, 134.0], [25.0, 134.0], [25.1, 134.0], [25.2, 134.0], [25.3, 134.0], [25.4, 134.0], [25.5, 134.0], [25.6, 134.0], [25.7, 134.0], [25.8, 135.0], [25.9, 135.0], [26.0, 135.0], [26.1, 135.0], [26.2, 135.0], [26.3, 135.0], [26.4, 136.0], [26.5, 136.0], [26.6, 136.0], [26.7, 136.0], [26.8, 136.0], [26.9, 136.0], [27.0, 136.0], [27.1, 136.0], [27.2, 136.0], [27.3, 137.0], [27.4, 137.0], [27.5, 137.0], [27.6, 137.0], [27.7, 137.0], [27.8, 137.0], [27.9, 137.0], [28.0, 138.0], [28.1, 138.0], [28.2, 138.0], [28.3, 138.0], [28.4, 138.0], [28.5, 138.0], [28.6, 138.0], [28.7, 138.0], [28.8, 138.0], [28.9, 138.0], [29.0, 139.0], [29.1, 139.0], [29.2, 139.0], [29.3, 139.0], [29.4, 139.0], [29.5, 139.0], [29.6, 140.0], [29.7, 140.0], [29.8, 140.0], [29.9, 140.0], [30.0, 140.0], [30.1, 140.0], [30.2, 140.0], [30.3, 141.0], [30.4, 141.0], [30.5, 141.0], [30.6, 141.0], [30.7, 141.0], [30.8, 142.0], [30.9, 142.0], [31.0, 142.0], [31.1, 142.0], [31.2, 142.0], [31.3, 142.0], [31.4, 142.0], [31.5, 142.0], [31.6, 143.0], [31.7, 143.0], [31.8, 143.0], [31.9, 143.0], [32.0, 143.0], [32.1, 143.0], [32.2, 143.0], [32.3, 143.0], [32.4, 143.0], [32.5, 144.0], [32.6, 144.0], [32.7, 144.0], [32.8, 144.0], [32.9, 144.0], [33.0, 144.0], [33.1, 144.0], [33.2, 145.0], [33.3, 145.0], [33.4, 145.0], [33.5, 145.0], [33.6, 146.0], [33.7, 146.0], [33.8, 146.0], [33.9, 146.0], [34.0, 146.0], [34.1, 146.0], [34.2, 146.0], [34.3, 146.0], [34.4, 147.0], [34.5, 147.0], [34.6, 147.0], [34.7, 148.0], [34.8, 148.0], [34.9, 148.0], [35.0, 148.0], [35.1, 148.0], [35.2, 148.0], [35.3, 148.0], [35.4, 149.0], [35.5, 149.0], [35.6, 149.0], [35.7, 150.0], [35.8, 150.0], [35.9, 150.0], [36.0, 150.0], [36.1, 150.0], [36.2, 150.0], [36.3, 150.0], [36.4, 150.0], [36.5, 151.0], [36.6, 151.0], [36.7, 151.0], [36.8, 151.0], [36.9, 151.0], [37.0, 152.0], [37.1, 152.0], [37.2, 152.0], [37.3, 152.0], [37.4, 152.0], [37.5, 153.0], [37.6, 153.0], [37.7, 153.0], [37.8, 153.0], [37.9, 153.0], [38.0, 153.0], [38.1, 154.0], [38.2, 154.0], [38.3, 154.0], [38.4, 154.0], [38.5, 154.0], [38.6, 154.0], [38.7, 154.0], [38.8, 154.0], [38.9, 154.0], [39.0, 155.0], [39.1, 155.0], [39.2, 155.0], [39.3, 155.0], [39.4, 156.0], [39.5, 156.0], [39.6, 156.0], [39.7, 156.0], [39.8, 156.0], [39.9, 157.0], [40.0, 157.0], [40.1, 157.0], [40.2, 157.0], [40.3, 158.0], [40.4, 158.0], [40.5, 158.0], [40.6, 159.0], [40.7, 159.0], [40.8, 159.0], [40.9, 159.0], [41.0, 159.0], [41.1, 159.0], [41.2, 159.0], [41.3, 159.0], [41.4, 160.0], [41.5, 160.0], [41.6, 160.0], [41.7, 160.0], [41.8, 160.0], [41.9, 160.0], [42.0, 160.0], [42.1, 160.0], [42.2, 161.0], [42.3, 161.0], [42.4, 161.0], [42.5, 162.0], [42.6, 162.0], [42.7, 162.0], [42.8, 162.0], [42.9, 162.0], [43.0, 162.0], [43.1, 163.0], [43.2, 163.0], [43.3, 163.0], [43.4, 163.0], [43.5, 163.0], [43.6, 163.0], [43.7, 163.0], [43.8, 163.0], [43.9, 164.0], [44.0, 164.0], [44.1, 164.0], [44.2, 164.0], [44.3, 164.0], [44.4, 164.0], [44.5, 164.0], [44.6, 164.0], [44.7, 165.0], [44.8, 165.0], [44.9, 165.0], [45.0, 165.0], [45.1, 166.0], [45.2, 166.0], [45.3, 166.0], [45.4, 167.0], [45.5, 167.0], [45.6, 167.0], [45.7, 167.0], [45.8, 167.0], [45.9, 167.0], [46.0, 167.0], [46.1, 168.0], [46.2, 168.0], [46.3, 168.0], [46.4, 169.0], [46.5, 169.0], [46.6, 170.0], [46.7, 170.0], [46.8, 170.0], [46.9, 170.0], [47.0, 170.0], [47.1, 171.0], [47.2, 171.0], [47.3, 172.0], [47.4, 173.0], [47.5, 174.0], [47.6, 174.0], [47.7, 174.0], [47.8, 175.0], [47.9, 175.0], [48.0, 176.0], [48.1, 176.0], [48.2, 177.0], [48.3, 177.0], [48.4, 177.0], [48.5, 177.0], [48.6, 178.0], [48.7, 178.0], [48.8, 178.0], [48.9, 179.0], [49.0, 179.0], [49.1, 181.0], [49.2, 181.0], [49.3, 182.0], [49.4, 182.0], [49.5, 182.0], [49.6, 183.0], [49.7, 183.0], [49.8, 183.0], [49.9, 184.0], [50.0, 185.0], [50.1, 186.0], [50.2, 187.0], [50.3, 188.0], [50.4, 189.0], [50.5, 189.0], [50.6, 190.0], [50.7, 190.0], [50.8, 190.0], [50.9, 190.0], [51.0, 192.0], [51.1, 192.0], [51.2, 193.0], [51.3, 194.0], [51.4, 194.0], [51.5, 194.0], [51.6, 195.0], [51.7, 195.0], [51.8, 196.0], [51.9, 196.0], [52.0, 196.0], [52.1, 196.0], [52.2, 197.0], [52.3, 197.0], [52.4, 197.0], [52.5, 197.0], [52.6, 198.0], [52.7, 199.0], [52.8, 200.0], [52.9, 200.0], [53.0, 200.0], [53.1, 202.0], [53.2, 202.0], [53.3, 202.0], [53.4, 204.0], [53.5, 205.0], [53.6, 205.0], [53.7, 205.0], [53.8, 207.0], [53.9, 208.0], [54.0, 208.0], [54.1, 208.0], [54.2, 209.0], [54.3, 209.0], [54.4, 210.0], [54.5, 212.0], [54.6, 213.0], [54.7, 214.0], [54.8, 216.0], [54.9, 216.0], [55.0, 220.0], [55.1, 226.0], [55.2, 229.0], [55.3, 231.0], [55.4, 232.0], [55.5, 232.0], [55.6, 233.0], [55.7, 234.0], [55.8, 234.0], [55.9, 234.0], [56.0, 235.0], [56.1, 238.0], [56.2, 242.0], [56.3, 243.0], [56.4, 246.0], [56.5, 247.0], [56.6, 248.0], [56.7, 249.0], [56.8, 249.0], [56.9, 255.0], [57.0, 264.0], [57.1, 269.0], [57.2, 283.0], [57.3, 286.0], [57.4, 288.0], [57.5, 289.0], [57.6, 292.0], [57.7, 293.0], [57.8, 310.0], [57.9, 319.0], [58.0, 328.0], [58.1, 328.0], [58.2, 350.0], [58.3, 352.0], [58.4, 354.0], [58.5, 357.0], [58.6, 364.0], [58.7, 372.0], [58.8, 378.0], [58.9, 406.0], [59.0, 415.0], [59.1, 422.0], [59.2, 424.0], [59.3, 425.0], [59.4, 427.0], [59.5, 427.0], [59.6, 448.0], [59.7, 471.0], [59.8, 475.0], [59.9, 477.0], [60.0, 498.0], [60.1, 534.0], [60.2, 540.0], [60.3, 550.0], [60.4, 575.0], [60.5, 578.0], [60.6, 589.0], [60.7, 603.0], [60.8, 606.0], [60.9, 607.0], [61.0, 609.0], [61.1, 639.0], [61.2, 661.0], [61.3, 662.0], [61.4, 683.0], [61.5, 809.0], [61.6, 812.0], [61.7, 824.0], [61.8, 872.0], [61.9, 885.0], [62.0, 954.0], [62.1, 968.0], [62.2, 969.0], [62.3, 970.0], [62.4, 975.0], [62.5, 976.0], [62.6, 981.0], [62.7, 982.0], [62.8, 985.0], [62.9, 985.0], [63.0, 991.0], [63.1, 992.0], [63.2, 992.0], [63.3, 998.0], [63.4, 1002.0], [63.5, 1005.0], [63.6, 1021.0], [63.7, 1027.0], [63.8, 1057.0], [63.9, 1092.0], [64.0, 1270.0], [64.1, 1285.0], [64.2, 1327.0], [64.3, 1654.0], [64.4, 1685.0], [64.5, 1732.0], [64.6, 1781.0], [64.7, 1781.0], [64.8, 1864.0], [64.9, 1879.0], [65.0, 1886.0], [65.1, 1888.0], [65.2, 1893.0], [65.3, 1927.0], [65.4, 1965.0], [65.5, 1971.0], [65.6, 1989.0], [65.7, 2020.0], [65.8, 2049.0], [65.9, 2055.0], [66.0, 2064.0], [66.1, 2064.0], [66.2, 2067.0], [66.3, 2076.0], [66.4, 2098.0], [66.5, 2157.0], [66.6, 2193.0], [66.7, 2242.0], [66.8, 2257.0], [66.9, 2302.0], [67.0, 2303.0], [67.1, 2406.0], [67.2, 2417.0], [67.3, 2426.0], [67.4, 2431.0], [67.5, 2444.0], [67.6, 2499.0], [67.7, 2553.0], [67.8, 2569.0], [67.9, 2613.0], [68.0, 2614.0], [68.1, 2620.0], [68.2, 2650.0], [68.3, 2660.0], [68.4, 2678.0], [68.5, 2679.0], [68.6, 2679.0], [68.7, 2680.0], [68.8, 2685.0], [68.9, 2687.0], [69.0, 2747.0], [69.1, 2757.0], [69.2, 2793.0], [69.3, 2809.0], [69.4, 2835.0], [69.5, 2859.0], [69.6, 2867.0], [69.7, 2892.0], [69.8, 2968.0], [69.9, 3022.0], [70.0, 3035.0], [70.1, 3103.0], [70.2, 3104.0], [70.3, 3135.0], [70.4, 3166.0], [70.5, 3176.0], [70.6, 3189.0], [70.7, 3253.0], [70.8, 3255.0], [70.9, 3257.0], [71.0, 3259.0], [71.1, 3261.0], [71.2, 3359.0], [71.3, 3395.0], [71.4, 3407.0], [71.5, 3461.0], [71.6, 3461.0], [71.7, 3462.0], [71.8, 3465.0], [71.9, 3472.0], [72.0, 3477.0], [72.1, 3585.0], [72.2, 3586.0], [72.3, 3630.0], [72.4, 3652.0], [72.5, 3772.0], [72.6, 3802.0], [72.7, 3858.0], [72.8, 3934.0], [72.9, 3949.0], [73.0, 4004.0], [73.1, 4025.0], [73.2, 4029.0], [73.3, 4034.0], [73.4, 4078.0], [73.5, 4095.0], [73.6, 4104.0], [73.7, 4160.0], [73.8, 4203.0], [73.9, 4226.0], [74.0, 4313.0], [74.1, 4314.0], [74.2, 4322.0], [74.3, 4341.0], [74.4, 4351.0], [74.5, 4381.0], [74.6, 4387.0], [74.7, 4408.0], [74.8, 4425.0], [74.9, 4443.0], [75.0, 4469.0], [75.1, 4497.0], [75.2, 4503.0], [75.3, 4510.0], [75.4, 4511.0], [75.5, 4519.0], [75.6, 4529.0], [75.7, 4573.0], [75.8, 4607.0], [75.9, 4617.0], [76.0, 4618.0], [76.1, 4633.0], [76.2, 4643.0], [76.3, 4651.0], [76.4, 4669.0], [76.5, 4671.0], [76.6, 4673.0], [76.7, 4702.0], [76.8, 4715.0], [76.9, 4733.0], [77.0, 4739.0], [77.1, 4745.0], [77.2, 4758.0], [77.3, 4778.0], [77.4, 4802.0], [77.5, 4804.0], [77.6, 4808.0], [77.7, 4811.0], [77.8, 4813.0], [77.9, 4825.0], [78.0, 4833.0], [78.1, 4839.0], [78.2, 4839.0], [78.3, 4853.0], [78.4, 4854.0], [78.5, 4859.0], [78.6, 4862.0], [78.7, 4862.0], [78.8, 4872.0], [78.9, 4877.0], [79.0, 4878.0], [79.1, 4915.0], [79.2, 4926.0], [79.3, 4928.0], [79.4, 4929.0], [79.5, 4938.0], [79.6, 4943.0], [79.7, 4973.0], [79.8, 4976.0], [79.9, 4989.0], [80.0, 5014.0], [80.1, 5014.0], [80.2, 5020.0], [80.3, 5020.0], [80.4, 5027.0], [80.5, 5030.0], [80.6, 5031.0], [80.7, 5035.0], [80.8, 5037.0], [80.9, 5039.0], [81.0, 5041.0], [81.1, 5044.0], [81.2, 5047.0], [81.3, 5051.0], [81.4, 5052.0], [81.5, 5085.0], [81.6, 5095.0], [81.7, 5105.0], [81.8, 5117.0], [81.9, 5129.0], [82.0, 5135.0], [82.1, 5168.0], [82.2, 5202.0], [82.3, 5213.0], [82.4, 5222.0], [82.5, 5224.0], [82.6, 5234.0], [82.7, 5238.0], [82.8, 5255.0], [82.9, 5273.0], [83.0, 5287.0], [83.1, 5307.0], [83.2, 5321.0], [83.3, 5348.0], [83.4, 5385.0], [83.5, 5401.0], [83.6, 5432.0], [83.7, 5436.0], [83.8, 5437.0], [83.9, 5444.0], [84.0, 5460.0], [84.1, 5470.0], [84.2, 5477.0], [84.3, 5495.0], [84.4, 5500.0], [84.5, 5515.0], [84.6, 5516.0], [84.7, 5519.0], [84.8, 5537.0], [84.9, 5547.0], [85.0, 5619.0], [85.1, 5627.0], [85.2, 5633.0], [85.3, 5644.0], [85.4, 5657.0], [85.5, 5661.0], [85.6, 5669.0], [85.7, 5683.0], [85.8, 5684.0], [85.9, 5684.0], [86.0, 5688.0], [86.1, 5696.0], [86.2, 5709.0], [86.3, 5715.0], [86.4, 5726.0], [86.5, 5729.0], [86.6, 5740.0], [86.7, 5756.0], [86.8, 5776.0], [86.9, 5796.0], [87.0, 5798.0], [87.1, 5836.0], [87.2, 5837.0], [87.3, 5892.0], [87.4, 5939.0], [87.5, 5980.0], [87.6, 6004.0], [87.7, 6022.0], [87.8, 6043.0], [87.9, 6044.0], [88.0, 6050.0], [88.1, 6058.0], [88.2, 6060.0], [88.3, 6072.0], [88.4, 6085.0], [88.5, 6096.0], [88.6, 6112.0], [88.7, 6132.0], [88.8, 6133.0], [88.9, 6146.0], [89.0, 6184.0], [89.1, 6205.0], [89.2, 6213.0], [89.3, 6229.0], [89.4, 6232.0], [89.5, 6240.0], [89.6, 6257.0], [89.7, 6258.0], [89.8, 6268.0], [89.9, 6305.0], [90.0, 6311.0], [90.1, 6319.0], [90.2, 6326.0], [90.3, 6436.0], [90.4, 6441.0], [90.5, 6441.0], [90.6, 6494.0], [90.7, 6608.0], [90.8, 6666.0], [90.9, 6678.0], [91.0, 6690.0], [91.1, 6797.0], [91.2, 6802.0], [91.3, 6830.0], [91.4, 6840.0], [91.5, 6841.0], [91.6, 6874.0], [91.7, 6897.0], [91.8, 6929.0], [91.9, 6940.0], [92.0, 6964.0], [92.1, 7025.0], [92.2, 7068.0], [92.3, 7090.0], [92.4, 7098.0], [92.5, 7102.0], [92.6, 7117.0], [92.7, 7128.0], [92.8, 7135.0], [92.9, 7155.0], [93.0, 7232.0], [93.1, 7256.0], [93.2, 7261.0], [93.3, 7269.0], [93.4, 7290.0], [93.5, 7329.0], [93.6, 7351.0], [93.7, 7390.0], [93.8, 7421.0], [93.9, 7440.0], [94.0, 7476.0], [94.1, 7477.0], [94.2, 7505.0], [94.3, 7555.0], [94.4, 7565.0], [94.5, 7604.0], [94.6, 7604.0], [94.7, 7611.0], [94.8, 7648.0], [94.9, 7657.0], [95.0, 7668.0], [95.1, 7680.0], [95.2, 7682.0], [95.3, 7743.0], [95.4, 7745.0], [95.5, 7756.0], [95.6, 7774.0], [95.7, 7784.0], [95.8, 7790.0], [95.9, 7791.0], [96.0, 7808.0], [96.1, 7814.0], [96.2, 7815.0], [96.3, 7822.0], [96.4, 7833.0], [96.5, 7850.0], [96.6, 7883.0], [96.7, 7884.0], [96.8, 7888.0], [96.9, 7908.0], [97.0, 7924.0], [97.1, 7933.0], [97.2, 7938.0], [97.3, 7960.0], [97.4, 7976.0], [97.5, 8004.0], [97.6, 8013.0], [97.7, 8026.0], [97.8, 8038.0], [97.9, 8041.0], [98.0, 8079.0], [98.1, 8089.0], [98.2, 8152.0], [98.3, 8162.0], [98.4, 8171.0], [98.5, 8176.0], [98.6, 8193.0], [98.7, 8208.0], [98.8, 8208.0], [98.9, 8209.0], [99.0, 8231.0], [99.1, 8236.0], [99.2, 8256.0], [99.3, 8298.0], [99.4, 8343.0], [99.5, 8381.0], [99.6, 8390.0], [99.7, 8391.0], [99.8, 8395.0], [99.9, 8467.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 516.0, "series": [{"data": [[0.0, 12.0], [600.0, 8.0], [800.0, 5.0], [900.0, 14.0], [1000.0, 6.0], [1200.0, 2.0], [1300.0, 1.0], [1600.0, 2.0], [1700.0, 3.0], [1800.0, 5.0], [1900.0, 4.0], [2000.0, 9.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 6.0], [2500.0, 2.0], [2600.0, 11.0], [2700.0, 3.0], [2800.0, 5.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 6.0], [3200.0, 5.0], [3300.0, 2.0], [3400.0, 7.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 6.0], [4100.0, 2.0], [4300.0, 7.0], [4200.0, 2.0], [4500.0, 6.0], [4600.0, 9.0], [4400.0, 5.0], [4800.0, 17.0], [4700.0, 7.0], [4900.0, 9.0], [5000.0, 17.0], [5100.0, 5.0], [5200.0, 9.0], [5300.0, 4.0], [5400.0, 9.0], [5500.0, 6.0], [5600.0, 12.0], [5700.0, 9.0], [5800.0, 3.0], [6000.0, 10.0], [6100.0, 5.0], [5900.0, 2.0], [6200.0, 8.0], [6300.0, 4.0], [6600.0, 4.0], [6400.0, 4.0], [6800.0, 6.0], [6900.0, 3.0], [6700.0, 1.0], [7000.0, 4.0], [7100.0, 5.0], [7300.0, 3.0], [7200.0, 5.0], [7400.0, 4.0], [7500.0, 3.0], [7600.0, 8.0], [7700.0, 7.0], [7800.0, 9.0], [7900.0, 6.0], [8000.0, 7.0], [8100.0, 5.0], [8200.0, 7.0], [8300.0, 5.0], [8400.0, 1.0], [100.0, 516.0], [200.0, 49.0], [300.0, 11.0], [400.0, 12.0], [500.0, 6.0]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requêtes \ntemps de réponse <= 500ms"], [1, "Requêtes \ntemps de réponse > 500ms et <= 1 500ms"], [2, "Requêtes \ntemps de réponse > 1 500ms"], [3, "Requêtes en erreur"]], "maxY": 600.0, "series": [{"data": [[0.0, 600.0]], "color": "#9ACD32", "isOverall": false, "label": "Requêtes \ntemps de réponse <= 500ms", "isController": false}, {"data": [[1.0, 42.0]], "color": "yellow", "isOverall": false, "label": "Requêtes \ntemps de réponse > 500ms et <= 1 500ms", "isController": false}, {"data": [[2.0, 358.0]], "color": "orange", "isOverall": false, "label": "Requêtes \ntemps de réponse > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requêtes en erreur", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 244.84800000000016, "minX": 1.7435154E12, "maxY": 244.84800000000016, "series": [{"data": [[1.7435154E12, 244.84800000000016]], "isOverall": false, "label": "LoginSetTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 95.0, "minX": 2.0, "maxY": 8395.0, "series": [{"data": [[2.0, 350.0], [4.0, 338.6666666666667], [5.0, 352.0], [6.0, 195.0], [7.0, 328.0], [8.0, 477.0], [9.0, 196.0], [11.0, 353.0], [13.0, 98.0], [14.0, 101.0], [15.0, 103.0], [17.0, 108.5], [18.0, 95.0], [19.0, 111.0], [20.0, 2925.0], [21.0, 7255.0], [22.0, 2574.6], [24.0, 2694.5], [25.0, 5000.166666666667], [26.0, 4097.0], [27.0, 2246.666666666667], [28.0, 159.0], [29.0, 3318.857142857143], [30.0, 142.66666666666666], [31.0, 2537.6], [33.0, 1359.2], [32.0, 2071.25], [35.0, 2941.0], [34.0, 2246.333333333333], [37.0, 2027.2500000000002], [36.0, 3186.0], [39.0, 2164.3333333333335], [38.0, 8395.0], [41.0, 7689.333333333333], [40.0, 2085.6666666666665], [43.0, 2903.333333333333], [47.0, 6405.0], [46.0, 156.5], [49.0, 6251.5], [48.0, 3630.0], [51.0, 7004.0], [50.0, 2885.5], [53.0, 7973.0], [52.0, 159.0], [57.0, 4228.0], [56.0, 3175.25], [59.0, 3684.5], [58.0, 2087.5], [61.0, 4093.0], [60.0, 2833.666666666667], [62.0, 1206.0], [63.0, 197.0], [67.0, 180.0], [66.0, 183.66666666666666], [65.0, 193.33333333333334], [70.0, 2125.9999999999995], [69.0, 1789.0000000000002], [68.0, 3912.3999999999996], [71.0, 153.4], [73.0, 2660.1111111111113], [72.0, 1081.0], [75.0, 165.5], [74.0, 163.5], [79.0, 1047.1428571428573], [78.0, 2793.0], [77.0, 2670.666666666667], [76.0, 4740.857142857142], [83.0, 1976.5], [82.0, 3780.0], [80.0, 4439.6], [81.0, 211.5], [86.0, 1349.1666666666665], [85.0, 590.818181818182], [84.0, 1645.0], [87.0, 221.78947368421055], [91.0, 1541.0], [90.0, 804.9333333333333], [89.0, 3047.8571428571427], [88.0, 191.875], [94.0, 6840.0], [93.0, 8176.0], [99.0, 119.66666666666667], [98.0, 5049.5], [97.0, 5817.6], [96.0, 473.0], [103.0, 111.0], [102.0, 178.0], [101.0, 114.0], [100.0, 109.0], [106.0, 1121.625], [105.0, 5696.0], [104.0, 4876.142857142857], [107.0, 132.5], [111.0, 121.0], [110.0, 2646.0], [109.0, 1072.3750000000002], [108.0, 1811.3750000000005], [115.0, 7745.0], [114.0, 118.5], [112.0, 138.4], [113.0, 155.83333333333334], [119.0, 8004.0], [118.0, 133.5], [116.0, 7421.0], [123.0, 103.0], [122.0, 7604.0], [121.0, 4066.0], [125.0, 104.0], [142.0, 7743.0], [136.0, 5798.0], [150.0, 5500.0], [149.0, 7888.0], [159.0, 122.33333333333333], [157.0, 4005.5], [156.0, 109.0], [154.0, 7090.0], [153.0, 7238.5], [152.0, 109.0], [166.0, 100.0], [165.0, 6392.5], [163.0, 103.0], [162.0, 109.0], [161.0, 112.0], [175.0, 6297.0], [174.0, 5658.666666666667], [171.0, 7774.0], [170.0, 5135.0], [182.0, 7476.0], [181.0, 7505.0], [180.0, 2734.5], [178.0, 5219.333333333333], [177.0, 106.0], [176.0, 1650.7999999999997], [179.0, 7155.0], [191.0, 124.0], [185.0, 150.0], [206.0, 144.5], [205.0, 4915.0], [204.0, 5401.0], [203.0, 128.0], [215.0, 2565.5], [214.0, 145.0], [212.0, 141.0], [211.0, 160.0], [209.0, 3740.5], [208.0, 143.0], [223.0, 142.0], [221.0, 150.0], [220.0, 145.0], [218.0, 137.0], [217.0, 123.25], [216.0, 3173.5], [219.0, 7329.0], [231.0, 190.0], [230.0, 126.0], [228.0, 137.0], [226.0, 128.0], [224.0, 5287.0], [232.0, 2163.176470588235], [247.0, 4669.0], [246.0, 3602.0], [243.0, 170.0], [242.0, 106.0], [240.0, 4733.0], [253.0, 6436.0], [250.0, 144.0], [267.0, 142.40000000000003], [266.0, 1523.8], [268.0, 132.0], [270.0, 127.0], [262.0, 137.0], [260.0, 146.0], [259.0, 142.0], [258.0, 138.0], [286.0, 290.5], [287.0, 1073.0], [280.0, 1896.6666666666665], [285.0, 358.5], [283.0, 2758.0], [281.0, 180.5], [279.0, 2121.0], [278.0, 138.0], [284.0, 1513.0], [275.0, 99.0], [274.0, 1743.7499999999998], [273.0, 117.0], [272.0, 110.0], [282.0, 2407.75], [289.0, 406.0], [298.0, 1228.5], [297.0, 105.0], [296.0, 145.5], [294.0, 1886.0], [292.0, 1888.0], [293.0, 126.5], [290.0, 357.0], [291.0, 4088.0666666666666], [288.0, 2138.0], [295.0, 235.0], [299.0, 1421.3333333333335], [301.0, 2073.3333333333335], [303.0, 2674.3333333333335], [300.0, 992.6666666666666], [316.0, 1781.0], [315.0, 1015.5], [307.0, 1809.6666666666667], [314.0, 209.0], [311.0, 127.0], [310.0, 2553.0], [309.0, 992.0], [308.0, 2569.0], [305.0, 119.0], [348.0, 310.0], [367.0, 166.0], [376.0, 205.8181818181818], [397.0, 137.16666666666669], [393.0, 130.0], [386.0, 130.38461538461542], [407.0, 477.16666666666663], [430.0, 134.71428571428572], [437.0, 120.0], [456.0, 739.1904761904761], [457.0, 2412.5], [476.0, 165.5], [479.0, 160.0], [474.0, 156.0], [466.0, 3259.0], [465.0, 3261.0], [467.0, 181.0], [478.0, 161.5], [473.0, 170.0], [472.0, 181.0], [471.0, 181.0], [470.0, 176.0], [468.0, 177.0], [480.0, 144.07142857142858], [483.0, 843.2], [482.0, 121.0], [481.0, 118.0], [484.0, 120.0], [485.0, 918.7647058823529], [486.0, 3041.0], [487.0, 2053.6], [488.0, 674.25], [489.0, 3202.3333333333335], [490.0, 1685.0], [491.0, 4853.0], [492.0, 2570.0], [493.0, 963.3333333333333], [494.0, 3661.299999999999], [495.0, 4412.58064516129], [496.0, 4207.5], [497.0, 4022.3750000000005]], "isOverall": false, "label": "Requête HTTP", "isController": false}, {"data": [[244.84700000000038, 2003.7110000000018]], "isOverall": false, "label": "Requête HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 497.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4050.0, "minX": 1.7435154E12, "maxY": 18099.866666666665, "series": [{"data": [[1.7435154E12, 18099.866666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7435154E12, 4050.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2003.7110000000018, "minX": 1.7435154E12, "maxY": 2003.7110000000018, "series": [{"data": [[1.7435154E12, 2003.7110000000018]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2003.6419999999964, "minX": 1.7435154E12, "maxY": 2003.6419999999964, "series": [{"data": [[1.7435154E12, 2003.6419999999964]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1830.5209999999988, "minX": 1.7435154E12, "maxY": 1830.5209999999988, "series": [{"data": [[1.7435154E12, 1830.5209999999988]], "isOverall": false, "label": "Requête HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7435154E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 88.0, "minX": 1.7435154E12, "maxY": 8467.0, "series": [{"data": [[1.7435154E12, 8467.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7435154E12, 88.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7435154E12, 6310.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7435154E12, 8230.78]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7435154E12, 184.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7435154E12, 7667.449999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 137.0, "minX": 1.0, "maxY": 6236.0, "series": [{"data": [[1.0, 310.0], [128.0, 180.0], [166.0, 3787.0], [184.0, 6236.0], [193.0, 163.0], [97.0, 143.0], [106.0, 137.0], [125.0, 158.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 193.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 137.0, "minX": 1.0, "maxY": 6236.0, "series": [{"data": [[1.0, 302.0], [128.0, 179.5], [166.0, 3787.0], [184.0, 6236.0], [193.0, 163.0], [97.0, 143.0], [106.0, 137.0], [125.0, 158.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 193.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.7435154E12, "maxY": 16.666666666666668, "series": [{"data": [[1.7435154E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7435154E12, "title": "Codes Per Second"}},
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

