import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://ar.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $( #firstHeading ).text().trim()
let thumb = $( #mw-content-text ).find( div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img ).attr( src ) || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$( #mw-content-text > div.mw-parser-output ).each(function (rayy, Ra) {
let penjelasan = $(Ra).find( p ).text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb:  https:  + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*هذا الامر خاص بالبحث في ويكيبيديا و عن المواضيع والبحوث في منصتها \n يكفي فقط كتابة الامر + الشيء الذي تريد البحث عنه مثال : \n  *.wiki* islam`
wikipedia(`${text}`).then(res => {
m.reply(`*هذا ما وجده بوبيز 😄😍:*\n\n` + res.result.isi)
}).catch(() => { m.reply( *هناك خطأ لم نجد اي شيء حاول كتابة الموضوع الذي تريد البحث عنه بالفرنسية و أعد مجددا  ) })}
handler.help = [ wikipedia ].map(v => v +   <apa> )
handler.tags = [  internet ]
handler.command = /^(wiki|wikipedia)$/i
export default handler
