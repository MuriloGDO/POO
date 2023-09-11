import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import { App } from "./app";


// const bike = new Bike('bike1', 'mountain', 30, 100, 100.5, 'my desc', 5, [])
// const user = new User('teste', 'teste@email.com', '1234')
// const today = new Date()
// const twoDaysLater = new Date()
// twoDaysLater.setDate(twoDaysLater.getDate() + 2)
// const tomorrow = new Date()
// tomorrow.setDate(tomorrow.getDate() + 1)
// const twoDaysAfterTomorrow = new Date()
// twoDaysAfterTomorrow.setDate(twoDaysAfterTomorrow.getDate() + 2)
// const rent1 = Rent.create([], bike, user, today, twoDaysLater)
// const rent2 = Rent.create([ rent1 ], bike, user, tomorrow, twoDaysAfterTomorrow)
// console.log(rent1)
// console.log(rent2)

const app = new App()
const joao = new User('Joao', 'joao@email.com', '12345')
app.addUser(joao)
const mario = new User('Mario', 'mario@email.com', '123')
app.addUser(mario)
// console.log(joao)
const bike = new Bike('laura', 'laura', 10, 10, 10, 'laura', 10, '123')
const bike2 = new Bike('laura', 'laura', 10, 10, 10, 'laura', 10, '1245')
app.addBike(bike)
app.addBike(bike2)

const date1 = new Date(2002, 10, 9)
const date2 = new Date(2002, 10, 21)

app.rentBike(bike, joao, date1, date2)
app.returnBike(bike)


// app.removeUser('joao@email.com')

// console.log(joao)
// console.log(app.findUser('mario@email.com'))
// if(app.findUser('joao@email.com')){
//     console.log(joao)
// }
// else{
//     console.log('nao')
// }