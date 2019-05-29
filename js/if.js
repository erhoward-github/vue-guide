var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});
var hider = window.setInterval(function(){
    app3.seen = !app3.seen;
}, 2000);
