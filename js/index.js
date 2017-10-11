$(function() {

    var Panels = (function() {

        var panelLeft = document.querySelector('.panels__side--left');
        var panelRight = document.querySelector('.panels__side--right');
        var left = document.querySelector('.arrow--left');
        var right = document.querySelector('.arrow--right');

        var openLeft = function() {
            panelLeft.classList.toggle('panels__side--left-active');
            panelRight.classList.toggle('panels__side--right-hidden');
        };

        var openRight = function() {
            panelRight.classList.toggle('panels__side--right-active');
            panelLeft.classList.toggle('panels__side--left-hidden');
        };

        var bindActions = function() {
            left.addEventListener('click', openLeft, false);
            right.addEventListener('click', openRight, false);
        };

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Panels.init();
});
