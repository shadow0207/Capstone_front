import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDashboardComponent } from './appDashboard.component';
import { UserComponent } from './user/user.component';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { AddUserComponent } from './user/addUser.component';
import { LoginComponent } from './user/login.component';

import { UserService } from './user/user.service';
import { MessageService } from './message/message.service';
import { CircleService } from './circle/circle.service';

import { HttpModule } from '@angular/http';
import { AppRoutingModule, routing } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,AppDashboardComponent,
    UserComponent,
    CircleComponent,
    MessageComponent, AddUserComponent, LoginComponent

  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, BrowserAnimationsModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
    MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, FormsModule
    , routing],
  providers: [UserService, MessageService, CircleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
