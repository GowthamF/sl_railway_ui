import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SelectDropdownComponent } from './selection-dropdown/selection-dropdown.component';
import { DatePickComponent } from './date-pick/date-pick.component';
import { ClearButtonComponent } from './clear-button/clear-button.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { ScheduleAddtionalDataComponent } from './schedule-addtional-data/schedule-addtional-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleService } from './services/schedule.service';
import { StationsService } from './services/stations.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SelectDropdownComponent,
    DatePickComponent,
    ClearButtonComponent,
    SearchButtonComponent,
    ScheduleTableComponent,
    ScheduleAddtionalDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ScheduleService, StationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
