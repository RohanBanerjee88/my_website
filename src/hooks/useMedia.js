import { useEffect, useState } from "react";

export default function useMedia(query) {
  const getMatch = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    // initial & listener
    setMatches(mql.matches);
    mql.addEventListener?.("change", onChange) ?? mql.addListener(onChange);
    return () =>
      mql.removeEventListener?.("change", onChange) ??
      mql.removeListener(onChange);
  }, [query]);

  return matches;
}
