"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/shared/Layout";

export function Perspective() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-8%", "8%"]
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-graphite py-36 text-paper md:py-48"
    >
      <motion.img
        src="/images/perspective-dark.jpg"
        alt=""
        aria-hidden="true"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-graphite/75" />
      <Container className="relative z-10">
        <blockquote className="font-display mx-auto max-w-5xl text-center text-[2.2rem] leading-[1.08] md:text-5xl lg:text-[4.15rem]">
          We bridge innovative technology companies and the Indian armed
          forces — from product refinement to procurement.
        </blockquote>
        <p className="mt-10 text-center text-[0.6875rem] tracking-[0.24em] uppercase text-growth">
          Trugro Perspective
        </p>
      </Container>
    </section>
  );
}
