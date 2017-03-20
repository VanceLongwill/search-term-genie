function appMain() {




    console.log('ready...');

    $('#geniefyMe').click(function () {

        geniefy(getSearchTerms());

    });


}



function geniefy(searchTerms) {

    //console.log(searchTerms);



    $('#resultsArea').text(function () {

        var formattedTerms = sortSearchTerms(searchTerms);
        return formattedTerms.join('\n');

    });

}

function sortSearchTerms(terms) {
    
    terms.sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return b.length - a.length;
    });
    
    //terms.map(function(x){ return x.toUpperCase() })
    
    $.map(terms, function (val, i) {

        console.log("No. [" + i + "]:" + "  " + val);
        terms[i] = val.toUpperCase()
    });
    
    return terms

}

function splitSearchTerms(text) {

    var splitText;
    var splitBy;

    // find split character from tool bar & add regexp
    splitBy = /\n/g

    splitText = text.split(splitBy);
    console.log(splitText);
    sortSearchTerms(splitText);
    return splitText

}

function getSearchTerms() {

    var inputBoxValue = $('#userSearchTerms').val();

    var searchTermsArray = splitSearchTerms(inputBoxValue);

    return searchTermsArray
}


$(document).ready(appMain);