import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../../../components/Layouts/HeaderThree';
import Footer from '../../../components/Layouts/Footer'
import GoTop from '../../../components/Layouts/GoTop'
import PageTitle from '../../../components/products/PageTitle';
import Items from '../../../components/services-category/Items';
import axios from 'axios'
import Head from 'next/head'


const Products=({categories})=> {
  //console.log(products)
        return (
            <Preloader>
              <Head>
                <title>Services </title>
                <meta property="og:title" content='Services' key="title" />
      
            </Head>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                <Items categories={categories} />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
}
export async function getServerSideProps(context) {
 let slug = context.params.slug
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/category`)
    let selected = await res.data.category.filter(cat=>cat.slug === slug)


    return {
      props: {categories:selected[0].children}, // will be passed to the page component as props
    }
  }
export default Products