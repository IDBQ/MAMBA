import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}šš£šš§ššØš šš” šš£š”ššš šš šš¤šŖššŖšš š„šš§š šššØššš§ššš§ šš” š«šššš¤\nšššš¢š„š”š¤\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
ā­āāā°  ${wm}  ā±āāā¬£
ā š° ššš©šŖš”š¤
ā ${title} 
āāāāāāāāāāāāāāāāāā
ā āØ šššØš¤ 
ā ${video['480p'].fileSizeH}
ā°āāāāāāā° *š  ${vs}* ā±āāāāāā¬£`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
 š° š¼š¦šŖš ššØš©š š©šŖ š«šššš¤ 
š„ ššš©šŖš”š¤: _*${title}*_ `.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}š¬š ššššššš ššš šš ššššššš ššš ššš šššššš šššššššĢ ššš šššš`)
console.log(e)  
}
/*  
let info = `š šš£šš¤š§š¢šš©š šØš¤šš§š š”ššØ šš¤š«ššššššØ š® š§šššŖšš§šš š©šš£šš§ š”š šŖš”š©šš¢š š«šš§šØšš¤š£.
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, 'creador', null, null, [
['ššš£šŖ šæššØššš§šššØ š', '#descargasmenu'],
['ššš£šŖ š¾š¤š¢š„š”šš©š¤ āØ', '.allmenu'],
['šš¤š”š«šš§ šš” ššš£šŖĢ āļø', '/menu'] 
], m,) 
*/
}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 100
export default handler
