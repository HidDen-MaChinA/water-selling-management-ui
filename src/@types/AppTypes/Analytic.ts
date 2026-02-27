import type { Customer } from "./Customer"
import type { CustomerAnalyticsData } from "./CustomerAnalyticsData"

export type Analytic = {
    id: string
    totalBidonNumber: number
    customer: Customer
    customerAnalyticsData: CustomerAnalyticsData[]
}