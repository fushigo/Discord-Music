const { Events, ActivityType } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    const startTime = moment();

    setInterval(() => {
      const uptime = moment.duration(moment().diff(startTime));
      client.user.setActivity(
        `${client.guilds.cache.size} Server and ${
          client.users.cache.size
        } User ${uptime.days()}d ${uptime.hours()}h ${uptime.minutes()}m ${uptime.seconds()}s`,
        { type: ActivityType.Watching }
      );
    }, 1000);

    console.log(`Client has Ready ${client.user.tag}`);
  },
};
