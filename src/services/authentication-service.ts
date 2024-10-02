import LoginResponse from "../models/response/loginResponse";

export default class AuthenticationService {

    static token:string = localStorage.getItem('token') || "";
    static user:string = localStorage.getItem('user') || "";

    static login(username: string, password: string): Promise<LoginResponse> {
      return fetch(`https://cyrilmaquaire.com/curriculum/api/login/`, {
            headers: { 
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    static handleError(error: Error): void {
        console.error(error);
    }
  }