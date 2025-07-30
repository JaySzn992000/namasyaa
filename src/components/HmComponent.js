import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import ContactPickle from "../Slider/Contact_Achar1.svg";
import "./Contact.css";

const HmComponent = () => {

return (

<div>

<Helmet>
<title>Contact Us | Pickles & More</title>
<meta
name="description"
content="Contact Pickles & for More pickles, Get handcrafted, preservative-free Indian pickles delivered to your doorstep!"
/>
<meta name="keywords" content="contact pickles, Indian pickles, achar, homemade pickle support" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Contact Us | Pickles & More" />
<meta
property="og:description"
content="Reach out to Pickles & More for queries, support, or to get our flavorful desi pickles delivered to your home."
/>
<meta
property="og:image"
content="https://yourdomain.com/images/contact-share.jpg"
/>
<meta property="og:url" content="https://yourdomain.com/contact" />
<meta property="og:type" content="website" />
</Helmet>

<Navbar></Navbar>

<main>

<form  className="form_contact">

<div>
<img src={ContactPickle} alt="Contact Us for Homemade Pickles" loading="lazy"/>
</div>

<div className="form_div">

<h1>
Natural Buti ! <br/>
Hair Growth Oil
</h1>

<img src="https://naturalbuti.com/wp-content/uploads/2024/07/Hair-Oil-Gredient-2-1.svg"></img>

</div>

</form>

</main>

</div>

);
};

export default HmComponent;
