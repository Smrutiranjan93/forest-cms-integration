import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-grivance',
  templateUrl: './grivance.component.html',
  styleUrls: ['./grivance.component.scss']
})
export class GrivanceComponent implements OnInit {
  greivanceForm: FormGroup;
  submitted: boolean
  selectedFile:any
  constructor(private greivanceservice: ServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.greivanceForm = this.formBuilder.group({
      complaintCategory: ['', []],
      complaint: ['', []],
        startDate: ['', []],
        name: ['', []],
        email: ['', []],
        mobileNo: ['', []],
        houseNo: ['', []],
        street: ['', []],
        area: ['', []],
        complainDescription: ['', []],
        filename: ['', []]
        
  })

  }
  onFileSelected(event: any){
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
  }
  grievanceUpload(){
    console.log(this.selectedFile);
    let data=
    {
        'complaintCategory':this.greivanceForm.value.complaintCategory,
        'complaint':this.greivanceForm.value.complaint,
        'startDate':this.greivanceForm.value.startDate,
        'name':this.greivanceForm.value.name,
        'email':this.greivanceForm.value.email,
        'mobileNo':this.greivanceForm.value.mobileNo,
        'houseNo':this.greivanceForm.value.houseNo,
        'street':this.greivanceForm.value.street,
        'area':this.greivanceForm.value.area,
        'complainDescription':this.greivanceForm.value.complainDescription,
        
      }
    console.log("files values are"+this.selectedFile)
    console.log(data)
  
    // Build formData object.
  let formData = new FormData();
  formData.append('complaintData', JSON.stringify(data));
  formData.append('file',this.selectedFile,this.selectedFile.name);
     
    // this.greivanceservice.greivanceRegister(formData).subscribe((formData) => {
    this.greivanceservice.greivanceRegister(formData).subscribe((complaintData) => {
      console.log(complaintData);
    })
  }
}
