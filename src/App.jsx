import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import SuccessStories from "./components/SuccessStories";
// import MissionVisionValues from "./components/MissionVisionValues";
import Signup from "./components/Signup";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import SuccessDetails from "./Successstory/Index" 

import Footer from "./components/Footer/Footer"
import ModelPage from "./components/ModelPage";
import VisionMissionValues from "./components/VisionMissionValues";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SuccessStory" element={<SuccessDetails/>}/>
      <Route path="/Signup" element={<Signup/>} />

    </Routes>
    </BrowserRouter>
  )
}
const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <MissionVisionValues/> */}
      <About data={landingPageData.About} />
      <VisionMissionValues/>
      {/* <ModelPage/> */}

      <Features data={landingPageData.Features} />
     
      
      <SuccessStories/>
      <Team data={landingPageData.Team} />
      <Gallery data={landingPageData.Gallery} />

      <Footer/>
      
    </div>
  );
};

export default App;
