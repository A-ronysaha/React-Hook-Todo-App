import { useState } from "react";

export default function useInput(val="") {
    const [value,setvalue]= useState(val)
    function handleChange(e){
        setvalue(e.target.value)
    }

    function reset() {
        setvalue("")
    }
    return [value, handleChange, reset]
}