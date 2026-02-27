import { Chart, registerables } from "chart.js";
import type React from "react";

Chart.register(...registerables)

export function ChartRegister(props: {children?: React.ReactNode}){
    return (
        <div {...props}/>
    )
}