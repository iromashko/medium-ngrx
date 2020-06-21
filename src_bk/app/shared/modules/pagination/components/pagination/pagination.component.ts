import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.services';

@Component({
  selector: 'app-mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(private utilsService: UtilsService) {}

  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: string;

  pagesCount: number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
