import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export default function LoginLink(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return (
        <a className="block text-white py-2 px-4 text-xl bg-blue-600 rounded-2xl shadow-md" {...props} />
    )
}