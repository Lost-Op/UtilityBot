const db = require('quick.db')
const Discord = require('discord.js')
const colors = require('../../../Storage/json/colors.json')
const config = require('../../../Storage/json/Config.json')

module.exports = {
    name: "HelpWebSite",
    run: async(client, interaction) => {
        var prefix = db.get(`prefix_${interaction.guild.id}`) || 'u!'
        let lang = client.langs.get(db.get(`lang_${interaction.guild.id}`) || 'en')

        try {
        interaction.user.send({
            embeds: [
                new container.Discord.MessageEmbed()
            .setColor(colors.PERSO)
            .setTitle(lang.commands.help.helpSwe[1].replace('{PREFIX}', prefix))
            .setDescription(lang.commands.helpa[4])
            .addFields({
                name: lang.commands.helpa[5],
                value: lang.commands.help.helpSwe[2]
            }, {
                name: lang.commands.helpa[6],
                value: `\`${prefix}website\``,
                inline: true
            }, {
                name: lang.commands.helpa[7],
                value: `\`${prefix}s-w\`\n${prefix}site-web`,
                inline: true
            }, {
                name: lang.commands.helpa[2],
                value: lang.commands.helpa[1]
            }, {
                name: lang.commands.helpa[9],
                value: "`Util`"
            }, {
                name: "Cooldown",
                value: "20s"
            }, {
                name: lang.commands.helpa[10],
                value: lang.commands.helpa[11]+`\n\n[${lang.commandsa[0]}](https://clh-c.com/)`
            })
             .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.displayAvatarURL()})
            .setTimestamp()
            ]
        }).then(() => {
            interaction.reply({
                content: lang.commands.help.success[0],
                ephemeral: true
        })
        })
    } catch {
            interaction.reply(`Please active your DMs.`)
    }
    }
}
