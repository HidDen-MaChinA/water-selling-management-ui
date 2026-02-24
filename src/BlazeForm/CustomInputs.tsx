import type { UseFormRegister } from "react-hook-form";
import type { CustomInput } from "./CustomInput";
import type { ICustomInputs } from "./ICustomInputs";
import { v4 } from "uuid";
import type { CustomListValueInput } from "./CustomListValueInput";
import H6 from "../BlazeTypography/H6";
import { Text } from "../BlazeTypography/Text";

export class CustomInputs implements ICustomInputs {
  _date?: CustomInput<string | null> = displayDateInput;
  _file?: CustomInput<File | null> = displayFileInput;
  _number?: CustomInput<number> = displayNumberInput;
  _password?: CustomInput<string> = displayPasswordInput;
  _text?: CustomInput<string> = displayTextInput;
  _select?: CustomListValueInput<string | null> | undefined =
    displaySelectInput;
}

function toLowerCase(arg: string) {
  return arg.toLowerCase();
}
function firstCharToUpperCase(arg: string) {
  const lowerCaseArr = arg.toLowerCase().split("");
  lowerCaseArr[0] = lowerCaseArr[0].toUpperCase();
  return lowerCaseArr.join("");
}

function displayTextInput(
  register: UseFormRegister<{ [args: string]: string }>,
  label: string,
  key: string,
  required?: boolean
) {
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <input
        className="border w-full border-gray-700 px-1 py-1 rounded-md"
        type="text"
        {...register(label, { required: required })}
      />
    </div>
  );
}

function displayNumberInput(
  register: UseFormRegister<{ [args: string]: number }>,
  label: string,
  key: string,
  required?: boolean
) {
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <input
        className="w-full border border-gray-700 px-1 py-1 rounded-md"
        type="number"
        {...register(label, { required: required })}
      />
    </div>
  );
}

function displayPasswordInput(
  register: UseFormRegister<{ [args: string]: string }>,
  label: string,
  key: string,
  required?: boolean
) {
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <input
        className="w-full border border-gray-700 px-1 py-1 rounded-md"
        type="password"
        {...register(label, { required: required })}
      />
    </div>
  );
}

function displayFileInput(
  register: UseFormRegister<{ [args: string]: File | null }>,
  label: string,
  key: string,
  required?: boolean
) {
  const id = v4();
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <label
        htmlFor={id}
        className="flex justify-center border border-gray-700 px-1 py-1 rounded-md"
      >
        <Text>Import a file</Text>
        <input
          hidden
          id={id}
          type="file"
          {...register(label, { required: required })}
        />
      </label>
    </div>
  );
}

function displayDateInput(
  register: UseFormRegister<{ [args: string]: string | null }>,
  label: string,
  key: string,
  required?: boolean
) {
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <input
        className="w-full border border-gray-700 px-1 py-1 rounded-md"
        type="date"
        {...register(label, { required: required })}
      />
    </div>
  );
}

function displaySelectInput(
  register: UseFormRegister<{ [args: string]: string | null }>,
  label: string,
  key: string,
  required?: boolean,
  values?:{
    valueIdentifier?: string,
    value: string | number
  }[]
) {
  if (!values) {
    values = [];
  }
  if(values.length === 0){
    return <div></div>
  }
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <select 
        className="w-full border border-gray-700 px-1 py-1 rounded-md"
        defaultValue={values[0].value}
       {...register(label, { required: required })}>
        {values.map((value, index) => (
          <option value={value.value} key={`display-select-input-${value}-${index}`}>
            {firstCharToUpperCase(value.valueIdentifier || value.value.toString())}
          </option>
        ))}
      </select>
    </div>
  );
}
