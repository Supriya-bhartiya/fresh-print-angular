import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { checkState } from '../shared'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {

  historyData: any=[];

  constructor(private historyService: HistoryService) {
    this.historyService.getHistory.subscribe((response: string) => {
      this.historyData = checkState(response);
    });
  }

  ngOnInit(): void {
    
  }

  clearHistory() {
    this.historyService.clearHistory();
  }

}
