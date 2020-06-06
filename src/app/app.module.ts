import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OrderbyPipe } from './order-by.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Import neccessary module & component
@NgModule({
  declarations: [
    AppComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
