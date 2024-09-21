import LoginData from "./loginData";

export default class LoginResponse {
    message: string
    data: LoginData
    token: string
    
    constructor(
        message: string,
        data: LoginData, 
        token: string
    ) {
        this.message = message;
        this.data = data;
        this.token = token;
    }
}