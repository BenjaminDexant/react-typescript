export interface ISkills {
    _id: number,
    title: string,
    votes: number
  }
  
  export interface IWilder {
    _id: number,
    name: string,
    city: string,
    skills: ISkills[]
  }