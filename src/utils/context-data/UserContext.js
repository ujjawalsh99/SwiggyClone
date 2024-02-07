const { createContext } = require("react");

const UserContext = createContext({
  username: "Default@gmail.com",
});

export default UserContext;
