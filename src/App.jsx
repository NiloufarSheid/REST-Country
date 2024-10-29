
import Footer from "./components/footer/Footer";
import NavbarHeader from "./components/header/NavbarHeader";
import Countries from "./components/countryfolder/Countries";
import { BACKGROUND, FOREGROUND } from "./helpers/colors";



const App = () => {
      
   
  return (
       <div style={{color:FOREGROUND}}>
     
      <NavbarHeader />
      
        <Countries/>
          
     
        <Footer />
     
      
      </div>


    
  );
};

export default App;
