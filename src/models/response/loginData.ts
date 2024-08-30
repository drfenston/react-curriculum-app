export default class LoginData {
    // 1. Typage des propiétés d'un pokémon.
    id: number
    username: string
    password: string
    createdAt: string
    updatedAt: string
    

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        username: string,
        password: string,
        createdAt: string,
        updatedAt: string
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}