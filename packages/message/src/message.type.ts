
export type Itype='primary'|'warning'|'info'|'error'


export interface IMessgeOptions{
    id?:string,
    message?:string,
    type?:Itype,
    duration?:number,
    center?:boolean,
    onClose?:()=>void,
    offset?:number
}


export type IMessageParams = IMessgeOptions | string