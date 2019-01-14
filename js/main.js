$(document).on('change', '#all', function () {
    $('#result').html('');
    //vars festlegen
    var laenge = $('#laenge').val();
    var breite = $('#breite').val();
    var hoehe = $('#hoehe').val();
    var gewicht = $('#gewicht').val();

    //reset if empty
    if (laenge == '' || breite == '' || gewicht == '' || hoehe == '') {
        $('#result').html('');
    }

    //warensendung deutsche post

    //kompakt
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 50) {
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_kpmpakt.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Kompakt</p><p class="smalli">Optimal für Briefe, Versandtaschen und schmale Pakete</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101002023&_requestid=3526117#/config"><button class="btn-large"><b>1,30€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 15 cm G: bis 50g</div></div></div></div></div></div></div></div>'
        );
        console.log('hadsad');
        check = 1;

    } else {
        $('#result').html('');
    }
    //groß
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 500) {
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_gross-neu.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Groß</p><p class="smalli">Optimal für Pakete bis 500g und 15cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101002025&_requestid=3531775#/config"><button class="btn-large"><b>2,20€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 15 cm / G: bis 500g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result').html('');
    }

    //Maxi bis 5cm hoch
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 5 &&
        gewicht <= 1000) {
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_maxi.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Maxi</p><p class="smalli">Optimal für Pakete bis 1kg und 5cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101003089&_requestid=3532570#/config"><button class="btn-large"><b>2,20€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 5 cm G: bis 1000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result').html('');
    }

    //Maxi bis 15 cm hoch
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 1000) {
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_maxi.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Maxi</p><p class="smalli">Optimal für Pakete bis 1kg und 15cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101003091&_requestid=3533316#/config"><button class="btn-large"><b>2,35€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 15 cm G: bis 1000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result').html('');
    }
});