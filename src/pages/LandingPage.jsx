import React from "react";
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}