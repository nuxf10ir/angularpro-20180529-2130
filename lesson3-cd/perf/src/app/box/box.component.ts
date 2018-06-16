import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:rect
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"></svg:rect>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements AfterViewInit {
  @Input() box;
  @Input() selected;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.cd.detach();
  }

  reattach() {
    this.cd.reattach();
  }

  deattach() {
    // this.cd.detach();
  }


}