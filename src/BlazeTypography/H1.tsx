import React from "react"
export default function H1(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h1 {...{...props, className:`${props.className || ""} text-[3.5rem]`}} />
    )
}