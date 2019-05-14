import { Component } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { Collegue } from './collegue';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-projet-front';

  url = environment.urlPost;

  logout="/logout"

  liste:Collegue[];
  constructor(private srv:DataserviceService, private _http:HttpClient){}

 ngOnInit(): void {

  this.srv.afficherInfo().subscribe(tab=>this.liste =tab);
 }

 seDeconnecter(){
  return this._http.request('POST',`${this.url}${this.logout}`, {"withCredentials": true} );
  }


}
