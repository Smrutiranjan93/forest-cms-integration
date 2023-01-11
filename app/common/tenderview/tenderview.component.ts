import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tenderview',
  templateUrl: './tenderview.component.html',
  styleUrls: ['./tenderview.component.scss']
})
export class TenderviewComponent implements OnInit {
  allTenderList: any;
  fileUrl:string='';
  imageSrcs: string;
  constructor(private tenderfile: ServiceService) { }

  ngOnInit(): void {
    this.imageSrcs=''
    this.tenderfile.getTenderList().subscribe((data:any) => {
      this.allTenderList=data;
      console.log(this.allTenderList);
      if(data?.fileUrl)
      this.imageSrcs = "http://117.211.75.160:8065/assets/" + data?.fileUrl
    })
  }
  
  downloadOfficerFile(fileUrl:any){
    window.open(fileUrl,'_blank');
  
  }

}
