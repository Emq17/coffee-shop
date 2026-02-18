import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));
      if (id === "home-bottom") {
        let tries = 0;
        const maxTries = 20;

        const scrollToPageBottom = () => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: "auto",
          });

          if (tries < maxTries) {
            tries += 1;
            window.setTimeout(scrollToPageBottom, 80);
          }
        };

        scrollToPageBottom();
        return;
      }

      let tries = 0;
      const maxTries = 10;

      const scrollToHashTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }

        if (tries < maxTries) {
          tries += 1;
          window.setTimeout(scrollToHashTarget, 50);
        }
      };

      scrollToHashTarget();
      return;
    }

    // Keep non-hash routes pinned to top (helps on mobile where scroll restoration can occur).
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname, hash]);

  return null;
}
