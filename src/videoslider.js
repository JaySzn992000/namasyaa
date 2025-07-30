import React from "react";
import { Helmet } from "react-helmet";
import cake1 from "./Slider/video1.mp4";
import cake2 from "./Slider/video2.mp4";
import cake3 from "./Slider/video3.mp4";
import cake4 from "./Slider/video4.mp4";
import "./videoslider.css";

const VideoSliderComponent = () => {

const videos = [
cake1,
cake2,
cake3,
cake4,
];


return (

<div>

<Helmet>
<title>What Our Fans Say - Video Testimonials</title>
<meta
name="description"
content="Watch video testimonials from our fans and hear about their experiences."
/>
<meta
property="og:title"
content="What Our Fans Say - Video Testimonials"
/>
<meta
property="og:description"
content="Watch video testimonials from our fans and hear about their experiences."
/>
<meta property="og:type" content="video.other" />
<meta
property="og:url"
content="https://yourwebsite.com/what-our-fans-say"
/>
</Helmet>

<div className="video_container">
<h2>Our Varietie's of Pickle's</h2>
<section className="video_section_flex">
{videos.map((video, index) => (
<video key={index} muted loop playsInline autoPlay>
<source src={video} type="video/mp4" />
</video>
))}
</section>
</div>
</div>
);

};

export default VideoSliderComponent;
