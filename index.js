let bmaPhoto = [
    'Benjamin_Thompson',
    'Amari_Pratt',
    'Tayvion_Hunley',
    'Joey_Black',
    'Jeffrey_Smith',
    'Davonte_Washington'
]
let hmaPhoto = [
    'Elias_Genao',
    'Damian_Reyes',
    'Hayden_Cortes',
    'Antonello_Rosales',
    'Cristian_Alvarez',
    'Cesar_Juarez'
]

let wmaPhoto = [
    'Steve_Scott',
    'Caine_Watson',
    'Russell_Johnson',
    'Spencer_Bentley',
    'Jason_Harvey',
    'Vasily_Zayevovich'
]

var photoList = [
    '#photoOne',
    '#photoTwo',
    '#photoThree',
    '#photoFour',
    '#photoFive',
    '#photoSix'
]

const shuffleArray = function(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

var ranPhoto = photoList[Math.floor(Math.random()*photoList.length)];
$(document).ready(function() {
    $('#submitPhoto').click(function() {
        if(document.getElementById('bmaRadio').checked) {
            let selectedPhotos = shuffleArray(bmaPhoto);
            console.log(selectedPhotos);
            for (i = 0, len = selectedPhotos.length; i < len; i++){
                var newLink = "https://mdc.gta.world/img/persons/" + selectedPhotos[i] + ".png"
                $(photoList[i]).attr('src', newLink);
                console.log(newLink);
            }
        } else if (document.getElementById('hmaRadio').checked){
            let selectedPhotos = shuffleArray(hmaPhoto);
            console.log(selectedPhotos);
            for (i = 0, len = selectedPhotos.length; i < len; i++){
                var newLink = "https://mdc.gta.world/img/persons/" + selectedPhotos[i] + ".png"
                $(photoList[i]).attr('src', newLink);
                console.log(newLink);
            }
        } else if (document.getElementById('wmaRadio').checked){
            let selectedPhotos = shuffleArray(wmaPhoto);
            console.log(selectedPhotos);
            for (i = 0, len = selectedPhotos.length; i < len; i++){
                var newLink = "https://mdc.gta.world/img/persons/" + selectedPhotos[i] + ".png"
                $(photoList[i]).attr('src', newLink);
                console.log(newLink);
            }
        }
        var photoLink = $('#myInput').val();
        $(ranPhoto).attr('src', photoLink);
    });
});
