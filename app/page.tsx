import { Skymap } from "@/components/maps/skymap";
import { title, subtitle } from "@/components/primitives";
import { BIM } from "@/components/template/bim";
import "@/styles/globals.css";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div
        className="inline-block max-w-xl text-center justify-center fade-out"
        style={{ zIndex: 10 }}
      >
        <span className={title()}>在&nbsp;</span>
        <span className={title({ color: "violet" })}>乾图洛书&nbsp;</span>
        <br />
        <span className={title()}>发现世界，畅享生活。</span>
        <div className={subtitle({ class: "mt-4" })}>
          由开源驱动的实验性项目.
        </div>
      </div>
      <BIM />
      <Skymap />
    </section>
  );
}
