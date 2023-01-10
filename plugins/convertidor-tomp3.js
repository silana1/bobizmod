import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType ||   
if (!/video|audio/.test(mime)) throw `*قم بالاشارة للفيديو الذي تريد ان تحوله لمقطع موسيقى واكتب نفس الامر الذي كتبته للتو*`
let media = await q.download()
if (!media) throw'*هناك خطب ما المرجو مراسلة صاحب البوت*'
let audio = await toAudio(media,  mp4 )
if (!audio.data) throw  '*أعد المحاولة مجددا*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype:  audio/mpeg  }, { quoted: m })
}
handler.alias = [ 'tomp3 ,  toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler

