import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    RouterModule
  ]
})
export class ThemeModule { }
