import Image from "next/image";
import Content from "./pageComponent/Content";
import AboutUs from "./pageComponent/about-us";
import OurMission from "./pageComponent/our-mission";
import OurCoreValue from "./pageComponent/our-core-value";

export default function Home() {
  return (
    <main className="min-h-screen pt-18">
      <Content />
      <OurCoreValue />
      <AboutUs />
      <OurMission />
    </main>
  );
}
