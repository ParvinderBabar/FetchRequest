


"usec client"
import React, { useEffect, useState } from "react";

    const url = "https://random-data-api.com/api/v2/beers?size=20"; 

export default function Dogs() {
    
    const [beers, setBeers] = useState([]);
    useEffect(() => {
       

        const fetchBeer = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch dog images");
                }
                const data = await response.json();
                setBeers(data);
            } catch (error) {
                console.error("Error fetching dog images:", error);
            }
        }
        fetchBeer();
      
    },[]);
  
   
    

    return (<div>
        <h1>Beer</h1>
    
          <p>
                Here's a API to fetch 20 beers:
                <a href={url}>{url}</a>
            </p>
            
       
        
                    
                    
                  
                    <div>
                        <select >
                            {
                                beers.map((beer, index)=>
                            (<option> {beer.name} </option>))
                            }
                            
                                 
                            
                           
                        </select>
               
                  </div>

           
        
             
    </div>);
}



