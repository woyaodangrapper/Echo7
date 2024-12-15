"use client";
import "@/styles/navwatch.css";
import { useEffect, useRef } from "react";

// 封装的 Navbar 组件
export default function NavWatch() {
  const weather = (element: HTMLDivElement | null) => {
    const hmsElement = element?.querySelector(".data") as HTMLDivElement;
    const [ymdElement, weekElement] = Array.from(
      element?.querySelectorAll(".specific p") || [],
    ) as HTMLDivElement[];

    setInterval(() => {
      // 获取当前时间
      const now = new Date();

      // 更新时间部分
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      hmsElement.innerText = `${hours}:${minutes}:${seconds}`;

      // 更新日期部分
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const dayOfWeek = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ][now.getDay()];

      ymdElement.innerText = `${year}/${month}/${day}`;
      weekElement.innerText = dayOfWeek;
    }, 900);
  };
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    weather(divRef.current);
  }, []);

  return (
    <div ref={divRef} className="watch">
      <div className="container">
        <div className="data" />
        <div className="specific">
          <p />
          <p />
        </div>
      </div>
    </div>
  );
}
