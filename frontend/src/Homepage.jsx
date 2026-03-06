import React, { memo } from "react";
import { Helmet } from "react-helmet-async";

//New Componnet import
import Navbar from "./components/homePageComp/Navbar";
import HeroSection from "./components/homePageComp/HeroSection";
import ProductPortfolioSection from "./components/homePageComp/ProductPortfolioSection";
import ServicesSection from "./components/homePageComp/ServicesSection";
import WhyChooseUsSection from "./components/homePageComp/WhyChooseUsSection";
import DiscoverCategoriesSection from "./components/homePageComp/DiscoverCategoriesSection";
import ExtendedCategoryGrid from "./components/homePageComp/ExtendedCategoryGrid";
import PartnersSection from "./components/homePageComp/PartnersSection";
import StatsSection from "./components/homePageComp/StatsSection";
import WhyChooseUsCards from "./components/homePageComp/WhyChooseUsCards";
import FAQSection from "./components/homePageComp/FAQSection";
import CTABanner from "./components/homePageComp/CTABanner";
import Footer from "./components/homePageComp/Footer";
import Footer2 from "./components/homePageComp/Footer2";
import AboutUsSection from "./components/homePageComp/Aboutussection";
import ProductsSection from "./components/homePageComp/Productssection";
import TestimonialSection from "./components/homePageComp/TestimonialSection";


const Homepage = memo(() => {
  return (
    <>
      <Helmet>
        <title>VR & SONS</title>

        <meta
          name="description"
          content="VR & Sons is a trusted import export company offering global trade services, international logistics, and high quality export products from India."
        />

        <meta
          name="keywords"
          content="import export company, global trade company, export products india, international shipping, logistics services"
        />

        <meta name="author" content="VR & Sons" />

        {/* Open Graph SEO */}
        <meta property="og:title" content="VR & Sons Import Export Company" />
        <meta
          property="og:description"
          content="Leading global import export company providing international trade and logistics solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      {/* <WhyChooseUsSection/> */}
      {/* <DiscoverCategoriesSection/>
    <ExtendedCategoryGrid/> */}
      {/* <PartnersSection/> */}
      <StatsSection />
      <TestimonialSection />
      {/* <WhyChooseUsCards/> */}
      <AboutUsSection />
      {/* <CTABanner/> */}
      <Footer />

      {/* <PropertyPortfolioSection/>
    <NextSections/>
    <FinalSections/> */}
      {/* <CategoryGrid/>
   <PartnersSection/>
   <StatsSection/>
   <WhyChooseUp/>
   <FAQSection/>
   <CTABanner/>
   <InquiryForm/>
   <Footer/> */}
      {/* <MasonrySection/>
    <LogoFaqSection/>
    <Footer/> */}
    </>
  );
});

export default Homepage;