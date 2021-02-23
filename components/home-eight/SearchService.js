import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styles from './search.module.css'
import axios from 'axios'
import {useRouter} from 'next/router'

function SearchService() {
    const [categories, setcategories] = useState([])
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')

    const Router = useRouter()
    useEffect(() => {
        axios.get('/product/category')
            .then(res => {
                setcategories(res.data.category);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [])


    useEffect(() => {
        if(Router.query.query){
            setQuery(Router.query.query)
        }
        if(Router.query.cat){
            setCategory(Router.query.cat)
        }
    }, [Router])
    return (
        <div className={styles.home_search}>




            <div className="jumbotron ">
                <div className="container-fluid ">
                    <form className={styles.form} style={{ margin: "auto" }}>
                        <div className={styles.innerForm}>
                            <div className={`${styles.inputField} ${styles.firstWrap}`}>
                                <input value={query} className={styles.input} onChange={e => setQuery(e.target.value)} id="search" type="text" placeholder="What are you looking for?" />
                            </div>
                            <div className={`${styles.inputField} ${styles.secondWrap}`}>
                                <div className={styles.inputSelect}>
                                    <select value={category} className={styles.select} onChange={(e) => setCategory(e.target.value)} data-trigger="" name="choices-single-defaul">
                                        <option value='all'>All</option>

                                        {
                                            categories && categories.map((cat, index) => {
                                                return (
                                                    <option key={index} value={cat.slug}>{cat.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={`${styles.inputField} ${styles.thirdWrap}`}>
                                <button onClick={() => Router.push(`/services/search?query=${query}&cat=${category}`)} className={styles.btnSearch} type="button">
                                    <SearchIcon />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchService
