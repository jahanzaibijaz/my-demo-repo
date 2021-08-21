import { Component, OnInit } from '@angular/core';

import  { TestDataService  } from  '../test-data.service';

@Component({
  selector: 'my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class myPageComponent implements OnInit {

  constructor(
    private  testDataService : TestDataService 

  ) { }

  ngOnInit(): void {
    console.log("log",
        this.testDataService.obj)
  }
   

}
