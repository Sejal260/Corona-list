import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { CoronaService } from './corona.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coin';
  data:any;
  constructor(private coronaData : CoronaService){}

  ngOnInit(){
  this.coronaData.getData().subscribe((result)=>{
    console.log("result",result)
    this.data=result
  })
}
}
