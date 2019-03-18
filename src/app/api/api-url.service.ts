import { Injectable } from '@angular/core';
import { Md5 } from 'md5-typescript';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  private timeStampParam: string ='070';
  private privateKey:string="3c0e6f6b8e45e1a5e23c9914ab18125fdc9f6c39";
  private publicKey:string="812f9143fa376eae431290c081117f94";
  private hash:string="&hash="+Md5.init(this.timeStampParam+this.privateKey+this.publicKey);
  private apiBaseUrl:string="https://gateway.marvel.com/v1/public/";


  getUrlForAllCharacter(pList:any[]):string{

    let urlForAllCharacters=this.apiBaseUrl+'characters?';
    let urlWithoutParam ='&ts='+this.timeStampParam+'&apikey='+this.publicKey+this.hash;
    pList.forEach((parameter)=>{
      if(parameter['value']!=undefined){
        if(urlForAllCharacters[urlForAllCharacters.length-1]=='?'){
          urlForAllCharacters+=parameter['name']+'='+parameter['value'];
        }else{
          urlForAllCharacters+='&'+parameter['name']+'='+parameter['value'];
        }
      }
    });
    
   
    
    return urlForAllCharacters+urlWithoutParam;
  }



  constructor() { }
  
}
