window.onload = function () {
    $('#mean').hide();
    //the result function
    function displayResult(word){
        if (word) {
            $('#mean').addClass('animated flash');
            $('#mean').show();  
            $('#word-result').html(word);       
        }
        else {
            $('#mean').addClass('animated flash');
            $('#mean').show();
            $('#word-result').html('There is no such word in this dictionary or probably the spelling is not correct.');        
        }
    }
    //the form submssion
    $('#word-form').submit(function () {
        var word = $('#word').val().toLowerCase();
        console.log(word);
        fetch('data.json').then((response) => response.json())
            .then((data) => displayResult(data[word])
            )
            .catch((error) => {
                alert('Error:', error);
            });
    });
    //$('#word-result').html(data[word])
}