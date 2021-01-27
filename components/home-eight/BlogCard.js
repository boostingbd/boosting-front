import React, { useEffect,useState } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import axios from 'axios'
import moment from 'moment'

const BlogCard =()=>{
    const [articles, setArticles] = useState([])
  useEffect(()=>{
    axios.get(`/article/getall`)
    .then(res=>{
        setArticles(res.data.articles)
    })
  },[])
        return (
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">News</span>
                        <h2>The News from Our Blog</h2>
                        <div className="bar"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>

                    <div className="row">

                        {
                            articles.length>0 ? articles.map((article,index)=>{
                                if(index === 2) return
                                return(
                                    <div key={index} className="col-lg-4 col-md-6">
                                    <div className="single-blog-post-item">
                                        <div className="post-image">
                                            <Link href={`/blog/${article.slug}`}>
                                                <a>
                                                    <img src={article.thumbnail} alt="image" />
                                                </a>
                                            </Link>
                                        </div>
        
                                        <div className="post-content">
                                            <ul className="post-meta">
                                                <li>
                                                    <Link href="#">
                                                        <a>{article.creator.userName}</a>
                                                    </Link>
                                                </li>
                                                <li> {moment(article.createdAt).format("MMMM D, YYYY")}</li>
                                            </ul>
        
                                            <h3>
                                                <Link href={`/blog/${article.slug}`}>
                                                    <a>{article.title}</a>
                                                </Link>
                                            </h3>
        
                                            <Link href={`/blog/${article.slug}`}>
                                                <a className="read-more-btn">
                                                    Read More <Icon.PlusCircle />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }):<p>No articles found</p>
                        }

                       

                        
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape"/>
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
            </section>
        );
    }


export default BlogCard;