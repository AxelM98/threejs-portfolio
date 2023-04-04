import "./styles.scss";
import Hero from "./Components/Hero/Hero";
import Who from "./Components/Who/Who";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import RecentProjcets from "./Components/RecentProjcets/RecentProjcets";
import React, { useState, useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import Creative from "./Components/Creative/Creative";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <Hero />
          <Who />
          <Works />
          <Creative />
          <RecentProjcets />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
