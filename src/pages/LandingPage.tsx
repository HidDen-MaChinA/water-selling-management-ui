import H1 from "../BlazeTypography/H1";
import { Text } from "../BlazeTypography/Text";
import { AppButton } from "../components/Button/AppButton";
import LoginLink from "../components/CTAs/LoginLink";

export default function LandingPage(){
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="flex-col flex items-center gap-3">
                <H1 className="text-blue-700">WSManage-UI</H1>
                <div>
                    <LoginLink href="/login">Login</LoginLink>
                </div>
            </div>
        </div>
    )
}