import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTableModule } from '@angular/material/table';
import { GeneralService } from './service/general.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './views/list/list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [GeneralService],
})
export class AppModule {}
