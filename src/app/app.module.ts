import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';

import {AppComponent}  from './app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(rootRouterConfig, {useHash: true})],
  declarations: [AppComponent, AboutComponent, HomeComponent, ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
