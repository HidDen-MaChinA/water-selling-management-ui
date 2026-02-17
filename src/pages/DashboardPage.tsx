import { useEffect, useState } from "react";
import { BlazeBaseTable } from "../BlazeTables/BlazeBaseTable";
import { useCustomersStore } from "../stores/customersStore";
import type { Customer } from "../@types/AppTypes/Customer";

export default function DashboardPage(){
    const {customersPage, getPage, loadPage} = useCustomersStore(_=>_);
    const [page, setPage] = useState(1)
    const [customers, setCustomers] = useState<Customer[]>([]);
    const onLoadCurrentPage = ()=>{
        const currentPage = getPage(page);
        if(!currentPage){
           loadPage(page);
           return;
        }
        setCustomers(currentPage);
    }
    useEffect(()=>{
        loadPage(1);
    }, [])
    useEffect(()=>{
        const currentPage = getPage(page);
        if(currentPage){
           setCustomers(currentPage)
        }
    }, [customersPage])
    return (
        <div>
            <BlazeBaseTable headers={["Name", "Status"]}>
                {
                   customers.map((customer, index)=>(
                    <tr key={"dashboard-customers-table" + index}>
                        <td>{customer.name}</td>
                        <td>{customer.status}</td>
                    </tr>
                   )) 
                }
            </BlazeBaseTable>
        </div>
    )
}