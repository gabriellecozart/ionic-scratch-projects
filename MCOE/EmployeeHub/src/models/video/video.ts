import * as moment from 'moment';

export class Video {
    constructor(public id: number
        , public title: string
        , public source: string
        , public dateCreated: string
        , public picture: string
        , public linkToVideo: string
        , public duration: string
    ) {    
        if (this.dateCreated) {  this.dateCreated = moment(this.dateCreated).format('MMMM do YYYY'); }
    }

}
