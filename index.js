function getBackendData(parameter) {

    var url = `https://www.reservision.alexhuxel.de/backend.php?function=${parameter}`;

    if (parameter === 'list') {
        const length = document.getElementById('number').value;

        url = url + `&length=${length}`;

    }


    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {

            switch (parameter) {
                case 'list':
                    document.getElementById('list').innerHTML = xhr.responseText;
                    break;

                case 'item':
                    document.getElementById('item').innerHTML += xhr.responseText + ' ,';
                    break;
            }
            
        }
    };

    xhr.onerror = function(){
        document.getElementById(parameter).innerHTML = 'Ein Fehler ist aufgetreten.';
    }

    xhr.send();
}