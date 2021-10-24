import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlexCssComponent } from './flex-css/flex-css.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RegistrationComponent, FlexCssComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
