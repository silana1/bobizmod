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
salam cv alik 
follow me here instagram.com/noureddine_ouafy

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
┣_${usedPrefix}serbot_
┣_${usedPrefix}stop_
┣_${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣☑️_${usedPrefix}enable *welcome*_
┣☑️_${usedPrefix}disable *welcome*_
┣☑️_${usedPrefix}enable *modohorny*_
┣☑️_${usedPrefix}disable *modohorny*_
┣☑️_${usedPrefix}enable *antilink*_
┣☑️_${usedPrefix}disable *antilink*_
┣☑️_${usedPrefix}enable *antilink2*_
┣☑️_${usedPrefix}disable *antilink2*_
┣☑️_${usedPrefix}enable *detect*_
┣☑️_${usedPrefix}disable *detect*_
┣☑️_${usedPrefix}enable *audios*_
┣☑️_${usedPrefix}disable *audios*_
┣☑️_${usedPrefix}enable *autosticker*_
┣☑️_${usedPrefix}disable *autosticker*_
┣☑️_${usedPrefix}enable *antiviewonce*_
┣☑️_${usedPrefix}disable *antiviewonce*_
┣☑️_${usedPrefix}enable *antitoxic*_
┣☑️_${usedPrefix}disable *antitoxic*_
┣☑️_${usedPrefix}enable *antitraba*_
┣☑️_${usedPrefix}disable *antitraba*_
┣☑️_${usedPrefix}enable *antiarabes*_
┣☑️_${usedPrefix}disable *antiarabes*_
┣☑️_${usedPrefix}enable *modoadmin*_
┣☑️_${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< download />*
┃ღღღღღღღღღღღღღღღღ┃
┣ 📥 _${usedPrefix}instagram_
┣ 📥 _${usedPrefix}instagram2_
┣ 📥 _${usedPrefix}instagram3_
┣ 📥 _${usedPrefix}mediafire_
┣ 📥 _${usedPrefix}instagram_
┣ 📥 _${usedPrefix}gitclone_
┣ 📥 _${usedPrefix}gdrive_
┣ 📥 _${usedPrefix}tiktok_
┣ 📥 _${usedPrefix}xnxxdl_
┣ 📥 _${usedPrefix}xvideosdl_
┣ 📥 _${usedPrefix}twitter_
┣ 📥 _${usedPrefix}fb_
┣ 📥 _${usedPrefix}fb2_
┣ 📥 _${usedPrefix}fb3_
┣ 📥 _${usedPrefix}fb4_
┣ 📥 _${usedPrefix}fb5 _
┣ 📥 _${usedPrefix}ytmp3_
┣ 📥 _${usedPrefix}ytmp4_
┣ 📥 _${usedPrefix}ytmp3doc_
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
┣ 💎 _${usedPrefix}add_
┣ 💎 _${usedPrefix}kick_
┣ 💎 _${usedPrefix}kick2_
┣ 💎 _${usedPrefix}grupo_
┣ 💎 _${usedPrefix}grouptime_
┣ 💎 _${usedPrefix}promote_
┣ 💎 _${usedPrefix}demote_
┣ 💎 _admins_
┣ 💎 _${usedPrefix}demote_
┣ 💎 _${usedPrefix}infogroup_
┣ 💎 _${usedPrefix}resetlink_
┣ 💎 _${usedPrefix}link_
┣ 💎 _${usedPrefix}setname_
┣ 💎 _${usedPrefix}setdesc_
┣ 💎 _${usedPrefix}invocar_
┣ 💎 _${usedPrefix}setwelcom_
┣ 💎 _${usedPrefix}setbye_
┣ 💎 _${usedPrefix}hidetag_
┣ 💎 _${usedPrefix}warn _
┣ 💎 _${usedPrefix}unwarn_
┣ 💎 _${usedPrefix}listwarn_
┣ 💎 _${usedPrefix}fantasmas_
┣ 💎 _${usedPrefix}destraba_
┣ 💎 _${usedPrefix}setpp_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< CONVERTER />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🧧 _${usedPrefix}togifaud_
┣ 🧧 _${usedPrefix}toimg_
┣ 🧧 _${usedPrefix}tomp3_
┣ 🧧 _${usedPrefix}tomp3_
┣ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ 🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🖍️ _${usedPrefix}mensajefalso_
┣ 🖍️ _${usedPrefix}phmaker_
┣ 🖍️ _${usedPrefix}logos_
┣ 🖍️ _${usedPrefix}logochristmas_
┣ 🖍️ _${usedPrefix}logocorazon_
┣ 🖍️ _${usedPrefix}ytcomment_
┣ 🖍️ _${usedPrefix}hornycard_
┣ 🖍️ _${usedPrefix}simpcard_
┣ 🖍️ _${usedPrefix}lolice_
┣ 🖍️ _${usedPrefix}itssostupid_
┣ 🖍️ _${usedPrefix}pixelar_
┣ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🔍 _${usedPrefix}stickersearch_
┣ 🔍 _${usedPrefix}stickersearch2_
┣ 🔍 _${usedPrefix}xnxxsearch_
┣ 🔍 _${usedPrefix}animeinfo_
┣ 🔍 _${usedPrefix}google_
┣ 🔍 _${usedPrefix}letra_
┣ 🔍 _${usedPrefix}wikipedia_
┣ 🔍 _${usedPrefix}ytsearch_
┣ 🔍 _${usedPrefix}apkdone_
┣ 🔍 _${usedPrefix}apkgoogle_
┣ 🔍 _${usedPrefix}apkmody_
┣ 🔍 _${usedPrefix}apkshub _
┣ 🔍 _${usedPrefix}happymod_
┣ 🔍 _${usedPrefix}hostapk_
┣ 🔍 _${usedPrefix}revdl_
┣ 🔍 _${usedPrefix}toraccino_
┣ 🔍 _${usedPrefix}uapkpro_
┣ 🔍 _${usedPrefix}playstore_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┣ 🔊 _a_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ 🛠️ _${usedPrefix}spamwa_
┣ 🛠️ _${usedPrefix}tamaño_
┣ 🛠️ _${usedPrefix}clima_
┣ 🛠️ _${usedPrefix}encuesta_
┣ 🛠️ _${usedPrefix}afk_
┣ 🛠️ _${usedPrefix}ocr_
┣ 🛠️ _${usedPrefix}acortar_
┣ 🛠️ _${usedPrefix}calc_
┣ 🛠️ _${usedPrefix}del_
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
┣ 👽 _${usedPrefix}sticker__
┣ 👽 _${usedPrefix}s_
┣ 👽 _${usedPrefix}sfull_
┣ 👽 _${usedPrefix}emojimix_
┣ 👽 _${usedPrefix}scircle_
┣ 👽 _${usedPrefix}sremovebg_
┣ 👽 _${usedPrefix}semoji_
┣ 👽 _${usedPrefix}attp_
┣ 👽 _${usedPrefix}attp2_
┣ 👽 _${usedPrefix}attp3_
┣ 👽 _${usedPrefix}ttp_
┣ 👽 _${usedPrefix}ttp2_
┣ 👽 _${usedPrefix}ttp3_
┣ 👽 _${usedPrefix}ttp4_
┣ 👽 _${usedPrefix}ttp5_
┣ 👽 _${usedPrefix}pat_
┣ 👽 _${usedPrefix}slap_
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
┣ 👑 _${usedPrefix}setprefix_
┣ 👑 _${usedPrefix}resetprefix_
┣ 👑 _${usedPrefix}autoadmin_
┣ 👑 _${usedPrefix}leavegc_
┣ 👑 _${usedPrefix}cajafuerte_
┣ 👑 _${usedPrefix}blocklist_
┣ 👑 _${usedPrefix}block_
┣ 👑 _${usedPrefix}unblock_
┣ 👑 _${usedPrefix}enable_
┣ 👑 _${usedPrefix}disable_
┣ 👑 _${usedPrefix}enable_
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
┣ 👑 _${usedPrefix}enable *jadibot*_
┣ 👑 _${usedPrefix}disable *jadibot*_
┣ 👑 _${usedPrefix}msg *<texto>*_
┣ 👑 _${usedPrefix}banchat_
┣ 👑 _${usedPrefix}unbanchat_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}bc_
┣ 👑 _${usedPrefix}bcchats_
┣ 👑 _${usedPrefix}bcgc_
┣ 👑 _${usedPrefix}bcbot_
┣ 👑 _${usedPrefix}cleartpm_
┣ 👑 _${usedPrefix}restart_
┣ 👑 _${usedPrefix}update_
┣ 👑 _${usedPrefix}banlist_
┣ 👑 _${usedPrefix}addprem *<@tag>*_
┣ 👑 _${usedPrefix}delprem *<@tag>*_
┣ 👑 _${usedPrefix}listprem_
┣ 👑 _${usedPrefix}listcmd_
┣ 👑 _${usedPrefix}setppbot_
┣ 👑 _${usedPrefix}addcmd_
┣ 👑 _${usedPrefix}delcmd_
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
title: 'instagram.com/noureddine_ouafy',
body: null,
thumbnail: img,
sourceUrl: `https://www.instagram.com/noureddine_ouafy`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|bobiz|sir|salam|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
