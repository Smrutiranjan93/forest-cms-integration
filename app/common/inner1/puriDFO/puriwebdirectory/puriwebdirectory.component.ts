import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puriwebdirectory',
  templateUrl: './puriwebdirectory.component.html',
  styleUrls: ['./puriwebdirectory.component.scss']
})
export class PuriwebdirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title='pagination';
  p:any;
  
    collection = [
      {'Srno': '01','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '02','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '03','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '04','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '05','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '06','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '07','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '08','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '09','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '10','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '11','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '12','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '14','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '15','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '16','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '17','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '18','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '19','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '20','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '21','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '22','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '23','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '24','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': '25','Name':'Sri Dillip chandra lekana','Designation': 'IAO-cum Under secretary','PhoneNumber': '9437332352','EmailId': 'Dillipchandralenka@odisha.gov.in','TelEPABX': '4330'},
      {'Srno': 'Smith','Name':'smruti','Designation': 'Australia','PhoneNumber': 'PHP','EmailId': 'PHP','TelEPABX': 'PHP'},
  
    ];  
}
