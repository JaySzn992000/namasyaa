import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import './ReturnPolicy.css';

const ReturnPolicy = () => {

return (

<div>

<Navbar></Navbar>

<div className="return_flex_">

<div>

<h1 className="accptnce_trms">Acceptance of Terms</h1>

<p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Natural Buti (“Company”, “we”, “us”, or “our”), concerning your access to and use of the https://naturalbuti.com/ website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.
The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
The Site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.
</p>

<h2>User Registration</h2>

<p>
{" "}
You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
{" "}
</p>

</div>

</div>

<div className="return_flex_tw">

<h4>Products</h4>

<p>
We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
</p>

<h2>Return</h2>

<p>We kindly request all customers to carefully review our Return Policy available on this website before proceeding with any purchases. The Return Policy outlines important information regarding eligibility, conditions for returns or exchanges, applicable timelines, and other essential terms. Familiarizing yourself with this policy will help ensure a smooth shopping experience and avoid any confusion or misunderstandings later. By placing an order on our site, you acknowledge that you have read, understood, and agreed to our Return Policy.
</p>

</div>

{/*  */}

<Header></Header>

</div>

)

}

export default ReturnPolicy;