import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { CollegueAModifier } from '../collegue-amodifier';
import { Collegue } from '../collegue';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  liste:Collegue[];

  constructor(private srv:DataserviceService) { }

  ngOnInit() {
    this.srv.afficherInfo().subscribe(tab=>this.liste =tab);
  }




}
