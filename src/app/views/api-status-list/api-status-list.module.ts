import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiStatusComponent } from './components/api-status/api-status.component';
import {ApiStatusRoutingModule} from './apiStatus-routing.module';

@NgModule({
  declarations: [ApiStatusComponent],
  imports: [
    CommonModule,
    ApiStatusRoutingModule
  ]
})
export class ApiStatusListModule { }
