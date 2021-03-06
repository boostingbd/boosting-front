import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import PageTitle from '../components/contact/PageTitle'
import ContactBody from '../components/contact/ContactBody'

export default () => (
    <Preloader>
        <Placeholder>
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        </Placeholder>
        <HeaderThree />
        <PageTitle />
        <ContactBody />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </Preloader>
)
