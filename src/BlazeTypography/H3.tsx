import React from "react"
export default function H3(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h3 {...{...props, className:`${props.className || ""} text-[2.18rem]`}} />
    )
}