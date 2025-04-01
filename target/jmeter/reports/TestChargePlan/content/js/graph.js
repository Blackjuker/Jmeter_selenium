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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 4796.0, "series": [{"data": [[0.0, 14.0], [0.1, 17.0], [0.2, 18.0], [0.3, 18.0], [0.4, 18.0], [0.5, 18.0], [0.6, 18.0], [0.7, 18.0], [0.8, 18.0], [0.9, 18.0], [1.0, 18.0], [1.1, 19.0], [1.2, 19.0], [1.3, 19.0], [1.4, 19.0], [1.5, 19.0], [1.6, 19.0], [1.7, 19.0], [1.8, 20.0], [1.9, 20.0], [2.0, 20.0], [2.1, 20.0], [2.2, 20.0], [2.3, 20.0], [2.4, 20.0], [2.5, 21.0], [2.6, 21.0], [2.7, 21.0], [2.8, 21.0], [2.9, 21.0], [3.0, 21.0], [3.1, 21.0], [3.2, 21.0], [3.3, 21.0], [3.4, 21.0], [3.5, 21.0], [3.6, 21.0], [3.7, 22.0], [3.8, 22.0], [3.9, 22.0], [4.0, 22.0], [4.1, 22.0], [4.2, 22.0], [4.3, 22.0], [4.4, 22.0], [4.5, 22.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 22.0], [5.1, 22.0], [5.2, 23.0], [5.3, 23.0], [5.4, 23.0], [5.5, 23.0], [5.6, 23.0], [5.7, 23.0], [5.8, 23.0], [5.9, 23.0], [6.0, 23.0], [6.1, 23.0], [6.2, 23.0], [6.3, 23.0], [6.4, 23.0], [6.5, 24.0], [6.6, 24.0], [6.7, 24.0], [6.8, 24.0], [6.9, 24.0], [7.0, 24.0], [7.1, 24.0], [7.2, 24.0], [7.3, 24.0], [7.4, 24.0], [7.5, 24.0], [7.6, 24.0], [7.7, 24.0], [7.8, 25.0], [7.9, 25.0], [8.0, 25.0], [8.1, 25.0], [8.2, 25.0], [8.3, 25.0], [8.4, 25.0], [8.5, 25.0], [8.6, 25.0], [8.7, 25.0], [8.8, 25.0], [8.9, 25.0], [9.0, 25.0], [9.1, 25.0], [9.2, 25.0], [9.3, 26.0], [9.4, 26.0], [9.5, 26.0], [9.6, 26.0], [9.7, 26.0], [9.8, 26.0], [9.9, 26.0], [10.0, 26.0], [10.1, 26.0], [10.2, 26.0], [10.3, 26.0], [10.4, 26.0], [10.5, 26.0], [10.6, 26.0], [10.7, 26.0], [10.8, 26.0], [10.9, 26.0], [11.0, 26.0], [11.1, 26.0], [11.2, 26.0], [11.3, 27.0], [11.4, 27.0], [11.5, 27.0], [11.6, 27.0], [11.7, 27.0], [11.8, 27.0], [11.9, 27.0], [12.0, 27.0], [12.1, 27.0], [12.2, 27.0], [12.3, 27.0], [12.4, 27.0], [12.5, 27.0], [12.6, 27.0], [12.7, 27.0], [12.8, 27.0], [12.9, 28.0], [13.0, 28.0], [13.1, 28.0], [13.2, 28.0], [13.3, 28.0], [13.4, 28.0], [13.5, 28.0], [13.6, 28.0], [13.7, 28.0], [13.8, 28.0], [13.9, 28.0], [14.0, 28.0], [14.1, 29.0], [14.2, 29.0], [14.3, 29.0], [14.4, 29.0], [14.5, 29.0], [14.6, 29.0], [14.7, 29.0], [14.8, 29.0], [14.9, 29.0], [15.0, 29.0], [15.1, 29.0], [15.2, 29.0], [15.3, 29.0], [15.4, 29.0], [15.5, 29.0], [15.6, 29.0], [15.7, 29.0], [15.8, 30.0], [15.9, 30.0], [16.0, 30.0], [16.1, 30.0], [16.2, 30.0], [16.3, 30.0], [16.4, 30.0], [16.5, 30.0], [16.6, 30.0], [16.7, 30.0], [16.8, 30.0], [16.9, 30.0], [17.0, 30.0], [17.1, 30.0], [17.2, 30.0], [17.3, 31.0], [17.4, 31.0], [17.5, 31.0], [17.6, 31.0], [17.7, 31.0], [17.8, 31.0], [17.9, 31.0], [18.0, 31.0], [18.1, 31.0], [18.2, 31.0], [18.3, 31.0], [18.4, 31.0], [18.5, 31.0], [18.6, 31.0], [18.7, 31.0], [18.8, 31.0], [18.9, 32.0], [19.0, 32.0], [19.1, 32.0], [19.2, 32.0], [19.3, 32.0], [19.4, 32.0], [19.5, 32.0], [19.6, 32.0], [19.7, 32.0], [19.8, 32.0], [19.9, 33.0], [20.0, 33.0], [20.1, 33.0], [20.2, 33.0], [20.3, 33.0], [20.4, 33.0], [20.5, 33.0], [20.6, 33.0], [20.7, 33.0], [20.8, 33.0], [20.9, 33.0], [21.0, 33.0], [21.1, 33.0], [21.2, 33.0], [21.3, 34.0], [21.4, 34.0], [21.5, 34.0], [21.6, 34.0], [21.7, 34.0], [21.8, 34.0], [21.9, 34.0], [22.0, 34.0], [22.1, 34.0], [22.2, 34.0], [22.3, 35.0], [22.4, 35.0], [22.5, 35.0], [22.6, 35.0], [22.7, 35.0], [22.8, 35.0], [22.9, 35.0], [23.0, 35.0], [23.1, 35.0], [23.2, 35.0], [23.3, 35.0], [23.4, 35.0], [23.5, 35.0], [23.6, 36.0], [23.7, 36.0], [23.8, 36.0], [23.9, 36.0], [24.0, 36.0], [24.1, 36.0], [24.2, 36.0], [24.3, 36.0], [24.4, 36.0], [24.5, 36.0], [24.6, 36.0], [24.7, 36.0], [24.8, 36.0], [24.9, 36.0], [25.0, 36.0], [25.1, 36.0], [25.2, 37.0], [25.3, 37.0], [25.4, 37.0], [25.5, 37.0], [25.6, 37.0], [25.7, 37.0], [25.8, 37.0], [25.9, 37.0], [26.0, 37.0], [26.1, 37.0], [26.2, 37.0], [26.3, 37.0], [26.4, 37.0], [26.5, 38.0], [26.6, 38.0], [26.7, 38.0], [26.8, 38.0], [26.9, 38.0], [27.0, 38.0], [27.1, 38.0], [27.2, 38.0], [27.3, 38.0], [27.4, 38.0], [27.5, 39.0], [27.6, 39.0], [27.7, 39.0], [27.8, 39.0], [27.9, 39.0], [28.0, 39.0], [28.1, 39.0], [28.2, 39.0], [28.3, 39.0], [28.4, 39.0], [28.5, 39.0], [28.6, 39.0], [28.7, 39.0], [28.8, 39.0], [28.9, 40.0], [29.0, 40.0], [29.1, 40.0], [29.2, 40.0], [29.3, 40.0], [29.4, 40.0], [29.5, 40.0], [29.6, 40.0], [29.7, 40.0], [29.8, 40.0], [29.9, 40.0], [30.0, 41.0], [30.1, 41.0], [30.2, 41.0], [30.3, 41.0], [30.4, 41.0], [30.5, 41.0], [30.6, 41.0], [30.7, 41.0], [30.8, 41.0], [30.9, 41.0], [31.0, 41.0], [31.1, 42.0], [31.2, 42.0], [31.3, 42.0], [31.4, 42.0], [31.5, 42.0], [31.6, 42.0], [31.7, 42.0], [31.8, 42.0], [31.9, 42.0], [32.0, 42.0], [32.1, 42.0], [32.2, 42.0], [32.3, 42.0], [32.4, 42.0], [32.5, 42.0], [32.6, 43.0], [32.7, 43.0], [32.8, 43.0], [32.9, 43.0], [33.0, 43.0], [33.1, 43.0], [33.2, 43.0], [33.3, 43.0], [33.4, 43.0], [33.5, 43.0], [33.6, 43.0], [33.7, 43.0], [33.8, 43.0], [33.9, 44.0], [34.0, 44.0], [34.1, 44.0], [34.2, 44.0], [34.3, 44.0], [34.4, 44.0], [34.5, 44.0], [34.6, 44.0], [34.7, 45.0], [34.8, 45.0], [34.9, 45.0], [35.0, 45.0], [35.1, 45.0], [35.2, 45.0], [35.3, 45.0], [35.4, 45.0], [35.5, 45.0], [35.6, 45.0], [35.7, 46.0], [35.8, 46.0], [35.9, 46.0], [36.0, 46.0], [36.1, 46.0], [36.2, 46.0], [36.3, 46.0], [36.4, 46.0], [36.5, 46.0], [36.6, 46.0], [36.7, 46.0], [36.8, 46.0], [36.9, 46.0], [37.0, 47.0], [37.1, 47.0], [37.2, 47.0], [37.3, 47.0], [37.4, 47.0], [37.5, 47.0], [37.6, 47.0], [37.7, 47.0], [37.8, 47.0], [37.9, 48.0], [38.0, 48.0], [38.1, 48.0], [38.2, 48.0], [38.3, 48.0], [38.4, 48.0], [38.5, 48.0], [38.6, 48.0], [38.7, 49.0], [38.8, 49.0], [38.9, 49.0], [39.0, 49.0], [39.1, 49.0], [39.2, 49.0], [39.3, 49.0], [39.4, 49.0], [39.5, 49.0], [39.6, 49.0], [39.7, 50.0], [39.8, 50.0], [39.9, 50.0], [40.0, 50.0], [40.1, 50.0], [40.2, 50.0], [40.3, 50.0], [40.4, 50.0], [40.5, 51.0], [40.6, 51.0], [40.7, 51.0], [40.8, 51.0], [40.9, 51.0], [41.0, 51.0], [41.1, 52.0], [41.2, 52.0], [41.3, 52.0], [41.4, 52.0], [41.5, 52.0], [41.6, 52.0], [41.7, 52.0], [41.8, 53.0], [41.9, 53.0], [42.0, 53.0], [42.1, 53.0], [42.2, 53.0], [42.3, 53.0], [42.4, 53.0], [42.5, 54.0], [42.6, 54.0], [42.7, 54.0], [42.8, 54.0], [42.9, 54.0], [43.0, 54.0], [43.1, 55.0], [43.2, 55.0], [43.3, 55.0], [43.4, 55.0], [43.5, 55.0], [43.6, 56.0], [43.7, 56.0], [43.8, 56.0], [43.9, 56.0], [44.0, 57.0], [44.1, 57.0], [44.2, 58.0], [44.3, 58.0], [44.4, 58.0], [44.5, 59.0], [44.6, 59.0], [44.7, 59.0], [44.8, 60.0], [44.9, 60.0], [45.0, 60.0], [45.1, 60.0], [45.2, 61.0], [45.3, 61.0], [45.4, 61.0], [45.5, 61.0], [45.6, 61.0], [45.7, 62.0], [45.8, 62.0], [45.9, 62.0], [46.0, 62.0], [46.1, 62.0], [46.2, 63.0], [46.3, 63.0], [46.4, 63.0], [46.5, 63.0], [46.6, 64.0], [46.7, 64.0], [46.8, 65.0], [46.9, 65.0], [47.0, 65.0], [47.1, 65.0], [47.2, 65.0], [47.3, 65.0], [47.4, 66.0], [47.5, 66.0], [47.6, 66.0], [47.7, 66.0], [47.8, 67.0], [47.9, 67.0], [48.0, 67.0], [48.1, 67.0], [48.2, 68.0], [48.3, 68.0], [48.4, 68.0], [48.5, 69.0], [48.6, 69.0], [48.7, 69.0], [48.8, 69.0], [48.9, 69.0], [49.0, 69.0], [49.1, 69.0], [49.2, 70.0], [49.3, 70.0], [49.4, 71.0], [49.5, 71.0], [49.6, 71.0], [49.7, 72.0], [49.8, 72.0], [49.9, 72.0], [50.0, 72.0], [50.1, 72.0], [50.2, 73.0], [50.3, 73.0], [50.4, 73.0], [50.5, 73.0], [50.6, 73.0], [50.7, 73.0], [50.8, 74.0], [50.9, 74.0], [51.0, 74.0], [51.1, 75.0], [51.2, 75.0], [51.3, 75.0], [51.4, 76.0], [51.5, 76.0], [51.6, 76.0], [51.7, 76.0], [51.8, 76.0], [51.9, 77.0], [52.0, 77.0], [52.1, 77.0], [52.2, 77.0], [52.3, 77.0], [52.4, 78.0], [52.5, 78.0], [52.6, 78.0], [52.7, 79.0], [52.8, 79.0], [52.9, 80.0], [53.0, 80.0], [53.1, 80.0], [53.2, 80.0], [53.3, 80.0], [53.4, 80.0], [53.5, 81.0], [53.6, 81.0], [53.7, 81.0], [53.8, 81.0], [53.9, 81.0], [54.0, 82.0], [54.1, 82.0], [54.2, 82.0], [54.3, 82.0], [54.4, 82.0], [54.5, 83.0], [54.6, 83.0], [54.7, 84.0], [54.8, 84.0], [54.9, 84.0], [55.0, 85.0], [55.1, 85.0], [55.2, 85.0], [55.3, 85.0], [55.4, 86.0], [55.5, 86.0], [55.6, 86.0], [55.7, 87.0], [55.8, 87.0], [55.9, 87.0], [56.0, 88.0], [56.1, 88.0], [56.2, 88.0], [56.3, 89.0], [56.4, 89.0], [56.5, 90.0], [56.6, 90.0], [56.7, 90.0], [56.8, 91.0], [56.9, 91.0], [57.0, 91.0], [57.1, 91.0], [57.2, 91.0], [57.3, 91.0], [57.4, 92.0], [57.5, 92.0], [57.6, 92.0], [57.7, 93.0], [57.8, 93.0], [57.9, 93.0], [58.0, 93.0], [58.1, 94.0], [58.2, 94.0], [58.3, 94.0], [58.4, 94.0], [58.5, 95.0], [58.6, 95.0], [58.7, 96.0], [58.8, 96.0], [58.9, 96.0], [59.0, 97.0], [59.1, 98.0], [59.2, 99.0], [59.3, 99.0], [59.4, 99.0], [59.5, 100.0], [59.6, 100.0], [59.7, 100.0], [59.8, 102.0], [59.9, 103.0], [60.0, 103.0], [60.1, 104.0], [60.2, 104.0], [60.3, 104.0], [60.4, 104.0], [60.5, 104.0], [60.6, 105.0], [60.7, 105.0], [60.8, 106.0], [60.9, 106.0], [61.0, 106.0], [61.1, 106.0], [61.2, 107.0], [61.3, 107.0], [61.4, 107.0], [61.5, 108.0], [61.6, 108.0], [61.7, 108.0], [61.8, 108.0], [61.9, 109.0], [62.0, 110.0], [62.1, 110.0], [62.2, 111.0], [62.3, 111.0], [62.4, 111.0], [62.5, 111.0], [62.6, 112.0], [62.7, 112.0], [62.8, 112.0], [62.9, 112.0], [63.0, 113.0], [63.1, 113.0], [63.2, 113.0], [63.3, 113.0], [63.4, 114.0], [63.5, 114.0], [63.6, 114.0], [63.7, 114.0], [63.8, 115.0], [63.9, 115.0], [64.0, 115.0], [64.1, 115.0], [64.2, 116.0], [64.3, 116.0], [64.4, 116.0], [64.5, 116.0], [64.6, 116.0], [64.7, 117.0], [64.8, 117.0], [64.9, 117.0], [65.0, 118.0], [65.1, 118.0], [65.2, 118.0], [65.3, 118.0], [65.4, 119.0], [65.5, 119.0], [65.6, 119.0], [65.7, 119.0], [65.8, 119.0], [65.9, 120.0], [66.0, 121.0], [66.1, 121.0], [66.2, 122.0], [66.3, 122.0], [66.4, 122.0], [66.5, 122.0], [66.6, 122.0], [66.7, 123.0], [66.8, 123.0], [66.9, 123.0], [67.0, 123.0], [67.1, 123.0], [67.2, 123.0], [67.3, 124.0], [67.4, 124.0], [67.5, 124.0], [67.6, 125.0], [67.7, 125.0], [67.8, 125.0], [67.9, 126.0], [68.0, 126.0], [68.1, 127.0], [68.2, 127.0], [68.3, 127.0], [68.4, 128.0], [68.5, 128.0], [68.6, 128.0], [68.7, 128.0], [68.8, 129.0], [68.9, 129.0], [69.0, 129.0], [69.1, 130.0], [69.2, 130.0], [69.3, 130.0], [69.4, 130.0], [69.5, 131.0], [69.6, 131.0], [69.7, 131.0], [69.8, 132.0], [69.9, 132.0], [70.0, 133.0], [70.1, 133.0], [70.2, 134.0], [70.3, 134.0], [70.4, 135.0], [70.5, 135.0], [70.6, 135.0], [70.7, 135.0], [70.8, 136.0], [70.9, 136.0], [71.0, 136.0], [71.1, 136.0], [71.2, 136.0], [71.3, 136.0], [71.4, 137.0], [71.5, 137.0], [71.6, 137.0], [71.7, 138.0], [71.8, 138.0], [71.9, 139.0], [72.0, 139.0], [72.1, 140.0], [72.2, 140.0], [72.3, 141.0], [72.4, 141.0], [72.5, 142.0], [72.6, 142.0], [72.7, 142.0], [72.8, 143.0], [72.9, 144.0], [73.0, 144.0], [73.1, 145.0], [73.2, 145.0], [73.3, 145.0], [73.4, 147.0], [73.5, 147.0], [73.6, 147.0], [73.7, 148.0], [73.8, 148.0], [73.9, 148.0], [74.0, 148.0], [74.1, 148.0], [74.2, 149.0], [74.3, 149.0], [74.4, 149.0], [74.5, 149.0], [74.6, 149.0], [74.7, 150.0], [74.8, 150.0], [74.9, 151.0], [75.0, 151.0], [75.1, 152.0], [75.2, 153.0], [75.3, 153.0], [75.4, 154.0], [75.5, 154.0], [75.6, 154.0], [75.7, 155.0], [75.8, 156.0], [75.9, 157.0], [76.0, 159.0], [76.1, 159.0], [76.2, 160.0], [76.3, 160.0], [76.4, 161.0], [76.5, 161.0], [76.6, 161.0], [76.7, 162.0], [76.8, 163.0], [76.9, 164.0], [77.0, 164.0], [77.1, 165.0], [77.2, 165.0], [77.3, 166.0], [77.4, 166.0], [77.5, 168.0], [77.6, 168.0], [77.7, 169.0], [77.8, 170.0], [77.9, 172.0], [78.0, 175.0], [78.1, 177.0], [78.2, 177.0], [78.3, 178.0], [78.4, 178.0], [78.5, 179.0], [78.6, 180.0], [78.7, 180.0], [78.8, 181.0], [78.9, 183.0], [79.0, 183.0], [79.1, 183.0], [79.2, 184.0], [79.3, 184.0], [79.4, 185.0], [79.5, 185.0], [79.6, 186.0], [79.7, 186.0], [79.8, 186.0], [79.9, 187.0], [80.0, 187.0], [80.1, 188.0], [80.2, 188.0], [80.3, 189.0], [80.4, 190.0], [80.5, 190.0], [80.6, 191.0], [80.7, 191.0], [80.8, 192.0], [80.9, 192.0], [81.0, 193.0], [81.1, 193.0], [81.2, 195.0], [81.3, 196.0], [81.4, 196.0], [81.5, 197.0], [81.6, 197.0], [81.7, 197.0], [81.8, 198.0], [81.9, 198.0], [82.0, 199.0], [82.1, 200.0], [82.2, 200.0], [82.3, 200.0], [82.4, 201.0], [82.5, 201.0], [82.6, 203.0], [82.7, 205.0], [82.8, 206.0], [82.9, 207.0], [83.0, 208.0], [83.1, 210.0], [83.2, 211.0], [83.3, 213.0], [83.4, 213.0], [83.5, 215.0], [83.6, 215.0], [83.7, 216.0], [83.8, 218.0], [83.9, 219.0], [84.0, 219.0], [84.1, 221.0], [84.2, 221.0], [84.3, 222.0], [84.4, 223.0], [84.5, 223.0], [84.6, 225.0], [84.7, 228.0], [84.8, 229.0], [84.9, 230.0], [85.0, 231.0], [85.1, 233.0], [85.2, 234.0], [85.3, 238.0], [85.4, 238.0], [85.5, 239.0], [85.6, 239.0], [85.7, 240.0], [85.8, 244.0], [85.9, 246.0], [86.0, 248.0], [86.1, 249.0], [86.2, 250.0], [86.3, 252.0], [86.4, 253.0], [86.5, 254.0], [86.6, 254.0], [86.7, 254.0], [86.8, 255.0], [86.9, 258.0], [87.0, 260.0], [87.1, 261.0], [87.2, 262.0], [87.3, 263.0], [87.4, 266.0], [87.5, 266.0], [87.6, 268.0], [87.7, 274.0], [87.8, 277.0], [87.9, 281.0], [88.0, 286.0], [88.1, 294.0], [88.2, 297.0], [88.3, 298.0], [88.4, 299.0], [88.5, 302.0], [88.6, 309.0], [88.7, 310.0], [88.8, 310.0], [88.9, 312.0], [89.0, 325.0], [89.1, 328.0], [89.2, 331.0], [89.3, 334.0], [89.4, 341.0], [89.5, 344.0], [89.6, 346.0], [89.7, 348.0], [89.8, 364.0], [89.9, 366.0], [90.0, 390.0], [90.1, 403.0], [90.2, 414.0], [90.3, 431.0], [90.4, 472.0], [90.5, 475.0], [90.6, 481.0], [90.7, 490.0], [90.8, 501.0], [90.9, 537.0], [91.0, 551.0], [91.1, 564.0], [91.2, 674.0], [91.3, 686.0], [91.4, 749.0], [91.5, 774.0], [91.6, 829.0], [91.7, 1015.0], [91.8, 1245.0], [91.9, 1272.0], [92.0, 1275.0], [92.1, 1465.0], [92.2, 1556.0], [92.3, 1671.0], [92.4, 1942.0], [92.5, 2287.0], [92.6, 2353.0], [92.7, 2363.0], [92.8, 2394.0], [92.9, 2457.0], [93.0, 2470.0], [93.1, 2527.0], [93.2, 2550.0], [93.3, 2582.0], [93.4, 2590.0], [93.5, 2609.0], [93.6, 2628.0], [93.7, 2656.0], [93.8, 2720.0], [93.9, 2732.0], [94.0, 2812.0], [94.1, 2829.0], [94.2, 2843.0], [94.3, 2867.0], [94.4, 2910.0], [94.5, 2933.0], [94.6, 2976.0], [94.7, 2986.0], [94.8, 3006.0], [94.9, 3071.0], [95.0, 3076.0], [95.1, 3101.0], [95.2, 3103.0], [95.3, 3134.0], [95.4, 3177.0], [95.5, 3243.0], [95.6, 3367.0], [95.7, 3398.0], [95.8, 3419.0], [95.9, 3434.0], [96.0, 3461.0], [96.1, 3512.0], [96.2, 3547.0], [96.3, 3618.0], [96.4, 3631.0], [96.5, 3645.0], [96.6, 3696.0], [96.7, 3747.0], [96.8, 3764.0], [96.9, 3772.0], [97.0, 3805.0], [97.1, 3815.0], [97.2, 3823.0], [97.3, 3838.0], [97.4, 3874.0], [97.5, 3952.0], [97.6, 3960.0], [97.7, 3967.0], [97.8, 3986.0], [97.9, 4017.0], [98.0, 4080.0], [98.1, 4107.0], [98.2, 4152.0], [98.3, 4179.0], [98.4, 4202.0], [98.5, 4262.0], [98.6, 4310.0], [98.7, 4323.0], [98.8, 4331.0], [98.9, 4375.0], [99.0, 4415.0], [99.1, 4476.0], [99.2, 4610.0], [99.3, 4623.0], [99.4, 4649.0], [99.5, 4652.0], [99.6, 4698.0], [99.7, 4729.0], [99.8, 4746.0], [99.9, 4765.0]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1189.0, "series": [{"data": [[0.0, 1189.0], [600.0, 5.0], [700.0, 3.0], [800.0, 2.0], [900.0, 1.0], [1000.0, 1.0], [1200.0, 6.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 2.0], [100.0, 452.0], [1700.0, 1.0], [1900.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 7.0], [2400.0, 4.0], [2500.0, 8.0], [2600.0, 6.0], [2800.0, 8.0], [2700.0, 4.0], [2900.0, 7.0], [3000.0, 7.0], [3100.0, 8.0], [200.0, 128.0], [3300.0, 4.0], [3200.0, 1.0], [3400.0, 7.0], [3500.0, 4.0], [3700.0, 7.0], [3600.0, 7.0], [3800.0, 10.0], [3900.0, 8.0], [4000.0, 4.0], [4100.0, 6.0], [4300.0, 8.0], [4200.0, 4.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 9.0], [4700.0, 7.0], [300.0, 33.0], [400.0, 14.0], [500.0, 7.0]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requêtes \ntemps de réponse <= 500ms"], [1, "Requêtes \ntemps de réponse > 500ms et <= 1 500ms"], [2, "Requêtes \ntemps de réponse > 1 500ms"], [3, "Requêtes en erreur"]], "maxY": 1816.0, "series": [{"data": [[0.0, 1816.0]], "color": "#9ACD32", "isOverall": false, "label": "Requêtes \ntemps de réponse <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requêtes \ntemps de réponse > 500ms et <= 1 500ms", "isController": false}, {"data": [[2.0, 156.0]], "color": "orange", "isOverall": false, "label": "Requêtes \ntemps de réponse > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requêtes en erreur", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 41.845, "minX": 1.74351534E12, "maxY": 41.845, "series": [{"data": [[1.74351534E12, 41.845]], "isOverall": false, "label": "GetUsersTestSet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74351534E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 4107.0, "series": [{"data": [[2.0, 18.0], [3.0, 53.666666666666664], [4.0, 49.0], [5.0, 32.666666666666664], [6.0, 44.545454545454554], [7.0, 41.75], [8.0, 48.14814814814815], [9.0, 37.6111111111111], [10.0, 43.06060606060606], [11.0, 204.0344827586206], [12.0, 362.02439024390236], [13.0, 420.08333333333326], [14.0, 56.72549019607844], [15.0, 124.20754716981136], [16.0, 372.71428571428567], [17.0, 464.2], [18.0, 47.099999999999994], [19.0, 85.0], [20.0, 333.2631578947369], [21.0, 93.79166666666666], [22.0, 309.8181818181818], [23.0, 138.96875], [24.0, 86.72727272727272], [25.0, 247.8611111111112], [26.0, 175.66666666666669], [27.0, 476.8809523809526], [28.0, 398.14705882352945], [29.0, 158.04651162790697], [30.0, 92.85416666666664], [31.0, 79.45833333333331], [33.0, 155.61111111111117], [32.0, 234.8933333333334], [34.0, 108.40322580645159], [35.0, 168.1509433962264], [37.0, 332.33333333333337], [36.0, 312.36734693877554], [39.0, 245.1935483870968], [38.0, 86.87096774193544], [41.0, 262.5405405405406], [40.0, 102.0294117647059], [43.0, 239.75], [42.0, 120.07142857142858], [44.0, 178.0294117647059], [45.0, 158.375], [46.0, 112.04761904761905], [47.0, 152.05555555555554], [49.0, 795.9310344827586], [48.0, 417.04], [51.0, 96.23076923076923], [50.0, 247.36363636363635], [53.0, 288.3125], [52.0, 46.333333333333336], [55.0, 466.40000000000003], [54.0, 353.89473684210526], [57.0, 79.16666666666667], [56.0, 164.1071428571429], [59.0, 391.11111111111114], [58.0, 854.3333333333331], [61.0, 258.24999999999994], [60.0, 100.08333333333334], [63.0, 74.57142857142857], [62.0, 1862.111111111111], [67.0, 934.6666666666667], [66.0, 1353.875], [65.0, 68.66666666666667], [64.0, 926.4285714285714], [71.0, 1237.0], [69.0, 21.0], [68.0, 786.5], [70.0, 100.5], [75.0, 24.0], [74.0, 22.0], [73.0, 19.0], [72.0, 25.0], [79.0, 2005.0], [78.0, 2027.6666666666665], [77.0, 2027.8333333333333], [82.0, 29.0], [87.0, 2384.2], [86.0, 25.0], [85.0, 1865.7142857142856], [91.0, 17.0], [90.0, 19.5], [88.0, 1416.5], [95.0, 25.5], [94.0, 3519.0], [93.0, 1953.0], [92.0, 2719.4], [98.0, 22.0], [97.0, 1007.6666666666666], [103.0, 2406.4], [102.0, 2380.333333333333], [101.0, 23.0], [100.0, 24.5], [107.0, 29.333333333333332], [106.0, 21.0], [105.0, 4107.0], [111.0, 19.0], [110.0, 20.0], [109.0, 2854.5], [108.0, 2190.2], [115.0, 31.0], [114.0, 28.0], [113.0, 30.0], [112.0, 2321.75], [118.0, 2512.0], [119.0, 30.0], [117.0, 27.0], [116.0, 1501.0], [123.0, 27.333333333333332], [120.0, 18.0], [126.0, 29.0], [125.0, 1551.6], [135.0, 1309.6666666666665], [134.0, 48.5], [132.0, 60.666666666666664], [130.0, 25.0], [129.0, 3812.0], [128.0, 2897.777777777778], [143.0, 508.49999999999994], [141.0, 2287.0], [140.0, 951.8333333333333], [138.0, 2077.8], [137.0, 29.0], [150.0, 1304.3333333333335], [148.0, 1590.5000000000002], [147.0, 33.5], [145.0, 30.0], [157.0, 40.0], [156.0, 40.0], [154.0, 45.333333333333336], [153.0, 130.0], [152.0, 40.0], [165.0, 1480.7837837837833], [1.0, 26.0]], "isOverall": false, "label": "GetAllUsers", "isController": false}, {"data": [[41.845, 365.0830000000004]], "isOverall": false, "label": "GetAllUsers-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 165.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4000.0, "minX": 1.74351534E12, "maxY": 72386.25, "series": [{"data": [[1.74351534E12, 72386.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74351534E12, 4000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74351534E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 365.0830000000004, "minX": 1.74351534E12, "maxY": 365.0830000000004, "series": [{"data": [[1.74351534E12, 365.0830000000004]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74351534E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 364.50749999999937, "minX": 1.74351534E12, "maxY": 364.50749999999937, "series": [{"data": [[1.74351534E12, 364.50749999999937]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74351534E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 301.12050000000113, "minX": 1.74351534E12, "maxY": 301.12050000000113, "series": [{"data": [[1.74351534E12, 301.12050000000113]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74351534E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.74351534E12, "maxY": 4796.0, "series": [{"data": [[1.74351534E12, 4796.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74351534E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74351534E12, 388.30000000000155]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74351534E12, 4414.63]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74351534E12, 72.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74351534E12, 3075.7999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74351534E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 38.5, "minX": 64.0, "maxY": 160.0, "series": [{"data": [[64.0, 158.5], [264.0, 80.5], [262.0, 58.5], [301.0, 56.0], [312.0, 107.5], [156.0, 38.5], [199.0, 51.0], [210.0, 69.0], [232.0, 160.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 312.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 38.5, "minX": 64.0, "maxY": 160.0, "series": [{"data": [[64.0, 158.5], [264.0, 80.5], [262.0, 58.5], [301.0, 56.0], [312.0, 107.5], [156.0, 38.5], [199.0, 51.0], [210.0, 69.0], [232.0, 160.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 312.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74351534E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74351534E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74351534E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74351534E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74351534E12, 33.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74351534E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74351534E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74351534E12, 33.333333333333336]], "isOverall": false, "label": "GetAllUsers-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74351534E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74351534E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74351534E12, 33.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74351534E12, "title": "Total Transactions Per Second"}},
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

