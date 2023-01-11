import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
// import { ContactusService } from 'src/app/services/contactus.service';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  out: any;
  link: any;
  contactForm: FormGroup;
  submitted: boolean;
  fetchmemberlist: any;
  tendernotification: any;
  divisiondetails: any;
  researchdetails: any;
  fetcheventdetails: any;
  constructor(private contactService:ServiceService, 
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactService.tendernotification().subscribe((data)=>{
      this.tendernotification=data;
    })
    this.contactService.divisiondetails().subscribe((data)=>{
      this.divisiondetails=data;
    })
    this.contactService.researchdetails().subscribe((data)=>{
      this.researchdetails=data;
    })
    this.contactService.fetcheventdetails().subscribe((data)=>{
      this.fetcheventdetails=data;
    })
    
    
    this.contactForm = this.formBuilder.group({
      name: ['', [
        // Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(20),
        // Validators.pattern(/^[A-Za-z\s]+$/),
      ]],
      email:['',[

      ]],
      mobile:['', [
        // Validators.required,
        // Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]],
        message:['', [
          // Validators.required,
          ]],
    });
    this.contactService.fetchmember().subscribe((data:any)=>{
        this.fetchmemberlist=data
        console.log(this.fetchmemberlist);
    })
  }
  save(){
    this.contactService.saveForm(this.contactForm.value).subscribe((data:any)=>{
      console.log(data.data);
    });
      // console.log(data.data);
  }

}
