import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent
  ],
  declarations: [
    StarComponent,
  ]
})
export class SharedModule { }
