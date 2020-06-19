import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { ComponentsModule } from './components/components.module';
import { AuthModule } from './views/auth/auth.module';
import { DefaultComponent } from './containers/default/default.component';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ComponentsModule,
    AuthModule
  ]
})
export class FrontModule { }
