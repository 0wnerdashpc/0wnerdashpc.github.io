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

function urlChecker(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}

const inputParser = function(){
    var ranPhoto = photoList[Math.floor(Math.random()*photoList.length)];
    var pLink = $('#myInput').val();
    var spLink = pLink.split(" ");
    if (spLink == ""){
        alert('Insert a link to a photo, or a first name last name.');
    } else if (spLink.length == 1){
        console.log(spLink);
        if (urlChecker(spLink) == true){
            $(ranPhoto).attr('src', spLink);
        } else {
            alert('No photo found at link provided - Error #001');
        }
    } else if (spLink.length == 2) {
        var combinedLink = "https://mdc.gta.world/img/persons/" + spLink[0] + "_" + spLink[1] + ".png"
        if (urlChecker(combinedLink) == true){
            $(ranPhoto).attr('src', combinedLink);
        } else {
            alert('No photo found on file for suspect - Error #002');
        }
    } else if (spLink.length > 2) {
        alert('Double check your input. No name or link detected - Error #003');
    } else {
        alert('You somehow figured out how to break shit - Error #ID10T');
    }
}

const insertThingy = function(selectedPhotos) {
    for (i = 0, len = selectedPhotos.length; i < len; i++){
        var newLink = "https://mdc.gta.world/img/persons/" + selectedPhotos[i] + ".png"
        $(photoList[i]).attr('src', newLink);
    }
}

$(document).ready(function() {
    $('#submitPhoto').click(function() {
        if(document.getElementById('bmaRadio').checked) {
            let selectedPhotos = shuffleArray(bmaPhoto);
            insertThingy(selectedPhotos);
            inputParser();
        } else if (document.getElementById('hmaRadio').checked){
            let selectedPhotos = shuffleArray(hmaPhoto);
            insertThingy(selectedPhotos);
            inputParser();
        } else if (document.getElementById('wmaRadio').checked){
            let selectedPhotos = shuffleArray(wmaPhoto);
            insertThingy(selectedPhotos);
            inputParser();
        }
    });
});