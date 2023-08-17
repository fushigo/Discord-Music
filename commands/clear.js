const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription(
      "Clear all messages in the channel within the last 14 days, Limit 100 Chat"
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),

  async execute(interaction) {
    const channel = interaction.channel;

    try {
      // Menghapus pesan dalam 14 hari terakhir
      const messages = await channel.messages.fetch();
      await channel.bulkDelete(messages, true);

      await interaction.reply("Message has been cleared");
    } catch (error) {
      console.error(error);
      await interaction.reply("Only delete message thatare under 14 days old");
    }
  },
};
