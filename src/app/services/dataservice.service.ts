import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../collegue';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { CollegueAModifier } from '../collegue-amodifier';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  urlback = environment.urlPost;
  urlEnPlus = "/test";
  connected = false;
  likes ="/likes";
  paramEmail="?email=";
  dislikes="/dislikes";

  constructor(private _http:HttpClient) { }

  seConnecter(email:string, motDePasse:string){
    return this._http.post<Collegue>(`${this.urlback}${this.urlEnPlus}`, {"email":email, "motDePasse":motDePasse},{"withCredentials": true})
    .pipe( tap(col => { this.connected = true; })
    )
  }

  afficherInfo() : Observable<Collegue[]>{
    return this._http.get<Collegue[]>(`${this.urlback}${this.urlEnPlus}`, {"withCredentials": true})
  }


//poster l'incrémentation
augmenterScore(email:string){
 return this._http.patch<CollegueAModifier>(`${this.urlback}${this.urlEnPlus}${this.likes}${this.paramEmail}${email}`,null, {"withCredentials": true})
}

//poster la décrémentation
diminuerScore(email:string){
  return this._http.patch<CollegueAModifier>(`${this.urlback}${this.urlEnPlus}${this.dislikes}${this.paramEmail}${email}`,null,{"withCredentials": true})
}

isLoggedIn(){
  return this.connected;
}






}






