import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {};

const Partners = (props: Props) => {
  //   const PARTNERS = [
  //     { name: "partnerships" },
  //     { name: "Nft marketplace" },
  //     { name: "Community" },
  //     { name: "Metaverse" },
  //     { name: "Enora" },
  //   ];

  const PARTNERS = [
    {
      name: "partnerships",
      content: {
        title: "Partnerships",
        description:
          "Talk about what we aim to achieve with this community 2 to 3 points are okay",
      },
    },
    {
      name: "Nft marketplace",
      content: {
        title: "NFT Marketplace",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    },
    {
      name: "Community",
      content: {
        title: "Community",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    },
    {
      name: "Metaverse",
      content: {
        title: "Metaverse",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    },
    {
      name: "Enora",
      content: {
        title: "Enora",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    },
  ];

  const [partners, setPartners] = useState(PARTNERS);

  const handleItemClick = (index: any) => {
    const clickedItem = partners[index];
    const updatedPartners = partners.filter((_, i) => i !== index);
    updatedPartners.splice(2, 0, clickedItem);
    setPartners(updatedPartners);
  };

  const [selectIndex, setSelectIndex] = useState(2);

  const handleNext = () => {
      if(selectIndex === 4){
        setSelectIndex(0);
    }else {
        setSelectIndex(selectIndex + 1);
    }
  }

  const handlePrev = () => {
    if(selectIndex === 0){
        setSelectIndex(1);
    }else {
        setSelectIndex(selectIndex - 1);
    }
  }

  return (
    <div
      className={`bg-mobileDownBgImg lg:bg-downBgImg h-[944px] bg-cover bg-no-repeat w-full px-5 lg:px-10`}
    >
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10 lg:w-[80%] mx-auto pt-80">
        <div className="lg:flex flex-col gap-8 text-5xl hidden">
          <ul className="flex flex-col gap-4">
            {partners.map((partner, index) => (
              <li
                key={index}
                className={`text-[#FAF9FF] px-3 cursor-pointer ${
                  index === 2
                    ? "lg:bg-[#7D2AE7] text-[#FAF9FF] rounded-xl px-3 py-2 font-['Brightwall Personal Use']"
                    : `text-[#FAF9FF] opacity-${Math.abs(2 - index) * 25} px-3`
                }`}
                onClick={() => handleItemClick(index)}
              >
                {partner.name}
              </li>
            ))}
          </ul>
        </div>

        {selectIndex !== null && (
          <div className="bg-[#FAF9FF] hidden md:flex flex-col gap-4 text-center md:text-left px-14 py-14 md:w-[504px]">
            <h4 className="text-[#3C1360] md:text-[32px] font-medium leading-none">
              {partners[selectIndex]?.content?.title}
            </h4>
            <p className="text-[#FD8EEA] text-xs md:text-2xl">
              {partners[selectIndex]?.content?.description}
            </p>
          </div>
        )}

        {partners.map((partner, index) => (
          <div className="md:hidden flex flex-row items-center list-none" key={index}>
            {selectIndex === index && (
              <div className="flex justify-between">
                <AiOutlineArrowLeft
                  color="#fff"
                  size={40}
                  onClick={handlePrev}
                />
                <li
                  key={index}
                  className={`text-[#FAF9FF] px-3 cursor-pointer ${
                    index === 2
                      ? "lg:bg-[#7D2AE7] text-[#FAF9FF] rounded-xl px-3 py-2 font-['Brightwall Personal Use']"
                      : `text-[#FAF9FF] opacity-${
                          Math.abs(2 - index) * 25
                        } px-3`
                  }`}
                >
                  {partner.name}
                </li>
                <AiOutlineArrowRight
                  color="#fff"
                  size={40}
                  onClick={handleNext}
                />
              </div>
            )}
          </div>
        ))}

        <div className="bg-[#FAF9FF] md:hidden gap-4 text-center md:text-left px-14 py-14 md:w-[504px]">
          <h4 className="text-[#3C1360] md:text-[32px] font-medium leading-none">
            {partners[selectIndex]?.content?.title}
          </h4>
          <p className="text-[#FD8EEA] text-xs md:text-2xl">
            {partners[selectIndex]?.content?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
