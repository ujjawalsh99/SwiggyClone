import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.js";
import Body from "./components/Dashboard/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import UserContext from "./utils/context-data/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/ReduxStore/store.js";
import Cart from "./components/Cart/Cart.js";
// import { default as alpha, console2, console3 } from "./utils/constants";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <UserContext.Provider value={{ username: "ujjawalsh99@gmail.com" }}>
          <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

const InstaMart = lazy(() => import("./components/Instamart/Instamart.js"));
const Career = lazy(() => import("./components/Career.js"));
const SearchRestaurant = lazy(() =>
  import("./components/Search/SearchRestaurant.js")
);
const RestaurantDetails = lazy(() =>
  import("./components/RestaurantDetail/RestaurantDetails.js")
);

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
        path: "/search",
        element: (
          <Suspense
            fallback={
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            }
          >
            <SearchRestaurant />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense
            fallback={
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            }
          >
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/restaurant-details/:id",
        element: (
          <Suspense
            fallback={
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            }
          >
            <RestaurantDetails />
          </Suspense>
        ),
      },
      {
        path: "/instamart",
        element: (
          <Suspense
            fallback={
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            }
          >
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
