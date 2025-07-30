import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AddressBG from "../Slider/addressBG.jpg";
import axios from "axios";
import "./Address.css";


const Address = () => {


const [loggedInUser, setLoggedInUser] = useState(null);
const [cartProducts, setCartProducts] = useState([]);
const [formData, setFormData] = useState({
gender: "Mr.",
addressname: "",
country: "",
pincode: "",
address: "",
state: "",
mobilenumber: "",
alternativenumber: "",
emailid: ""
});

const resetForm = () => {
setFormData({
gender: "Mr.",
addressname: "",
country: "",
pincode: "",
address: "",
state: "",
mobilenumber: "",
alternativenumber: "",
emailid: ""
});
};


const reactLocation = useLocation();
const totalAmount = reactLocation.state?.totalAmount || 0;
const quantities = reactLocation.state?.quantities || [];



useEffect(() => {
const storedUser = localStorage.getItem("loggedInUser");
if (storedUser) {
setLoggedInUser(JSON.parse(storedUser));
setCartProducts(JSON.parse(localStorage.getItem("cart")) || []);
}
}, []);


const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
};


const validateForm = () => {

const alphaOnly = formData.addressname.replace(/[^a-zA-Z]/g, '');
if (alphaOnly.length < 3) {
alert("Name must be at least 3 characters long.");
return false;
}


if (!/^\d+$/.test(formData.pincode)) {
  alert("Pincode must contain only digits.");
  return false;
} else if (formData.pincode.length < 6) {
  alert("Pincode must be at least 6 digits.");
  return false;
}

if (!/^\d{6}$/.test(formData.pincode)) {
alert("Pincode must contain only digits");
return false;
}

if (!/^\d{10}$/.test(formData.mobilenumber)) {
alert("Mobile number must be exactly 10 digits");
return false;
}

if (formData.alternativenumber && !/^\d{10}$/.test(formData.alternativenumber)) {
alert("Alternative number must be exactly 10 digits");
return false;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailid)) {
alert("Invalid email format");
return false;
}

return true;
};


const [isProcessing, setIsProcessing] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault(); 

if (!loggedInUser) {
alert("Please log in first.");
return;
}


if (!validateForm()) {
return;
}

setIsProcessing(true); // 🟢 Immediately
// show "Processing..."

try {
const response = await axios.post("https://naturalbuti.onrender.com/create-order", {
amount: totalAmount,
});

const { id: orderId } = response.data;

const options = {
key: "rzp_live_Zm7uF61IDcY0t9",
amount: totalAmount * 100,
currency: "INR",
name: "Secure Payment",
description: "Test Transaction",
order_id: orderId,
handler: async (response) => {
if (!loggedInUser) {
alert("Please log in first.");
return;
}


const paymentVerificationResponse = await axios.post(
"https://naturalbuti.onrender.com/verify-payment",
response
);


if (paymentVerificationResponse.data.success) {
const dataToSend = {
user: {
name: loggedInUser.name,
mob: loggedInUser.mobileno,
email: loggedInUser.email,
},
cartItems: cartProducts.map((product,idx) => ({
id: product.id,
productName: product.name,
price: product.price,
file_path: product.file_path,
quantity: quantities[idx] || 1, 
})),
addressDetails: formData,
paymentDetails: {
razorpay_order_id: orderId,
razorpay_payment_id: response.razorpay_payment_id,
amount: totalAmount,
payment_status: "Sucessfull",
},
};


await axios.post(
"https://naturalbuti.onrender.com/addcartaddress",
dataToSend
);
resetForm();
alert("Order successfully placed!");
} else {
alert("Payment verification failed!");
}
},
prefill: {
name: loggedInUser?.name || "",
email: loggedInUser?.email || "",
contact: loggedInUser?.mobileno || "",
},
theme: {
color: "#3399cc",
},
};


const paymentObject = new window.Razorpay(options);
setIsProcessing(false);
paymentObject.open();
} catch (error) {
console.error(
"Error during payment:",
error.response ? error.response.data : error.message
);
}

};


return (

<div>

<Navbar />


<img className="addressBG" src={AddressBG}></img>

<div className="form_address">
<form onSubmit={handleSubmit}>
<span>

<div className="flex_add flex_saveMyaddress"></div>


<div className="flex_add">
<div className="optionSlct">
<h4 className="fontAddresize">Mr.</h4>
<select
name="gender"
value={formData.gender}
onChange={handleChange}
required
>
<option value="Mr.">Mr.</option>
<option value="Ms.">Ms.</option>
</select>
</div>


<div>
<h4 className="fontAddresize">Name</h4>
<input
className="inputAddress"
type="text"
placeholder="Name"
name="addressname"
value={formData.addressname}
onChange={handleChange}
required
/>
</div>
</div>


<div className="flex_add">
<div>
<h4 className="fontAddresize">Country</h4>
<input
className="inputAddress"
type="text"
placeholder="Country"
name="country"
value={formData.country}
onChange={handleChange}
required
/>
</div>


<div>
<h4 className="fontAddresize">Pincode</h4>
<input
className="inputAddress"
type="text"
placeholder="Pincode/Zipcode"
name="pincode"
value={formData.pincode}
onChange={handleChange}
maxLength="6"
required
/>
</div>
</div>


<div className="flex_add">
<div>
<h4 className="fontAddresize">Address</h4>
<input
className="inputAddress"
type="text"
placeholder="address"
name="address"
value={formData.address}
onChange={handleChange}
required
/>
</div>
<div>

<h4 className="fontAddresize">State</h4>
<input
className="inputAddress"
type="text"
placeholder="State"
name="state"
value={formData.state}
onChange={handleChange}
required
/>
</div>
</div>

<div className="flex_add ContID">
<div>
<h4 className="fontAddresize">Mobile number</h4>
<input
className="inputAddress"
type="text"
placeholder="Mobile number"
name="mobilenumber"
value={formData.mobilenumber}
onChange={handleChange}
maxLength="10"
required
/>
</div>


<div>
<h4 className="fontAddresize">Alternative number</h4>
<input
className="inputAddress"
type="text"
placeholder="Alternative number"
name="alternativenumber"
value={formData.alternativenumber}
onChange={handleChange}
maxLength="10"
/>
</div>


<div>
<h4 className="fontAddresize">Email ID</h4>
<input
className="inputAddress"
type="email"
placeholder="Email ID"
name="emailid"
value={formData.emailid}
onChange={handleChange}
required
/>
</div>
</div>


<button type="submit" className="btn_sve" disabled={isProcessing}>
{isProcessing ? (
<>
<span className="spinner"></span> Processing...
</>
) : (
"Save Address & Proceed"
)}
</button>

</span>
</form>

</div>

<Header></Header>
</div>

);
};


export default Address;