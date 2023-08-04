import { Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
    return (
        <div>Start
            <Outlet />
        </div>
    );
}
