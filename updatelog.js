var updateLogData = {
    title: "Update Logs",
    version: "v0.4.1",
    updateTime: "2026-06-26",
    logs: [
        {
            id: 1,
            version: "v0.4.1",
            time: "2026-06-26",
            title: "Big Improvements [27]",
            content: {
                added: [
                    "Added Badges",
                    "Added Bus stop search",
                    "Added Context Menu Toggle",
                    "Added Fares Display",
                    "Added Filter",
                    "Added Language Toggle",
                    "Added Mobile UI version",
                    "Added More Info Display",
                    "Added Nearby Routes Display on each bus stop",
                    "Added Point-to-Point Search (BETA)",
                    "Added Settings",
                    "Added Stops Inquiry",
                    "Added Switch Direction Button",
                    "Added Timetable Display",
                    "Added Theme Toggle",
                    "Added Unlock Levels Display",
                    "Added Wiki Button"
                ],
                fixed: [
                    "Fixed custom keyboard input could be spammed",
                    "Fixed double scrolling panel were appeared at Matched Routes",
                    "Fixed route badges could not be customized",
                    "Fixed route number could not be more than 1"
                ],
                removed: [
                    "Removed weird card or containers animation"
                ],
                revamped: [,
                    "Revamped all scrolling panel",
                    "Revamped loading.png",
                    "Revamped new via-direction panel",
                    "Revamped main page UI",
                    "Revamped matched route card"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 2,
            version: "v0.3.1",
            time: "2026-01-12",
            title: "Minor Improvements [1]",
            content: {
                added: [
                    "Added main changed logs counter"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 3,
            version: "v0.2.2",
            time: "2026-01-11",
            title: "Improvements [8]",
            content: {
                added: [
                    "Added New multi-language support for all UI elements"
                ],
                fixed: [
                    "Fixed Stop-list issues",
                    "Fixed Version number display issue"
                ],
                removed: [
                    "Removed Confirm button from input screen",
                    "Removed Previous Route Number Input after clicking the Back button"
                ],
                revamped: [
                    "Revamped Route Description Panel",
                    "Revamped Timetable with UI (all direction)",
                    "Revamped Update Logs UI"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 4,
            version: "v0.2.1",
            time: "2026-01-07",
            title: "Published the first version at github [1]",
            content: {
                fixed: [
                    "Fixed UI improvements in somewhere"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 5,
            version: "v0.1.2",
            time: "2026-01-07",
            title: "Minor changes [2]",
            content: {
                added: [
                    "Added Route labels and colors",
                    "Added Subname (still in progress)"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 6,
            version: "v0.1.1",
            time: "2026-01-06",
            title: "Minor changes [2]",
            content: {
                added: [
                    "Added Direction button that can change the another direction",
                    "Added Timetable (single direction only)"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 7,
            version: "v0.0.1",
            time: "2026-01-05",
            title: "Website created (not published yet) [2]",
            content: {
                added: [
                    "Basic route query functionality",
                    "Initial website structure"
                ],
                improvements: [
                    "Test content implementation"
                ]
            }
        }
    ]
};

function getUpdateLogData() {
    return updateLogData;
}