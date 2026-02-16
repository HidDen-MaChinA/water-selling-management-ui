import NotFound from "./not_found";
import createObjectRoutes from "./BlazeRouter/utils/createObjectRoutes";
import { ForbiddenPage } from "./forbidden_page";

const BlazeObjectRoutes = createObjectRoutes([
    {
        path: "*",
        ComponentPage: NotFound 
    },
    {
        path: "/forbidden",
        ComponentPage: ForbiddenPage
    }
])

export default BlazeObjectRoutes