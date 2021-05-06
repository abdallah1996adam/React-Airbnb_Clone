import api from './api';


const usersList = {
    registerUser : async (first_name, last_name, email, password, role)=>{
        return api.post("/signup",{first_name,last_name, email, password, role});
    },
    loginUser : async(email, password)=>{
        return api.post("/signin", {email, password});
    }
}



export default usersList;