import React from "react";
import Collection from "../Collection";
import Faq from "../Faq";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Roadmap from "../Roadmap";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Collection />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}
