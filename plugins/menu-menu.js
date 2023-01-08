import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 💟 _${usedPrefix}grupos_
┣ 💟 _${usedPrefix}estado_
┣ 💟 _${usedPrefix}infobot_
┣ 💟 _${usedPrefix}speedtest_
┣ 💟 _${usedPrefix}donar_
┣ 💟 _${usedPrefix}grouplist_
┣ 💟 _${usedPrefix}owner_
┣ 💟 _${usedPrefix}script_
┣ 💟 _Bot_ 
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 _${usedPrefix}serbot_
┣ ඬ⃟ 🤖 _${usedPrefix}stop_
┣ ඬ⃟ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ☑️ _${usedPrefix}enable *welcome*_
┣ ☑️ _${usedPrefix}disable *welcome*_
┣ ☑️ _${usedPrefix}enable *modohorny*_
┣ ☑️ _${usedPrefix}disable *modohorny*_
┣ ☑️ _${usedPrefix}enable *antilink*_
┣ ☑️ _${usedPrefix}disable *antilink*_
┣ ☑️ _${usedPrefix}enable *antilink2*_
┣ ☑️ _${usedPrefix}disable *antilink2*_
┣ ☑️ _${usedPrefix}enable *detect*_
┣ ☑️ _${usedPrefix}disable *detect*_
┣ ☑️ _${usedPrefix}enable *audios*_
┣ ☑️ _${usedPrefix}disable *audios*_
┣ ☑️ _${usedPrefix}enable *autosticker*_
┣ ☑️ _${usedPrefix}disable *autosticker*_
┣ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ☑️ _${usedPrefix}disable *antiviewonce*_
┣ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ☑️ _${usedPrefix}disable *antitoxic*_
┣ ☑️ _${usedPrefix}enable *antitraba*_
┣ ☑️ _${usedPrefix}disable *antitraba*_
┣ ☑️ _${usedPrefix}enable *antiarabes*_
┣ ☑️ _${usedPrefix}disable *antiarabes*_
┣ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ 📥 _${usedPrefix}instagram2 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}instagram3 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ 📥 _${usedPrefix}ytmp4doc_
┣ 📥 _${usedPrefix}stickerpack_
┣ 📥 _${usedPrefix}play_
┣ 📥 _${usedPrefix}play.1_
┣ 📥 _${usedPrefix}play.2_
┣ 📥 _${usedPrefix}playdoc_
┣ 📥 _${usedPrefix}playlist_
┣ 📥 _${usedPrefix}playlist2_
┣ 📥 _${usedPrefix}spotify_
┣ 📥 _${usedPrefix}stickerly_
┣ 📥 _${usedPrefix}ringtone _
┣ 📥 _${usedPrefix}soundcloud_
┣ 📥 _${usedPrefix}imagen_
┣ 📥 _${usedPrefix}pinteret_
┣ 📥 _${usedPrefix}wallpaper_
┣ 📥 _${usedPrefix}wallpaper2_
┣ 📥 _${usedPrefix}pptiktok_
┣ 📥 _${usedPrefix}igstalk_
┣ 📥 _${usedPrefix}igstory_
┣ 📥 _${usedPrefix}tiktokstalk_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 💎 _${usedPrefix}add *<numero>*_
┣ 💎 _${usedPrefix}kick *<@tag>*_
┣ 💎 _${usedPrefix}kick2 *<@tag>*_
┣ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ 💎 _${usedPrefix}promote *<@tag>*_
┣ 💎 _${usedPrefix}demote *<@tag>*_
┣ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ 💎 _${usedPrefix}demote *<@tag>*_
┣ 💎 _${usedPrefix}infogroup_
┣ 💎 _${usedPrefix}resetlink_
┣ 💎 _${usedPrefix}link_
┣ 💎 _${usedPrefix}setname *<texto>*_
┣ 💎 _${usedPrefix}setdesc *<texto>*_
┣ 💎 _${usedPrefix}invocar *<texto>*_
┣ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ 💎 _${usedPrefix}setbye *<texto>*_
┣ 💎 _${usedPrefix}hidetag *<texto>*_
┣ 💎 _${usedPrefix}warn *<@tag>*_
┣ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ 💎 _${usedPrefix}listwarn_
┣ 💎 _${usedPrefix}fantasmas_
┣ 💎 _${usedPrefix}destraba_
┣ 💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🧧 _${usedPrefix}togifaud *<video>*_
┣ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ 🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
┣ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ 🖍️ _${usedPrefix}itssostupid_
┣ 🖍️ _${usedPrefix}pixelar_
┣ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣ 🔍 _${usedPrefix}google *<texto>*_
┣ 🔍 _${usedPrefix}letra *<texto>*_
┣ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ 🔍 _${usedPrefix}apkdone *<texto>*_
┣ 🔍 _${usedPrefix}apkgoogle *<texto>*_
┣ 🔍 _${usedPrefix}apkmody *<texto>*_
┣ 🔍 _${usedPrefix}apkshub *<texto>*_
┣ 🔍 _${usedPrefix}happymod *<texto>*_
┣ 🔍 _${usedPrefix}hostapk *<texto>*_
┣ 🔍 _${usedPrefix}revdl *<texto>*_
┣ 🔍 _${usedPrefix}toraccino *<texto>*_
┣ 🔍 _${usedPrefix}uapkpro *<texto>*_
┣ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃
┣ 🔊 _a_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ 🛠️ _${usedPrefix}zoom *<texto>*_
┣ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ 🛠️ _${usedPrefix}covid *<pais>*_
┣ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ 👽 _${usedPrefix}sfull *<imagen o video>*_
┣ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ 👽 _${usedPrefix}scircle *<imagen>*_
┣ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ 👽 _${usedPrefix}attp *<texto>*_
┣ 👽 _${usedPrefix}attp2 *<texto>*_
┣ 👽 _${usedPrefix}attp3 *<texto>*_
┣ 👽 _${usedPrefix}ttp *<texto>*_
┣ 👽 _${usedPrefix}ttp2 *<texto>*_
┣ 👽 _${usedPrefix}ttp3 *<texto>*_
┣ 👽 _${usedPrefix}ttp4 *<texto>*_
┣ 👽 _${usedPrefix}ttp5 *<texto>*_
┣ 👽 _${usedPrefix}pat *<@tag>*_
┣ 👽 _${usedPrefix}slap *<@tag>*_
┣ 👽 _${usedPrefix}kiss *<@tag>*_
┣ 👽 _${usedPrefix}dado_
┣ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ  />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 👑 > *<funcion>*
┣ 👑 => *<funcion>*
┣ 👑 $ *<funcion>*
┣ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ 👑 _${usedPrefix}resetprefix_
┣ 👑 _${usedPrefix}autoadmin_
┣ 👑 _${usedPrefix}leavegc_
┣ 👑 _${usedPrefix}cajafuerte_
┣ 👑 _${usedPrefix}blocklist_
┣ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ 👑 _${usedPrefix}enable *restrict*_
┣ 👑 _${usedPrefix}disable *restrict*_
┣ 👑 _${usedPrefix}enable *autoread*_
┣ 👑 _${usedPrefix}disable *autoread*_
┣ 👑 _${usedPrefix}enable *public*_
┣ 👑 _${usedPrefix}disable *public*_
┣ 👑 _${usedPrefix}enable *pconly*_
┣ 👑 _${usedPrefix}disable *pconly*_
┣ 👑 _${usedPrefix}enable *gconly*_
┣ 👑 _${usedPrefix}disable *gconly*_
┣ 👑 _${usedPrefix}enable *anticall*_
┣ 👑 _${usedPrefix}disable *anticall*_
┣ 👑 _${usedPrefix}enable *antiprivado*_
┣ 👑 _${usedPrefix}disable *antiprivado*_
┣ 👑 _${usedPrefix}enable *modejadibot*_
┣ 👑 _${usedPrefix}disable *modejadibot*_
┣ 👑 _${usedPrefix}msg *<texto>*_
┣ 👑 _${usedPrefix}banchat_
┣ 👑 _${usedPrefix}unbanchat_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}bc *<texto>*_
┣ 👑 _${usedPrefix}bcchats *<texto>*_
┣ 👑 _${usedPrefix}bcgc *<texto>*_
┣ 👑 _${usedPrefix}bcbot *<texto>*_
┣ 👑 _${usedPrefix}cleartpm_
┣ 👑 _${usedPrefix}restart_
┣ 👑 _${usedPrefix}update_
┣ 👑 _${usedPrefix}banlist_
┣ 👑 _${usedPrefix}addprem *<@tag>*_
┣ 👑 _${usedPrefix}delprem *<@tag>*_
┣ 👑 _${usedPrefix}listprem_
┣ 👑 _${usedPrefix}listcmd_
┣ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━━━━┛

`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '🌹 𝙾𝚆𝙽𝙴𝚁 🌹' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
