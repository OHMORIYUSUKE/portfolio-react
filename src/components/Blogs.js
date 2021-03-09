import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

//参考　https://t-n-clark.hatenadiary.jp/entry/2019/05/30/113000

// https://uu-tan.hatenablog.jp/rss
// http://utan.php.xdomain.jp/blog/rss.xml

const blogsNum = 7; //ブログ記事の表示件数

/*RSSParserのインスタンス生成*/
const RssParser = require('rss-parser');
const url = "http://utan.php.xdomain.jp/blog/getRSS.php"
const rssParser = new RssParser();

const titleStyle ={
    color: "white",
    fontSize: "60px",
    textAlign: "center",
}
const style = {
    textAlign: "center",
    fontSize: "20px",
    color: "white",
}

class Blogs extends Component {
  /*コンストラクターの定義*/
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  /*stateにrssParserの結果をバインド*/
  componentDidMount() {
    rssParser.parseURL(url)
      .then((feed) => {
        const data = feed.items;
        console.log(data);
        this.setState({
          contents: [...data]
        });
      })
      .catch((error) => {
        console.error('Get Failed', error);
      })
  }
  render() {
    /*表示するコンテンツの形に合わせてstateの中身を書きだす(mapで拡張forループみたいに使う)*/
    /*slice(0,5)//mapの回数を制限する*/
    const contents = this.state.contents.slice(0,blogsNum).map(content => {
      return <div>
        <p style={style}><a href={content.link}>{content.title} | {content.pubDate}</a></p>
      </div>
    });
    return (
      <div>
        <h1 style={titleStyle}>Blog</h1>
        <p　style={style}>最新{blogsNum}件</p>
        <div>
        {contents}
        </div>
      </div>
    );
  }
}
Blogs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Blogs;