import { Component, OnInit,Input, SimpleChanges,Output, EventEmitter , ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.scss']
})
export class TestDemoComponent implements OnInit {
 
  @ViewChild('newItem') newItem: any; 
  @Input() item='';
  @Output() outPutItem =  new EventEmitter<string> ();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes",changes)
    console.log("changes-previousValue",changes.item.previousValue)
    console.log("changes-currentValue",changes.item.currentValue)
  }

  addNewItem(value:string){
    console.log(value);
    this.outPutItem.emit(value);
    this.newItem.nativeElement.value = ' ';
  }
}
