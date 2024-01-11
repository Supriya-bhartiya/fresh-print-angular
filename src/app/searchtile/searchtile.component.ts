import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-searchtile',
  templateUrl: './searchtile.component.html',
  styleUrls: ['./searchtile.component.css']
})
export class SearchtileComponent implements OnInit {
  users: any = {};
  isUser: boolean = true;
  defaultiImageUrl = "https://picsum.photos/200/300";
  constructor(private service: ApiService) {
    this.service.getUserData.subscribe((userData: any) => {
      if (userData.isUser) {
        this.users = localStorage.getItem('users');
        this.users = JSON.parse(this.users);
      } else if (userData.isUser !== undefined) {
        this.isUser = userData.isUser;
      }
    });
  }

  ngOnInit() { }

}
