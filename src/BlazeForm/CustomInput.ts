import type { UseFormRegister } from "react-hook-form";

export type CustomInput<T> = (register: UseFormRegister<{[args:string]: T}>, label: string, key: string, required?: boolean, _?: unknown)=>React.ReactNode;
