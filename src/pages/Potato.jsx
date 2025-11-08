import React from "react";
import GoBackHome from "../components/GoBackHome";

function Potato(){
    function Food(props){
    // props 대신에 {favorite} 라고 써도 됨
    console.log(props);
    return <h3>I love {props.favorite}</h3>;
    }

    return(
        <div>
      <GoBackHome page={"/"} />
        <div>
          <Food favorite = "kimchi"/>
          <Food favorite = "라면"/>
          <Food favorite = "삼겹살"/>
          <Food favorite = "쭈꾸미"/>
        </div>
    </div>
    );
}

export default Potato;