import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {

  historyData: any=[];

  constructor(private historyService: HistoryService) {
    this.historyService.getHistory.subscribe((response: string) => {
      if (response === 'initial') {
        this.historyData = localStorage.getItem('history');
        this.historyData = JSON.parse(this.historyData);
      }
      if (response === 'add') {
        this.historyData = localStorage.getItem('history');
        this.historyData = JSON.parse(this.historyData);
      }
      if (response === 'clear') {
        localStorage.removeItem('history');
        this.historyData = [];
      }
    });
  }

  ngOnInit(): void {
    
  }

  clearHistory() {
    this.historyService.clearHistory();
  }

}
