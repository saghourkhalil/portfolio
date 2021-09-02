import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Diplome} from "../Model/diplome";
import {Profil} from "../Model/profil";
import {Work} from '../Model/work';
import {Skills} from '../Model/skills';
import {Langue} from '../Model/langue';
import {Project} from '../Model/project';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  url:string = "/assets/json/";

  constructor(private http:HttpClient) {

  }

  public getDiplome():Observable<Diplome[]> {
    return this.http.get<Diplome[]>(this.url+"diplome.json");
  }
  public getProfil():Observable<Profil[]> {
    return this.http.get<Profil[]>(this.url+"profil.json");
  }
  public getWorks():Observable<Work[]> {
    return this.http.get<Work[]>(this.url+"works.json");
  }
  public getSkills():Observable<Skills[]> {
    return this.http.get<Skills[]>(this.url+"skills.json");
  }
  public getLangues():Observable<Langue[]> {
    return this.http.get<Langue[]>(this.url+"langues.json");
  }
  public getProject():Observable<Project[]> {
    return this.http.get<Project[]>(this.url+"projects.json");
  }
}
