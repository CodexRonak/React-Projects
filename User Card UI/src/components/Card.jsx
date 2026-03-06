import React, { useState } from 'react';
import { Bookmark } from "lucide-react";

const Card = (props) => {

    const [save, setSave] = useState(false);  

    return ( <div className="card">

      {/* upper */}

      <div className="top">
        <img src={props.brandLogo} alt="" />

         <button 
          onClick={() => setSave(!save)} 
          className={save ? "saved" : ""}
        >
          Save <Bookmark fill={save ? "black" : "none"} />
        </button>


         
      </div>

      {/* mid */}
      
      <div className="centre">
        <h3> {props.companyName} <span> {props.datePosted} </span> </h3>
        <h2>{props.post}</h2>
        <h4>{props.tag1}</h4>
        <h4>{props.tag2}</h4>
      </div>

      {/* lower */}

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>

    </div> );
}


export default Card;