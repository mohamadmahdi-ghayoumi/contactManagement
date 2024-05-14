import  { useState } from "react";
import MenuLeft from "./menu-left/MenuLeft";
import MenuRight from "./menu-right/menu-right";

function Management() {
  const [isChange, setIsChange] = useState(false);
  const [filterContact, setFilterContact] = useState({});
  
console.log(isChange)
  return (
    <div className="flex gap-4 mt-4">
      <MenuRight   setIsChange = {setIsChange} filterContact={filterContact}    /><MenuLeft  isChange = {isChange} setFilterContact = {setFilterContact}  />
    </div>
  );
}

export default Management;
