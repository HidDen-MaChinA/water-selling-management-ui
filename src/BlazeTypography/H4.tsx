import React from "react"
export default function H4(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h4 {...{...props, className:`${props.className || ""} text-[1.75rem]`}} />
    )
}