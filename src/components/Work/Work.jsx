import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../assets/For website/IMG_0082.PNG";
import img2 from "../../assets/For website/IMG_0053.PNG";
import img3 from "../../assets/For website/11.jpg";
import img4 from "../../assets/For website/IMG_0064.PNG";
import img5 from "../../assets/For website/IMG_0054.PNG";
import img6 from "../../assets/For website/3.jpg";
import img7 from "../../assets/For website/10.jpg";
import img8 from "../../assets/For website/152.jpg";
import img9 from "../../assets/For website/IMG_0052.PNG";
import img10 from "../../assets/For website/IMG_0062.JPG";
import img11 from "../../assets/For website/IMG_0050.JPG";
import img12 from "../../assets/For website/IMG_0041.JPG";
import img13 from "../../assets/For website/IMG_0059.JPG";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
import './work.css'


const itemData = [
  {
    img: img1,
    title: "Image 1",
    rows: 3,
    cols: 4,
  },
  {
    img: img2,
    title: "Image 2",
    rows: 2,
    cols: 2,
  },
  {
    img: img3,
    title: "Image 3",
    rows: 2,
    cols: 1,
  },
  {
    img: img6,
    title: "Image 6",
    rows: 3,
    cols: 3,
  },
  {
    img: img5,
    title: "Image 5",
    rows: 2,
    cols: 2,
  },
  {
    img: img4,
    title: "Image 4",
    rows: 2,
    cols: 2,
  },
  {
    img: img7,
    title: "Image 7",
    rows: 6,
    cols: 4,
  },
  {
    img: img8,
    title: "Image 8",
    rows: 6,
    cols: 3,
  },
  {
    img: img9,
    title: "Image 9",
    rows: 4,
    cols: 3,
  },
  {
    img: img10,
    title: "Image 10",
    rows: 3,
    cols: 4,
  },
  {
    img: img11,
    title: "Image 11",
    rows: 4,
    cols: 4,
  },
  {
    img: img12,
    title: "Image 12",
    rows: 3,
    cols: 3,
  },
  {
    img: img13,
    title: "Image 13",
    rows: 6,
    cols: 7,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Work() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( itemData.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === itemData.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }



  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <UilTimes
            
            className="btnClose"
            onClick={handleCloseModal}
          />
          <UilArrowCircleLeft
           className="btnPrev"
            onClick={prevSlide}
          />
          <UilArrowCircleRight
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={itemData[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <ImageList
        sx={{ width: 1, height: 1, background: "black", padding: 2 }}
        variant="quilted"
        gap={20}
        cols={7}
        rowHeight={121}
        className=" galleryWrap "
      >
        {itemData && itemData.map((item , index) => (
          <ImageListItem
            className=" single overflow-hidden"
            onClick={ () => handleOpenModal(index) }
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img

              className=" hover:scale-110 overflow-hidden cursor-pointer duration-700 ease-in-out"
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


