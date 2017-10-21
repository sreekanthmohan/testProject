import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { AuthenticationService } from './index';
import { User } from '../_models/index';
import { Person } from '../_models/user'
import { HttpCommonService } from './http-common.service'

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService,
        private httpCommon: HttpCommonService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }

    postTest(hero: Person): Observable<Person> {
        console.log("service called")
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        // fake backend url : "/api/test"
        // external api call link : "http://demo9952451.mockable.io/user"
        return this.http.post('/api/test', options, this.httpCommon.options)
            .map(
            response => <any>response.json()
            )
            .catch(err => { throw err; })

    }



}