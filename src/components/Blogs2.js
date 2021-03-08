import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

//参考　https://t-n-clark.hatenadiary.jp/entry/2019/05/30/113000

// https://uu-tan.hatenablog.jp/rss
// http://utan.php.xdomain.jp/blog/rss.xml
/*RSSParserのインスタンス生成*/
const RssParser = require('rss-parser');
const url = "//utan.php.xdomain.jp/blog/rss.xml"
const rssParser = new RssParser();

const titleStyle ={
    color: "white",
    fontSize: "60px",
    textAlign: "center",
}
const style = {
    textAlign: "center",
    fontSize: "20px",
}

class Blogs2 extends Component {
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
  render(props) {
    const classes = this.props.classes;
    /*表示するコンテンツの形に合わせてstateの中身を書きだす(mapで拡張forループみたいに使う)*/
    const contents = this.state.contents.map(content => {
      return <div>
        <p style={style}><a href={content.link}>{content.title} | {content.pubDate}</a></p>
      </div>
    });
    return (
      <div>
        <h1 style={titleStyle}></h1>
        <div>
        {contents}
        </div>
      </div>
    );
  }
}
Blogs2.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Blogs2;