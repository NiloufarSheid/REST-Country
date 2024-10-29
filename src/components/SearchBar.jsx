 
import React,{useState} from 'react'; 
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';




const SearchBar = ({placeholder,data}) => {
    const [filteredData,setFilteredData]=useState([]);
    
    const handleFilter =(event)=>{
const searchWord=event.target.value;
const newFilter= data.filter( (value)=>{
    return value.name.toUpperCase().includes(searchWord.toUpperCase())
})
if (searchWord === ""){
    setFilteredData([])
}
else{
    setFilteredData (newFilter);    
}

}; 
    
  return (
    <div className='search'>
        <div className='searchInputs'>
        <div className='searchIcon '><SearchIcon/></div>
            <input type="text " placeholder={placeholder} onChange={handleFilter} />
            
        </div>

        {filteredData.length !=0 && (
        <div className='dataResult '>
            {filteredData.slice( 0,15) .map((value,key)=>{

                return( 
                <a className='dataItem ' href={value.flags.png } target='_blank'>
                   <p>{value.name}</p>  
                    </a>
            );
            })}
        </div>

        )}
    </div>
  );
}

export default SearchBar;
