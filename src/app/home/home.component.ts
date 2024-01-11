import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any ={};
  isDisabled: boolean = true;
  history:any=[];

  constructor(private service: ApiService,private historyService :HistoryService) {
    this.historyService.getHistory.subscribe((historyData: any) => {
      this.history = historyData;
    });
   }
  

  ngOnInit() {}

  formData = {
    search: '',
  };

  onSearchTextChange() {
    if (this.formData.search !== '')
      this.isDisabled = false;
    else
      this.isDisabled = true;
  }

  onSubmit() {
    const username = this.formData.search.split(' ').join('');
    this.service.getUsers(username).subscribe({
      next: (data: any) => {
        const userData = {
          image_url: data.avatar_url ? data.avatar_url : null,
          username: data.login ? data.login : null,
        }
        this.results = userData;
        this.history.push({
          searchTerm: this.formData.search,
          searchValue:userData,
          createdAt:new Date()
        });
        this.historyService.setHistory(this.history);
      },
      error: (error) => {
        console.log('data---error',error);
        this.results = { message: 'No User Found!' }
        this.history.push({
          searchTerm: this.formData.search,
          searchValue: { message: 'No User Found!' },
          createdAt:new Date()
        });
        this.historyService.setHistory(this.history);
      }
    });
  }
}
