import { User } from "./user";
import { Bike } from "./bike";

export class Rent{
    public bike: Bike
    public user: User
    public dateFrom: Date
    public dateTo: Date
    public dateReturned?: Date

    private constructor(bike: Bike, user: User, dateFrom: Date, dateTo: Date){
        this.bike = bike,
        this.user = user,
        this.dateFrom = dateFrom,
        this.dateTo = dateTo
    }

    public static create(rents: Rent[], bike: Bike, user: User, startDate: Date, endDate: Date){
        const canCreate = this.canRent(rents, startDate, endDate)
        if(canCreate){
            return new Rent(bike, user, startDate, endDate)
        }
        throw new Error('Overlapping dates for this rent.')
    }

    static canRent(rents: Rent[], startDate: Date, endDate: Date): boolean{
        return !rents.some(rent => {
            return startDate <= rent.dateTo && endDate >= rent.dateFrom 
        })
    }
}
