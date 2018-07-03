var isLoggedIn = false;
var loggedInAgentName = "---";
var loggedInAgentNameLower = "---";

/*function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}*/

function checkName() {
    var agents = ["nick fury", "nicholas fury", "maria hill", "steve rogers", "steven rogers", "phil coulson", "phillip coulson", "natasha romanoff", "clint barton", "clinton barton", "tony stark", "anthony stark", "sam wilson", "samuel wilson", "sharon carter", "bruce banner", "robert banner", "wanda maximoff", "rhodey rhodes", "james rhodes", "scott lang"];
    var i;
    var isNameValid = false;
    var msg = "";
    var agentBOX = document.getElementById("agentBOX");
    var agentName = agentBOX.value;
    var agentNameLower = agentName.toLowerCase();
    var loginStatusBOX = document.getElementById("loginStatusBOX");
    for (i = 0; i < agents.length;i++) {
        if (agents[i] === agentNameLower) {
            isNameValid = true;
        }
    }
    if (isNameValid === true) {
        isLoggedIn = true;
        loginStatusBOX.value = `Logged in as ${agentName}`;
        loggedInAgentName = agentName;
        loggedInAgentNameLower = agentNameLower;
        msg += `Welcome ${agentName}\n`;
        msg += `Access Granted\n`;
        msg += `Clearence Acquired\n`;
        alert(msg);
    }
    else {
        alert(`Access Denied`);
        isLoggedIn = false;
        loggedInAgentName = "---";
        loggedInAgentNameLower = "---";
        loginStatusBOX.value = "Not logged in";
        reset();
    }
}
function reset() {
    var agentBOX = document.getElementById("agentBOX");
    agentBOX.value = "";
    agentBOX.focus();
}
function getInfo() {
    if (isLoggedIn === false) {
        alert(`Enter a first name and a last name ONLY`);
        agentBOX.focus();
    }
    else {
        alert(`You should check upcoming missions...`);
    }
}
function signOut() {
    if (isLoggedIn === true) {
        isLoggedIn = false;
        loggedInAgentName = "---";
        loggedInAgentNameLower = "---";
        loginStatusBOX.value = "Not logged in";
        reset();
    }
    agentBOX.focus();
}
function displayMissions() {
    var msg = "";
    if (isLoggedIn === false) {
        msg += `Access unauthorized\n`;
        msg += `Clearence not detected\n`;
        msg += `Log in to view missions...\n`;
        agentBOX.focus();
    }
    else {
        msg += `Mission 1: Locate the Winter Soldier\n`;
        msg += `Mission 2: Observe Project Insight\n`;
    }
    alert(msg);
}

function checkInsight() {
    //var agentBOX = document.getElementById("agentBOX");
    //var agentName = agentBOX.value;
    //var agentNameLower = agentName.toLowerCase();
    if (isLoggedIn) {
        if (loggedInAgentNameLower === "nick fury") {
            displayInsightMsg();
        }
        else {
            var msg = "";
            msg = prompt(`${loggedInAgentName} does not have clearence for Project Insight.
Response:`);
            if (msg === "Director override. Fury, Nicholas J.") {
                displayInsightMsg();
            }
            else {
                alert(`Access unauthorized`);
            }
        }
    }
    else {
        alert(`Access unauthorized
Clearence not detected
Log in to view Project Insight...\n`);
        agentBOX.focus();
    }
}

function displayInsightMsg() {
    var agentBOX = document.getElementById("agentBOX");
    var agentName = agentBOX.value;
    // Welcome ${agentName} 
    // Access granted
    alert(`Confirmed.
Info:
Project Insight includes three next generation Helicarriers
synced to a network of targeting satellites.
Launched from the Lemurian Star.
Once they are in the air they never need to come down.`);
}

//==================================================================================
function initialize() {
    var myLatlng = new google.maps.LatLng(43.565529, -80.197645);
    var mapOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //=====Initialise Default Marker    
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
        //=====You can even customize the icons here
    });

    //=====Initialise InfoWindow
    var infowindow = new google.maps.InfoWindow({
        content: "<B>Skyway Dr</B>"
    });

    //=====Eventlistener for InfoWindow
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
