import { RedessociaisComponent } from './../component/redessociais/redessociais.component';
import { ProgramasComponent } from './../component/programas/programas.component';
import { PickupCallSlideComponent } from './../component/pickup-call-slide/pickup-call-slide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomepagePage,
  PickupCallSlideComponent,
  ProgramasComponent,
  RedessociaisComponent,]
  
})
export class HomepagePageModule {}
