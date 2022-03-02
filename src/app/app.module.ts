import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './add/add.component';
import { TextLengthPipe } from './pipes/text-length.pipe';
import { CompletedDirective } from './directives/completed.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddComponent,
    TextLengthPipe,
    CompletedDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
