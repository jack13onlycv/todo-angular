import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength',
})
export class TextLengthPipe implements PipeTransform {
  transform(text: string): string {
    return text.length < 34 ? text : (`${text.slice(0, 32)}...`);
  }
}
