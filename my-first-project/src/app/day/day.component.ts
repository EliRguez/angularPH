import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input() day:number=0;
  @Output() handlerDay= new EventEmitter<number>()
  @HostListener('click')
  Click(){
    this.handlerDay.emit(this.day)
  }
}
