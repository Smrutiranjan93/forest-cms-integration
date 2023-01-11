import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.scss']
})
export class AirPollutionComponent implements OnInit {
  envprotectdata: any;
  envprotectdata1: any;

  constructor(private envprotect:ServiceService) { }

  ngOnInit(): void {
    this.envprotect.getFileList().subscribe((data:any)=>{
      this.envprotectdata=data;
      console.log(this.envprotectdata);
    })
    
    this.envprotect.getapplyparams1(0).subscribe((vals)=>{
      this.envprotectdata1=vals
      })
  }

  envp(val:any){
    const setid=val.target.value
    this.envprotect.getapplyparams1(setid).subscribe((vals)=>{
    this.envprotectdata1=vals
    })
     }
}
