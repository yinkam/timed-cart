"use strict";

angular.module("timer")
	.controller("timerController", function ( timerService ) {

		var me = this;
		
		me.startTimer = function (duration) {

			return timerService.startTimer(duration);

		};

		me.timeStr = function () {

			return timerService.timeStr();
		
		};


		/*var me = this;

		var tick = function () {

			if (time <= 0) {
				$window.alert("time is up");
				return;
			}
			time -= 1;
			updateTimer();
			$timeout(tick, 1000);

		};

		var time;

		me.startTimer = function (duration) {
			time = duration * 60;
			time -= 1;
			updateTimer();
			$timeout(tick, 1000);
		};

		var updateTimer = function() {
			var seconds = time,
				minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60;
			var	hours = Math.floor(seconds / 3600);
			seconds -= hours * 3600;
			me.timeStr = leadingZero(hours) + " : " + leadingZero(minutes) + " : " + leadingZero(seconds);
		};

		var leadingZero = function (num) {
			return (num < 10) ? "0" + num : + num;
		};*/

	});