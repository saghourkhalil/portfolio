export class Work {
  public id:number;
  public poste:string;
  public company:string;
  public place:string;
  public dateStart: Date;
  public dateEnd: Date;
  public description: string;
  constructor(id: number, poste: string, company: string, place: string, dateStart: Date, dateEnd: Date, description: string) {
    this.id = id;
    this.poste = poste;
    this.company = company;
    this.place = place;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.description = description;
  }
}
