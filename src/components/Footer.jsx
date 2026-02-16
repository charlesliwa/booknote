import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | All rights reserved to devliwa</p>
    </footer>
  );
}

export default Footer;