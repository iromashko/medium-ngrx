import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';

@Component({
  selector: 'app-mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackendErrorsInterface | null;
  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<
    ArticleInputInterface
  >();

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }
  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
