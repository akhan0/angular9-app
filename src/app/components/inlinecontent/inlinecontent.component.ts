import { Component } from '@angular/core';

@Component({
  selector: 'inline-content',
  template: `<div>
            <input type='text' placeholder={{namePlaceholder}} [value]='title' >
            <button type='button'>{{buttonText}}</button>
  </div>`,
})
export class InlineContentComponent {
    namePlaceholder = 'Enter name';
    buttonText = 'Click Here';
    title = 'Arif Khan';
}