const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Stopping when bot playing some music"),
  async execute(interaction, distube) {
    const queue = distube.getQueue(interaction);
    if (!queue)
      return interaction.reply(`There is nothing in the queue right now!`);
    queue.stop();
    await interaction.reply("Music has stopped");
  },
};
