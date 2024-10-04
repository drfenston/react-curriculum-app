import Autre from "../autre";

export default class LatesteApkResponse {
    message: string;
    data: ApkResponse;
    
    constructor(
        message: string,
        data: ApkResponse
    ) {
        this.message = message;
        this.data = data;
    }    
}

class ApkResponse {
    constructor (
        public filename: string,
        public version: string,
        public path: string
        )
    {

    }
}