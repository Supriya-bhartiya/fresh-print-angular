import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fresh-print';


  currentUrl : string;

constructor(private _router : Router){
    this.currentUrl = ''
}

ngOnInit() {
    // this._router.subscribe(
    //     currentUrl => this.currentUrl = currentUrl,
    //     error => console.log(error)
    // );
}

isCurrentRoute(route : string) : boolean {
    return this._router.url === route;
 } 
}
