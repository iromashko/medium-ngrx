import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  tagName: string;
  apiUrl: string;

  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug');
    this.apiUrl = `/articles?tag=${this.tagName}`;
  }
}
