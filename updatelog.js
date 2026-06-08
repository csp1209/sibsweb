var updateLogData = {
    title: "Update Logs",
    version: "v0.3.1",
    updateTime: "2026-01-12",
    logs: [
        {
            id: 1,
            version: "v0.3.1",
            time: "2026-01-12",
            title: "Improvements [12]",
            content: {
                added: [
                    "Added main changed logs counter (easiest update, lol)",
                    "Adding the Schedule Display, with the beginning stop and ending stop in the Route Description Panel",
                    "Adding (Two Way) Section Fares display",
                    "Adding Service hours and days of the week in the timetable",
                    "Adding the Setting Page with language changer",
                    "Will add the Wiki Reference button in each route"
                ],
                fixed: [
                    "Fixing double scrolling panel appeared at Matched Routes",
                    "Fixing route backgrounds could not be customized",
                    "Fixing route number is not displayed in the Stop-list title"
                ],
                removed: [
                    "Removing Custom route name",
                    "Removing Page-switching function"
                ],
                revamped: [
                    "Revamping Matched Routes button UI",
                    "Revamping new VIA-DIRECTION panel such as O-o-o-o-O (next...)",
                    "(Continue...) The Max amount will be according to the route N171"
                ],
                improvements: [
                    "Other minor bug fixes and improvements"
                ]
            }
        },
        {
            id: 2,
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
            id: 3,
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
            id: 4,
            version: "v0.1.2",
            time: "2026-01-07",
            title: "Little changes (2) [2]",
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
            id: 5,
            version: "v0.1.1",
            time: "2026-01-06",
            title: "Little changes (1) [2]",
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
            id: 6,
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