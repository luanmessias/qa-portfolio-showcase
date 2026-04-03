module.exports = {
	default: {
		paths: ["features/**/*.feature"],
		requireModule: ["ts-node/register"],
		require: ["step_definitions/**/*.ts"],
		format: ["progress", "html:cucumber-report.html"]
	}
}
