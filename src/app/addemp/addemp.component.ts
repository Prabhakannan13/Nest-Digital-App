import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }

  e_Name=""
  e_phn=""
  ejoinD=""
  eAdd=""
  eDob=""
  eDesg=""
  email=""
  ePass=""

  addemp = () => {
    let data = {
      "e_Name": this.e_Name,
      "e_phn": this.e_phn,
      "ejoinD": this.ejoinD,
      "eAdd": this.eAdd,
      "eDob": this.eDob,
      "eDesg": this.eDesg,
      "email": this.email,
      "ePass": this.ePass
      

    }
    console.log(data)
    this.myapi.addemp(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("emp_id",resp[0].empId)
          console.log(localStorage.getItem("emp_id"))
          this.myrouter.navigate(["/empdash"])
        } else {
          
        }
      }
    )
  }
       
  ngOnInit(): void {
  }

}
