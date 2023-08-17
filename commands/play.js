const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play a song with name or url")
    .addStringOption((option) =>
      option.setName("query").setDescription("input Name/URL of song")
    ),
  async execute(interaction, distube) {
    const query = interaction.options.getString("query");

    const voicechannel = interaction.member.voice.channel;

    if (!voicechannel)
      return await interaction.reply("You need to be in voice channel!");
    if (!query) {
      await interaction.reply("Please enter a song url or query to search");
    } else {
      await interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setTitle(`Playing a song!`)
            .setDescription(`playing ${query}`)
            .setColor(`Blurple`),
        ],
      });
      await distube.play(voicechannel, query);
    }
  },
};
