import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-water-pollution',
  templateUrl: './water-pollution.component.html',
  styleUrls: ['./water-pollution.component.scss']
})
export class WaterPollutionComponent implements OnInit {
  envprotectdata: any;
  envprotectdata1: any;
  imagesUpload1: any;

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

     images(val:any){
      let roles= 
         {'fileid':(val.target.value)}
      //  console.log(roles);
     const imgvalue1=roles;   
    //  console.log(imgvalue1);
     this.envprotect.imagesUpload(imgvalue1).subscribe((vals)=>{
       this.imagesUpload1=vals
      //  JSON.parse(vals)
      //  JSONify(this.imagesUpload1);
       console.log(this.imagesUpload1);
     })
   }
}
