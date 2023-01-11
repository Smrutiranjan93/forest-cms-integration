import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
deptlist:any;
  imagesUpload1: any;
  constructor(private aboutdept:ServiceService) { }

  ngOnInit(): void {
    this.aboutdept.aboutDept().subscribe((data)=>{
      this.deptlist=data;
      console.log(data)

      })
    // this.images(eval:any);
  }
  // images(val:any){
  //   this.aboutdept.imagesUpload(val).subscribe((vals)=>{
  //   this.imagesUpload1=vals
  //   })
  //    }
    
}
