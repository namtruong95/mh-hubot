// Description:
//    Script deploy web using hubot
//
// Commands:
//    bot <site>:<env> deploy
//

const jenkinsBuild = require("./helpers/jenkins-build");
const sites = ["api", "admin-web", "clinic-web"];
const environments = ["dev", "stg", "prod"];

module.exports = robot => {
  const regexMatch = new RegExp(
    `(${sites.join("|")}):(${environments.join("|")}) deploy+$`,
    "i"
  );

  robot.respond(/.*/, res => {
    if (regexMatch.test(res.message.text)) {
      const target = res.message.text.match(regexMatch);

      jenkinsBuild(`job/${target[2]}/job/${target[1]}`);
      res.reply(
        `Deploy: ${target[2]} » ${target[1]} \nĐại ca chờ em chút xíu. :bow:`
      );
      return;
    }

    res.reply("Đại ca sai rồi. :emo_tears:");
  });
};
