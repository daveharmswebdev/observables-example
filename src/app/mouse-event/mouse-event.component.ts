import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.scss']
})
export class MouseEventComponent implements OnInit {
  @ViewChild('mousey', { static: true }) el: ElementRef;
  public mouseMoves$: Observable<any>;
  public rgb$: Observable<string> = of('rgb(0, 0, 0)');

  ngOnInit() {
    this.mouseMoves$ = fromEvent(this.el.nativeElement, 'mousemove');

    console.log(this.el.nativeElement.offsetHeight, this.el.nativeElement.offsetwidth);

    this.rgb$ = this.mouseMoves$.pipe(
      debounceTime(50),
      map((evt: MouseEvent) => {
        return `rgb(0, ${evt.clientX.toString().slice(-2)}, ${evt.clientY.toString().slice(-2)})`;
      })
    );

    // the temptation is to subscribe and mutate a local variable
    // deny the temptation and write functionally
    // which is what Angular is steering you towards
    // this.mouseMoves$.subscribe((evt: MouseEvent) => {
    //   this.rgb = `rgb(0, ${evt.clientX.toString().slice(-2)}, ${evt.clientY.toString().slice(-2)})`;
    // })
  }

}
