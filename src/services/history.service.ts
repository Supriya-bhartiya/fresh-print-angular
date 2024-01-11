import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor() { }

    private history = new BehaviorSubject('initial');

    public getHistory = this.history.asObservable();

    public setHistory(data: any) {
        localStorage.setItem('history',JSON.stringify(data));
        this.history.next('add');
    }
    public clearHistory() {
        this.history.next('clear');
}

}