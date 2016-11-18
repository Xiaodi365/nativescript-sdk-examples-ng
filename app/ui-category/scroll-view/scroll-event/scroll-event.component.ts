// >> scroll-view-event-code
import { Component } from "@angular/core";
import { setTimeout } from "timer";
import { ScrollEventData } from "ui/scroll-view";

@Component({
    selector: "scroll-event-component",
    // >> (hide)
    styleUrls: ["./style.css"],
    // << (hide)
    moduleId: module.id,
    templateUrl: "./scroll-event.component.html"
})
export class ScrollEventComponent {
    public status = "not scrolling";

    public onScroll(args: ScrollEventData) {
        this.status = "scrolling";
        let that = this;
        setTimeout(function () {
            that.status = "not scrolling";
        }, 300);

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }
}
// << scroll-view-event-code
