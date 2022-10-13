
let races = [
    { id: 1,  raceName: 'San Silvestre Vallecana', date: '31/12/2022', info: 'Info SSV', image: './ssv.jpg' }, 
    { id: 2, raceName: 'Movistar 1/2 Marathon', date: 'March 2023', info: 'Info Madrid Half', image: './halfmadrid.jpeg'   }, 
    { id: 3, raceName: 'EDP Madrid Marathon', date: '04/04/2023', info: 'Info EDP Madrid', image: './madridmarathon.jpeg'   }, 
    { id: 4, raceName: 'London Marathon', date: '25/04/2023', info: 'Info London', image: './LondonMarathon.jpg'   }

]

const selectRace = (raceName) => {
    let items = document.querySelectorAll('.races__tabs--list-item');
    items.forEach(item => {
       item.classList.remove('active')
    });

    document.getElementById(raceName).classList.add('active');
    document.getElementById(raceName).classList.add('active');

    getRaceData(raceName)
}

const getRaceData = (raceName) => {
    let selectedRace = races.find((race) => race.id == raceName)
    document.getElementById("raceName").innerHTML = selectedRace.raceName;
    document.getElementById("raceDate").innerHTML = selectedRace.date;
    document.getElementById("raceInfo").innerHTML = selectedRace.info;
    document.getElementById("raceImage").src = selectedRace.image;
}

(getRaceData(1))