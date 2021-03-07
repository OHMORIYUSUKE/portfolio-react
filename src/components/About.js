import React from 'react'
import logo from '../logo.svg';
import ReactMarkdown from 'react-markdown/with-html';
import Image from '../images/profile.jpg'


const About =()=>{
    const title = "About";
    
    const discription =
        '# 　大森裕介' +
        ' (うーたん)\n'+
        '- ## 公立千歳科学技術大学\n'+
        '- ## 情報システム工学科\n'+
        '- ## [cistLTサークル](https://cist-lt-group.web.app/)\n'+
        '　　[さらに詳しく](http://utan.php.xdomain.jp/profile.html)\n'
        ;
    
    const style = {
        display:"flex",/* flexbox */
        justifyContent:"center", /* 水平方向 */
        alignItems: "center", /* 垂直方向 */
    }
    const text = {
        color: "white",
        marginRight: "50px",
    }
    const titleStyle ={
        color: "white",
        fontSize: "60px",
        textAlign: "center",
    }
    
    const image = Image;
    
  return(
    <>   
        <h1 style={titleStyle}>{title}</h1>
        <div style={style}>
            <div style={text}>
            <ReactMarkdown
                    source={discription}
                    escapeHtml={false}
                />
            </div>
            <img src={image} />
        </div>
    </>
  )
}

export default About