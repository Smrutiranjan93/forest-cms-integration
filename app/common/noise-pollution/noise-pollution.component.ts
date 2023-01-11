import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-noise-pollution',
  templateUrl: './noise-pollution.component.html',
  styleUrls: ['./noise-pollution.component.scss']
})
export class NoisePollutionComponent implements OnInit {

  filelist: any;
  filelist1: any;
  tabledata1:any;
  imagesUpload1:any;
  imgid:any;
  event:any;
  id:any;
  y:number;
  x: number;
  i: number;
 
  // fileUrl:string='';
  // imageSrcs: string;
  constructor(private noisefilelist:ServiceService,private fileList:ServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.noisefilelist.getFileList().subscribe((data)=>{
      this.filelist=data
      console.log("list values",this.filelist);
      // console.log("id values",this.filelist[0].id);
    })
    this.fileList.getapplyparams(0).subscribe((tabledata: any)=>{
      this.filelist1=tabledata;
      console.log(tabledata);
    })
    
    // this.fileList.imagesUpload(93).subscribe((vals)=>{
    //   this.imagesUpload1=vals
    //   console.log(vals);
    // })
    
  }
  onCategorySelected1(item:any){
    const selectedCategoryId=item.target.value
    console.log(item);
    this.fileList.getapplyparams(selectedCategoryId).subscribe((tabledata: any)=>{
      this.filelist1=tabledata;
      console.log(tabledata);
    }) 
  }
  onCategorySelected(item: any) {
    const selectedCategoryId = item.target.value;
    this.fileList
      .getapplyparams(selectedCategoryId)
      .subscribe((tabledata: any) => {
        this.filelist1 = tabledata;
        console.log(tabledata);
      });
  }
  images(val:any){
   let roles= 
      {'id':parseInt(val.target.value)}
      // this.id=parseInt(val.target.value)
    console.log(roles);
    // console.log(this.id);
    
  // const imgvalue=JSON.stringify(val.target.value);
  // console.log(JSON.parse(imgvalue));
  // const imgvalue1=JSON.parse(val.target.value);
  // const imgvalue1=this.id;
  const imgvalue1=roles;
    
  console.log(imgvalue1);
  this.fileList.imagesUpload(imgvalue1).subscribe((vals)=>{
    this.imagesUpload1=vals
    console.log(this.imagesUpload1);
  })
}
// 125379400
}


