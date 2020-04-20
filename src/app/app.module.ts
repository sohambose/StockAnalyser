import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoricalDataService } from './historicaldata.services';
import { HttpClientModule } from '@angular/common/http';
import { ForexDataService } from './forexdata.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HistoricalDataService, ForexDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
