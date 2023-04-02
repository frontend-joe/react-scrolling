import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const Example = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress max="100" value="0"></progress>
      <nav>
        <h1>Dashboard</h1>
      </nav>
      <div class="container">
        <section></section>
        <section></section>
        <section></section>
      </div>
    </>
  );
};
