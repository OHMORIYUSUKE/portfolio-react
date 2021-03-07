import React from 'react'
import Circle from 'react-circle';


const Skill =()=>{
    const title = "Skill";

    const rangsStyle = {
        color: "white",
        textAlign: "center",
    }
    
    const rangs = [
        { id: "PHP", title: 70 },
        { id: "Java", title: 50 },
        { id: "Python", title: 40 },
        { id: "C", title: 60 },
        { id: "JavaScript", title: 40 },
        { id: "HTML,CSS", title: 70 }
      ];
      const Rangs = ({ rangs }) => {
        const list = rangs.map(rang => {
          return (
            <div>
                <h3 style={rangsStyle}>{rang.id}</h3>
                <Circle
                size={140}
                textColor="white"
                progressColor="#61dafb"
                animate={true}
                showPercentageSymbol={false}
                progress={rang.title}
                />
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

export default Skill