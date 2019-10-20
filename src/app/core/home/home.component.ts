import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';

@Component({
  selector: 'mrps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, DoCheck {
teste = false;
  constructor(private ng: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
        this.teste = true;
    }, 1000);
  }

  ngDoCheck(): void {
    this.ng.detectChanges();
  }

}
