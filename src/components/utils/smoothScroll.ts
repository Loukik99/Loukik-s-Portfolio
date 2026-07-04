import { ScrollSmoother } from "gsap/ScrollSmoother";

// Shared holder for the active ScrollSmoother instance.
// Created/destroyed by the Home page (which owns #smooth-wrapper),
// read by initialFX to release the entrance scroll-lock.
export let smoother: ScrollSmoother | undefined;

export function setSmoother(instance: ScrollSmoother | undefined) {
  smoother = instance;
}
