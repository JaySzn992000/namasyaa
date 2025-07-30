import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.svg";
import { Helmet } from "react-helmet";
import "./about.css";

const Aboutus = () => {

return (

<div>

<Helmet>
<title>About Us | Pickle - Authentic Handcrafted Pickles</title>
<meta
name="description"
content="Discover the story behind Pickle - your go-to destination for handcrafted, traditional Indian pickles made with fresh ingredients and no preservatives."
/>
<meta
name="keywords"
content="Handmade Pickles, Traditional Indian Pickles, Desi Achar, Homemade Pickle, Authentic Pickles, Mango Pickle, Lemon Pickle"
/>
</Helmet>

{/*  */}

<Navbar></Navbar>

<main className="about_flex_">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={AboutPickle}></img>

<section>

<h1>About !</h1>
<h2> Made by Nature, Crafted for You </h2>
<p>
{" "}
At Natural Buti, we believe in the 
timeless power of nature to heal, nourish, 
and beautify. Our Aloe Vera Gel is 
a multipurpose beauty essential for both men 
and women — designed to promote healthy skin, hair, 
and scalp through the purity of natural ingredients.{" "}
</p>
</section>

</main>


<section className="about_flex_tw">

<p className="about_para">
Inspired by age-old traditions and trusted across 
cultures, Aloe Vera has been used for thousands of 
years for its medicinal and cosmetic benefits. Our gel 
is extracted from robust, ripe, and succulent Aloe Vera 
leaves, ensuring 99% purity and maximum nutrient retention. 
Enriched with over 75 vital nutrients including Vitamins A, 
C, E, B12, folic acid, enzymes, minerals, and amino acids — 
it delivers nature’s best directly to your skin and hair.</p>
</section>

{/*  */}

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
