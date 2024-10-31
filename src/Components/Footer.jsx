import React from "react";

const Footer = () => {
  const year = new Date().getFullYear(); 

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-4 text-center">
      <p className="text-sm">
        &copy; {year} Mohamed BARBYCH. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
