import { Input } from "../../../../types/input"

export interface FieldsProps {
    id?: number
    name: Input
    contact: ContactProps[]
    cep: Input
    address: Input
    complement: Input
    neighborhood: Input
    locality: Input
    number: Input
    uf: Input
    idAddress?: number
    ddi: Input
    telephone: Input
}

export type SetAllFieldsProps = (props: FieldsProps) => void


export interface ContactProps {
    id?: number
    ddi: Input
    telephone: Input
}

export interface CepProps {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
}


export type HandleValueProps = (props: { field: keyof (Omit<FieldsProps, "id" | "contact" | "idAddress">); value: any }) => void
export type HandleValueContactProps = (props: { field: keyof (Omit<ContactProps, "id">); value: any; index: number }) => void
export type HandleCepProps = (props: CepProps) => void
export type HandleDeleteContactProps = (props: { index: number }) => void