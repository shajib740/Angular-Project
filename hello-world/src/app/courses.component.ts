import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: '<h2>Courses For Test</h2>'
})
export class CoursesComponent {

}

function Console(target) {
	console.log(target);
}

@Console
class ExampleClass {
	constructor() {
  	console.log('Yo!');
  }
}

