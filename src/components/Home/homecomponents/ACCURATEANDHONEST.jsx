import React from "react";
import img from "../../../assets/For website/Q 103.webp";
function ACCURATEANDHONEST() {
  return (
    <div className="bg-black h-[664px]">
      <div className="flex justify-center items-center h-full">
        <div className="flex items-center">
          <div className=" relative bg-white h-[480px] w-[465px] flex justify-center items-center">
            <img src={img} alt="Interior Design Visual" className=" absolute h-[480px] left-5 bottom-5" />
          </div>
          <div className="flex px-16 text-center text-white max-w-[600px]">
            <div className="flex flex-col items-center">
              <h2 className=" text-4xl">
                ACCURATE AND 
              </h2>
              <h2 className="my-2 text-4xl">
                HONEST 
              </h2>
              <p className="items-end text-lg my-4">Only the Best</p>
              <p>
                At VizualVerse, we specialize in creating top-quality 3D visuals
                that <br /> are both captivating and informative. Our talented
                team of designersand artists is passionate about turning our
                clients' concepts into stunning, immersive images and
                animations. Whether you're in the architecture, interior design
                industry, our team has the skills and expertise to produce
                visuals that will showcase your projects in the most engaging
                way possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ACCURATEANDHONEST;
