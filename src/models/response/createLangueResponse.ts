import Langue from "../langue";

export default class CreateLangueResponse {
    message: string;
    data: Langue;
    
    constructor(
        message: string,
        data: Langue
    ) {
        this.message = message;
        this.data = data;
    }
}