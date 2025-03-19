import { useEffect } from 'react';

function TidioChat() {
  useEffect(() => {
    // Load Tidio script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/8wnd92ffwsoqcnuvmzm4vmvdgmfsyd1i.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default TidioChat;
