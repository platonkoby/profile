import React, { useRef } from "react";

export const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current && htmlElRef.current.focus()}

    if (htmlElRef) console.log(htmlElRef)

    return [htmlElRef]
}