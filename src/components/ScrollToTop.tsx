import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));
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

    // instant jump to top when there is no hash target
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
