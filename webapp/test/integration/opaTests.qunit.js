/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["efmg/prjctinv/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
