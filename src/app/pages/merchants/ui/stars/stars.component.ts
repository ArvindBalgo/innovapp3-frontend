import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input('rate') rate : number = 3.4;
  elem: string = '';
  percArray: Array<Number> = [];

  ngOnInit() {
    this.elem = this.stars(this.rate);
    this.percArray = this._percentArrays(this.rate)
  }

  private _limitValue(val: number, min: number, max: number) {
    if (val < min) { return min; }
    if (val > max) { return max; }
    return val;
  }

  private _percentArrays = (rate: number): Array<number> => {
    const transformedArray = [...Array(5).keys()].map(i => Math.round(this._limitValue(rate - i, 0, 1) * 100));

    return transformedArray;
  }

  public stars = (rate: number) => `
<div class="stars">
    ${[...Array(5).keys()]
    .map((i) => {
      const fillPercent = Math.round(this._limitValue(rate - i, 0, 1) * 100);
      return `<span class="stars__item" style="background: linear-gradient(to right, rgba(46, 50, 67,1) 0%, rgba(46, 50, 67,1) ${fillPercent}%, rgba(46, 50, 67,0.3) ${fillPercent}%, rgba(46, 50, 67,0.3) 100%)"></span>`;
    }).join('')}
</div>
`;
}
