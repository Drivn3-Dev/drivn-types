module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    bump: {
      options: {
        files: ["package.json"],
        updateConfigs: [],
        commit: true,
        commitMessage: "Release v%VERSION%",
        commitFiles: ["package.json"],
        createTag: true,
        tagName: "v%VERSION%",
        tagMessage: "Version %VERSION%",
        push: true,
        pushTo: "develop",
        gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d",
        globalReplace: false,
        prereleaseName: false,
        metadata: "",
        regExp: false,
      },
    },
  });

  // Load the plugin that provides the "uglify" task.

  // Default task(s).
  grunt.registerTask("default", ["uglify"]);
};
