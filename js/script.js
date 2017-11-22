// JavaScript source code for team project H2M

/*----------------------------------------------Event-------------------------------------*/

// showDate(dateObj) returns the current date in the format mm/dd/yyyy
function showDate(dateObjt) {
    // extract date, month, and year from the dateObj argument
    // window.alert(dateObjt);

    var thisDate = dateObjt.getDate();
    var thisMonth = dateObjt.getMonth() + 1;
    var thisYear = dateObjt.getFullYear();

    return thisMonth + "/" + thisDate + "/" + thisYear;
}

//showTime(dateObj) returns the current time in the format hh:mm:ss am/pm
function showTime(dateObj) {
    // extract hours, minutes, and seconds from the dateObj argument
    var thisHours = dateObj.getHours();
    var thisMinute = dateObj.getMinutes();
    var thisSeconds = dateObj.getSeconds();
    //change thisHours from 24-hour to 12-hour format by
    //1) check if thisHours is less than 12, then set the ampm varaible to "am", otherwise to "pm"
    var ampm = (thisHours < 12) ? " am" : " pm";

    //2) substract 12 from thisHours if
    thisHours = (thisHours > 12) ? (thisHours - 12) : thisHours;

    //3) if thisHours equals zero, change it to 12 
    thisHours = (thisHours == 0) ? 12 : thisHours;

    //add leading zero tp thisMinute and thisSconds less than 10
    thisMinute = (thisHours < 10) ? ("0" + thisMinute) : thisMinute;
    thisSeconds = (thisSeconds < 10) ? ("0" + thisSeconds) : thisSeconds;

    return thisHours + ":" + thisMinute + ":" + thisSeconds + ampm;
}

//calculateDays(currentDate) returns the number of days left between the current date and Junuary 1st of next year
function calcDays(currentDate) {
    // 1. Create a date object for Jan. 1 of next year
    var newYear = new Date("April 1, 2018");
    nextYear = currentDate.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    // 2. Calculate the difference between currentDate
    //    and January 1
    ms = newYear.getTime() - currentDate.getTime();
    days = ms / (1000 * 60 * 60 * 24);
    return days;
}
function NYClock() {
    // The today variable contains the current date and time
    var today = new Date();

    // Display the current date and time
    document.clockform.dateNow.value = showDate(today);
    document.clockform.timeNow.value = showTime(today);

    // Calculate the time left until the New Year's Bash
    var days = calcDays(today);

    // Display days rounded to the next lowest integer
    document.clockform.daysLeft.value = Math.floor(days);

    // Calculate the hours left in the current day
    var hours = (days - Math.floor(days)) * 24;

    // Display hours rounded to the next lowest integer
    document.clockform.hrLeft.value = Math.floor(hours);

    // Calculate the minutes left in the current hour
    var minutes = (hours - Math.floor(hours)) * 60;

    // Display minutes rounded to the next lowest integer
    document.clockform.minLeft.value = Math.floor(minutes);

    // Calculate the minutes left in the current hour
    var seconds = (minutes - Math.floor(minutes)) * 60;

    // Display seconds rounded to the next lowest integer
    document.clockform.secLeft.value = Math.floor(seconds);
}
/*----------------------------------------------Logo-------------------------------------*/
var logo_sign = "logo_off";

function changeSign() {

    if (logo_sign == "logo_off") {
        document.getElementById('logo').src = "images/logo_01.png";
        logo_sign = "logo_on";
    }
    else {
        if (logo_sign == "logo_on") {
            document.getElementById('logo').src = "images/logo_02.png";
            logo_sign = "logo_off";
        }
    }


}

/**function called on load body**/
function PageLoad() {
    window.setInterval('changeSign()', 1000);
    window.setInterval('NYClock()', 1000);


}

function Load() {
    window.setInterval('changeSign()', 1000);
    setDate();
}
function LoadPricing() {
    window.setInterval('changeSign()', 1000);
    loadform();
}
/*----------------------------------------------Contact-------------------------------------*/
//valider the field required
function valider() {
    if (document.contact.first_name.value == "") {
        alert("Please enter your first name !");
        document.contact.first_name.focus();
        valid = false;
        return valid;
    }
    if (document.contact.last_name.value == "") {
        alert("Please enter your name !");
        document.contact.last_name.focus();
        valid = false;
        return valid;
    }

    if (document.contact.email.value == "") {
        alert("Please enter your email address!");
        document.contact.email.focus();
        valid = false;
        return valid;
    }

    if (document.contact.telephone.value == "") {
        alert("Please enter your phone number !");
        document.contact.telephone.focus();
        valid = false;
        return valid;
    }
    if (document.contact.comments.value == "") {
        alert("Please enter your comment !");
        document.contact.comments.focus();
        valid = false;
        return valid;
    }
}
// check the email
function verifiermail(mail) {
    if ((mail.indexOf("@") >= 0) && (mail.indexOf(".") >= 0)) {
        return true
    } else {
        alert("Mail invalide !");
        document.contact.mail.focus();
        return false
    }
}
// check the phone number
function valider_numero() {
    var nombre = document.contact.telephone.value;
    var chiffres = new String(nombre);

    //Remove all characters except digits
    chiffres = chiffres.replace(/[^0-9]/g, '');

    // The field is empty
    if (nombre == "") {
      
        document.contact.nombre.focus();
        return;
    }

    // Number of digits
    compteur = chiffres.length;

    if (compteur != 10) {
        alert("Be sure to enter a 10-digit number (xxx-xxx-xxxx)");
        document.contact.nombre.focus();
        return;
    }

}
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {

    var strcount
    var x = new Date()
    var x1 = (x.getMonth() + 1) + "/" + x.getDate() + "/" + x.getFullYear();
    x1 = x1 + " - " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('ct').innerHTML = x1;

    tt = display_c();
}

/*----------------------------------------------Portofolio-------------------------------------------*/

$(function (){
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $(".wrapper #container .homepage .portfolioNew #portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $(".wrapper #container .homepage .portfolioNew #portfolio").fadeTo(300, 1);
        }, 300);

    });
});


/*----------------------------------------------Pricing-------------------------------------------*/
function check(browser) {
    document.getElementById("answer").value = browser;
}
function send() {
    
    //var b = document.getElementById("answer").value;
    //  b = browser;
   alert("Your answer is sending to H2M !");
}

function dollars(n) {
    n = eval(n);
    n = Math.round(n * 100) / 100;
    return (n == Math.round(n)) ? n += ".00" : (n * 10 == Math.round(n * 10)) ? n += "0" : n;
}

function todaytxt() {
    var Today = new Date();
    return Today.getMonth() + 1 + "/" + Today.getDate() + "/" + Today.getFullYear();
}

function loadform() {
    document.order.formdate.value = todaytxt();
    document.order.qty1.focus();
    document.order.qty1.select();
}

function total_price() {
    s1 = eval(document.order.sub1.value);
    s2 = eval(document.order.sub2.value);
    s3 = eval(document.order.sub3.value);
    s4 = eval(document.order.sub4.value);
    s5 = eval(document.order.sub5.value);
    s6 = eval(document.order.sub6.value);
    s7 = eval(document.order.sub7.value);
    s8 = eval(document.order.sub8.value);
    document.order.total.value = dollars(s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8);
}

function tax_price() {
    s1 = eval(document.order.sub1.value);
    s2 = eval(document.order.sub2.value);
    s3 = eval(document.order.sub3.value);
    s4 = eval(document.order.sub4.value);
    s5 = eval(document.order.sub5.value);
    s6 = eval(document.order.sub6.value);
    document.order.sub7.value = dollars(0.05 * (s1 + s2 + s3 + s4 + s5 + s6));
}

function sub_price(pricename, qtyname, subname) {
    pricevalue = eval(document.order.elements[pricename].value);
    qtyvalue = eval(document.order.elements[qtyname].value);
    document.order.elements[subname].value = dollars(pricevalue * qtyvalue);
    tax_price();
    total_price();
}

function shipping_price() {
    i = document.order.shipping.selectedIndex;
    document.order.sub8.value = document.order.shipping.options[i].value;
    total_price();
}

function checkform() {
    purchase_ok = true;
    if (document.order.sub8.value == "0.00") purchase_ok = false;
    if (document.order.total.value == "0.00") purchase_ok = false;

    address_ok = true;
    if (document.order.email.value == "") address_ok = false;
    if (document.order.name.value == "") address_ok = false;
    if (document.order.street.value == "") address_ok = false;
    if (document.order.city.value == "") address_ok = false;
    if (document.order.zip.value == "") address_ok = false;

    credit_ok = true
    if (document.order.ccard.value == "") credit_ok = false;
    if (document.order.cname.value == "") credit_ok = false;
    if (document.order.cnumber.value == "") credit_ok = false;

    form_ok = (purchase_ok && address_ok && credit_ok);

    if (form_ok) {
        alert("Order Submitted");
    } else {
        if (!purchase_ok) alert("You must select a product and shipping method");
        if (!address_ok) alert("You must complete all address fields");
        if (!credit_ok) alert("You must complete all credit card fields");
    }
    return form_ok;
}