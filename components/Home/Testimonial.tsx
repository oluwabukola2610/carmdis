import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import Quotation from "@/public/assets/svg/testimonial-quotation.svg";
import Testimonial1 from "@/public/assets/images/testimonial-1.jpg";
import Testimonial2 from "@/public/assets/images/testimonial-2.jpg";
import Testimonial3 from "@/public/assets/images/testimonial-3.jpg";
import Testimonial4 from "@/public/assets/images/testimonial-4.jpg";
import Testimonial5 from "@/public/assets/images/testimonial-5.jpg";
import Testimonial6 from "@/public/assets/images/testimonial-6.jpg";
import Testimonial7 from "@/public/assets/images/testimonial-7.jpg";
import Testimonial8 from "@/public/assets/images/testimonial-8.jpg";
import Testimonial9 from "@/public/assets/images/testimonial-9.jpg";
import FadeUp from "@/components/common/FadeUp";

const testimonials = [
  {
    text: "You all know you can use @Shuttlersng to move around, they are cheaper and more convenient.",
    name: "Enioluwa Adeoluwa",
    title: "Content Creator and EU Ambassador",
    image: Testimonial1,
  },
  {
    text: "I’ve been having a fantastic mainland-island commute since I discovered Shuttlers. God bless you for such great initiative.",
    name: "Nego Amos",
    title: "General Manager of Marvgallup Consultancy",
    image: Testimonial2,
  },
  {
    text: "10 stars for @Shuttlersng. I enjoyed every bit of the rides today. They are 10/10 plus 10, you should try them.",
    name: "Olalekan Ojo",
    title: "Content Creator",
    image: Testimonial3,
  },
  {
    text: "Really can’t do an end of year gratitude post without mentioning @shuttlersng . Boy! They did everything they said they were going to.",
    name: "Chijioke (General Show)",
    title: "Filmaker",
    image: Testimonial4,
  },
  {
    text: "Capitalism tried me today but thanks to @Shuttlersng I get to go home in comfort. I loveet for me 😌",
    name: "Jessica Fortunes",
    title: "Shuttlers user",
    image: Testimonial5,
  },
  // marquee 2
  {
    text: "I tried the @Shuttlersng bus for the first time today, and it was so smooth",
    name: "Sophia Ezeh",
    title: "Frontend Developer",
    image: Testimonial6,
  },
  {
    text: "I received a call from a gracious lady @Shuttlersng , offering assistance and guidance for my upcoming first ride with their service. It was such a warm gesture. Thank you !",
    name: "Love Ikhine",
    title: "Lawyer",
    image: Testimonial7,
  },
  {
    text: "I love some of the approaches to transportation by companies like @Shuttlersng . A lot of these things should go mainstream. The solution to transportation is massive public infrastructure and not motorbikes",
    name: "Victor Asemota",
    title: "Tech Entrepreneur",
    image: Testimonial8,
  },
  {
    text: "Shuttlers is a company that solves real problems. I mean real problems not 'banking the unbanked' phantom problems. I love that company so so so so much.",
    name: "Morris (@bitsofMorris)",
    title: "Writer",
    image: Testimonial9,
  },
];

const testimonialsFirstHalf = testimonials.slice(0, 5);
const testimonialsSecondHalf = testimonials.slice(5, 9);

const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({
  text,
  name,
  title,
  image,
}) => (
  <div className="w-[391px] h-[308px] p-[24px] bg-white rounded-3xl flex flex-col gap-4 justify-between mr-8">
    {/* min-h-[260px] */}
    <span className="flex flex-col gap-4">
      <span className="pt-12">
        <Image src={Quotation} alt="Quotation mark" />
      </span>
      <p className="text-[#313533] lg:text-base text-[14px]">{text}</p>
    </span>
    <span className="flex gap-4 items-center">
      <Image
        src={image}
        alt={name}
        title={name}
        className="size-[40px] rounded-full"
      />
      <span>
        <p className="font-medium text-base">{name}</p>
        <p className="text-[12px] text-[#6E717C]">{title}</p>
      </span>
    </span>
  </div>
);

const Testimonial = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-20 flex flex-col gap-[44px]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-0">
        <FadeUp>
          <div className="flex flex-col gap-4">
            <p className="text-carmedis bg-[#f4f5f4] px-[24px] py-[12px] rounded-full font-medium text-base w-max">
              Shuttle-lers
            </p>
            <h2 className="lg:text-[36px] text-[20px] text-[#000005] font-semibold leading-tight">
              Don’t just take our word for it
            </h2>
            <p className="text-[#595E5C] text-[14px] sm:text-base max-w-[600px]">
              Hear from some of our amazing customers who are riding safely.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* testimonials */}
      <div className="flex flex-col gap-8">
        <Marquee pauseOnHover={true} speed={70}>
          {testimonialsFirstHalf.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        <Marquee pauseOnHover={true} speed={70} direction="right">
          {testimonialsSecondHalf.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;
