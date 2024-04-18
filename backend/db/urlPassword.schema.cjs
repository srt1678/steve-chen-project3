const Schema = require("mongoose").Schema;

module.exports = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
        urlPassword: {
			type: String,
			required: true,
		},
	},
	{ collection: "urlPassword" }
);
