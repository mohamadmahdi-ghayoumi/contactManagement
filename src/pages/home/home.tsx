import React from "react";
import LayoutHome from "../../layout/layout-home";
import Management from "../../components/Home";
function Home() {
  return (
    <>
      <LayoutHome main={<Management />} />
    </>
  );
}

export default Home;
