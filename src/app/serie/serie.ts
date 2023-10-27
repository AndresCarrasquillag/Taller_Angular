export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;

    constructor(idE: number, nameE: string, channelE: string, seasonsE: number, descriptionE: string, webpageE: string, posterE: string) {
        this.id = idE;
        this.channel = channelE;
        this.name = nameE;
        this.seasons = seasonsE;
        this.description = descriptionE;
        this.webpage = webpageE;
        this.poster = posterE;
    }
}
