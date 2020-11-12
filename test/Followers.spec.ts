import {assert} from "chai"
import "mocha"
import {twitter} from "./login"

describe("Followers", async function() {
    it("should get id", async function() {
        const response = twitter.followers.ids({screen_name: "imtenpi"})

    })
})
