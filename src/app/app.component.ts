import {Component, OnInit} from '@angular/core';
import {Diplome} from './Model/diplome';
import {ResumeService} from './services/resume.service';
import {CvService} from './services/cv.service';
import {Profil} from './Model/profil';
import {Work} from './Model/work';
import {Skills} from './Model/skills';
import {Langue} from './Model/langue';
import {Project} from './Model/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'saghourkhalil';
  //1. Creatooin array for data
  // @ts-ignore
  public diplomeList:Diplome[];
  // @ts-ignore
  public worklistList:Work[];
  // @ts-ignore
  public profillistList:Profil[];
  // @ts-ignore
  public skilllistList:Skills[];
  // @ts-ignore
  public languelistList:Langue[];
  // @ts-ignore
  public projectlistList:Project[];

  constructor(private resumeService:CvService){

  }

  ngOnInit(): void {
    // 2. Appel method pour requete donnée au lancement du component
    this.getAllDiplome();
    this.getAllWork();
    this.getAllProfil();
    this.getAllSkill();
    this.getAllLangue();
    this.getAllProject();

  }

  private getAllDiplome() {
    // 3. Requete http GET qui recupre les données
    this.resumeService.getDiplome().subscribe(
      data => {
        // 4. Init diplome list with data
        this.diplomeList = data;
      });
  }
  // method work
  private getAllWork() {
    this.resumeService.getWorks().subscribe(
      data => {
        // 4. Init diplome list with data
        this.worklistList = data;
      });
  }
  // method all profil
  private getAllProfil() {
    this.resumeService.getProfil().subscribe(
      data => {
        // 4. Init diplome list with data
        this.profillistList = data;
      });
  }
  private getAllSkill() {
    this.resumeService.getSkills().subscribe(
      data => {
        // 4. Init diplome list with data
        this.skilllistList = data;
      });
  }
  private getAllLangue() {
    this.resumeService.getLangues().subscribe(
      data => {
        // 4. Init diplome list with data
        this.languelistList = data;
      });
  }
  private getAllProject() {
    this.resumeService.getProject().subscribe(
      data => {
        // 4. Init diplome list with data
        this.projectlistList = data;
      });
  }

  // 5. Afficher les données du TS dans le HTML => String Interpolation ===>> {{ VARIABLE }}


}
