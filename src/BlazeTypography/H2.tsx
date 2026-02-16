import React from "react"
export default function H2(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h2 {...{...props, className:`${props.className || ""} text-[2.75rem]`}} />
    )
}