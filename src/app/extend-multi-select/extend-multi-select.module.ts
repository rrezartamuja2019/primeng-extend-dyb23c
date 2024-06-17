import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiSelectModule, MultiSelectItem} from 'primeng/multiselect';
import {TooltipModule} from 'primeng/tooltip';
import {ExtendMultiSelectComponent} from './extend-multi-select.component';

@NgModule({
  imports: [
    CommonModule,
    MultiSelectModule,
    TooltipModule
  ],
  declarations: [ExtendMultiSelectComponent, MultiSelectItem],
  exports: [MultiSelectModule, ExtendMultiSelectComponent]
})
export class ExtendMultiSelectModule { }