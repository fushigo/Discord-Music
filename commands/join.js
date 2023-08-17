const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("bot join on voice channel"),
  async execute(interaction, distube) {
    let voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) {
      return await interaction.reply(`You must be in a voice channel!`);
    }
    await interaction.reply("Bot join on voice channel");
    await distube.voices.join(voiceChannel);
  },
};
