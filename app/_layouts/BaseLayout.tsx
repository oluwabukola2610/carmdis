import { Footer, Navbar, ScrollButton } from "@/components/common";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white min-h-screen">
      <Navbar />
      {children}
      <ScrollButton />
      <Footer />
    </section>
  );
};
