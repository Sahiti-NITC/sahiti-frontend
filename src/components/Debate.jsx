import React from "react";
import Button from "./Common/Button";

const Debate = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full space-x-10 ">
      <div className="flex flex-col justify-center items-center w-full px-4 md:px-8 lg:px-16 ">
        {/* Logo Image */}
        <h3 className="text-[4.4vw] ipadAir:text-[2.3vw] smallHeight:text-[3.6vw] md:text-[2vw] lg:text-[5.2vw] font-caslon w-[90vw] ipadAir:w-[80vw] smallHeight:w-[85vw] md:w-[75vw] lg:w-[55vw] mt-[6vw] lg:mt-[4vw] text-[#FF7900] text-center leading-relaxed">
          Sahiti Parliamentary Debate
        </h3>
        <img
          className="w-[25vw] "
          src="/logos/debate-orange.png"
          alt="Sahiti Debate"
        />

        {/* Text Content */}
        <div>
          <p className="text-[4.4vw] ipadAir:text-[2.3vw] smallHeight:text-[3.6vw] md:text-[2vw] lg:text-[1.35vw] font-poppins w-[90vw] ipadAir:w-[80vw] smallHeight:w-[85vw] md:w-[75vw] lg:w-[55vw] mt-[3vw] lg:mt-[2vw] text-[#FF7900] text-justify leading-relaxed">
            The Sahiti Parliamentary Debate is the highlight of our flagship
            literature fest, a place where wits will clash and passionate
            speakers will come forward to compete in this battleground of ideas,
            opinions and facts. Whether you are a novice, looking up for
            challenges or a veteran debater who likes to dominate the debates,
            we invite all to participate. Mark your calendars for Sahiti!
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4 mt-6">
          <Button
            link="https://example.com"
            bgColor="#FF8343"
            textColor="#FFFDD0"
          >
            Learn More
          </Button>
          <Button
            link="https://example.com"
            bgColor="transparent"
            textColor="#FF8343"
            borderColor="#FF8343"
            useAlternateStyle={true}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Debate;