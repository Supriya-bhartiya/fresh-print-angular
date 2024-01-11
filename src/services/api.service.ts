import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }
    public getUsers(username: string) {
        let url = `https://api.github.com/users/${username}`;
        return this.httpClient.get(url);
    }

}