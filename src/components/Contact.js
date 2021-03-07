import React from 'react'
import Icon from 'react-icons-kit';
import {mail} from 'react-icons-kit/icomoon/mail'
import {github} from 'react-icons-kit/icomoon/github'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {blog} from 'react-icons-kit/icomoon/blog'


const Contact =()=>{
    const title = "Contact";

    const rangsStyle = {
        color: "white",
        textAlign: "center",
    }
    const iconSVG = {
      marginLeft: "30px",
      marginRight: "30px",
      marginBottom: "60px",
      color: "#61dafb",
    }
    
    const rangs = [
        { id: "Twitter", title: twitter ,url: "https://twitter.com/uutan1108"},
        { id: "Github", title: github ,url: "https://github.com/OHMORIYUSUKE"},
        { id: "Blog", title: blog ,url: "http://utan.php.xdomain.jp/blog/"},
        { id: "Email", title: mail ,url: "mailto:b2190350@photon.chitose.ac.jp"},
      ];
      const Rangs = ({ rangs }) => {
        const list = rangs.map(rang => {
          return (
            <div>
                <h3 style={rangsStyle}>{rang.id}</h3>
                <a href={rang.url}>
                  <div style={iconSVG}>
                    <Icon size={70} icon={rang.title}/>
                  </div>
                </a>
            </div>
          );
        });
        return <div style={style}>{list}</div>;
      };
    
    const style = {
        display:"flex",/* flexbox */
        justifyContent:"center", /* 水平方向 */
        alignItems: "center", /* 垂直方向 */
    }

    const titleStyle ={
        color: "white",
        fontSize: "60px",
        textAlign: "center",
    }
    
    
  return(
    <>   
        <h1 style={titleStyle}>{title}</h1>
        
        <Rangs rangs={rangs}/>
        
    </>
  )
}

export default Contact