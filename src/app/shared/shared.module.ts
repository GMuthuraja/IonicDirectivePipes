import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypipesPipe } from '../pipes/mypipes.pipe';
import { MydirectiveDirective } from '../directives/mydirective.directive';

@NgModule({
  declarations: [MypipesPipe, MydirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MypipesPipe,
    MydirectiveDirective
  ]
})

export class SharedModule { }
