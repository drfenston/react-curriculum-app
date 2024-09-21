import Autre from "../autre";

export default class CreateAutreResponse {
    message: string;
    data: Autre;
    
    constructor(
        message: string,
        data: Autre
    ) {
        this.message = message;
        this.data = data;
    }
}