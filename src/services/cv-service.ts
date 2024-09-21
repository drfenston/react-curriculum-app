import CV from "../models/cv";
import CVSResponse from "../models/response/cvsResponse";
import CVResponse from "../models/response/cvResponse";
import AuthenticationService from './authentication-service';
import CreateLangueResponse from "../models/response/createLangueResponse";
import UploadProfileImageResponse from "../models/response/uploadProfileImageResponse";
import CreateFormationResponse from "../models/response/createFormationResponse";
import CreateCompTechResponse from "../models/response/createCompTechResponse";
import CreateAutreResponse from "../models/response/createAutreResponse";
import CreateExperienceResponse from "../models/response/createExperienceResponse";
import CreateProjetResponse from "../models/response/createProjetResponse";

export default class CVService {

    static uploadProfileImage(data: FormData): Promise<UploadProfileImageResponse> {
        return fetch("https://cyrilmaquaire.com/curriculum/api/uploadProfileImage", { 
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`
            },
            method: 'POST', 
            body: data 
        })
        .then(async (response) => {if(response.ok) return response.json()})
        .catch((error) => this.handleError(error));
    }

    static updateCV(cv: CV): Promise<CVSResponse> {
        const objWithoutId = { ...cv, id: undefined };
        return fetch(`https://cyrilmaquaire.com/curriculum/api/cv/${cv.id}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            
            body: JSON.stringify(objWithoutId)
        })
        .then(response => {if(response.ok) return response.json()})
        .catch(error => this.handleError(error));
    }

    static getCVS(userId: number): Promise<CVSResponse> {
        console.log(userId)
        return fetch(`https://cyrilmaquaire.com/curriculum/api/findAllCV/${userId}`)
            .then(response =>{
                console.log(response)// this is response from server, including all ok and error responses 
                if(response.ok)
                    return response.json()
                else{
                    console.log(response) ///error message for server should be in this response object only
                }
            })
            .catch(error => this.handleError(error));
    }

    static getCV(id: number): Promise<CVResponse | null> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/cv/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(error => this.handleError(error));
    }

    static createUser(username: string, password: string): Promise<CreateCompTechResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/user/`, {
            headers: { 
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({username, password})
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static createCompetenceTechnique(cvId: number): Promise<CreateCompTechResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/competenceTechnique/${cvId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static deleteCompetenceTechnique(compTechId: number): Promise<CreateLangueResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/competenceTechnique/${compTechId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static createExperience(cvId: number): Promise<CreateExperienceResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/experience/${cvId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        .then(response => {
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static deleteExperience(experienceId: number): Promise<CreateExperienceResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/experience/${experienceId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static createProjet(cvId: number): Promise<CreateProjetResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/projet/${cvId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static deleteProjet(projetId: number): Promise<CreateProjetResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/projet/${projetId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static createAutre(cvId: number): Promise<CreateAutreResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/autre/${cvId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static deleteAutre(autreId: number): Promise<CreateAutreResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/autre/${autreId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static createLangue(cvId: number): Promise<CreateLangueResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/langue/${cvId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static deleteLangue(langueId: number): Promise<CreateLangueResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/langue/${langueId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static createFormation(cvId: number): Promise<CreateFormationResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/formation/${cvId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static deleteFormation(langueId: number): Promise<CreateFormationResponse> {
        return fetch(`https://cyrilmaquaire.com/curriculum/api/formation/${langueId}`, {
            headers: { 
                'Authorization': `Bearer ${AuthenticationService.token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        .then(response => {
            console.log(response)// this is response from server, including all ok and error responses 
            if(response.ok)
                return response.json()
            else{
                console.log(response) ///error message for server should be in this response object only
            }
        })
        .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}