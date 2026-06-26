var routeData = {
    "data": [
        {
            "route": "S1",
            "enabled": true,
            "bound": "C",
            "viaDirectionCn": "賴得、四露谷、北環、中環、南環、南環文化區",
            "viaDirectionEn": "Wright, Shadow Valley, Northern, Central, Southern, Southern Cultural District",
            "routeType": "全程收費: $39",
            "routeTypeEn": "Full Fare: $39",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "旅遊路線",
                    "labelEn": "Travel Route"
                }
            },
            "timetable": {
                "C": {
                    "normal": {
                        "firstTime": "11:00",
                        "lastTime": "18:00",
                        "interval": [
                            { "time": "11:00 - 18:00", "interval": "30" }
                        ]
                    }
                }
            },
            "stops": {
                "C": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "紅地磚", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "楓樹里", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "中環消防局", "nameEn": "Central Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "^^中日街", "nameEn": "^^Sun Central Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "The ONE", "nameEn": "The One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "強生街市", "nameEn": "Johnson Market", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "M∞", "nameEn": "Museum Infinite", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "陽光太空館", "nameEn": "Sunshine Space Museum	", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "長島碼頭總站", "nameEn": "Long Island Ferry Pier Bus Terminus", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "S2",
            "enabled": true,
            "bound": "C",
            "viaDirectionCn": "賴得、北環、中環、南環、南環文化區、購物廊",
            "viaDirectionEn": "Wright, Northern, Central, Southern, Southern Cultural District, Shopping Corridor",
            "routeType": "全程收費: $39",
            "routeTypeEn": "Full Fare: $39",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "旅遊路線",
                    "labelEn": "Travel Route"
                }
            },
            "timetable": {
                "C": {
                    "normal": {
                        "firstTime": "18:30",
                        "lastTime": "22:30",
                        "interval": [
                            { "time": "18:30 - 22:30", "interval": "30" }
                        ]
                    }
                }
            },
            "stops": {
                "C": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "楓樹里", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "^^中日街", "nameEn": "^^Sun Central Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "The ONE", "nameEn": "The One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "強生街市", "nameEn": "Johnson Market", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "M∞", "nameEn": "Museum Infinite", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "陽光太空館", "nameEn": "Sunshine Space Museum	", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "長島碼頭總站", "nameEn": "Long Island Ferry Pier Bus Terminus", "visible": true, "stopFor": ["normal"] }
                ]
            }
        }
    ]
};