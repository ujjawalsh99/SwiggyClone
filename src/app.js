import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.js";
import Body from "./components/Dashboard/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import OffersComponent from "./components/Offers/Offers.js";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetail/RestaurantDetails.js";
// import { default as alpha, console2, console3 } from "./utils/constants";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const InstaMart = lazy(() => import("./components/Instamart/Instamart.js"));
const Career = lazy(() => import("./components/Career.js"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <OffersComponent />,
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<div>Loading......</div>}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/restaurant-details/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<div>Loading......</div>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
