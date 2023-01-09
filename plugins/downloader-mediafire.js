import { mediafiredl } from  @bochilteam/scraper 

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw ` الامر خاص بتحميل ملفات الميديافاير مثال : \n *.mediafire* https://www.mediafire.com/download/i9qkk6onsxlyy7f`

try {

let res = await mediafiredl(args[0])

let { url, url2, filename, ext, aploud, filesize, filesizeH } = await res

let caption = `

*📓 اسمه:* ${filename}

*📁 حجمه:* ${filesizeH}

*📄 نوعه:* ${ext}

*⏳ المرجو الانتظار جاري تحميل الملف . . . .* 

`.trim()

m.reply(caption)

await conn.sendFile(m.chat, url, filename,   , m, null, { mimetype: ext, asDocument: true })

} catch {

await m.reply( هذا الامر خاص بتحميل ملفات الميديافاير مثال : \n *.mediafire* https://www.mediafire.com/download/i9qkk6onsxlyy7f* )

}}

handler.help = [ mediafire ].map(v => v +   <url> )

handler.tags = [ downloader ]

handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i

export default handler

