import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form.component';
import { BackendErrorMessagesModule } from '../backendErrorMessages.modules';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BackendErrorMessagesModule, ReactiveFormsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
