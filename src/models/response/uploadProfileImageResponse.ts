import Formation from "../formation";

export default class UploadProfileImageResponse {
    message: string;
    data: Example;
    
    constructor(
        message: string,
        data: Example
    ) {
        this.message = message;
        this.data = data;
    }    
}

class Example {
    constructor (
        public fieldname: string,
        public originalname: string,
        public encoding: string,
        public mimetype: string,
        public destination: string,
        public filename: string,
        public path: string,
        public size: number
        )
    {

    }
}