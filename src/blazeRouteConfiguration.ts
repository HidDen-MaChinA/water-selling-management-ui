import NotFound from "./not_found";
import createObjectRoutes from "./BlazeRouter/utils/createObjectRoutes";
import { ForbiddenPage } from "./forbidden_page";
import LandingPage from "./pages/LandingPage";
import { BlazeLayout } from "./BlazeLayout/BlazeLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ManageCustomersPage from "./pages/Customers/ManageCustomersPage";
import ManageQueuePage from "./pages/Queue/ManageQueuePage";
import Profile from "./pages/Profile";

const BlazeObjectRoutes = createObjectRoutes([
  {
    path: "*",
    ComponentPage: NotFound,
  },
  {
    path: "/forbidden",
    ComponentPage: ForbiddenPage,
  },
  {
    path: "/",
    ComponentPage: LandingPage,
  },
  {
    path: "/dashboard",
    Layout: BlazeLayout,
    ComponentPage: DashboardPage,
  },
  {
    path: "/customers",
    Layout: BlazeLayout,
    ComponentPage: ManageCustomersPage,
  },
  {
    path: "/queue",
    Layout: BlazeLayout,
    ComponentPage: ManageQueuePage,
  },
  {
    path: "/login",
    ComponentPage: LoginPage,
  },
  {
    path: "/profile",
    ComponentPage: Profile,
  },
]);

export default BlazeObjectRoutes;
