
import Footer from "./components/footer/Footer";
import NavbarHeader from "./components/header/NavbarHeader";
import Countries from "./components/countryfolder/Countries";
import { BACKGROUND, FOREGROUND } from "./helpers/colors";
import SearchBar from "./components/SearchBar";
import FilterData from "./components/FilterData";
import dataArray from "../src/components/data.json"

import { Row } from "react-bootstrap";



const App = () => {
      
   
  return (
       <div style={{color:FOREGROUND}}>
     
      <NavbarHeader />
      <div style={{display:"flex"}}>
    <SearchBar className="searchBar"  placeholder="Search for a country..." data={dataArray}/>
    <FilterData />
  
    </div>
   

        <Countries/>
          
     
        <Footer />
     
      
      </div>


    
  );
};

export default App;
