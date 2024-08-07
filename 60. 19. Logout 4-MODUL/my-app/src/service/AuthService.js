import axios from "./api";

const AuthService = {
    //constructor
    async userRegister() {
        const response = await axios.post("/users");
    },
    async userRegister() {
        const response = await axios.post("/users/login");
    },

    async getUser() {
        const response = await axios.get("/user");
    },
};
