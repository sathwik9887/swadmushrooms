import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-sm md:text-base">
        We use cookies to improve your experience on our site. By using our
        website, you agree to our{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="mt-2 md:mt-0 md:ml-4 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded transition"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
