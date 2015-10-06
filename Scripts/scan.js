document.addEventListener("deviceready", function(e) {
	
	cordova.plugins.barcodeScanner.scan(function(result) {
		RocketMobileApplication.getEntity("TextArea1").setProperty("value", result.text);
		window.open(result.text, '_system');
	}, function(error) {
		// alert("Scanning failed: " + error);
	});
			
}, "false");

