import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";

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
            },
            {
                path: "foodDetails/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "gallery",
                element: <Gallery></Gallery>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    }
])

export default router;