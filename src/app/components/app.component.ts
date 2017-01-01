import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'my-app',
    template: `
    <div *ngFor="let message of query$ | async">
    {{message.text}}
    </div>`
})

export class AppComponent implements OnInit{
    text:string = 'BECOME MADNESS';
    
    query$ : FirebaseListObservable<any>;

    constructor( private af : AngularFire ){}

    ngOnInit(){
        this.query$ = this.af.database.list('messages');
        this.query$.subscribe( console.log );
    }
}