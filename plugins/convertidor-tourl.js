import uploadFile from'../lib/uploadFile.js'
import uploadImage from'../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype ||   
if (!mime) throw'رفع الصور الى موقع telegraph uploader \n والحصول على رابط الصورة \n  يكفي فقط ان ترسل للبوت صورة او فيديو ثم تشير اليه وتكتب \n *.tourl*' 
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*😌:* ${link}`)
}
handler.help = [ tourl <reply image> ]
handler.tags = [ sticker ]
handler.command = /^(upload|tourl)$/i
export default handler

