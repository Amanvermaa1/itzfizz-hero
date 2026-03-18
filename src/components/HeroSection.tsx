"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const valueAddRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const car = carRef.current;
      const trail = trailRef.current;
      const valueAdd = valueAddRef.current;
      const letters = lettersRef.current.filter(Boolean);
      const section = sectionRef.current;

      if (!car || !trail || !valueAdd || !letters.length || !section) return;

      const valueRect = valueAdd.getBoundingClientRect();
      const letterOffsets = letters.map((letter) => letter.offsetLeft);

      const roadWidth = window.innerWidth;
      const carWidth = 150;
      const endX = roadWidth - carWidth;

      gsap.set(letters, { opacity: 0, y: 20 });
      gsap.to(box1Ref.current, { opacity: 0, y: 20, duration: 0 });
      gsap.to(box2Ref.current, { opacity: 0, y: 20, duration: 0 });
      gsap.to(box3Ref.current, { opacity: 0, y: 20, duration: 0 });
      gsap.to(box4Ref.current, { opacity: 0, y: 20, duration: 0 });

      const loadTl = gsap.timeline({ delay: 0.3 });
      loadTl
        .to(letters, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        })
        .to(
          box1Ref.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .to(
          box2Ref.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        )
        .to(
          box3Ref.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        )
        .to(
          box4Ref.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        );

      gsap.to(car, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: trackRef.current,
        },
        x: endX,
        ease: "none",
        onUpdate: function () {
          const carX = (gsap.getProperty(car, "x") as number) + carWidth / 2;
          letters.forEach((letter, i) => {
            const letterX = valueRect.left + letterOffsets[i];
            if (carX >= letterX) {
              (letter as HTMLElement).style.opacity = "1";
            } else {
              (letter as HTMLElement).style.opacity = "0";
            }
          });
          gsap.set(trail, { width: carX });
        },
      });

      gsap.to(box1Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=400 top",
          end: "top+=600 top",
          scrub: true,
        },
        opacity: 1,
      });

      gsap.to(box2Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=600 top",
          end: "top+=800 top",
          scrub: true,
        },
        opacity: 1,
      });

      gsap.to(box3Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=800 top",
          end: "top+=1000 top",
          scrub: true,
        },
        opacity: 1,
      });

      gsap.to(box4Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=1000 top",
          end: "top+=1200 top",
          scrub: true,
        },
        opacity: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="h-[200vh] relative bg-[#121212]">
      <div
        ref={trackRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-neutral-400"
      >
        <div className="w-full h-[200px] bg-[#1e1e1e] relative overflow-hidden">
          <img
            ref={carRef}
            src="/McLaren 720S 2022 top view.png"
            alt="car"
            className="absolute top-0 left-0 h-[200px] w-auto z-10"
          />
          <div
            ref={trailRef}
            className="absolute top-0 left-0 h-[200px] w-0 bg-[#45db7d] z-[1]"
          />

          <div
            ref={valueAddRef}
            className="absolute left-[5%] top-[10%] z-[5] flex gap-[0.3rem] text-[8rem] font-bold"
          >
            {[
              "W",
              " ",
              "E",
              " ",
              "L",
              " ",
              "C",
              " ",
              "O",
              " ",
              "M",
              " ",
              "E",
              " ",
              "I",
              " ",
              "T",
              " ",
              "Z",
              " ",
              "F",
              " ",
              "I",
              " ",
              "Z",
              " ",
              "Z",
            ].map((letter, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) lettersRef.current[index] = el;
                }}
                className="text-[#111]"
                style={{ opacity: 0 }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={box1Ref}
          className="absolute z-[5] flex flex-col justify-center items-start gap-[5px] rounded-[10px] p-[30px] bg-[#def54f] text-[#111] text-[18px]"
          style={{ top: "5%", right: "30%", opacity: 0 }}
        >
          <span className="text-[58px] font-semibold leading-none">58%</span>
          <span>Increase in pick up point use</span>
        </div>

        <div
          ref={box2Ref}
          className="absolute z-[5] flex flex-col justify-center items-start gap-[5px] rounded-[10px] p-[30px] bg-[#6ac9ff] text-[#111] text-[18px]"
          style={{ bottom: "5%", right: "35%", opacity: 0 }}
        >
          <span className="text-[58px] font-semibold leading-none">23%</span>
          <span>Decreased in customer phone calls</span>
        </div>

        <div
          ref={box3Ref}
          className="absolute z-[5] flex flex-col justify-center items-start gap-[5px] rounded-[10px] p-[30px] bg-[#333] text-white text-[18px]"
          style={{ top: "5%", right: "10%", opacity: 0 }}
        >
          <span className="text-[58px] font-semibold leading-none">27%</span>
          <span>Increase in pick up point use</span>
        </div>

        <div
          ref={box4Ref}
          className="absolute z-[5] flex flex-col justify-center items-start gap-[5px] rounded-[10px] p-[30px] bg-[#fa7328] text-[#111] text-[18px]"
          style={{ bottom: "5%", right: "12.5%", opacity: 0 }}
        >
          <span className="text-[58px] font-semibold leading-none">40%</span>
          <span>Decreased in customer phone calls</span>
        </div>
      </div>
    </div>
  );
}
