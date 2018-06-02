import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    addImageReference = false;
    constructor(private router: Router) {}

    add() {
        this.addImageReference = true;
    }

    createNewReference() {
        this.addImageReference = false;
        console.log('Really create it');
    }
}
