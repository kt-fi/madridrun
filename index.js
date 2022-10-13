
let races = [
    { id: 1,  raceName: 'San Silvestre Vallecana', date: '31/12/2022', info: 'La San Silvestre Vallecana es una carrera de 10 km de distancia que se celebra en Madrid cada 31 de diciembre, día de San Silvestre. En la actualidad hay dos ediciones, la San Silvestre Popular (con participación abierta para cualquier persona mayor de 16 años), y la San Silvestre Internacional (para atletas con una marca inferior a 39 en hombres y 45 en mujeres).', image: './ssv.jpg', mobImg: './ssv-mob.png' }, 
    { id: 2, raceName: 'Movistar 1/2 Marathon', date: 'March 2023', info: 'Madrid Half Marathon is an annual half marathon arranged in Madrid, Spain. Organised by the Marathon Sports Association, it is held at the beginning of April and in 2012 it attracted more than 13,000 runners', image: './halfmadrid.jpeg', mobImg: './madridhalf-mob.png'    }, 
    { id: 3, raceName: 'EDP Madrid Marathon', date: '04/04/2023', info: 'The Rock and Roll Madrid Marathon (Spanish: Maratón de Rock and Roll Madrid) is an annual marathon race which takes place in Madrid, Spain, in late April. The event was first held in 1978 and has since gained IAAF Gold Label Road Race status and had over 15,000 runners participate in the 2017 edition.[1] A 10 km road race was added in 2010 and a Half Marathon road race was added in 2012.[2]', image: './madridmarathon.jpeg' , mobImg: './madridmarathon-mob.png'   }, 
    { id: 4, raceName: 'London Marathon', date: '25/04/2023', info: 'The London Marathon is an annual marathon held in London, United Kingdom, and is the 2nd largest annual road race in the UK, after the Great North Run in Newcastle. Founded by athletes Chris Brasher and John Disley in 1981, it is typically held in April but has moved to October for 2020, 2021 and 2022 due to the COVID-19 pandemic. The largely flat course is set around the River Thames, starting in Blackheath and finishing at The Mall. Hugh Brasher (son of Chris) is the current Race Director and Nick Bitel its Chief Executive.', image: './LondonMarathon.jpg', mobImg: './londonmarathon-mob.jpg'    }
]

let racesContainer = document.getElementById('races__container');

const selectRace = (raceName) => {
    let raceNameEl = document.getElementById(raceName);
    let items = document.querySelectorAll('.races__tabs--list-item');
    items.forEach(item => {
       item.classList.remove('active')
    });

    raceNameEl.classList.add('active');
    raceNameEl.classList.add('active');
    racesContainer.classList.remove('visible')

    setTimeout(()=>{
        racesContainer.classList.add('invisible')
        getRaceData(raceName)
    },250)
    
}

const getRaceData = (raceName) => { 
     setTimeout(()=>{
        racesContainer.classList.remove('invisible')
        racesContainer.classList.add('visible')
        let selectedRace = races.find((race) => race.id == raceName)
        document.getElementById("raceName").innerHTML = selectedRace.raceName;
        document.getElementById("raceDate").innerHTML = selectedRace.date;
        document.getElementById("raceInfo").innerHTML = selectedRace.info;
        document.getElementById("raceImage").src = selectedRace.image;
        document.getElementById("raceImage-mob").srcset = selectedRace.mobImg;
    },250)
}

(getRaceData(1))