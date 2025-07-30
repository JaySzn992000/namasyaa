import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import BottomFavcomp from "../componentsBoot/bottomFavcomp";
import SlidCakeImg from "../Slider/CakeSlide.jpg";
import Contactus from "./Contactus";
import Slider from "../slider";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./ProductListmodule.css";
import "./Home.css";
import Pickles from "../Products/Pickle";
import Topnav from "../headers_footer/Topnav";
// import VideoSliderComponent from "../videoslider";
// import TestimonialSlider from "./Testimonial";
// import CategoryMangoes from "../Products/CategoryMangoes";
// import DeliveryBanner from "../OtherImages/DeliveryBanner.jpg";
// import CategoryChilli from "../Products/CategoryChilli";
// import CategoryMixed from "../Products/CategoryMixed";
// import Message from "./Message";


const Home = () => {

const [showFilters, setShowFilters] = useState(false);

const [formData, setFormData] = useState({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail,
name: formData.email,
email: formData.email,
message: formData.message,
to_name: formData.email,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"You have successfully subscribe !",
response.status,
response.text
);
setFormData({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};

const naviGateProductsAll = useNavigate()
const seeAllProducts = () => {
naviGateProductsAll('/ProductList')
}


return (

<div>

<Helmet>
<title>Buy Best Homemade Pickles Online | Pickles & More</title>
<meta
name="description"
content="Explore 100+ delicious homemade pickles including mango, garlic, carrot & more. Fast delivery across India."
/>
<meta
name="keywords"
content="Pickles, Homemade Achaar, Mango Pickle, Buy Pickles Online, Indian Pickles"
/>
<link rel="canonical" href="https://yourdomain.com" />
<meta property="og:title" content="Pickles & More - Authentic Homemade Pickles" />
<meta property="og:description" content="Discover tasty and hygienically packed pickles. Subscribe for updates and offers." />
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="robots" content="index, follow" />
</Helmet>

<Topnav></Topnav>
<Navbar />

<Slider />

<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={10}></Pickles>
</div>

{/*  */}


{/*  */}

<button onClick={seeAllProducts} className="seeLLProducts">View All</button>

<div id="bottomFav_comp">
<BottomFavcomp />
</div>

{/*  */}

<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={5}></Pickles>
</div>

<button onClick={seeAllProducts} 
className="seeLLProducts">View All</button>

{/*  */}

<Contactus></Contactus>

<a
href='https://api.whatsapp.com/send/?phone=%2B919821187225&text&type=phone_number&app_absent=0'
target="_blank"
rel="noopener noreferrer"
>
<img
className="whatsapp_message"
src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid"
alt=""
loading="lazy"
></img>

</a>

{/*  */}

<div className="Secure_ordering">
<h2>NATURAL BEAUTY SOLUTIONS FOR YOU
</h2>
<p>We make products that cater to all skin types. 
They are intuitive, solution oriented & inclusive of 
all Indian skin types and shades.
</p>

<img src="https://naturalbuti.com/wp-content/uploads/2024/07/image-14-2048x365.png" 
alt=""
loading="lazy"/>

</div>

<img src={SlidCakeImg}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img>


{/* SlidCakeImg */}

<div className="subscribe_k">

<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

</form>

</div>

<Header />

</div>

);

};

export default Home;
