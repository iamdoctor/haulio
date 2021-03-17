import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MatSharedModule } from './mat-shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { LeftChildComponent } from './components/left-child/left-child.component';
import { RightChildComponent } from './components/right-child/right-child.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookingSuccessDialogComponent } from './components/booking-success-dialog/booking-success-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LeftChildComponent,
    RightChildComponent,
    HeaderComponent,
    NavBarComponent,
    BookingSuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSharedModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
