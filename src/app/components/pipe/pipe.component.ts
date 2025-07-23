import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable , map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe,TitleCasePipe , DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName:string='tthis is a demo session';

  currentDate=new Date();

  currentTime:Observable<string>=new Observable<string>;

  student={
    name:'nagur faias',
    age:23,
    city:'hyderabad',
    empid:101,
    state:''
  }

  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date().toString()));
  }

}
