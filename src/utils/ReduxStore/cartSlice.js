import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cartItems: [
    //   {
    //     id: "89507163",
    //     name: "Barbeque Paneer Rice Bowl (Mini)",
    //     category: "Honest Bowls",
    //     description:
    //       "Serves 1 | Fresh cilantro rice and everything nice. Comes with your favourite toppings, fajita veggies like bell peppers and onions, pico de galla and grilled BBQ Paneer. Make it just the way you like it!",
    //     imageId: "f590ac3a24773c350ccc5e8dcfcbd808",
    //     inStock: 1,
    //     isVeg: 1,
    //     price: 25900,
    //     variants: {},
    //     variantsV2: {},
    //     addons: [
    //       {
    //         groupId: "53873835",
    //         groupName: "Customize your Toppings",
    //         choices: [
    //           {
    //             id: "44149039",
    //             name: "No Rice",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149040",
    //             name: "No Black Beans",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149041",
    //             name: "No Pinto Beans",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149042",
    //             name: "No Grilled Onion & Capsicum",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149043",
    //             name: "No Corn Salsa",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149044",
    //             name: "No Sour Cream",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149045",
    //             name: "No Fresh Tomato and Onion Salsa",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149046",
    //             name: "No Tomatillo Roasted Salsa",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149047",
    //             name: "No Tomatillo Red Chili Salsa",
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //         ],
    //         maxAddons: 9,
    //         maxFreeAddons: -1,
    //       },
    //       {
    //         groupId: "53873840",
    //         groupName: "Add Extra Fillings",
    //         choices: [
    //           {
    //             id: "44149055",
    //             name: "Extra Peri Peri Potato",
    //             price: 3500,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149053",
    //             name: "Extra Crispy Mushroom",
    //             price: 7500,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149052",
    //             name: "Extra BBQ Paneer",
    //             price: 8500,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149054",
    //             name: "Extra Mexican Spicy Paneer",
    //             price: 8500,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149057",
    //             name: "Extra Crispy Peri Peri Chicken",
    //             price: 8500,
    //             inStock: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149056",
    //             name: "Extra BBQ Chicken",
    //             price: 8500,
    //             inStock: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149058",
    //             name: "Extra Chili Chipotle Chicken",
    //             price: 8500,
    //             inStock: 1,
    //             isEnabled: 1,
    //           },
    //         ],
    //         maxAddons: 7,
    //         maxFreeAddons: -1,
    //       },
    //       {
    //         groupId: "53873837",
    //         groupName: "Make It Rich (Mini)",
    //         choices: [
    //           {
    //             id: "44149031",
    //             name: "Guacamole",
    //             price: 9900,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149035",
    //             name: "Crushed Corn Chips",
    //             price: 2000,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149038",
    //             name: "Extra Sour Cream",
    //             price: 3500,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149036",
    //             name: "Extra Chipotle Mayo",
    //             price: 3000,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149034",
    //             name: "Melted Cheese Queso",
    //             price: 4900,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "60613807",
    //             name: "Extra Southwest Sauce",
    //             price: 3000,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149032",
    //             name: "Mango Salsa",
    //             price: 4000,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //         ],
    //         maxAddons: 7,
    //         maxFreeAddons: -1,
    //       },
    //       {
    //         groupId: "53873839",
    //         groupName: "Add Extra Toppings",
    //         choices: [
    //           {
    //             id: "44149049",
    //             name: "Extra Jalapenos",
    //             price: 3000,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149050",
    //             name: "Extra Cheese",
    //             price: 3500,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149048",
    //             name: "Extra Lettuce",
    //             price: 3000,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //           {
    //             id: "44149051",
    //             name: "Extra Corn Salsa",
    //             price: 3000,
    //             inStock: 1,
    //             isVeg: 1,
    //             isEnabled: 1,
    //           },
    //         ],
    //         maxAddons: 4,
    //         maxFreeAddons: -1,
    //       },
    //     ],
    //     itemAttribute: {
    //       vegClassifier: "VEG",
    //       portionSize: "Serves 1",
    //     },
    //     ribbon: {
    //       text: "Bestseller",
    //       textColor: "#ffffff",
    //       topBackgroundColor: "#d53d4c",
    //       bottomBackgroundColor: "#b02331",
    //     },
    //     showImage: true,
    //     itemBadge: {},
    //     badgesV2: {},
    //     isBestseller: true,
    //     ratings: {
    //       aggregatedRating: {
    //         rating: "4.5",
    //         ratingCount: "123 ratings",
    //         ratingCountV2: "123",
    //       },
    //     },
    //   },
    // ],
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      /**
       * In VaniallaJs (older) Redux => It says, Don't MUTATE State, returning was mandatory
       * So, what we do earlier,
       * const newState = [...state]  //We create a copy of the state;
       * newState.cartItems.push(action.payload);
       * return newState;
       */

      /**
       * In Redux Toolkit (Newer) => It says, We HAVE to MUTATE State, returning wasn't mandatory.
       * In the current Redux Toolkit, Redux still doing all the VaniallaJs stuffs but it is doing behind the scene, developers no need to do it explicitly.
       * Redux use Immer library behind the scenes to find difference between the original state and the mutated state and then giving the new state which is the immutable state.
       */
      state.cartItems.push(action.payload);
    },
    removeItems: (state, action) => {
      let indexOfItemInCartSlice = state.cartItems.findIndex((item) => item.id == action.payload);
      state.cartItems.splice(indexOfItemInCartSlice, 1);
    },
    clearCart: (state, action) => {
      // state = []   - we can't do this because this is not mutating the state, it is just adding a reference to it
      state.cartItems.length = 0; // here we are mutating the state
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItems, clearCart } = cartSlice.actions;
