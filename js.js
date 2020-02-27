function langBtn() {
    var langButton = document.getElementById("langButton")
    var longForm = document.getElementById("longForm")
    var shortForm = document.getElementById("shortForm")
    var importantAlert = document.getElementById("importantAlert")
    var importantText = document.getElementById("importantText")
    var SuperVisorReport = document.getElementById("SuperVisorReport")
    var FirstAidOnlyReport = document.getElementById("FirstAidOnlyReport")

    if (document.getElementById("langButton").getAttributeNode("value").value == "Español") {
        langButton.value = "English"
        longForm.innerHTML = "Use esta versión si el accidente requirió algún tipo de atención médica más allá de la posible atención de Veneer Tech. Los ejemplos incluyen: corte profundo, extremidad rota, quemadura severa, etc."
        shortForm.innerHTML = "Use esta versión si el accidente requirió algún tipo de atención médica que Veneer Tech pudo proporcionar. Los ejemplos incluyen: astilla, corte pequeño, sangrado nasal, etc."
        importantAlert.innerHTML = "IMPORTANTE POR FAVOR LEA"
        importantText.innerHTML = "Para ver un formulario en otro idioma, haga clic en la esquina superior derecha del formulario."
        SuperVisorReport.innerHTML = "Informe de accidente de forma larga con lesión grave"
        FirstAidOnlyReport.innerHTML = "Informe de accidentes de primeros auxilios solamente"
        return
    } else {
        langButton.value = "Español"
        longForm.innerHTML = "Use this version if the accident required any form of medical care beyond the possible care of Veneer Tech. Examples include: deep cut, broken limb, severe burn, etc."
        shortForm.innerHTML = "Use this version if the accident required any type of medical care that Veneer Tech was able to provide. Examples include: splinter, small cut, nosebleed, etc."
        importantAlert.innerHTML = "IMPORTANT PLEASE READ"
        importantText.innerHTML = "To view a form in another language, click on the top right corner of the form."
        SuperVisorReport.innerHTML = "Severe Injuy Long Form Accident Report"
        FirstAidOnlyReport.innerHTML = "First Aid Only Accident Report"
        return
    }
}
