import React from "react";

function Button( { className , handleClick  ,funcionality } ){

    return(
        <>
            <button className={className} onClick={handleClick}>{funcionality}</button>
        </>
    )
}

export default Button;