"use client";
import { useRef, useEffect } from "react";

export default function FollowerDiv() {
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (followerRef.current) {
        const x = event.clientX - followerRef.current.clientWidth / 2;
        const y = event.clientY - followerRef.current.clientHeight / 2;

        followerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div className="follower" ref={followerRef}></div>;
}
