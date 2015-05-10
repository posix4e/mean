'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$timeout',
	function($scope, Authentication, $timeout) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.test = "fuck!"


		var promise = new FULLTILT.getDeviceOrientation({ 'type': 'world' });

	 	var deviceOrientation;

		$scope.fortune = "you will have a wonderful day and someone will share a cigratte with you."

	  promise.then(function(controller) {
	      // Store the returned FULLTILT.DeviceOrientation object
	      deviceOrientation = controller;
				draw()

	    })
	    .catch(function(message) {
	      console.error(message);

	      // Optionally set up fallback controls...
	      // initManualControls();
	    });

			function draw() {
					if (deviceOrientation) {

						// Obtain the *screen-adjusted* normalized device rotation
						// as Quaternion, Rotation Matrix and Euler Angles objects
						// from our FULLTILT.DeviceOrientation object
						$scope.quaternion = deviceOrientation.getScreenAdjustedQuaternion();
						$scope.matrix = deviceOrientation.getScreenAdjustedMatrix();
						$scope.euler = deviceOrientation.getScreenAdjustedEuler();

						$timeout( function(){
							draw()
						}, 1000 )

				}

			}

	}
]);
