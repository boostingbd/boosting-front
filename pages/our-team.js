import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import PageTitle from '../components/our-works/PageTitle'
import ProjectContent from '../components/our-works/ProjectContent'
import Head from 'next/head'
class Project extends React.Component {
    render() {
        return (
            <Preloader>
                <Head>
                <title>Our Works </title>
                <meta property="og:title" content='Our Works' key="title" />
      
            </Head>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                {/* <PageTitle /> */}
                <ProjectContent />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Project