import React from 'react';
import NoSSR from 'react-no-ssr';
import { Placeholder, Preloader } from 'react-preloading-screen';
import AboutArea from '../components/about/AboutArea';
import PageTitle from '../components/about/PageTitle';
import Funfacts from '../components/home-eight/Funfacts';
import Partner from '../components/home-one/Partner';
import Team from '../components/home-one/Team';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';
import HeaderThree from '../components/Layouts/HeaderThree';
import Head from 'next/head'

class About extends React.Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                <Head>
                <title>About Us </title>
                <meta property="og:title" content='About Us' key="title" />
      
            </Head>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                    <HeaderThree />
                    <PageTitle />
                    <AboutArea />
                    <Team />
                    <Partner />
                    <Funfacts />
                    <Footer />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        )
    }
}

export default About