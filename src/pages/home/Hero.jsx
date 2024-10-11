import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="">
      <div className="">
        <h1>The Ultimate ebook Store</h1>
        <p className=""></p>
        <Link to="/products" className="">explore ebooks</Link>
      </div>
      <div className="">
        <img src="" alt="" className="" />
      </div>
    </section>
  );
};

export default Hero;
