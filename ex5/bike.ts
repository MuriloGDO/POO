export class Bike {
    constructor(
        public name: string,
        public type: string,
        public bodySize: number,
        public maxLoad: number,
        public rate: number,
        public description: string,
        public ratings: number,
        public imageUrls: string[],
        public available: boolean = true,
        private locationLatitude: any,
        private locationLongitude: any, 
        public id?: string
    ) {}

    newLocation(localNew: any){
        this.locationLatitude = getLocationLatitude(localNew);
        this.locationLongitude = getLocationLatitude(localNew);
    }
}

function getLocationLatitude(pos: any): number{
    const crd = pos.coords;
    return crd.latitude
}

function getLocationLongitude(pos: any): number{
    const crd = pos.coords;
    return crd.longitude
}