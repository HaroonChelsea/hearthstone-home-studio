import { inView, stagger } from "motion";
import { animate } from "motion/mini";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const from: Record<string, string> = {
  left: "translateX(-48px)",
  right: "translateX(48px)",
};
const rise = "translateY(32px)";

const targets = document.documentElement.classList.contains("reveal")
  ? document.querySelectorAll<HTMLElement>("[data-reveal]")
  : [];

for (const el of targets) {
  const mode = el.dataset.reveal ?? "";
  inView(
    el,
    () => {
      if (mode === "stagger") {
        animate([...el.children], { opacity: [0, 1], transform: [rise, "none"] }, { duration: 0.7, ease, delay: stagger(0.1) });
        return;
      }
      animate(el, { opacity: [0, 1], transform: [from[mode] ?? rise, "none"] }, { duration: 0.8, ease });
    },
    { amount: 0.15 },
  );
}

window.__revealReady = true;

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}
