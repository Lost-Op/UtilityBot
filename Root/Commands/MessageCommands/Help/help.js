const emotes = require(`../../../Storage/json/emotes.json`)
const db = require('quick.db')
const colors = require(`../../../Storage/json/colors.json`)
const Discord = require('discord.js')

module.exports = {
        name: `help`,
        aliases: [`h`],
        onlyUsers: ["509765051435974692", "691644619758370846"],
        cooldown: 300000,

        run: async (client, message, args, container) => {
                var prefix = db.get(`prefix_${message.guild.id}` || container.Config.prefix)
                let lang = client.langs.get(db.get(`lang_${message.guild.id}`) || 'en')

                const embed =
                        new container.Discord.MessageEmbed().setColor(colors.PERSO).setTitle(lang.commands.helpa[3]).setDescription(lang.commands.helpa[4].replace('{PREFIX}', prefix)).setFooter({
                                text: `© ${client.user.username}`,
                                iconURL: client.user.avatarURL()
                        }).setTimestamp()


                const embed2 =
                        new container.Discord.MessageEmbed().setColor(colors.PERSO).setTitle(lang.commands.help.moderation[0]).setDescription(lang.commands.helpa[4].replace('{PREFIX}', prefix)).setFooter({
                                text: `© ${client.user.username}`,
                                iconURL: client.user.avatarURL()
                        }).setTimestamp().addFields({
                                name: `${emotes.autre.banned} ┇ BAN`,
                                value: lang.commands.help.moderation[1].replace('{PREFIX}', prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_c} ┇ KICK`,
                                value: lang.commands.help.moderation[2].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.mute} ┇ TIMEOUT`,
                                value: lang.commands.help.moderation[14]
                        }, {
                                name: `${emotes.autre.mute} ┇ MUTE`,
                                value: lang.commands.help.moderation[3].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.unmute} ┇ UNMUTE`,
                                value: lang.commands.help.moderation[4].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.cool_pika} ┇ CLEAR`,
                                value: lang.commands.help.moderation[5].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_w} ┇ WARN`,
                                value: lang.commands.help.moderation[6].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.cool_pika} ┇ DELETE-WARNS`,
                                value: lang.commands.help.moderation[7].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.blob.blob_t} ┇ TOTAL-WARNS`,
                                value: lang.commands.help.moderation[8].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_s} ┇ SET-PREFIX`,
                                value: lang.commands.help.moderation[9].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_s} ┇ SET-WELCOME`,
                                value: lang.commands.help.moderation[10].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_s} ┇ SET-BYE`,
                                value: lang.commands.help.moderation[11].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.intelligent} ┇ SET-LOGS`,
                                value: lang.commands.help.moderation[12].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.intelligent} ┇ SET-lang`,
                                value: `${prefix}set-lang`,
                                inline: true
                        })


                const embed3 =
                        new container.Discord.MessageEmbed().setColor(colors.PERSO).setTitle(`🎲 ┇ ${lang.commands.help.fun[0]}`).setDescription(lang.commands.helpa[4].replace('{PREFIX}', prefix)).setFooter({
                                text: `© ${client.user.username}`,
                                iconURL: client.user.avatarURL()
                        }).setTimestamp().addFields({
                                name: `${emotes.blob.blob_p} ┇ 8BALL`,
                                value: lang.commands.help.fun[3].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.dog} ┇ FUN-DOG`,
                                value: lang.commands.help.fun[4].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.dog} ┇ DOG`,
                                value: lang.commands.help.fun[5].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.cat} ┇ FUN-CAT`,
                                value: lang.commands.help.fun[6].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.cat} ┇ CAT`,
                                value: lang.commands.help.fun[7].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.fox} ┇ FUN-FOX`,
                                value: lang.commands.help.fun[8].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.fox} ┇ FOX`,
                                value: lang.commands.help.fun[9].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.bird} ┇ FUN-BIRD`,
                                value: lang.commands.help.fun[10].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.bird} ┇ BIRD`,
                                value: lang.commands.help.fun[11].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_t} ┇ ${lang.commands.help.fun[1]}`,
                                value: lang.commands.help.fun[12].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_t} ┇ ${lang.commands.help.fun[2]}`,
                                value: lang.commands.help.fun[13].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_p} ┇ MESSAGE`,
                                value: lang.commands.help.fun[14].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.blob.blob_t} ┇ MESSAGE-ANONYME`,
                                value: lang.commands.help.fun[15].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_ar} ┇ WANTED`,
                                value: lang.commands.help.fun[16].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.intelligent} ┇ RESPECT+`,
                                value: lang.commands.help.fun[17].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_wa} ┇ SLAP`,
                                value: lang.commands.help.fun[18].replace("{PREFIX}", prefix),
                                inline: true
                        })


                const embed4 =
                        new container.Discord.MessageEmbed().setColor(colors.PERSO).setTitle(`❓ ┇ ${lang.commands.help.info[0]}`).setDescription(lang.commands.helpa[4].replace('{PREFIX}', prefix)).setFooter({
                                text: `© ${client.user.username}`,
                                iconURL: client.user.avatarURL()
                        }).setTimestamp().addFields({
                                name: `${emotes.blob.blob_p} ┇ PING`,
                                value: lang.commands.help.info[2].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_p} ┇ UPTIME`,
                                value: lang.commands.help.info[3].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_p} ┇ USER-INFO`,
                                value: lang.commands.help.info[4].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_p} ┇ BOT-INFO`,
                                value: lang.commands.help.info[5].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_p} ┇ ${lang.commands.help.info[1]}`,
                                value: lang.commands.help.info[6].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.cool_pika} ┇ INVITE`,
                                value: lang.commands.help.info[7].replace("{PREFIX}", prefix),
                                inline: true,
                        })


                const embed5 =
                        new container.Discord.MessageEmbed().setColor(colors.PERSO).setFooter({
                                text: `© ${client.user.username}`,
                                iconURL: client.user.avatarURL()
                        }).setTimestamp().setTitle(`📚 ┇ ${lang.commands.help.util[0]}`).setDescription(lang.commands.helpa[4].replace('{PREFIX}', prefix)).addFields({
                                name: `${emotes.blob.blob_t} ┇ ${lang.commands.help.util[1]}`,
                                value: lang.commands.help.util[4].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.giveaway_1} ┇ STAR-G`,
                                value: lang.commands.help.util[5].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.autre.giveaway_2} ┇ REROLL-GIVEAWAY`,
                                value: lang.commands.help.util[6].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_t} ┇ COLOR`,
                                value: lang.commands.help.util[7].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_b} ┇ VOTE`,
                                value: lang.commands.help.util[8].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_p} ┇ AVATAR`,
                                value: lang.commands.help.util[9].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.pepe.pepe_w} ┇ REPORT`,
                                value: lang.commands.help.util[10].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.blob.blob_t} ┇ ${lang.commands.help.util[2]} `,
                                value: lang.commands.help.util[11].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.autre.intelligent} ┇ CALCUL`,
                                value: lang.commands.help.util[12].replace("{PREFIX}", prefix),
                                inline: true
                        }, {
                                name: `${emotes.blob.blob_t} ┇ ${lang.commands.help.util[3]}`,
                                value: lang.commands.help.util[13].replace("{PREFIX}", prefix),
                                inline: true,
                        }, {
                                name: `${emotes.blob.blob_t} ┇ SUPPORT`,
                                value: lang.commands.help.util[14].replace("{PREFIX}", prefix),
                                inline: true,
                        })

                message.reply({
                        embeds: [embed]
                })

        },
};