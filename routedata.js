var routeData = {
    "data": [
        {
            "route": "21",
            "textColor": "#fff",
            "enabled": true,
            "zones": ["Zone 1"],
            "operators": ["REBC"],
            "typeTags": ["Circular"],
            "bound": "C",
            "viaDirections": {
                "normal": {
                    "bound": "C",
                    "C": {
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
                "C": {
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
                "C": [
                    { "seq": 1, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 20, "nameCn": "白鴿邨", "nameEn": "Dove Estate", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "25",
            "textColor": "#fff",
            "enabled": true,
            "zones": ["Zone 1"],
            "operators": ["FT"],
            "typeTags": ["CentralAxis"],
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "虹尾角、賴得、艾迪、醫院島",
                        "viaEn": "Southern, Central, Northern Interchange, Norton"
                    },
                    "B": {
                        "viaCn": "醫院島、艾迪、賴得、虹尾角",
                        "viaEn": "Norton, Northern Interchange, Central, Southern"
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
                    { "seq": 5, "nameCn": "彩色匯", "nameEn": "Rainbow Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 6, "nameCn": "賴得商場", "nameEn": "Wright Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 7, "nameCn": "白鴿公園", "nameEn": "Dove Park", "nameSubCn": "三哥大廈", "nameSubEn": "Third Technology Building", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "艾迪城", "nameEn": "Addi City", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "西區醫院", "nameEn": "Western Hospital", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "三塔", "nameEn": "Triple Tower", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "貨櫃碼頭員工宿舍", "nameEn": "Containers Island Employee House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "海苔灣", "nameEn": "Seaweed Bay", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "貨櫃碼頭", "nameEn": "Containers Terminal", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island B/T", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "貨櫃島巴士總站", "nameEn": "Containers Island B/T", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 11, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 22, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 14, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 9, "nameCn": "東錦葵邨 - 陽葵屋", "nameEn": "Eastmallow Estate - Sunny House", "visible": true, "stopFor": ["normal"] },
                    { "seq": 10, "nameCn": "東錦葵大街", "nameEn": "Eastmallow Main Street", "visible": true, "stopFor": ["normal"] },
                    { "seq": 11, "nameCn": "陽光大學", "nameEn": "Sunshine University", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "望環台", "nameEn": "Panorama Heights", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "北島花園商場", "nameEn": "NIE Shopping Center", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "北島花園", "nameEn": "North Island Estate", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "北頓路", "nameEn": "Norton Road", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "北頓碼頭", "nameEn": "Norton Ferry Pier", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 13, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 6, "nameCn": "巨石路", "nameEn": "Rocky Road", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": true, "stopFor": ["normal"] },
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
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["HZ", "CSB"],
            "typeTags": ["Circular"],
            "bound": "C",
            "viaDirections": {
                "normal": {
                    "bound": "C",
                    "C": {
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
                "C": {
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
                "C": [
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
            "route": "74A",
            "textColor": "#fff",
            "enabled": true,
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["CSB"],
            "typeTags": ["CentralAxis"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉欣、千葉、仙貝、東門、海西",
                        "viaEn": "Yiyan, Thousand Leaf, Senpai, East Door, Haisey"
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
                        "viaEn": "East Door, Rainbow, Yiyan Estate"
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
                    { "seq": 1, "nameCn": "葉欣海旁道", "nameEn": "YiYan Praya Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 21, "nameCn": "葉欣海旁道", "nameEn": "YiYan Praya Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] }
                ]
            }
        },
        {
            "route": "75P",
            "textColor": "#fff",
            "enabled": true,
            "zones": ["Zone 7", "Zone 8"],
            "operators": ["CSB"],
            "bound": "A",
            "viaDirections": {
                "normal": {
                    "bound": "A",
                    "A": {
                        "viaCn": "東門、葉角灣、葉欣",
                        "viaEn": "East Door, Leafy Bay, Yiyan"
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
                    { "seq": 12, "nameCn": "葉欣海旁道", "nameEn": "YiYan Praya Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
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
            "zones": ["Zone 7"],
            "operators": ["CSB"],
            "typeTags": [{ "type": "Special Departure", "bound": "B", "shift": "special1" }],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": {
                        "viaCn": "葉角灣邨、勿莫",
                        "viaEn": "Leafy Bay Estate, Mo"
                    },
                    "B": {
                        "viaCn": "勿莫、葉角灣邨",
                        "viaEn": "Mo, Leafy Bay Estate"
                    }
                },
                "special1": {
                    "bound": "B",
                    "B": {
                        "viaCn": "勿莫、安靈台、葉角灣邨",
                        "viaEn": "Mo, Ambling, Leafy Bay Estate"
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
                        "fromCn": "安靈台靈灰安置所", "fromEn": "Ambling Peak",
                        "toCn": "安靈台靈灰安置所", "toEn": "Ambling Peak",
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
                    "label": "76# (經安靈台)",
                    "labelEn": "76# (via Ambling Peak)",
                    "color": "#f97316"
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
                            "routeCode": "76S1",
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
                    { "seq": 1, "nameCn": "葉欣海旁道", "nameEn": "YiYan Praya Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal"] },
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
                    { "seq": 3, "nameCn": "上灣街市", "nameEn": "Sheung Bay Market", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 4, "nameCn": "仙貝市政大廈", "nameEn": "Senpai Municipal Services Building", "nameSubCn": "仙貝站", "nameSubEn": "Senpai Station", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 5, "nameCn": "仙貝", "nameEn": "Senpai", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 6, "nameCn": "仙貝道", "nameEn": "Senpai Road", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 7, "nameCn": "北葉花園", "nameEn": "North Leafy Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 8, "nameCn": "羅力素花園一期", "nameEn": "Laws Garden 1", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 9, "nameCn": "勿莫街市", "nameEn": "Mo Market", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 10, "nameCn": "安靈台靈灰安置所", "nameEn": "Ambling Peak", "visible": true, "stopFor": ["special1"] },
                    { "seq": 11, "nameCn": "中間花園", "nameEn": "Middle Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 12, "nameCn": "葉角醫院", "nameEn": "Leafy Hospital", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 13, "nameCn": "葉角灣邨", "nameEn": "Leafy Bay Estate", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 14, "nameCn": "葉角灣邨商場", "nameEn": "Leafy Bay Estate Shopping Center", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 15, "nameCn": "葉角花園", "nameEn": "Leafy Bay Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 16, "nameCn": "新地公園", "nameEn": "Sindy Park", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 17, "nameCn": "新地花園", "nameEn": "Sindy Garden", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 18, "nameCn": "際巴車廠", "nameEn": "CSB Depot", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 19, "nameCn": "葉欣海旁道", "nameEn": "YiYan Praya Road", "nameSubCn": "鑽石交易塔", "nameSubEn": "Diamond Trading Tower", "visible": true, "stopFor": ["normal", "special1"] }
                ]
            }
        },
        {
            "route": "T999",
            "textColor": "#ffd900",
            "enabled": true,
            "zones": ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5", "Zone 6", "Zone 7", "Zone 8", "Zone 9", "Zone 10"],
            "operators": ["CSB", "FT", "SE", "HZ", "REBC"],
            "typeTags": ["Overnight", { "type": "Sightseeing", "bound": "A" }, { "type": "Event", "shift": "special1" }, "Festival", "Crew Shuttle", "University", "Express", { "type": "Limited-stop", "bound": "B", "shift": "normal" }, "Circular", "Special Departure", "Stadium", "CentralAxis", "CityStepped"],
            "bound": "A,B",
            "viaDirections": {
                "normal": {
                    "bound": "A,B",
                    "A": { "viaCn": "1、2、3", "viaEn": "One, Two, Three" },
                    "B": { "viaCn": "西區海底隧道轉車站", "viaEn": "Western Harbour Tunnel Interchange" }
                },
                "special1": {
                    "bound": "A",
                    "A": { "viaCn": "4、5、6", "viaEn": "Four, Five, Six" }
                }
            },
            "fares": {
                "adult": 4.0,
                "child": 2.0,
                "overrides": [
                    {
                        "bound": "A",
                        "shift": "normal",
                        "adult": 5.0,
                        "child": 2.5,
                        "elder": 2.5,
                        "student": 2.5
                    },
                    {
                        "bound": "A",
                        "shift": "special1",
                        "adult": 6.5,
                        "child": 3.5,
                        "elder": 3.5,
                        "student": 3.5
                    },
                    {
                        "bound": "B",
                        "shift": "special1",
                        "adult": 8.0,
                        "child": 4.0,
                        "elder": 4.0,
                        "student": 4.0
                    }
                ],
                "sectionFares": [
                    {
                        "direction": "A",
                        "shift": ["special1"],
                        "fromCn": "fromCn", "fromEn": "fromEn",
                        "toCn": "toCn", "toEn": "toEn",
                        "price": 12.0,
                        "childPrice": 7.3,
                        "elderPrice": 7.3,
                        "studentPrice": 7.3
                    },
                    {
                        "direction": "B",
                        "shift": ["special1"],
                        "fromCn": "fromCn", "fromEn": "fromEn",
                        "toCn": "toCn", "toEn": "toEn",
                        "price": 2.0
                    }
                ],
                "shortDistanceRebates": [
                    {
                        "direction": "A",
                        "shift": ["special1"],
                        "startStopCn": "startStopCn", "startStopEn": "startStopEn",
                        "alightStopCn": "alightStopCn", "alightStopEn": "alightStopEn",
                        "rebate": 1.5,
                        "actualFare": 2.5,
                        "childFare": 1.4,
                        "elderFare": 1.0,
                        "studentFare": 2.0,
                        "fullFare": 100.0,
                        "childFullFare": 50.0,
                        "elderFullFare": 40.0,
                        "studentFullFare": 30.0,
                        "remarkCn": "常規班次專屬優惠",
                        "remarkEn": "Discount"
                    },
                    {
                        "direction": "A",
                        "shift": ["special1"],
                        "startStopCn": "startStopCn", "startStopEn": "startStopEn",
                        "alightStopCn": "alightStopCn", "alightStopEn": "alightStopEn",
                        "rebate": 1.5,
                        "actualFare": 2.5,
                        "remarkCn": "常規班次專屬優惠",
                        "remarkEn": "Discount"
                    },
                    {
                        "direction": "B",
                        "shift": ["special1"],
                        "startStopCn": "startStopCn", "startStopEn": "startStopEn",
                        "alightStopCn": "alightStopCn", "alightStopEn": "alightStopEn",
                        "rebate": 1.5,
                        "actualFare": 2.5,
                        "remarkCn": "常規班次專屬優惠",
                        "remarkEn": "Discount"
                    }
                ]
            },
            "routeType": "測試路綫展示",
            "routeTypeEn": "Test Route Showcase",
            "shifts": {
                "A": {
                    "normal": true,
                    "special1": true
                },
                "B": {
                    "normal": true,
                    "special1": false
                }
            },
            "shiftConfig": {
                "normal": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift",
                    "color": "#000"
                },
                "special1": {
                    "label": "普通班次",
                    "labelEn": "Regular Shift",
                    "color": "#381"
                }
            },
            "timetable": {
                "A": {
                    "normal": [
                        {
                            "unlockLevel": 50000,
                            "sunshards": 5000000,
                            "unlockRoutes": ["476", "476*", "476P", "476S", "T999"],
                            "unlockDateCn": "10月1 - 12月1",
                            "unlockDateEn": "1 OCT - 1 DEC",
                            "routeCode": "TEST1",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "22:00",
                            "interval": [
                                { "time": "06:00-09:00", "interval": "10" },
                                { "time": "09:00-22:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "22:00",
                            "interval": [
                                { "time": "06:00-09:00", "interval": "10" },
                                { "time": "09:00-22:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "sunday",
                            "firstTime": "06:00",
                            "lastTime": "22:00",
                            "interval": [
                                { "time": "06:00-09:00", "interval": "10" },
                                { "time": "09:00-22:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "06:30-21:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "06:30-21:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "daily",
                            "firstTime": "06:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "06:30-21:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "custom",
                            "customDaysCn": "2026年10月1日 國慶日限定",
                            "customDaysEn": "1 Oct 2026 Only",
                            "is24Hours": true,
                            "cover": true,
                            "firstTime": "08:00",
                            "lastTime": "20:00",
                            "interval": [
                                { "time": "08:00-20:00", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "custom",
                            "customDaysCn": "只限10月2日",
                            "customDaysEn": "2 Oct Only",
                            "is24Hours": true,
                            "cover": false,
                            "firstTime": "08:00",
                            "lastTime": "20:00",
                            "interval": [
                                { "time": "08:00-20:00", "interval": "30" }
                            ]
                        },
                        {
                            "serviceDays": "custom",
                            "customDaysCn": "只限特別日子",
                            "customDaysEn": "Special Day Only",
                            "firstTime": "07:00",
                            "lastTime": "19:00",
                            "interval": [
                                { "time": "", "interval": "0" }
                            ]
                        }
                    ],
                    "special1": {
                        "unlockLevel": 10000,
                        "sunshards": 1000000,
                        "routeCode": "TEST2",
                        "firstTime": "07:00",
                        "lastTime": "09:00",
                        "interval": [
                            { "time": "07:00-09:00", "interval": "5" }
                        ]
                    }
                },
                "B": {
                    "normal": [
                        {
                            "routeCode": "TEST3",
                            "serviceDays": "weekday",
                            "firstTime": "06:00",
                            "lastTime": "22:00",
                            "interval": [
                                { "time": "06:00-09:00", "interval": "10" },
                                { "time": "09:00-22:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "saturday",
                            "firstTime": "06:00",
                            "lastTime": "22:00",
                            "interval": [
                                { "time": "06:00-09:00", "interval": "10" },
                                { "time": "09:00-22:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "sunday",
                            "firstTime": "06:00",
                            "lastTime": "22:00",
                            "interval": [
                                { "time": "06:00-09:00", "interval": "10" },
                                { "time": "09:00-22:00", "interval": "15" }
                            ]
                        },
                        {
                            "serviceDays": "weekend_holiday",
                            "firstTime": "06:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "06:30-21:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "holiday",
                            "firstTime": "06:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "06:30-21:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "daily",
                            "firstTime": "06:30",
                            "lastTime": "21:30",
                            "interval": [
                                { "time": "06:30-21:30", "interval": "20" }
                            ]
                        },
                        {
                            "serviceDays": "custom", // 指定日子
                            "customDaysCn": "2026年10月1日 國慶日限定", // 自訂中文文字
                            "customDaysEn": "1 Oct 2026 Only",        // 自訂英文文字
                            "firstTime": "08:00",
                            "lastTime": "20:00",
                            "interval": [
                                { "time": "08:00-20:00", "interval": "30" }
                            ]
                        }
                    ]
                }
            },
            "stops": {
                "A": [
                    { "seq": 1, "nameCn": "nameCn", "nameEn": "nameEn", "nameSubCn": "nameSubCn", "nameSubEn": "nameSubEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special1"], "tempClose": true, "tempCloseReason": "idk" },
                    { "seq": 3, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"], "tempClose": true },
                    { "seq": 4, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"], "tempCloseReason": "idk" },
                    { "seq": 5, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special2"] },
                    { "seq": 6, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["special1"] },
                    { "seq": 7, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 8, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 9, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special2"] },
                    { "seq": 10, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special3"] },
                    { "seq": 11, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 12, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 13, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 14, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 15, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 16, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 17, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 18, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 19, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 20, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 21, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 22, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 23, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special2"] },
                    { "seq": 24, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 25, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 26, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special3"] },
                    { "seq": 27, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 28, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 29, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 30, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 31, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 32, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 33, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 34, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 35, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 36, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 37, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 38, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 39, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] },
                    { "seq": 40, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal", "special1"] },
                    { "seq": 41, "nameCn": "nameCn", "nameEn": "nameEn", "visible": true, "stopFor": ["normal"] }
                ],
                "B": [
                    { "seq": 1, "nameCn": "陽光高鐵站總站", "nameEn": "Sunshine Station Bus Terminus", "visible": true, "stopFor": ["normal"] },
                    { "seq": 2, "nameCn": "西區海底隧道轉車站", "nameEn": "Western Habour Tunnel Interchange", "visible": true, "stopFor": ["normal"] },
                    { "seq": 3, "nameCn": "北灘總站", "nameEn": "Northern Beach", "visible": true, "stopFor": ["normal"] },
                    { "seq": 4, "nameCn": "巨石路總站", "nameEn": "Rocky Road Bus Terminus", "nameSubCn": "北島學校村", "nameSubEn": "Northern Island School Village", "visible": false, "stopFor": ["normal"] },
                ]
            }
        }
    ]
};
