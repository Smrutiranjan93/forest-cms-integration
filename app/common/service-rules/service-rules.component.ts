import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-rules',
  templateUrl: './service-rules.component.html',
  styleUrls: ['./service-rules.component.scss']
})
export class ServiceRulesComponent implements OnInit {
  filelist3: any;

  constructor(private RuleService:ServiceService) { }

  ngOnInit(): void {
    this.RuleService.ServiceRule().subscribe((data)=>{
      this.filelist3=data
      console.log("list values",this.filelist3);
    })
  }

}
