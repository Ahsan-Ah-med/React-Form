import React, { useEffect, useState } from 'react';


const Resize =()=> {
    const [width, SetWidth] = useState(window.screen.width);

    const actualWidth = ()=> {
        console.log(window.innerWidth);
        SetWidth(window.innerWidth)
    }

    useEffect (()=>{   
        console.log("add")
        window.addEventListener("resize", actualWidth);
        
        return ()=> {
            console.log("Remove")
            window.removeEventListener("resize", actualWidth)
        }

    });
    
    
    return(
        <>
            <div className="Resize">{width}</div>

        </>

    )
}
export default Resize;