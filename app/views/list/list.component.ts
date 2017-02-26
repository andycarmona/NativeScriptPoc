import { Component, ElementRef, ViewChild } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView)

@Component({
    selector: "list",
    template: `
    <GridLayout>
        <MapView (mapReady)="onMapReady($event)"></MapView>
    </GridLayout>
    `
})

export class ListComponent {

    @ViewChild("MapView") mapView: ElementRef;

    constructor() {

    }

    //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
    };
}

