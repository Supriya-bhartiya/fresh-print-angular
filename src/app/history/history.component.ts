import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {

  historyData: any = [];

  constructor(private historyService: HistoryService) {
    this.historyService.getHistory.subscribe((historyData: any) => {
      this.historyData = historyData;
    });
    console.log('this.historyData',this.historyData);
  }

  ngOnInit(): void {
  }

  clearHistory(){
    console.log('in----')
    this.historyService.clearHistory();
  }

}
