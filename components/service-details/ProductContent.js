import React, { useEffect } from 'react';
import * as Icon from 'react-feather';
import { useDispatch } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import DetailsTab from './DetailsTab';
import ProductImage from './ProductImage';
import Router from 'next/router'
import Script from 'react-load-script';
import Head from 'next/head'
const ProductContent = ({ product }) => {

    let dispatch = useDispatch()



    const handleOrder = (data) => {
        dispatch({
            type: "SET_SERVICE",
            payload: data

        })

        Router.push('/checkout')

    }

    // useEffect(() => {
    //     window.addthis.init();
    //     //window.addthis.update('share', 'url', 'xfgfg');
    // }, [])

    // const handleAddthisLoaded=()=>{
    //     console.log(window.addthis);
    //     window.addthis.init();
    //     //window.addthis.update('share', 'url', 'xfgfg');
    // }


    return (
        <section className="shop-details-area ptb-80 ">
            {/* <Script
            url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6035fdcca4f91b8c"
            onLoad={handleAddthisLoaded} /> */}

            <Head>
                <meta charSet="utf-8" />
                <title>{`${product && product.title} | Flikhs`}</title>
                <meta property="og:title" content={product && product.title} key="title" />
                <meta property="og:description" content={product && product.shortDescription} />
                <meta property="og:image" content={product && product.productImages[0]} />



                {/* Twitter Meta Tags */}
                <meta property="twitter:card" content="summary_large_image" />
                {/* <meta property="twitter:url" content="https://flikhs-nextjs.vercel.app/g/my-group" /> */}
                <meta property="twitter:title" content={product && product.title} />
                <meta property="twitter:description" content={product && product.shortDescription} />
                <meta property="twitter:image" content={product && product.productImages[0]} />
            </Head>

            <ToastContainer />
            <div className="container pt-5">
                <div className="row align-items-center">
                    <ProductImage productImages={product.productImages} />

                    <div className="col-lg-7">
                        <div className="products-details">
                            <h3>{product.title}</h3>

                            <div className="price">
                                {product.price} BDT
                                </div>
                            <ul className="rating">
                                <li><i className="flaticon-star-1"></i></li>
                                <li><i className="flaticon-star-1"></i></li>
                                <li><i className="flaticon-star-1"></i></li>
                                <li><i className="flaticon-star-1"></i></li>
                                <li><i className="flaticon-star-1"></i></li>
                            </ul>

                            <p>{product.shortDescription}</p>

                            {/* <div className="availability">
                                    SKU: <span>{product.SKU}</span>
                                </div> */}
                            <div className="">
                                SKU: <span>{product.SKU}</span>
                            </div>

                            {/* <form onSubmit={null}>
                                    <div className="quantity">
                                        <span>Quantity:</span>

                                        <span 
                                            className="minus-btn"
                                            onClick={null}
                                        >
                                            <Icon.Minus />
                                        </span>

                                        <input 
                                            type="text" 
                                            value={0}
                                            min={0}
                                            max={0} 
                                            onChange={e => null}
                                        />

                                        <span 
                                            className="plus-btn"
                                            onClick={null}
                                        >
                                            <Icon.Plus />
                                        </span>

                                    </div>
                                    <button 
                                        type="submit" 
                                        onClick={null}
                                    >
                                        Add to Cart
                                    </button>

                                    <a href="#" className="add-to-wishlist-btn" title="Add to Wishlist">
                                        <Icon.Heart />
                                    </a>
                                    
                                    
                                </form> */}
                            <div style={{ cursor: "pointer" }} onClick={() => handleOrder(product)} className="buy-btn mt-3">
                                <a className="btn btn-primary">Buy it Now</a>
                            </div>
                            <div className="custom-payment-options">
                                <span>Guaranteed safe checkout:</span>

                                <div className="payment-methods">
                                    <img src={require("../../static/images/payment-image/payment-img1.svg")} alt="image" />
                                    <img src={require("../../static/images/payment-image/payment-img2.svg")} alt="image" />
                                    <img src={require("../../static/images/payment-image/payment-img3.svg")} alt="image" />
                                    <img src={require("../../static/images/payment-image/payment-img4.svg")} alt="image" />
                                    <img src={require("../../static/images/payment-image/payment-img5.svg")} alt="image" />
                                    <img src={require("../../static/images/payment-image/payment-img6.svg")} alt="image" />
                                    <img src={require("../../static/images/payment-image/payment-img7.svg")} alt="image" />
                                </div>
                            </div>

                            {/* <div className="products-share-social">
                                    <span>Share:</span>

                                    <ul>
                                        <li>
                                            <a href="#" className="facebook">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <Icon.Instagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            <div className="addthis_inline_share_toolbox_3ydc mt-3"></div>
                        </div>
                    </div>

                    <DetailsTab description={product.description} />

                </div>
            </div>
        </section>
    );

}



export default ProductContent
