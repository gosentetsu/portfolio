import { useEffect, useState } from "react";

export default function useLoaded() {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);
  return loaded;
}
