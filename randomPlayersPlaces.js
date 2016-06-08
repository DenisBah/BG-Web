var Side;
(function (Side) {
    Side[Side["A"] = 0] = "A";
    Side[Side["B"] = 1] = "B";
})(Side || (Side = {}));
var City = (function () {
    function City(name, side) {
        this.name = name;
        this.side = side;
    }
    ;
    City.prototype.getDescr = function () {
        return this.name + " " + this.side;
    };
    ;
    return City;
}());
var city = new City("");
var arrCities = [
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
var PlayerName = (function () {
    function PlayerName(name, surname, nickname) {
        this.name = name;
        this.surname = surname;
        this.nickname = nickname;
        this.name = name;
        this.surname = surname;
        this.nickname = nickname;
        this.fullName = this.getFullName();
    }
    ;
    PlayerName.prototype.getFullName = function () {
        var fName = this.name;
        if (this.surname) {
            fName = fName + "" + this.surname;
        }
        if (this.nickname) {
            fName = fName + "aka " + this.nickname;
        }
        return fName;
    };
    return PlayerName;
}());
var playersNames = new PlayerName("");
var arrPlayers = [
    new PlayerName("Denis"),
    new PlayerName("Kate"),
    new PlayerName("Ivan"),
    new PlayerName("Alina"),
    new PlayerName("Max"),
    new PlayerName("", "Tesla"),
    new PlayerName("", "Einstain"),
    new PlayerName("", "DaVinci"),
    new PlayerName("", "", "Ziriael")
];
var playersLength = arrPlayers.length;
var arrRandomChoosenCities = [];
var createCardPicker = function () {
    return function () {
        for (var i = 0; i < playersLength; i++) {
            var choosenCityIndex = Math.round(Math.random() * (arrCities.length - 1));
            var choosenCity = arrCities[choosenCityIndex];
            arrRandomChoosenCities.push(choosenCity);
            arrCities.splice(choosenCityIndex, 1);
            choosenCity.side = Math.round(Math.random());
            console.log(arrPlayers[i].fullName + ": " + choosenCity.getDescr());
        }
    };
};
createCardPicker()();
