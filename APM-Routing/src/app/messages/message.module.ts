import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { SharedModule } from '../shared/shared.module';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MessageComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }
