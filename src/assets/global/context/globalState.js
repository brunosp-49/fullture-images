import React, { createContext, useContext, useState } from "react";

export const InputContext = createContext({})

export const InputProvider = (props) =>{
    const [input, setInput] = useState("")
    const [images, setImages] = useState("");
    let states = {input, images}
    let setters = {setInput, setImages}

    return(
        <InputContext.Provider value={{states, setters}}>
            {props.children}
        </InputContext.Provider>
    )
}

export const useGlobal = () => useContext(InputContext)