


"usec client"
import React, { useEffect, useState } from "react";

    const url = "https://api.imgflip.com/get_memes"; 

export default function Memes() {
    
    const [memes, setMemes] = useState([]);
    useEffect(() => {
   

        const fetchMemes = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch ");
                }
                const data = await response.json();

                setMemes(data.data.memes);
            } catch (error) {
                console.error("Error fetching dog images:", error);
            }
        }
        fetchMemes();
      
    },[]);
  
   
    

    return (<div>
        <h1>Memes</h1>
    
          <p>
                Here's a Meme API :
                <a href={url}>{url}</a>
            </p>
            
        <div style={{  gap:10}}>
            {memes.map((meme, index) => (
                <img
    style={{width:50}}
                    key={index}
                    src={meme.url}
                    alt={`${index}`} /> 
                     ))
            }
        </div>
             
    </div>);
}



