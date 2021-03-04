function saveconfig(action) {
    if (action == "savefromsession") {
        for (e = 0, et = localStorage.length, c = ""; n = ""; e < et, e++) {
            n = sessionStorage.key(e)
            c = sessionStorage.getItem(n)
            console.log("Setting " + n + " as " + c)
            localStorage.setItem(n, c)
        }
        console.log("Saved config.")
    } else if (action == "loaddefaults") {
        console.warn("Not implemented yet... Sorry...")
    } else {
        console.error("Could not recognize " + action + " as a valid action. Perhaps the syntax is incorrect?")
    }
}
con