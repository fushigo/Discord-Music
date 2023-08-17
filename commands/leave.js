const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leave")
    .setDescription("leave from voice channel!"),
  async execute(interaction, distube) {
    await interaction.reply("Bot Leave!");
    await distube.voices.leave(interaction);
  },
};
