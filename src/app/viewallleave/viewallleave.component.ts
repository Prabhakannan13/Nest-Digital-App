import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallleave',
  templateUrl: './viewallleave.component.html',
  styleUrls: ['./viewallleave.component.css']
})
export class ViewallleaveComponent implements OnInit {

  constructor(private myapi0:ApiService) {
    this.fetchData()
   }
fetchData=()=>{
  this.myapi0.viewallemp().subscribe(
    (data)=>{
      this.viewLeave=data
    }
  )
}

   viewLeave:any=[]
  ngOnInit(): void {
  }

}
