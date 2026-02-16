import NotFound from "./not_found";
import createObjectRoutes from "./BlazeRouter/utils/createObjectRoutes";
import { ForbiddenPage } from "./forbidden_page";
import LandingPage from "./pages/LandingPage";
import { BlazeLayout } from "./BlazeLayout/BlazeLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const BlazeObjectRoutes = createObjectRoutes([
    {
        path: "*",
        ComponentPage: NotFound 
    },
    {
        path: "/forbidden",
        ComponentPage: ForbiddenPage
    },
    {
        path: "/",
        ComponentPage: LandingPage
    },
    {
        path: "/dashboard",
        Layout: BlazeLayout,
        ComponentPage: DashboardPage
    },
    {
        path: "/login",
        ComponentPage: LoginPage
    }
])

export default BlazeObjectRoutes