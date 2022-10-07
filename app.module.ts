import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorDetailComponent } from './author/views/author-detail/author-detail.component';
import { AuthorListComponent } from './author/views/author-list/author-list.component';
import { TemplateFormStudentComponent } from './template-form-student/template-form-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    TemplateFormStudentComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
