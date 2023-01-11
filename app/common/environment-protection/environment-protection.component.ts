import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Envcategory } from 'src/app/model/cms.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-environment-protection',
  templateUrl: './environment-protection.component.html',
  styleUrls: ['./environment-protection.component.scss']
})
export class EnvironmentProtectionComponent implements OnInit {

  envprotectdata:any;
  envprotectdata1:any;
  constructor(public envprotect: ServiceService, public httpclient:HttpClient) { }

  ngOnInit(): void {
          this.envprotect.getFileList().subscribe((data:any)=>{
            // console.log(JSON.stringify(data));
            this.envprotectdata=JSON.stringify(data);
            this.envprotectdata=JSON.parse(this.envprotectdata);
            // console.log(JSON.parse(JSON.stringify(data)))
            // console.log(this.envprotectdata);
          })
          
            this.envprotect.getapplyparams1(0).subscribe((vals)=>{
            this.envprotectdata1=vals
            })
             
  }

 envp(val:any){
  const setid=val.target.value
this.envprotect.getapplyparams1(setid).subscribe((vals)=>{
this.envprotectdata1=JSON.stringify(vals);
console.log(typeof this.envprotectdata1);

this.envprotectdata1=JSON.parse(this.envprotectdata1);
            console.log(typeof this.envprotectdata1);
// 
})
 }

}
