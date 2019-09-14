const axios = require("axios");

module.exports = jobPath => {
  const jenkinsUrl = process.env.JENKINS_URL;
  const jenkinsUser = process.env.JENKINS_BUILD_USER;
  const jenkinsPassword = process.env.JENKINS_BUILD_PASSWORD;
  const jenkinsToken = process.env.JENKINS_BUILD_TOKEN;

  const buildUrl = `https://${jenkinsUser}:${jenkinsPassword}@${jenkinsUrl}/${jobPath}/build?token=${jenkinsToken}&delay=0sec`;

  axios
    .get(buildUrl)
    .then(function() {})
    .catch(function() {});
};
