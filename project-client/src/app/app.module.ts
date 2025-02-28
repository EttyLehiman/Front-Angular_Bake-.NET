import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Component/main/main.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobDetailsComponent } from './Component/jobDetails/jobDetails.component';
import { ListJobsComponent } from './Component/list-jobs/list-jobs.component';
import { NameJobComponent } from './Component/name-job/name-job.component';
import { FilterComponent } from './Component/filter/filter.component';
import { ButtonStylingDirective } from './directive/button-styling.directive';
import { SelectStylingDirective } from './directive/select-styling.directive';
import { ResumeBuilderComponent } from './Component/resume-builder/resume-builder.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    JobDetailsComponent,
    ListJobsComponent,
    NameJobComponent,
    FilterComponent,
    ButtonStylingDirective,
    SelectStylingDirective,
    ResumeBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
