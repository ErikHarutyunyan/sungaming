import { useEffect, useState, useMemo, useCallback } from "react";

const useMediaQuery = (query) => {
  const getMatches = useMemo(() => {
    if (typeof window !== "undefined") {
      return (query) => window.matchMedia(query).matches;
    }
    return () => false;
  }, []);

  const [matches, setMatches] = useState(() => getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [getMatches, query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    const listener = () => handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(listener);
    } else {
      matchMedia.addEventListener("change", listener);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(listener);
      } else {
        matchMedia.removeEventListener("change", listener);
      }
    };
  }, [query, handleChange]);

  return matches;
};

export default useMediaQuery;
