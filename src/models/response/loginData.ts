export default class LoginData {
    id: number
    username: string
    password: string
    createdAt: string
    updatedAt: string
    
    constructor(
        id: number,
        username: string,
        password: string,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}