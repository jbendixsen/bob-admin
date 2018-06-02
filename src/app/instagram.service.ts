import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IInstagram } from './instagram.model';

@Injectable()
export class InstagramService {
    constructor(private httpClient: HttpClient) {}

    getImage(code: string): Observable<IInstagram> {
        const url = `https://api.instagram.com/oembed?url=http://instagr.am/p/${code}`;
        return this.httpClient
            .get<IInstagram>(url)
            .pipe(
                catchError((err: any) =>
                    observableThrowError('There was an error')
                )
            );
    }
}
