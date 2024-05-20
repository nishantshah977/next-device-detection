"use client";
import { useState, useLayoutEffect } from "react";

function useDeviceDetector() {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    detected: false,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice({
          isMobile: true,
          isTablet: false,
          isDesktop: false,
          detected: true,
        });
      } else if (width >= 768 && width < 1024) {
        setDevice({
          isMobile: false,
          isTablet: true,
          isDesktop: false,
          detected: true,
        });
      } else {
        setDevice({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
          detected: true,
        });
      }
    };

    // Initial device detection
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
}

export default useDeviceDetector;
