"use strict";

String.prototype.visualLength = function visualLength(size, family) {
    const ruler = $("#ruler").css({
        "font-family": family || "inherit",
        "font-size": size || "inherit"
    });
    ruler.text(this);
    return ruler.width();
};
$(() => {
    $(".fit").each(function adjust() {
        const str = $(this);
        const containerWidth = str.width();
        const strWidth = str[0].innerText.visualLength("13pt");
        if (strWidth > containerWidth) {
            str.html(`<span>${str.html()}</span>`);
            str.find("span").css("transform", `scale(${containerWidth / strWidth})`);
        }
    });
});