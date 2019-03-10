import React, { Component } from "react";
import { Text, View } from "react-native";
import Echarts from "native-echarts";

export default class TempHours extends Component {
  render() {
    const option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },

        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      color: ["#c23531", "#47d7ed"],
      yAxis: {
        type: "value",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },

        splitLine: {
          show: true
        }
      },
      series: [
        {
          name: "最高气温",
          type: "line",
          data: [11, 11, 15, 13, 12, 13, 10],
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          smooth: true
        },
        {
          name: "最低气温",
          type: "line",
          data: [1, -2, 2, 5, 3, 2, 0],
          label: {
            normal: {
              show: true,
              position: "bottom"
            }
          },
          smooth: true
        }
      ]
    };
    return (
      <View>
        <Echarts width={400} option={option} />
      </View>
    );
  }
}
