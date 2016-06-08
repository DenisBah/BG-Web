
enum Side {
    A = 0,
    B = 1
}

class City {
    constructor (public name:string, public side?:Side ) {
    };
    getDescr():string {
      return this.name + " " + this.side;
    };
}
var city = new City("");

var arrCities: Array<any> = [
    new City("Alexandria"),
    new City("Petra"),
    new City("Stonehenge"),
    new City("Olympia"),
    new City("Abu Simbel"),
    new City("Rome"),
    new City("Rhodos"),
    new City("Gizah"),
    new City("Ephesos"),
    new City("Babylon"),
    new City("Byzantium"),
    new City("Menneken Pis"),
    new City("Halikarnassos"),
    new City("The Great Wall")
];

class PlayerName {
  constructor (public name:string, public surname?:string, public nickname?:string) {
    this.name = name;
    this.surname = surname;
    this.nickname = nickname;
    this.fullName = this.getFullName();
  };
  fullName:string;
  private getFullName():string {
    let fName = this.name;

    if (this.surname) {
      fName = fName + " " + this.surname;
    }
    if (this.nickname) {
      fName = fName + " aka " + this.nickname;
    }

    return fName;

  }
}

var playersNames = new PlayerName("");

var arrPlayers: Array<any> = [
  new PlayerName("Denis"),
  new PlayerName("Kate"),
  new PlayerName("Ivan"),
  new PlayerName("Alina"),
  new PlayerName("Max"),
  new PlayerName("","Tesla"),
  new PlayerName("","Einstain"),
  new PlayerName("","DaVinci"),
  new PlayerName("","","Ziriael")
];

var playersLength = arrPlayers.length;
var arrRandomChoosenCities: Array<number>=[];

//(!)
var createCardPicker = function() {

 return () => {
    for(let i:number = 0; i < playersLength; i++) {
    let choosenCityIndex = Math.round(Math.random() * (arrCities.length - 1));
    let choosenCity = arrCities[choosenCityIndex];
    arrRandomChoosenCities.push(choosenCity);
    arrCities.splice(choosenCityIndex, 1);
    choosenCity.side = Math.round(Math.random());

   console.log(arrPlayers[i].fullName + ": " + choosenCity.getDescr());
  }
}
}
createCardPicker()();
