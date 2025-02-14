document.addEventListener("DOMContentLoaded", function() {
    var tooltipTrigger = document.querySelector(".tooltip-trigger");
    var tooltip = document.getElementById("tooltip");

    tooltipTrigger.addEventListener("mouseover", function() {
        var tooltipText = tooltipTrigger.getAttribute("data-tooltip");
        tooltip.innerHTML = tooltipText;
        tooltip.style.top = tooltipTrigger.offsetTop + tooltipTrigger.offsetHeight + "px";
        tooltip.style.left = tooltipTrigger.offsetLeft + "px";
        tooltip.classList.add("show");
    });

    tooltipTrigger.addEventListener("mouseout", function() {
        tooltip.classList.remove("show");
    });
});