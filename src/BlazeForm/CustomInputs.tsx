import type { UseFormRegister } from "react-hook-form";
import type { CustomInput } from "./CustomInput";
import type { ICustomInputs } from "./ICustomInputs";
import H6 from "../components/Typography/H6";
import { v4 } from "uuid";
import { Text } from "../components/Typography/Text";
import type { CustomListValueInput } from "./CustomListValueInput";

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
        {...register(toLowerCase(label), { required: required })}
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
        {...register(toLowerCase(label), { required: required })}
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
        {...register(toLowerCase(label), { required: required })}
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
          {...register(toLowerCase(label), { required: required })}
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
        {...register(toLowerCase(label), { required: required })}
      />
    </div>
  );
}

function displaySelectInput(
  register: UseFormRegister<{ [args: string]: string | null }>,
  label: string,
  key: string,
  required?: boolean,
  values?: string[] | number[]
) {
  if (!values) {
    values = [];
  }
  return (
    <div className="pt-2" key={key}>
      <H6>{firstCharToUpperCase(label)}</H6>
      <select 
        className="w-full border border-gray-700 px-1 py-1 rounded-md"
        defaultValue={values[0]}
       {...register(toLowerCase(label), { required: required })}>
        {values.map((value, index) => (
          <option value={value} key={`display-select-input-${value}-${index}`}>
            {firstCharToUpperCase(value.toString())}
          </option>
        ))}
      </select>
    </div>
  );
}
