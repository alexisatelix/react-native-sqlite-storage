module.exports = {
	dependency: {
		platforms: {
			android: {
				sourceDir: './platforms/android',
				packageImportPath: "import io.liteglue.SQLitePluginPackage;",
          		packageInstance: "new SQLitePluginPackage()",
			}
		}
	}
}
