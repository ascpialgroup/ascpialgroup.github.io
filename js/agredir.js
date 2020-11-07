// Obtaining navigator language
var userLang = navigator.language || navigator.userLanguage;

// Checking language
if (userLang.startsWith("fr")) {
    // Redirecting to french page
    window.location.replace("fr");
} else {
    // Redirecting to english page
    window.location.replace("en");
}