import  { useState } from "react";
import MenuLeft from "./menu-left/MenuLeft";
import MenuRight from "./menu-right/menu-right";

function Management() {
  const [isChange, setIsChange] = useState(false);

  return (
    <div className="flex gap-4 mt-4">
      <MenuRight  setIsChange = {setIsChange}  /><MenuLeft  isChange = {isChange}  />
    </div>
  );
}

export default Management;
