"use client";

import "@/styles/bim-left.css";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

import { CircleBigIcon, CircleMinIcon, CircleSmallIcon } from "../icons";

function initEcharts(element: HTMLDivElement | null) {
  const chartElement = element?.querySelector(".echarts-box") as HTMLDivElement;

  const myChart = echarts.init(chartElement);
  // 定义蓝色渐变色
  const barBlueGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#2A89CE" },
    { offset: 1, color: "rgba(21,69,104,0)" },
  ]);
  const barGreenGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#9DFFDC" },
    { offset: 1, color: "rgba(94,153,135,0)" },
  ]);

  const series = [
    {
      type: "line",
      // stack: "Total",
      label: {
        show: false,
        position: "top",
      },
      itemStyle: {},
      lineStyle: {
        color: "#2A89CE",
        width: 3,
      },
      symbol: "none",
      smooth: true,
      areaStyle: { color: barBlueGradient },
      data: [400, 370, 350, 200, 320, 360],
    },
    {
      type: "line",
      // stack: "Total",
      label: {
        show: false,
        position: "top",
      },
      itemStyle: {},
      lineStyle: {
        color: "#9DFFDC",
        width: 3,
      },
      symbol: "none",
      smooth: true,
      areaStyle: { color: barGreenGradient },
      data: [200, 322, 280, 324, 370, 500],
    },
  ];
  const tooltip: {
    trigger: "none" | "axis" | "item" | undefined;
    formatter: string;
    axisPointer: {
      type: "line" | "none" | "shadow" | "cross";
      lineStyle: {
        color: string;
        width: number;
        type: "solid" | "dashed" | "dotted" | undefined;
      };
    };
  } = {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "#ffffff91",
        width: 1,
        type: "solid",
      },
    },
    formatter: "{c0},{c1}",
  };
  const option = {
    legend: {},
    tooltip,
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
        show: false,
      },
      splitLine: {
        show: false,
        color: "#FFFFFF6E",
      },
      data: ["09%", "08%", "07%", "06%", "05%", "04%"],
    },
    yAxis: {
      axisLabel: {
        color: "#fff",
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series,
  };

  myChart.setOption(option);

  myChart.resize();
  // 监听窗口大小变化事件
  window.addEventListener("resize", () => {
    // 动态改变图表大小
    myChart.resize();
  });
}
export const BIMLeft = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initEcharts(divRef.current);
  }, []);

  return (
    <div ref={divRef} className="left-project-container">
      <div className="project-container">
        <div className="heating-container">
          <div className="func-title">
            <div>Urban Planning</div>
          </div>
          <div className="urban-box">
            <div className="left-container">
              <div className="info-label">80</div>
              <div className="info-circle">
                <CircleBigIcon />
                <CircleSmallIcon />
              </div>
              <div className="info-trend" />
            </div>

            <div className="right-container">
              <div className="info-top-value-box font-bold">
                <div className="info-value-box">
                  <div className="info-value">10011</div>
                  <div className="info-label">traffic flow</div>
                </div>
                <div className="info-value-box">
                  <div className="info-value">10011</div>
                  <div className="info-label">pedestrian flow</div>
                </div>
              </div>

              <div className="info-botton-value-box">
                <div className="info-value-box">
                  <div className="info-label">TF</div>

                  <div className="info-value">20/</div>
                  <div className="info-value">2000</div>

                  <div className="percentage">
                    <div className="info-circle">
                      <CircleMinIcon />
                    </div>

                    <div className="info-value">80</div>
                  </div>
                </div>
                <div className="info-value-box">
                  <div className="info-label">PF</div>

                  <div className="info-value">20/</div>
                  <div className="info-value">3000</div>

                  <div className="percentage">
                    <div className="info-circle">
                      <CircleMinIcon />
                    </div>

                    <div className="info-value">80</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heating-container">
          <div className="func-title" style={{ display: "none" }}>
            <div>データ統計</div>
          </div>
          <div className="analysis-box" style={{ display: "none" }}>
            <div className="total-box">
              <div className="icones-box">
                <div className="icones" />
                <div className="info-value">人口の流れ</div>
              </div>

              <div className="icones-box">
                <div className="icones" />
                <div className="info-value">流れの分析</div>
              </div>

              <div className="icones-box">
                <div className="icones" />
                <div className="info-value">成長率分析</div>
              </div>
            </div>
          </div>

          <div className="echarts-box" style={{ height: "12rem" }} />
        </div>
        <div
          className="heating-container"
          style={{ height: "calc(100% - 446px)" }}
        >
          <div className="func-title">
            <div>情報リスト</div>
          </div>
          <div className="snap-box">
            <div className="snap-list normal" style={{ marginTop: 65 }}>
              <div className="info-label">
                <div>コミュニティ</div>
                <div>常住する</div>
                <div>外来人口</div>
              </div>
              <div className="info-value">
                <div>態勢</div>
              </div>
            </div>

            <div className="snap-list-container">
              <div className="snap-list">
                <div className="info-label">
                  <div>プランクト</div>
                  <div>24,000</div>
                  <div>3,000</div>
                </div>
                <div className="info-value">
                  <div>18:00 住み込み勤務</div>
                </div>
              </div>

              <div className="snap-list violation">
                <div className="info-label">
                  <div>プランクト</div>
                  <div>24,000</div>
                  <div>3,000</div>
                </div>
                <div className="info-value">
                  <div>18:00 住み込み勤務</div>
                </div>
              </div>

              <div className="snap-list">
                <div className="info-label">
                  <div>プランクト</div>
                  <div>24,000</div>
                  <div>3,000</div>
                </div>
                <div className="info-value">
                  <div>18:00 住み込み勤務</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
