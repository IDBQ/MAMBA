import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ðžðð ðð ðð ððððððððð ðððððð\n*${usedPrefix + command} Loli*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
â°âąðâą *ðŽĖðððð* âąðâąâŪ`.trim(), m)
  
  conn.sendHydrated(m.chat, `âĻ ðđððððððððð: ${text}`, `ðððĢðĐðð§ððĻðĐ | ${wm}`, null, md, 'ðŧðð ðģððððĐðð-ðīðŦ', null, null, [
['ð ððððŠðððĢðĐð', `/pinterest ${text}`],
['ð ððĪðĪððĄð ', `#image ${text}`],
['ð ðððĢðŠ', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
