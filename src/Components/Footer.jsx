import React from "react";

const Footer = () => {
  // -------------- Get the_current year ----------------
  const year = new Date().getFullYear(); 

  return (
    <footer className="bg-transparent text-neutral-300 py-4 text-center">
      <p className="text-sm">
        &copy; {year} Mohamed BARBYCH. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
