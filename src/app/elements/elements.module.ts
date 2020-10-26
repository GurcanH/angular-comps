import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlacholderComponent } from './placholder/placholder.component';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [ElementsHomeComponent, PlacholderComponent, TimesDirective],
  imports: [CommonModule, ElementsRoutingModule],
})
export class ElementsModule {}
