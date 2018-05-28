export class NewUser {

    constructor(
      public username:string,
      public password: string,
      public password2: string,
      public name?: string    
    ) {  }
  
  }