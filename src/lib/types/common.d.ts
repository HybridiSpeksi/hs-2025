export type Production = {
    id: string,
    slug: string,
    title: string,
    year: string,
    synopsis: string,
    performanceDates: string,
    statistics: { [key: string]: string }[],
    colors: string[],
    posterUrl?: string,
    bannerUrl?: string
}

export type Person = {
    id: number,
    slug: string,
    title: string,
    name: string,
    jobs: string,
    type: string,
    email?: string,
    imageUrl?: string,
    order?: number
}

export type Sponsor = {
    id: number
	name: string
	webpage: string
	logoUrl: string
	mainsponsor: boolean
}
