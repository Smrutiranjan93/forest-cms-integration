import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean;
  constructor(private contactService:ServiceService, 
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [
      ]],
      email:['',[

      ]],
      mobile:['', [
        ]],
        message:['', [
          ]],
    });
  }
  save(){
    this.contactService.saveForm(this.contactForm.value).subscribe((data:any)=>{
      console.log(data.data);
    });
      // console.log(data.data);
  }
}
