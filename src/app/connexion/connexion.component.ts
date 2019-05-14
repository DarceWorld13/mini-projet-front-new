import { Component, OnInit } from '@angular/core';
import { Collegue } from '../collegue';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


col:Collegue = new Collegue('', '');

  constructor(private srv:DataserviceService, private router:Router ) { }

  ngOnInit() {
  }

  valider(){
    this.srv.seConnecter(this.col.email, this.col.motDePasse).subscribe(col => {this.router.navigate(['/accueil']) },erreur=>{this.router.navigate(['/connect']) })
  }
}
