var name = "Ka'eo Ramos";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedName);
$("#header").append(formattedRole);