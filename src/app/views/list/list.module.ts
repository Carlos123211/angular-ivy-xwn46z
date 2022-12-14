import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ListComponent],
  bootstrap: [],
  providers: [],
})
export class ListModule {}
