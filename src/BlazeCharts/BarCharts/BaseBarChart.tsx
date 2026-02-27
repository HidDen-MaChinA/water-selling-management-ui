import { type ChartData, type ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartRegister } from "../ChartRegister";
 
type BaseBarChartPropsType = {
    data: ChartData<'bar'>
    options?: ChartOptions<'bar'>
} 

export function BaseBarChart(props: BaseBarChartPropsType){
    const { data, options } = props;
    return (
        <div>
            <ChartRegister>
                <Bar data={data} options={options}/>
            </ChartRegister>
        </div>
    )
} 
