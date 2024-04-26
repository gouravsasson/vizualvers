import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import "../../../index.css";

import Before from "../../../assets/Before and after/Before.jpg";
import After from "../../../assets/Before and after/After.jpg";

const BeforeAfter = () => {
  
  return (
    
    
    <div className=" bg-black py-16 flex justify-center">
       <div className=" w-[50%] colo ">
        <ReactCompareImage
          leftImage={Before}
          rightImage={After}
         
        />
        </div>
    

    </div>
  );
};

export default BeforeAfter;
