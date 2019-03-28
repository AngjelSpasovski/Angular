//
// DO NOT CHANGE THIS SCRIPT FILE
//
"use strict";
function wapi_add_custom_widget(wpa_custom_chart, json) {
    try {
        if (window["g_custom_widget_reference"] == null) {
            window["g_custom_widget_reference"] = [];
        }
        // check if json is a valid one
        JSON.parse(JSON.stringify(json));
        // check if json has all parameters
        if(json["class"] == null) {
            throw new Error("class parameter is missing");
        }  
        // check if variable exists
        if(wpa_custom_chart == null) {
            throw new Error("custom chart is not defined");
        }
        // add 'template' in this json
        json["template"] = wpa_custom_chart;
        // add 'b_kernel' in this json
        if(json["b_kernel"] == null) {
            json["b_kernel"] = 0;
        }
        // check if class is already existing
        let jsonIsAlreadyExisting = false;
        for(let i = 0; i < window["g_custom_widget_reference"].length; i++) {
            if(window["g_custom_widget_reference"][i].class == json.class) {
                jsonIsAlreadyExisting = true;
                break;
            }
        }
        // if json is not existing, add the json to map
        if(jsonIsAlreadyExisting == false) {
            window["g_custom_widget_reference"].push(json);
            // if registration receiver is implemented call the function
            if(wpa_custom_chart["ev_class_registered"] != null && typeof wpa_custom_chart["ev_class_registered"] === 'function') {
                wpa_custom_chart.ev_class_registered(json["class"]);
            }
        }
    }
    catch(error) {
        console.error("[ERROR]: _internalScript.wapi_add_custom_widget > error in adding custom chart from json\n" + JSON.stringify(json, undefined, 2) + "\nSee details below", error);
    }
}
