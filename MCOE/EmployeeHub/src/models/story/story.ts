import * as moment from 'moment';

export class Story {
    constructor(public id: number
        , public title: string
        , public summary: string
        , public dateCreated: string
        , public isTopStory: boolean
        , public linkToDetail: string
    ) {
        if (this.dateCreated) { this.dateCreated = moment(this.dateCreated).format('MMMM do YYYY'); }
    }
}


export class StoryDetail {
    constructor(public id: number
        , public title: string
        , public body: string
        , public dateCreated: string
    ) {
        if (this.dateCreated) { this.dateCreated = moment(this.dateCreated).format('MMMM do YYYY'); }
    }
}