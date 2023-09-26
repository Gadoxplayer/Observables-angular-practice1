import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
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
    this.firstObssubscription = interval(1000).subscribe(count => {
      console.log(count);      
    })
  }

  ngOnDestroy(): void {
    this.firstObssubscription.unsubscribe();
  }

}
