import React from "react"
export default function H5(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h5 {...{...props, className:`${props.className || ""} text-[1.43rem]`}} />
    )
}