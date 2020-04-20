import { Component } from '@angular/core';
import { HistoricalDataService } from './historicaldata.services';
import { ForexDataService } from './forexdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  days: number = 10;
  sum: number = 0;
  avg: number = 0;
  isVolumeIncreased: boolean = false;

  title = 'StockAnalyser';
  isFetching: boolean = true;
  candles = [];

  constructor(private historicalDataService: HistoricalDataService,
    private forexDataService: ForexDataService) {
  }

  //#region <--------Button CLick Functions---------------> 
  onfetchHistoricalData() {
    this.getHistoricalDataFromService();
  }

  onfetchFXData() {
    this.getFXLiveDataFromService();
  }
  //#endregion

  private getHistoricalDataFromService() {
    this.isFetching = true;
    this.historicalDataService.fetchHistoricalData().subscribe(data => {
      this.isFetching = false;
      console.log(data);      
      this.candles = data;
      this.dovolumneAnalysis(data);
    }, error => {
      console.log(error.message);
    });
  }

  private dovolumneAnalysis(arrData) {
    alert('In func');
    for (let i = 0; i < this.days - 1; i++) {
      console.log(arrData[i]["5. volume"]);
      this.sum = this.sum + Number(arrData[i]["5. volume"]);
    }
    alert(this.sum);
    this.avg = Number(this.sum) / Number(this.days);    
    if (this.avg < Number(arrData[this.days - 1]["5. volume"])){
      this.isVolumeIncreased = true;
    }
     
  }

  private getFXLiveDataFromService() {
    this.isFetching = true;
    this.forexDataService.fetchLiveFXRate().subscribe(data => {
      this.isFetching = false;
      console.log(data);
    }, error => {
      console.log(error.message);
    });
  }



}
