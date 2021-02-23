import React from 'react';
import NoSSR from 'react-no-ssr';
import { Placeholder, Preloader } from 'react-preloading-screen';
import AboutArea from '../components/home-eight/AboutArea';
import AgencyCtaArea from '../components/home-eight/AgencyCtaArea';
import BlogCard from '../components/home-eight/BlogCard';
import Feedback from '../components/home-eight/Feedback';
import Funfacts from '../components/home-eight/Funfacts';
import MainBanner from '../components/home-eight/MainBanner';
import Pricing from '../components/home-eight/Pricing';
import Projects from '../components/home-eight/project/Projects';
import Services from '../components/home-eight/Services';
import WhatWeOffer from '../components/home-eight/WhatWeOffer';
import SearchService from '../components/home-eight/SearchService';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';
import HeaderThree from '../components/Layouts/HeaderThree';
import Head from 'next/head'

export default () => (
    <NoSSR>
        <Preloader>
            <Head>
                <title>BoostingBD - Digital marketing agency In bangladesh </title>
                {/* <meta property="og:title" content="Digital marketing agency In bangladesh" key="title" />
                <meta property="og:description" content="Boostingbd Provide facebook advertising services more then 100+ clients  already. We are provide website development , mobile application development services. 
Meta tag Facebook ads . facebook boost . page promote . website development. Node js website. Ecommerce development , mobile application" />
                <meta property="og:image" content="../static/images/general/home_og.png" /> */}
            </Head>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <HeaderThree />

            <MainBanner />
            <SearchService />
            <WhatWeOffer />
            <AboutArea />
            <Services />
            <Funfacts />
            <Projects />
            {/* <Pricing /> */}
            <Feedback />
            <BlogCard />
            <AgencyCtaArea />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)