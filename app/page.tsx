import { BaseLayout } from "@/app/_layouts/BaseLayout";
import {
  Hero,
  SelectTrip,
  Services,
  Routes,
  Testimonial,
  PressAndTrip,
  Socials,
} from "@/components/Home";
import "./globals.css";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <section className="relative">
          <Hero />
          {/* <div className="hidden lg:block absolute -bottom-24 w-full">
            <SelectTrip />
          </div> */}
        </section>
        <Services />
        <Routes />
        {/* <Testimonial /> */}
        <PressAndTrip />
        <Socials />
      </BaseLayout>
    </>
  );
}
