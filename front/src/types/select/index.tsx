export type ListProps = { title: string; id: number }[]

export type Select = {
    value: {title: string; id: number} | null; 
    error: boolean; 
    errorText: string;
    required: boolean;
    options: ListProps,
}