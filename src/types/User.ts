
// export type User = {
//   id: string,
//   name: string,
//   email: string,
//   createdAt: string
// }

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public createdAt: string
  ){
    this.createdAt = new Date(createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
}
