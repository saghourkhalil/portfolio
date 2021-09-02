import {Profil} from "./profil";
import {Work} from "./work";
import {Diplome} from "./diplome";
import {Skills} from "./skills";

export class Resume {
  constructor(id: number, profil: Profil, works: Work[], diplome: Diplome[], skills: Skills[]) {
    this.id = id;
    this.profil = profil;
    this.works = works;
    this.diplome = diplome;
    this.skills = skills;
  }
  public id: number;
  public profil: Profil;
  public works: Work[];
  public diplome: Diplome[];
  public skills: Skills[];


}
