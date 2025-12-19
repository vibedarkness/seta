// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Défiler vers le haut
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // 'auto' pour un défilement instantané
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;