import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
// import crypto from 'crypto';

export class App{
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    //registrar bike - FUNCIONANDO
    addBike(bike: Bike){
        if(this.bikes.some(rBike => {
            return rBike.id === bike.id
        })){
            throw new Error('ID already registered.')
        }
        this.bikes.push(bike)
    }

    //remove user - FUNCIONANDO
    removeUser(email: string){
        this.users = this.users.filter(rUser => rUser.email !== email)
    }

    //rent bike - FUNCIONANDO
    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date){
        let rent: Rent = Rent.create(this.rents, bike, user, startDate, endDate)
        this.rents.push(rent)
        console.log(this.rents)
    }
        
    // return bike - FUNCIONANDO
    returnBike(bike: Bike){
        let today = new Date()
        today.getDate
        this.rents.some(rRent => {
            if(rRent.bike === bike){
                rRent.dateReturned = today
            }
        })
    }

    findUser(email: string): User | undefined{
        return this.users.find(user => user.email === email)
    }

    addUser(user: User){
        if(this.users.some(rUser => {
            return rUser.email == user.email
        })) {
            throw new Error('User already registered.')
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }
}