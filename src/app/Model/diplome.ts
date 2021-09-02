export  class Diplome{
  public id:number;
  public diplome:string;
  public school:string;
  public place:string;
  public resume:string;
  public gratuatedDate: string;

  constructor(id: number, diplome: string, school: string, place: string, resume: string, gratuatedDate: string) {
    this.id = id;
    this.diplome = diplome;
    this.school = school;
    this.place = place;
    this.resume = resume;
    this.gratuatedDate = gratuatedDate;
  }



}
