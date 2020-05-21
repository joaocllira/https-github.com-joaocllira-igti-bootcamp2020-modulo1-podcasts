window.addEventListener('load', start);

var podcast;
var $;

function start() {
    podcast = null;
    $ = document.getElementById.bind(document);

    document.getElementById('frequency').addEventListener('input', function(event) {
        var valor = event.target.value;
        document.getElementById('frequencyText').value = valor;
        checkPodcast(valor);
    });
}

function checkPodcast(valor) {
    var podTemp = podcasts.find(tempPodcast => tempPodcast.frequency === valor);
    if (podTemp) {
        if (podcast === null) {
            toggleVisibility($('notPodcast'), $('foundPodcast'));
            changePodcast(podTemp);
        } 
    } else {
        if (podcast !== null) {
            podcast = null;
            toggleVisibility($('foundPodcast'), $('notPodcast'));
        }
    }
}

function toggleVisibility(elementOn, elementOf) {
    if (elementOn.classList.contains('visible')) {

        elementOn.classList.replace('visible', 'invisible');
        elementOf.classList.replace('invisible', 'visible');
    } else {
        elementOn.classList.replace('invisible', 'visible');
        elementOf.classList.replace('visible', 'invisible');
    }
}

function changePodcast(selectedPodcast) {
    podcast = selectedPodcast;
    
    replaceValue($('title'), `[${podcast.frequency}] ${podcast.title}`);
    replaceValue($('description'), podcast.description);
    $('image').src = `./img/${podcast.id}.png`;
}

function replaceValue(input, newValue) {
    input.firstChild.remove();
    input.append(newValue);
}
