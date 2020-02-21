function langBtn() {
    console.log("Debug: Button pressed")
    var langButton = document.getElementById("langButton")
    var longForm = document.getElementById("longForm")
    var shortForm = document.getElementById("shortForm")
    var importantAlert = document.getElementById("importantAlert")
    var importantText = document.getElementById("importantText")

    if (document.getElementById("langButton").getAttributeNode("value").value  == "Español") {
        console.log("Debug: Spanish Lang Pass")
        langButton.value = "English"
        longForm.innerHTML = "Use esta versión si el accidente requirió algún tipo de atención médica más allá de la posible atención de Veneer Tech. Los ejemplos incluyen: corte profundo, extremidad rota, quemadura severa, etc."
        shortForm.innerHTML = "Use esta versión si el accidente requirió algún tipo de atención médica que Veneer Tech pudo proporcionar. Los ejemplos incluyen: astilla, corte pequeño, sangrado nasal, etc."
        importantAlert.innerHTML = "IMPORTANTE POR FAVOR LEA"
        importantText.innerHTML = "Para ver un formulario en otro idioma, haga clic en la esquina superior derecha del formulario."
        return
    } else {
        console.log("Debug: English Lang Pass")
        langButton.value = "Español"
        longForm.innerHTML = "Use this version if the accident required any form of medical care beyond the possible care of Veneer Tech. Examples include: deep cut, broken limb, severe burn, etc."
        shortForm.innerHTML = "Use this version if the accident required any type of medical care that Veneer Tech was able to provide. Examples include: splinter, small cut, nosebleed, etc."
        importantAlert.innerHTML = "IMPORTANT PLEASE READ"
        importantText.innerHTML = "To view a form in another language, click on the top right corner of the form."
        return
    }
}