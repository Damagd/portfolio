'use client'

import { useInSight } from "./hooks/useInSight";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef(null);

  const isInSight = useInSight( ref1, '/profile');

  return (
    <div ref={ref1} className="empty-page">
      <h2>Waiting for some content to show...</h2>
      <h2 style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>If nothings shows up, please select an option from the menu.</h2>
    </div>
  );
}
