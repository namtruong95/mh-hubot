module.exports = {
  apps: [
    {
      name: "mh-hubot",
      script: "./bin/hubot",
      args: "--name mh-hubot --adapter rocketchat",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      error_file: "./logs/error.log",
      out_file: "./logs/access.log",
      interpreter: "bash"
    }
  ]
};
