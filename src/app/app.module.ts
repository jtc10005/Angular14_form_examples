import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { FormBuiderTypedFormComponent } from './form-example/form-buider-typed-form/form-buider-typed-form.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { TemplateFormComponent } from './form-example/template-form/template-form.component';
import { ManualTypedFormComponent } from './form-example/manual-typed-form/manual-typed-form.component';

@NgModule({
  declarations: [
    FormExampleComponent,
    FormBuiderTypedFormComponent,
    ManualTypedFormComponent,
    AppComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
