import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Challenge2Component,
    Challenge3Component,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    FormsModule
  ],
  providers: [
    provideIonicAngular({})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

