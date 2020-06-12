import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaglistComponent } from './components/tag-list/tag-list.component';
@NgModule({
  imports: [CommonModule],
  declarations: [TaglistComponent],
  exports: [TaglistComponent],
})
export class TaglistModule {}
