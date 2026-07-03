"use client";

import { useState, useEffect } from "react";
import { testimonials } from "./data";
import { QuoteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";
import Animate from "./animate";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  const goTo = (i: number) => {
    if (animating) return;
    setAnimating(true);
    setIndex(i);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <Animate as="section" id="testimonials" className="bg-primary py-20" animation="fade-in">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What Our Customers Say
        </h2>
          <div className="relative mt-12">
          <QuoteIcon className="mx-auto h-10 w-10 animate-pulse text-accent/40" />
          <p
            key={current.quote}
            className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl animate-[fadeUp_0.5s_ease-out]"
          >
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-accent" />
            ))}
          </div>
          <p className="mt-3 font-semibold text-white">&mdash; {current.name}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(index === 0 ? total - 1 : index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-accent" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(index === total - 1 ? 0 : index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Animate>
  );
}
