import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    private isUserData = new BehaviorSubject({});

    public getUserData = this.isUserData.asObservable();

    public setUserData(data: any) {
        if (data && data.image_url) {
            this.isUserData.next({ isUser: true });
        } else {
            this.isUserData.next({ isUser: false });
        }
    }

    public getUsers(username: string) {
        let url = `https://api.github.com/users/${username}`;
        return this.httpClient.get(url);
    }

}