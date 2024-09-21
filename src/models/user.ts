export default class User {
    // 1. Typage des propiétés d'un User.
    id: number;
    username: string;
    password: string;
    token: string;
    

    // 2. Définition des valeurs par défaut des propriétés d'un user.
    constructor(
        id: number,
        username: string,
        password: string,
        token: string,
    ) {
        // 3. Initialisation des propiétés d'un user.
        this.id = id;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}