import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _router : Router){
}

  ngOnInit(): void {
  }
  
  isCurrentRoute(route : string) : boolean {
    return this._router.url === route;
 } 
}
