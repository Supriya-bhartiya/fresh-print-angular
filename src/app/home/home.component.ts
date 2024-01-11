import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiService) { }
  results: any;
  isDisabled: boolean = true;

  ngOnInit() {
  }

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
        localStorage.setItem('users', JSON.stringify(userData));
        this.service.setUserData(userData);
      },
      error: (error) => {
        this.service.setUserData({ message: 'No User Found!' });
      }
    });
  }
}
