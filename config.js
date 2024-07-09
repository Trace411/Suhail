const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Winspertech.100@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Willis254:d5_!LpGM#i_w.U!@cluster0.hhbfqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/WillisKE/Suhail";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" 


global.devs = "254786273945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" //"text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254786273945,254702365210,254708336448,254762508828";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://sessionpair.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RpTE82YTNRL0hiVHpUekZSQVVocnd2RUhQUXk3Q3VaNFF3eUFENllrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUElvdzA3S0FjUGlyRUN1YkdNODVDTGlMYll5UDZkKzd4VmU4cmh5enJYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSGpIQVMvcE5KU1VGeWcvRW43QXcrMHFuVy9iNHZBaExUSUE3OUhMVjJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbU8zWWNwenBwQStXdlVvR1g0RDJ6cGpTSVN5SENuaUFCUHRaSk1UcldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJVnBuYzdubTZreEJhSUpaQ0diUkYrTkVCbENUNCtZTWR0SkNGNTlKbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZKK3VRc0RKZzN6d3M0RXFCOEVwcXNtd2tTU1FUVDJHMGtYbGNiR2hBMWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkROVittOUJIZ01CRkFKd2FORnVnZzl4MkkvMXhDVC9ibXN1Vm1zTnQwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0V1WHN4YklBaStKdWhGaGpUT2F5RktWZXZySlR1WTV0K3AvbS9CeUZ6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im02bjdOY3BkTk9nVTlUWFJ0cWk5dVFvT0VGNmdNb0dqZFViblNJbmJORGZaR2VRN2hJbWg4MTltUUxMUFNwalQwbXJDdUhaZFRYUmxiTlpaamNpWWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJuM3dSZWUyWFNtNVJZaVhYWXo4MTdjWThlTjJibTBBdU5RbStOTHVTVkhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2MjUwODgyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNkI2ODAwNTU3RDdFNUYxQjMwMzQxODYwMTFCMDIyOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTIzMzA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZYmprYXZmUlFOZTRBNDA0NWVtNUhRIiwicGhvbmVJZCI6IjBjNjc4MTMyLTI2NWUtNDNjOS1iYTc2LTRkZDE1ZDBlYmQ3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q0d0d0MxRHIzZVlTVnMyNDN6ZWs5WGxqUjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemR6R0R3VE5yQlFBdjl4Y1dOdTZRcDg3b0VFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktQTFdMRjlLIiwibWUiOnsiaWQiOiIyNTQ3NjI1MDg4Mjg6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWRtaW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3WnJHc1FtclMwdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkNNQjlOa1NEdzZvYVJyak90aEdIZ2dzbEtIZVUvL2FKTXdvUVh1ZTNjMms9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVVUXNEemc3TVh3a01IRmN0US9hS2k2bjBieVdQUG11VnlqY2ZOdDVGUFh4dGVXOWlxTG01SDJMQms3WGVVQ1pCaVJwb1dFV2RMZjBPQ1FUQmdXSENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrcVJyeWFsd1hueGkxZzlXYlBTWVhKSE1XMDZFT0FiQ21sWkRadFB1UUJVTDREQi9MaDczaVBaNWJjS3dnYXg2U3JjTVE0WUc2aUVtU2doNDBHc0RnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2MjUwODgyODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRakFmVFpFZzhPcUdrYTR6cllSaDRJTEpTaDNsUC8yaVRNS0VGN250M05wIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTIzMzAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU92UiJ9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〃Willis",
  packname: process.env.PACK_NAME || "〃",
  botname : process.env.BOT_NAME  || "ᴡɪʟʟɪꜱ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "≛ Willis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "bb60b12577e6c25424883cc9f72ffe88";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
