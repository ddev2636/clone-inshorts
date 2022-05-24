
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./components/data";
import { useState } from "react";
function App() {
  const [newsall,setNewsall]=useState(data);
  return(
    <>     

    <Navbar/>
    <div className="flex justify-center pt-40">
    <Card newsall={newsall}/>
    </div>
    <Footer/>
    
  </>
  );
}
export default App;