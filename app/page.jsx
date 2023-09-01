import React from "react";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* those variable in tailwind css
        using Underscore _ that means it is 
        already predefined in global.css */}
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" /> {/** to hide it on large device  */}
        <span className="orange_gradient text-center">AI-POWERED PROMPTS</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed/>
      
    </section>
  );
};

export default Home;
