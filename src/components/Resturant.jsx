import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqList=[...new Set(
  Menu.map((cur)=>{
    return cur.category
  })
),"All"]

 //console.log(uniqList);
const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu)
  const [list, setlist] = useState(uniqList)
  const filterItem=(catagory)=>{
    if(catagory=="All"){
      setmenuData(Menu)
      return
    }
    const data=Menu.filter((curelem)=>{
      return curelem.category===catagory
    })
    setmenuData(data)
  }
  return (
    <>
      <Navbar filterItem={filterItem} list={uniqList}/>
      <MenuCard menuData={menuData}/> 
    </>
  );
};

export default Resturant;