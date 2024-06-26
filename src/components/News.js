import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updatenews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey} &page=${page} &pageSize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `TechNews - ${capitalizeFirstLetter(props.country)}_${capitalizeFirstLetter(props.category)}`;
        updatenews();
        //eslint-disable-next.line
    }, [])

    // const handleprevclick = async () => {
    //     setpage(page-1)
    //     updatenews();
    // }

    // const handlenextclick = async () => {
    //     setpage(page+1)
    //     updatenews()

    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey} &page=${page+1} &pageSize=${props.pagesize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

    };

    console.log("Render"); 
    return (
        <>
            <h1 className="text-center" style={{ margin: '30px 0px', marginTop:'90px' }}>TechNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {/*!state.loading && */articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handleprevclick}>&larr; Previous</button>
                    <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pagesize)} type="button" className="btn btn-dark" onClick={handlenextclick}>Next &rarr;</button>
                </div> */}
        </>

    )
}
News.defaultProps = {
    country: "in",
    pagesize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default News
