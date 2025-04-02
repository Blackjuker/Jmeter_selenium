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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 4168.0, "series": [{"data": [[0.0, 11.0], [0.1, 13.0], [0.2, 13.0], [0.3, 14.0], [0.4, 14.0], [0.5, 14.0], [0.6, 14.0], [0.7, 14.0], [0.8, 14.0], [0.9, 14.0], [1.0, 14.0], [1.1, 14.0], [1.2, 15.0], [1.3, 15.0], [1.4, 15.0], [1.5, 15.0], [1.6, 15.0], [1.7, 15.0], [1.8, 15.0], [1.9, 15.0], [2.0, 15.0], [2.1, 15.0], [2.2, 15.0], [2.3, 15.0], [2.4, 16.0], [2.5, 16.0], [2.6, 16.0], [2.7, 16.0], [2.8, 16.0], [2.9, 16.0], [3.0, 16.0], [3.1, 16.0], [3.2, 16.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 16.0], [3.7, 16.0], [3.8, 16.0], [3.9, 16.0], [4.0, 16.0], [4.1, 16.0], [4.2, 16.0], [4.3, 17.0], [4.4, 17.0], [4.5, 17.0], [4.6, 17.0], [4.7, 17.0], [4.8, 17.0], [4.9, 17.0], [5.0, 17.0], [5.1, 17.0], [5.2, 17.0], [5.3, 17.0], [5.4, 17.0], [5.5, 17.0], [5.6, 17.0], [5.7, 17.0], [5.8, 17.0], [5.9, 17.0], [6.0, 17.0], [6.1, 17.0], [6.2, 17.0], [6.3, 17.0], [6.4, 17.0], [6.5, 17.0], [6.6, 18.0], [6.7, 18.0], [6.8, 18.0], [6.9, 18.0], [7.0, 18.0], [7.1, 18.0], [7.2, 18.0], [7.3, 18.0], [7.4, 18.0], [7.5, 18.0], [7.6, 18.0], [7.7, 18.0], [7.8, 18.0], [7.9, 18.0], [8.0, 18.0], [8.1, 18.0], [8.2, 18.0], [8.3, 18.0], [8.4, 18.0], [8.5, 18.0], [8.6, 18.0], [8.7, 18.0], [8.8, 18.0], [8.9, 18.0], [9.0, 18.0], [9.1, 18.0], [9.2, 19.0], [9.3, 19.0], [9.4, 19.0], [9.5, 19.0], [9.6, 19.0], [9.7, 19.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 19.0], [10.8, 19.0], [10.9, 19.0], [11.0, 19.0], [11.1, 19.0], [11.2, 20.0], [11.3, 20.0], [11.4, 20.0], [11.5, 20.0], [11.6, 20.0], [11.7, 20.0], [11.8, 20.0], [11.9, 20.0], [12.0, 20.0], [12.1, 20.0], [12.2, 20.0], [12.3, 20.0], [12.4, 20.0], [12.5, 20.0], [12.6, 20.0], [12.7, 20.0], [12.8, 20.0], [12.9, 20.0], [13.0, 20.0], [13.1, 21.0], [13.2, 21.0], [13.3, 21.0], [13.4, 21.0], [13.5, 21.0], [13.6, 21.0], [13.7, 21.0], [13.8, 21.0], [13.9, 21.0], [14.0, 21.0], [14.1, 21.0], [14.2, 21.0], [14.3, 21.0], [14.4, 21.0], [14.5, 21.0], [14.6, 21.0], [14.7, 21.0], [14.8, 21.0], [14.9, 21.0], [15.0, 21.0], [15.1, 21.0], [15.2, 21.0], [15.3, 21.0], [15.4, 21.0], [15.5, 21.0], [15.6, 21.0], [15.7, 21.0], [15.8, 22.0], [15.9, 22.0], [16.0, 22.0], [16.1, 22.0], [16.2, 22.0], [16.3, 22.0], [16.4, 22.0], [16.5, 22.0], [16.6, 22.0], [16.7, 22.0], [16.8, 22.0], [16.9, 22.0], [17.0, 22.0], [17.1, 22.0], [17.2, 22.0], [17.3, 22.0], [17.4, 22.0], [17.5, 22.0], [17.6, 22.0], [17.7, 22.0], [17.8, 23.0], [17.9, 23.0], [18.0, 23.0], [18.1, 23.0], [18.2, 23.0], [18.3, 23.0], [18.4, 23.0], [18.5, 23.0], [18.6, 23.0], [18.7, 23.0], [18.8, 23.0], [18.9, 23.0], [19.0, 23.0], [19.1, 23.0], [19.2, 23.0], [19.3, 23.0], [19.4, 23.0], [19.5, 23.0], [19.6, 23.0], [19.7, 23.0], [19.8, 23.0], [19.9, 23.0], [20.0, 23.0], [20.1, 23.0], [20.2, 23.0], [20.3, 23.0], [20.4, 23.0], [20.5, 24.0], [20.6, 24.0], [20.7, 24.0], [20.8, 24.0], [20.9, 24.0], [21.0, 24.0], [21.1, 24.0], [21.2, 24.0], [21.3, 24.0], [21.4, 24.0], [21.5, 24.0], [21.6, 24.0], [21.7, 24.0], [21.8, 24.0], [21.9, 24.0], [22.0, 24.0], [22.1, 24.0], [22.2, 24.0], [22.3, 24.0], [22.4, 24.0], [22.5, 24.0], [22.6, 25.0], [22.7, 25.0], [22.8, 25.0], [22.9, 25.0], [23.0, 25.0], [23.1, 25.0], [23.2, 25.0], [23.3, 25.0], [23.4, 25.0], [23.5, 25.0], [23.6, 25.0], [23.7, 25.0], [23.8, 25.0], [23.9, 25.0], [24.0, 25.0], [24.1, 25.0], [24.2, 25.0], [24.3, 25.0], [24.4, 25.0], [24.5, 25.0], [24.6, 25.0], [24.7, 25.0], [24.8, 25.0], [24.9, 25.0], [25.0, 25.0], [25.1, 25.0], [25.2, 25.0], [25.3, 26.0], [25.4, 26.0], [25.5, 26.0], [25.6, 26.0], [25.7, 26.0], [25.8, 26.0], [25.9, 26.0], [26.0, 26.0], [26.1, 26.0], [26.2, 26.0], [26.3, 26.0], [26.4, 26.0], [26.5, 26.0], [26.6, 26.0], [26.7, 26.0], [26.8, 26.0], [26.9, 26.0], [27.0, 26.0], [27.1, 26.0], [27.2, 26.0], [27.3, 26.0], [27.4, 26.0], [27.5, 26.0], [27.6, 27.0], [27.7, 27.0], [27.8, 27.0], [27.9, 27.0], [28.0, 27.0], [28.1, 27.0], [28.2, 27.0], [28.3, 27.0], [28.4, 27.0], [28.5, 27.0], [28.6, 27.0], [28.7, 27.0], [28.8, 27.0], [28.9, 27.0], [29.0, 27.0], [29.1, 27.0], [29.2, 27.0], [29.3, 27.0], [29.4, 27.0], [29.5, 27.0], [29.6, 28.0], [29.7, 28.0], [29.8, 28.0], [29.9, 28.0], [30.0, 28.0], [30.1, 28.0], [30.2, 28.0], [30.3, 28.0], [30.4, 28.0], [30.5, 28.0], [30.6, 28.0], [30.7, 28.0], [30.8, 28.0], [30.9, 28.0], [31.0, 28.0], [31.1, 28.0], [31.2, 28.0], [31.3, 28.0], [31.4, 28.0], [31.5, 28.0], [31.6, 28.0], [31.7, 28.0], [31.8, 28.0], [31.9, 28.0], [32.0, 29.0], [32.1, 29.0], [32.2, 29.0], [32.3, 29.0], [32.4, 29.0], [32.5, 29.0], [32.6, 29.0], [32.7, 29.0], [32.8, 29.0], [32.9, 29.0], [33.0, 29.0], [33.1, 29.0], [33.2, 29.0], [33.3, 29.0], [33.4, 29.0], [33.5, 29.0], [33.6, 29.0], [33.7, 29.0], [33.8, 30.0], [33.9, 30.0], [34.0, 30.0], [34.1, 30.0], [34.2, 30.0], [34.3, 30.0], [34.4, 30.0], [34.5, 30.0], [34.6, 30.0], [34.7, 30.0], [34.8, 30.0], [34.9, 30.0], [35.0, 30.0], [35.1, 30.0], [35.2, 30.0], [35.3, 30.0], [35.4, 30.0], [35.5, 30.0], [35.6, 30.0], [35.7, 30.0], [35.8, 30.0], [35.9, 30.0], [36.0, 30.0], [36.1, 30.0], [36.2, 30.0], [36.3, 30.0], [36.4, 31.0], [36.5, 31.0], [36.6, 31.0], [36.7, 31.0], [36.8, 31.0], [36.9, 31.0], [37.0, 31.0], [37.1, 31.0], [37.2, 31.0], [37.3, 31.0], [37.4, 31.0], [37.5, 31.0], [37.6, 31.0], [37.7, 31.0], [37.8, 31.0], [37.9, 31.0], [38.0, 31.0], [38.1, 31.0], [38.2, 32.0], [38.3, 32.0], [38.4, 32.0], [38.5, 32.0], [38.6, 32.0], [38.7, 32.0], [38.8, 32.0], [38.9, 32.0], [39.0, 32.0], [39.1, 32.0], [39.2, 32.0], [39.3, 32.0], [39.4, 32.0], [39.5, 33.0], [39.6, 33.0], [39.7, 33.0], [39.8, 33.0], [39.9, 33.0], [40.0, 33.0], [40.1, 33.0], [40.2, 33.0], [40.3, 33.0], [40.4, 33.0], [40.5, 33.0], [40.6, 33.0], [40.7, 33.0], [40.8, 33.0], [40.9, 33.0], [41.0, 33.0], [41.1, 34.0], [41.2, 34.0], [41.3, 34.0], [41.4, 34.0], [41.5, 34.0], [41.6, 34.0], [41.7, 34.0], [41.8, 34.0], [41.9, 34.0], [42.0, 35.0], [42.1, 35.0], [42.2, 35.0], [42.3, 35.0], [42.4, 35.0], [42.5, 35.0], [42.6, 35.0], [42.7, 35.0], [42.8, 35.0], [42.9, 35.0], [43.0, 35.0], [43.1, 35.0], [43.2, 35.0], [43.3, 36.0], [43.4, 36.0], [43.5, 36.0], [43.6, 36.0], [43.7, 36.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 37.0], [44.2, 37.0], [44.3, 37.0], [44.4, 37.0], [44.5, 37.0], [44.6, 38.0], [44.7, 38.0], [44.8, 38.0], [44.9, 38.0], [45.0, 38.0], [45.1, 38.0], [45.2, 38.0], [45.3, 38.0], [45.4, 39.0], [45.5, 39.0], [45.6, 39.0], [45.7, 39.0], [45.8, 39.0], [45.9, 39.0], [46.0, 39.0], [46.1, 39.0], [46.2, 39.0], [46.3, 39.0], [46.4, 40.0], [46.5, 40.0], [46.6, 40.0], [46.7, 40.0], [46.8, 40.0], [46.9, 40.0], [47.0, 40.0], [47.1, 40.0], [47.2, 40.0], [47.3, 40.0], [47.4, 41.0], [47.5, 41.0], [47.6, 41.0], [47.7, 41.0], [47.8, 41.0], [47.9, 41.0], [48.0, 42.0], [48.1, 42.0], [48.2, 42.0], [48.3, 42.0], [48.4, 42.0], [48.5, 43.0], [48.6, 43.0], [48.7, 43.0], [48.8, 43.0], [48.9, 43.0], [49.0, 44.0], [49.1, 44.0], [49.2, 44.0], [49.3, 44.0], [49.4, 44.0], [49.5, 44.0], [49.6, 44.0], [49.7, 44.0], [49.8, 44.0], [49.9, 44.0], [50.0, 45.0], [50.1, 45.0], [50.2, 45.0], [50.3, 45.0], [50.4, 45.0], [50.5, 45.0], [50.6, 46.0], [50.7, 46.0], [50.8, 46.0], [50.9, 46.0], [51.0, 47.0], [51.1, 47.0], [51.2, 47.0], [51.3, 47.0], [51.4, 48.0], [51.5, 48.0], [51.6, 48.0], [51.7, 48.0], [51.8, 48.0], [51.9, 48.0], [52.0, 48.0], [52.1, 49.0], [52.2, 49.0], [52.3, 49.0], [52.4, 49.0], [52.5, 50.0], [52.6, 50.0], [52.7, 50.0], [52.8, 50.0], [52.9, 50.0], [53.0, 51.0], [53.1, 51.0], [53.2, 51.0], [53.3, 51.0], [53.4, 51.0], [53.5, 51.0], [53.6, 51.0], [53.7, 52.0], [53.8, 52.0], [53.9, 52.0], [54.0, 52.0], [54.1, 52.0], [54.2, 52.0], [54.3, 52.0], [54.4, 52.0], [54.5, 52.0], [54.6, 53.0], [54.7, 53.0], [54.8, 53.0], [54.9, 53.0], [55.0, 53.0], [55.1, 54.0], [55.2, 54.0], [55.3, 54.0], [55.4, 54.0], [55.5, 54.0], [55.6, 55.0], [55.7, 55.0], [55.8, 55.0], [55.9, 55.0], [56.0, 55.0], [56.1, 56.0], [56.2, 56.0], [56.3, 56.0], [56.4, 56.0], [56.5, 56.0], [56.6, 56.0], [56.7, 56.0], [56.8, 56.0], [56.9, 56.0], [57.0, 56.0], [57.1, 56.0], [57.2, 56.0], [57.3, 57.0], [57.4, 57.0], [57.5, 57.0], [57.6, 57.0], [57.7, 57.0], [57.8, 57.0], [57.9, 57.0], [58.0, 58.0], [58.1, 58.0], [58.2, 58.0], [58.3, 58.0], [58.4, 58.0], [58.5, 59.0], [58.6, 59.0], [58.7, 59.0], [58.8, 59.0], [58.9, 59.0], [59.0, 60.0], [59.1, 60.0], [59.2, 60.0], [59.3, 60.0], [59.4, 61.0], [59.5, 61.0], [59.6, 61.0], [59.7, 61.0], [59.8, 61.0], [59.9, 61.0], [60.0, 62.0], [60.1, 62.0], [60.2, 62.0], [60.3, 62.0], [60.4, 62.0], [60.5, 62.0], [60.6, 62.0], [60.7, 62.0], [60.8, 62.0], [60.9, 63.0], [61.0, 63.0], [61.1, 63.0], [61.2, 63.0], [61.3, 63.0], [61.4, 63.0], [61.5, 63.0], [61.6, 63.0], [61.7, 64.0], [61.8, 64.0], [61.9, 64.0], [62.0, 64.0], [62.1, 65.0], [62.2, 65.0], [62.3, 65.0], [62.4, 65.0], [62.5, 65.0], [62.6, 65.0], [62.7, 65.0], [62.8, 66.0], [62.9, 66.0], [63.0, 66.0], [63.1, 66.0], [63.2, 66.0], [63.3, 66.0], [63.4, 66.0], [63.5, 66.0], [63.6, 66.0], [63.7, 67.0], [63.8, 67.0], [63.9, 67.0], [64.0, 67.0], [64.1, 67.0], [64.2, 67.0], [64.3, 68.0], [64.4, 68.0], [64.5, 68.0], [64.6, 68.0], [64.7, 68.0], [64.8, 68.0], [64.9, 68.0], [65.0, 68.0], [65.1, 68.0], [65.2, 68.0], [65.3, 69.0], [65.4, 69.0], [65.5, 69.0], [65.6, 69.0], [65.7, 69.0], [65.8, 70.0], [65.9, 70.0], [66.0, 70.0], [66.1, 70.0], [66.2, 70.0], [66.3, 70.0], [66.4, 70.0], [66.5, 70.0], [66.6, 71.0], [66.7, 71.0], [66.8, 71.0], [66.9, 71.0], [67.0, 71.0], [67.1, 71.0], [67.2, 72.0], [67.3, 72.0], [67.4, 72.0], [67.5, 72.0], [67.6, 72.0], [67.7, 72.0], [67.8, 72.0], [67.9, 72.0], [68.0, 72.0], [68.1, 72.0], [68.2, 73.0], [68.3, 73.0], [68.4, 73.0], [68.5, 73.0], [68.6, 73.0], [68.7, 74.0], [68.8, 74.0], [68.9, 74.0], [69.0, 74.0], [69.1, 74.0], [69.2, 74.0], [69.3, 74.0], [69.4, 75.0], [69.5, 75.0], [69.6, 75.0], [69.7, 75.0], [69.8, 75.0], [69.9, 75.0], [70.0, 75.0], [70.1, 75.0], [70.2, 75.0], [70.3, 75.0], [70.4, 75.0], [70.5, 76.0], [70.6, 76.0], [70.7, 76.0], [70.8, 76.0], [70.9, 76.0], [71.0, 76.0], [71.1, 77.0], [71.2, 77.0], [71.3, 77.0], [71.4, 77.0], [71.5, 77.0], [71.6, 77.0], [71.7, 77.0], [71.8, 78.0], [71.9, 78.0], [72.0, 78.0], [72.1, 78.0], [72.2, 78.0], [72.3, 78.0], [72.4, 78.0], [72.5, 78.0], [72.6, 79.0], [72.7, 79.0], [72.8, 79.0], [72.9, 79.0], [73.0, 79.0], [73.1, 80.0], [73.2, 80.0], [73.3, 80.0], [73.4, 80.0], [73.5, 80.0], [73.6, 80.0], [73.7, 80.0], [73.8, 81.0], [73.9, 81.0], [74.0, 81.0], [74.1, 81.0], [74.2, 81.0], [74.3, 82.0], [74.4, 82.0], [74.5, 82.0], [74.6, 82.0], [74.7, 82.0], [74.8, 83.0], [74.9, 83.0], [75.0, 83.0], [75.1, 83.0], [75.2, 83.0], [75.3, 84.0], [75.4, 84.0], [75.5, 84.0], [75.6, 84.0], [75.7, 84.0], [75.8, 84.0], [75.9, 84.0], [76.0, 85.0], [76.1, 85.0], [76.2, 86.0], [76.3, 86.0], [76.4, 86.0], [76.5, 86.0], [76.6, 87.0], [76.7, 87.0], [76.8, 87.0], [76.9, 87.0], [77.0, 87.0], [77.1, 87.0], [77.2, 88.0], [77.3, 88.0], [77.4, 88.0], [77.5, 88.0], [77.6, 88.0], [77.7, 88.0], [77.8, 88.0], [77.9, 88.0], [78.0, 89.0], [78.1, 90.0], [78.2, 90.0], [78.3, 90.0], [78.4, 91.0], [78.5, 91.0], [78.6, 91.0], [78.7, 92.0], [78.8, 92.0], [78.9, 92.0], [79.0, 92.0], [79.1, 92.0], [79.2, 93.0], [79.3, 94.0], [79.4, 94.0], [79.5, 94.0], [79.6, 95.0], [79.7, 95.0], [79.8, 96.0], [79.9, 96.0], [80.0, 96.0], [80.1, 96.0], [80.2, 97.0], [80.3, 98.0], [80.4, 98.0], [80.5, 98.0], [80.6, 98.0], [80.7, 99.0], [80.8, 99.0], [80.9, 100.0], [81.0, 101.0], [81.1, 101.0], [81.2, 102.0], [81.3, 102.0], [81.4, 103.0], [81.5, 103.0], [81.6, 103.0], [81.7, 104.0], [81.8, 104.0], [81.9, 105.0], [82.0, 106.0], [82.1, 106.0], [82.2, 107.0], [82.3, 108.0], [82.4, 111.0], [82.5, 111.0], [82.6, 111.0], [82.7, 113.0], [82.8, 113.0], [82.9, 115.0], [83.0, 115.0], [83.1, 116.0], [83.2, 117.0], [83.3, 118.0], [83.4, 120.0], [83.5, 122.0], [83.6, 123.0], [83.7, 124.0], [83.8, 124.0], [83.9, 124.0], [84.0, 127.0], [84.1, 128.0], [84.2, 128.0], [84.3, 129.0], [84.4, 130.0], [84.5, 132.0], [84.6, 132.0], [84.7, 135.0], [84.8, 135.0], [84.9, 136.0], [85.0, 139.0], [85.1, 139.0], [85.2, 140.0], [85.3, 140.0], [85.4, 141.0], [85.5, 142.0], [85.6, 147.0], [85.7, 151.0], [85.8, 154.0], [85.9, 159.0], [86.0, 161.0], [86.1, 165.0], [86.2, 177.0], [86.3, 184.0], [86.4, 199.0], [86.5, 217.0], [86.6, 220.0], [86.7, 230.0], [86.8, 239.0], [86.9, 245.0], [87.0, 264.0], [87.1, 309.0], [87.2, 409.0], [87.3, 419.0], [87.4, 452.0], [87.5, 457.0], [87.6, 482.0], [87.7, 521.0], [87.8, 536.0], [87.9, 546.0], [88.0, 553.0], [88.1, 564.0], [88.2, 592.0], [88.3, 609.0], [88.4, 618.0], [88.5, 632.0], [88.6, 692.0], [88.7, 731.0], [88.8, 756.0], [88.9, 770.0], [89.0, 784.0], [89.1, 810.0], [89.2, 851.0], [89.3, 862.0], [89.4, 880.0], [89.5, 888.0], [89.6, 910.0], [89.7, 921.0], [89.8, 1067.0], [89.9, 1087.0], [90.0, 1099.0], [90.1, 1119.0], [90.2, 1165.0], [90.3, 1186.0], [90.4, 1237.0], [90.5, 1251.0], [90.6, 1315.0], [90.7, 1327.0], [90.8, 1373.0], [90.9, 1395.0], [91.0, 1430.0], [91.1, 1436.0], [91.2, 1517.0], [91.3, 1540.0], [91.4, 1589.0], [91.5, 1635.0], [91.6, 1659.0], [91.7, 1675.0], [91.8, 1724.0], [91.9, 1757.0], [92.0, 1790.0], [92.1, 1802.0], [92.2, 1816.0], [92.3, 1834.0], [92.4, 1846.0], [92.5, 1853.0], [92.6, 1870.0], [92.7, 1913.0], [92.8, 1936.0], [92.9, 1965.0], [93.0, 1980.0], [93.1, 2045.0], [93.2, 2094.0], [93.3, 2119.0], [93.4, 2125.0], [93.5, 2164.0], [93.6, 2231.0], [93.7, 2260.0], [93.8, 2294.0], [93.9, 2326.0], [94.0, 2333.0], [94.1, 2365.0], [94.2, 2412.0], [94.3, 2465.0], [94.4, 2470.0], [94.5, 2478.0], [94.6, 2501.0], [94.7, 2508.0], [94.8, 2518.0], [94.9, 2546.0], [95.0, 2553.0], [95.1, 2585.0], [95.2, 2601.0], [95.3, 2616.0], [95.4, 2639.0], [95.5, 2691.0], [95.6, 2697.0], [95.7, 2739.0], [95.8, 2772.0], [95.9, 2809.0], [96.0, 2815.0], [96.1, 2887.0], [96.2, 2900.0], [96.3, 2930.0], [96.4, 2944.0], [96.5, 2966.0], [96.6, 2969.0], [96.7, 2989.0], [96.8, 3006.0], [96.9, 3021.0], [97.0, 3025.0], [97.1, 3052.0], [97.2, 3070.0], [97.3, 3074.0], [97.4, 3098.0], [97.5, 3132.0], [97.6, 3176.0], [97.7, 3207.0], [97.8, 3230.0], [97.9, 3236.0], [98.0, 3253.0], [98.1, 3273.0], [98.2, 3294.0], [98.3, 3393.0], [98.4, 3422.0], [98.5, 3450.0], [98.6, 3467.0], [98.7, 3495.0], [98.8, 3520.0], [98.9, 3630.0], [99.0, 3652.0], [99.1, 3690.0], [99.2, 3797.0], [99.3, 3820.0], [99.4, 3852.0], [99.5, 3868.0], [99.6, 3935.0], [99.7, 4031.0], [99.8, 4037.0], [99.9, 4156.0]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1617.0, "series": [{"data": [[0.0, 1617.0], [600.0, 7.0], [700.0, 8.0], [800.0, 10.0], [900.0, 5.0], [1000.0, 5.0], [1100.0, 6.0], [1200.0, 4.0], [1300.0, 8.0], [1400.0, 4.0], [1500.0, 6.0], [1600.0, 6.0], [100.0, 112.0], [1700.0, 7.0], [1800.0, 11.0], [1900.0, 9.0], [2000.0, 3.0], [2100.0, 6.0], [2200.0, 6.0], [2300.0, 7.0], [2400.0, 8.0], [2500.0, 12.0], [2600.0, 9.0], [2800.0, 7.0], [2700.0, 4.0], [2900.0, 11.0], [3000.0, 14.0], [3100.0, 5.0], [200.0, 13.0], [3200.0, 11.0], [3300.0, 2.0], [3400.0, 8.0], [3500.0, 2.0], [3600.0, 7.0], [3700.0, 1.0], [3800.0, 7.0], [3900.0, 2.0], [4000.0, 4.0], [4100.0, 2.0], [300.0, 2.0], [400.0, 9.0], [500.0, 13.0]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 70.0, "minX": 0.0, "ticks": [[0, "Requêtes \ntemps de réponse <= 500ms"], [1, "Requêtes \ntemps de réponse > 500ms et <= 1 500ms"], [2, "Requêtes \ntemps de réponse > 1 500ms"], [3, "Requêtes en erreur"]], "maxY": 1753.0, "series": [{"data": [[0.0, 1753.0]], "color": "#9ACD32", "isOverall": false, "label": "Requêtes \ntemps de réponse <= 500ms", "isController": false}, {"data": [[1.0, 70.0]], "color": "yellow", "isOverall": false, "label": "Requêtes \ntemps de réponse > 500ms et <= 1 500ms", "isController": false}, {"data": [[2.0, 177.0]], "color": "orange", "isOverall": false, "label": "Requêtes \ntemps de réponse > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requêtes en erreur", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.5869999999999, "minX": 1.74361524E12, "maxY": 39.5869999999999, "series": [{"data": [[1.74361524E12, 39.5869999999999]], "isOverall": false, "label": "GetUsersTestSet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361524E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 2788.5, "series": [{"data": [[2.0, 19.25], [3.0, 22.750000000000004], [4.0, 49.46153846153847], [5.0, 622.3793103448278], [6.0, 31.833333333333336], [7.0, 43.60714285714286], [8.0, 47.372549019607845], [9.0, 44.58695652173913], [10.0, 55.830188679245275], [11.0, 58.6315789473684], [12.0, 39.5], [13.0, 78.92307692307689], [14.0, 70.47761194029853], [15.0, 47.512820512820504], [16.0, 52.91304347826086], [17.0, 89.68354430379746], [18.0, 63.33333333333333], [19.0, 75.02597402597401], [20.0, 100.30645161290323], [21.0, 319.0806451612903], [22.0, 473.6250000000002], [23.0, 89.6727272727273], [24.0, 142.6595744680851], [25.0, 284.99999999999994], [26.0, 188.62500000000003], [27.0, 94.94871794871794], [28.0, 651.9090909090911], [29.0, 154.62857142857146], [30.0, 110.10000000000001], [31.0, 62.24999999999999], [33.0, 257.0], [32.0, 156.72727272727272], [35.0, 61.75], [34.0, 46.4], [37.0, 472.3199999999999], [36.0, 237.92307692307702], [39.0, 55.23529411764706], [38.0, 51.54545454545455], [41.0, 122.99999999999999], [40.0, 100.8125], [43.0, 188.0425531914894], [42.0, 63.5483870967742], [45.0, 42.333333333333336], [44.0, 400.8888888888889], [46.0, 613.7692307692307], [47.0, 101.18181818181817], [48.0, 50.9375], [49.0, 35.85714285714286], [51.0, 67.5], [50.0, 25.5], [53.0, 681.8333333333335], [52.0, 731.6], [55.0, 764.7], [54.0, 1332.0], [57.0, 1060.4545454545455], [56.0, 666.5], [59.0, 19.5], [58.0, 315.0588235294117], [61.0, 1947.6], [60.0, 17.0], [63.0, 2089.666666666667], [62.0, 2788.5], [66.0, 24.0], [64.0, 21.0], [71.0, 916.5], [70.0, 17.5], [68.0, 24.5], [75.0, 1442.3333333333335], [74.0, 1270.0], [73.0, 2304.0], [72.0, 1873.75], [79.0, 827.0], [78.0, 25.0], [76.0, 2390.25], [83.0, 1208.0], [82.0, 766.5], [81.0, 1329.5], [80.0, 1551.0], [87.0, 1179.0], [85.0, 18.0], [84.0, 728.5], [91.0, 20.5], [89.0, 1504.3333333333335], [88.0, 28.0], [95.0, 25.0], [94.0, 28.0], [93.0, 1561.5], [92.0, 2168.25], [99.0, 1725.5], [98.0, 693.8], [103.0, 1559.5], [102.0, 1481.0], [101.0, 20.0], [100.0, 1162.5], [107.0, 694.0], [106.0, 22.0], [105.0, 1505.5], [104.0, 27.0], [111.0, 1699.3000000000002], [108.0, 1711.5], [115.0, 606.5], [114.0, 1728.0], [113.0, 1525.5], [112.0, 1744.5], [119.0, 29.0], [117.0, 22.5], [116.0, 2333.0], [123.0, 1587.75], [121.0, 32.5], [127.0, 34.0], [126.0, 1484.5], [125.0, 580.0], [124.0, 42.0], [134.0, 2066.0], [133.0, 1539.6666666666665], [132.0, 44.0], [131.0, 26.0], [130.0, 2239.0], [129.0, 2438.0], [128.0, 1105.25], [143.0, 25.0], [142.0, 2524.4], [141.0, 1490.5], [140.0, 991.0000000000001], [139.0, 26.0], [138.0, 25.0], [137.0, 1632.5], [136.0, 24.5], [150.0, 1310.0], [149.0, 24.0], [148.0, 545.0], [147.0, 21.0], [145.0, 1374.0], [144.0, 31.0], [159.0, 18.0], [158.0, 30.0], [157.0, 17.0], [156.0, 1682.25], [155.0, 21.0], [154.0, 1414.0], [153.0, 28.0], [152.0, 19.5], [164.0, 937.0], [163.0, 31.0], [162.0, 1982.0], [175.0, 21.0], [173.0, 23.5], [171.0, 29.666666666666668], [170.0, 25.0], [169.0, 32.5], [168.0, 23.25], [182.0, 37.0], [181.0, 34.0], [180.0, 1831.8095238095236], [179.0, 48.0], [178.0, 19.5], [176.0, 39.0], [191.0, 24.0], [189.0, 17.0], [199.0, 1319.0], [198.0, 1351.6], [197.0, 1596.625], [195.0, 459.1428571428571], [201.0, 1669.2727272727273], [200.0, 2170.2], [1.0, 16.0]], "isOverall": false, "label": "GetAllUsers", "isController": false}, {"data": [[39.5869999999999, 317.6149999999997]], "isOverall": false, "label": "GetAllUsers-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 201.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4000.0, "minX": 1.74361524E12, "maxY": 72193.66666666667, "series": [{"data": [[1.74361524E12, 72193.66666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74361524E12, 4000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361524E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 317.6149999999997, "minX": 1.74361524E12, "maxY": 317.6149999999997, "series": [{"data": [[1.74361524E12, 317.6149999999997]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361524E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 314.48800000000045, "minX": 1.74361524E12, "maxY": 314.48800000000045, "series": [{"data": [[1.74361524E12, 314.48800000000045]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361524E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 278.56549999999896, "minX": 1.74361524E12, "maxY": 278.56549999999896, "series": [{"data": [[1.74361524E12, 278.56549999999896]], "isOverall": false, "label": "GetAllUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361524E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.74361524E12, "maxY": 4168.0, "series": [{"data": [[1.74361524E12, 4168.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74361524E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74361524E12, 1098.000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74361524E12, 3651.8500000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74361524E12, 44.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74361524E12, 2552.6499999999987]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361524E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 30.0, "minX": 45.0, "maxY": 765.0, "series": [{"data": [[271.0, 43.0], [268.0, 41.5], [287.0, 48.0], [45.0, 30.0], [201.0, 765.0], [213.0, 43.0], [230.0, 40.0], [235.0, 53.0], [250.0, 43.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 287.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 30.0, "minX": 45.0, "maxY": 615.0, "series": [{"data": [[271.0, 43.0], [268.0, 41.5], [287.0, 48.0], [45.0, 30.0], [201.0, 615.0], [213.0, 43.0], [230.0, 40.0], [235.0, 53.0], [250.0, 43.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 287.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74361524E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74361524E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361524E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74361524E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74361524E12, 33.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74361524E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74361524E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74361524E12, 33.333333333333336]], "isOverall": false, "label": "GetAllUsers-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361524E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.74361524E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74361524E12, 33.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74361524E12, "title": "Total Transactions Per Second"}},
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

