import CV from "../cv";

export default class CVSResponse {
    message: string;
    data: Array<CV>;
    
    constructor(
        message: string,
        data: Array<CV> = []
    ) {
        this.message = message;
        this.data = data;
    }
}