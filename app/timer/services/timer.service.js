"use strict";

angular.module("timer")

	.factory("timerService", function ( $rootScope, $timeout ) {

		var t;

		var me = {};

		//this is to enable time to display in two digits
		var leadingZero = function (num) {
			return (num < 10) ? "0" + num : num;
		};

		//displays the timer
		var showTimer = function () {
			var seconds = me.time;
			var hours = Math.floor(seconds / 3600);
			seconds -= hours * 3600;
			var minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60;
			me.timeStr = leadingZero(hours) + " hrs " + leadingZero(minutes) + " mins " + leadingZero(seconds) + " secs ";
		};

		//starts a timer with a duration set in minutes 
		var startTimer = function () {
			showTimer();
			if (me.time === 0) {
				$rootScope.$broadcast('TimeUp');
			}
			else {
				me.time--;
				t = $timeout(startTimer, 1000);	
			}
		};

		//stops a preset timer
		var stopTimer = function() {
			$timeout.cancel(t);
		};

		/*var updateTimer = function() {
			var seconds = me.time;
			var	hours = Math.floor(seconds / 3600);
			seconds -= hours * 3600;
			var minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60;
			me.timeStr = leadingZero(hours) + " hrs " + leadingZero(minutes) + " mins " + leadingZero(seconds) + " secs";
		};

		var tick = function () {

			if (time <= 0) {

				$rootScope.$broadcast('TimeUp');
				return;
			}
			time -= 1;
			updateTimer();
			$timeout(tick, 1000);

		};*/

		return {

			/*startTimer: function (duration) {

				time = duration * 60;
				time -= 1;

				updateTimer();

				$timeout(tick, 1000);
			},*/

			timer: function(duration) {
				me.time = duration * 60;
				me.time -= 1;
				stopTimer();
				showTimer();
				startTimer();
			},

			timeStr: function () {
				return me.timeStr;
			}

		};

	});