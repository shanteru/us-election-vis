
// initialize the echarts instance

var myChart = echarts.init(document.getElementById("sankey"));
var option;

// Draw the chart

const data = {
    nodes: [
        { name: "Total" },
        { name: "Female" },
        { name: "Male" },
        { name: "White" },
        { name: "Black" },
        { name: "Latino" },
        { name: "AAPI" },
        { name: "Other" },
        { name: "Non-College" },
        { name: "College" }
    ],
    links: [
        { source: "Total", target: "Female", value: 5.4 },
        { source: "Total", target: "Male", value: 4.6 },
        { source: "Female", target: "Non-College", value: 3.2 },
        {
            source: "Female",
            target: "College",
            value: 2.2,
        },
        {
            source: "Male",
            target: "Non-College",
            value: 2.9,
        },
        {
            source: "Male",
            target: "College",
            value: 1.7,
        },

        { source: "Non-College", target: "White", value: 4.4 },
        { source: "College", target: "White", value: 2.8},
        { source: "Non-College", target: "Black", value: 0.8 },
        { source: "Non-College", target: "Latino", value: 0.6 },
        { source: "Non-College", target: "AAPI", value: 0.2 },
        { source: "Non-College", target: "Other", value: 0.1 },

        { source: "College", target: "Black", value: 0.4 },
        { source: "College", target: "Latino", value: 0.3 },
        { source: "College", target: "AAPI", value: 0.17 },
        { source: "College", target: "Other", value: 0.03 },
        
    ],
};

myChart.setOption(
    (option = {title:{
        text: "Composition of Voters in 2020",
        textstyle:{
            color: "#000"
        }
    },
    
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            
        },
        series: [
            {
                type: "sankey",
                data: data.nodes,
                links: data.links,
                emphasis: {
                    focus: "adjacency",
                },
                levels: [
                    {
                        depth: 0,
                        itemStyle: {
                            color: "#ed553b",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        }
                    },
                    {
                        depth: 1,
                        itemStyle: {
                            color: "#3caea3",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                    {
                        depth: 2,
                        itemStyle: {
                            color: "#20639b",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                    {
                        depth: 3,
                        itemStyle: {
                            color: "#173f5f",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                ],
                lineStyle: {
                    curveness: 0.5,
                },
                label:{
                    color: "#fff",
                    fontSize: 15
                 
                }
                
            },
        ],
    })
);

option && myChart.setOption(option);