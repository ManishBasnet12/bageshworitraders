import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import BlogPost2 from "@/components/sections/BlogPost2";
import Brand2 from "@/components/sections/Brand2";
import Callback1 from "@/components/sections/Callback1";
import Callback2 from "@/components/sections/Callback2";
import Choose2 from "@/components/sections/Choose2";
import Choose3 from "@/components/sections/Choose3";
import Counter2 from "@/components/sections/Counter2";
import Features1 from "@/components/sections/Features1";
import Marquee1 from "@/components/sections/Marquee1";
import Project2 from "@/components/sections/Project2";
import Request2 from "@/components/sections/Request2";
import Services2 from "@/components/sections/Services2";
import Slider1 from "@/components/sections/Slider1";
import Team2 from "@/components/sections/Team2";
import Testimonial2 from "@/components/sections/Testimonial2";
// import Slider1 from "@/components/sections/Slider1"

// export const metadata = {
//   title:
//     "IBA International Education Consultancy || Study Abroad Consultant in Nepal - Expert Guidance for International Education",
// };

export default function Home() {
  return (
    <>
      {/* <Layout headerStyle={1} footerStyle={1} transparent>
                <Banner1 />
                <Brand1 />
                <About1 />
                <Services1 />
                <Choose1 />
                <Counter1 />
                <Project1 />
                <Request1 />
                <Team1 />
                <Consulting1 />
                <Testimonial1 />
                <BlogPost1 />
                <Callback1 />
            </Layout> */}

      <Layout headerStyle={2} footerStyle={2}>
        <Slider1 />
        <Features1 />
        <About2 />
        <Services2 />
        <Choose2 />
        {/* <Counter2 /> */}
        <Request2 />
        <Project2 />
        <Marquee1 />
        {/* <Choose3 /> */}
        <Testimonial2 />
        {/* <Brand2 /> */}

        <Callback2 />

        {/* <Team2 /> */}
        {/* <BlogPost2 /> */}
      </Layout>
    </>
  );
}
