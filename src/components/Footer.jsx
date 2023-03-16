import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[10rem] bg-indigo-900 text-white">
      <div className="w-full max-w-[1300px] h-[8rem] grid grid-cols-2">
        <div className="company-log">
          <h3>MeroPasal</h3>
          <p>
            Discover an extensive collection of top-quality products and shop
            the latest electronics accessories
          </p>
        </div>
        <div className="quick-lin">
          <h3>Quick Links</h3>
        </div>
      </div>
      <div className="copyright-info h-[2rem] flex items-center px-4">
        <h3 className="text-sm">Copyright&#169;</h3>
      </div>
    </div>
  );
};

export default Footer;
