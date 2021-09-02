export class Profil{
  public id:number;
  public lastname:string;
  public name:string;
  public email:string;
  public phone:string;
  public adress:string;
  public metier:string;
  public resume:string;
  constructor(id: number, lastname: string, name: string, email: string, phone: string, adress: string, metier: string, resume: string) {
    this.id = id;
    this.lastname = lastname;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.adress = adress;
    this.metier = metier;
    this.resume = resume;
  }
}
