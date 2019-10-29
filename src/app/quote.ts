export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string, public author: string, public submittedBy: string ,public createdDate :Date, public upVote:number=0, public downVote:number=0){
      this.showDescription=false;
    }
  }