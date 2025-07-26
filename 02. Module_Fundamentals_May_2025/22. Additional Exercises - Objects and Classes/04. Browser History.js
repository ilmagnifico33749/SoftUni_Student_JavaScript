function browserHistoryFunction(objectInp, arrInp) {
 
    class Browser {
        constructor() {
            this.name;
            this.openTabs = [];
            this.recentlyClosed= [];
            this.logs = [];
        }

        printInfo() {
            let stringOutput = "";
            stringOutput += `${this.name}\n`
            stringOutput += `Open Tabs: ${this.openTabs.join(", ")}\n`
            stringOutput += `Recently Closed: ${this.recentlyClosed.join(", ")}\n`
            stringOutput += `Browser Logs: ${this.logs.join(", ")}`
            console.log(stringOutput);
        }

        deleteHistoryAndCache() {
            this.openTabs = [];
            this.recentlyClosed = [];
            this.logs = [];
        }
    }

    let browserObject = objectInp;
    let browserActions = arrInp;

    let newBrowserObject = new Browser()

    for (let [key, value] of Object.entries(browserObject)) {
        if (key === "Browser Name") {
            newBrowserObject.name = value;
        }
        else if (key === "Open Tabs") {
            newBrowserObject.openTabs = value;
        }
        else if (key === "Recently Closed") {
            newBrowserObject.recentlyClosed = value;
        }

        else if (key === "Browser Logs") {
            newBrowserObject.logs = value;
        }
    }

    for (let action of browserActions) {
        let actionDetails = action.split(" ");
        let actionType = actionDetails.shift();
        let target = actionDetails.join(" ");
        if (actionType === "Open") {
            newBrowserObject.openTabs.push(target);
            newBrowserObject.logs.push(action);
        }
        else if (actionType === "Close") {
            if (newBrowserObject.openTabs.includes(target)) {
                let indexOfOpenWebsite = newBrowserObject.openTabs.indexOf(target);
                newBrowserObject.openTabs.splice(indexOfOpenWebsite, 1);
                newBrowserObject.recentlyClosed.push(target);
                newBrowserObject.logs.push(action);
            }
        }
        else if (actionType === "Clear") {
            if (target == "History and Cache") {
                newBrowserObject.deleteHistoryAndCache();
            }
        }
    }

    newBrowserObject.printInfo();
}

browserHistoryFunction(
    {
        "Browser Name":"Google Chrome", 
        "Open Tabs":["Facebook","YouTube","Google Translate"], 
        "Recently Closed":["Yahoo","Gmail"], 
        "Browser Logs": ["Open YouTube","Open Yahoo","Open Google Translate", 
            "Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
    }, 
        [
            "Close Facebook", "Open StackOverFlow", "Open Google"
        ]
);

browserHistoryFunction(
    {
        "Browser Name":"Mozilla Firefox", "Open Tabs":["YouTube"], 
        "Recently Closed":["Gmail", "Dropbox"],
        "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    [
        "Open Wikipedia", "Clear History and Cache", "Open Twitter"
    ]
)
