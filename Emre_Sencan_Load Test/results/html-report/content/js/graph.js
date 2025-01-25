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
        data: {"result": {"minY": 88.0, "minX": 0.0, "maxY": 13359.0, "series": [{"data": [[0.0, 88.0], [0.1, 88.0], [0.2, 92.0], [0.3, 92.0], [0.4, 96.0], [0.5, 96.0], [0.6, 99.0], [0.7, 99.0], [0.8, 105.0], [0.9, 105.0], [1.0, 106.0], [1.1, 106.0], [1.2, 108.0], [1.3, 108.0], [1.4, 109.0], [1.5, 109.0], [1.6, 112.0], [1.7, 112.0], [1.8, 114.0], [1.9, 114.0], [2.0, 116.0], [2.1, 116.0], [2.2, 124.0], [2.3, 124.0], [2.4, 128.0], [2.5, 128.0], [2.6, 132.0], [2.7, 136.0], [2.8, 136.0], [2.9, 140.0], [3.0, 140.0], [3.1, 144.0], [3.2, 144.0], [3.3, 164.0], [3.4, 164.0], [3.5, 171.0], [3.6, 171.0], [3.7, 249.0], [3.8, 249.0], [3.9, 329.0], [4.0, 329.0], [4.1, 362.0], [4.2, 362.0], [4.3, 381.0], [4.4, 381.0], [4.5, 395.0], [4.6, 395.0], [4.7, 418.0], [4.8, 418.0], [4.9, 436.0], [5.0, 436.0], [5.1, 443.0], [5.2, 450.0], [5.3, 450.0], [5.4, 488.0], [5.5, 488.0], [5.6, 520.0], [5.7, 520.0], [5.8, 548.0], [5.9, 548.0], [6.0, 613.0], [6.1, 613.0], [6.2, 643.0], [6.3, 643.0], [6.4, 708.0], [6.5, 708.0], [6.6, 713.0], [6.7, 713.0], [6.8, 715.0], [6.9, 715.0], [7.0, 758.0], [7.1, 758.0], [7.2, 773.0], [7.3, 773.0], [7.4, 807.0], [7.5, 807.0], [7.6, 821.0], [7.7, 857.0], [7.8, 857.0], [7.9, 912.0], [8.0, 912.0], [8.1, 942.0], [8.2, 942.0], [8.3, 942.0], [8.4, 942.0], [8.5, 945.0], [8.6, 945.0], [8.7, 965.0], [8.8, 965.0], [8.9, 982.0], [9.0, 982.0], [9.1, 1007.0], [9.2, 1007.0], [9.3, 1060.0], [9.4, 1060.0], [9.5, 1091.0], [9.6, 1091.0], [9.7, 1102.0], [9.8, 1102.0], [9.9, 1103.0], [10.0, 1108.0], [10.1, 1108.0], [10.2, 1117.0], [10.3, 1117.0], [10.4, 1123.0], [10.5, 1123.0], [10.6, 1136.0], [10.7, 1136.0], [10.8, 1136.0], [10.9, 1136.0], [11.0, 1156.0], [11.1, 1156.0], [11.2, 1195.0], [11.3, 1195.0], [11.4, 1202.0], [11.5, 1202.0], [11.6, 1207.0], [11.7, 1207.0], [11.8, 1215.0], [11.9, 1215.0], [12.0, 1216.0], [12.1, 1216.0], [12.2, 1220.0], [12.3, 1220.0], [12.4, 1223.0], [12.5, 1240.0], [12.6, 1240.0], [12.7, 1245.0], [12.8, 1245.0], [12.9, 1259.0], [13.0, 1259.0], [13.1, 1270.0], [13.2, 1270.0], [13.3, 1273.0], [13.4, 1273.0], [13.5, 1292.0], [13.6, 1292.0], [13.7, 1295.0], [13.8, 1295.0], [13.9, 1302.0], [14.0, 1302.0], [14.1, 1305.0], [14.2, 1305.0], [14.3, 1314.0], [14.4, 1314.0], [14.5, 1322.0], [14.6, 1322.0], [14.7, 1344.0], [14.8, 1344.0], [14.9, 1345.0], [15.0, 1360.0], [15.1, 1360.0], [15.2, 1365.0], [15.3, 1365.0], [15.4, 1382.0], [15.5, 1382.0], [15.6, 1387.0], [15.7, 1387.0], [15.8, 1393.0], [15.9, 1393.0], [16.0, 1404.0], [16.1, 1404.0], [16.2, 1432.0], [16.3, 1432.0], [16.4, 1441.0], [16.5, 1441.0], [16.6, 1460.0], [16.7, 1460.0], [16.8, 1470.0], [16.9, 1470.0], [17.0, 1482.0], [17.1, 1482.0], [17.2, 1508.0], [17.3, 1508.0], [17.4, 1510.0], [17.5, 1521.0], [17.6, 1521.0], [17.7, 1523.0], [17.8, 1523.0], [17.9, 1532.0], [18.0, 1532.0], [18.1, 1548.0], [18.2, 1548.0], [18.3, 1550.0], [18.4, 1550.0], [18.5, 1559.0], [18.6, 1559.0], [18.7, 1564.0], [18.8, 1564.0], [18.9, 1565.0], [19.0, 1565.0], [19.1, 1567.0], [19.2, 1567.0], [19.3, 1571.0], [19.4, 1571.0], [19.5, 1585.0], [19.6, 1585.0], [19.7, 1615.0], [19.8, 1615.0], [19.9, 1637.0], [20.0, 1637.0], [20.1, 1647.0], [20.2, 1648.0], [20.3, 1648.0], [20.4, 1676.0], [20.5, 1676.0], [20.6, 1682.0], [20.7, 1682.0], [20.8, 1690.0], [20.9, 1690.0], [21.0, 1704.0], [21.1, 1704.0], [21.2, 1733.0], [21.3, 1733.0], [21.4, 1752.0], [21.5, 1752.0], [21.6, 1755.0], [21.7, 1755.0], [21.8, 1766.0], [21.9, 1766.0], [22.0, 1769.0], [22.1, 1769.0], [22.2, 1776.0], [22.3, 1776.0], [22.4, 1795.0], [22.5, 1795.0], [22.6, 1800.0], [22.7, 1804.0], [22.8, 1804.0], [22.9, 1807.0], [23.0, 1807.0], [23.1, 1813.0], [23.2, 1813.0], [23.3, 1826.0], [23.4, 1826.0], [23.5, 1846.0], [23.6, 1846.0], [23.7, 1856.0], [23.8, 1856.0], [23.9, 1874.0], [24.0, 1874.0], [24.1, 1891.0], [24.2, 1891.0], [24.3, 1911.0], [24.4, 1911.0], [24.5, 1911.0], [24.6, 1911.0], [24.7, 1912.0], [24.8, 1912.0], [24.9, 1912.0], [25.0, 1912.0], [25.1, 1913.0], [25.2, 1924.0], [25.3, 1924.0], [25.4, 1931.0], [25.5, 1931.0], [25.6, 1935.0], [25.7, 1935.0], [25.8, 1938.0], [25.9, 1938.0], [26.0, 1941.0], [26.1, 1941.0], [26.2, 1954.0], [26.3, 1954.0], [26.4, 1966.0], [26.5, 1966.0], [26.6, 1974.0], [26.7, 1974.0], [26.8, 1980.0], [26.9, 1980.0], [27.0, 1981.0], [27.1, 1981.0], [27.2, 1985.0], [27.3, 1985.0], [27.4, 1992.0], [27.5, 1992.0], [27.6, 2007.0], [27.7, 2017.0], [27.8, 2017.0], [27.9, 2024.0], [28.0, 2024.0], [28.1, 2028.0], [28.2, 2028.0], [28.3, 2031.0], [28.4, 2031.0], [28.5, 2039.0], [28.6, 2039.0], [28.7, 2043.0], [28.8, 2043.0], [28.9, 2045.0], [29.0, 2045.0], [29.1, 2053.0], [29.2, 2053.0], [29.3, 2056.0], [29.4, 2056.0], [29.5, 2056.0], [29.6, 2056.0], [29.7, 2065.0], [29.8, 2065.0], [29.9, 2068.0], [30.0, 2068.0], [30.1, 2069.0], [30.2, 2076.0], [30.3, 2076.0], [30.4, 2077.0], [30.5, 2077.0], [30.6, 2079.0], [30.7, 2079.0], [30.8, 2091.0], [30.9, 2091.0], [31.0, 2094.0], [31.1, 2094.0], [31.2, 2106.0], [31.3, 2106.0], [31.4, 2118.0], [31.5, 2118.0], [31.6, 2133.0], [31.7, 2133.0], [31.8, 2145.0], [31.9, 2145.0], [32.0, 2175.0], [32.1, 2175.0], [32.2, 2208.0], [32.3, 2208.0], [32.4, 2217.0], [32.5, 2217.0], [32.6, 2218.0], [32.7, 2219.0], [32.8, 2219.0], [32.9, 2227.0], [33.0, 2227.0], [33.1, 2233.0], [33.2, 2233.0], [33.3, 2243.0], [33.4, 2243.0], [33.5, 2247.0], [33.6, 2247.0], [33.7, 2249.0], [33.8, 2249.0], [33.9, 2267.0], [34.0, 2267.0], [34.1, 2283.0], [34.2, 2283.0], [34.3, 2286.0], [34.4, 2286.0], [34.5, 2292.0], [34.6, 2292.0], [34.7, 2294.0], [34.8, 2294.0], [34.9, 2302.0], [35.0, 2302.0], [35.1, 2303.0], [35.2, 2305.0], [35.3, 2305.0], [35.4, 2305.0], [35.5, 2305.0], [35.6, 2321.0], [35.7, 2321.0], [35.8, 2322.0], [35.9, 2322.0], [36.0, 2326.0], [36.1, 2326.0], [36.2, 2328.0], [36.3, 2328.0], [36.4, 2336.0], [36.5, 2336.0], [36.6, 2345.0], [36.7, 2345.0], [36.8, 2350.0], [36.9, 2350.0], [37.0, 2350.0], [37.1, 2350.0], [37.2, 2356.0], [37.3, 2356.0], [37.4, 2358.0], [37.5, 2358.0], [37.6, 2363.0], [37.7, 2366.0], [37.8, 2366.0], [37.9, 2377.0], [38.0, 2377.0], [38.1, 2391.0], [38.2, 2391.0], [38.3, 2392.0], [38.4, 2392.0], [38.5, 2395.0], [38.6, 2395.0], [38.7, 2400.0], [38.8, 2400.0], [38.9, 2403.0], [39.0, 2403.0], [39.1, 2407.0], [39.2, 2407.0], [39.3, 2410.0], [39.4, 2410.0], [39.5, 2424.0], [39.6, 2424.0], [39.7, 2434.0], [39.8, 2434.0], [39.9, 2452.0], [40.0, 2452.0], [40.1, 2453.0], [40.2, 2460.0], [40.3, 2460.0], [40.4, 2461.0], [40.5, 2461.0], [40.6, 2493.0], [40.7, 2493.0], [40.8, 2497.0], [40.9, 2497.0], [41.0, 2501.0], [41.1, 2501.0], [41.2, 2517.0], [41.3, 2517.0], [41.4, 2523.0], [41.5, 2523.0], [41.6, 2524.0], [41.7, 2524.0], [41.8, 2524.0], [41.9, 2524.0], [42.0, 2533.0], [42.1, 2533.0], [42.2, 2536.0], [42.3, 2536.0], [42.4, 2540.0], [42.5, 2540.0], [42.6, 2540.0], [42.7, 2551.0], [42.8, 2551.0], [42.9, 2551.0], [43.0, 2551.0], [43.1, 2560.0], [43.2, 2560.0], [43.3, 2565.0], [43.4, 2565.0], [43.5, 2566.0], [43.6, 2566.0], [43.7, 2574.0], [43.8, 2574.0], [43.9, 2577.0], [44.0, 2577.0], [44.1, 2578.0], [44.2, 2578.0], [44.3, 2587.0], [44.4, 2587.0], [44.5, 2590.0], [44.6, 2590.0], [44.7, 2592.0], [44.8, 2592.0], [44.9, 2601.0], [45.0, 2601.0], [45.1, 2603.0], [45.2, 2603.0], [45.3, 2603.0], [45.4, 2615.0], [45.5, 2615.0], [45.6, 2618.0], [45.7, 2618.0], [45.8, 2621.0], [45.9, 2621.0], [46.0, 2624.0], [46.1, 2624.0], [46.2, 2624.0], [46.3, 2624.0], [46.4, 2627.0], [46.5, 2627.0], [46.6, 2648.0], [46.7, 2648.0], [46.8, 2649.0], [46.9, 2649.0], [47.0, 2674.0], [47.1, 2674.0], [47.2, 2677.0], [47.3, 2677.0], [47.4, 2697.0], [47.5, 2697.0], [47.6, 2701.0], [47.7, 2703.0], [47.8, 2703.0], [47.9, 2704.0], [48.0, 2704.0], [48.1, 2710.0], [48.2, 2710.0], [48.3, 2711.0], [48.4, 2711.0], [48.5, 2720.0], [48.6, 2720.0], [48.7, 2726.0], [48.8, 2726.0], [48.9, 2742.0], [49.0, 2742.0], [49.1, 2743.0], [49.2, 2743.0], [49.3, 2756.0], [49.4, 2756.0], [49.5, 2758.0], [49.6, 2758.0], [49.7, 2765.0], [49.8, 2765.0], [49.9, 2767.0], [50.0, 2767.0], [50.1, 2772.0], [50.2, 2777.0], [50.3, 2777.0], [50.4, 2785.0], [50.5, 2785.0], [50.6, 2793.0], [50.7, 2793.0], [50.8, 2797.0], [50.9, 2797.0], [51.0, 2798.0], [51.1, 2798.0], [51.2, 2802.0], [51.3, 2802.0], [51.4, 2804.0], [51.5, 2804.0], [51.6, 2808.0], [51.7, 2808.0], [51.8, 2821.0], [51.9, 2821.0], [52.0, 2832.0], [52.1, 2832.0], [52.2, 2836.0], [52.3, 2836.0], [52.4, 2838.0], [52.5, 2838.0], [52.6, 2862.0], [52.7, 2865.0], [52.8, 2865.0], [52.9, 2869.0], [53.0, 2869.0], [53.1, 2869.0], [53.2, 2869.0], [53.3, 2870.0], [53.4, 2870.0], [53.5, 2873.0], [53.6, 2873.0], [53.7, 2881.0], [53.8, 2881.0], [53.9, 2883.0], [54.0, 2883.0], [54.1, 2895.0], [54.2, 2895.0], [54.3, 2897.0], [54.4, 2897.0], [54.5, 2912.0], [54.6, 2912.0], [54.7, 2938.0], [54.8, 2938.0], [54.9, 2948.0], [55.0, 2948.0], [55.1, 2950.0], [55.2, 2954.0], [55.3, 2954.0], [55.4, 2957.0], [55.5, 2957.0], [55.6, 2968.0], [55.7, 2968.0], [55.8, 2969.0], [55.9, 2969.0], [56.0, 2970.0], [56.1, 2970.0], [56.2, 2973.0], [56.3, 2973.0], [56.4, 2977.0], [56.5, 2977.0], [56.6, 2977.0], [56.7, 2977.0], [56.8, 2979.0], [56.9, 2979.0], [57.0, 2988.0], [57.1, 2988.0], [57.2, 3007.0], [57.3, 3007.0], [57.4, 3009.0], [57.5, 3009.0], [57.6, 3009.0], [57.7, 3014.0], [57.8, 3014.0], [57.9, 3020.0], [58.0, 3020.0], [58.1, 3024.0], [58.2, 3024.0], [58.3, 3033.0], [58.4, 3033.0], [58.5, 3041.0], [58.6, 3041.0], [58.7, 3050.0], [58.8, 3050.0], [58.9, 3055.0], [59.0, 3055.0], [59.1, 3061.0], [59.2, 3061.0], [59.3, 3062.0], [59.4, 3062.0], [59.5, 3062.0], [59.6, 3062.0], [59.7, 3064.0], [59.8, 3064.0], [59.9, 3067.0], [60.0, 3067.0], [60.1, 3068.0], [60.2, 3083.0], [60.3, 3083.0], [60.4, 3090.0], [60.5, 3090.0], [60.6, 3094.0], [60.7, 3094.0], [60.8, 3112.0], [60.9, 3112.0], [61.0, 3114.0], [61.1, 3114.0], [61.2, 3141.0], [61.3, 3141.0], [61.4, 3146.0], [61.5, 3146.0], [61.6, 3152.0], [61.7, 3152.0], [61.8, 3161.0], [61.9, 3161.0], [62.0, 3164.0], [62.1, 3164.0], [62.2, 3197.0], [62.3, 3197.0], [62.4, 3209.0], [62.5, 3209.0], [62.6, 3213.0], [62.7, 3217.0], [62.8, 3217.0], [62.9, 3227.0], [63.0, 3227.0], [63.1, 3227.0], [63.2, 3227.0], [63.3, 3229.0], [63.4, 3229.0], [63.5, 3240.0], [63.6, 3240.0], [63.7, 3242.0], [63.8, 3242.0], [63.9, 3264.0], [64.0, 3264.0], [64.1, 3269.0], [64.2, 3269.0], [64.3, 3277.0], [64.4, 3277.0], [64.5, 3295.0], [64.6, 3295.0], [64.7, 3301.0], [64.8, 3301.0], [64.9, 3302.0], [65.0, 3302.0], [65.1, 3302.0], [65.2, 3302.0], [65.3, 3302.0], [65.4, 3304.0], [65.5, 3304.0], [65.6, 3310.0], [65.7, 3310.0], [65.8, 3312.0], [65.9, 3312.0], [66.0, 3315.0], [66.1, 3315.0], [66.2, 3331.0], [66.3, 3331.0], [66.4, 3354.0], [66.5, 3354.0], [66.6, 3365.0], [66.7, 3365.0], [66.8, 3366.0], [66.9, 3366.0], [67.0, 3377.0], [67.1, 3377.0], [67.2, 3379.0], [67.3, 3379.0], [67.4, 3405.0], [67.5, 3405.0], [67.6, 3409.0], [67.7, 3439.0], [67.8, 3439.0], [67.9, 3439.0], [68.0, 3439.0], [68.1, 3452.0], [68.2, 3452.0], [68.3, 3454.0], [68.4, 3454.0], [68.5, 3492.0], [68.6, 3492.0], [68.7, 3509.0], [68.8, 3509.0], [68.9, 3512.0], [69.0, 3512.0], [69.1, 3542.0], [69.2, 3542.0], [69.3, 3561.0], [69.4, 3561.0], [69.5, 3572.0], [69.6, 3572.0], [69.7, 3580.0], [69.8, 3580.0], [69.9, 3580.0], [70.0, 3580.0], [70.1, 3582.0], [70.2, 3592.0], [70.3, 3592.0], [70.4, 3597.0], [70.5, 3597.0], [70.6, 3611.0], [70.7, 3611.0], [70.8, 3620.0], [70.9, 3620.0], [71.0, 3622.0], [71.1, 3622.0], [71.2, 3641.0], [71.3, 3641.0], [71.4, 3644.0], [71.5, 3644.0], [71.6, 3648.0], [71.7, 3648.0], [71.8, 3654.0], [71.9, 3654.0], [72.0, 3728.0], [72.1, 3728.0], [72.2, 3736.0], [72.3, 3736.0], [72.4, 3749.0], [72.5, 3749.0], [72.6, 3756.0], [72.7, 3784.0], [72.8, 3784.0], [72.9, 3784.0], [73.0, 3784.0], [73.1, 3797.0], [73.2, 3797.0], [73.3, 3811.0], [73.4, 3811.0], [73.5, 3851.0], [73.6, 3851.0], [73.7, 3853.0], [73.8, 3853.0], [73.9, 3865.0], [74.0, 3865.0], [74.1, 3875.0], [74.2, 3875.0], [74.3, 3883.0], [74.4, 3883.0], [74.5, 3886.0], [74.6, 3886.0], [74.7, 3894.0], [74.8, 3894.0], [74.9, 3896.0], [75.0, 3896.0], [75.1, 3904.0], [75.2, 3904.0], [75.3, 3904.0], [75.4, 3907.0], [75.5, 3907.0], [75.6, 3917.0], [75.7, 3917.0], [75.8, 3926.0], [75.9, 3926.0], [76.0, 3969.0], [76.1, 3969.0], [76.2, 3990.0], [76.3, 3990.0], [76.4, 4043.0], [76.5, 4043.0], [76.6, 4056.0], [76.7, 4056.0], [76.8, 4079.0], [76.9, 4079.0], [77.0, 4085.0], [77.1, 4085.0], [77.2, 4098.0], [77.3, 4098.0], [77.4, 4101.0], [77.5, 4101.0], [77.6, 4106.0], [77.7, 4122.0], [77.8, 4122.0], [77.9, 4133.0], [78.0, 4133.0], [78.1, 4134.0], [78.2, 4134.0], [78.3, 4136.0], [78.4, 4136.0], [78.5, 4139.0], [78.6, 4139.0], [78.7, 4143.0], [78.8, 4143.0], [78.9, 4151.0], [79.0, 4151.0], [79.1, 4153.0], [79.2, 4153.0], [79.3, 4166.0], [79.4, 4166.0], [79.5, 4184.0], [79.6, 4184.0], [79.7, 4235.0], [79.8, 4235.0], [79.9, 4240.0], [80.0, 4240.0], [80.1, 4260.0], [80.2, 4267.0], [80.3, 4267.0], [80.4, 4348.0], [80.5, 4348.0], [80.6, 4363.0], [80.7, 4363.0], [80.8, 4365.0], [80.9, 4365.0], [81.0, 4369.0], [81.1, 4369.0], [81.2, 4411.0], [81.3, 4411.0], [81.4, 4417.0], [81.5, 4417.0], [81.6, 4429.0], [81.7, 4429.0], [81.8, 4456.0], [81.9, 4456.0], [82.0, 4466.0], [82.1, 4466.0], [82.2, 4468.0], [82.3, 4468.0], [82.4, 4476.0], [82.5, 4476.0], [82.6, 4498.0], [82.7, 4524.0], [82.8, 4524.0], [82.9, 4567.0], [83.0, 4567.0], [83.1, 4622.0], [83.2, 4622.0], [83.3, 4638.0], [83.4, 4638.0], [83.5, 4638.0], [83.6, 4638.0], [83.7, 4687.0], [83.8, 4687.0], [83.9, 4725.0], [84.0, 4725.0], [84.1, 4759.0], [84.2, 4759.0], [84.3, 4762.0], [84.4, 4762.0], [84.5, 4764.0], [84.6, 4764.0], [84.7, 4803.0], [84.8, 4803.0], [84.9, 4867.0], [85.0, 4867.0], [85.1, 4868.0], [85.2, 4879.0], [85.3, 4879.0], [85.4, 4883.0], [85.5, 4883.0], [85.6, 4899.0], [85.7, 4899.0], [85.8, 4944.0], [85.9, 4944.0], [86.0, 4987.0], [86.1, 4987.0], [86.2, 5000.0], [86.3, 5000.0], [86.4, 5026.0], [86.5, 5026.0], [86.6, 5054.0], [86.7, 5054.0], [86.8, 5067.0], [86.9, 5067.0], [87.0, 5074.0], [87.1, 5074.0], [87.2, 5125.0], [87.3, 5125.0], [87.4, 5196.0], [87.5, 5196.0], [87.6, 5241.0], [87.7, 5257.0], [87.8, 5257.0], [87.9, 5271.0], [88.0, 5271.0], [88.1, 5295.0], [88.2, 5295.0], [88.3, 5314.0], [88.4, 5314.0], [88.5, 5326.0], [88.6, 5326.0], [88.7, 5353.0], [88.8, 5353.0], [88.9, 5378.0], [89.0, 5378.0], [89.1, 5384.0], [89.2, 5384.0], [89.3, 5395.0], [89.4, 5395.0], [89.5, 5431.0], [89.6, 5431.0], [89.7, 5440.0], [89.8, 5440.0], [89.9, 5456.0], [90.0, 5456.0], [90.1, 5537.0], [90.2, 5606.0], [90.3, 5606.0], [90.4, 5607.0], [90.5, 5607.0], [90.6, 5642.0], [90.7, 5642.0], [90.8, 5653.0], [90.9, 5653.0], [91.0, 5697.0], [91.1, 5697.0], [91.2, 5724.0], [91.3, 5724.0], [91.4, 5750.0], [91.5, 5750.0], [91.6, 5951.0], [91.7, 5951.0], [91.8, 5967.0], [91.9, 5967.0], [92.0, 6023.0], [92.1, 6023.0], [92.2, 6079.0], [92.3, 6079.0], [92.4, 6144.0], [92.5, 6144.0], [92.6, 6165.0], [92.7, 6170.0], [92.8, 6170.0], [92.9, 6259.0], [93.0, 6259.0], [93.1, 6273.0], [93.2, 6273.0], [93.3, 6544.0], [93.4, 6544.0], [93.5, 6549.0], [93.6, 6549.0], [93.7, 6626.0], [93.8, 6626.0], [93.9, 6700.0], [94.0, 6700.0], [94.1, 6717.0], [94.2, 6717.0], [94.3, 6723.0], [94.4, 6723.0], [94.5, 6767.0], [94.6, 6767.0], [94.7, 6774.0], [94.8, 6774.0], [94.9, 6788.0], [95.0, 6788.0], [95.1, 6805.0], [95.2, 6808.0], [95.3, 6808.0], [95.4, 6813.0], [95.5, 6813.0], [95.6, 6821.0], [95.7, 6821.0], [95.8, 6868.0], [95.9, 6868.0], [96.0, 6870.0], [96.1, 6870.0], [96.2, 6916.0], [96.3, 6916.0], [96.4, 7043.0], [96.5, 7043.0], [96.6, 7080.0], [96.7, 7080.0], [96.8, 7142.0], [96.9, 7142.0], [97.0, 7148.0], [97.1, 7148.0], [97.2, 7252.0], [97.3, 7252.0], [97.4, 7309.0], [97.5, 7309.0], [97.6, 7591.0], [97.7, 7601.0], [97.8, 7601.0], [97.9, 7604.0], [98.0, 7604.0], [98.1, 7769.0], [98.2, 7769.0], [98.3, 8000.0], [98.4, 8000.0], [98.5, 8270.0], [98.6, 8270.0], [98.7, 8653.0], [98.8, 8653.0], [98.9, 9614.0], [99.0, 9614.0], [99.1, 10281.0], [99.2, 10281.0], [99.3, 10886.0], [99.4, 10886.0], [99.5, 11317.0], [99.6, 11317.0], [99.7, 12730.0], [99.8, 12730.0], [99.9, 13359.0], [100.0, 13359.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 20.0, "series": [{"data": [[0.0, 4.0], [600.0, 2.0], [700.0, 5.0], [800.0, 3.0], [900.0, 6.0], [1000.0, 3.0], [1100.0, 9.0], [1200.0, 13.0], [1300.0, 11.0], [1400.0, 6.0], [1500.0, 13.0], [1600.0, 7.0], [1700.0, 8.0], [1800.0, 9.0], [1900.0, 17.0], [2000.0, 19.0], [2100.0, 5.0], [2200.0, 14.0], [2300.0, 20.0], [2400.0, 12.0], [2500.0, 20.0], [2600.0, 14.0], [2800.0, 17.0], [2700.0, 19.0], [2900.0, 14.0], [3000.0, 19.0], [3100.0, 8.0], [3300.0, 14.0], [3200.0, 12.0], [3400.0, 7.0], [3500.0, 10.0], [3600.0, 7.0], [3700.0, 7.0], [3800.0, 9.0], [3900.0, 7.0], [4000.0, 5.0], [4100.0, 12.0], [4200.0, 4.0], [4300.0, 4.0], [4400.0, 8.0], [4600.0, 4.0], [4500.0, 2.0], [4700.0, 4.0], [4800.0, 6.0], [5000.0, 5.0], [4900.0, 2.0], [5100.0, 2.0], [5200.0, 4.0], [5300.0, 6.0], [5400.0, 3.0], [5600.0, 5.0], [5500.0, 1.0], [5700.0, 2.0], [6000.0, 2.0], [5900.0, 2.0], [6100.0, 3.0], [6200.0, 2.0], [6500.0, 2.0], [6600.0, 1.0], [6700.0, 6.0], [6800.0, 6.0], [6900.0, 1.0], [7000.0, 2.0], [7100.0, 2.0], [7200.0, 1.0], [7300.0, 1.0], [7600.0, 2.0], [7500.0, 1.0], [7700.0, 1.0], [8000.0, 1.0], [8200.0, 1.0], [8600.0, 1.0], [9600.0, 1.0], [10200.0, 1.0], [10800.0, 1.0], [11300.0, 1.0], [12700.0, 1.0], [13300.0, 1.0], [100.0, 15.0], [200.0, 1.0], [300.0, 4.0], [400.0, 5.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 431.0, "series": [{"data": [[0.0, 29.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 60.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 431.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7374938E12, "maxY": 41.902, "series": [{"data": [[1.73749458E12, 1.0], [1.7374944E12, 41.902], [1.7374938E12, 1.0], [1.73749386E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73749458E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 152.04545454545456, "minX": 1.0, "maxY": 4104.201030927834, "series": [{"data": [[2.0, 329.0], [3.0, 418.0], [4.0, 539.25], [5.0, 708.0], [6.0, 544.6666666666666], [7.0, 520.0], [8.0, 972.6666666666666], [9.0, 912.0], [10.0, 1062.1666666666667], [11.0, 965.0], [12.0, 1060.0], [13.0, 1007.0], [14.0, 1273.0], [15.0, 942.0], [16.0, 1202.0], [17.0, 1157.0], [18.0, 1203.0], [19.0, 1568.0], [20.0, 1697.3333333333333], [21.0, 1054.6666666666667], [22.0, 1890.5], [23.0, 1540.0], [24.0, 2162.0], [25.0, 1672.3333333333333], [26.0, 1816.0], [27.0, 1766.0], [28.0, 1904.0], [29.0, 1584.5], [30.0, 2120.5], [31.0, 2300.25], [33.0, 2390.0769230769233], [32.0, 2493.125], [35.0, 2732.714285714286], [34.0, 2461.5], [37.0, 2559.166666666667], [36.0, 2626.25], [39.0, 1768.0], [38.0, 2878.6666666666665], [41.0, 2919.666666666667], [40.0, 2850.538461538462], [43.0, 3110.9375], [42.0, 3503.75], [45.0, 3175.6190476190477], [44.0, 2973.714285714286], [47.0, 3276.1400000000012], [46.0, 3165.136363636364], [49.0, 3600.107142857143], [48.0, 2840.75], [50.0, 4104.201030927834], [1.0, 152.04545454545456]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[40.32884615384617, 3085.8096153846154]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16.5, "minX": 1.7374938E12, "maxY": 5453167.266666667, "series": [{"data": [[1.73749458E12, 147255.71666666667], [1.7374944E12, 5453167.266666667], [1.7374938E12, 54375.76666666667], [1.73749386E12, 54364.333333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73749458E12, 32.666666666666664], [1.7374944E12, 1650.0], [1.7374938E12, 16.5], [1.73749386E12, 16.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73749458E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 104.4, "minX": 1.7374938E12, "maxY": 3204.175999999999, "series": [{"data": [[1.73749458E12, 143.50000000000003], [1.7374944E12, 3204.175999999999], [1.7374938E12, 115.2], [1.73749386E12, 104.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73749458E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 42.6, "minX": 1.7374938E12, "maxY": 363.658, "series": [{"data": [[1.73749458E12, 50.7], [1.7374944E12, 363.658], [1.7374938E12, 54.2], [1.73749386E12, 42.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73749458E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.0, "minX": 1.7374938E12, "maxY": 62.261999999999865, "series": [{"data": [[1.73749458E12, 10.200000000000001], [1.7374944E12, 62.261999999999865], [1.7374938E12, 12.200000000000001], [1.73749386E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73749458E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 88.0, "minX": 1.7374938E12, "maxY": 13359.0, "series": [{"data": [[1.73749458E12, 249.0], [1.7374944E12, 13359.0], [1.7374938E12, 171.0], [1.73749386E12, 124.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73749458E12, 112.0], [1.7374944E12, 329.0], [1.7374938E12, 92.0], [1.73749386E12, 88.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73749458E12, 240.50000000000003], [1.7374944E12, 5606.9], [1.7374938E12, 171.0], [1.73749386E12, 124.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73749458E12, 249.0], [1.7374944E12, 10274.330000000005], [1.7374938E12, 171.0], [1.73749386E12, 124.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73749458E12, 134.0], [1.7374944E12, 2826.5], [1.7374938E12, 105.0], [1.73749386E12, 106.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73749458E12, 249.0], [1.7374944E12, 6807.85], [1.7374938E12, 171.0], [1.73749386E12, 124.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73749458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
    data: {"result": {"minY": 105.5, "minX": 1.0, "maxY": 5249.0, "series": [{"data": [[2.0, 434.5], [8.0, 5249.0], [10.0, 3696.5], [3.0, 2954.0], [12.0, 2314.0], [13.0, 3835.0], [15.0, 2931.0], [4.0, 1993.0], [16.0, 2699.0], [1.0, 247.0], [17.0, 2603.0], [18.0, 2667.0], [19.0, 2243.0], [5.0, 105.5], [20.0, 3609.5], [6.0, 4881.0], [7.0, 778.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.5, "minX": 1.0, "maxY": 783.0, "series": [{"data": [[2.0, 125.5], [8.0, 783.0], [10.0, 327.0], [3.0, 419.0], [12.0, 276.0], [13.0, 330.5], [15.0, 237.0], [4.0, 190.0], [16.0, 257.5], [1.0, 47.0], [17.0, 245.5], [18.0, 233.0], [19.0, 163.0], [5.0, 42.5], [20.0, 362.5], [6.0, 514.0], [7.0, 110.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.7374938E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73749458E12, 0.16666666666666666], [1.7374944E12, 8.333333333333334], [1.7374938E12, 0.1], [1.73749386E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73749458E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7374938E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73749458E12, 0.16666666666666666], [1.7374944E12, 8.333333333333334], [1.7374938E12, 0.08333333333333333], [1.73749386E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73749458E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7374938E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73749458E12, 0.16666666666666666], [1.7374944E12, 8.333333333333334], [1.7374938E12, 0.08333333333333333], [1.73749386E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73749458E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7374938E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73749458E12, 0.16666666666666666], [1.7374944E12, 8.333333333333334], [1.7374938E12, 0.08333333333333333], [1.73749386E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73749458E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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

