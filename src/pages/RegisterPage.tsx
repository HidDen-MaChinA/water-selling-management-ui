import { useNavigate } from "react-router";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../components/Button/AppButton";
import Logo from "../components/Layout/Logo";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { UserApiCallsHandler } from "../BlazeApiCalls/ApiCallsHandlers/UserApiCallsHandler";

const authProvider = new UserApiCallsHandler("/api/users");

export default function RegisterPage(){
    const navigate = useNavigate();
    const onSubmit : SubmitHandler<FieldValues> = (data)=>{
        authProvider.post(data, "/create").then(()=>{
          
          navigate("/login")
        });
    }
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="shadow-xl border p-5 rounded-xl border-blue-200">
            <div className="w-full flex justify-center">
                <Logo />
            </div>
          <BlazeBaseDynamicForm
            onSubmit={onSubmit}
            formStructure={[
              { label: "username", type: DynamiqueInputType._text },
              { label: "password", type: DynamiqueInputType._password },
              { label: "role", type: DynamiqueInputType._select, values: ["ADMIN", "USER"]},
            ]}
            customButton={{
                Component: AppButton,
                variant: true,
                text: "Register"
            }}
          />
        </div>
      </div>
    );
}