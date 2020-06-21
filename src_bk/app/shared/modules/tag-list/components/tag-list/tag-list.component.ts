import { Component, Input } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';

@Component({
  selector: 'app-mc-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TaglistComponent {
  @Input('tags') tagsProps: PopularTagType[];
}
