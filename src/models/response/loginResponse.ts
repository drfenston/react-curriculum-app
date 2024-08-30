import LoginData from "./loginData";

export default class LoginResponse {
    // 1. Typage des propiétés d'un pokémon.
    message: string
    data: LoginData
    token: string
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        message: string,
        data: LoginData, 
        token: string
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.message = message;
        this.data = data;
        this.token = token;
    }
}