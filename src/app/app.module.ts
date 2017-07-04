import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { Step1Component } from './step1/step1.component'
import { Step2Component } from './step2/step2.component'
import { Step3Component } from './step3/step3.component'
import { SummaryComponent } from './summary/summary.component'
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component'

import { UserService } from './shared/user.service'
import { pageReducer } from './store/page'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'summary', component: SummaryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    SummaryComponent,
    BreadcrumbsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.provideStore({ page: pageReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
