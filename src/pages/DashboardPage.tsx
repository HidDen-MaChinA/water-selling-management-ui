import { useEffect, useState } from "react";
import { useCustomerAnalyticsDataStore } from "../stores/pagesStores/analyticsStore";
import { BaseLineChart } from "../BlazeCharts/LineCharts/BaseLineChart";
import type { Analytic } from "../@types/AppTypes/Analytic";
import { BaseBarChart } from "../BlazeCharts/BarCharts/BaseBarChart";
import type { CustomerAnalyticsData } from "../@types/AppTypes/CustomerAnalyticsData";

export default function DashboardPage(){
    const {pages, getPage, loadPage} = useCustomerAnalyticsDataStore(_=>_);
    const [page, setPage] = useState(1)
    const [customerAnalytics, setCustomerAnalytics] = useState<Analytic[]>([]);
    const [visiteRateData, setVisiteRateData] = useState<{label: string, data: number[]}[]>([]);
    const [visiteRateDataLabels, setVisiteRateDataLabels] = useState<string[]>([])
    const [totalBidonData, setTotalBidonData] = useState<{label: string, data: number[]}[]>([]);
    const onLoadCurrentPage = ()=>{
        const currentPage = getPage(page);
        if(!currentPage){
           loadPage(page, {dateRangeTimeScoop: "DAY"});
           return;
        }
        setCustomerAnalytics(currentPage);
    }
    useEffect(()=>{
        loadPage(1);
    }, [])
    useEffect(()=>{
        const currentPage = getPage(page);
        if(currentPage){
           setCustomerAnalytics(currentPage)
           setVisiteRateData(formatVisiteRateData(currentPage));
           setTotalBidonData(formatTotalBidonNumber(currentPage));
           setVisiteRateDataLabels(formatLabelsVisiteRateData(currentPage))
        }
    }, [pages])
    return (
        <div className="flex-1">
                <BaseLineChart
                    data={{
                        datasets: visiteRateData,
                        labels: visiteRateDataLabels
                    }}
                />
                <BaseBarChart 
                    data={{
                        datasets: totalBidonData,
                        labels: ["Total bidon number"]
                    }}
                
                />
        </div>
    )
}

function formatVisiteRateData(analytics: Analytic[]){
    const formated = analytics.map((analytic)=>({
        label: analytic.customer.name,
        data: analytic.customerAnalyticsData.map((customerAnalyticData)=>customerAnalyticData.customerVisiteForDateRange)
    }));
    return formated;
}

function formatLabelsVisiteRateData(analytics: Analytic[]){
    const customerAnalyticData = analytics.flatMap((analytic)=>analytic.customerAnalyticsData)
    const toReturn = []
    const dateRangeMap = new Map<string, any>();
    for(let i=0; i<=customerAnalyticData.length; i++){
        if(customerAnalyticData[i]){
            const dateRangeStart = customerAnalyticData[i].dateRangeStart        
            const dateRangeEnd= customerAnalyticData[i].dateRangeEnd
            dateRangeMap.set(`${dateRangeStart}/${dateRangeEnd}`, customerAnalyticData[i].bidonNumber)
        }
    }
    for(const [key, value] of dateRangeMap){
        const [dateStart, dateEnd] = key.split("/").map(each=>new Date(each));
        const date = formatDateToReturnDayMonthYear(dateStart) + "-" + formatDateToReturnDayMonthYear(dateEnd);
        toReturn.push(date)
    }
    return toReturn
}

function formatDateToReturnDayMonthYear(arg: Date){
    return arg.toLocaleString('default', {dateStyle: 'medium'})
}

function formatTotalBidonNumber(analytics: Analytic[]){
    const formated = analytics.map((analytic)=>({
        label: analytic.customer.name,
        data: [analytic.totalBidonNumber]
    }));
    return formated;

}
