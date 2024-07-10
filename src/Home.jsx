import React from 'react';
import Category from './components/Category';
import FAQ from './components/FAQ';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero_Next from './components/Refer';
import Programs from './components/Benefits';
import Ad from './components/Ad';
import Footer from './components/Footer';
import PreHeader from './components/PreHeader';

const Home = ({ handleOpenModal }) => {
    return (
        <div className="w-full min-h-screen">
            <PreHeader />
            <Header />
            <Category />
            <Hero handleOpenModal={handleOpenModal} /> 
            <Hero_Next />
            <h1 className="text-[27.66px] font-600 leading-[43px] ml-[600px] items-center mt-8">
                What Are The <span className="text-[#1A73E8]">Referral Benefits?</span>
            </h1>
            <Programs />
            <FAQ />
            <Ad />
            <Footer />
        </div>
    );
};

export default Home;
