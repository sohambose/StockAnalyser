import { Component, OnInit } from '@angular/core';
import { StockTechnicalService } from './stock-technical.service';

@Component({
  selector: 'app-stock-technical',
  templateUrl: './stock-technical.component.html',
  styleUrls: ['./stock-technical.component.css']
})
export class StockTechnicalComponent implements OnInit {

  numDays: number = 10;
  isFetchingFromServer: boolean = false;
  arrcandles = [];
  isVolumeIncreased: boolean = false;

  constructor(private stocktechnicalservice: StockTechnicalService) { }

  ngOnInit(): void {
  }

  onStartTechnicalAnalysis() {
    //---------Fetch Data From Server and Display OHLCV Data---------------
    this.isFetchingFromServer = true;
    this.stocktechnicalservice.getHistoricalData().subscribe(data => {
      this.isFetchingFromServer = false;
      this.arrcandles = data;
    }, error => {
      console.log(error.message);
    });
    //----------------------------------------------------------------------

    this.isVolumeIncreased=this.stocktechnicalservice.dovolumneAnalysis(this.arrcandles,this.numDays);


  }

}
