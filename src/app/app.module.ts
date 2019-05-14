import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ClassementComponent } from './classement/classement.component';
import { ConnexionGuard } from './connexion-guard.service';
import { InexistantComponent } from './inexistant/inexistant.component';

const appRoutes: Routes = [
  {path: 'connect', component: ConnexionComponent },
  {path:"",
canActivate:[ConnexionGuard],
children:[
  {path: 'accueil', component: AccueilComponent },
  {path:'classement', component:ClassementComponent},
  {path:"", pathMatch:"full", redirectTo:"accueil"},
  {path:"**", component:InexistantComponent}
]
}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent,
    ClassementComponent,
    InexistantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
