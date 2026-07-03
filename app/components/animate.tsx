"use client";

import { useRef, useEffect, useState } from "react";

type Animation = "fade-up" | "fade-in" | "slide-left" | "slide-right";

type Props = {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "footer" | "header";
  id?: string;
};

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return inView;
}

const animationClasses: Record<Animation, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-8",
  "slide-right": "opacity-0 translate-x-8",
};

const animationStyles: Record<Animation, string> = {
  "fade-up": "opacity-100 translate-y-0",
  "fade-in": "opacity-100",
  "slide-left": "opacity-100 translate-x-0",
  "slide-right": "opacity-100 translate-x-0",
};

export default function Animate({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  as: Tag = "div",
  id,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        inView ? animationStyles[animation] : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Stagger({
  children,
  className = "",
  baseDelay = 0,
  staggerDelay = 100,
}: {
  children: React.ReactNode[];
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Animate key={i} delay={baseDelay + i * staggerDelay}>
          {child}
        </Animate>
      ))}
    </div>
  );
}
