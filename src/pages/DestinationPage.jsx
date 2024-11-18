import Footer from "../components/Footer";
import React from 'react';
import RecommendationList from "../components/RecList";
import HeroSection from "../components/HeroSection";
import NavbarAfter from "../components/NavbarAfter";

const Destinationpage = () => {
    const recommendations = [
      {
        id: 1,
        image: "/assets/images/2.png",
        title: "The Bali Swing",
        duration: "Duration 2 hours",
        price: "IDR 50.000",
        viewers: "584",
        rating: 3,
      },
      {
        id: 2,
        image: "/assets/images/3.png",
        title: "Tirta Empul",
        duration: "Duration 2 hours",
        price: "IDR 50.000",
        viewers: "584",
        rating: 4,
      },
      {
        id: 3,
        image: "/assets/images/4.png",
        title: "Pura Luhur Lempuyang",
        duration: "Duration 2 hours",
        price: "IDR 50.000",
        viewers: "584",
        rating: 5,
      },
      {
        id: 4,
        image: "/assets/images/5.png",
        title: "Pura Ulun Danu Bratan",
        duration: "Duration 2 hours",
        price: "IDR 50.000",
        viewers: "584",
        rating: 4,
      },
    ];
  
    const friendRecommendations = [
      {
        id: 5,
        image: "/assets/images/6.png",
        title: "Banyumala Twin Waterfall",
        duration: "Duration 2 hours",
        price: "IDR 30.000",
        viewers: "300",
        rating: 3,
      },
      {
        id: 6,
        image: "/assets/images/7.png",
        title: "Campuhan Ridge Walk",
        duration: "Duration 2 hours",
        price: "IDR 25.000",
        viewers: "400",
        rating: 5,
      },
      {
        id: 7,
        image: "/assets/images/8.png",
        title: "Taman Budaya GWK",
        duration: "Duration 2 hours",
        price: "IDR 40.000",
        viewers: "200",
        rating: 4,
      },
      {
        id: 8,
        image: "/assets/images/9.png",
        title: "Pantai Kelingking Penidai",
        duration: "Duration 2 hours",
        price: "IDR 35.000",
        viewers: "150",
        rating: 5,
      },
    ];
  
    const SoloRecommendations = [
      {
        id: 9,
        image: "/assets/images/10.png",
        title: "Pantai Jimbaran",
        duration: "Duration 2 hours",
        price: "IDR 30.000",
        viewers: "300",
        rating: 3,
      },
      {
        id: 10,
        image: "/assets/images/11.png",
        title: "Pantai Sanur",
        duration: "Duration 2 hours",
        price: "IDR 25.000",
        viewers: "400",
        rating: 3,
      },
      {
        id: 11,
        image: "/assets/images/12.png",
        title: "Hidden Canyon Beji Guwang",
        duration: "Duration 2 hours",
        price: "IDR 40.000",
        viewers: "200",
        rating: 5,
      },
      {
        id: 12,
        image: "/assets/images/13.png",
        title: "Pura Ulun Danu Bedugul",
        duration: "Duration 2 hours",
        price: "IDR 35.000",
        viewers: "150",
        rating: 5,
      },
    ];
  
  
    return (
      <div>
        <NavbarAfter />
        <HeroSection />
        <RecommendationList title="Family Vacation" recommendations={recommendations} />
        <RecommendationList title="Friend Destination" recommendations={friendRecommendations} />
        <RecommendationList title="Solo Travel Destination" recommendations={SoloRecommendations} />
        <Footer/>
      </div>
    );
  }
  
  export default Destinationpage;
