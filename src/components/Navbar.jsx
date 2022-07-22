import React from "react";
import Menu from "./menuApi"
const navbar = ({filterItem,list}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group2">
          {
            list.map((cur)=>{
              return(
                <button className="btn-group__item" onClick={()=>
                  {filterItem(cur)}}>{cur}</button>
              )
             
            })
          }
         
        </div>
      </nav>
    </>
  );
};

export default navbar;