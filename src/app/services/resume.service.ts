import {Injectable} from '@angular/core';
import {Diplome} from "../Model/diplome";
import {Profil} from "../Model/profil";
import {Langue} from "../Model/langue";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Skills} from '../Model/skills';
import {Work} from '../Model/work';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {
 url:string = "/assets/json/";

  constructor(private http:HttpClient) {

  }

  public getDiplome():Observable<Diplome[]> {
    return this.http.get<Diplome[]>(this.url+"diplome.json");
  }
  public getProfil():Observable<Profil[]> {
    return this.http.get<Profil[]>(this.url+"profil.json");
  }
  public getSkills():Observable<Skills[]> {
    return this.http.get<Skills[]>(this.url+"skills.json");
  }
  public getWorks():Observable<Work[]> {
    return this.http.get<Work[]>(this.url+"works.json");
  }

  public getLangue():Observable<Langue[]> {
    return this.http.get<Langue[]>(this.url+"langues.json");
  }

  public getResume() {
  }
}
