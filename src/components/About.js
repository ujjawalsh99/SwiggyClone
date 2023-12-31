import User from "./User";
import UserClass from "./UserClass";
import { Component, useState } from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quam ab
//         eius ex nemo ipsa nam aliquid dicta tenetur nostrum?
//       </p>
//       {/* <img style={{width: '900px'}} src="https://static.vecteezy.com/system/resources/previews/007/932/867/original/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg" alt="About US"></img> */}
//       {/*<User
//         name={"Ujjawal Shrivastava"}
//         location={"Ghaziabad, Uttar Pradesh"}
//       />*/}
//       <UserClass
//         name={"Ujjawal Shrivastava"}
//         location={"Ghaziabad, Uttar Pradesh"}
//       />
//     </div>
//   );
// };

class About extends Component {
  constructor() {
    super();
    this.state = {
      newHeading: "About Us",
    };
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps);
    console.log(prevState);
    console.log(this.state.newHeading);
    console.log("Parent Component Did Update");
  }

  componentWillUnmount(){
    // console.log("Parent Component will unmount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>{this.state.newHeading}</h1>
        <button
          onClick={() => {
            this.setState({
              newHeading: "About Us Descriptions",
            });
          }}
        >
          Click Here
        </button>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quam ab
          eius ex nemo ipsa nam aliquid dicta tenetur nostrum?
        </p>
        <UserClass
          name={"Ujjawal Shrivastava"}
          location={"Ghaziabad, Uttar Pradesh"}
        />
      </div>
    );
  }
}

export default About;
