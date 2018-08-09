export class Noticia {
    constructor(
      public id: number,
      public title: string,
      public subTitle: string,
      public text: string,
      public image: string,
      public imageDescription: string,
      public business: number,
      public card: number,
      public user: number,

      ) {}
  }