<template>
    <div class="starwheel">
        <svg id="starwheel" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1200px" height="1200px" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve">
            <defs>
                <radialGradient id="atmosphere-gradient" cx="600" cy="600" r="450" gradientUnits="userSpaceOnUse">
                    <stop offset="0.5" style="stop-color:#485E81;stop-opacity:0.5"></stop>
                    <stop offset="1" style="stop-color:#485E81;stop-opacity:0"></stop>
                </radialGradient>
            </defs>
            <g id="atmosphere">
                <circle fill="url(#atmosphere-gradient)" cx="600" cy="600" r="450"></circle>
            </g>
            <g id="planetoid">
                <circle fill="#2E3445" cx="600" cy="600" r="400"></circle>
            </g>
            <g id="lines" opacity="0.1">
                <line fill="none" x1="540.667" y1="189" x2="517.833" y2="129.833"></line>
                <line fill="none" x1="517.833" y1="129.833" x2="505.167" y2="133.832"></line>
                <line fill="none" x1="505.167" y1="133.832" x2="435.5" y2="184.167"></line>
                <line fill="none" x1="517.833" y1="129.833" x2="554.833" y2="70.833"></line>
                <line fill="none" x1="980.913" y1="141.747" x2="932.5" y2="200.16"></line>
                <line fill="none" x1="932.5" y1="200.16" x2="860.667" y2="189.66"></line>
                <line fill="none" x1="860.667" y1="189.66" x2="833.167" y2="104.5"></line>
                <line fill="none" x1="833.167" y1="104.5" x2="807.5" y2="71.167"></line>
                <line fill="none" x1="807.5" y1="71.167" x2="804.333" y2="41.667"></line>
                <line fill="none" x1="860.667" y1="189.66" x2="750.5" y2="163.833"></line>
                <line fill="none" x1="750.5" y1="163.833" x2="743.5" y2="143.5"></line>
                <line fill="none" x1="743.5" y1="143.5" x2="833.167" y2="104.5"></line>
                <line fill="none" x1="1152.333" y1="405.326" x2="1077.5" y2="393.16"></line>
                <line fill="none" x1="1077.5" y1="393.16" x2="1023.667" y2="349.66"></line>
                <line fill="none" x1="1077.5" y1="393.16" x2="1035.333" y2="325.666"></line>
                <line fill="none" x1="1070.833" y1="461.493" x2="1077.5" y2="393.16"></line>
                <line fill="none" x1="1070.833" y1="461.493" x2="1030.833" y2="443.493"></line>
                <line fill="none" x1="1030.833" y1="443.493" x2="1058.5" y2="471.16"></line>
                <line fill="none" x1="1058.5" y1="471.16" x2="1070.833" y2="461.493"></line>
                <line fill="none" x1="1008.667" y1="644.66" x2="1067.5" y2="516.826"></line>
                <line fill="none" x1="1067.5" y1="516.826" x2="1164.833" y2="652.827"></line>
                <line fill="none" x1="1164.833" y1="652.827" x2="1008.667" y2="644.66"></line>
                <line fill="none" x1="1116.667" y1="830.326" x2="1072.167" y2="804.827"></line>
                <line fill="none" x1="1072.167" y1="804.827" x2="1075.833" y2="762.499"></line>
                <line fill="none" x1="1075.833" y1="762.499" x2="1059.333" y2="735.66"></line>
                <line fill="none" x1="982" y1="834.993" x2="1072.167" y2="804.827"></line>
                <line fill="none" x1="982" y1="834.993" x2="961.667" y2="789.993"></line>
                <line fill="none" x1="982" y1="834.993" x2="975.5" y2="847.827"></line>
                <line fill="none" x1="1011.333" y1="968.666" x2="953.333" y2="1053.66"></line>
                <line fill="none" x1="953.333" y1="1053.66" x2="907.167" y2="1038.493"></line>
                <line fill="none" x1="907.167" y1="1038.493" x2="976.5" y2="939.499"></line>
                <line fill="none" x1="976.5" y1="939.499" x2="1011.333" y2="968.666"></line>
                <line fill="none" x1="907.167" y1="1038.493" x2="886.833" y2="970.16"></line>
                <line fill="none" x1="886.833" y1="970.16" x2="910.667" y2="900.66"></line>
                <line fill="none" x1="782.417" y1="1043.243" x2="755.333" y2="1012.327"></line>
                <line fill="none" x1="755.333" y1="1012.327" x2="746" y2="1013.326"></line>
                <line fill="none" x1="746" y1="1013.326" x2="741.167" y2="1034.16"></line>
                <line fill="none" x1="741.167" y1="1034.16" x2="782.417" y2="1043.243"></line>
                <line fill="none" x1="782.417" y1="1043.243" x2="774.667" y2="1119.66"></line>
                <line fill="none" x1="774.667" y1="1119.66" x2="794.5" y2="1121.827"></line>
                <line fill="none" x1="794.5" y1="1121.827" x2="810.833" y2="1131.16"></line>
                <line fill="none" x1="478.167" y1="1159.826" x2="407" y2="1088.326"></line>
                <line fill="none" x1="407" y1="1088.326" x2="421.166" y2="1062.167"></line>
                <line fill="none" x1="421.166" y1="1062.167" x2="521.5" y2="1044.827"></line>
                <line fill="none" x1="521.5" y1="1044.827" x2="498.333" y2="1143.333"></line>
                <line fill="none" x1="498.333" y1="1143.333" x2="478.167" y2="1159.826"></line>
                <line fill="none" x1="274.167" y1="1054.827" x2="252.833" y2="1012.493"></line>
                <line fill="none" x1="252.833" y1="1012.493" x2="170.667" y2="1006.326"></line>
                <line fill="none" x1="170.667" y1="1006.326" x2="270.167" y2="954.5"></line>
                <line fill="none" x1="270.167" y1="954.5" x2="286.5" y2="953.167"></line>
                <line fill="none" x1="286.5" y1="953.167" x2="252.833" y2="1012.493"></line>
                <line fill="none" x1="97.5" y1="916.493" x2="85.667" y2="864.327"></line>
                <line fill="none" x1="85.667" y1="864.327" x2="182.333" y2="877.327"></line>
                <line fill="none" x1="182.333" y1="877.327" x2="154.833" y2="837.827"></line>
                <line fill="none" x1="162.167" y1="722.495" x2="60" y2="670.995"></line>
                <line fill="none" x1="60" y1="670.995" x2="28" y2="651.995"></line>
                <line fill="none" x1="60" y1="670.995" x2="80.167" y2="638.495"></line>
                <line fill="none" x1="80.167" y1="638.495" x2="134.166" y2="617.826"></line>
                <line fill="none" x1="134.166" y1="617.826" x2="173.333" y2="620.326"></line>
                <line fill="none" x1="13.5" y1="522.495" x2="118.167" y2="518.162"></line>
                <line fill="none" x1="118.167" y1="518.162" x2="175.5" y2="487.495"></line>
                <line fill="none" x1="175.5" y1="487.495" x2="166.667" y2="474.995"></line>
                <line fill="none" x1="166.667" y1="474.995" x2="155.5" y2="412.162"></line>
                <line fill="none" x1="118.167" y1="518.162" x2="75.833" y2="468.828"></line>
                <line fill="none" x1="232" y1="384.326" x2="238.5" y2="302.5"></line>
                <line fill="none" x1="238.5" y1="302.5" x2="157.167" y2="329.493"></line>
                <line fill="none" x1="298.833" y1="107.5" x2="297.167" y2="170.833"></line>
                <line fill="none" x1="297.167" y1="170.833" x2="291.167" y2="185.5"></line>
                <line fill="none" x1="291.167" y1="185.5" x2="310.833" y2="188.166"></line>
                <line fill="none" x1="296.333" y1="170.833" x2="310.833" y2="188.166"></line>
                <line fill="none" x1="291.167" y1="185.5" x2="204.833" y2="196.167"></line>
                <line fill="none" x1="238.5" y1="302.5" x2="310.833" y2="188.166"></line>
                <line fill="none" x1="505.167" y1="133.832" x2="438.5" y2="26.167"></line>
                <line fill="none" x1="741.167" y1="1034.16" x2="684.833" y2="1044.827"></line>
            </g>
            <g id="stars">
                <g id="dim" opacity="0.1">
                    <circle cx="709.664" cy="1084.663" r="0.997"></circle>
                    <circle cx="605.997" cy="1145.33" r="0.997"></circle>
                    <circle cx="440.33" cy="1024.74" r="0.997"></circle>
                    <circle cx="385.664" cy="1147.323" r="0.997"></circle>
                    <circle cx="639.997" cy="1076.99" r="0.997"></circle>
                    <circle cx="523.997" cy="1091.99" r="0.997"></circle>
                    <circle cx="464.664" cy="1102.663" r="0.997"></circle>
                    <circle cx="775.664" cy="1168.997" r="0.997"></circle>
                    <circle cx="755.33" cy="1143.33" r="0.997"></circle>
                    <circle cx="826.33" cy="1064.33" r="0.997"></circle>
                    <circle cx="816.997" cy="1052.663" r="0.997"></circle>
                    <circle cx="845.33" cy="1112.323" r="0.997"></circle>
                    <circle cx="929.663" cy="1092.33" r="0.997"></circle>
                    <circle cx="964.33" cy="994.665" r="0.997"></circle>
                    <circle cx="1098.663" cy="903.323" r="0.997"></circle>
                    <circle cx="1003.663" cy="905.316" r="0.997"></circle>
                    <circle cx="981.997" cy="874.323" r="0.997"></circle>
                    <circle cx="1058.33" cy="946.998" r="0.997"></circle>
                    <circle cx="1150.663" cy="784.659" r="0.997"></circle>
                    <circle cx="1000.997" cy="754.668" r="0.997"></circle>
                    <circle cx="1020.663" cy="785.656" r="0.997"></circle>
                    <circle cx="1118.997" cy="665.001" r="0.997"></circle>
                    <circle cx="1136.663" cy="485.334" r="0.997"></circle>
                    <circle cx="1115.913" cy="467.323" r="0.997"></circle>
                    <circle cx="1004.997" cy="400.239" r="0.997"></circle>
                    <circle cx="1114.33" cy="327.996" r="0.997"></circle>
                    <circle cx="1070.663" cy="310.668" r="0.997"></circle>
                    <circle cx="910.33" cy="328.992" r="0.997"></circle>
                    <circle cx="941.663" cy="286.335" r="0.997"></circle>
                    <circle cx="998.33" cy="226.335" r="0.997"></circle>
                    <circle cx="875.997" cy="262.003" r="0.997"></circle>
                    <circle cx="806.913" cy="132.33" r="0.997"></circle>
                    <circle cx="906.997" cy="133.327" r="0.997"></circle>
                    <circle cx="740.663" cy="68.663" r="0.997"></circle>
                    <circle cx="610.663" cy="183.673" r="0.997"></circle>
                    <circle cx="637.497" cy="45.673" r="0.997"></circle>
                    <circle cx="530.246" cy="57.414" r="0.997"></circle>
                    <circle cx="410.997" cy="101.329" r="0.997"></circle>
                    <circle cx="487.997" cy="179.83" r="0.997"></circle>
                    <circle cx="362.997" cy="154.34" r="0.997"></circle>
                    <circle cx="317.33" cy="231.006" r="0.997"></circle>
                    <circle cx="185.997" cy="236.006" r="0.997"></circle>
                    <circle cx="270.829" cy="295.234" r="0.997"></circle>
                    <circle cx="186.993" cy="351.673" r="0.997"></circle>
                    <circle cx="216.663" cy="429.673" r="0.997"></circle>
                    <circle cx="141.997" cy="433.006" r="0.997"></circle>
                    <circle cx="48.997" cy="418.673" r="0.997"></circle>
                    <circle cx="179.664" cy="541.673" r="0.997"></circle>
                    <circle cx="93.33" cy="592.34" r="0.997"></circle>
                    <circle cx="195.997" cy="667.006" r="0.997"></circle>
                    <circle cx="131.33" cy="747.34" r="0.997"></circle>
                    <circle cx="62.33" cy="701.673" r="0.997"></circle>
                    <circle cx="188.997" cy="786.323" r="0.997"></circle>
                    <circle cx="232.997" cy="843.34" r="0.997"></circle>
                    <circle cx="122.33" cy="922.673" r="0.997"></circle>
                    <circle cx="245.33" cy="879.323" r="0.997"></circle>
                    <circle cx="258.663" cy="904.006" r="0.997"></circle>
                    <circle cx="331.33" cy="918.656" r="0.997"></circle>
                    <circle cx="314.33" cy="1034.656" r="0.997"></circle>
                    <circle cx="376.997" cy="1069.673" r="0.997"></circle>
                    <circle cx="361.997" cy="1086.656" r="0.997"></circle>
                    <circle cx="476.997" cy="1003.673" r="0.997"></circle>
                    <circle cx="634.583" cy="1088" r="0.417"></circle>
                    <circle cx="575.084" cy="1095.75" r="0.417"></circle>
                    <circle cx="463.084" cy="1110.75" r="0.417"></circle>
                    <circle cx="575.75" cy="1164.083" r="0.417"></circle>
                    <circle cx="790.75" cy="1144.083" r="0.417"></circle>
                    <circle cx="763.417" cy="1077.417" r="0.417"></circle>
                    <circle cx="832.084" cy="1006.083" r="0.417"></circle>
                    <circle cx="905.75" cy="1062.417" r="0.417"></circle>
                    <circle cx="961.75" cy="995.75" r="0.417"></circle>
                    <circle cx="1005.75" cy="1035.75" r="0.417"></circle>
                    <circle cx="925.083" cy="864.083" r="0.417"></circle>
                    <circle cx="990.417" cy="854.417" r="0.417"></circle>
                    <circle cx="946.083" cy="905.083" r="0.417"></circle>
                    <circle cx="997.083" cy="790.75" r="0.417"></circle>
                    <circle cx="1057.083" cy="853.75" r="0.417"></circle>
                    <circle cx="1097.417" cy="795.417" r="0.417"></circle>
                    <circle cx="1016.75" cy="764.083" r="0.417"></circle>
                    <circle cx="1076.417" cy="695.75" r="0.417"></circle>
                    <circle cx="1045.417" cy="669.75" r="0.417"></circle>
                    <circle cx="1117.083" cy="749.083" r="0.417"></circle>
                    <circle cx="1124.084" cy="628.084" r="0.417"></circle>
                    <circle cx="1072.084" cy="588.417" r="0.417"></circle>
                    <circle cx="1030.75" cy="531.084" r="0.417"></circle>
                    <circle cx="1142.084" cy="568.084" r="0.417"></circle>
                    <circle cx="1102.084" cy="493.417" r="0.417"></circle>
                    <circle cx="992.084" cy="484.75" r="0.417"></circle>
                    <circle cx="1035.75" cy="384.417" r="0.417"></circle>
                    <circle cx="1102.75" cy="432.417" r="0.417"></circle>
                    <circle cx="1105.75" cy="352.75" r="0.417"></circle>
                    <circle cx="952.417" cy="309.75" r="0.417"></circle>
                    <circle cx="948.417" cy="356.417" r="0.417"></circle>
                    <circle cx="967.417" cy="247.75" r="0.417"></circle>
                    <circle cx="859.75" cy="257.75" r="0.417"></circle>
                    <circle cx="883.75" cy="293.75" r="0.417"></circle>
                    <circle cx="897.083" cy="162.417" r="0.417"></circle>
                    <circle cx="853.75" cy="201.084" r="0.417"></circle>
                    <circle cx="813.417" cy="131.417" r="0.417"></circle>
                    <circle cx="748.417" cy="206.75" r="0.417"></circle>
                    <circle cx="764.75" cy="92.084" r="0.417"></circle>
                    <circle cx="796.417" cy="108.417" r="0.417"></circle>
                    <circle cx="696.75" cy="124.417" r="0.417"></circle>
                    <circle cx="632.417" cy="163.417" r="0.417"></circle>
                    <circle cx="519.417" cy="79.084" r="0.417"></circle>
                    <circle cx="561.083" cy="136.75" r="0.417"></circle>
                    <circle cx="475.083" cy="188.417" r="0.417"></circle>
                    <circle cx="469.083" cy="80.417" r="0.417"></circle>
                    <circle cx="562.75" cy="61.417" r="0.417"></circle>
                    <circle cx="346.417" cy="99.75" r="0.417"></circle>
                    <circle cx="253.083" cy="158.417" r="0.417"></circle>
                    <circle cx="313.417" cy="238.417" r="0.417"></circle>
                    <circle cx="189.417" cy="240.75" r="0.417"></circle>
                    <circle cx="203.083" cy="282.75" r="0.417"></circle>
                    <circle cx="314.75" cy="254.083" r="0.417"></circle>
                    <circle cx="235.083" cy="324.417" r="0.417"></circle>
                    <circle cx="103.083" cy="302.75" r="0.417"></circle>
                    <circle cx="215.083" cy="367.084" r="0.417"></circle>
                    <circle cx="207.083" cy="422.75" r="0.417"></circle>
                    <circle cx="118.417" cy="423.75" r="0.417"></circle>
                    <circle cx="180.083" cy="507.417" r="0.417"></circle>
                    <circle cx="90.417" cy="439.084" r="0.417"></circle>
                    <circle cx="200.083" cy="522.75" r="0.417"></circle>
                    <circle cx="173.417" cy="570.084" r="0.417"></circle>
                    <circle cx="148.417" cy="648.417" r="0.417"></circle>
                    <circle cx="109.417" cy="588.417" r="0.417"></circle>
                    <circle cx="38.084" cy="614.75" r="0.417"></circle>
                    <circle cx="153.084" cy="690.417" r="0.417"></circle>
                    <circle cx="102.417" cy="722.084" r="0.417"></circle>
                    <circle cx="204.75" cy="778.75" r="0.417"></circle>
                    <circle cx="189.417" cy="832.417" r="0.417"></circle>
                    <circle cx="146.083" cy="795.417" r="0.417"></circle>
                    <circle cx="238.417" cy="857.417" r="0.417"></circle>
                    <circle cx="116.083" cy="886.084" r="0.417"></circle>
                    <circle cx="297.417" cy="925.75" r="0.417"></circle>
                    <circle cx="273.417" cy="959.75" r="0.417"></circle>
                    <circle cx="218.417" cy="936.084" r="0.417"></circle>
                    <circle cx="291.084" cy="1018.75" r="0.417"></circle>
                    <circle cx="236.75" cy="1052.417" r="0.417"></circle>
                    <circle cx="402.084" cy="1012.417" r="0.417"></circle>
                    <circle cx="441.75" cy="1072.084" r="0.417"></circle>
                    <circle cx="378.417" cy="1111.084" r="0.417"></circle>
                    <circle cx="393.417" cy="1041.084" r="0.417"></circle>
                    <circle cx="329.75" cy="1096.417" r="0.417"></circle>
                    <circle cx="486.417" cy="1142.417" r="0.417"></circle>
                    <circle cx="511.084" cy="1017.75" r="0.417"></circle>
                    <circle cx="535.75" cy="1001.417" r="0.417"></circle>
                    <circle cx="564.084" cy="1118.084" r="0.417"></circle>
                </g>
                <g id="medium" opacity="0.3">
                    <circle cx="704.167" cy="178.833" r="0.833"></circle>
                    <circle cx="799.167" cy="236.167" r="1.167"></circle>
                    <circle cx="596" cy="4.667" r="1"></circle>
                    <circle cx="695.833" cy="76.5" r="1.167"></circle>
                    <circle cx="567.833" cy="86.5" r="0.833"></circle>
                    <circle cx="223.5" cy="211.167" r="0.833"></circle>
                    <circle cx="415.833" cy="122.834" r="0.5"></circle>
                    <circle cx="422.833" cy="224.834" r="0.833"></circle>
                    <circle cx="166.667" cy="474.995" r="0.667"></circle>
                    <circle cx="155.5" cy="412.162" r="1.167"></circle>
                    <circle cx="75.833" cy="468.828" r="0.833"></circle>
                    <circle cx="118.167" cy="518.162" r="1.167"></circle>
                    <circle cx="60" cy="670.995" r="1.333"></circle>
                    <circle cx="80.167" cy="638.495" r="1.5"></circle>
                    <circle cx="6" cy="663.328" r="1.333"></circle>
                    <circle cx="182.333" cy="877.327" r="1"></circle>
                    <circle cx="70" cy="786.327" r="1"></circle>
                    <circle cx="117.833" cy="829.493" r="0.5"></circle>
                    <circle cx="256.833" cy="877.493" r="0.833"></circle>
                    <circle cx="97.5" cy="916.493" r="1.167"></circle>
                    <circle cx="72.167" cy="770.493" r="1.167"></circle>
                    <circle cx="363.5" cy="1021.826" r="0.833"></circle>
                    <circle cx="350.667" cy="954.993" r="0.667"></circle>
                    <circle cx="252.833" cy="1012.493" r="1.167"></circle>
                    <circle cx="449.333" cy="1174.326" r="0.667"></circle>
                    <circle cx="583.833" cy="1011.16" r="0.833"></circle>
                    <circle cx="610" cy="1151.993" r="0.333"></circle>
                    <circle cx="507.25" cy="1160.91" r="1.083"></circle>
                    <circle cx="675.167" cy="1151.493" r="0.833"></circle>
                    <circle cx="551.5" cy="1075.16" r="0.833"></circle>
                    <circle cx="1017.167" cy="982.493" r="0.833"></circle>
                    <circle cx="908.5" cy="1020.826" r="0.5"></circle>
                    <circle cx="1003.667" cy="913.66" r="1"></circle>
                    <circle cx="961.667" cy="789.993" r="1"></circle>
                    <circle cx="1092.833" cy="879.16" r="0.833"></circle>
                    <circle cx="1083.333" cy="872.327" r="1"></circle>
                    <circle cx="1019.667" cy="688.66" r="0.667"></circle>
                    <circle cx="1072" cy="627.993" r="0.667"></circle>
                    <circle cx="1169.833" cy="540.16" r="1.5"></circle>
                    <circle cx="1129" cy="588.993" r="1"></circle>
                    <circle cx="1124.167" cy="595.16" r="0.833"></circle>
                    <circle cx="1070.833" cy="461.493" r="1.167"></circle>
                    <circle cx="1077.5" cy="393.16" r="1.5"></circle>
                    <circle cx="969.333" cy="342.66" r="1"></circle>
                    <circle cx="928.833" cy="248.826" r="1.5"></circle>
                    <circle cx="1048.5" cy="253.493" r="0.833"></circle>
                    <circle cx="867.333" cy="212.66" r="0.667"></circle>
                    <circle cx="998.747" cy="177.58" r="1.253"></circle>
                    <circle cx="1116.666" cy="304.993" r="0.667"></circle>
                    <circle cx="365" cy="206.993" r="0.667"></circle>
                    <circle cx="285.501" cy="341.827" r="0.832"></circle>
                    <circle cx="119.333" cy="245.993" r="0.667"></circle>
                    <circle cx="67.167" cy="566.16" r="0.833"></circle>
                    <circle cx="143.333" cy="607.993" r="0.667"></circle>
                    <circle cx="234.333" cy="789.327" r="1"></circle>
                    <circle cx="175.833" cy="964.493" r="0.5"></circle>
                    <circle cx="199.833" cy="958.16" r="0.5"></circle>
                    <circle cx="451" cy="1058.326" r="0.667"></circle>
                    <circle cx="373.5" cy="942.16" r="0.833"></circle>
                    <circle cx="647.333" cy="1081.326" r="0.667"></circle>
                    <circle cx="646.167" cy="1060.826" r="0.5"></circle>
                    <circle cx="810.833" cy="1131.16" r="0.5"></circle>
                    <ellipse cx="800.667" cy="1111.327" rx="0.333" ry="0"></ellipse>
                    <circle cx="794.5" cy="1121.827" r="0.5"></circle>
                    <circle cx="827.5" cy="981.826" r="0.833"></circle>
                    <circle cx="746" cy="1013.326" r="0.667"></circle>
                    <circle cx="755.333" cy="1012.327" r="1"></circle>
                    <circle cx="741.167" cy="1034.16" r="0.833"></circle>
                    <circle cx="905.333" cy="972.993" r="0.667"></circle>
                    <circle cx="916.5" cy="950.16" r="0.5"></circle>
                    <circle cx="982" cy="834.993" r="1"></circle>
                    <circle cx="1072.167" cy="804.827" r="1.5"></circle>
                    <circle cx="1166.666" cy="735.326" r="0.667"></circle>
                    <circle cx="1020.167" cy="573.16" r="0.833"></circle>
                    <circle cx="1058.5" cy="471.16" r="0.833"></circle>
                    <circle cx="1030.833" cy="443.493" r="0.833"></circle>
                    <circle cx="939.833" cy="190.493" r="0.833"></circle>
                    <circle cx="733.5" cy="141.167" r="0.833"></circle>
                    <circle cx="640" cy="121" r="0.667"></circle>
                    <circle cx="636.5" cy="131.167" r="0.5"></circle>
                    <circle cx="612.5" cy="130.833" r="0.5"></circle>
                    <circle cx="827.5" cy="193.5" r="0.5"></circle>
                    <circle cx="916.333" cy="127.333" r="0.333"></circle>
                    <circle cx="804.333" cy="41.667" r="1.333"></circle>
                    <circle cx="794.167" cy="49.5" r="0.5"></circle>
                    <circle cx="807.5" cy="71.167" r="0.833"></circle>
                    <circle cx="287.167" cy="185.167" r="0.5"></circle>
                    <circle cx="291.167" cy="185.5" r="0.833"></circle>
                    <circle cx="297.167" cy="170.833" r="0.833"></circle>
                    <circle cx="308.333" cy="297.667" r="0.333"></circle>
                    <circle cx="313.333" cy="284.667" r="0.667"></circle>
                </g>
                <g id="bright" opacity="0.7">
                    <circle cx="743.5" cy="143.5" r="1.5"></circle>
                    <circle cx="435.5" cy="184.167" r="1.5"></circle>
                    <circle cx="554.833" cy="70.833" r="2.167"></circle>
                    <circle cx="540.667" cy="189" r="1.667"></circle>
                    <circle cx="438.5" cy="26.167" r="1.5"></circle>
                    <circle cx="833.167" cy="104.5" r="1.833"></circle>
                    <circle cx="238.5" cy="302.5" r="1.5"></circle>
                    <circle cx="204.833" cy="196.167" r="1.167"></circle>
                    <circle cx="298.833" cy="107.5" r="2.167"></circle>
                    <circle cx="101.333" cy="339.328" r="1.667"></circle>
                    <circle cx="175.5" cy="487.495" r="1.833"></circle>
                    <circle cx="13.5" cy="522.495" r="1.167"></circle>
                    <circle cx="162.167" cy="722.495" r="1.833"></circle>
                    <circle cx="28" cy="651.995" r="1.333"></circle>
                    <circle cx="85.667" cy="864.327" r="2"></circle>
                    <circle cx="274.167" cy="1054.827" r="2.5"></circle>
                    <circle cx="521.5" cy="1044.827" r="1.5"></circle>
                    <circle cx="170.667" cy="1006.326" r="2.333"></circle>
                    <circle cx="407" cy="1088.326" r="2.667"></circle>
                    <circle cx="478.167" cy="1159.826" r="2.167"></circle>
                    <circle cx="684.833" cy="1044.827" r="1.5"></circle>
                    <circle cx="774.667" cy="1119.66" r="1.667"></circle>
                    <circle cx="821.666" cy="958.326" r="1.667"></circle>
                    <circle cx="782.417" cy="1043.243" r="1.583"></circle>
                    <circle cx="953.333" cy="1053.66" r="2"></circle>
                    <circle cx="907.167" cy="1038.493" r="1.833"></circle>
                    <circle cx="910.667" cy="900.66" r="1.667"></circle>
                    <circle cx="1116.667" cy="830.326" r="1.333"></circle>
                    <circle cx="1059.333" cy="735.66" r="2"></circle>
                    <circle cx="1164.833" cy="652.827" r="1.5"></circle>
                    <circle cx="1067.5" cy="516.826" r="2.167"></circle>
                    <circle cx="1152.333" cy="405.326" r="2.333"></circle>
                    <circle cx="860.667" cy="189.66" r="1.667"></circle>
                    <circle cx="980.913" cy="141.747" r="1.753"></circle>
                    <circle cx="157.167" cy="329.493" r="1.5"></circle>
                    <circle cx="232" cy="384.326" r="1.667"></circle>
                    <circle cx="134.166" cy="617.826" r="1.167"></circle>
                    <circle cx="173.333" cy="620.326" r="1.333"></circle>
                    <circle cx="154.833" cy="837.827" r="2.5"></circle>
                    <circle cx="886.833" cy="970.16" r="2.5"></circle>
                    <circle cx="975.5" cy="847.827" r="1.5"></circle>
                    <circle cx="1008.667" cy="644.66" r="2"></circle>
                    <circle cx="1023.667" cy="349.66" r="2.333"></circle>
                    <circle cx="932.5" cy="200.16" r="1.5"></circle>
                    <circle cx="286.5" cy="953.167" r="1.833"></circle>
                    <circle cx="270.167" cy="954.5" r="1.167"></circle>
                    <circle cx="421.166" cy="1062.167" r="1.167"></circle>
                    <circle cx="498.333" cy="1143.333" r="1"></circle>
                    <circle cx="653.333" cy="1192" r="1.333"></circle>
                    <circle cx="1011.333" cy="968.666" r="1.667"></circle>
                    <circle cx="976.5" cy="939.499" r="1.167"></circle>
                    <circle cx="1075.833" cy="762.499" r="2.833"></circle>
                    <circle cx="1150.333" cy="547.999" r="1.333"></circle>
                    <circle cx="1035.333" cy="325.666" r="1.333"></circle>
                    <circle cx="959.167" cy="291.166" r="0.833"></circle>
                    <circle cx="750.5" cy="163.833" r="1.167"></circle>
                    <circle cx="669.5" cy="66.499" r="1.167"></circle>
                    <circle cx="505.167" cy="133.832" r="1.167"></circle>
                    <circle cx="517.833" cy="129.833" r="1.833"></circle>
                    <circle cx="310.833" cy="188.166" r="1.167"></circle>
                </g>
            </g>
        </svg>
    </div>
</template>

<style>
    .starwheel{
        z-index: -1;
        overflow: hidden;
        position: absolute;
        width: 100vw;
        height: 150vh;
        margin: 0;
        padding: 0;
    }

    .starwheel svg {
        display: block;
        position: absolute;
        top: -305vw;
        left: 50%;
        width: 400vw;
        height: 400vw;
        margin-left: -200vw;
        animation-name: starwheell;
        animation-duration: 1000s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        /* z-index: -1; */
        /* animation: spin 5s linear infinite; */
    }

    @keyframes starwheell {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

    #lines line {
        stroke: #DBE8D4;
        stroke-miterlimit: 10;
    }

    #stars circle {
        fill: #DBE8D4;
    }

    
</style>