import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries():void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  getAvarage():number {
    let total:number = 0;
    this.series.forEach(serie => total = total + serie.seasons);
    return total/this.series.length;
  }

}
