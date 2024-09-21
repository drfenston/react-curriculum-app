import CV from "../cv";

export default class CVResponse {
    message: string;
    data: CV;
    
    constructor(
        message: string,
        data: CV
    ) {
        this.message = message;
        this.data = data;
    }
}