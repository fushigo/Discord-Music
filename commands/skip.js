const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Skip the song on queue"),
  async execute(interaction, distube) {
    const queue = distube.getQueue(interaction);
    if (!queue)
      return await interaction.channel.send(
        "There is nothing in the queue right now!"
      );
    try {
      const song = await queue.skip();
      await interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setTitle("Skip Song!")
            .setDescription(`Playing : ${song.name}`)
            .setColor("Blurple"),
        ],
      });
    } catch (error) {
      console.log(error);
    }
  },
};
