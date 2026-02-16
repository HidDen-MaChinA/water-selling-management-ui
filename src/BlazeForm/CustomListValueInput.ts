import type { UseFormRegister } from "react-hook-form";

export type CustomListValueInput<T> = (register: UseFormRegister<{[args:string]: T}>, label: string, key: string, required?: boolean, values?: string[] | number[])=>React.ReactNode;