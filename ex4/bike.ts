export class Bike{
        name: string
        type: string
        bodySize: number
        maxLoad: number
        rate: number
        description: string
        ratings: number
        imageUrls?: string[]
        id: string

    constructor(name: string, type: string, bodySize: number, maxLoad: number, rate: number, description: string, ratings: number, id: string){
        this.name = name,
        this.type = type,
        this.bodySize = bodySize,
        this.maxLoad = maxLoad,
        this.rate = rate,
        this.description = description,
        this.ratings = ratings,
        this.id = id
    }
}