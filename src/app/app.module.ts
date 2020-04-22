import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StockTechnicalComponent } from './stock-technical/stock-technical.component';
import { HeaderComponent } from './header/header.component'
import { StockTechnicalService } from './stock-technical/stock-technical.service';
import { HistoricalDataService } from './historicaldata.services';
import { ForexDataService } from './forexdata.service';

@NgModule({
  declarations: [
    AppComponent,
    StockTechnicalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockTechnicalService,HistoricalDataService,ForexDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
