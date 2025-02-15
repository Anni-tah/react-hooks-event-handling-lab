// Code EyesOnMe Component Here
import { useState } from "react";
function EyesOnMe(){
    const [focus, setFocus]=useState(false);
    function handleFocus(){
        setFocus(true);
       console.log("Good!")
        
}
function handleBlur(){
    setFocus(false);
    console.log("Hey! Eyes on me!");

}

    return <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
}
export default EyesOnMe;
