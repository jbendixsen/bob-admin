import { Injectable, OnInit } from '@angular/core';

import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection
} from 'angularfire2/firestore';

import { throwError as observableThrowError, Observable } from 'rxjs';

import { InstagramDocument } from './app.models';

@Injectable()
export class FirebaseService {
    instagramDocumentCollection: AngularFirestoreCollection<InstagramDocument>;
    instagramDocuments$: Observable<InstagramDocument[]>;

    constructor(private afs: AngularFirestore) {
        this.instagramDocumentCollection = this.afs.collection(
            'dashboard-images'
        );
        this.instagramDocuments$ = this.instagramDocumentCollection.valueChanges();
    }

    get dashboardImages(): Observable<InstagramDocument[]> {
        return this.instagramDocuments$;
    }
}
