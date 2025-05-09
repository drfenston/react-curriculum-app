import Projet from "../projet";

export default class CreateProjetResponse {
    message: string;
    data: Projet;
    
    constructor(
        message: string,
        data: Projet
    ) {
        this.message = message;
        this.data = data;
    }
}