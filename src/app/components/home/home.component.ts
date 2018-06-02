import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';

import { InstagramDocument } from '../../app.models';
import { FirebaseService } from '../../app.services';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    // instagramDocumentCollection: AngularFirestoreCollection<InstagramDocument>;
    instagramDocuments$: Observable<InstagramDocument[]>;

    // instagramDocument: AngularFirestoreDocument<InstagramDocument>;
    // instagramDoc: Observable<InstagramDocument>;

    // snapshot: any;

    newImage: FormGroup;

    constructor(
        private firebaseService: FirebaseService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.instagramDocuments$ = this.firebaseService.dashboardImages;

        this.newImage = this.fb.group({
            id: '',
            name: '',
            enabled: true
        });

        this.newImage.valueChanges.subscribe(console.log);

        // this.instagramDocumentCollection = this.afs.collection(
        //     'dashboard-images'
        // );
        // this.instagramDocuments = this.instagramDocumentCollection.valueChanges();
        // this.snapshot = this.instagramDocumentCollection
        //     .snapshotChanges()
        //     .subscribe(snap => console.log(snap));

        // this.instagramDocument = this.afs.doc(
        //     'dashboard-images/exHx14W5KSgrRUOrL0YZ'
        // );
        // this.instagramDoc = this.instagramDocument.valueChanges();
    }

    addInstagram() {
        // this.instagramDocumentCollection.add({
        //     id: 'BjT6OzUHvdU',
        //     name: 'NewDock',
        //     enabled: true
        // });
    }
}
