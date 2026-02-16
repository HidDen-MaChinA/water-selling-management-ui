import React from "react"
export default function H6(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h6 {...{...props, className:`${props.className || ""} text-[1.12rem]`}} />
    )
}