import * as constants from "./constants.js"
import * as draw from "./draw.js"
import * as eventFunctions from "./eventFunctions.js"
import * as parse from "./parse.js"


function preProcessData(data) {
    let [geographicalData, meteoriteLandings] = data,
        projection = constants.PROJECTION


    geographicalData = geographicalData.features

    meteoriteLandings = meteoriteLandings.filter(datum => datum.year >= 860 && datum.year <= 2013)
    meteoriteLandings.forEach(function(datum) {
            [datum.longitude, datum.latitude] = projection([datum.longitude, datum.latitude])

            if (datum.country === "United States") datum.country = "USA"
            else if (datum.country === "United Kingdom") datum.country = "England"
        })
    
    return [geographicalData, meteoriteLandings]
}


function initializeConstants(geographicalData, meteoriteLandings) {
    constants.setGeographicalData(geographicalData)
    constants.setMeteoriteLandings(meteoriteLandings)
}


function initializeEvents(events, handler) {
    $("#fellCheckbox").on("change", null, null, eventFunctions.updateMeteoriteType)
    $("#foundCheckbox").on("change", null, null, eventFunctions.updateMeteoriteType)

    $("#rangeOne").on("input", null, null, eventFunctions.updateRangeOne)
        .on("change", null, null, eventFunctions.updateMassRange)
    $("#rangeTwo").on("input", null, null, eventFunctions.updateRangeTwo)
        .on("change", null, null, eventFunctions.updateMassRange)
}


export function initializeVisualizations() {
    draw.choropleth("#mapOne", true)
    draw.choropleth("#mapTwo", false)
    draw.map("#mapThree")
    draw.circles("#mapThree")
    draw.barChart("#barChart")
    draw.lineChart("#lineChart")
}

$(function() {
    Promise.all([
        d3.json("./assets/json/countries.json"),
        d3.dsv(";", "./assets/csv/meteorite_landings.csv",
            parse.meteoriteLandings)

    ]).then(function(data) {
        const [GEOGRAPHICAL_DATA, METEORITE_LANDINGS] = preProcessData(data)


        initializeConstants(GEOGRAPHICAL_DATA, METEORITE_LANDINGS)
        initializeEvents()
        initializeVisualizations()
    })
})