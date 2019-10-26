import Twitter from "./Twitter"

require("dotenv").config();
(async () => {
    const twitter = new Twitter({
        consumerKey: process.env.TWITTER_API_KEY,
        consumerSecret: process.env.TWITTER_API_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_SECRET
    })
    const result = await twitter.users.search({q: "tenpi"})
    console.log(result[0].entities.url.urls[0].display_url)
})()
