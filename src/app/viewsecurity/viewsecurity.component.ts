import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
fetchData=()=>{
  this.myapi.viewallemp().subscribe(
    (data)=>{
      this.viewSecurity=data
    }
  )
}

   viewSecurity:any=[]
  ngOnInit(): void {
  }

}

