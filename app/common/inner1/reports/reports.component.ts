import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title='pagination';
  p:any;
  searchtext:any;
  searchstartdate:any;
  searchenddate:any;
  
    collection = [
      {'Srno': '01','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '02','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-05-2022','EndDate': '12-01-2023','TenderNumer': '1506','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '03','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '11-03-2022','EndDate': '12-01-2023','TenderNumer': '1707','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '04','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '21-09-2022','EndDate': '12-01-2023','TenderNumer': '1800','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '05','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1304','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '06','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1205','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '07','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1203','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '08','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '10-06-2022','EndDate': '12-01-2023','TenderNumer': '1208','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '09','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1254','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '10','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1284','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '11','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1244','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '12','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1274','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '13','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1224','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '14','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1254','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '15','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1284','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '16','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1904','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '17','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1604','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '18','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1504','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '19','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1404','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '20','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1404','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '21','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1604','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '22','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1804','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '23','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1604','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '24','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1804','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '25','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1804','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '26','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1904','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '27','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '1504','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '28','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '4204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '29','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '7204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '30','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '9204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '31','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '8204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '32','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '3204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '33','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '5204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '34','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '9204','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
      {'Srno': '35','Title':'	2316 / 2022-23 ( Member Secretary / Odisha State Food Commission / Bhubaneswar ','StartDate': '02-12-2022','EndDate': '12-01-2023','TenderNumer': '7244','Department': 'Odisha Government Portal','Download':'Download(8.75 MB)'},
     
    ]; 
 resetForm(form:NgForm){
  // form.reset();
 }
}
