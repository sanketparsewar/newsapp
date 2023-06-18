import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'




export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:20,
    category:'general'
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount() {                   //async function wait karta hai for promisis to resolve    //this runs after render method gets run
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de2b91634b234a9798474f73bfc6778b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false})
  }

handlePrevClick=async()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de2b91634b234a9798474f73bfc6778b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
    articles: parsedData.articles,
    page:this.state.page-1,
    loading:false
  })
  
}

handleNextClick=async()=>{ 
  if (!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de2b91634b234a9798474f73bfc6778b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
    articles: parsedData.articles,
    page:this.state.page+1,
    loading:false
  })
}
}

  render() {
    return (
      <div className='container my-2s'>
        <h1 className="text-center" style={{margin:'30px'}}>NewsDonut Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 42) : ''} publishedAt={element.publishedAt} author={element.author ? element.author : 'Unknown'} description={element.description ? element.description : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://im.indiatimes.in/content/2023/Apr/us-students_6442156f86eab.png'} newsUrl={element.url} />
            </div>
          })}
          {/* element.title?element.title.slice(0,41):'' ye check karega element ka title null hai kya */}
        </div>
        <div className="container d-flex justify-content-between my-3 ">
        <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News
