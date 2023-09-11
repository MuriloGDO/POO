import { User } from "./user";
import { Bike } from "./bike";
import { Time } from "./time"

export class Rent{
    public bike: Bike
    public user: User
    public start: Time
    public end?: Time
    public valor?: number

    private constructor(bike: Bike, user: User, start: Time){
        this.bike = bike,
        this.user = user,
        this.start = start
    }

    static create(bike: Bike, user: User,start: Time): Rent {
        return new Rent(bike, user, start);
    }

    valorTot(star: Time, end: Time){
        return ((end.hour*60 + end.minute) - (star.hour* 60 + star.minute))*0.3
    }
}
