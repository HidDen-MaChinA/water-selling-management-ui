import { type ChartData, type ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartRegister } from "../ChartRegister";
 
type BaseLineChartPropsType = {
    data: ChartData<'line'>
    options?: ChartOptions<'line'>
} 

export function BaseLineChart(props: BaseLineChartPropsType){
    const { data, options } = props;
    return (
        <div>
            <ChartRegister>
                <Line data={data} options={options}/>
            </ChartRegister>
        </div>
    )
} 
