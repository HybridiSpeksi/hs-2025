export interface ApiSponsorResponse {
    id: number
    acf: {
        "name": string,
        "webpage": string,
        "logo": number,
        "mainsponsor": boolean,
    }
}

export interface ApiPersonResponse {
    id: number
    slug: string
    title: { "rendered": string },
    acf: {
        "name": string,
        "jobs": string,
        "email": string,
        "imageUrl": string,
        "type": string,
        "order": number
    }
}

export interface ApiProductionResponse {
    id: number;
    slug: string,
    title: {
        rendered: string;
    };
    acf: {
        year: string;
        synopsis: string;
        shows: string;
        statistics: { [key: string]: string };
        color1: string;
        color2: string;
        color3: string;
        poster?: string;
        banner?: string;
    };
}