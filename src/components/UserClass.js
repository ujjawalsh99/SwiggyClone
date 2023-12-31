import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("Child Constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    // console.log("Child Component DidMount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps);
    console.log(prevState);
    console.log("Parent Component Did Update");
  }

  render() {
    // console.log("Child Render");
    const { name, location } = this.props;
    return (
      <div className="user-details">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: ++this.state.count,
            });
          }}
        >
          Button
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <p>Contact: @ujjawalsh99</p>
      </div>
    );
  }
}

export default UserClass;
