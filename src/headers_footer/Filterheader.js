import React from "react";
import { useNavigate } from "react-router";
import LogoNitiArya from "../Logo/LogoNitiArya.jpg";

import headerdelivery from "../Slider/header4.img.jpg";
import headersupport from "../Slider/header2.img.jpg";
import headerfreeshipping from "../Slider/header1.img.jpg";
import headeronlinepayment from "../Slider/header3.img.jpg";

import "./Filterheader.css";

const Filterheader = () => {

const naviHome = useNavigate();

const navigateHome = () => {
naviHome("/");
};

const NavitoProductlist = useNavigate()

const naviToCollection = () => {
NavitoProductlist('/Productlist')
}

const naviAbout = useNavigate()
const naviToAboutus = () => {
naviAbout('/Aboutus')
}

const naviContact = useNavigate();
const naviToContactus = () => {
naviContact('/Contactpage')
}

const cartNavi = useNavigate();
const cartNavigate = () => {
cartNavi('/ECart')
}

const wishlistNavi = useNavigate();
const wishlistNaviGate = () => {
wishlistNavi('/WishList')
}

const privacyNavi = useNavigate();
const privacyNavigate = () => {
privacyNavi('/PrivacyPolicy')
}

const returnPolicy = useNavigate();
const returnPolicyNavi = () => {
returnPolicy('/returnPolicy')
}

const termsAndCOndition = useNavigate();
const termsAndCOnditionNavi = () => {
termsAndCOndition('/TermsCondition')
}

const MyaccountNavi = useNavigate();
const MyaccountNavigate = () => {
MyaccountNavi('/Profile')
}


const ShipptNaviGate = useNavigate();

const ShippNaviM = () => {
ShipptNaviGate('/shipping')
}


return (

<div>

<div className="headerFlex">

<img
className="ImgHeader"
loading="lazy"
src={headerfreeshipping} alt="logo"></img>

<img
className="ImgHeader"
loading="lazy"
src={headersupport} alt="logo"></img>

<img
className="ImgHeader"
loading="lazy"
src={headeronlinepayment} alt="logo"></img>

<img
className="ImgHeader"
loading="lazy"
src={headerdelivery} alt="logo"></img>

</div>


<header className="headerFilter">

{/*  */}

<div className="flex_Container_Filter">
<div className="header_dv">

<img className="header_dvLogo"
onClick={navigateHome}
src={LogoNitiArya}
loading="lazy"
alt="logo">
</img>

</div>

{/*  */}

<section className="div_header_Filter">

<ul>
<h4>Quick Links</h4>
<li onClick={naviToCollection}><a>Shop our Product's</a></li>
<li onClick={naviToAboutus}><a>About us</a></li>
<li onClick={naviToContactus}><a>Contact us</a></li>
</ul>


{/*  */}

<ul>
<h4>For Customer</h4>
<li onClick={privacyNavigate}><a>Privacy Policy</a></li>
<li onClick={returnPolicyNavi}><a>Return Policy</a></li>
<li onClick={termsAndCOnditionNavi}><a>Terms & Conditions</a></li>
</ul>

{/*  */}

<ul>
<h4>Contact Details</h4>
<li><a>+91 9867 609 897</a></li>
<li><a>customercare@naturalbuti.com</a></li>
<li><a>Shop no 23/24, near Mega Mall 
<br></br>Andheri Mumbai, 400053</a></li>
</ul>

{/*  */}

<ul>
<h4><a></a>Account Settings</h4>
<li onClick={MyaccountNavigate}><a>My Account Info</a></li>

</ul>

{/*  */}

</section>

{/*  */}

</div>
</header>
</div>

);

};

export default Filterheader;
