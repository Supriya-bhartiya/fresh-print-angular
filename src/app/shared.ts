export function checkState(response:string){
    let historyData:any = [];
    if (response === 'initial') {
        historyData = localStorage.getItem('history');
        historyData = historyData!=null?JSON.parse(historyData):[];
        return historyData;
      }
      if (response === 'add') {
        historyData = localStorage.getItem('history');
        historyData = JSON.parse(historyData);
        return historyData;
      }
      if (response === 'clear') {
        localStorage.removeItem('history');
        historyData = [];
        return historyData;
      }
      
}