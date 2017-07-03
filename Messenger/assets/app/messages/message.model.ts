/**
 * Created by Jazz-Pc on 6/16/2017.
 */
export class Message{

    constructor(public content:string,
                public username:string,
                public messageId?:string,
                public userId?:string){}
}