import { Component, OnInit, Input } from '@angular/core';
import { IInstagram } from '../../instagram.model';

@Component({
    selector: 'app-instagram-card',
    templateUrl: './instagram-card.component.html',
    styleUrls: ['./instagram-card.component.scss']
})
export class InstagramCardComponent implements OnInit {
    @Input() instagram: IInstagram;

    basic = false;

    constructor() {}

    ngOnInit() {}

    delete(id: string) {
        this.basic = true;
        // this.instagramDocumentCollection.doc(`dashboard-images/${id}`).delete();
        // console.log(id);
    }

    confirmedDelete() {
        this.basic = false;
        console.log('Yes, really remove this image');
    }
}
