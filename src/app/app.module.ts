import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     /* configure app with AmplifyUIAngularModule */
  AmplifyUIAngularModule,
   /* configuring form modules */
   FormsModule,
   ReactiveFormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
