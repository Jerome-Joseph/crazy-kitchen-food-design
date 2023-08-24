import React from "react";
import Navbar from "../../common/navbar/Index";

const Home = () => {

    const IconCard = () => (
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2 xl:gap-5">
           <img className="bg-[#292e36] rounded-full p-2 xl:p-4" src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229b772cb568e7b96d20e2d_detail-icon-1.svg" alt="" />
           <div>
            <h2 className="cor text-3xl font-semibold">Locate Us</h2>
            <p className="text-[#555] text-lg xl:text-xl xl:pt-1">Riverside 25, San Diego, California</p>
           </div>
        </div>
    )

    const Info = ({ menu, title, desc }) => (
        <div>
            {menu ? <h3 className="tag">{menu}</h3> : null}
            <h1 className="cor text-4xl font-semibold">{title}</h1>
            <p className="text-[#555] text-xl pt-4">{desc}</p>
        </div>
    )

  return (
    <div>
      <Navbar />
      <div className="pt-10 xl:pt-20 bg-[#292e36] space text-white flex flex-col xl:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center gap-4 lg:gap-8 text-center xl:text-left xl:items-start">
          <h1 className="cor text-5xl md:text-7xl xl:text-8xl font-semibold">Welcome to Restaurant</h1>
          <h2 className="text-lg xl:text-xl">The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</h2>
          <button className="btn-primary w-fit text-base md:text-2xl">View Menu</button>
        </div>
        <div className="md:w-4/5 lg:w-2/3 xl:w-4/5 4xl:w-2/3">
            <img className="border-b-0 border-[30px] border-[#555] rounded-t-full" src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229b247d132ea71a84093db_hero-image.jpg" alt="" />
        </div>
      </div>

      <div className="space py-14 xl:py-24 bg-[#fff8f5]">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
            <IconCard />
            <IconCard />
            <IconCard />
        </div>
        <div className="pt-28 flex flex-col xl:flex-row gap-10">
            <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/624299ca23b66156953f5d36_about-story-image.jpg" alt="" />
            <div className="flex flex-col gap-7">
                <Info title={"The Delicious Story"} desc={"The people, food and the prime locations make the perfect place  for the friends & family to come together and have great time."} />
                <div className="flex flex-col md:flex-row md:gap-5 xl:gap-3">
                    <Info title={"2018"} desc={"Plan for this restaurant to deliver healthy food."} />
                    <Info title={"2022"} desc={"Happily in the fourth year by fulfill the motto."} />
                </div>
                <div>
                    <h2 className="text-[#555] text-xl font-medium pb-3">JOSEFIN</h2>
                    <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/62298ac37e5c6e63fdc37e34_josefin-sign.svg" alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className="space py-14 xl:py-24">
        <div className="flex flex-col xl:flex-row gap-7">
            <div className="flex flex-col items-start gap-5 xl:w-1/3">
                <Info menu={"MENU"} title={"Try Our Special Dishes"} desc={"Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."} />
                <img src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229c6da3c9fc2c572c73749_home-menu-image.jpg" alt="" />
                <button className="btn-primary text-[#e1b168]">See all dishes</button>
            </div>
            <div>
                <h2 className="cor text-3xl font-bold">Starters</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
