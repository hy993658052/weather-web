var myChart = echarts.init(document.getElementById("line-box"));
var option = {
    grid: {
        x: 46,
        y: 45,
        x2: 46,
        y2: 45
    },
    //x轴信息样式
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0,1,2,3,4,5,6,7],
        show: false
    },
    yAxis : {
    type : 'value',
    min: function(value) {
            return value.min;
        },
    max: function(value) {
            return value.max;
        },
        show: false
    },
    series: [
        //最高温度
        {
            type:'line',
            symbol:'circle',
            symbolSize:8,
            hoverAnimation: false,
            legendHhoverLink: true,
            smooth: true,
            lineStyle: {
                 width: 3
            },
            itemStyle: {
                normal: {
                    color:'orange', 
                    label: {
                        show:true,
                        textStyle:{
                            color:'black',
                            fontSize: 18
                        },
                        formatter: '{c0}°',
                        padding: 5
                    }
                }
            },
            data:[30, 33, 34, 30, 30, 31, 33, 34]
        },
        //最低温度
        {
            type:'line',
            symbol:'circle',
            symbolSize:8,
            hoverAnimation: false,
            legendHhoverLink: true,
            smooth: true,
            lineStyle: {
                width: 3
            },
            itemStyle: {
                normal: {
                    color:'#33CCFF',
                    label: {
                        position: 'bottom',
                        show:true,
                        textStyle:{
                            color:'black',
                            fontSize: 18
                        },
                        formatter: '{c0}°',
                        padding: 5,
                    }
                }
            },
            data:[25, 26, 27, 25, 25, 25, 25, 26]
        }
    ]
};
myChart.setOption(option);