import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../collegue';
import { DataserviceService } from '../services/dataservice.service';
import { Subject, Observable } from 'rxjs';
import { CollegueAModifier } from '../collegue-amodifier';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  liste:Collegue[];

  constructor(private srv:DataserviceService) { }

  ngOnInit() {

    this.srv.afficherInfo().subscribe(tab=>this.liste =tab);

  }



//lorsqu'on clique sur thumbs up, on incrémente le score; depuis cette page, le score doit pouvoir changer;
incrementer(email:string){

return this.srv.augmenterScore(email).subscribe();

}

decrementer(email:string){
  return this.srv.diminuerScore(email).subscribe();
}







}
