import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from '@clr/angular';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { HomeComponent, InstagramCardComponent } from './components';
import { AngularFirestore } from 'angularfire2/firestore';

import { FirebaseService } from './app.services';
import { InstagramService } from './instagram.service';

@NgModule({
    declarations: [AppComponent, HomeComponent, InstagramCardComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [AngularFirestore, FirebaseService, InstagramService],
    bootstrap: [AppComponent]
})
export class AppModule {}
