import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './BackToTop.css';

const BackToTop = ({ isInFooter = false }) => {
  const [isVisible, setIsVisible] = useState(isInFooter);

  const toggleVisibility = () => {
    if (isInFooter) {
      setIsVisible(true);
    } else if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isInFooter) {
      window.addEventListener('scroll', toggleVisibility);

      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, [isInFooter]);

  return (
    <>
      {isVisible && (
        <button
          aria-label="Back to top"
          className={`back-to-top ${isInFooter ? 'back-to-top--footer' : ''}`}
          title="Back to top"
          type="button"
          onClick={scrollToTop}
        >
          <FiArrowUp className="back-to-top-icon" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </>
  );
};

export default BackToTop;
