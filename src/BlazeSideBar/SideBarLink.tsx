import type React from "react";

export function SideBarLink(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return(
        <div className="w-full hover:bg-white duration-[500ms]">
            <a {...{...props, className: `${props.className||""} hover:text-red-700 block  p-3 text-md w-full h-full`}} />
        </div>
    )
}