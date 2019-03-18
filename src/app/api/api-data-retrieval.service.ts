import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'md5-typescript';
import { ApiUrlService } from './api-url.service'

@Injectable({
  providedIn: 'root'
})
export class ApiDataRetrievalService {

  constructor(private urlService:ApiUrlService ,private http:HttpClient) { }

 
  public sampleRespArr:any[];  
  public allHeroIdArray:number[];

  apiSubscribe(url:string,respArr:any[]):void{
      let resObs = this.http.get(url);

      resObs.subscribe((resp)=>{
          respArr = resp['data']['results'];
          for(let data of respArr){
            console.log(data['id']);
          }
      });
  }

  getAllHeroes():void{

    var parameterObjs = [];
    var p1 ={};
    p1['name'] = "limit";
    p1['value']="10";

    var p2={};
    p2['name']='nameStartsWith';
    p2['value']='Spi';

    var p3={};
    p3['name']='offset';
    p3['value']='2';

    parameterObjs.push(p1);
    parameterObjs.push(p2);
    parameterObjs.push(p3);


    this.apiSubscribe(this.urlService.getUrlForAllCharacter(parameterObjs),this.sampleRespArr);
    }

  
  getAllHeroIdDefaultLimit():void{
   

    

  }

  getAllHeroIdWithLimit(limit:number):void{
    
  }

  getHeroWithId():void{
  }

}
