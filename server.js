/*INSERT GROUP ID AND COOKIE BELOW*/
 
var groupId = 8502272 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_75504C15912922C927C94161D7938DE8BDCAC1F2132F796FE68F54A59B06DE3AE6D488FBEB370DC887464BF2FAD57EF5738474CB956DCA6DC69C661A7480FF6967DBAD3120F2BAD760FE91AC487306FE840503922240C348EC67EF77ACB017E4E1A4B67E1EB4F60F7E0408B03C9408CD25354298C186236E960E51758B11FBC08B60325E1F4E59BDFD056B02B728AB930AA43DED4663EDA830970C69BD2829E486E35DF0850619F4B89A60C927FF6AB6B3A659CA88D1B5934079356092810DE9B658638BBE3F122DC72C391C7B58ED2C5ABF214EC0ABCE77BAFAEF6F448F8980FC99254704326EEB7AB93FA330A4B4F3A629207507DE34590CDAD376C68DA0F6968D905AE29AF3308C7A5DEF52EB47605E73DCE300DA0663D43A95DF8FEC26051DA662304B3AF56BF54999DF93CB999D2B60D6C7B7116BC1A73FD36ABC68B6E118B16E8F" // << Put your account cookie inside of the quotes
 
/*INSERT GROUP ID AND COOKIE ABOVE*/
 
 
const express = require("express");
const rbx = require("noblox.js");
const app = express();
 
app.use(express.static("public"));
 
async function startApp() {
  await rbx.cookieLogin(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();
 
app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});
 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
