import { Component } from '@angular/core';
import { HistoricalDataService } from './historicaldata.services';
import { ForexDataService } from './forexdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockAnalyser';
  isFetching: boolean = true;

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
    }, error => {
      console.log(error.message);
    });
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
