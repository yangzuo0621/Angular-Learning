import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
