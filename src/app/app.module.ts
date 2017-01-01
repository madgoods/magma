import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from  './components/app.component';
import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';


@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp( firebaseConfig )
        ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class AppModule{}
