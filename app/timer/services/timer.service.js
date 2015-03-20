"use strict";

angular.module("timer")

	.factory("timerService", function ( $rootScope, $timeout ) {

		var time;

		var me = {};

		var leadingZero = function (num) {
			return (num < 10) ? "0" + num : + num;
		};

		var updateTimer = function() {
			var seconds = time;
			var	hours = Math.floor(seconds / 3600);
			seconds -= hours * 3600;
			var minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60;
			me.timeStr = "HH: " leadingZero(hours) + "MM: " + leadingZero(minutes) + "SS: " + leadingZero(seconds);
		};

		var tick = function () {

			if (time <= 0) {

				$rootScope.$broadcast('TimeUp');
				return;
			}
			time -= 1;
			updateTimer();
			$timeout(tick, 1000);

		};

		return {

			startTimer: function (duration) {

				time = duration * 60;
				time -= 1;

				updateTimer();

				$timeout(tick, 1000);


			},

			timeStr: function () {
				return me.timeStr;
			}

		};

	});