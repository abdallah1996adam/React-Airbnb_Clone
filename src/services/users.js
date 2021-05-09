import api from './api';


const userService = {
    registerUser : async (first_name, last_name, email, password, role)=>{
        const user = {first_name,last_name, email, password, role}
        return await api.post("/signup",user);
    },
    loginUser : async (email, password)=>{
        const userData = {email, password}
        return await api.post("/signin", userData);
    }
}



export default userService;