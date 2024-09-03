'use client'

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function useInSight(ref, path) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => 
      setIsIntersecting(entry.isIntersecting), { threshold: 0.2, }
    );

    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    }
  }, [ref]);

  useEffect(() => {
    if(!loaded && isIntersecting && window.location.pathname === '/'){
      router.push("/profile")
      setLoaded(true);
    }
  }, [isIntersecting]);

  return isIntersecting;
}