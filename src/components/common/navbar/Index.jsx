import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#292e36]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 space py-14">
        <button className="btn-primary w-72">Call - 123 456 789</button>
        <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6246d7f2c2b5677de6d04e5f_tasteat-brand-logo.svg" alt="" />
        <button className="btn-invert w-72">Reservation</button>
      </div>
      <div className="text-lg xl:text-xl text-white border-[#5c6168] border-y space py-7 flex justify-between items-center">
        <div className="hidden lg:flex gap-10 xl:gap-16">
          <h2 className="link">Home</h2>
          <h2 className="link">About Us</h2>
          <h2 className="link">Our Menu</h2>
          <h2 className="link">Pages</h2>
          <h2 className="link">Blog</h2>
          <h2 className="link">Contact Us</h2>
        </div>
        <div className="flex gap-6">
          <button>
            <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879561ac344751081f7f3_social-white-icon-1.svg" alt="" />
          </button>
          <button>
            <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879a1180929e7b5a73221_social-white-icon-2.svg" alt="" />
          </button>
          <button>
            <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879adf27831d30cd4d274_social-white-icon-3.svg" alt="" />
          </button>
          <button>
            <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879b72fd62b54a7fe9322_social-white-icon-4.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
