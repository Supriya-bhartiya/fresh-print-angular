import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-searchtile',
  templateUrl: './searchtile.component.html',
  styleUrls: ['./searchtile.component.css']
})
export class SearchtileComponent implements OnInit {
  @Input() users:any= {};
  defaultiImageUrl = "https://picsum.photos/200/300";
  constructor() {}

  ngOnInit() { }

}
