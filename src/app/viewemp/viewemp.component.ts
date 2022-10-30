import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
fetchData=()=>{
  this.myapi.viewallemp().subscribe(
    (data)=>{
      this.viewEmp=data
    }
  )
}

   viewEmp:any=[]
  ngOnInit(): void {
  }

}
