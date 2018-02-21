import { Component, OnInit } from '@angular/core';
import { Circle } from './circle';
import { CircleService } from './circle.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  circles: Circle[];
  constructor(private circleService: CircleService) { }

  ngOnInit() {
   // this.getCircles();
  }
  getCircles() {
    this.circleService.getCircles().subscribe(data => {
      this.circles = data.json();
    });
    console.log(this.circles.length);
    for (var i = 0; i < this.circles.length; i++) {
      console.log(i + "  " + this.circles[i].circleName);
    }
  }

}
