import { useState, useEffect, useRef } from "react";

export default function Carousel({ children }) {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    if (trackRef.current) {
      const items = trackRef.current.querySelectorAll('.skill-card');
      setTotal(items.length || 1);
    }
  }, []);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={prev}>‹</button>
      
      <div 
        className="carousel-track" 
        ref={trackRef} 
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {children}
      </div>
      
      <button className="carousel-btn right" onClick={next}>›</button>
    </div>
  );
}