import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { motion } from "framer-motion";


import img1 from "../assets/gallery/Greek Moussaka.jpg";
import img2 from "../assets/gallery/Margherita Pizza.jpg";
import img3 from "../assets/gallery/Mexican Quesadilla.jpg";
import img4 from "../assets/gallery/Pho Noodles.jpg";
import img5 from "../assets/gallery/Seafood Paella.jpg";
import img6 from "../assets/gallery/Spaghetti Carbonara.jpg";
import img7 from "../assets/gallery/Sushi Platter.jpg";
import img8 from "../assets/gallery/Tacos Al Pastor.jpg";
import img9 from "../assets/gallery/Thai Green Curry.jpg";
import img10 from "../assets/gallery/Vegan Buddha Bowl.jpg";
import { useState } from "react";
const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, alt: "Greek Moussaka" },
    { src: img2, alt: "Margherita Pizza" },
    { src: img3, alt: "Mexican Quesadilla" },
    { src: img4, alt: "Pho Noodles" },
    { src: img5, alt: "Seafood Paella" },
    { src: img6, alt: "Spaghetti Carbonara" },
    { src: img7, alt: "Sushi Platter" },
    { src: img8, alt: "Tacos Al Pastor" },
    { src: img9, alt: "Thai Green Curry" },
    { src: img10, alt: "Vegan Buddha Bowl" },
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };
  return (
    <div className="bg-gray-100 py-10">
       <motion.div className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
           <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-md">
          Gallery
        </h2>
        <motion.div
          className="mt-2 mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{ width: "100px" }} // Adjust width as needed
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer z-10"
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          title: image.alt,
        }))}
        index={currentIndex}
        plugins={[Thumbnails, Zoom]}
        zoom={{ maxZoomPixelRatio: 3 }}
      ></Lightbox>
    </div>
  );
};

export default Gallery;
