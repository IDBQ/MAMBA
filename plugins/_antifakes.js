import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin) {
	
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].banned = true
await m.reply('  ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐คจ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐ค ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].banned = true
await m.reply(' ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐ฏ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
await m.reply(' ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐ค ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('210' || '210')) {
global.db.data.users[m.sender].banned = true
await m.reply('  ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐ฏ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐ค ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('61' || '61')) {
global.db.data.users[m.sender].banned = true
await m.reply(' ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐คจ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('9' || '9')) {
global.db.data.users[m.sender].banned = true
await m.reply('  ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐คจ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐ค ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
await m.reply('  ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐คจ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐ค ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('62' || '62')) {
global.db.data.users[m.sender].banned = true
await m.reply('  ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐คจ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐ค ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('4' || '4')) {
global.db.data.users[m.sender].banned = true
await m.reply('  ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐๐๐๐ ๐คจ ')
await m.reply(' ๐ฌ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
}
}
export default handler
