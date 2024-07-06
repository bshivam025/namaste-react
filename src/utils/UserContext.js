import { createContext } from "react";

const UserContext = createContext({
    loggenInUser: "Default User",
});

export default UserContext;