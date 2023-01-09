import { googleImage } from  @bochilteam/scraper 

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw  هذا الامر خاص بتحميل الصور من غوغل مثال \n *.image* Free fire   

const res = await googleImage(text)

let image = await res.getRandom()

let link = image

let captionn = `🔎 *♥:* ${text}\n🔗 *رابطها* ${link}\n🌎 *المصدر:* Google`

conn.sendButton(m.chat, captionn, author, link, [[ 🔄 التالي... 🔄 , `#imagen ${text}`]], m)}

handler.help = [ gimage <query> ,  imagen <query> ]

handler.tags = [ internet ,  tools ]

handler.command = /^(gimage|image|imagen)$/i

export default handler

