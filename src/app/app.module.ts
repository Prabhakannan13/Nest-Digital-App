import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { AddleaveComponent } from './addleave/addleave.component';
import { ViewallleaveComponent } from './viewallleave/viewallleave.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addemp",component:AddempComponent
  },
  {
    path:"viewemp",component:ViewempComponent
  },
  {
    path:"addleave",component:AddleaveComponent
  },
  {
    path:"viewleave",component:ViewallleaveComponent
  },
  {
    path:"addsecurity",component:AddsecurityComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddempComponent,
    ViewempComponent,
    AddleaveComponent,
    ViewallleaveComponent,
    AddsecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
