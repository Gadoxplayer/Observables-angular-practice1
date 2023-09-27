import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObssubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObssubscription = interval(1000).subscribe(count => {
    //   console.log(count);      
    // })
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error('Count is greater that 3!');        
        }
        count++;
      }, 1000);
    });
    this.firstObssubscription = customIntervalObservable.subscribe(data => {
      console.log(data);     
    }, error => {
      console.log(error);      
      alert(error.message);
    }, () => {
      console.log('Completed!');      
    });
  }

  ngOnDestroy(): void {
    this.firstObssubscription.unsubscribe();
  }

}
