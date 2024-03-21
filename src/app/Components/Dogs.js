


"usec client"
import React, { useEffect, useState } from "react";

    const url = "https://dog.ceo/api/breeds/image/random/10"; 

export default function Dogs() {
    
    const [dogImgs, setDogImgs] = useState([]);
    useEffect(() => {
        // const fetchDogImage = async(url) => {
        //     const response = await fetch(url);
        //     const data =await response.json();
        //     setDogImgs(data.message);
        //     console.log(data.message);
        // };

        const fetchDogImages = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch dog images");
                }
                const data = await response.json();
                setDogImgs(data.message);
            } catch (error) {
                console.error("Error fetching dog images:", error);
            }
        }
        fetchDogImages();
      
    },[]);
  
   
    

    return (<div>
        <h1>Dogs</h1>
    
          <p>
                Here's a Dog API to fetch 10 random dog images:
                <a href={url}>{url}</a>
            </p>
            
        <div style={{ display: "flex", flexDirection: "row" , gap:10}}>
            {dogImgs.length > 0 && 
            dogImgs.map((imageUrl, index) => (
                <img style={{
                    width:100, display: "flex",
                    flexDirection: "row"
                }}
                    key={index}
                    src={imageUrl}
                    alt={`Dog ${index}`} /> 
                     ))
            }
        </div>
             
    </div>);
}



