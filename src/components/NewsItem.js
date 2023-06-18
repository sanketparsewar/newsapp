import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl, newsUrl,author,publishedAt}=this.props;
    return (
      <div className="card my-2">
        <img src={imageUrl} className="card-img-top"  alt='...'/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <footer class="blockquote-footer">By <cite title="Source Title">{author} on {new Date(publishedAt).toUTCString()}</cite></footer>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
