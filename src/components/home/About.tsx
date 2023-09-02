import { useEffect, useState } from "react";
import { heroImg1, heroImg2, heroImg3, arrow, vidoe } from "../../assets/home";
import Button from "../global/Button";
import { Carousel } from "@material-tailwind/react";

type Props = {};

const About = (props: Props) => {
  // const [focusedImage, setFocusedImage] = useState(null);

  // const handleImageFocus = (image: any) => {
  //   setFocusedImage(image);
  // };

  // const images = [heroImg1, heroImg2, heroImg3];
  // const [focusedImageIndex, setFocusedImageIndex] = useState(0);

  // useEffect(() => {
  //   // Set up interval to rotate images every 2 seconds
  //   const interval = setInterval(() => {
  //     setFocusedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 2000);

  //   // Clean up interval on component unmount
  //   return () => clearInterval(interval);
  // }, [images.length]);

  const shuffleArray = (array: any) => {
    // Create a new array by shuffling the input array
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const images = [heroImg1, heroImg2, heroImg3];

  const [shuffledImages, setShuffledImages] = useState(shuffleArray(images));

  useEffect(() => {
    // Set up interval to shuffle images every 2 seconds
    const interval = setInterval(() => {
      setShuffledImages(shuffleArray(images));
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className={`bg-mobileTopBgImg lg:bg-topBgImg h-[2264px] bg-cover bg-no-repeat w-full px-5 lg:px-10`}
    >
      {/* <div className='hidden md:flex justify-center items-center gap-10 py-10'>
        <img src={heroImg1} alt="" className='hidden lg:inline-block' />
        <img src={heroImg2} alt="" />
        <img src={heroImg3} alt="" className='hidden lg:inline-block' />
      </div> */}

      {/* <div className="hidden md:flex justify-center items-center gap-10 py-10">
        <img
          src={heroImg1}
          alt=""
          className={`hidden lg:inline-block ${
            focusedImage === heroImg1 ? "focused" : ""
          }`}
          onClick={() => handleImageFocus(heroImg1)}
        />
        <img
          src={heroImg2}
          alt=""
          className={`${focusedImage === heroImg2 ? "focused" : ""}`}
          onClick={() => handleImageFocus(heroImg2)}
        />
        <img
          src={heroImg3}
          alt=""
          className={`hidden lg:inline-block ${
            focusedImage === heroImg3 ? "focused" : ""
          }`}
          onClick={() => handleImageFocus(heroImg3)}
        />
      </div> */}

      {/* <div className="hidden md:flex justify-center items-center gap-10 py-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={index === focusedImageIndex ? "focused" : ""}
          />
        ))}
      </div> */}

      <div className="hidden md:flex justify-center items-center gap-10 py-10">
        {shuffledImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`hero-image ${index === 1 ? "focused" : ""}`}
          />
        ))}
      </div>

      {/* Carousel On mobile */}
      <div className="w-full py-10 mx-auto md:hidden">
        <Carousel
          className="rounded-xl"
          transition={{ duration: 2 }}
          loop={true}
          autoplay={true}
          prevArrow={() => null}
          nextArrow={() => null}
        >
          <img src={heroImg1} alt="" className="w-full" />
          <img src={heroImg2} alt="" className="w-full" />
          <img src={heroImg3} alt="" className="w-full" />
        </Carousel>
      </div>

      <div className='flex flex-col items-center bg-[#FAF9FF] px-4 lg:px-20 2xl:px-28 py-10 text-[#1E0734] gap-8 font-["Poppins"] rounded-xl'>
        <h2 className="text-[28px] lg:text-[85px] font-light leading-none">
          w<span className="text-[38px] lg:text-[100px]">E</span> appreciate{" "}
          <span className="font-bold">Art</span>{" "}
          <span className="font-[275]">
            <br /> LOVE
          </span>{" "}
          <span className="font-semibold">sHare</span>{" "}
          <span className="text-[12px] lg:text-[33px]">and</span>{" "}
          <span className="font-semibold"> Express</span>{" "}
          <span className="text-[12px] lg:text-[32px]">Art in its</span>{" "}
          <span className="font-bold">Au</span>thenti
          <span className="font-bold">city</span>
        </h2>

        <p className="lg:text-2xl text-justify tracking-[0.055em]">
          EARTH is the World of Art that Loves, Shares and Expresses Art in its
          Authenticity. You probably got that much from the heading, but let’s
          paint a picture together shall we? Imagine a world where the artist
          isn’t blocked from creating by the lack of a brush, maybe some paint
          or even a room filled with adoring fans waiting for his creative
          ingenuity to bring colour to their lives. Yes! That world. That world
          is EARTH.
        </p>

        <p className="lg:text-2xl text-justify tracking-[0.055em]">
          We believe the Art World is a place for EVERYONE. That’s why we use
          technology to create a safe and stress-free environment for the artist
          to sell his work commission free and for buyers to find art pieces
          that would bring smiles to their faces, warmth to their hearts and
          stories to their children.{" "}
        </p>

        <p className="lg:text-2xl text-justify tracking-[0.055em]">
          And artists who feel like they aren’t seen? We help them find their
          place in the limelight, making sure that they find the right
          audience…or the right audience finds them, putting them in a space
          where their art can speak freely and be heard. Any artist can become
          seen by the world because we put the spotlight on you.
        </p>

        <p className="lg:text-2xl text-justify tracking-[0.055em]">
          So take this giant leap for Art kind by clicking the button below to
          join our discord community and find your place on EARTH.
        </p>
        <Button
          buttonType="button"
          text="Join us on discord"
          classNames="my-10"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-[80%] mx-auto mt-10 lg:mt-28">
        <img src={vidoe} alt="" />
        <div className="bg-[#B66FFA] text-white gap-4 flex flex-col text-center lg:text-left px-10 py-6 lg:pr-28 lg:pl-10 lg:w-[670px]">
          <span className="text-sm">All new</span>
          <h3 className="text-4xl lg:text-5xl mt-5">Meet the mind Season 6</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <span className="flex text-lg mt-10 mx-auto lg:mx-0">
            {" "}
            <span>Youtube</span>
            <img src={arrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
