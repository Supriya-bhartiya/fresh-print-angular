import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor() { }

    private history = new BehaviorSubject([]);

    public getHistory = this.history.asObservable();

    public setHistory(data: any) {
            this.history.next(data);
    }
    public clearHistory() {
        this.history.next([]);
}

}