$('#info').hide();
$(document).on('change', '#all', function () {
    $('#result').html('');
    $('#result_dhl').html('');
    $('#dhl_title').html('');
    $('#waren_title').html('');
    $('#info').hide();
    //vars festlegen
    var laenge = $('#laenge').val();
    var breite = $('#breite').val();
    var hoehe = $('#hoehe').val();
    var gewicht = $('#gewicht').val();

    //reset if empty
    if (laenge == '' || breite == '' || gewicht == '' || hoehe == '') {
        $('#result').html('');
        $('#result_dhl').html('');
    }

    //warensendung deutsche post

    //kompakt
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 50) {
        $('#waren_title').html('Deutsche Post - Warensendung');
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_kpmpakt.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Kompakt</p><p class="smalli">Optimal für Briefe, Versandtaschen und schmale Pakete</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101002023&_requestid=3526117#/config"><button class="btn-large"><b>1,30€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 15 cm G: bis 50g</div></div></div></div></div></div></div></div>'
        );
        $('#info').show();
    } else {
        $('#result').html('');
    }
    //groß
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 500) {
        $('#waren_title').html('Deutsche Post - Warensendung');
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_gross-neu.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Groß</p><p class="smalli">Optimal für Pakete bis 500g und 15cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101002025&_requestid=3531775#/config"><button class="btn-large"><b>2,20€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 15 cm / G: bis 500g</div></div></div></div></div></div></div></div>'
        );
        $('#info').show();
    } else {
        $('#result').html('');
    }

    //Maxi bis 5cm hoch
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 5 &&
        gewicht <= 1000) {
        $('#waren_title').html('Deutsche Post - Warensendung');
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_maxi.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Maxi</p><p class="smalli">Optimal für Pakete bis 1kg und 5cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101003089&_requestid=3532570#/config"><button class="btn-large"><b>2,20€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 5 cm G: bis 1000g</div></div></div></div></div></div></div></div>'
        );
        $('#info').show();
    } else {
        $('#result').html('');
    }

    //Maxi bis 15 cm hoch
    if (laenge >= 10 && laenge <= 35.3 && breite >= 7 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 1000) {
        $('#waren_title').html('Deutsche Post - Warensendung');
        $('#result').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.deutschepost.de/content/dam/dpag/images/W_w/Warensendung/prod_info_maxi.png/_jcr_content/renditions/w193.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Maxi</p><p class="smalli">Optimal für Pakete bis 1kg und 15cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://shop.deutschepost.de/shop/internetmarke/imConfiguration.jsp?cid=DP_101003091&_requestid=3533316#/config"><button class="btn-large"><b>2,35€</b></button></a></div><div class="card-footer content-fluid">L: 10 - 35,3 cm B: 7 - 30 cm H: bis 15 cm G: bis 1000g</div></div></div></div></div></div></div></div>'
        );
        $('#info').show();
    } else {
        $('#result').html('');
    }

    //DHL

    //Päckchen S
    if (laenge <= 60 && breite <= 30 && hoehe <= 10 &&
        gewicht <= 2000) {
        $('#dhl_title').html('DHL');
        $('#result_dhl').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.dhl.de/int-versenden/gw/restweb/nepal/assets/img/producticons/paket-2kg@2x.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Päckchen S</p><p class="smalli">Optimal für Pakete bis 2kg und 10cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditor"><button class="btn-large"><b>3,79€</b></button></a></div><div class="card-footer content-fluid">L: bis 60 cm B: bis 30 cm H: bis 10 cm G: bis 2000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result_dhl').html('');
    }
    //Päckchen M
    if (laenge <= 60 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 2000) {
        $('#dhl_title').html('DHL');
        $('#result_dhl').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.dhl.de/int-versenden/gw/restweb/nepal/assets/img/producticons/paket-2kg@2x.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Päckchen M</p><p class="smalli">Optimal für Pakete bis 2kg und 15cm Höhe.</p><div class="action-bar center"><a class="linki" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditor"><button class="btn-large"><b>4,39€</b></button></a></div><div class="card-footer content-fluid">L: bis 60 cm B: bis 30 cm H: bis 15 cm G: bis 2000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result_dhl').html('');
    }
    //Paket
    if (laenge <= 60 && breite <= 30 && hoehe <= 15 &&
        gewicht <= 2000) {
        $('#dhl_title').html('DHL');
        $('#result_dhl').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.dhl.de/int-versenden/gw/restweb/nepal/assets/img/producticons/paket-2kg@2x.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Paket</p><p class="smalli">Optimal für Pakete bis 2kg und 15cm Höhe (Tracking).</p><div class="action-bar center"><a class="linki" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditor"><button class="btn-large"><b>4,99€</b></button></a></div><div class="card-footer content-fluid">L: bis 60 cm B: bis 30 cm H: bis 15 cm G: bis 2000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result_dhl').html('');
    }
    //Paket 5kg
    if (laenge <= 120 && breite <= 60 && hoehe <= 60 &&
        gewicht <= 5000) {
        $('#dhl_title').html('DHL');
        $('#result_dhl').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.dhl.de/int-versenden/gw/restweb/nepal/assets/img/producticons/paket-5kg@2x.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Paket 5kg</p><p class="smalli">Optimal für Pakete bis 5kg und 60cm Höhe (Tracking).</p><div class="action-bar center"><a class="linki" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditor"><button class="btn-large"><b>5,99€</b></button></a></div><div class="card-footer content-fluid">L: bis 120 cm B: bis 60 cm H: bis 60 cm G: bis 5000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result_dhl').html('');
    }
    //Paket 10kg
    if (laenge <= 120 && breite <= 60 && hoehe <= 60 &&
        gewicht <= 10000) {
        $('#dhl_title').html('DHL');
        $('#result_dhl').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.dhl.de/int-versenden/gw/restweb/nepal/assets/img/producticons/paket-5kg@2x.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Paket 10kg</p><p class="smalli">Optimal für Pakete bis 10kg und 60cm Höhe (Tracking).</p><div class="action-bar center"><a class="linki" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditor"><button class="btn-large"><b>8,39€</b></button></a></div><div class="card-footer content-fluid">L: bis 120 cm B: bis 60 cm H: bis 60 cm G: bis 10000g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result_dhl').html('');
    }
    //Paket 10kg
    if (laenge <= 120 && breite <= 60 && hoehe <= 60 &&
        gewicht <= 31500) {
        $('#dhl_title').html('DHL');
        $('#result_dhl').append(
            '<div class="col-3"><div class="card"><div class="content" style="margin:1em auto 1em"><div class="row"><img src="https://www.dhl.de/int-versenden/gw/restweb/nepal/assets/img/producticons/paket-5kg@2x.png" class="level" id="projectlogo" /><p id="projectname" class="title level">Paket 31,5kg</p><p class="smalli">Optimal für Pakete bis 31,5kg und 60cm Höhe (Tracking).</p><div class="action-bar center"><a class="linki" href="https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShipmentEditor"><button class="btn-large"><b>16,49€</b></button></a></div><div class="card-footer content-fluid">L: bis 120 cm B: bis 60 cm H: bis 60 cm G: bis 31500g</div></div></div></div></div></div></div></div>'
        );
    } else {
        $('#result_dhl').html('');
    }
});