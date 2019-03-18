import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'md5-typescript';
import { ApiDataRetrievalService } from './api/api-data-retrieval.service';
import { ApiUrlService } from './api/api-url.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Superhero Viewer';

  constructor(private apiDataService: ApiDataRetrievalService,
              private apiUrlService: ApiUrlService){  }

  ngOnInit(){
        this.apiDataService.getAllHeroes();
        //this.apiDataService.getAllHeroIdDefaultLimit();
       // this.apiDataService.getAllHeroIdWithLimit(2);
       //console.log(this.apiDataService.getHeroWithId()); 
   }


}
