import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Navbar from "../headers_footer/navbar";
import Filterheader from "../headers_footer/Filterheader";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./Categoriesfruits.css";


const AloeVeraGel = ({ showFilters = true, limit }) => {

const [allProducts, setAllProducts] = useState([]); 
const [filteredProducts, setFilteredProducts] = useState([]); // Store 
// filtered products
const location = useLocation();
const query = new URLSearchParams(location.search).get("search"); // Extract 
// 'search' query


useEffect(() => {
axios
.get("https://naturalbuti.onrender.com/fetchProductslistTshirt")
.then((response) => {
console.log("Fetched Mangoes Pickles products:", response.data); // Log 
// fetched data
setAllProducts(response.data); // Set all products
setFilteredProducts(
limit ? response.data.slice(0, limit) : response.data
);
})
.catch((error) => {
console.error("Error fetching Mangoes Pickles products:", error);
});
}, [] ); 


useEffect(() => {
if (query) {
axios
.get("https://naturalbuti.onrender.com/fetchProductslist", {
params: { search: query },
})
.then((response) => {
console.log("Fetched search results:", response.data); 
setAllProducts(response.data); // Update products with 
// search results
setFilteredProducts(
limit ? response.data.slice(0, limit) : response.data
);
})
.catch((error) => {
console.error("Error fetching products with search query:", error);
});
} else {
setFilteredProducts(allProducts); // Reset to show all 
// products if no query
}
}, [query, allProducts]); // Update whenever query 
// or allProducts changes


const handleFilterUpdate = (filteredData) => {
setFilteredProducts(filteredData); // Update filtered products
};

// Slice the products to display 
// only the first 'limit' products

const limitedProducts = filteredProducts.slice(0, limit);

const [wishlistStatus, setWishlistStatus] = useState({});
const [wishlistCount, setWishlistCount] = useState(0);

const sendToWishlist = (product) => {
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const productIndex = wishlist.findIndex((item) => item.id === product.id);

if (productIndex === -1) {
wishlist.push(product);
} else {
wishlist.splice(productIndex, 1);
}

localStorage.setItem("wishlist", JSON.stringify(wishlist));

window.dispatchEvent(new Event("storage"));

setWishlistStatus({
...wishlistStatus,
[product.id]: !wishlistStatus[product.id],
});

// Update wishlist count

setWishlistCount(wishlist.length);

// Toggle wishlist status 
// and save it in localStorage

const updatedWishlistStatus = {
...wishlistStatus,
[product.id]: !wishlistStatus[product.id],
};
localStorage.setItem(
"wishlistStatus",
JSON.stringify(updatedWishlistStatus)
);
setWishlistStatus(updatedWishlistStatus);
};

return (

<div>

<Helmet>
<title>Fresh Mangoes | Premium Quality Mangoe Pickles for Sale</title>
<meta
name="description"
content="Taste the tangy and spicy flavor of our homemade mango pickles. Made with fresh ingredients and traditional recipes"
/>
<meta
name="keywords"
content="Mango Pickle, Homemade Pickle, Spicy Mango Pickle, Buy Mango Pickle, Traditional Mango Pickle"
/>

<link rel="canonical" href="https://www.pickles.com/mangoes" />
</Helmet>

{showFilters && <Navbar />}
{showFilters && (
<Filters
allProducts={allProducts}
onFilterUpdate={handleFilterUpdate}
/>
)}

{/* Display 
limited products */}

<div id="flex_filter_product">
<section>
<div className="relative_ProductContainer">
<div className="Filteration_ProductDiv"></div>
<div className="flex_productlist tshirt_LeftAd">
{limitedProducts.map((product, index) => (
<div key={index} className="produclist_divContainer">

<i
onClick={() => sendToWishlist(product)}
className={`fa fa-heart fa-heart_products ${
wishlistStatus[product.id] ? "wishlist-active" : ""
}`}
/>

{/* Link to 
product details */}

<Link to={`/product/${product.id}`}>
<img
src={`http://localhost:3001${product.file_path}`}
alt={product.name}
/>
</Link>
<div className="padding_contain">
<div className="flex_inr">

<Link to={`/product/${product.id}`}>
<li>{product.name}</li>
</Link>

<div className="review_Cntnr">
<img id="Review_Img"
src="https://cdn-icons-png.flaticon.com/128/15853/15853959.png"
loading="lazy"
alt=""
></img>
<li style={{marginTop : '.5em', marginLeft : '-.2em'}}>|</li>
<li className="fa_Review">{product.review}</li>
</div>

<div className="price_div">
<li className="fa fa-inr"></li>
<li>{product.price}</li>
</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>
</div>

<div className="header_Filter">
{" "}
{showFilters && <Filterheader></Filterheader>}{" "}
</div>

</div>

);
};

export default AloeVeraGel;