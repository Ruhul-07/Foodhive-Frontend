import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allfoods",
                element: <AllFoods></AllFoods>,
                loader: () => fetch('http://localhost:5000/foods')
            }
        ]
    }
])

export default router;