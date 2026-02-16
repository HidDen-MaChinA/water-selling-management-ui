import type React from "react";

export function Text(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>){
    return(
        <p {...{...props, className: `${props.className || ""} text-[1rem]`}} />
    )
}