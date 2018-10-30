var date = new Date();
var month = date.getMonth();

var backgroundLoc;
var backgroundFile;
var backgroundSrc;
var page = document.title;


switch (month) {
	case 2:
	case 1:
	case 11:
		backgroundLoc = "assets/icons/Winter/";
		break;

	case 10:
	case 9:
	case 8:
		backgroundLoc = "assets/icons/Autumn/";
		break;
	case 7:
	case 6:
	case 5:
		backgroundLoc = "assets/icons/Summer/";
		break;
	case 4:
	case 3:
	case 2:
		backgroundLoc = "assets/icons/Spring/";
		break;
}


switch (page) {
	case "Quickdial":
		backgroundSrc = backgroundLoc + "main.jpg";
		break;
	case "Staff":
		backgroundSrc = "../" + backgroundLoc + "staff.jpg";
		break;
	case "Teacher":
		backgroundSrc = "../" + backgroundLoc + "teachers.jpg";
		break;
	case "Secondary":
		backgroundSrc = "../" + backgroundLoc + "hhs-hms.jpg";
		break;
	case "Elementary":
		backgroundSrc = "../" + backgroundLoc + "elementary.jpg";
		break;
}

document.getElementById("background").style.backgroundImage = "url('" + backgroundSrc + "')";
	

