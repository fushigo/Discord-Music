const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("show queue on server!"),
  async execute(interaction, distube) {
    const queue = distube.getQueue(interaction);
    if (!queue) return await interaction.reply("There is nothing playing!");
    const q = queue.songs
      .map(
        (song, i) =>
          `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${
            song.formattedDuration
          }\``
      )
      .join("\n");
    await interaction.reply(`**Server Queue**\n${q}`);
  },
};
