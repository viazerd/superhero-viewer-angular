import { Injectable } from '@angular/core';
import { ParamModel } from './param.model';

@Injectable({
  providedIn: 'root'
})

export class ParamModelService {

   paramsObjs:ParamModel[]=[  {'paramName': "limit", 'value':""},
                              {'paramName': "nameStartWith", 'value':""},
                              {'paramName': "offset", 'value':""},
                              {'paramName':"name",'value':""},
                            ];
 
   constructor(private paramModel:ParamModel) { 

    
  }
  

   

  setParamValue(oldParam:ParamModel,newVal:string):void{
    
    for(var i=0;i<this.paramsObjs.length;i++){
        if(oldParam['paramName'] === this.paramsObjs[i].paramName){
           this.paramsObjs[i].value = newVal;
        }


    }
    console.log(this.paramsObjs);

  }


  addParamsToUrl():void{
    
    addedParamArr:this.paramModel;

    for(var i=0;i<this.paramsObjs.length;i++){
      this.paramsObjs.forEach((params)=>{
        if(params['paramName']=== this.paramsObjs[i].paramName && this.paramsObjs[i].value!= undefined){
           
        }
      })
    }
    
  }
   

  



}
