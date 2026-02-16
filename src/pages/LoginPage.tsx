import { useNavigate } from "react-router";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../components/Button/AppButton";
import Logo from "../components/Layout/Logo";

export default function LoginPage(){
    const navigate = useNavigate();
    const onSubmit = ()=>{
        navigate("/dashboard")
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
            ]}
            customButton={{
                Component: AppButton,
                text: "Login"
            }}
          />
        </div>
      </div>
    );
}