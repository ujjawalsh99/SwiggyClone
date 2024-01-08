import React, { useState } from "react";
import { SWIGGY_SEARCH_API } from "../../utils/constants";
import { CDN_URL } from "../../utils/constants";

class SearchRestaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: null,
      resultRestaurantList: [],
    };
  }

  componentDidMount() {
    // console.log("Mount here");
  }

  componentDidUpdate(prevProps, prevState) {
    const fetchSearchResultBasedOnInput = async (data) => {
      // console.log("fetching..");
      const responseFromAPI = await fetch(SWIGGY_SEARCH_API + data);
      const jsonData = await responseFromAPI.json();
      if (jsonData?.statusCode == 0 && Object.keys(jsonData).includes("data")) {
        this.setState({
          resultRestaurantList: jsonData.data.suggestions,
        });
      } else {
        this.setState({
          resultRestaurantList: {},
        });
      }
    };
    if (prevState.searchText != this.state.searchText) {
      // console.log("prevState.searchText", prevState.searchText);
      // console.log("this.state.resultRestaurantList", this.state.searchText);
      fetchSearchResultBasedOnInput(this.state.searchText);
    }
  }

  componentWillUnmount() {}

  render() {
    // console.log("Render");
    return (
      <div className="w-screen min-h-screen p-1 bg-gray-100">
        <div className="relative w-3/6 m-auto mt-36">
          <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
            <svg
              id="search-icon"
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 text-sm text-gray-900 font-semibold border border-gray-400 rounded-md bg-gray-50 focus:outline-0"
            placeholder="Search for restaurant and food"
            autoComplete="off"
            onChange={(e) => {
              document.getElementById("search-icon").style.display = e.target
                .value
                ? "none"
                : "block";
              this.setState({
                searchText: e.target.value,
              });
            }}
          ></input>
        </div>
        <div
          className={
            this.state.resultRestaurantList.length
              ? "relative w-3/6 m-auto p-8 ps-4 flex flex-col gap-4"
              : "hidden"
          }
        >
          {this.state.resultRestaurantList.length ? (
            this.state.resultRestaurantList?.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 hover:bg-gray-200 py-3 rounded-md items-center"
              >
                <div>
                  <img
                    className="w-16 h-16 rounded-md"
                    src={CDN_URL + item.cloudinaryId}
                    alt="image"
                  ></img>
                </div>
                <div>
                  <div className="font-semibold">{item.text}</div>
                  <div className="font-extralight text-sm">{item.type}</div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading..</div>
          )}
        </div>
      </div>
    );
  }
}

// const SearchRestaurant = () => {
//   const [searchText, setSearchText] = useState(null);
//   useSearchRestaurant(searchText);
//   return (
//     <div className="w-screen h-screen p-1 bg-gray-100">
//       <div className="relative w-3/6 m-auto my-36">
//         <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
//           <svg
//             id="search-icon"
//             className="w-4 h-4 text-gray-500"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//         <input
//           type="search"
//           id="search"
//           className="block w-full p-4 text-sm text-gray-900 font-semibold border border-gray-400 rounded-md bg-gray-50 focus:outline-0"
//           placeholder="Search for restaurant and food"
//           autoComplete="off"
//           onChange={(e) => {
//             document.getElementById("search-icon").style.display = e.target
//               .value
//               ? "none"
//               : "block";
//             setSearchText(e.target.value);
//           }}
//         ></input>
//       </div>
//     </div>
//   );
// };

export default SearchRestaurant;
