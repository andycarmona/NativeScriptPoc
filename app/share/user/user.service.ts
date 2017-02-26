import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Hero } from "./hero";

@Injectable()
export class UserService {

    private heroesUrl = "./heroes.json";

    constructor(private http: Http) {

    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    extractData(res: Response) {
        let body = res.json();
        console.dump("Hero object: "+ body);
        return body.data || {};
    }

    handleError() {
        return Promise.reject("Error");
    }
    register(user: User) {
        console.dump("user object: "+ user);
        alert("About to register: " + user.email);
    }
}