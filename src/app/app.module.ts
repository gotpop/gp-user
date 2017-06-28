import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { SummaryComponent } from './summary/summary.component';

import { UserService } from './shared/user.service'



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    SummaryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
