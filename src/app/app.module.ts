import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { FirstComponent } from './first/first.component';
import { TestMModule } from './test-m/test-m.module';
import { TestDemoComponent } from './test-demo/test-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2ign3i7IhcmHHj97zTeqILHs4tZ9gwQ8' 
    }),
    TestMModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
