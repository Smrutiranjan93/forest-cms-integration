import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  PATH_OF_API='http://117.211.75.160:8065/api';
  // Cms api
  PATH_OF_API2='http://117.211.75.160:8080/ForestDept/api';
  PATH_OF_API3='http://117.211.75.160:8080/ForestDept/api';
  PATH_OF_API4='http://117.211.75.160:8080/ForestDept/api';
  PATH_OF_API5='http://117.211.75.160:8080/ForestDept/api';
  // PATH_OF_API2='http://117.211.75.160:8064/api';
  requestHeader=new HttpHeaders({'No-Auth':'True' ,'Content-Type':'application/json','responseType':'blob'});
  filelist1: any;
  constructor(private http:HttpClient) { }


  
  saveForm(data:any): Observable<any>{
    // return this.http.post(`${FormApi}/contactUs`,data);
    return this.http.post<string>(this.PATH_OF_API+ '/contactUs',data,{
      headers:this.requestHeader
    });
    
   }
   
  //  tenderRegister(data:any){
  //   return this.http.post(this.PATH_OF_API2+'/tenderRegister',data);
  //  }
tenderRegister(values: any): Observable<any>{
  //console.log('values', values);
  
  // let params=new HttpParams();
  // params=params.append('title',values?.title|| '');
  // params=params.append('issuingAuthority',values?.issuingAuthority || '');
  // params=params.append('endDate',values?.endDate || '');
  // params=params.append('file','file');
  // params=params.append('tenderNumber','tenderNumber');
  // console.log(params);
//  const  payload = {
//   title : values?.title || '',
//   issuingAuthority: values?.issuingAuthority,
//   endDate: values?.endDate || '',
//   file: '',
//   tenderNumber: ''
  

//  }
  return this.http.post(this.PATH_OF_API +'/tenderRegister',values);
}
getTenderList(){
  return this.http.get(this.PATH_OF_API +'/fetchTenderList');
}

imagesUpload(images:any):Observable<any>{
  
// console.log(images);
return this.http.post(this.PATH_OF_API5 +'/downloadFilePath', images,{

  headers:this.requestHeader
});
}

greivanceRegister(values: any): Observable<any>{
  console.log('values', values);
//  const  payload = {
//   complaintCategory : values?.complaintCategory || '',
//   complaint: values?.complaint,
//   date: values?.date || '',
//   name: values?.name || '',
//   email: values?.email || '',
//   mobileNo: values?.mobileNo || '',
//   houseNo: values?.houseNo || '',
//   street: values?.street || '',
//   area: values?.area || '',
//   complainDescription: values?.complainDescription || '',
//   file: '',
//  }
  return this.http.post(this.PATH_OF_API +'/complaintRegister', values);
}
// noise pollution get method
getFileList(){
  return this.http.get(this.PATH_OF_API2 +'/fetchEnvCategoriesList');
}

getapplyparams(idv:any){
  let params = new HttpParams();
  params = params.append('envCategory', idv);
  return this.http.get(this.PATH_OF_API3+ '/fetchActAndRules',{params:params}); 

}
getapplyparams1(idv1:any){
  let params=new HttpParams();
  params=params.append('envCategory',idv1);
  return this.http.get(this.PATH_OF_API3+ '/fetchActAndRules',{params:params});
}

aboutDept(){
  return this.http.get(this.PATH_OF_API4+ '/getAboutDeptlist');
 }
// Service rules get method
ServiceRule(){
  return this.http.get(this.PATH_OF_API4+ '/getServicesRules');
 }
 fetchmember(){
  return this.http.get(this.PATH_OF_API5 + '/fetchmembersdetails')
 }
 tendernotification(){
  return this.http.get(this.PATH_OF_API5 + '/fatchtendernotification')
 }
 divisiondetails(){
  return this.http.get(this.PATH_OF_API5 + '/getDivisionDetails')
 }
 researchdetails(){
  return this.http.get(this.PATH_OF_API5 + '/fetchresearch')
 }
 fetcheventdetails(){
  return this.http.get(this.PATH_OF_API5 + '/fetchEvents')
 }
}

