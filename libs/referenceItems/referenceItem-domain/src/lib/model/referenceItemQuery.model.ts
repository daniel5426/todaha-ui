export interface ReferenceItemQueryModel {
  id: string,
  key:string,
  value:string ,
  page: number,
  limit: number,
  q: string,
  orders: string[]
}
