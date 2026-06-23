var routeData = {
    "data": [
        {
            "route": "21",
            "textColor": "#fff",
            "enabled": true,
            "circular": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/勞博頓快巴21線",
            "zones": ["Zone 1"],
            "operators": ["REBC"],
            "typeTags": ["Circular"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "賴得、艾迪、^^醫院島、艾迪、賴得",
                        "viaEn": "Wright, Addi, ^^Hospital Island, Addi, Wright"
                    }
                }
            },
            "fares": {
                "adult": 4.3,
                "child": 2.6,
                "elder": 2.6,
                "student": 2.6
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 46,
                            "routeCode": "21A",
                            "serviceDays": "weekday",
                            "firstTime": "05:45",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "05:45 - 07:00", "interval": "12" },
                                { "time": "07:00 - 09:00", "interval": "6 - 8" },
                                { "time": "09:00 - 18:30", "interval": "6" },
                                { "time": "18:30 - 20:00", "interval": "6 - 8" },
                                { "time": "20:30 - 23:00", "interval": "12" },
                                { "time": "23:00 - 00:00", "interval": "15" },
                                { "time": "00:00 - 01:00", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:45",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "05:45 - 07:00", "interval": "12" },
                                { "time": "07:00 - 15:20", "interval": "7 - 8" },
                                { "time": "15:20 - 17:30", "interval": "8 - 9" },
                                { "time": "17:30 - 18:30", "interval": "7 - 8" },
                                { "time": "18:30 - 20:00", "interval": "9" },
                                { "time": "20:30 - 23:00", "interval": "10" },
                                { "time": "23:00 - 00:00", "interval": "15" },
                                { "time": "00:00 - 01:00", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:45",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "05:45 - 07:00", "interval": "12" },
                                { "time": "07:00 - 09:00", "interval": "10" },
                                { "time": "09:00 - 15:20", "interval": "7 - 8" },
                                { "time": "15:20 - 17:30", "interval": "8 - 9" },
                                { "time": "17:30 - 18:30", "interval": "7 - 8" },
                                { "time": "18:30 - 20:00", "interval": "9" },
                                { "time": "20:30 - 23:00", "interval": "10" },
                                { "time": "23:00 - 00:00", "interval": "15" },
                                { "time": "00:00 - 01:00", "interval": "20" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "賴得里", "nameEn": "Wright Lane", "nameSubCn": "賴得站", "nameSubEn": "Wright Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "艾迪路", "nameEn": "Addi Road", "nameSubCn": "北白鴿避風塘", "nameSubEn": "North Dove Island Typhoon Shelter", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "路博斯總部大樓", "nameEn": "Roblox HQ", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "伊迪城", "nameEn": "Eddie City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "Basketball Court", "nameEn": "", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "^^阿周電視", "nameEn": "^^Roblox TV", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "路博斯總部大樓", "nameEn": "Roblox HQ", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "銀行大廈", "nameEn": "Bank Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "25",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴25線",
            "zones": ["Zone 1"],
            "operators": ["FT"],
            "typeTags": ["CentralAxis"],
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "虹尾角、賴得、艾迪、醫院島",
                        "viaEn": "Iris Point, Wright, Addi, Hospital Island"
                    },
                    "B": {
                        "viaCn": "醫院島、艾迪、賴得、虹尾角",
                        "viaEn": "Hospital Island, Addi, Wright, Iris Point"
                    }
                }
            },
            "fares": {
                "adult": 5.4,
                "child": 2.7,
                "elder": 2.7,
                "student": 2.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 52,
                            "routeCode": "25N",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "05:30 - 06:00", "interval": "20" },
                                { "time": "06:00 - 06:52", "interval": "13" },
                                { "time": "06:52 - 08:22", "interval": "10" },
                                { "time": "08:22 - 11:52", "interval": "12" },
                                { "time": "11:52 - 15:22", "interval": "10" },
                                { "time": "15:22 - 16:30", "interval": "8 - 9" },
                                { "time": "16:30 - 17:30", "interval": "10" },
                                { "time": "17:30 - 18:30", "interval": "12" },
                                { "time": "18:30 - 19:30", "interval": "15" },
                                { "time": "19:30 - 21:30", "interval": "12" },
                                { "time": "21:30 - 23:30", "interval": "15" },
                                { "time": "23:30 - 00:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "05:30",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "05:30 - 06:52", "interval": "20" },
                                { "time": "06:52 - 08:22", "interval": "15" },
                                { "time": "08:22 - 11:52", "interval": "12" },
                                { "time": "11:52 - 19:30", "interval": "10" },
                                { "time": "19:30 - 21:30", "interval": "12" },
                                { "time": "21:30 - 23:30", "interval": "15" },
                                { "time": "23:30 - 00:30", "interval": "20" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 52,
                            "routeCode": "25S",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "15" },
                                { "time": "07:00 - 08:30", "interval": "10 - 12" },
                                { "time": "08:30 - 12:00", "interval": "12" },
                                { "time": "12:00 - 15:15", "interval": "10" },
                                { "time": "15:15 - 17:00", "interval": "12" },
                                { "time": "17:00 - 19:00", "interval": "10" },
                                { "time": "19:00 - 21:30", "interval": "12" },
                                { "time": "21:30 - 23:30", "interval": "15" },
                                { "time": "23:30 - 01:00", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:30", "interval": "15" },
                                { "time": "08:30 - 09:20", "interval": "12" },
                                { "time": "09:20 - 17:00", "interval": "10" },
                                { "time": "17:00 - 19:00", "interval": "12" },
                                { "time": "19:00 - 23:30", "interval": "15" },
                                { "time": "23:30 - 01:00", "interval": "20" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "長島東醫院", "nameEn": "East Long Island Hospital", "nameSubCn": "宜和劇場", "nameSubEn": "Jardine Theater", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "彩色匯", "nameEn": "Rainbow Center", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "白鴿公園", "nameEn": "Dove Park", "nameSubCn": "三哥大廈", "nameSubEn": "Third Technology Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "白鴿公園", "nameEn": "Dove Park", "nameSubCn": "三哥大廈", "nameSubEn": "Third Technology Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "虹尾角站", "nameEn": "Iris Point Station", "nameSubCn": "智家坊, 彩色匯", "nameSubEn": "I Home, Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "宜和劇場", "nameEn": "Jardine Theater", "nameSubCn": "長島東醫院", "nameSubEn": "East Long Island Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "41A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通41A線",
            "zones": ["Zone 4"],
            "operators": ["SE"],
            "typeTags": ["CentralAxis"],
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "南環, 中環, 北環, 北頓",
                        "viaEn": "Southern, Central, Northern, Norton"
                    },
                    "B": {
                        "viaCn": "北頓, 北環, 中環, 南環",
                        "viaEn": "Norton, Northern, Central, Southern"
                    }
                }
            },
            "fares": {
                "adult": 5.4,
                "child": 2.7,
                "elder": 2.7,
                "student": 2.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 1,
                            "routeCode": "41AN",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "10 - 15" },
                                { "time": "07:00 - 09:00", "interval": "5 - 8" },
                                { "time": "09:00 - 15:30", "interval": "7 - 10" },
                                { "time": "15:30 - 16:30", "interval": "5 - 8" },
                                { "time": "16:30 - 19:00", "interval": "7 - 10" },
                                { "time": "19:00 - 23:00", "interval": "10 - 12" },
                                { "time": "23:00 - 00:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "05:30",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "12 - 15" },
                                { "time": "07:00 - 09:00", "interval": "8 - 10" },
                                { "time": "09:00 - 19:00", "interval": "6 - 9" },
                                { "time": "19:00 - 23:00", "interval": "10 - 12" },
                                { "time": "23:00 - 00:00", "interval": "15" },
                                { "time": "00:30", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 3,
                            "routeCode": "41AS",
                            "serviceDays": "weekday",
                            "firstTime": "05:40",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "10 - 15" },
                                { "time": "07:00 - 17:30", "interval": "7 - 10" },
                                { "time": "17:30 - 19:00", "interval": "5 - 8" },
                                { "time": "19:00 - 23:00", "interval": "7 - 10" },
                                { "time": "23:00 - 00:30", "interval": "10 - 15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "05:40",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "12 - 15" },
                                { "time": "07:00 - 09:00", "interval": "10 - 12" },
                                { "time": "09:00 - 22:00", "interval": "6 - 9" },
                                { "time": "22:00 - 23:00", "interval": "10 - 12" },
                                { "time": "23:00 - 00:30", "interval": "15" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "北灘", "nameEn": "Northern Beach", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "北灘", "nameEn": "Northern Beach", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "南環中心", "nameEn": "The Southern", "nameSubCn": "南環坊", "nameSubEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "42",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通42線",
            "zones": ["Zone 4"],
            "operators": ["SE"],
            "typeTags": ["CentralAxis"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "南環文化區、陽光站、中環、北環",
                        "viaEn": "Southern Cultural District, Sunshine Station, Central, Northern"
                    },
                    "B": {
                        "viaCn": "北環、中環、陽光站、南環文化區",
                        "viaEn": "Northern, Central, Sunshine Station, Southern Cultural District"
                    }
                }
            },
            "fares": {
                "adult": 4.8,
                "child": 2.4,
                "elder": 2.4,
                "student": 2.4
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 20,
                            "routeCode": "42N",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:00 - 07:20", "interval": "20" },
                                { "time": "07:20 - 09:20", "interval": "15" },
                                { "time": "09:20 - 15:30", "interval": "20" },
                                { "time": "15:30 - 16:30", "interval": "15" },
                                { "time": "16:30 - 19:00", "interval": "20" },
                                { "time": "19:00 - 23:00", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:00 - 23:00", "interval": "30" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 20,
                            "routeCode": "42S",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:00 - 07:20", "interval": "20" },
                                { "time": "07:20 - 09:20", "interval": "10 - 12" },
                                { "time": "09:20 - 15:30", "interval": "20" },
                                { "time": "15:30 - 16:30", "interval": "15" },
                                { "time": "16:30 - 19:00", "interval": "20" },
                                { "time": "19:00 - 23:00", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:00 - 23:00", "interval": "30" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "中葉隧道行政大樓", "nameEn": "Leafy-Central Tunnel Administration Block", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "南環文化區公園", "nameEn": "Southern Cultural District Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "南環運動場", "nameEn": "Southern Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "中環醫院", "nameEn": "Central Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "南環臺", "nameEn": "Southern Terrance", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "中環消防局", "nameEn": "Central Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "中環（中日街）", "nameEn": "Central (Sun Central Street)", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "班尼街", "nameEn": "Brown Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北環中心", "nameEn": "Northern Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "紅地磚", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北頓游泳池", "nameEn": "Norton Swimming Pool", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "紅地磚", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "北環中心", "nameEn": "Northern Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "班尼街", "nameEn": "Brown Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "亞特路", "nameEn": "Arctan Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環消防局", "nameEn": "Central Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "南環臺", "nameEn": "Southern Terrance", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "中環醫院", "nameEn": "Central Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "南環運動場", "nameEn": "Southern Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "M∞", "nameEn": "Museum Infinite", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "南環文化區公園", "nameEn": "Southern Cultural District Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "中葉隧道行政大樓", "nameEn": "Leafy-Central Tunnel Administration Block", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "42A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通42A線",
            "zones": ["Zone 4"],
            "operators": ["SE"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "南環、中環、北島花園",
                        "viaEn": "Southern, Central, North Island Estate"
                    },
                    "B": {
                        "viaCn": "北島花園、中環、南環",
                        "viaEn": "North Island Estate, Central, Southern"
                    }
                }
            },
            "fares": {
                "adult": 4.8,
                "child": 2.4,
                "elder": 2.4,
                "student": 2.4
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 1,
                            "routeCode": "42AN",
                            "serviceDays": "weekday",
                            "firstTime": "05:40",
                            "lastTime": "01:30",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "13 - 25" },
                                { "time": "07:00 - 07:50", "interval": "6 - 10" },
                                { "time": "07:50 - 17:30", "interval": "10 - 20" },
                                { "time": "17:30 - 19:00", "interval": "5 - 7" },
                                { "time": "19:00 - 22:00", "interval": "10 - 20" },
                                { "time": "22:00 - 00:30", "interval": "13 - 25" },
                                { "time": "00:45", "interval": "0" },
                                { "time": "01:00", "interval": "0" },
                                { "time": "01:30", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:10",
                            "lastTime": "01:30",
                            "interval": [
                                { "time": "07:10 - 17:30", "interval": "10 - 20" },
                                { "time": "17:30 - 22:00", "interval": "7 - 13" },
                                { "time": "09:00 - 23:30", "interval": "10 - 20" },
                                { "time": "23:30 - 00:30", "interval": "13 - 25" },
                                { "time": "00:45", "interval": "0" },
                                { "time": "01:30", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 3,
                            "routeCode": "42AS",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "01:10",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "10 - 20" },
                                { "time": "07:00 - 09:20", "interval": "6 - 10" },
                                { "time": "09:20 - 15:30", "interval": "10 - 20" },
                                { "time": "15:30 - 16:30", "interval": "6 - 10" },
                                { "time": "16:30 - 17:30", "interval": "10 - 20" },
                                { "time": "17:30 - 19:00", "interval": "7 - 13" },
                                { "time": "19:00 - 22:00", "interval": "10 - 20" },
                                { "time": "22:00 - 00:00", "interval": "13 - 25" },
                                { "time": "00:20", "interval": "0" },
                                { "time": "00:40", "interval": "0" },
                                { "time": "01:10", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "05:30",
                            "lastTime": "01:10",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "20 - 30" },
                                { "time": "07:00 - 09:20", "interval": "10 - 12" },
                                { "time": "09:20 - 17:30", "interval": "7 - 13" },
                                { "time": "17:30 - 19:00", "interval": "10 - 12" },
                                { "time": "19:00 - 22:00", "interval": "13 - 25" },
                                { "time": "22:00 - 00:00", "interval": "15 - 30" },
                                { "time": "00:20", "interval": "0" },
                                { "time": "01:10", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "北頓游泳池", "nameEn": "Norton Swimming Pool", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "南環中心", "nameEn": "The Southern", "nameSubCn": "南環坊", "nameSubEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "46",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通46線",
            "zones": ["Zone 4"],
            "operators": ["SE"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "北環、東錦葵",
                        "viaEn": "Northern, Eastmallow"
                    },
                    "B": {
                        "viaCn": "東錦葵、北環",
                        "viaEn": "Eastmallow, Northern"
                    }
                }
            },
            "fares": {
                "adult": 3.7,
                "child": 1.4,
                "elder": 1.4,
                "student": 1.4
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 42,
                            "routeCode": "46E",
                            "serviceDays": "weekday",
                            "firstTime": "07:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "07:00 - 17:30", "interval": "30" },
                                { "time": "17:30 - 18:30", "interval": "20" },
                                { "time": "18:30 - 19:30", "interval": "15" },
                                { "time": "19:30 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:00", "interval": "30" },
                                { "time": "23:00 - 00:00", "interval": "60" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "07:00 - 09:00", "interval": "30" },
                                { "time": "09:00 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:00", "interval": "30" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 42,
                            "routeCode": "46W",
                            "serviceDays": "weekday",
                            "firstTime": "06:30",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:30 - 06:50", "interval": "20" },
                                { "time": "06:50 - 08:00", "interval": "15" },
                                { "time": "08:00 - 22:00", "interval": "20 - 30" },
                                { "time": "22:00 - 23:30", "interval": "45" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:30",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:30 - 07:00", "interval": "30" },
                                { "time": "07:00 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:30", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:30",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:30 - 08:00", "interval": "30" },
                                { "time": "08:00 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:30", "interval": "30" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "明月角", "nameEn": "Lunar Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東錦葵邨燈葵屋", "nameEn": "Light House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東錦葵邨花葵屋", "nameEn": "Flower House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東錦葵邨燈葵屋", "nameEn": "Light House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東錦葵邨花葵屋", "nameEn": "Flower House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "明月角", "nameEn": "Lunar Point", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "47",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通47線",
            "zones": ["Zone 4"],
            "operators": ["SE"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "南環、陽光站、東錦葵、北島花園",
                        "viaEn": "Southern, Sunshine Station, Eastmallow, North Island Estate"
                    },
                    "B": {
                        "viaCn": "北島花園、東錦葵、陽光站、南環",
                        "viaEn": "North Island Estate, Eastmallow, Sunshine Station, Southern"
                    }
                }
            },
            "fares": {
                "adult": 5.4,
                "child": 2.7,
                "elder": 2.7,
                "student": 2.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 10,
                            "routeCode": "47A",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 06:40", "interval": "20" },
                                { "time": "06:40 - 07:50", "interval": "6 - 8" },
                                { "time": "07:50 - 09:20", "interval": "10 - 15" },
                                { "time": "09:20 - 15:20", "interval": "25" },
                                { "time": "15:20 - 16:40", "interval": "15 - 20" },
                                { "time": "16:40 - 17:00", "interval": "30" },
                                { "time": "17:30 - 22:30", "interval": "10 - 15" },
                                { "time": "22:30 - 23:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 23:30", "interval": "30" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 10,
                            "routeCode": "48A",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "12 - 15" },
                                { "time": "07:00 - 08:00", "interval": "7 - 8" },
                                { "time": "08:00 - 09:15", "interval": "12 - 15" },
                                { "time": "09:15 - 15:30", "interval": "15" },
                                { "time": "15:30 - 16:30", "interval": "6 - 8" },
                                { "time": "16:30 - 18:30", "interval": "10 - 12" },
                                { "time": "18:30 - 22:30", "interval": "15" },
                                { "time": "22:30 - 23:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 23:30", "interval": "15" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "中環（中日街）", "nameEn": "Central (Sun Central Street)", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "南環中心", "nameEn": "The Southern", "nameSubCn": "南環坊", "nameSubEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "中環南路", "nameEn": "Southern Central Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環南路", "nameEn": "Southern Central Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "中環（中日街）", "nameEn": "Central (Sun Central Street)", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "49A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通49A線",
            "zones": ["Zone 4"],
            "operators": ["SE"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "南環、中環、北島花園",
                        "viaEn": "Southern, Central, North Island Estate"
                    },
                    "B": {
                        "viaCn": "北島花園、中環、南環",
                        "viaEn": "North Island Estate, Central, Southern"
                    }
                }
            },
            "fares": {
                "adult": 5.4,
                "child": 2.7,
                "elder": 2.7,
                "student": 2.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 34,
                            "routeCode": "49AN",
                            "serviceDays": "weekday",
                            "firstTime": "05:40",
                            "lastTime": "01:30",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "25" },
                                { "time": "07:00 - 08:00", "interval": "16" },
                                { "time": "08:00 - 17:30", "interval": "30" },
                                { "time": "17:30 - 19:00", "interval": "15" },
                                { "time": "19:00 - 22:00", "interval": "30" },
                                { "time": "22:00 - 00:30", "interval": "25" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:10",
                            "lastTime": "01:30",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "12 - 15" },
                                { "time": "08:00 - 17:30", "interval": "30" },
                                { "time": "17:30 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:30", "interval": "30" },
                                { "time": "23:30 - 00:30", "interval": "25" },
                                { "time": "01:30", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 34,
                            "routeCode": "49AS",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "01:10",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "30" },
                                { "time": "07:00 - 09:30", "interval": "16" },
                                { "time": "09:30 - 15:30", "interval": "30" },
                                { "time": "15:30 - 16:30", "interval": "16" },
                                { "time": "16:30 - 17:30", "interval": "30" },
                                { "time": "17:30 - 19:00", "interval": "20" },
                                { "time": "19:00 - 22:00", "interval": "30" },
                                { "time": "22:00 - 00:00", "interval": "25" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "05:30",
                            "lastTime": "01:10",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "20 - 30" },
                                { "time": "07:00 - 09:30", "interval": "30" },
                                { "time": "09:30 - 17:30", "interval": "20" },
                                { "time": "17:30 - 19:00", "interval": "30" },
                                { "time": "19:00 - 22:00", "interval": "25" },
                                { "time": "22:00 - 00:00", "interval": "30" },
                                { "time": "00:40", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "落山邨", "nameEn": "Downhill Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "巨石路60號", "nameEn": "60 Rocky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北島山頂", "nameEn": "North Island Hill Peak", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "巨石路35號", "nameEn": "35 Rocky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "巨石路20號", "nameEn": "20 Rocky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北灘", "nameEn": "Northern Beach", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "北灘", "nameEn": "Northern Beach", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "巨石路20號", "nameEn": "20 Rocky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "巨石路35號", "nameEn": "35 Rocky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "北島山頂", "nameEn": "North Island Hill Peak", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "巨石路60號", "nameEn": "60 Rocky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "落山邨", "nameEn": "Downhill Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "南環中心", "nameEn": "The Southern", "nameSubCn": "南環坊", "nameSubEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "73",
            "textColor": "#fff",
            "enabled": true,
            "circular": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴673線",
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Circular"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "葉角灣、葉角醫院、東門、^^海西、葉角醫院、葉角灣",
                        "viaEn": "Leafy Bay, Leafy Hospital, East Door, ^^Haisey, Leafy Hospital, Leafy Bay"
                    }
                }
            },
            "fares": {
                "adult": 9.4,
                "child": 4.7,
                "elder": 4.7,
                "student": 4.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 72,
                            "routeCode": "673A",
                            "serviceDays": "weekday",
                            "firstTime": "07:20",
                            "lastTime": "18:00",
                            "interval": [
                                { "time": "07:20 - 07:50", "interval": "30" },
                                { "time": "09:00", "interval": "0" },
                                { "time": "10:15", "interval": "0" },
                                { "time": "11:30", "interval": "0" },
                                { "time": "12:45", "interval": "0" },
                                { "time": "14:00", "interval": "0" },
                                { "time": "15:30", "interval": "0" },
                                { "time": "16:00 - 16:30", "interval": "30" },
                                { "time": "18:00", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "09:00",
                            "lastTime": "18:00",
                            "interval": [
                                { "time": "09:00", "interval": "0" },
                                { "time": "10:15", "interval": "0" },
                                { "time": "11:30", "interval": "0" },
                                { "time": "12:45", "interval": "0" },
                                { "time": "14:00", "interval": "0" },
                                { "time": "15:15", "interval": "0" },
                                { "time": "16:30", "interval": "0" },
                                { "time": "18:00", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉欣公園", "nameEn": "YiYan Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "新地路", "nameEn": "Sindy Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "葉角灣墳場", "nameEn": "Leafy Bay Cemetery", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "^^海西邨", "nameEn": "^^Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "葉角灣墳場", "nameEn": "Leafy Bay Cemetery", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "新地路", "nameEn": "Sindy Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "南洋大廈", "nameEn": "Southern Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "彩虹廣場", "nameEn": "Rainbow Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "73S",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴73S線",
            "zones": ["Zone 7"],
            "operators": ["CSB"],
            "typeTags": ["Festival"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "䥥塔花園、國際塔",
                        "viaEn": "Kamaya Garden, International Tower"
                    },
                    "B": {
                        "viaCn": "葉角灣墳場",
                        "viaEn": "Leafy Bay Cemetery"
                    }
                }
            },
            "fares": {
                "adult": 8.7,
                "child": 4.4,
                "elder": 4.4,
                "student": 4.4
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 40,
                            "routeCode": "73SN",
                            "serviceDays": "custom",
                            "customDaysCn": "清明節及重陽節期間",
                            "customDaysEn": "During the Qingming Festival and Double Ninth Festival",
                            "firstTime": "08:00",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "08:00 - 18:30", "interval": "3 - 10" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 40,
                            "routeCode": "73SS",
                            "serviceDays": "custom",
                            "customDaysCn": "清明節及重陽節期間",
                            "customDaysEn": "During the Qingming Festival and Double Ninth Festival",
                            "firstTime": "08:00",
                            "lastTime": "17:00",
                            "interval": [
                                { "time": "08:00 - 17:00", "interval": "3 - 10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉角灣墳場", "nameEn": "Leafy Bay Cemetery", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉角灣墳場", "nameEn": "Leafy Bay Cemetery", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "74A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴74A線",
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["CSB"],
            "typeTags": ["CentralAxis"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉欣、千葉、仙貝、東門、海西",
                        "viaEn": "YiYan, Thousand Leaf, Senpai, East Door, Haisey"
                    },
                    "B": {
                        "viaCn": "海西、東門、仙貝、千葉、葉欣",
                        "viaEn": "Haisey, East Door, Senpai, Thousand Leaf, YiYan"
                    }
                }
            },
            "fares": {
                "adult": 6.3,
                "child": 3.2,
                "elder": 3.2,
                "student": 3.2
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 68,
                            "routeCode": "74AN",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "01:15",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "20" },
                                { "time": "06:30 - 07:00", "interval": "10" },
                                { "time": "07:00 - 08:00", "interval": "3" },
                                { "time": "08:00 - 09:30", "interval": "5" },
                                { "time": "09:30 - 14:52", "interval": "7" },
                                { "time": "14:52 - 17:00", "interval": "8 - 9" },
                                { "time": "17:00 - 19:00", "interval": "6" },
                                { "time": "19:00 - 22:30", "interval": "7" },
                                { "time": "22:30 - 23:30", "interval": "10" },
                                { "time": "23:30 - 01:15", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:30",
                            "lastTime": "01:15",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "15 - 20" },
                                { "time": "06:30 - 07:00", "interval": "15" },
                                { "time": "07:00 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 19:00", "interval": "6 - 9" },
                                { "time": "19:00 - 23:30", "interval": "7 - 12" },
                                { "time": "23:30 - 01:15", "interval": "15 - 20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:30",
                            "lastTime": "01:15",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "15 - 20" },
                                { "time": "06:30 - 08:00", "interval": "15" },
                                { "time": "08:00 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 19:00", "interval": "6 - 9" },
                                { "time": "19:00 - 23:30", "interval": "7 - 12" },
                                { "time": "23:30 - 01:15", "interval": "15 - 20" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 68,
                            "routeCode": "74AS",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "12" },
                                { "time": "06:30 - 07:00", "interval": "10" },
                                { "time": "07:00 - 08:00", "interval": "5" },
                                { "time": "08:00 - 09:30", "interval": "6 - 7" },
                                { "time": "09:30 - 11:30", "interval": "10" },
                                { "time": "11:30 - 15:00", "interval": "7" },
                                { "time": "15:00 - 17:30", "interval": "6" },
                                { "time": "17:30 - 22:24", "interval": "7" },
                                { "time": "22:24 - 22:30", "interval": "6" },
                                { "time": "22:30 - 01:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:30",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "15" },
                                { "time": "06:30 - 07:00", "interval": "10 - 12" },
                                { "time": "07:00 - 08:00", "interval": "10" },
                                { "time": "08:00 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 17:30", "interval": "6 - 9" },
                                { "time": "17:30 - 22:30", "interval": "7 - 12" },
                                { "time": "22:30 - 01:00", "interval": "15 - 20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:30",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "15" },
                                { "time": "07:00 - 08:00", "interval": "10" },
                                { "time": "08:00 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 17:30", "interval": "6 - 9" },
                                { "time": "17:30 - 22:30", "interval": "7 - 12" },
                                { "time": "22:30 - 01:00", "interval": "15 - 20" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "南洋大廈", "nameEn": "Southern Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "彩虹廣場", "nameEn": "Rainbow Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "東門碼頭", "nameEn": "East Door Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東門商業中心", "nameEn": "East Door Commercial Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "葉欣公園", "nameEn": "YiYan Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "75",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴75線",
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["CSB"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉欣邨、彩虹、東門",
                        "viaEn": "Yiya Estate, Rainbow, East Door"
                    },
                    "B": {
                        "viaCn": "東門、彩虹、葉欣邨",
                        "viaEn": "East Door, Rainbow, YiYan Estate"
                    }
                }
            },
            "fares": {
                "adult": 6.3,
                "child": 3.2,
                "elder": 3.2,
                "student": 3.2
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 48,
                            "routeCode": "75N",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "20" },
                                { "time": "06:30 - 06:54", "interval": "12" },
                                { "time": "06:54 - 09:30", "interval": "6 - 7" },
                                { "time": "09:30 - 15:00", "interval": "10" },
                                { "time": "15:00 - 22:00", "interval": "7" },
                                { "time": "22:00 - 00:00", "interval": "10" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "8 - 12" },
                                { "time": "08:00 - 15:00", "interval": "6 - 10" },
                                { "time": "15:00 - 22:00", "interval": "8 - 12" },
                                { "time": "22:30 - 00:00", "interval": "10 - 15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "15" },
                                { "time": "08:00 - 09:30", "interval": "10 - 12" },
                                { "time": "09:30 - 15:00", "interval": "6 - 10" },
                                { "time": "15:00 - 22:00", "interval": "8 - 12" },
                                { "time": "22:00 - 00:30", "interval": "10 - 15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 48,
                            "routeCode": "75S",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 08:00", "interval": "10" },
                                { "time": "08:00 - 09:30", "interval": "6 - 7" },
                                { "time": "09:30 - 15:30", "interval": "10" },
                                { "time": "15:30 - 18:30", "interval": "6 - 7" },
                                { "time": "18:30 - 00:30", "interval": "10" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 09:30", "interval": "10 - 12" },
                                { "time": "09:30 - 17:00", "interval": "9 - 12" },
                                { "time": "17:00 - 18:30", "interval": "7 - 10" },
                                { "time": "18:30 - 00:30", "interval": "8 - 12" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 09:30", "interval": "15 - 20" },
                                { "time": "09:30 - 17:00", "interval": "9 - 12" },
                                { "time": "17:00 - 18:30", "interval": "7 - 10" },
                                { "time": "18:30 - 00:30", "interval": "8 - 12" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "葉欣邨第四座", "nameEn": "YiYan Estate Block 4", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "東門路", "nameEn": "East Door Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東門路", "nameEn": "East Door Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "葉欣邨第四座", "nameEn": "YiYan Estate Block 4", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "75P",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴75P線",
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["CSB"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "東門、葉角灣、葉欣",
                        "viaEn": "East Door, Leafy Bay, YiYan"
                    }
                }
            },
            "fares": {
                "adult": 6.3,
                "child": 3.2,
                "elder": 3.2,
                "student": 3.2
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 72,
                            "routeCode": "75PS",
                            "serviceDays": "weekday",
                            "firstTime": "07:20",
                            "lastTime": "07:50",
                            "interval": [
                                { "time": "07:20 - 07:29", "interval": "9" },
                                { "time": "07:29 - 07:50", "interval": "7" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東門公園", "nameEn": "East Door Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "nameSubCn": "葉角醫院", "nameSubEn": "Leafy Bay Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "南洋大廈", "nameEn": "Southern Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "彩虹廣場", "nameEn": "Rainbow Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "76",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴76線",
            "zones": ["Zone 7"],
            "operators": ["CSB"],
            "typeTags": [{ "type": "Special Departure", "bound": "B", "shift": "special1" }],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉角灣、樂莫坳",
                        "viaEn": "Leafy Bay Estate, Normal Gap"
                    },
                    "B": {
                        "viaCn": "樂莫坳、葉角灣",
                        "viaEn": "Normal Gap, Leafy Bay"
                    }
                },
                "special1": {
                    "bound": "B",
                    "B": {
                        "viaCn": "樂莫坳、安靈台、葉角灣",
                        "viaEn": "Normal Gap, Ambling Peak, Leafy Bay"
                    }
                }
            },
            "fares": {
                "adult": 6.3,
                "child": 3.2,
                "elder": 3.2,
                "student": 3.2,
                "sectionFares": [
                    {
                        "direction": "B",
                        "shift": ["special1"],
                        "fromCn": "安靈台靈灰安置所", "fromEn": "Ambling Peak Columbarium",
                        "toCn": "安靈台靈灰安置所", "toEn": "Ambling Peak Columbarium",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ],
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true,
                    "special1": false
                },
                "B": {
                    "normal": true,
                    "special1": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                },
                "special1": {
                    "label": "76# (特別班次 1)",
                    "labelEn": "76# (Special 1)",
                    "color": "#f59e0b"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 84,
                            "routeCode": "76N",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "10" },
                                { "time": "07:00 - 08:00", "interval": "6" },
                                { "time": "08:00 - 09:30", "interval": "5" },
                                { "time": "09:30 - 15:35", "interval": "7 - 8" },
                                { "time": "15:35 - 17:00", "interval": "5" },
                                { "time": "17:00 - 22:30", "interval": "10" },
                                { "time": "22:30 - 00:00", "interval": "12 - 15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "10 - 15" },
                                { "time": "07:00 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 15:30", "interval": "6 - 9" },
                                { "time": "15:30 - 17:00", "interval": "8 - 9" },
                                { "time": "17:00 - 22:30", "interval": "8 - 12" },
                                { "time": "22:30 - 00:00", "interval": "10 - 15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "10 - 15" },
                                { "time": "07:00 - 09:30", "interval": "10" },
                                { "time": "09:30 - 15:30", "interval": "6 - 9" },
                                { "time": "15:30 - 17:00", "interval": "8 - 9" },
                                { "time": "17:00 - 22:30", "interval": "8 - 12" },
                                { "time": "22:30 - 00:00", "interval": "10 - 15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 84,
                            "routeCode": "76S",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "01:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "10" },
                                { "time": "07:00 - 08:00", "interval": "5" },
                                { "time": "08:00 - 09:30", "interval": "6" },
                                { "time": "09:30 - 15:35", "interval": "7 - 8" },
                                { "time": "15:35 - 17:00", "interval": "5" },
                                { "time": "17:00 - 18:36", "interval": "6" },
                                { "time": "18:40 - 19:30", "interval": "4 - 5" },
                                { "time": "19:30 - 22:50", "interval": "8" },
                                { "time": "22:50 - 00:00", "interval": "10" },
                                { "time": "00:00 - 01:30", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "01:30",
                            "interval": [
                                { "time": "06:00 - 08:00", "interval": "10 - 15" },
                                { "time": "08:00 - 09:30", "interval": "10" },
                                { "time": "09:30 - 15:30", "interval": "8 - 9" },
                                { "time": "15:30 - 17:00", "interval": "6 - 9" },
                                { "time": "17:00 - 19:30", "interval": "5 - 9" },
                                { "time": "19:30 - 23:00", "interval": "6 - 9" },
                                { "time": "23:00 - 00:00", "interval": "8 - 12" },
                                { "time": "00:00 - 01:30", "interval": "25" }
                            ]
                        }
                    ],
                    "special1": [
                        {
                            "unlockLevel": 87,
                            "routeCode": "76S2",
                            "serviceDays": "weekday",
                            "firstTime": "07:00",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "07:00 - 18:30", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:00",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "07:00 - 18:30", "interval": "30" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "仙貝道", "nameEn": "Senpai Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "仙貝市政大廈", "nameEn": "Senpai Municipal Services Building", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 3, "nameCn": "上灣街市", "nameEn": "Sheung Bay Market", "visible": true, "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory Garden", "stopFor": ["normal", "special1"] },
                    { "seq": 4, "nameCn": "仙貝市政大廈", "nameEn": "Senpai Municipal Services Building", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 5, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 6, "nameCn": "仙貝道", "nameEn": "Senpai Road", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 7, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 8, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 9, "nameCn": "勿莫街市", "nameEn": "Mo Market", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 10, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["special1"] },
                    { "seq": 11, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 12, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 13, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 14, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 15, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 16, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 17, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 18, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 19, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal", "special1"] }
                ]
            }
        },
        {
            "route": "76S",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴76S線",
            "zones": ["Zone 7"],
            "operators": ["CSB"],
            "typeTags": ["Festival", "Express"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "樂莫坳",
                        "viaEn": "Normal Gap"
                    },
                    "B": {
                        "viaCn": " ",
                        "viaEn": " "
                    }
                }
            },
            "fares": {
                "adult": 8.4,
                "child": 4.2,
                "elder": 4.2,
                "student": 4.2
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 40,
                            "routeCode": "76SN",
                            "serviceDays": "custom",
                            "customDaysCn": "清明節及重陽節期間",
                            "customDaysEn": "During the Qingming Festival and Double Ninth Festival",
                            "firstTime": "08:00",
                            "lastTime": "19:30",
                            "interval": [
                                { "time": "08:00 - 19:30", "interval": "3 - 10" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 40,
                            "routeCode": "76SS",
                            "serviceDays": "custom",
                            "customDaysCn": "清明節及重陽節期間",
                            "customDaysEn": "During the Qingming Festival and Double Ninth Festival",
                            "firstTime": "08:00",
                            "lastTime": "17:30",
                            "interval": [
                                { "time": "08:00 - 17:30", "interval": "3 - 10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "77",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴77線",
            "zones": ["Zone 7"],
            "operators": ["CSB"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉角大學、亞歷山、樂莫坳",
                        "viaEn": "Leafy University, Alexander, Normal Gap"
                    },
                    "B": {
                        "viaCn": "樂莫坳、亞歷山、葉角大學",
                        "viaEn": "Normal Gap, Alexander, Leafy University"
                    }
                }
            },
            "fares": {
                "adult": 6.3,
                "child": 3.2,
                "elder": 3.2,
                "student": 3.2
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 87,
                            "routeCode": "77N",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "20" },
                                { "time": "06:30 - 07:00", "interval": "15" },
                                { "time": "07:00 - 08:00", "interval": "10 - 12" },
                                { "time": "08:00 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 15:30", "interval": "15" },
                                { "time": "15:30 - 17:30", "interval": "20" },
                                { "time": "17:30 - 19:00", "interval": "15" },
                                { "time": "19:00 - 00:00", "interval": "25" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "05:30",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:30 - 08:00", "interval": "30" },
                                { "time": "08:00 - 17:30", "interval": "20" },
                                { "time": "17:30 - 00:00", "interval": "30" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 87,
                            "routeCode": "77S",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "12 - 15" },
                                { "time": "08:00 - 09:30", "interval": "10 - 12" },
                                { "time": "09:30 - 15:30", "interval": "15" },
                                { "time": "15:30 - 17:00", "interval": "12 - 15" },
                                { "time": "17:00 - 18:40", "interval": "15" },
                                { "time": "18:40 - 19:30", "interval": "7 - 10" },
                                { "time": "19:30 - 23:00", "interval": "20" },
                                { "time": "23:00 - 00:30", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 15:30", "interval": "30" },
                                { "time": "15:30 - 17:00", "interval": "25" },
                                { "time": "17:00 - 23:00", "interval": "20" },
                                { "time": "23:00 - 00:30", "interval": "30" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "葉角大學", "nameEn": "Leafy University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "葉欣警察局", "nameEn": "Leafy Police Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "仙貝多層停車場", "nameEn": "Senpai Multi-Storey Car Park", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "仙貝山", "nameEn": "Senpai Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "葉欣俓", "nameEn": "Leafy Walking Trail", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "仙貝道", "nameEn": "Senpai Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "仙貝市政大廈", "nameEn": "Senpai Municipal Services Building", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "上灣街市", "nameEn": "Sheung Bay Market", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "仙貝市政大廈", "nameEn": "Senpai Municipal Services Building", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "仙貝道", "nameEn": "Senpai Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "葉欣俓", "nameEn": "Leafy Walking Trail", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝山", "nameEn": "Senpai Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "nameSubCn": "葉角大學北門", "nameSubEn": "Leafy University North Entrance", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "仙貝多層停車場", "nameEn": "Senpai Multi-Storey Car Park", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "葉欣警察局", "nameEn": "Leafy Police Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "葉角大學", "nameEn": "Leafy University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "140",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴140線",
            "zones": ["Zone 1", "Zone 4"],
            "operators": ["SE", "FT"],
            "typeTags": ["CityStepped"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "四露谷、虹尾角、北環、中環、南環",
                        "viaEn": "Shadow Valley, Iris Point, Northern, Central, Southern"
                    },
                    "B": {
                        "viaCn": "南環、中環、北環、賴得、虹尾角、四露谷",
                        "viaEn": "Southern, Central, Northern, Wright, Iris Point, Shadow Valley"
                    }
                }
            },
            "fares": {
                "adult": 11.4,
                "child": 5.7,
                "elder": 5.7,
                "student": 5.7,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "西區海底隧道轉車站", "fromEn": "Western Habour Tunnel Interchange",
                        "toCn": "陽光碼頭", "toEn": "Sunshine Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "時間廊", "fromEn": "Timelapse Mall",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 5,
                            "routeCode": "140E",
                            "serviceDays": "weekday",
                            "firstTime": "05:40",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "05:40 - 06:00", "interval": "10 - 12" },
                                { "time": "06:00 - 07:00", "interval": "6 - 9" },
                                { "time": "07:00 - 10:00", "interval": "4 - 7" },
                                { "time": "10:00 - 17:00", "interval": "3 - 7" },
                                { "time": "17:00 - 19:00", "interval": "3 - 5" },
                                { "time": "19:00 - 21:00", "interval": "4 - 8" },
                                { "time": "21:00 - 23:00", "interval": "5 - 9" },
                                { "time": "23:00 - 00:00", "interval": "8 - 9" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:40",
                            "lastTime": "00:25",
                            "interval": [
                                { "time": "05:40 - 06:00", "interval": "10" },
                                { "time": "06:00 - 07:00", "interval": "8 - 9" },
                                { "time": "07:00 - 10:00", "interval": "5 - 8" },
                                { "time": "10:00 - 19:00", "interval": "3 - 5" },
                                { "time": "19:00 - 21:00", "interval": "4 - 7" },
                                { "time": "21:00 - 00:00", "interval": "5 - 8" },
                                { "time": "00:10", "interval": "0" },
                                { "time": "00:25", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:40",
                            "lastTime": "00:25",
                            "interval": [
                                { "time": "05:40 - 07:00", "interval": "10" },
                                { "time": "07:00 - 10:00", "interval": "7 - 9" },
                                { "time": "10:00 - 19:00", "interval": "3 - 5" },
                                { "time": "19:00 - 21:00", "interval": "4 - 7" },
                                { "time": "21:00 - 00:00", "interval": "5 - 8" },
                                { "time": "00:10", "interval": "0" },
                                { "time": "00:25", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 5,
                            "routeCode": "140W",
                            "serviceDays": "weekday",
                            "firstTime": "06:20",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "06:20 - 07:20", "interval": "10 - 12" },
                                { "time": "07:20 - 09:00", "interval": "7 - 10" },
                                { "time": "09:00 - 10:00", "interval": "12 - 15" },
                                { "time": "10:00 - 10:30", "interval": "7 - 12" },
                                { "time": "10:30 - 17:00", "interval": "3 - 5" },
                                { "time": "17:00 - 17:30", "interval": "2 - 5" },
                                { "time": "17:30 - 20:00", "interval": "4 - 7" },
                                { "time": "20:00 - 23:00", "interval": "5 - 8" },
                                { "time": "23:30 - 00:00", "interval": "7 - 9" },
                                { "time": "00:00 - 01:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:20",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "06:20 - 09:00", "interval": "10 - 12" },
                                { "time": "09:00 - 10:00", "interval": "8 - 10" },
                                { "time": "10:00 - 10:30", "interval": "4 - 8" },
                                { "time": "10:30 - 20:00", "interval": "3 - 5" },
                                { "time": "20:00 - 23:00", "interval": "4 - 8" },
                                { "time": "23:30 - 00:00", "interval": "5 - 9" },
                                { "time": "00:00 - 01:00", "interval": "7 - 12" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:20",
                            "lastTime": "01:00",
                            "interval": [
                                { "time": "06:20 - 09:00", "interval": "12 - 15" },
                                { "time": "09:00 - 10:00", "interval": "8 - 10" },
                                { "time": "10:00 - 10:30", "interval": "4 - 8" },
                                { "time": "10:30 - 20:00", "interval": "3 - 5" },
                                { "time": "20:00 - 23:00", "interval": "4 - 8" },
                                { "time": "23:30 - 00:00", "interval": "5 - 9" },
                                { "time": "00:00 - 01:00", "interval": "7 - 12" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "虹尾角街市", "nameEn": "Iris Point Market", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "智家坊", "nameEn": "I Home", "nameSubCn": "虹尾角站, 彩色匯", "nameSubEn": "Iris Point Station, Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "宜和劇場", "nameEn": "Jardine Theater", "nameSubCn": "長島東醫院", "nameSubEn": "East Long Island Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "南環中心", "nameEn": "The Southern", "nameSubCn": "南環坊", "nameSubEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "南環坊", "nameEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "虹尾角站", "nameEn": "Iris Point Station", "nameSubCn": "智家坊, 彩色匯", "nameSubEn": "I Home, Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "宜和劇場", "nameEn": "Jardine Theater", "nameSubCn": "長島東醫院", "nameSubEn": "East Long Island Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "140P",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴140P線",
            "zones": ["Zone 1", "Zone 4"],
            "operators": ["SE", "FT"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "南環、中環、虹尾角、四露谷",
                        "viaEn": "Southern, Central, Iris Point, Shadow Valley"
                    }
                }
            },
            "fares": {
                "adult": 11.4,
                "child": 5.7,
                "elder": 5.7,
                "student": 5.7,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "長島中心", "fromEn": "Long Island Center",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 7.2
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockRoutes": ["140", "171", "240"],
                            "routeCode": "140PW",
                            "serviceDays": "weekday",
                            "firstTime": "17:30",
                            "lastTime": "20:00",
                            "interval": [
                                { "time": "17:30 - 20:00", "interval": "10 - 12" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "南環坊", "nameEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "長島中心", "nameEn": "Long Island Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "智家坊", "nameEn": "I Home", "nameSubCn": "虹尾角站, 彩色匯", "nameSubEn": "Iris Point Station, Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "宜和劇場", "nameEn": "Jardine Theater", "nameSubCn": "長島東醫院", "nameSubEn": "East Long Island Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "141P",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通勞博頓快巴141P線",
            "zones": ["Zone 1", "Zone 4"],
            "operators": ["SE", "REBC"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "醫院島、艾迪、北環、陽光大學、北島花園",
                        "viaEn": "Hospital Island, Addi, Northern, Sunshine University, North Island Estate"
                    },
                    "B": {
                        "viaCn": "北島花園、陽光大學、北環、艾迪、醫院島",
                        "viaEn": "North Island Estate, Sunshine University, Northern, Addi, Hospital Island"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "西區海底隧道轉車站", "fromEn": "Western Habour Tunnel Interchange",
                        "toCn": "北頓市中心", "toEn": "Norton Town Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "路博斯總部大樓", "fromEn": "Roblox HQ",
                        "toCn": "貨櫃島巴士總站", "toEn": "Containers Island Bus Terminus",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 64,
                            "routeCode": "141PE",
                            "serviceDays": "weekday",
                            "firstTime": "17:30",
                            "lastTime": "18:45",
                            "interval": [
                                { "time": "17:30 - 18:20", "interval": "7 - 9" },
                                { "time": "18:30 - 18:45", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "17:30",
                            "lastTime": "18:45",
                            "interval": [
                                { "time": "17:30 - 18:20", "interval": "15" },
                                { "time": "18:30 - 18:45", "interval": "15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 64,
                            "routeCode": "141PW",
                            "serviceDays": "weekday",
                            "firstTime": "07:15",
                            "lastTime": "08:25",
                            "interval": [
                                { "time": "07:15 - 07:45", "interval": "15" },
                                { "time": "07:45 - 08:25", "interval": "10" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "07:15",
                            "lastTime": "08:25",
                            "interval": [
                                { "time": "07:15 - 07:45", "interval": "30" },
                                { "time": "07:45 - 08:25", "interval": "10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "路博斯總部大樓", "nameEn": "Roblox HQ", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "路博斯總部大樓", "nameEn": "Roblox HQ", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "伊迪城", "nameEn": "Eddie City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "142",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通勞博頓快巴142線",
            "zones": ["Zone 1", "Zone 4"],
            "operators": ["SE", "REBC"],
            "typeTags": ["CityStepped"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "賴得、北環、中環、南環",
                        "viaEn": "Wright, Northern, Central, Southern"
                    },
                    "B": {
                        "viaCn": "南環、中環、北環、賴得",
                        "viaEn": "Southern, Central, Northern, Wright"
                    }
                }
            },
            "fares": {
                "adult": 11.4,
                "child": 5.7,
                "elder": 5.7,
                "student": 5.7,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "西區海底隧道轉車站", "fromEn": "Western Habour Tunnel Interchange",
                        "toCn": "陽光碼頭", "toEn": "Sunshine Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "時間廊", "fromEn": "Timelapse Mall",
                        "toCn": "白鴿邨", "toEn": "Dove Estate",
                        "price": 5.4,
                        "childPrice": 2.7,
                        "elderPrice": 2.7,
                        "studentPrice": 2.7
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 30,
                            "routeCode": "142E",
                            "serviceDays": "weekday",
                            "firstTime": "06:20",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:20 - 07:30", "interval": "15" },
                                { "time": "07:30 - 08:30", "interval": "5 - 9" },
                                { "time": "08:30 - 09:30", "interval": "7 - 12" },
                                { "time": "09:30 - 10:30", "interval": "10 - 15" },
                                { "time": "10:30 - 11:30", "interval": "12 - 16" },
                                { "time": "11:30 - 12:30", "interval": "15 - 25" },
                                { "time": "12:30 - 13:30", "interval": "30" },
                                { "time": "13:30 - 17:30", "interval": "20 - 25" },
                                { "time": "17:30 - 18:30", "interval": "15" },
                                { "time": "18:30 - 20:00", "interval": "20" },
                                { "time": "20:00 - 23:00", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:20",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:20 - 07:30", "interval": "20 - 25" },
                                { "time": "07:30 - 08:30", "interval": "10 - 12" },
                                { "time": "08:30 - 09:30", "interval": "12 - 15" },
                                { "time": "09:30 - 10:30", "interval": "15 - 20" },
                                { "time": "10:30 - 18:30", "interval": "15" },
                                { "time": "18:30 - 20:00", "interval": "20 - 25" },
                                { "time": "20:00 - 23:00", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:20",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "06:20 - 07:30", "interval": "20 - 25" },
                                { "time": "07:30 - 10:30", "interval": "20" },
                                { "time": "10:30 - 18:30", "interval": "15" },
                                { "time": "18:30 - 20:00", "interval": "20 - 25" },
                                { "time": "20:00 - 23:00", "interval": "30" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 30,
                            "routeCode": "142W",
                            "serviceDays": "weekday",
                            "firstTime": "06:40",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:40 - 09:00", "interval": "20" },
                                { "time": "09:00 - 14:00", "interval": "25" },
                                { "time": "14:00 - 17:30", "interval": "20" },
                                { "time": "17:30 - 18:30", "interval": "10 - 15" },
                                { "time": "18:30 - 19:30", "interval": "15" },
                                { "time": "19:30 - 22:30", "interval": "20" },
                                { "time": "22:30 - 23:45", "interval": "25" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:40",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:40 - 09:00", "interval": "30" },
                                { "time": "09:00 - 12:00", "interval": "15 - 20" },
                                { "time": "12:00 - 21:30", "interval": "15" },
                                { "time": "21:30 - 22:30", "interval": "20 - 25" },
                                { "time": "22:30 - 23:45", "interval": "25" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "紅地磚", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "亞特路", "nameEn": "Arctan Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環消防局", "nameEn": "Central Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "南環花園二期", "nameEn": "Southern Two", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "中葉隧道行政大樓", "nameEn": "Leafy-Central Tunnel Administration Block", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "南環文化區公園", "nameEn": "Southern Cultural District Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "M∞", "nameEn": "Museum Infinite", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "南環文化區公園", "nameEn": "Southern Cultural District Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "中葉隧道行政大樓", "nameEn": "Leafy-Central Tunnel Administration Block", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "南環坊", "nameEn": "Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "中環（中日街）", "nameEn": "Central (Sun Central Street)", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北環中心", "nameEn": "Northern Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "銀行大廈", "nameEn": "Bank Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "148",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通勞博頓快巴148線",
            "zones": ["Zone 1", "Zone 4"],
            "operators": ["SE", "REBC"],
            "typeTags": ["CityStepped"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "醫院島、艾迪、賴得、北環、陽光大學、北島花園",
                        "viaEn": "Hospital Island, Addi, Wright, Northern, Sunshine University, North Island Estate"
                    },
                    "B": {
                        "viaCn": "北島花園、陽光大學、北環、賴得、艾迪、醫院島",
                        "viaEn": "North Island Estate, Sunshine University, Northern, Wright, Addi, Hospital Island"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "購物廊", "fromEn": "Shopping Corridor",
                        "toCn": "北頓市中心", "toEn": "Norton Town Center",
                        "price": 11.4,
                        "childPrice": 5.7,
                        "elderPrice": 5.7,
                        "studentPrice": 5.7
                    },
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "西區海底隧道轉車站", "fromEn": "Western Habour Tunnel Interchange",
                        "toCn": "北頓市中心", "toEn": "Norton Town Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "中環橋", "fromEn": "Central Bridge",
                        "toCn": "貨櫃島巴士總站", "toEn": "Containers Island Bus Terminus",
                        "price": 11.4,
                        "childPrice": 5.7,
                        "elderPrice": 5.7,
                        "studentPrice": 5.7
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "時間廊", "fromEn": "Timelapse Mall",
                        "toCn": "貨櫃島巴士總站", "toEn": "Containers Island Bus Terminus",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 64,
                            "routeCode": "148E",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "06:00 - 07:30", "interval": "7 - 12" },
                                { "time": "07:30 - 09:00", "interval": "4 - 8" },
                                { "time": "09:00 - 17:30", "interval": "8 - 9" },
                                { "time": "17:30 - 19:30", "interval": "6 - 8" },
                                { "time": "19:30 - 21:30", "interval": "7 - 10" },
                                { "time": "21:30 - 23:30", "interval": "10 - 12" },
                                { "time": "23:30 - 00:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "06:00 - 07:30", "interval": "10 - 15" },
                                { "time": "07:30 - 09:00", "interval": "7 - 9" },
                                { "time": "09:00 - 21:30", "interval": "6 - 9" },
                                { "time": "21:30 - 23:30", "interval": "7 - 10" },
                                { "time": "23:30 - 00:00", "interval": "12 - 15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "06:00 - 07:30", "interval": "15" },
                                { "time": "07:30 - 09:00", "interval": "12 - 13" },
                                { "time": "09:00 - 21:30", "interval": "6 - 9" },
                                { "time": "21:30 - 23:30", "interval": "7 - 10" },
                                { "time": "23:30 - 00:00", "interval": "12 - 15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 64,
                            "routeCode": "148W",
                            "serviceDays": "weekday",
                            "firstTime": "05:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "05:00 - 06:00", "interval": "15" },
                                { "time": "06:00 - 07:30", "interval": "7 - 10" },
                                { "time": "07:30 - 09:30", "interval": "6 - 9" },
                                { "time": "09:30 - 12:00", "interval": "7 - 9" },
                                { "time": "12:00 - 14:00", "interval": "8 - 10" },
                                { "time": "14:00 - 17:00", "interval": "7 - 9" },
                                { "time": "17:30 - 19:30", "interval": "4 - 8" },
                                { "time": "19:30 - 20:30", "interval": "9 - 10" },
                                { "time": "20:30 - 23:00", "interval": "10 - 12" },
                                { "time": "23:00 - 23:30", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "05:00 - 06:00", "interval": "15" },
                                { "time": "06:00 - 07:30", "interval": "10 - 15" },
                                { "time": "07:30 - 09:30", "interval": "7 - 12" },
                                { "time": "09:30 - 14:00", "interval": "6 - 9" },
                                { "time": "14:00 - 17:30", "interval": "7 - 10" },
                                { "time": "17:30 - 20:30", "interval": "6 - 9" },
                                { "time": "20:30 - 23:00", "interval": "8 - 12" },
                                { "time": "23:00 - 23:30", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "05:00 - 07:30", "interval": "15" },
                                { "time": "07:30 - 09:30", "interval": "12 - 15" },
                                { "time": "09:30 - 14:00", "interval": "6 - 9" },
                                { "time": "14:00 - 17:30", "interval": "7 - 10" },
                                { "time": "17:30 - 20:30", "interval": "6 - 9" },
                                { "time": "20:30 - 23:00", "interval": "8 - 12" },
                                { "time": "23:00 - 23:30", "interval": "15" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "艾迪路", "nameEn": "Addi Road", "nameSubCn": "北白鴿避風塘", "nameSubEn": "North Dove Island Typhoon Shelter", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "銀行大廈", "nameEn": "Bank Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "160R",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通天際陽光160R線",
            "zones": ["Zone 1", "Zone 4", "Zone 7"],
            "operators": ["SE", "HZ"],
            "typeTags": ["Event", "Stadium"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "北環、北島花園、陽光大學、東錦葵",
                        "viaEn": "Northern, North Island Estate, Sunshine University, Eastmallow"
                    }
                }
            },
            "fares": {
                "adult": 27.3,
                "child": 13.7,
                "elder": 13.7,
                "student": 13.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 1080,
                            "routeCode": "160R",
                            "serviceDays": "custom",
                            "customDaysCn": "陽光體育館演出日子提供服務",
                            "customDaysEn": "Provide service on days when there is a show at Sunshine Stadium",
                            "firstTime": "23:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "23:00 - 00:30", "interval": "10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "170R",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴170R線",
            "zones": ["Zone 1", "Zone 7"],
            "operators": ["SE", "HZ"],
            "typeTags": ["Event", "Express", "Stadium"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "第七區轉車站、鎌塔、國際塔、仙貝、東門、海西",
                        "viaEn": "Zone 7 Interchange, Kamaya, International Tower, Senpai, East Door, Haisey"
                    }
                }
            },
            "fares": {
                "adult": 27.3,
                "child": 13.7,
                "elder": 13.7,
                "student": 13.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 1080,
                            "routeCode": "170R",
                            "serviceDays": "custom",
                            "customDaysCn": "陽光體育館演出日子提供服務",
                            "customDaysEn": "Provide service on days when there is a show at Sunshine Stadium",
                            "firstTime": "23:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "23:00 - 00:30", "interval": "10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "東門碼頭", "nameEn": "East Door Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "171",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴際巴171線",
            "zones": ["Zone 1", "Zone 4", "Zone 7"],
            "operators": ["FT", "CSB"],
            "typeTags": ["Limited-stop"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "虹尾角、賴得、中環、南環、千葉、亞歷山大、東門",
                        "viaEn": "Iris Point, Wright, Central, Southern, Thousand Leaf, Alexander, East Door"
                    },
                    "B": {
                        "viaCn": "東門、亞歷山大、千葉、南環、中環、賴得、虹尾角、四露谷",
                        "viaEn": "East Door, Alexander, Thousand Leaf, Southern, Central, Wright, Iris Point, Shadow Valley"
                    }
                }
            },
            "fares": {
                "adult": 18.2,
                "child": 9.1,
                "elder": 9.1,
                "student": 9.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "西區海底隧道轉車站", "fromEn": "Western Habour Tunnel Interchange",
                        "toCn": "彩虹中心", "toEn": "Rainbow Estate Complex",
                        "price": 12.1,
                        "childPrice": 6.1,
                        "elderPrice": 6.1,
                        "studentPrice": 6.1
                    },
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "彩虹中心", "toEn": "Rainbow Estate Complex",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "葉角大學", "fromEn": "Leafy University",
                        "toCn": "彩虹中心", "toEn": "Rainbow Estate Complex",
                        "price": 6.3,
                        "childPrice": 3.2,
                        "elderPrice": 3.2,
                        "studentPrice": 3.2
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "中環南路", "fromEn": "Southern Central Road",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 12.1,
                        "childPrice": 6.1,
                        "elderPrice": 6.1,
                        "studentPrice": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "時間廊", "fromEn": "Timelapse Mall",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ],
                "shortDistanceRebates": [
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "startStopCn": "彩虹中心", "startStopEn": "Rainbow Estate Complex",
                        "alightStopCn": "葉角大學", "alightStopEn": "Leafy University",
                        "actualFare": 6.3,
                        "childFare": 3.2,
                        "elderFare": 3.2,
                        "studentFare": 3.2,
                        "fullFare": 18.2,
                        "childFullFare": 9.1,
                        "elderFullFare": 9.1,
                        "studentFullFare": 9.1
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "startStopCn": "彩虹中心", "startStopEn": "Rainbow Estate Complex",
                        "alightStopCn": "第七區轉車站", "alightStopEn": "Zone 7 Interchange",
                        "actualFare": 7.2,
                        "childFare": 3.6,
                        "elderFare": 3.6,
                        "studentFare": 3.6,
                        "fullFare": 18.2,
                        "childFullFare": 9.1,
                        "elderFullFare": 9.1,
                        "studentFullFare": 9.1
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 81,
                            "routeCode": "171E",
                            "serviceDays": "weekday",
                            "firstTime": "06:30",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:30 - 07:30", "interval": "20" },
                                { "time": "07:30 - 09:30", "interval": "7 - 10" },
                                { "time": "09:30 - 11:30", "interval": "12 - 15" },
                                { "time": "11:30 - 13:30", "interval": "15" },
                                { "time": "13:30 - 17:00", "interval": "12" },
                                { "time": "17:00 - 17:30", "interval": "7 - 10" },
                                { "time": "17:30 - 19:00", "interval": "5 - 9" },
                                { "time": "19:00 - 22:00", "interval": "9 - 12" },
                                { "time": "22:00 - 23:30", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:30",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "07:30 - 09:30", "interval": "20" },
                                { "time": "09:30 - 13:30", "interval": "15" },
                                { "time": "13:30 - 15:30", "interval": "12 - 15" },
                                { "time": "15:30 - 17:30", "interval": "12" },
                                { "time": "17:30 - 22:00", "interval": "10 - 12" },
                                { "time": "22:00 - 23:30", "interval": "15" },
                                { "time": "00:00", "interval": "0" },
                                { "time": "00:30", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 81,
                            "routeCode": "171W",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "15" },
                                { "time": "07:00 - 07:20", "interval": "6 - 10" },
                                { "time": "07:20 - 08:00", "interval": "4 - 8" },
                                { "time": "08:00 - 08:30", "interval": "6 - 9" },
                                { "time": "08:30 - 10:00", "interval": "7 - 12" },
                                { "time": "10:00 - 12:00", "interval": "10 - 13" },
                                { "time": "12:00 - 15:30", "interval": "15" },
                                { "time": "15:30 - 17:00", "interval": "5 - 7" },
                                { "time": "17:00 - 19:00", "interval": "7 - 12" },
                                { "time": "19:00 - 22:00", "interval": "15" },
                                { "time": "22:00 - 23:30", "interval": "25" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 07:20", "interval": "12" },
                                { "time": "07:20 - 08:30", "interval": "7 - 10" },
                                { "time": "08:30 - 10:00", "interval": "8 - 12" },
                                { "time": "10:00 - 12:00", "interval": "5 - 9" },
                                { "time": "12:00 - 15:30", "interval": "9 - 12" },
                                { "time": "15:30 - 17:00", "interval": "10 - 15" },
                                { "time": "17:00 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:30", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 10:00", "interval": "15" },
                                { "time": "10:00 - 12:00", "interval": "5 - 9" },
                                { "time": "12:00 - 15:30", "interval": "9 - 12" },
                                { "time": "15:30 - 17:00", "interval": "10 - 15" },
                                { "time": "17:00 - 22:00", "interval": "20" },
                                { "time": "22:00 - 23:30", "interval": "30" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "長島東醫院", "nameEn": "East Long Island Hospital", "nameSubCn": "宜和劇場", "nameSubEn": "Jardine Theater", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "彩色匯", "nameEn": "Rainbow Center", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "時間里", "nameEn": "Timelapse Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "賴得里", "nameEn": "Wright Lane", "nameSubCn": "賴得站", "nameSubEn": "Wright Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "艾迪路", "nameEn": "Addi Road", "nameSubCn": "北白鴿避風塘", "nameSubEn": "North Dove Island Typhoon Shelter", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "葉角大學", "nameEn": "Leafy University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "葉欣警察局", "nameEn": "Leafy Police Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "仙貝多層停車場", "nameEn": "Senpai Multi-Storey Car Park", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝山", "nameEn": "Senpai Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "葉欣俓", "nameEn": "Leafy Walking Trail", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "東門公園", "nameEn": "East Door Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 24, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 25, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 26, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 27, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東門公園", "nameEn": "East Door Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "葉欣俓", "nameEn": "Leafy Walking Trail", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "仙貝山", "nameEn": "Senpai Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "nameSubCn": "葉角大學北門", "nameSubEn": "Leafy University North Entrance", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝多層停車場", "nameEn": "Senpai Multi-Storey Car Park", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "葉欣警察局", "nameEn": "Leafy Police Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "葉角大學", "nameEn": "Leafy University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "中環南路", "nameEn": "Southern Central Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "虹尾角站", "nameEn": "Iris Point Station", "nameSubCn": "智家坊, 彩色匯", "nameSubEn": "I Home, Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "宜和劇場", "nameEn": "Jardine Theater", "nameSubCn": "長島東醫院", "nameSubEn": "East Long Island Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 24, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 25, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 26, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 27, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 28, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "171R",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴際巴171R線",
            "zones": ["Zone 1", "Zone 7"],
            "operators": ["FT", "CSB"],
            "typeTags": ["Event", "Stadium"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "北環、中環、南環、千葉、亞歷山大、樂莫坳、葉角灣",
                        "viaEn": "Northern, Central, Southern, Thousand Leaf, Alexander, Normal Gap, Leafy Bay"
                    }
                }
            },
            "fares": {
                "adult": 27.3,
                "child": 13.7,
                "elder": 13.7,
                "student": 13.7
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 1080,
                            "routeCode": "171R",
                            "serviceDays": "custom",
                            "customDaysCn": "陽光體育館演出日子提供服務",
                            "customDaysEn": "Provide service on days when there is a show at Sunshine Stadium",
                            "firstTime": "23:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "23:00 - 00:30", "interval": "10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "亞特路", "nameEn": "Arctan Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "中環消防局", "nameEn": "Central Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "南環花園二期", "nameEn": "Southern Two", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "葉欣警察局", "nameEn": "Leafy Police Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝多層停車場", "nameEn": "Senpai Multi-Storey Car Park", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "仙貝山", "nameEn": "Senpai Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "葉欣俓", "nameEn": "Leafy Walking Trail", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 24, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 25, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "246X",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通勞博頓快巴246X線",
            "zones": ["Zone 1", "Zone 4"],
            "operators": ["SE", "REBC"],
            "typeTags": [
                { "type": "Circular", "shift": "normal" },
                { "type": "Special Departure", "shift": "special1" },
                { "type": "Limited-stop", "shift": "special2" },
                { "type": "Special Departure", "shift": "special2" }
            ],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "北環、西區海底隧道、^^時間廊、伊迪城、貨櫃島、中西大橋、南環、中環",
                        "viaEn": "Northern, Western Harbour Tunnel, ^^Timelapse Mall, Eddie City, Containers Island, Central - Western Bridge, Southern, Central"
                    }
                },
                "special1": {
                    "bound": "A",
                    "A": {
                        "viaCn": "北環、西區海底隧道、伊迪城",
                        "viaEn": "Northern, Western Harbour Tunnel, Eddie City"
                    }
                },
                "special2": {
                    "bound": "A",
                    "A": {
                        "viaCn": "伊迪城、中西大橋、南環、中環",
                        "viaEn": "Eddie City, Central - Western Bridge, Southern, Central"
                    }
                }
            },
            "fares": {
                "adult": 11.4,
                "child": 5.7,
                "elder": 5.7,
                "student": 5.7,
                "overrides": [
                    {
                        "bound": "A",
                        "shift": "special2",
                        "adult": 10.8,
                        "child": 5.4,
                        "elder": 5.4,
                        "student": 5.4
                    }
                ],
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "南環街市", "fromEn": "Southern Market",
                        "toCn": "東錦葵海傍路", "toEn": "Eastmallow Praya Road",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true,
                    "special1": true,
                    "special2": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift",
                    circular: true
                },
                "special1": {
                    "label": "146 (特別班次 1)",
                    "labelEn": "146 (Special 1)",
                    "color": "#f59e0b"
                },
                "special2": {
                    "label": "246P (特別班次 2)",
                    "labelEn": "246P (Special 2)",
                    "color": "#10b981"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 74,
                            "routeCode": "246XA",
                            "serviceDays": "weekday",
                            "firstTime": "17:40",
                            "lastTime": "18:35",
                            "interval": [
                                { "time": "17:40, 18:05, 18:35", "interval": "0" }
                            ]
                        }
                    ],
                    "special1": [
                        {
                            "unlockLevel": 74,
                            "routeCode": "146W",
                            "serviceDays": "weekday",
                            "firstTime": "07:00",
                            "lastTime": "08:55",
                            "interval": [
                                { "time": "07:00, 07:30, 07:50, 08:10, 08:30, 08:55", "interval": "0" }
                            ]
                        }
                    ],
                    "special2": [
                        {
                            "unlockLevel": 74,
                            "routeCode": "246PE",
                            "serviceDays": "weekday",
                            "firstTime": "06:25",
                            "lastTime": "09:20",
                            "interval": [
                                { "time": "06:25 - 06:45", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "10 - 12" },
                                { "time": "08:00 - 09:00", "interval": "7 - 10" },
                                { "time": "09:05 - 09:20", "interval": "15" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 2, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 3, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 4, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 5, "nameCn": "北環中心", "nameEn": "Northern Plaza", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 6, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "nameSubCn": "月亮灣站", "nameSubEn": "Lunar Bay Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 7, "nameCn": "^^時間廊", "nameEn": "^^Timelapse Mall", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 8, "nameCn": "銀行大廈", "nameEn": "Bank Tower", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 9, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 10, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 11, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 12, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["special2"] },
                    { "seq": 13, "nameCn": "伊迪城", "nameEn": "Eddie City", "visible": true, "stopFor": ["normal", "special1", "special2"] },
                    { "seq": 14, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 15, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island Bus Terminus", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 16, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal", "special2"] },
                    { "seq": 17, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal", "special2"] },
                    { "seq": 18, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["special2"] },
                    { "seq": 19, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal", "special2"] },
                    { "seq": 20, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "370",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光勞博頓快巴370線",
            "zones": ["Zone 1", "Zone 7"],
            "operators": ["HZ", "REBC"],
            "typeTags": ["Special Departure"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "虹尾角、賴得、白鴿、艾迪、醫院島、海苔灣、中西大橋、千葉、鎌塔、國際塔",
                        "viaEn": "Iris Point, Wright, Dove, Addi, Hospital Island, Seaweed Bay, Central - Western Bridge, Thousand Leaf, Kamaya, International Tower"
                    },
                    "B": {
                        "viaCn": "國際塔、鎌塔、千葉、中西大橋、海苔灣、醫院島、艾迪、白鴿、賴得、虹尾角",
                        "viaEn": "International Tower, Kamaya, Thousand Leaf, Central - Western Bridge, Seaweed Bay, Hospital Island, Addi, Dove, Wright, Iris Point"
                    }
                }
            },
            "fares": {
                "adult": 18.2,
                "child": 9.1,
                "elder": 9.1,
                "student": 9.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "仙貝廣場", "toEn": "Senpai Shopping Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "中西轉車站", "fromEn": "Central - Western Interchange",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockRoutes": ["270A", "370A", "370B", "R370", "Y370"],
                            "routeCode": "370E",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:15",
                            "interval": [
                                { "time": "06:00 - 07:30", "interval": "20" },
                                { "time": "08:15, 09:00, 10:15", "interval": "0" },
                                { "time": "11:00 - 13:00", "interval": "15" },
                                { "time": "13:00 - 15:00", "interval": "12" },
                                { "time": "15:00 - 17:00", "interval": "10" },
                                { "time": "19:30 - 21:30", "interval": "60" },
                                { "time": "21:30 - 23:00", "interval": "10" },
                                { "time": "23:00 - 00:15", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "00:15",
                            "interval": [
                                { "time": "06:00 - 07:30", "interval": "15" },
                                { "time": "08:15, 09:00, 10:15", "interval": "0" },
                                { "time": "11:00 - 13:00", "interval": "12" },
                                { "time": "13:00 - 15:00", "interval": "10" },
                                { "time": "15:00 - 17:00", "interval": "7 - 10" },
                                { "time": "17:00 - 18:20", "interval": "5 - 7" },
                                { "time": "18:20 - 19:00", "interval": "8 - 10" },
                                { "time": "19:00 - 21:30", "interval": "9 - 10" },
                                { "time": "21:30 - 23:00", "interval": "10" },
                                { "time": "23:00 - 00:15", "interval": "12" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:15",
                            "interval": [
                                { "time": "06:00 - 07:30", "interval": "15" },
                                { "time": "08:15, 09:00, 10:15", "interval": "0" },
                                { "time": "11:00 - 13:00", "interval": "12" },
                                { "time": "13:00 - 15:00", "interval": "10" },
                                { "time": "15:00 - 17:00", "interval": "9 - 10" },
                                { "time": "17:00 - 19:00", "interval": "8 - 10" },
                                { "time": "19:00 - 21:30", "interval": "9 - 10" },
                                { "time": "21:30 - 23:00", "interval": "10" },
                                { "time": "23:00 - 00:15", "interval": "12" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockRoutes": ["270A", "370A", "370B", "R370", "Y370"],
                            "routeCode": "370W",
                            "serviceDays": "weekday",
                            "firstTime": "06:10",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:10 - 07:00", "interval": "12 - 13" },
                                { "time": "09:00 - 16:30", "interval": "12" },
                                { "time": "16:30 - 18:50", "interval": "60" },
                                { "time": "19:20 - 23:00", "interval": "12" },
                                { "time": "23:00 - 23:30", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:10",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "06:10 - 07:00", "interval": "15" },
                                { "time": "07:00 - 08:00", "interval": "20" },
                                { "time": "08:00 - 08:40", "interval": "15" },
                                { "time": "08:40 - 09:00", "interval": "20" },
                                { "time": "09:00 - 18:50", "interval": "10" },
                                { "time": "18:50 - 23:00", "interval": "12" },
                                { "time": "23:00 - 23:30", "interval": "15" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "虹尾角街市", "nameEn": "Iris Point Market", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "時間里", "nameEn": "Timelapse Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 24, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 25, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "彩色匯", "nameEn": "Rainbow Center", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 24, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "370A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光勞博頓快巴370A線",
            "zones": ["Zone 1", "Zone 7"],
            "operators": ["HZ", "REBC"],
            "typeTags": ["CityStepped"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "虹尾角、賴得、白鴿、艾迪、醫院島、中西大橋、千葉、鎌塔、國際塔",
                        "viaEn": "Iris Point, Wright, Dove, Addi, Hospital Island, Central - Western Bridge, Thousand Leaf, Kamaya, International Tower"
                    },
                    "B": {
                        "viaCn": "國際塔、鎌塔、千葉、中西大橋、醫院島、艾迪、白鴿、賴得、虹尾角",
                        "viaEn": "International Tower, Kamaya, Thousand Leaf, Central - Western Bridge, Hospital Island, Addi, Dove, Wright, Iris Point"
                    }
                }
            },
            "fares": {
                "adult": 18.2,
                "child": 9.1,
                "elder": 9.1,
                "student": 9.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "仙貝廣場", "toEn": "Senpai Shopping Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "中西轉車站", "fromEn": "Central - Western Interchange",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 90,
                            "routeCode": "370AE",
                            "serviceDays": "weekday",
                            "firstTime": "07:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "07:30 - 08:30", "interval": "10" },
                                { "time": "09:00 - 10:00", "interval": "6 - 9" },
                                { "time": "10:00 - 11:00", "interval": "10" },
                                { "time": "17:00 - 17:20", "interval": "7 - 10" },
                                { "time": "17:20 - 18:20", "interval": "5 - 7" },
                                { "time": "18:20 - 19:00", "interval": "7 - 9" },
                                { "time": "19:00 - 21:30", "interval": "12" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:30",
                            "lastTime": "11:00",
                            "interval": [
                                { "time": "07:30 - 08:30", "interval": "15" },
                                { "time": "09:00 - 10:00", "interval": "20" },
                                { "time": "10:00 - 11:00", "interval": "15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 90,
                            "routeCode": "370AW",
                            "serviceDays": "weekday",
                            "firstTime": "07:00",
                            "lastTime": "19:20",
                            "interval": [
                                { "time": "07:00 - 08:00", "interval": "8 - 10" },
                                { "time": "08:00 - 08:40", "interval": "5 - 7" },
                                { "time": "08:40 - 09:00", "interval": "7 - 9" },
                                { "time": "16:30 - 17:30", "interval": "8 - 10" },
                                { "time": "17:30 - 18:50", "interval": "6 - 9" },
                                { "time": "18:50 - 19:20", "interval": "7 - 10" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:00",
                            "lastTime": "09:00",
                            "interval": [
                                { "time": "07:00 - 08:00", "interval": "7 - 10" },
                                { "time": "08:00 - 08:40", "interval": "7 - 9" },
                                { "time": "08:40 - 09:00", "interval": "7 - 10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "虹尾角街市", "nameEn": "Iris Point Market", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "時間里", "nameEn": "Timelapse Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "彩色匯", "nameEn": "Rainbow Center", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "370B",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光勞博頓快巴370B線",
            "zones": ["Zone 1", "Zone 7"],
            "operators": ["HZ", "REBC"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "虹尾角、賴得、艾迪、海苔灣、中西大橋、千葉、鎌塔、國際塔",
                        "viaEn": "Iris Point, Dove, Addi, Seaweed Bay, Central - Western Bridge, Thousand Leaf, Kamaya, International Tower"
                    },
                    "B": {
                        "viaCn": "國際塔、鎌塔、千葉、中西大橋、海苔灣、艾迪、賴得、虹尾角",
                        "viaEn": "International Tower, Kamaya, Thousand Leaf, Central - Western Bridge, Seaweed Bay, Addi, Dove, Wright, Iris Point"
                    }
                }
            },
            "fares": {
                "adult": 18.2,
                "child": 9.1,
                "elder": 9.1,
                "student": 9.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "仙貝廣場", "toEn": "Senpai Shopping Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "中西轉車站", "fromEn": "Central - Western Interchange",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 93,
                            "routeCode": "370BE",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:15",
                            "interval": [
                                { "time": "17:00 - 17:20", "interval": "20" },
                                { "time": "17:20 - 18:23", "interval": "7" },
                                { "time": "18:23 - 18:59", "interval": "9" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 93,
                            "routeCode": "370BW",
                            "serviceDays": "weekday",
                            "firstTime": "06:10",
                            "lastTime": "23:30",
                            "interval": [
                                { "time": "07:00 - 08:00", "interval": "10" },
                                { "time": "08:00 - 08:42", "interval": "7" },
                                { "time": "08:42 - 09:00", "interval": "9" },
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "虹尾角街市", "nameEn": "Iris Point Market", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "時間里", "nameEn": "Timelapse Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "艾迪路", "nameEn": "Addi Road", "nameSubCn": "北白鴿避風塘", "nameSubEn": "North Dove Island Typhoon Shelter", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "路博斯總部大樓", "nameEn": "Roblox HQ", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "伊迪城", "nameEn": "Eddie City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "白鴿消防局", "nameEn": "Dove Fire Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 16, "nameCn": "路博斯總部大樓", "nameEn": "Roblox HQ", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "長島中心", "nameEn": "Long Island Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "376S",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴勞博頓快巴376S線",
            "zones": ["Zone 1", "Zone 7"],
            "operators": ["FT", "REBC"],
            "typeTags": ["Festival", { "type": "Express", "bound": "A" }],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "四露谷、虹尾角、賴得、白鴿、艾迪、醫院島、中西大橋、葉角灣",
                        "viaEn": "Shadow Valley, Iris Point, Wright, Dove, Addi, Hospital Island, Central - Western Bridge, Leafy Bay"
                    },
                    "B": {
                        "viaCn": "葉角灣、葉欣、中西大橋、醫院島、艾迪、白鴿、賴得、虹尾角、四露谷",
                        "viaEn": "Leafy Bay, YiYan, Central - Western Bridge, Hospital Island, Addi, Dove, Wright, Iris Point, Shadow Valley"
                    }
                }
            },
            "fares": {
                "adult": 27.3,
                "child": 13.7,
                "elder": 13.7,
                "student": 13.7,
                "sectionFares": [
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "葉欣海旁道", "fromEn": "Praya YiYan Road",
                        "toCn": "長島碼頭", "toEn": "Long Island Ferry Pier",
                        "price": 18.2,
                        "childPrice": 9.1,
                        "elderPrice": 9.1,
                        "studentPrice": 9.1
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 70,
                            "routeCode": "376SE",
                            "serviceDays": "custom",
                            "customDaysCn": "春秋二祭指定服務期間",
                            "customDaysEn": "During the designated service for the Spring and Autumn Sacrifices",
                            "firstTime": "08:00",
                            "lastTime": "15:20",
                            "interval": [
                                { "time": "08:00 - 09:00", "interval": "15" },
                                { "time": "09:00 - 11:00", "interval": "13 - 15" },
                                { "time": "11:00 - 14:30", "interval": "20" },
                                { "time": "14:30 - 15:20", "interval": "25" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 70,
                            "routeCode": "376SW",
                            "serviceDays": "custom",
                            "customDaysCn": "春秋二祭指定服務期間",
                            "customDaysEn": "During the designated service for the Spring and Autumn Sacrifices",
                            "firstTime": "08:00",
                            "lastTime": "17:00",
                            "interval": [
                                { "time": "09:00 - 11:00", "interval": "20" },
                                { "time": "11:00 - 13:00", "interval": "10 - 15" },
                                { "time": "13:00 - 15:00", "interval": "15" },
                                { "time": "15:00 - 17:00", "interval": "20" },
                                { "time": "17:00 - 18:30", "interval": "25" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "陽光殯儀館", "nameEn": "Sunshine Funeral", "nameSubCn": "陽光體育館", "nameSubEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "長島東醫院", "nameEn": "East Long Island Hospital", "nameSubCn": "宜和劇場", "nameSubEn": "Jardine Theater", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "彩色匯", "nameEn": "Rainbow Center", "nameSubCn": "虹尾角站, 智家坊", "nameSubEn": "Iris Point Station, I Home", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "時間里", "nameEn": "Timelapse Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "賴得里", "nameEn": "Wright Lane", "nameSubCn": "賴得站", "nameSubEn": "Wright Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉角灣墳場", "nameEn": "Leafy Bay Cemetery", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉角灣墳場", "nameEn": "Leafy Bay Cemetery", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "中西轉車站", "nameEn": "Central - Western Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "購物廊", "nameEn": "Shopping Corridor", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "三哥大廈", "nameEn": "Third Technology Building", "nameSubCn": "炫光集", "nameSubEn": "Neon Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "艾迪路", "nameEn": "Addi Road", "nameSubCn": "北白鴿避風塘", "nameSubEn": "North Dove Island Typhoon Shelter", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "時間廊", "nameEn": "Timelapse Mall", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "虹尾角站", "nameEn": "Iris Point Station", "nameSubCn": "智家坊, 彩色匯", "nameSubEn": "I Home, Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "宜和劇場", "nameEn": "Jardine Theater", "nameSubCn": "長島東醫院", "nameSubEn": "East Long Island Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "藝術大廈", "nameEn": "Art Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "長島海濱長廊", "nameEn": "Long Island Waterfront Promenade", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "百彩新城", "nameEn": "N Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "國際碼頭", "nameEn": "Regional Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "文化廣場", "nameEn": "Culture Square", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "長島碼頭", "nameEn": "Long Island Ferry Pier", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "472",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴472線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["CityStepped"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "北環、中環、南環、千葉",
                        "viaEn": "Northern, Central, Southern, Thousand Leaf"
                    },
                    "B": {
                        "viaCn": "千葉、南環、中環、北環",
                        "viaEn": "Thousand Leaf, Southern, Central, Northern"
                    }
                }
            },
            "fares": {
                "adult": 11.4,
                "child": 5.7,
                "elder": 5.7,
                "student": 5.7,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "仙貝廣場", "toEn": "Senpai Shopping Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "南環街市", "fromEn": "Southern Market",
                        "toCn": "北頓市中心", "toEn": "Norton Town Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 38,
                            "routeCode": "472E",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "10 - 12" },
                                { "time": "08:00 - 09:00", "interval": "8 - 10" },
                                { "time": "09:00 - 11:00", "interval": "10" },
                                { "time": "11:00 - 16:40", "interval": "8 - 10" },
                                { "time": "16:40 - 21:00", "interval": "7 - 9" },
                                { "time": "21:00 - 23:00", "interval": "12" },
                                { "time": "23:00 - 23:45", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:00",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:10 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:00", "interval": "12" },
                                { "time": "08:00 - 09:00", "interval": "10 - 12" },
                                { "time": "09:00 - 11:00", "interval": "10" },
                                { "time": "11:00 - 16:40", "interval": "7 - 8" },
                                { "time": "16:40 - 21:00", "interval": "8 - 9" },
                                { "time": "21:00 - 23:00", "interval": "10 - 12" },
                                { "time": "23:00 - 23:45", "interval": "15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 38,
                            "routeCode": "472W",
                            "serviceDays": "weekday",
                            "firstTime": "06:10",
                            "lastTime": "23:40",
                            "interval": [
                                { "time": "06:10 - 07:00", "interval": "12" },
                                { "time": "07:00 - 08:30", "interval": "7 - 10" },
                                { "time": "08:30 - 11:30", "interval": "12" },
                                { "time": "11:30 - 17:25", "interval": "10" },
                                { "time": "17:25 - 19:40", "interval": "7 - 9" },
                                { "time": "19:40 - 23:00", "interval": "12" },
                                { "time": "23:00 - 23:40", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:10",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:10 - 07:00", "interval": "15" },
                                { "time": "07:00 - 08:30", "interval": "10" },
                                { "time": "08:30 - 11:30", "interval": "8 - 10" },
                                { "time": "11:30 - 17:25", "interval": "7 - 8" },
                                { "time": "17:25 - 19:40", "interval": "6 - 8" },
                                { "time": "19:40 - 23:00", "interval": "12" },
                                { "time": "23:00 - 23:45", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:10",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:10 - 07:00", "interval": "20" },
                                { "time": "07:00 - 08:30", "interval": "15" },
                                { "time": "08:30 - 11:30", "interval": "10" },
                                { "time": "11:30 - 17:25", "interval": "7 - 8" },
                                { "time": "17:25 - 19:40", "interval": "6 - 8" },
                                { "time": "19:40 - 23:00", "interval": "12" },
                                { "time": "23:00 - 23:45", "interval": "15" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "紅地磚", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "南環花園二期", "nameEn": "Southern Two", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "紅地磚", "nameEn": "Red Wall Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "473",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴縱橫通際巴473線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["SE", "CSB"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "北環、中環、千葉、葉欣",
                        "viaEn": "Northern, Central, Thousand Leaf, YiYan"
                    },
                    "B": {
                        "viaCn": "葉欣、千葉、中環、北環",
                        "viaEn": "YiYan, Thousand Leaf, Central, Northern"
                    }
                }
            },
            "fares": {
                "adult": 11.4,
                "child": 5.7,
                "elder": 5.7,
                "student": 5.7,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "葉角灣", "toEn": "Leafy Bay",
                        "price": 6.9,
                        "childPrice": 3.5,
                        "elderPrice": 3.5,
                        "studentPrice": 3.5
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "中環南總站", "fromEn": "Southern Central Bus Terminus",
                        "toCn": "明月角", "toEn": "Lunar Point",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 78,
                            "routeCode": "473E",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "15" },
                                { "time": "07:00 - 07:30", "interval": "6 - 9" },
                                { "time": "07:30 - 08:20", "interval": "5 - 8" },
                                { "time": "08:20 - 09:00", "interval": "7 - 10" },
                                { "time": "09:00 - 16:00", "interval": "15" },
                                { "time": "16:00 - 17:30", "interval": "9 - 12" },
                                { "time": "17:30 - 18:50", "interval": "6 - 8" },
                                { "time": "18:50 - 20:30", "interval": "8 - 10" },
                                { "time": "20:30 - 22:00", "interval": "12 - 15" },
                                { "time": "22:00 - 00:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "15" },
                                { "time": "07:00 - 09:00", "interval": "10" },
                                { "time": "09:00 - 11:00", "interval": "15" },
                                { "time": "11:00 - 16:00", "interval": "12" },
                                { "time": "16:00 - 17:30", "interval": "10" },
                                { "time": "17:30 - 18:50", "interval": "8 - 10" },
                                { "time": "18:50 - 22:00", "interval": "10" },
                                { "time": "22:00 - 00:30", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:30",
                            "interval": [
                                { "time": "06:00 - 11:00", "interval": "15" },
                                { "time": "11:00 - 16:00", "interval": "12" },
                                { "time": "16:00 - 17:30", "interval": "10" },
                                { "time": "17:30 - 18:50", "interval": "8 - 10" },
                                { "time": "18:50 - 22:00", "interval": "10" },
                                { "time": "22:00 - 00:30", "interval": "15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 78,
                            "routeCode": "473W",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "7 - 10" },
                                { "time": "07:00 - 09:00", "interval": "6 - 8" },
                                { "time": "09:00 - 11:00", "interval": "10 - 12" },
                                { "time": "11:00 - 12:00", "interval": "15" },
                                { "time": "12:00 - 16:30", "interval": "12 - 15" },
                                { "time": "16:30 - 17:30", "interval": "8 - 12" },
                                { "time": "17:30 - 18:30", "interval": "5 - 9" },
                                { "time": "18:30 - 19:00", "interval": "8 - 10" },
                                { "time": "19:00 - 21:00", "interval": "12 - 15" },
                                { "time": "21:00 - 22:00", "interval": "15" },
                                { "time": "22:00 - 00:00", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "06:00 - 07:00", "interval": "15" },
                                { "time": "07:00 - 09:00", "interval": "7 - 9" },
                                { "time": "09:00 - 12:00", "interval": "10" },
                                { "time": "12:00 - 16:30", "interval": "12" },
                                { "time": "16:30 - 18:30", "interval": "10" },
                                { "time": "18:30 - 19:00", "interval": "15" },
                                { "time": "19:00 - 21:00", "interval": "15 - 20" },
                                { "time": "21:00 - 00:00", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:00",
                            "lastTime": "00:00",
                            "interval": [
                                { "time": "06:00 - 09:00", "interval": "15" },
                                { "time": "09:00 - 11:00", "interval": "12" },
                                { "time": "11:00 - 12:00", "interval": "10" },
                                { "time": "12:00 - 16:30", "interval": "12" },
                                { "time": "16:30 - 18:30", "interval": "10" },
                                { "time": "18:30 - 19:00", "interval": "15" },
                                { "time": "19:00 - 21:00", "interval": "15 - 20" },
                                { "time": "21:00 - 00:00", "interval": "20" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "明月角", "nameEn": "Lunar Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "南環花園二期", "nameEn": "Southern Two", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "葉欣公園", "nameEn": "YiYan Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "葉欣邨第四座", "nameEn": "YiYan Estate Block 4", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "葉角灣", "nameEn": "Leafy Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "葉欣邨第四座", "nameEn": "YiYan Estate Block 4", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "南洋大廈", "nameEn": "Southern Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "彩虹廣場", "nameEn": "Rainbow Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東廠", "nameEn": "East Factory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "警察總部", "nameEn": "Police Headquarters", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "新紀元中心", "nameEn": "Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "薄荷大廈", "nameEn": "Mint Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "明月角", "nameEn": "Lunar Point", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "475",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴475線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Express"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "北島花園、陽光大學、東錦葵、彩虹、東門",
                        "viaEn": "North Island Estate, Sunshine University, Eastmallow, Rainbow, East Door"
                    },
                    "B": {
                        "viaCn": "東門、彩虹、東錦葵、陽光大學、北島花園",
                        "viaEn": "East Door, Rainbow, Eastmallow, Sunshine University, North Island Estate"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "仙貝廣場", "toEn": "Senpai Shopping Center",
                        "price": 8.4,
                        "childPrice": 4.2,
                        "elderPrice": 4.2,
                        "studentPrice": 4.2
                    },
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "海西迴旋處", "fromEn": "Haisey Roundabout",
                        "toCn": "仙貝廣場", "toEn": "Senpai Shopping Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "B",
                        "shift": ["normal"],
                        "fromCn": "東錦葵邨陽葵屋", "fromEn": "Sunny House Eastmallow Estate",
                        "toCn": "北頓市中心", "toEn": "Norton Town Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 15,
                            "routeCode": "475E",
                            "serviceDays": "weekday",
                            "firstTime": "06:24",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:24 - 07:00", "interval": "18" },
                                { "time": "07:00 - 09:00", "interval": "12" },
                                { "time": "09:00 - 14:00", "interval": "15" },
                                { "time": "14:00 - 17:20", "interval": "10" },
                                { "time": "17:20 - 19:00", "interval": "7 - 10" },
                                { "time": "19:00 - 19:45", "interval": "10" },
                                { "time": "19:45 - 21:30", "interval": "12" },
                                { "time": "21:30 - 23:45", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:24",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:24 - 07:00", "interval": "18" },
                                { "time": "07:00 - 09:00", "interval": "12" },
                                { "time": "09:00 - 14:00", "interval": "10" },
                                { "time": "14:00 - 17:20", "interval": "7 - 10" },
                                { "time": "17:20 - 19:00", "interval": "4 - 8" },
                                { "time": "19:00 - 19:45", "interval": "6 - 9" },
                                { "time": "19:45 - 21:30", "interval": "10 - 12" },
                                { "time": "21:30 - 23:45", "interval": "12 - 15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:24",
                            "lastTime": "23:45",
                            "interval": [
                                { "time": "06:24 - 07:00", "interval": "18" },
                                { "time": "07:00 - 09:00", "interval": "12" },
                                { "time": "09:00 - 14:00", "interval": "10" },
                                { "time": "14:00 - 19:45", "interval": "7 - 10" },
                                { "time": "19:45 - 21:30", "interval": "10 - 12" },
                                { "time": "21:30 - 23:45", "interval": "12 - 15" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 15,
                            "routeCode": "475W",
                            "serviceDays": "weekday",
                            "firstTime": "05:40",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "05:40 - 06:30", "interval": "12" },
                                { "time": "06:30 - 07:10", "interval": "7 - 10" },
                                { "time": "09:00 - 10:00", "interval": "6 - 9" },
                                { "time": "10:00 - 16:30", "interval": "10" },
                                { "time": "16:30 - 20:30", "interval": "12" },
                                { "time": "20:30 - 23:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:40",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "05:40 - 06:30", "interval": "12" },
                                { "time": "06:30 - 07:10", "interval": "10" },
                                { "time": "07:10 - 09:00", "interval": "3 - 7" },
                                { "time": "09:00 - 10:00", "interval": "5 - 8" },
                                { "time": "10:00 - 16:30", "interval": "7 - 8" },
                                { "time": "16:30 - 18:30", "interval": "10" },
                                { "time": "18:30 - 20:30", "interval": "15" },
                                { "time": "20:30 - 23:00", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:40",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "05:40 - 06:30", "interval": "15" },
                                { "time": "06:30 - 07:10", "interval": "10" },
                                { "time": "07:10 - 09:00", "interval": "6 - 9" },
                                { "time": "09:00 - 10:00", "interval": "5 - 8" },
                                { "time": "10:00 - 16:30", "interval": "7 - 8" },
                                { "time": "16:30 - 18:30", "interval": "10" },
                                { "time": "18:30 - 20:30", "interval": "15" },
                                { "time": "20:30 - 23:00", "interval": "20" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "綠寶石中心", "nameEn": "Emerald Plaza", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "東門路", "nameEn": "East Door Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東門路", "nameEn": "East Door Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 24, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "475A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴475A線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Express", "Special Departure"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "彩虹、千葉、東錦葵、陽光大學、北島花園",
                        "viaEn": "Rainbow, Thousand Leaf, Eastmallow, Sunshine University, North Island Estate"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "東錦葵邨陽葵屋", "fromEn": "Sunny House Eastmallow Estate",
                        "toCn": "北頓市中心", "toEn": "Norton Town Center",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 18,
                            "routeCode": "475AW",
                            "serviceDays": "weekday",
                            "firstTime": "07:10",
                            "lastTime": "09:00",
                            "interval": [
                                { "time": "07:10 - 09:00", "interval": "3 - 7" },
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "North Island School Village", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "nameSubCn": "北頓市中心", "nameSubEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "475P",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴475P線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Express", "Special Departure"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "海西、東門、千葉、南環、中環",
                        "viaEn": "Haisey, East Door, Thousand Leaf, Southern, Central"
                    }
                }
            },
            "fares": {
                "adult": 14.8,
                "child": 7.4,
                "elder": 7.4,
                "student": 7.4,
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "東門路", "fromEn": "East Door Road",
                        "toCn": "中環（中日街）", "toEn": "Central (Sun Central Street)",
                        "price": 12.1,
                        "childPrice": 6.1,
                        "elderPrice": 6.1,
                        "studentPrice": 6.1
                    },
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "南環街市", "fromEn": "Southern Market",
                        "toCn": "中環（中日街）", "toEn": "Central (Sun Central Street)",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockRoutes": ["475", "475A"],
                            "routeCode": "475PW",
                            "serviceDays": "weekday",
                            "firstTime": "07:10",
                            "lastTime": "09:00",
                            "interval": [
                                { "time": "07:10 - 09:00", "interval": "5 - 8" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東門路", "nameEn": "East Door Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "中環（中日街）", "nameEn": "Central (Sun Central Street)", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "476",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴476線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": [
                { "type": "Special Departure", "bound": "A", "shift": "special1" },
                { "type": "Special Departure", "bound": "B", "shift": "special2" },
                { "type": "Special Departure", "bound": "B", "shift": "special3" },
                { "type": "Special Departure", "bound": "B", "shift": "special4" }
            ],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "中環、南環、陽光站、千葉、葉角大學裏、葉角灣邨、樂莫坳、東門",
                        "viaEn": "Central, Southern, Sunshine Station, Thousand Leaf, Leafy University In, Leafy Bay Estate, Normal Gap, East Door"
                    },
                    "B": {
                        "viaCn": "東門、樂莫坳、葉角灣邨、葉角大學、千葉、陽光站、南環、中環",
                        "viaEn": "East Door, Normal Gap, Leafy Bay Estate, Leafy University, Thousand Leaf, Sunshine Station, Southern, Central"
                    }
                },
                "special1": {
                    "bound": "A",
                    "A": {
                        "viaCn": "中環、南環、陽光站、千葉、葉角灣邨、樂莫坳、東門",
                        "viaEn": "Central, Southern, Sunshine Station, Thousand Leaf, Leafy Bay Estate, Normal Gap, East Door"
                    }
                },
                "special2": {
                    "bound": "B",
                    "B": {
                        "viaCn": "東門、樂莫坳、葉角灣邨、葉角大學裏、千葉、陽光站、南環、中環",
                        "viaEn": "East Door, Normal Gap, Leafy Bay Estate, Leafy University In, Thousand Leaf, Sunshine Station, Southern, Central"
                    }
                },
                "special3": {
                    "bound": "B",
                    "B": {
                        "viaCn": "東門、樂莫坳、安靈台、葉角灣邨、葉角大學、千葉、陽光站、南環、中環",
                        "viaEn": "East Door, Normal Gap, Ambling Peak, Leafy Bay Estate, Leafy University, Thousand Leaf, Sunshine Station, Southern, Central"
                    }
                },
                "special4": {
                    "bound": "B",
                    "B": {
                        "viaCn": "東門、樂莫坳、安靈台、葉角灣邨、葉角大學裏、千葉、陽光站、南環、中環",
                        "viaEn": "East Door, Normal Gap, Ambling Peak, Leafy Bay Estate, Leafy University In, Thousand Leaf, Sunshine Station, Southern, Central"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "fromCn": "第七區轉車站", "fromEn": "Zone 7 Interchange",
                        "toCn": "彩虹中心", "toEn": "Rainbow Estate Complex",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    },
                    {
                        "direction": "A",
                        "shift": ["normal"],
                        "fromCn": "葉角大學裏", "fromEn": "Leafy University In",
                        "toCn": "彩虹中心", "toEn": "Rainbow Estate Complex",
                        "price": 6.3,
                        "childPrice": 3.2,
                        "elderPrice": 3.2,
                        "studentPrice": 3.2
                    },
                    {
                        "direction": "A",
                        "shift": ["special1"],
                        "fromCn": "葉角花園", "fromEn": "Leafy Bay Garden",
                        "toCn": "彩虹中心", "toEn": "Rainbow Estate Complex",
                        "price": 6.3,
                        "childPrice": 3.2,
                        "elderPrice": 3.2,
                        "studentPrice": 3.2
                    },
                    {
                        "direction": "B",
                        "fromCn": "中間花園", "fromEn": "Middle Garden",
                        "toCn": "東錦葵海傍路", "toEn": "Eastmallow Praya Road",
                        "price": 12.1,
                        "childPrice": 6.1,
                        "elderPrice": 6.1,
                        "studentPrice": 6.1
                    },
                    {
                        "direction": "B",
                        "fromCn": "陽光站", "fromEn": "Sunshine Station",
                        "toCn": "東錦葵海傍路", "toEn": "Eastmallow Praya Road",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ],
                "shortDistanceRebates": [
                    {
                        "direction": "B",
                        "startStopCn": "彩虹中心", "startStopEn": "Rainbow Estate Complex",
                        "alightStopCn": "勿莫街市", "alightStopEn": "Mo Market",
                        "actualFare": 6.3,
                        "childFare": 3.2,
                        "elderFare": 3.2,
                        "studentFare": 3.2,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["normal", "special3"],
                        "startStopCn": "彩虹中心", "startStopEn": "Rainbow Estate Complex",
                        "alightStopCn": "葉角大學", "alightStopEn": "Leafy University",
                        "actualFare": 6.3,
                        "childFare": 3.2,
                        "elderFare": 3.2,
                        "studentFare": 3.2,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["special2", "special4"],
                        "startStopCn": "彩虹中心", "startStopEn": "Rainbow Estate Complex",
                        "alightStopCn": "葉角大學裏", "alightStopEn": "Leafy University In",
                        "actualFare": 6.3,
                        "childFare": 3.2,
                        "elderFare": 3.2,
                        "studentFare": 3.2,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["normal", "special3"],
                        "startStopCn": "中間花園", "startStopEn": "Middle Garden",
                        "alightStopCn": "葉角大學", "alightStopEn": "Leafy University",
                        "actualFare": 6.3,
                        "childFare": 3.2,
                        "elderFare": 3.2,
                        "studentFare": 3.2,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["special2", "special4"],
                        "startStopCn": "中間花園", "startStopEn": "Middle Garden",
                        "alightStopCn": "葉角大學裏", "alightStopEn": "Leafy University In",
                        "actualFare": 6.3,
                        "childFare": 3.2,
                        "elderFare": 3.2,
                        "studentFare": 3.2,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "startStopCn": "中間花園", "startStopEn": "Middle Garden",
                        "alightStopCn": "第七區轉車站", "alightStopEn": "Zone 7 Interchange",
                        "actualFare": 7.2,
                        "childFare": 3.6,
                        "elderFare": 3.6,
                        "studentFare": 3.6,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["special3", "special4"],
                        "startStopCn": "彩虹中心", "startStopEn": "Rainbow Estate Complex",
                        "alightStopCn": "安靈台靈灰安置所", "alightStopEn": "Ambling Peak Columbarium",
                        "actualFare": 7.2,
                        "childFare": 3.6,
                        "elderFare": 3.6,
                        "studentFare": 3.6,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["special3"],
                        "startStopCn": "安靈台靈灰安置所", "startStopEn": "Ambling Peak Columbarium",
                        "alightStopCn": "葉角大學", "alightStopEn": "Leafy University",
                        "actualFare": 7.2,
                        "childFare": 3.6,
                        "elderFare": 3.6,
                        "studentFare": 3.6,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["special4"],
                        "startStopCn": "安靈台靈灰安置所", "startStopEn": "Ambling Peak Columbarium",
                        "alightStopCn": "葉角大學裏", "alightStopEn": "Leafy University In",
                        "actualFare": 7.2,
                        "childFare": 3.6,
                        "elderFare": 3.6,
                        "studentFare": 3.6,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    },
                    {
                        "direction": "B",
                        "shift": ["special3", "special4"],
                        "startStopCn": "安靈台靈灰安置所", "startStopEn": "Ambling Peak Columbarium",
                        "alightStopCn": "第七區轉車站", "alightStopEn": "Zone 7 Interchange",
                        "actualFare": 8.4,
                        "childFare": 4.2,
                        "elderFare": 4.2,
                        "studentFare": 4.2,
                        "fullFare": 12.1,
                        "childFullFare": 6.1,
                        "elderFullFare": 6.1,
                        "studentFullFare": 6.1
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true,
                    "special1": true,
                    "special2": false,
                    "special3": false,
                    "special4": false
                },
                "B": {
                    "normal": true,
                    "special1": false,
                    "special2": true,
                    "special3": true,
                    "special4": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                },
                "special1": {
                    "label": "476% (特別班次 1)",
                    "labelEn": "476% (Special 1)",
                    "color": "#f59e0b"
                },
                "special2": {
                    "label": "476* (特別班次 1)",
                    "labelEn": "476* (Special 2)",
                    "color": "#f59e0b"
                },
                "special3": {
                    "label": "476# (特別班次 2)",
                    "labelEn": "476# (Special 2)",
                    "color": "#10b981"
                },
                "special4": {
                    "label": "476#* (特別班次 3)",
                    "labelEn": "476#* (Special 3)",
                    "color": "#FFCF43"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 56,
                            "routeCode": "476E",
                            "serviceDays": "weekday",
                            "firstTime": "05:55",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "05:55 - 06:40", "interval": "12" },
                                { "time": "06:40 - 07:10", "interval": "10 - 12" },
                                { "time": "07:10 - 07:35", "interval": "9 - 10" },
                                { "time": "07:35 - 08:05", "interval": "10" },
                                { "time": "08:05 - 09:05", "interval": "6 - 7" },
                                { "time": "09:05 - 15:20", "interval": "7 - 9" },
                                { "time": "15:20 - 16:20", "interval": "6 - 7" },
                                { "time": "16:20 - 18:30", "interval": "8 - 9" },
                                { "time": "18:30 - 19:00", "interval": "9 - 10" },
                                { "time": "19:00 - 20:00", "interval": "10" },
                                { "time": "20:00 - 22:55", "interval": "15" },
                                { "time": "23:00", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:55",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "05:55 - 06:40", "interval": "12" },
                                { "time": "06:40 - 07:10", "interval": "10" },
                                { "time": "07:10 - 07:35", "interval": "7 - 9" },
                                { "time": "07:35 - 08:05", "interval": "10" },
                                { "time": "08:05 - 11:00", "interval": "8 - 9" },
                                { "time": "11:00 - 16:20", "interval": "7 - 9" },
                                { "time": "16:20 - 17:30", "interval": "6 - 8" },
                                { "time": "17:30 - 18:30", "interval": "10" },
                                { "time": "18:30 - 19:00", "interval": "10" },
                                { "time": "19:00 - 20:00", "interval": "7 - 8" },
                                { "time": "20:00 - 22:55", "interval": "10 - 14" },
                                { "time": "23:00", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:55",
                            "lastTime": "23:00",
                            "interval": [
                                { "time": "05:55 - 06:40", "interval": "12" },
                                { "time": "06:40 - 11:00", "interval": "10" },
                                { "time": "11:00 - 16:20", "interval": "7 - 9" },
                                { "time": "16:20 - 17:30", "interval": "6 - 8" },
                                { "time": "17:30 - 18:30", "interval": "10" },
                                { "time": "18:30 - 19:00", "interval": "10" },
                                { "time": "19:00 - 20:00", "interval": "7 - 8" },
                                { "time": "20:00 - 22:55", "interval": "10 - 14" },
                                { "time": "23:00", "interval": "0" }
                            ]
                        }
                    ],
                    "special1": [
                        {
                            "unlockRoutes": ["476", "476P", "N476"],
                            "routeCode": "476E2",
                            "serviceDays": "weekday",
                            "firstTime": "06:40",
                            "lastTime": "23:55",
                            "interval": [
                                { "time": "06:40 - 07:10", "interval": "10 - 12" },
                                { "time": "07:10 - 07:35", "interval": "9 - 10" },
                                { "time": "19:00 - 20:00", "interval": "10" },
                                { "time": "20:00 - 22:55", "interval": "15" },
                                { "time": "23:00 - 23:55", "interval": "10" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "17:30",
                            "lastTime": "23:55",
                            "interval": [
                                { "time": "17:30 - 19:00", "interval": "10" },
                                { "time": "20:00 - 22:55", "interval": "10 - 14" },
                                { "time": "23:00 - 23:55", "interval": "6 - 7" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "unlockLevel": 56,
                            "routeCode": "476W",
                            "serviceDays": "weekday",
                            "firstTime": "05:30",
                            "lastTime": "00:10",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "10" },
                                { "time": "06:30 - 07:00", "interval": "7 - 9" },
                                { "time": "07:00 - 07:50", "interval": "5 - 6" },
                                { "time": "07:50 - 08:40", "interval": "4 - 5" },
                                { "time": "08:40 - 09:20", "interval": "6 - 7" },
                                { "time": "09:20 - 15:37", "interval": "7 - 9" },
                                { "time": "15:37 - 16:30", "interval": "5 - 6" },
                                { "time": "16:30 - 17:05", "interval": "6 - 7" },
                                { "time": "18:30 - 19:20", "interval": "6 - 7" },
                                { "time": "19:20 - 20:20", "interval": "10" },
                                { "time": "20:20 - 22:30", "interval": "10 - 12" },
                                { "time": "22:30 - 00:10", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "05:30",
                            "lastTime": "00:10",
                            "interval": [
                                { "time": "05:30 - 06:30", "interval": "10" },
                                { "time": "06:30 - 07:00", "interval": "8 - 9" },
                                { "time": "07:00 - 07:50", "interval": "7" },
                                { "time": "07:50 - 08:40", "interval": "6" },
                                { "time": "08:40 - 09:20", "interval": "6 - 7" },
                                { "time": "09:20 - 11:30", "interval": "8 - 9" },
                                { "time": "11:30 - 15:37", "interval": "6 - 7" },
                                { "time": "15:37 - 18:30", "interval": "8 - 9" },
                                { "time": "18:30 - 19:20", "interval": "10" },
                                { "time": "19:20 - 20:20", "interval": "12" },
                                { "time": "20:20 - 22:30", "interval": "10 - 12" },
                                { "time": "22:30 - 00:10", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "05:30",
                            "lastTime": "00:10",
                            "interval": [
                                { "time": "05:30 - 07:00", "interval": "10" },
                                { "time": "07:00 - 07:50", "interval": "9" },
                                { "time": "07:50 - 08:40", "interval": "7" },
                                { "time": "08:40 - 09:20", "interval": "6 - 7" },
                                { "time": "09:20 - 11:30", "interval": "8 - 9" },
                                { "time": "11:30 - 15:37", "interval": "6 - 7" },
                                { "time": "15:37 - 16:30", "interval": "7 - 8" },
                                { "time": "16:30 - 18:00", "interval": "6 - 7" },
                                { "time": "18:00 - 18:30", "interval": "8 - 9" },
                                { "time": "18:30 - 19:20", "interval": "10" },
                                { "time": "19:20 - 20:20", "interval": "12" },
                                { "time": "20:20 - 22:30", "interval": "10 - 12" },
                                { "time": "22:30 - 00:10", "interval": "15" }
                            ]
                        }
                    ],
                    "special2": [
                        {
                            "unlockLevel": 56,
                            "routeCode": "476W2",
                            "serviceDays": "weekday",
                            "firstTime": "17:05",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "17:05 - 18:30", "interval": "10" }
                            ]
                        }
                    ],
                    "special3": [
                        {
                            "unlockRoutes": ["476", "476P", "N476"],
                            "routeCode": "476W3",
                            "serviceDays": "weekday",
                            "firstTime": "07:30",
                            "lastTime": "19:30",
                            "interval": [
                                { "time": "07:30 - 16:30", "interval": "60" },
                                { "time": "19:30", "interval": "0" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "07:30",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "07:30 - 09:30", "interval": "60" },
                                { "time": "10:00 - 18:30", "interval": "30" }
                            ]
                        }
                    ],
                    "special4": [
                        {
                            "unlockRoutes": ["476", "476P", "N476"],
                            "routeCode": "476W4",
                            "serviceDays": "weekday",
                            "firstTime": "17:30",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "17:30, 18:30", "interval": "0" }
                            ]
                        }
                    ],
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 2, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 3, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 4, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 5, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 6, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 7, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 8, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 9, "nameCn": "南環中心", "nameEn": "The Southern", "nameSubCn": "南環坊", "nameSubEn": "Langford Place", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 10, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 11, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 12, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 13, "nameCn": "葉角大學裏", "nameEn": "Leafy University In", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 15, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 16, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 17, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 18, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 19, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 20, "nameCn": "勿莫街市", "nameEn": "Mo Market", "visible": true, "stopFor": ["normal", "special1", "special1"] },
                    { "seq": 21, "nameCn": "東門公園", "nameEn": "East Door Park", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 22, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 23, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 24, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 25, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal", "special1"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 2, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 3, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 4, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 5, "nameCn": "東門公園", "nameEn": "East Door Park", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 6, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 7, "nameCn": "勿莫街市", "nameEn": "Mo Market", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 8, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["special3", "special4"] },
                    { "seq": 9, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 10, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 11, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 12, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 13, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 14, "nameCn": "葉角大學", "nameEn": "Leafy University", "visible": true, "stopFor": ["normal", "special3"] },
                    { "seq": 15, "nameCn": "葉角大學裏", "nameEn": "Leafy University In", "visible": true, "stopFor": ["special2", "special4"] },
                    { "seq": 16, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 17, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 18, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 19, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 20, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 21, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 22, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 23, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 24, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 25, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] },
                    { "seq": 26, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal", "special2", "special3", "special4"] }
                ]
            }
        },
        {
            "route": "476P",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴476P線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Special Departure"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "葉角花園、葉角大學、千葉、陽光站、南環、中環",
                        "viaEn": "Leafy Bay Garden, Leafy University, Thousand Leaf, Sunshine Station, Southern, Central"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "fromCn": "陽光站", "fromEn": "Sunshine Station",
                        "toCn": "東錦葵海傍路", "toEn": "Eastmallow Praya Road",
                        "price": 7.2,
                        "childPrice": 3.6,
                        "elderPrice": 3.6,
                        "studentPrice": 3.6
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 900,
                            "routeCode": "476PW",
                            "serviceDays": "weekday",
                            "firstTime": "17:00",
                            "lastTime": "18:30",
                            "interval": [
                                { "time": "17:00 - 18:30", "interval": "10" },
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "葉角大學裏", "nameEn": "Leafy University In", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "中環醫院", "nameEn": "Central Hopsital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "476S",
            "textColor": "#fff",
            "enabled": true,
            "circular": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴476S線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Festival", "Circular", "Express"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "千葉、^^中環、千葉",
                        "viaEn": "Thousand Leaf, ^^Central, Thousand Leaf"
                    }
                }
            },
            "fares": {
                "adult": 16.1,
                "child": 8.1,
                "elder": 8.1,
                "student": 8.1
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "normal": true
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 55,
                            "routeCode": "476SA",
                            "serviceDays": "custom",
                            "customDaysCn": "清明節及重陽節期間",
                            "customDaysEn": "During the Qingming Festival and Double Ninth Festival",
                            "firstTime": "08:30",
                            "lastTime": "19:30",
                            "interval": [
                                { "time": "08:30 - 18:30", "interval": "6 - 10" },
                                { "time": "18:30 - 19:30", "interval": "10 - 12" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "南環街市", "nameEn": "Southern Market", "nameSubCn": "南環花園, 南環坊", "nameSubEn": "Southern Garden, Langford Place", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "^^新紀元中心", "nameEn": "^^Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak Columbarium", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "476X",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/天際陽光際巴476X線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Special Departure"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "中環、葉角灣邨、樂莫坳、東門",
                        "viaEn": "Central, Leafy Bay Estate, Normal Gap, East Door"
                    }
                }
            },
            "fares": {
                "adult": 12.1,
                "child": 6.1,
                "elder": 6.1,
                "student": 6.1,
                "sectionFares": [
                    {
                        "direction": "A",
                        "fromCn": "中間花園", "fromEn": "Middle Garden",
                        "toCn": "東錦葵海傍路", "toEn": "Eastmallow Praya Road",
                        "price": 6.3,
                        "childPrice": 3.2,
                        "elderPrice": 3.2,
                        "studentPrice": 3.2
                    }
                ]
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true,
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockRoutes": ["476", "476P", "476S", "N476"],
                            "routeCode": "476XE",
                            "serviceDays": "weekday",
                            "firstTime": "17:30",
                            "lastTime": "19:00",
                            "interval": [
                                { "time": "17:30 - 18:30", "interval": "5 - 6" },
                                { "time": "18:30 - 19:00", "interval": "6 - 7" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "中環橋", "nameEn": "Central Bridge", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "勿莫街市", "nameEn": "Mo Market", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "東門公園", "nameEn": "East Door Park", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "C01",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴C01線",
            "zones": ["Zone 7"],
            "operators": ["CSB"],
            "typeTags": ["Overnight", "Crew Shuttle"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉角灣、彩虹、東門、海西",
                        "viaEn": "Leafy Bay, Rainbow, East Door, Haisey"
                    },
                    "B": {
                        "viaCn": "海西、東門、彩虹、葉角灣",
                        "viaEn": "Haisey, East Door, Rainbow, Leafy Bay"
                    }
                }
            },
            "fares": {
                "adult": 0.0
            },
            "routeType": "只限際巴員工",
            "routeTypeEn": "CSB Staff Only",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 1800,
                            "routeCode": "C01N",
                            "serviceDays": "daily",
                            "firstTime": "00:30",
                            "lastTime": "06:00",
                            "interval": [
                                { "time": "00:30, 01:00, 02:00, 04:00, 05:00, 06:00", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "sunshards": 1800,
                            "routeCode": "C01S",
                            "serviceDays": "daily",
                            "firstTime": "00:30",
                            "lastTime": "06:00",
                            "interval": [
                                { "time": "00:30, 01:00, 02:00, 04:00, 05:00, 06:00", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "海西迴旋處", "nameEn": "Haisey Roundabout", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "海西角", "nameEn": "Haisey Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "C401",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴C401線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["CSB"],
            "typeTags": ["Overnight", "Crew Shuttle", "Limited-stop"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "北島花園、陽光大學、東錦葵、南環",
                        "viaEn": "North Island Estate, Sunshine University, Eastmallow, Southern"
                    },
                    "B": {
                        "viaCn": "南環、東錦葵、陽光大學、北島花園",
                        "viaEn": "Southern, Eastmallow, Sunshine University, North Island Estate"
                    }
                }
            },
            "fares": {
                "adult": 0.0
            },
            "routeType": "只限際巴員工",
            "routeTypeEn": "CSB Staff Only",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 3500,
                            "routeCode": "C401E",
                            "serviceDays": "daily",
                            "firstTime": "03:45",
                            "lastTime": "04:15",
                            "interval": [
                                { "time": "03:45, 04:15", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "sunshards": 3500,
                            "routeCode": "C401W",
                            "serviceDays": "daily",
                            "firstTime": "01:45",
                            "lastTime": "02:30",
                            "interval": [
                                { "time": "01:45, 02:30", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "C401A",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/際巴C401A線",
            "zones": ["Zone 4", "Zone 7"],
            "operators": ["CSB"],
            "typeTags": ["Overnight", "Crew Shuttle", "Limited-stop"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "明月角、中環、南環、仙貝",
                        "viaEn": "Lunar Point, Central, Southern, Senpai"
                    },
                    "B": {
                        "viaCn": "仙貝、南環、中環、明月角",
                        "viaEn": "Senpai, Southern, Central, Lunar Point"
                    }
                }
            },
            "fares": {
                "adult": 0.0
            },
            "routeType": "只限際巴員工",
            "routeTypeEn": "CSB Staff Only",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 3500,
                            "routeCode": "C401AE",
                            "serviceDays": "daily",
                            "firstTime": "04:10",
                            "lastTime": "04:50",
                            "interval": [
                                { "time": "04:10, 04:50", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "sunshards": 3500,
                            "routeCode": "C401AW",
                            "serviceDays": "daily",
                            "firstTime": "01:00",
                            "lastTime": "05:00",
                            "interval": [
                                { "time": "01:00, 05:00", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "明月角", "nameEn": "Lunar Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "鑽石交易塔", "nameEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "南環花園二期", "nameEn": "Southern Two", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "陽光碼頭", "nameEn": "Sunshine Pier", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "陽光站", "nameEn": "Sunshine Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "強生街市", "nameEn": "Johnson Market", "nameSubCn": "A05, 陽光大學南環校園", "nameSubEn": "A05, Sunshine University Southern Campus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "The ONE", "nameEn": "The One", "nameSubCn": "警察總部, 新紀元中心", "nameSubEn": "Police Headquarters, Ping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "玻璃樓", "nameEn": "Glass Office", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "楓樹里", "nameEn": "Maple Lane", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北環轉車站", "nameEn": "Northern Interchange", "nameSubCn": "北環站, 天際塔", "nameSubEn": "Northern Station, Skyreach Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "明月角", "nameEn": "Lunar Point", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "北頓花園", "nameEn": "Norton Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北頓邨", "nameEn": "Norton Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北頓市中心", "nameEn": "Norton Town Center", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "F469",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "circular": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴F469線",
            "zones": ["Zone 1"],
            "operators": ["SE", "FT"],
            "typeTags": ["Sightseeing", "Festival", "Circular"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "^^四露谷車廠天台",
                        "viaEn": "^^Shallow Valley Depot Rooftop"
                    }
                }
            },
            "fares": {
                "adult": 0.0,
                "child": 0.0,
                "elder": 0.0,
                "student": 0.0,
            },
            "routeType": "",
            "routeTypeEn": "",
            "shifts": {
                "A": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 30,
                            "routeCode": "F469A",
                            "serviceDays": "custom",
                            "customDaysCn": "永巴四露谷車廠開放日和週年期間",
                            "customDaysEn": "During the Forever Transit's Shallow Valley Depot and anniversary",
                            "firstTime": "10:00",
                            "lastTime": "16:00",
                            "interval": [
                                { "time": "10:00 - 16:00", "interval": "10" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "四露谷車廠天台", "nameEn": "Shallow Valley Depot Rooftop", "nameSubCn": "清客", "nameSubEn": "Clear the bus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "^^四露谷車廠天台", "nameEn": "^^Shallow Valley Depot Rooftop", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "陽光體育館", "nameEn": "Sunshine Stadium", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "F701",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴F701線",
            "zones": ["Zone 1", "Zone 4", "Zone 7"],
            "operators": ["SE", "FT"],
            "typeTags": ["Overnight", "Crew Shuttle", "Limited-stop"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "白鴿、東錦葵、亞歷山、樂莫坳、葉角灣邨",
                        "viaEn": "Dove, Eastmallow, Alexander, Normal Gap, Leafy Bay Estate"
                    },
                    "B": {
                        "viaCn": "葉角灣邨、樂莫坳、亞歷山、東錦葵、白鴿",
                        "viaEn": "Leafy Bay Estate, Normal Gap, Alexander, Eastmallow, Dove"
                    }
                }
            },
            "fares": {
                "adult": 0.0
            },
            "routeType": "只限永巴員工",
            "routeTypeEn": "FT Staff Only",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 1800,
                            "routeCode": "F701E",
                            "serviceDays": "daily",
                            "firstTime": "01:00",
                            "lastTime": "05:00",
                            "interval": [
                                { "time": "01:00, 01:45, 02:30, 04:30, 05:00", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "sunshards": 1800,
                            "routeCode": "F701W",
                            "serviceDays": "daily",
                            "firstTime": "04:00",
                            "lastTime": "05:30",
                            "interval": [
                                { "time": "04:00, 04:45, 05:30", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "四露谷車廠", "nameEn": "Shallow Valley Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "伊迪城", "nameEn": "Eddie City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東錦葵海傍路", "nameEn": "Eastmallow Praya Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "葉欣海旁道", "nameEn": "Praya YiYan Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "葉欣邨第一座", "nameEn": "YiYan Estate Block 1", "nameSubCn": "葉欣邨第二座", "nameSubEn": "YiYan Estate Block 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "勿莫商場", "nameEn": "Mo Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "羅力素花園二期", "nameEn": "Laws Garden 2", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "亞歷山教堂", "nameEn": "Alexander Church", "nameSubCn": "葉角大學北門", "nameSubEn": "Leafy University North Entrance", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "亞歷山花園", "nameEn": "Alexander Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "東錦葵邨陽葵屋", "nameEn": "Sunny House Eastmallow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "伊迪城", "nameEn": "Eddie City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "白鴿山", "nameEn": "Dove Hill", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "nameSubCn": "巴士車廠", "nameSubEn": "Bus Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "四露谷車廠", "nameEn": "Shallow Valley Depot", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "F702",
            "textColor": "#fff",
            "enabled": true,
            "random": true,
            "bansearch": true,
            "wikiLink": "https://roblox.fandom.com/zh/wiki/永巴F702線",
            "zones": ["Zone 1", "Zone 4", "Zone 7"],
            "operators": ["SE", "FT"],
            "typeTags": ["Overnight", "Crew Shuttle", "Limited-stop"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "中環、千葉、仙貝、東門、彩虹",
                        "viaEn": "Central, Thousand Leaf, Senpai, East Door, Rainbow"
                    },
                    "B": {
                        "viaCn": "彩虹、東門、仙貝、千葉、中環",
                        "viaEn": "Rainbow, East Door, Senpai, Thousand Leaf, Central"
                    }
                }
            },
            "fares": {
                "adult": 0.0
            },
            "routeType": "只限永巴員工",
            "routeTypeEn": "FT Staff Only",
            "shifts": {
                "A": {
                    "normal": true
                },
                "B": {
                    "normal": true
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "sunshards": 1800,
                            "routeCode": "F702E",
                            "serviceDays": "daily",
                            "firstTime": "01:00",
                            "lastTime": "05:00",
                            "interval": [
                                { "time": "01:00, 01:45, 02:30, 04:30, 05:00", "interval": "0" }
                            ]
                        }
                    ]
                },
                "B": {
                    "normal": [
                        {
                            "sunshards": 1800,
                            "routeCode": "F702W",
                            "serviceDays": "daily",
                            "firstTime": "04:00",
                            "lastTime": "05:30",
                            "interval": [
                                { "time": "04:00, 04:45, 05:30", "interval": "0" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "四露谷車廠", "nameEn": "Shallow Valley Depot", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "中環南總站", "nameEn": "Southern Central Bus Terminus", "nameSubCn": "南環花園一期", "nameSubEn": "Southern One", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "仙貝紀念碑花園", "nameEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "紅石樓", "nameEn": "Redstone House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "海西邨", "nameEn": "Haisey Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "彩虹中心", "nameEn": "Rainbow Estate Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "彩虹邨", "nameEn": "Rainbow Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "紅豆商場", "nameEn": "Redbean Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 5, "nameCn": "東門邨", "nameEn": "East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "東門下邨", "nameEn": "Lower East Door Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "東門花園", "nameEn": "East Door Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "東門總站", "nameEn": "East Door Bus Terminus", "nameSubCn": "東門中心", "nameSubEn": "East Door Complex", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "仙貝廣場", "nameEn": "Senpai Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "仙貝圖書館", "nameEn": "Senpai Library", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "仙貝酒店", "nameEn": "Senpai Hotel", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "黑白中心", "nameEn": "Grayscale Centre", "nameSubCn": "仙貝紀念碑花園", "nameSubEn": "The Stone of Memory", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "國際塔", "nameEn": "International Tower", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "鎌塔運動場", "nameEn": "Kamaya Sports Field", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "鎌塔花園", "nameEn": "Kamaya Garden", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "第七區轉車站", "nameEn": "Zone 7 Interchange", "nameSubCn": "千葉站", "nameSubEn": "Thousand Leaf Station", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "中環南路", "nameEn": "Southern Central Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "雀鳥橋", "nameEn": "Bird Bridge", "nameSubCn": "冰淇路", "nameSubEn": "Pinky Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "四露谷車廠", "nameEn": "Shallow Valley Depot", "visible": true, "stopFor": ["normal"] }
                ]
            }
        }
    ]
};
