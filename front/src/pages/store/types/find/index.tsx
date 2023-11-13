export type StoresProps = Store[]

export interface Store {
  id: number
  name: string
  neighborhood: string
  uf: string
  cep: string
  contact: string
}
