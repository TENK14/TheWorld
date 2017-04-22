//site.js

// 1. this variables are in GloberScope:
/*
var ele = document.getElementById("username");
ele.innerHTML = "Shawn Wildermuth";

var main = document.getElementById("main");
main.onmouseenter = function () {
    //main.style.backgroundColor = '#888'; // '#112233';
    main.style = "background: #888;"; // different style .... set css value. // doesn't function in IE
};

main.onmouseleave = function () {
    //main.style.backgroundColor = "";
    main.style = "";

    // => Problem with different browsers:
    // Chrome, Firefox, Opera, Safari, IE, Edge, and as well mobile clients
};
*/
/*
// 2. Example with PrivateScope. (variables are hide in function)
function startup() {
    // this variables are in GloberScope:
    var ele = document.getElementById("username");
    ele.innerHTML = "Shawn Wildermuth";

    var main = document.getElementById("main");
    main.onmouseenter = function () {
        //main.style.backgroundColor = '#888'; // '#112233';
        main.style = "background: #888;"; // different style .... set css value. // doesn't function in IE
    };

    main.onmouseleave = function () {
        //main.style.backgroundColor = "";
        main.style = "";

        // => Problem with different browsers:
        // Chrome, Firefox, Opera, Safari, IE, Edge, and as well mobile clients
    };
}

startup(); // but managing code in this stile is difficult, so we don't relly want to do that,
// to as an immediately invoked function expression.
// Idea is to do anonymous function expression that is then executed immediately.
*/

/*
// 3. Anonymous function expresion
(function (inputParam) {
    // this variables are in GloberScope:
    var ele = document.getElementById("username");
    //ele.innerHTML = "Shawn Wildermuth";
    ele.innerHTML = inputParam;

    var main = document.getElementById("main");
    main.onmouseenter = function () {
        //main.style.backgroundColor = '#888'; // '#112233';
        main.style = "background: #888;"; // different style .... set css value. // doesn't function in IE
    };

    main.onmouseleave = function () {
        //main.style.backgroundColor = "";
        main.style = "";

        // => Problem with different browsers:
        // Chrome, Firefox, Opera, Safari, IE, Edge, and as well mobile clients
    };
})("My name");
*/

/**/
// 3. Anonymous function expresion
(function () {

    
    // this variables are in GloberScope:
    //var ele = jQuery("#username"); // plny nazev jquery
    var ele = $("#username"); // $ - zkratka pro jquery, # - identifikator pro ID v CSS.
    ele.text("Shawn Wildermut"); // jako innerHTML, ale handluje to jquery

    // Kdybychom nepouzili jquery, museli bychom prvne zjistit o jaky se jedna prohlizec a podle toho zavolat prislusny prikaz
    //ele.innerHTML = "Shawn Wildermuth";
    //ele.innerHtml = "Shawn Wildermuth";
   
    var main = document.getElementById("main");
    main.onmouseenter = function () {
        //main.style.backgroundColor = '#888'; // '#112233';
        main.style = "background: #888;"; // different style .... set css value. // doesn't function in IE
    };

    main.onmouseleave = function () {
        //main.style.backgroundColor = "";
        main.style = "";

        // => Problem with different browsers:
        // Chrome, Firefox, Opera, Safari, IE, Edge, and as well mobile clients
    };

    /*
    var menuItems = $("ul.menu li a");
    // nemusime psat handler pro vsechny polozky zvlast
    // menuItems[0].on()
    // menuItems[1].on()
    // menuItems[2].on()
        
    menuItems.on("click", function () {
        //alert("Hello");

        var me = $(this);        
        alert(me.text());
    });
    */

    //var x = document.getElementById('sidebar');
    //x.classList.toggle("myStyle");

    var $sidebarAndWrapper = $("#sidebar,#wrapper"); // nacteni dvou objektu do jedne promenne
    
    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");

        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });
    
    // kdyz si spustime stranku a zobrazime si source code, tak tlacitko nam bude zpusobovat toto:
    //[1]: <div id="sidebar" class>
    //[2]: <div id="sidebar" class="hide-sidebar">
    
    // => ted staci dat do site.css pravidla:
    // pro #sidebar.hide-sidebar { left: -250px;}
    // pro #wrapper.hide-sidebar { margin-left: 0;}

})();
/**/