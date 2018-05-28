export class User {

    constructor(
      public id : number,
      public username : string,
      public password: string,
      public name?: string,
    ) {  }
  
  }

  export class EditUser {

    constructor(
      public password: string,
      public password2: string,
      public name?: string    
    ) {  }
  
  }
