export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const RESTAURANT_DASHBOARD_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6773353&lng=77.3464618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

export const RestaurantDetailURL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6773353&lng=77.3464618&restaurantId="
  );

export const BANK_OFFER_ICON_SIZE = "fl_lossy,f_auto,q_auto,w_28,h_28/";

export const SWIGGY_SEARCH_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.5355161&lng=77.3910265&str="
  );

export const CareerDomains = [
  {
    id: 1,
    title: "Technology",
    apiKey: "technology",
  },
  {
    id: 2,
    title: "Business",
    apiKey: "business",
  },
  {
    id: 3,
    title: "Cloud Kitchen",
    apiKey: "cloudKitchen",
  },
  {
    id: 4,
    title: "Customer Care",
    apiKey: "customerCare",
  },
  {
    id: 5,
    title: "Campus",
    apiKey: "campus",
  },
  {
    id: 6,
    title: "Corporate Support Functions",
    apiKey: "corporate",
  },
];

// function console1() {
//   console.log("Console 1");
// }

// function console2() {
//   console.log("Console 2");
// }

// function console3() {
//   console.log("Console 3");
// }

// export { console1 as default, console2, console3 };
