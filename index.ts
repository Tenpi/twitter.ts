import Twitter from "./twitter"

require("dotenv").config();
(async () => {
    const twitter = new Twitter({
        consumerKey: process.env.TWITTER_API_KEY,
        consumerSecret: process.env.TWITTER_API_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_SECRET
    })
    const result = await twitter.lists.list({screen_name: "realDonaldTrump"})
    console.log(result)
})()
