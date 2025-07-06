// interface Vehical {
    // name : string;
    // year : Date | number;
    // broken: boolean;
    interface Reportable {
    summary(): string;  
}

const oldCivic = {
    name : "Civic",
    year : new Date().getFullYear() - 20,
    broken : true,
    summary() : string {
        return `Name: ${this.name}`;
    }
};

const drink  = {
    // ...oldCivic, access it the all civic copy properties
    color : 'brown',
    carbonated : true,
    sugar : 40,
    summary() : string {
        return `My drink has ${this.sugar} grams of sugar.`;
}
};

// const printVehical = (vehical : Reportable) : void =>
const printSummary = ( item : Reportable) : void =>
    {
    //   console.log(`Name: ${vehical.name}`);
    //   console.log(`Year: ${vehical.year}`);
    //   console.log(`Broken: ${vehical.broken}`);
         console.log(item.summary());
    }

    printSummary(oldCivic);
    printSummary(drink);

