import User from "../user";

export default class CreateUserResponse {
    message: string;
    data: User;
    
    constructor(
        message: string,
        data: User
    ) {
        this.message = message;
        this.data = data;
    }
}