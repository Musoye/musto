window.onload = function () {
    $('#mean').hide();

    function AudioCheck() {
        if ($('#audioSource').attr('src')) {
            $('#myAudio').show();
            $('#audioSource').show();
        } else {
            $('#myAudio').hide();
            $('#audioSource').hide();
        }
    }

    function restart() {
        $('#audioSource').attr('src', '');
        $('#myAudio')[0].load();
        $('#sound').text('');
        $('#word-result').html('');
        $('#word-found').text('').hide();
        $('#def').removeClass('text-warning').text('Defintions: ');
        AudioCheck();
    }

    function displayResult(data) {
        if (!data.resolution) {
            let dat = data[0]
            $('#mean').addClass('animated flash');
            $('#mean').show();
            $('#sound').text(dat.phonetic)
            for (let ele of dat.phonetics) {
                if (ele.audio) {
                    $('#audioSource').attr('src', ele.audio);
                    $('#myAudio')[0].load();
                    break;
                }
            }
            AudioCheck();
            let count = 1
            for (let elem of dat.meanings) {
                $('#word-result').append(`<p> ${count}. ${elem.definitions[0].definition}</p>`);
                count++;
            }
        }
        else {
            $('#mean').addClass('animated flash');
            $('#mean').show();
            $('#def').addClass('text-warning').text(data.title);
            $('#word-found').show().text(data.message + data.resolution);
        }
    }

    async function fetchData(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            displayResult(data)
        } catch (error) {
            data = {
                "title": "No Definitions Found",
                "message": "Sorry pal, we couldn't find definitions for the word you were looking for.",
                "resolution": "You can try the search again at later time or head to the web instead."
            }
            console.error('Error:', error.message);
            displayResult(data)
        }
    }

    AudioCheck();
    //Form submssion
    $('#word-form').submit(function () {
        const word = $('#word').val().trim().toLowerCase();
        restart();
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        console.log(url);
        fetchData(url);
    });
}