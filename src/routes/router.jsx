import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";
import FoodPurchase from "../pages/FoodPurchase";
import MyOrders from "../pages/MyOrders";
import AddFood from "../pages/AddFood";
import MyFoods from "../pages/MyFoods";
import UpdateFood from "../pages/UpdateFood";
import PrivateRoute from "./PrivateRoute";
import TopFoods from "../pages/TopFoods";

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
                path: 'topFoods',
                element: <TopFoods></TopFoods>
            },
            {
                path: "allfoods",
                element: <AllFoods></AllFoods>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: 'addFood',
                element:<PrivateRoute> <AddFood></AddFood></PrivateRoute>
            },
            {
                path: 'myFoods',
                element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            {
                path: 'updateFood/:id',
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
            },
            {
                path: "foodDetails/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "purchaseFood",
                element:<PrivateRoute> <FoodPurchase></FoodPurchase></PrivateRoute>
            },
            {
                path: "myOrders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
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
    },
    {
        path: "*",
        element: <div>404 - Page Not Found</div>
    }
])

export default router;