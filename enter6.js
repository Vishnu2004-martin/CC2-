import React from "react";
function Entry(props) {
  return (
    <div style={{textAlign:"center"}}>
      <img  style={{height:"300px",width:"500px"}} src={props.imgUrl}></img>
      <marquee>Hurry Hurry Near To Out of Stocks</marquee>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
       <hr></hr>
    </div>
  );
}
export default Entry;