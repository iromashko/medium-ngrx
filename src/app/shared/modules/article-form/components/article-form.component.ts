import { Component, Input } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'app-mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmitting: boolean;
  @Input('errors') errorsProps: BackendErrorsInterface | null;
}
