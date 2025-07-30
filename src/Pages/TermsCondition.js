import React from "react";
import "./TermsCondition.css";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";

const TermsCondition = () => {

return (

<div>

<Navbar></Navbar>

<div className="TermsCondition_flx">

<div>
<h1 className="tms_Conditionh1">Terms & Conditions</h1>

<h2 className="user_elig_h2"> User Eligibility </h2>
<p>
{" "}
These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Natural Buti (“Company”, “we”, “us”, or “our”), concerning your access to and use of the https://naturalbuti.com/ website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
{" "}
</p>
</div>
</div>

<div className="TermsCondition_tw">

<h2 id="hFourTag">User Registeration</h2>

<p>
You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
</p>

<h2 id="hFourTag">Products</h2>

<p>
We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
</p>

<h2 id="hFourTag">User Data</h2>

<p>
We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
</p>
</div>

<Header></Header>

</div>

);

};

export default TermsCondition;
