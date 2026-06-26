var CONFIG = {
    singleColumnSize: 10,
    pageSize: 20,
    currentPage: 1,
    currentDirection: "A",
    currentRouteNum: "",
    currentRouteData: null,
    currentRouteId: null,
    enabledShifts: [],
    loadingTime: 1,
    keyboardOpacityDisabled: '0.5',
    keyboardOpacityEnabled: '1',
    emptyTipText: {
        'zh-CN': '暫時沒有站點數據',
        'en-US': 'No stop data available'
    },
    suggestTimeout: null,
    currentLang: 'zh-CN',
    activeFilters: {
        operator: null,
        type: null
    },
};

var LangHandler = {
    getText: function (key, replacements = {}) {
        const lang = CONFIG.currentLang || 'zh-CN';
        let text = (LANG_PACK?.[lang]?.[key] || LANG_PACK?.['zh-CN']?.[key] || key);

        if (typeof text === 'string' && Object.keys(replacements).length > 0) {
            Object.keys(replacements).forEach(placeholder => {
                const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
                text = text.replace(regex, replacements[placeholder] || '');
            });
        }

        return text;
    },

    renderAllTexts: function () {
        document.documentElement.lang = CONFIG.currentLang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            const replacements = this._getReplacementsFromElement(el);

            try {
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', this.getText(key, replacements));
                } else if (el.hasAttribute('data-lang-html')) {
                    el.innerHTML = this.getText(key, replacements);
                } else {
                    el.textContent = this.getText(key, replacements);
                }

                el.style.opacity = '0.8';
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 200);

            } catch (e) {
                console.warn(`渲染语言文案失败 [${key}]`, e);
            }
        });

        this.updateDynamicEmptyTips();
    },

    updateDynamicEmptyTips: function () {
        document.querySelectorAll('.empty-tip').forEach(tip => {
            if (tip.closest('.stop-wrap') || tip.closest('#stopContainer')) {
                tip.textContent = CONFIG.emptyTipText[CONFIG.currentLang];
            }
        });
    },

    _getReplacementsFromElement: function (el) {
        const replacements = {};
        Array.from(el.attributes).forEach(attr => {
            if (attr.name.startsWith('data-replace-')) {
                const placeholder = attr.name.replace('data-replace-', '');
                replacements[placeholder] = attr.value;
            }
        });
        return replacements;
    },

    getShiftLabel: function (shiftKey) {
        const keyMap = {
            'normal': 'normalShift',
            'special1': 'specialShift1',
            'special2': 'specialShift2',
            'special3': 'specialShift3',
            'special4': 'specialShift4'
        };
        return this.getText(keyMap[shiftKey] || shiftKey);
    }
};

function resetRouteQueryState() {
    CONFIG.currentRouteNum = "";
    CONFIG.currentRouteId = null;
    CONFIG.currentRouteData = null;
    CONFIG.enabledShifts = [];
    CONFIG.currentPage = 1;
    CONFIG.currentDirection = "A";

    CONFIG.activeFilters = { operator: null, type: null };

    const input = document.getElementById('routeNumberInput');
    if (input) {
        input.value = '';
        Renderer.initKeyboardValidity('');
        Renderer.renderRouteSuggestions('');
        input.setAttribute('placeholder', LangHandler.getText('inputPlaceholder'));
    }

    const clearBtn = document.getElementById('clearStationSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');

    const timetablePanel = document.getElementById('timetablePanel');
    if (timetablePanel) timetablePanel.remove();

    LangHandler.updateDynamicEmptyTips();
}

var PageController = {
    initPageEvents: function () {
        const self = this;

        const scrollToTop = () => {
            ['stationListContainer', 'suggestList', 'stopScreen', 'inputScreen', 'stationSearchScreen'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.scrollTop = 0;
            });
        };

        // 加载页面自动跳转到功能选择页
        setTimeout(() => {
            self.showScreen('funcScreen');
            self.hideScreen('loadingScreen');
        }, CONFIG.loadingTime * 1000);

        // 功能选择页 - 线路查询
        document.getElementById('routeSelectFunc')?.addEventListener('click', () => {
            self.showScreen('inputScreen');
            self.hideScreen('funcScreen');
        });

        // 功能选择页 - 更新日志
        document.getElementById('updateLogFunc')?.addEventListener('click', () => {
            self.showScreen('updateLogScreen');
            self.hideScreen('funcScreen');
            Renderer.renderUpdateLog();
        });

        // 返回按钮事件
        document.getElementById('backToLoadingBtn')?.addEventListener('click', () => {
            self.showScreen('loadingScreen');
            self.hideScreen('funcScreen');
        });

        document.getElementById('backToFuncBtn')?.addEventListener('click', () => {
            self.showScreen('funcScreen');
            self.hideScreen('inputScreen');
            resetRouteQueryState();
            scrollToTop();
        });

        document.getElementById('backToInputBtn')?.addEventListener('click', () => {
            self.showScreen('inputScreen');
            self.hideScreen('stopScreen');
            resetRouteQueryState();
            scrollToTop();
        });

        document.getElementById('backToFuncFromLogBtn')?.addEventListener('click', () => {
            self.showScreen('funcScreen');
            self.hideScreen('updateLogScreen');
        });

        document.getElementById('routeSelectFunc')?.addEventListener('click', () => {
            self.showScreen('inputScreen');
            self.hideScreen('funcScreen');
        });

        // 功能选择页 - 更新日志
        document.getElementById('updateLogFunc')?.addEventListener('click', () => {
            self.showScreen('updateLogScreen');
            self.hideScreen('funcScreen');
            Renderer.renderUpdateLog();
        });

        // 功能選擇頁 - 點對點搜尋
        document.getElementById('p2pSearchFunc')?.addEventListener('click', () => {
            self.showScreen('p2pScreen');
            self.hideScreen('funcScreen');
            P2PManager.init(); // 啟動模塊
        });

        // 點對點頁面 - 返回按鈕
        document.getElementById('backToFuncFromP2PBtn')?.addEventListener('click', () => {
            self.showScreen('funcScreen');
            self.hideScreen('p2pScreen');
            // 清空搜尋狀態
            const startIn = document.getElementById('p2pStartInput');
            const endIn = document.getElementById('p2pEndInput');
            const res = document.getElementById('p2pResultContainer');
            if (startIn) startIn.value = '';
            if (endIn) endIn.value = '';
            if (res) res.innerHTML = '';
        });

        document.getElementById('randomRouteBtn')?.addEventListener('click', (e) => {
            e.preventDefault();
            const items = Array.from(document.querySelectorAll('#suggestList .suggest-item:not(.empty-suggest)'));

            if (items.length > 0) {
                const pickableItems = [];
                const unpickableItems = [];

                // 區分可被抽中與不可被抽中的路線
                items.forEach(item => {
                    const routeId = item.getAttribute('data-route-id'); // [修改]
                    const routeData = DataHandler.getRouteById(routeId); // [修改]

                    if (routeData && routeData.random === false) {
                        unpickableItems.push(item);
                    } else {
                        pickableItems.push(item);
                    }
                });

                if (pickableItems.length > 0) {
                    const randomIndex = Math.floor(Math.random() * pickableItems.length);
                    const selectedItem = pickableItems[randomIndex];

                    // 平滑滾動到被抽中的項目
                    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    pickableItems.forEach((item, index) => {
                        item.classList.remove('highlight-flash', 'highlight-flash-red', 'highlight-flash-gray');
                        void item.offsetWidth; // 強制重繪以重啟動畫
                        if (index === randomIndex) {
                            item.classList.add('highlight-flash'); // 抽中：黃色
                        } else {
                            item.classList.add('highlight-flash-red'); // 沒抽中：紅色
                        }
                    });

                    unpickableItems.forEach(item => {
                        item.classList.remove('highlight-flash', 'highlight-flash-red', 'highlight-flash-gray');
                        void item.offsetWidth;
                        item.classList.add('highlight-flash-gray'); // 不參與：灰色
                    });

                    // 2 秒後移除所有高亮效果
                    setTimeout(() => {
                        items.forEach(item => {
                            item.classList.remove('highlight-flash', 'highlight-flash-red', 'highlight-flash-gray');
                        });
                    }, 2000);
                }
            }

        });

        const settingsBtn = document.getElementById('settingsBtn');
        const closeSettingsBtn = document.getElementById('closeSettingsBtn');
        const settingsModal = document.getElementById('settingsModal');

        if (settingsBtn && closeSettingsBtn && settingsModal) {
            settingsBtn.addEventListener('click', () => {
                settingsModal.classList.remove('hidden');
            });

            closeSettingsBtn.addEventListener('click', () => {
                settingsModal.classList.add('hidden');
            });

            // 點擊背景關閉 Modal
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) {
                    settingsModal.classList.add('hidden');
                }
            });
        }

        document.getElementById('modalSwitchZhBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('modalSwitchEnBtn').classList.remove('active');
            this.style.transform = 'scale(1.05)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);

            CONFIG.currentLang = 'zh-CN';
            Renderer.updatePageLang();

            const input = document.getElementById('routeNumberInput');
            if (input && !document.getElementById('inputScreen').classList.contains('hidden')) {
                Renderer.renderRouteSuggestions(input.value);
            }
        });

        document.getElementById('modalSwitchEnBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('modalSwitchZhBtn').classList.remove('active');
            this.style.transform = 'scale(1.05)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);

            CONFIG.currentLang = 'en-US';
            Renderer.updatePageLang();

            const input = document.getElementById('routeNumberInput');
            if (input && !document.getElementById('inputScreen').classList.contains('hidden')) {
                Renderer.renderRouteSuggestions(input.value);
            }
        });

        document.getElementById('switchZhBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('switchEnBtn').classList.remove('active');
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            CONFIG.currentLang = 'zh-CN';
            Renderer.updatePageLang();

            const input = document.getElementById('routeNumberInput');
            if (input) {
                Renderer.renderRouteSuggestions(input.value);
            }
        });

        document.getElementById('switchEnBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('switchZhBtn').classList.remove('active');
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            CONFIG.currentLang = 'en-US';
            Renderer.updatePageLang();

            const input = document.getElementById('routeNumberInput');
            if (input) {
                Renderer.renderRouteSuggestions(input.value);
            }
        });

        document.getElementById('stationSearchFunc')?.addEventListener('click', () => {
            self.showScreen('stationSearchScreen');
            self.hideScreen('funcScreen');
            document.getElementById('stationSearchInput').focus();
        });

        document.getElementById('backToFuncFromStationBtn')?.addEventListener('click', () => {
            self.showScreen('funcScreen');
            self.hideScreen('stationSearchScreen');

            // 清空搜尋輸入框，確保下次進入時列表是預設的完整狀態
            const stationInput = document.getElementById('stationSearchInput');
            if (stationInput) {
                stationInput.value = '';
            }

            resetRouteQueryState();
            scrollToTop();
        });

        // 點對點詳情頁面 - 返回搜尋結果
        document.getElementById('backToP2PBtn')?.addEventListener('click', () => {
            self.showScreen('p2pScreen');
            self.hideScreen('p2pDetailScreen');
        });

        document.addEventListener('DOMContentLoaded', function () {
            const input = document.getElementById('routeNumberInput');
            if (input) {
                input.addEventListener('click', function () {
                    const keyboard = document.getElementById("customKeyboard");
                    if (keyboard) {
                        keyboard.classList.remove("hidden");
                        if (typeof Renderer !== 'undefined') {
                            Renderer.initKeyboardValidity(input.value);
                        }
                    }
                });

                input.addEventListener('keydown', function (e) {
                    e.preventDefault();
                });
                input.addEventListener('paste', function (e) {
                    e.preventDefault();
                });

                input.addEventListener('change', function () {
                    Renderer.initKeyboardValidity(input.value);
                    Renderer.renderRouteSuggestions(input.value);
                });
            }
        });
    },

    showScreen: function (screenId) {
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.remove('hidden');
            screen.style.opacity = '0';
            screen.style.transform = 'translateY(20px)';

            setTimeout(() => {
                screen.style.opacity = '1';
                screen.style.transform = 'translateY(0)';
                screen.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

                setTimeout(() => {
                    if (!screen.classList.contains('hidden')) {
                        screen.style.transform = '';
                        screen.style.transition = '';
                    }
                }, 300);

            }, 50);
        }
        Renderer.updatePageLang();

        if (screenId === 'inputScreen') {
            const input = document.getElementById('routeNumberInput');
            if (input) {
                Renderer.renderRouteSuggestions(input.value);
            }
        }
    },

    hideScreen: function (screenId) {
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.style.opacity = '0';
            screen.style.transform = 'translateY(-20px)';
            screen.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

            setTimeout(() => {
                screen.classList.add('hidden');
                screen.style.opacity = '';
                screen.style.transform = '';
                screen.style.transition = '';
            }, 300);
        }
    }
};

// ------------- 数据处理核心层 -------------
var DataHandler = {

    // 1. 動態綁定唯一 _id
    getValidRoutes: function () {
        if (typeof routeData === 'undefined' || !routeData || !routeData.data) return [];
        var validRoutes = [];
        for (var i = 0; i < routeData.data.length; i++) {
            if (routeData.data[i].enabled === true) {
                var r = routeData.data[i];
                r._id = i.toString(); // 賦予內部唯一識別碼
                validRoutes.push(r);
            }
        }
        return validRoutes;
    },

    getRouteById: function (id) {
        if (!id && id !== 0) return null;
        var validRoutes = this.getValidRoutes();
        for (var i = 0; i < validRoutes.length; i++) {
            if (validRoutes[i]._id === id.toString()) {
                return validRoutes[i];
            }
        }
        return null;
    },

    getFirstRouteByNum: function (routeNum) {
        if (!routeNum) return null;
        var validRoutes = this.getValidRoutes();
        for (var i = 0; i < validRoutes.length; i++) {
            if (validRoutes[i].route === routeNum.toString()) {
                return validRoutes[i];
            }
        }
        return null;
    },

    getMatchedRoutes: function (currentInput) {
        var currentInputUpper = (currentInput || '').toString().toUpperCase().trim();
        var validRoutes = this.getValidRoutes();
        var matchedRoutes = [];

        for (var i = 0; i < validRoutes.length; i++) {
            var routeItem = validRoutes[i];

            // 結合原有的過濾條件
            var passOperator = !CONFIG.activeFilters.operator || (routeItem.operators && routeItem.operators.includes(CONFIG.activeFilters.operator));
            var passType = !CONFIG.activeFilters.type || (routeItem.typeTags && routeItem.typeTags.some(t => (typeof t === 'string' ? t : t.type) === CONFIG.activeFilters.type));

            if (passOperator && passType) {
                // 比對路線編號前綴
                if (!currentInputUpper || routeItem.route.toUpperCase().startsWith(currentInputUpper)) {
                    matchedRoutes.push(routeItem);
                }
            }
        }
        return matchedRoutes;
    },

    getRouteBound: function (routeItem) {
        if (routeItem.bound) return routeItem.bound; // 向下相容
        if (routeItem.viaDirections) {
            var dirs = new Set();
            for (var key in routeItem.viaDirections) {
                if (routeItem.viaDirections[key].bound) {
                    routeItem.viaDirections[key].bound.split(',').forEach(d => dirs.add(d));
                }
            }
            if (dirs.size > 0) return Array.from(dirs).join(',');
        }
        return "A"; // 預設防呆
    },

    getEnabledShifts: function (routeItem, direction = null) {
        if (!routeItem || !routeItem.shifts) return [];
        var shifts = new Set();

        var isDirectional = false;
        for (var k in routeItem.shifts) {
            // 如果鍵值是方向 (A, B, C)，則判定為分方向結構
            if (k === 'A' || k === 'B' || k === 'C') {
                isDirectional = true;
                break;
            }
        }

        if (isDirectional) {
            if (direction && routeItem.shifts[direction]) {
                for (var key in routeItem.shifts[direction]) {
                    var val = routeItem.shifts[direction][key];
                    if (val === true || (typeof val === 'object' && val !== null && val.enabled !== false)) {
                        shifts.add(key);
                    }
                }
            } else if (!direction) {
                for (var bound in routeItem.shifts) {
                    if (bound === 'A' || bound === 'B' || bound === 'C') {
                        for (var key in routeItem.shifts[bound]) {
                            var val = routeItem.shifts[bound][key];
                            if (val === true || (typeof val === 'object' && val !== null && val.enabled !== false)) {
                                shifts.add(key);
                            }
                        }
                    }
                }
            }
        } else {
            for (var key in routeItem.shifts) {
                var val = routeItem.shifts[key];
                if (val === true || (typeof val === 'object' && val !== null && val.enabled !== false)) {
                    shifts.add(key);
                }
            }
        }
        return Array.from(shifts);
    },

    getShiftConfig: function (routeItem, shiftKey) {
        if (!routeItem || !shiftKey || !routeItem.shiftConfig) {
            return {
                label: label,
                color: config.color || '#4a90e2',
                textColor: config.textColor || '#ffffff'
            };
        }

        const config = routeItem.shiftConfig[shiftKey] || {};
        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        const label = isZh
            ? (config.labelCn || config.label || LangHandler.getShiftLabel(shiftKey))
            : (config.labelEn || config.label || LangHandler.getShiftLabel(shiftKey));

        return {
            label: label,
            color: config.color || '#4a90e2',
            textColor: config.textColor || '#ffffff'
        };
    },

    getRouteCodes: function (routeItem) {
        if (!routeItem) return [];
        var codes = [];
        var seen = new Set();

        // 1. 優先從 timetable 中讀取依方向配置的 routeCode
        if (routeItem.timetable) {
            for (var bound in routeItem.timetable) {
                var shifts = routeItem.timetable[bound];
                for (var shiftKey in shifts) {
                    var shiftData = shifts[shiftKey];

                    if (Array.isArray(shiftData)) {
                        shiftData.forEach(item => {
                            if (item.routeCode) {
                                var key = bound + '-' + shiftKey + '-' + item.routeCode;
                                if (!seen.has(key)) {
                                    seen.add(key);
                                    codes.push({ bound: bound, shift: shiftKey, code: item.routeCode });
                                }
                            }
                        });
                    } else if (shiftData && typeof shiftData === 'object') {
                        if (shiftData.routeCode) {
                            var key = bound + '-' + shiftKey + '-' + shiftData.routeCode;
                            if (!seen.has(key)) {
                                seen.add(key);
                                codes.push({ bound: bound, shift: shiftKey, code: shiftData.routeCode });
                            }
                        }
                    }
                }
            }
        }

        // 2. 向下兼容：如果 timetable 內沒找到，就讀取舊有外層的 routeCode
        if (codes.length === 0 && routeItem.routeCode) {
            codes.push({ bound: null, shift: 'normal', code: routeItem.routeCode });
        }

        return codes;
    },

    isShiftCircular: function (routeItem, shiftKey, currentDir = null) {
        if (!routeItem) return false;

        // 1. 最高優先級：明確檢查 shiftConfig 內是否設定了 circular 屬性
        if (shiftKey && routeItem.shiftConfig && routeItem.shiftConfig[shiftKey]) {
            if (routeItem.shiftConfig[shiftKey].circular !== undefined) {
                return routeItem.shiftConfig[shiftKey].circular === true;
            }
        }

        // 2. 檢查 typeTags 中是否有針對此班次的 Circular 設定
        if (routeItem.typeTags) {
            for (let i = 0; i < routeItem.typeTags.length; i++) {
                let tag = routeItem.typeTags[i];
                if (typeof tag === 'object' && tag.type === 'Circular' && tag.shift === shiftKey) {
                    return true;
                }
            }
        }

        // 3. 檢查 shifts 物件內是否明確包含 circular: true
        if (routeItem.shifts) {
            let shiftData = null;
            if (currentDir && routeItem.shifts[currentDir] && routeItem.shifts[currentDir][shiftKey] !== undefined) {
                shiftData = routeItem.shifts[currentDir][shiftKey];
            } else if (routeItem.shifts[shiftKey] !== undefined) {
                shiftData = routeItem.shifts[shiftKey];
            }
            if (typeof shiftData === 'object' && shiftData !== null && shiftData.circular !== undefined) {
                return shiftData.circular === true;
            }
        }

        let shiftBound = null;
        if (shiftKey && routeItem.viaDirections) {
            if (routeItem.viaDirections[shiftKey] && routeItem.viaDirections[shiftKey].bound) {
                shiftBound = routeItem.viaDirections[shiftKey].bound;
            } else if (currentDir && routeItem.viaDirections[currentDir] && routeItem.viaDirections[currentDir][shiftKey] && routeItem.viaDirections[currentDir][shiftKey].bound) {
                shiftBound = routeItem.viaDirections[currentDir][shiftKey].bound;
            }
        }

        // 4. 根據 bound 判斷 (包含 C 則為循環)
        if (shiftBound && shiftBound.includes('C')) return true;

        // 5. 如果目前查詢的方向明確是 C，視為循環
        if (currentDir === 'C') return true;

        // 6. 根屬性相容：為防止特班錯誤繼承，只有 normal 班次才會繼承根屬性的 circular: true
        if (routeItem.circular === true && shiftKey === 'normal') {
            return true;
        }

        return false;
    },

    // 修改 getShiftStartEnd，改用 isShiftCircular
    getShiftStartEnd: function (routeItem, shiftKey, specificBound) {
        if (!routeItem || !shiftKey) return { start: LangHandler.getText('noInformation'), end: LangHandler.getText('noInformation') };

        var targetDirection = specificBound || CONFIG.currentDirection || "A";
        var shiftStops = [];
        if (routeItem.stops && routeItem.stops[targetDirection]) {
            for (var i = 0; i < routeItem.stops[targetDirection].length; i++) {
                var stop = routeItem.stops[targetDirection][i];
                if (stop.visible && stop.stopFor && stop.stopFor.indexOf(shiftKey) !== -1) {
                    shiftStops.push(stop);
                }
            }
        }

        shiftStops.sort(function (a, b) { return a.seq - b.seq; });

        if (shiftStops.length === 0) return { start: LangHandler.getText('noInformation'), end: LangHandler.getText('noInformation') };

        const cleanStopName = (stop) => {
            if (CONFIG.currentLang === 'zh-CN') {
                return (stop.nameCn || '').replace(/\^\^/g, '');
            } else {
                return (stop.nameEn || '').replace(/\^\^/g, '');
            }
        };

        var startName = cleanStopName(shiftStops[0]);
        var endName = cleanStopName(shiftStops[shiftStops.length - 1]);

        const isCircularEndStop = (stop) => {
            return (stop.nameCn && stop.nameCn.includes('^^')) || (stop.nameEn && stop.nameEn.includes('^^'));
        };

        var isLoop = this.isShiftCircular(routeItem, shiftKey, targetDirection);

        if (isLoop) {
            let circularEndStop = null;
            for (let i = 0; i < shiftStops.length; i++) {
                if (isCircularEndStop(shiftStops[i])) {
                    circularEndStop = shiftStops[i];
                    break;
                }
            }
            if (circularEndStop) {
                endName = cleanStopName(circularEndStop);
            }
        }

        return {
            start: startName || LangHandler.getText('noInformation'),
            end: endName || LangHandler.getText('noInformation')
        };
    },

    getTimetableData: function (routeItem, direction = null) {
        if (!routeItem || typeof routeData === 'undefined') return null;
        var targetDirection = direction || CONFIG.currentDirection || "A";

        var timetableData = routeItem.timetable || routeItem.operationTime || routeItem.timeTable || null;
        if (!timetableData) return null;

        if (typeof timetableData === 'string') {
            return { direction: targetDirection, data: { text: timetableData }, hasOtherDirection: false };
        }

        if (timetableData[targetDirection]) {
            var hasOther = Object.keys(timetableData).some(k => k !== targetDirection && ['A', 'B', 'C'].includes(k));
            return {
                direction: targetDirection,
                data: timetableData[targetDirection],
                hasOtherDirection: hasOther
            };
        }

        if (typeof timetableData === 'object' && !timetableData.A && !timetableData.B && !timetableData.C) {
            return { direction: targetDirection, data: timetableData, hasOtherDirection: false };
        }

        for (let d of ["A", "B", "C"]) {
            if (d !== targetDirection && timetableData[d]) {
                return { direction: d, data: timetableData[d], hasOtherDirection: true };
            }
        }
        return null;
    },

    getTimetableDirections: function (routeItem) {
        if (!routeItem || !routeItem.timetable) return [];
        var directions = [];
        var timetableData = routeItem.timetable;

        if (timetableData.A) directions.push("A");
        if (timetableData.B) directions.push("B");
        if (timetableData.C) directions.push("C");
        return directions.length > 0 ? directions : [];
    },

    getValidStops: function (routeItem) {
        if (!routeItem || !routeItem.stops) return [];
        var targetDirection = CONFIG.currentDirection || "A";
        var directionStops = routeItem.stops[targetDirection] || [];
        return directionStops.filter(s => s.visible);
    },

    isRouteSupportDirectionSwitch: function (routeItem) {
        if (!routeItem) return false;

        // Get the route's bounds (e.g., "A,B" or "C")
        var boundStr = this.getRouteBound(routeItem);
        if (!boundStr) return false;

        var boundsArray = boundStr.split(',');

        // Filter out bounds that don't actually have any stops configured
        var validBounds = boundsArray.filter(b =>
            routeItem.stops &&
            routeItem.stops[b] &&
            routeItem.stops[b].length > 0
        );

        // If there is more than one valid direction, it supports switching
        return validBounds.length > 1;
    },

    getDirectionStartEndStops: function (routeItem, direction = null) {
        var targetDir = direction || CONFIG.currentDirection || "A";
        if (!routeItem || !routeItem.stops || !routeItem.stops[targetDir]) {
            return { first: LangHandler.getText('noInformation'), last: LangHandler.getText('noInformation') };
        }
        var validStops = routeItem.stops[targetDir].filter(s => s.visible);
        if (validStops.length === 0) {
            return { first: LangHandler.getText('noInformation'), last: LangHandler.getText('noInformation') };
        }

        var isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        var firstStop = validStops[0];
        var lastStop = validStops[validStops.length - 1];

        var firstName = isZh ? (firstStop.nameCn || '').replace(/\^\^/g, '') : ((firstStop.nameEn || firstStop.nameCn) || '').replace(/\^\^/g, '');
        var lastName = isZh ? (lastStop.nameCn || '').replace(/\^\^/g, '') : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');

        return { first: firstName, last: lastName };
    },

    isShiftEndStop: function (routeItem, stop, shiftKey) {
        var targetDirection = CONFIG.currentDirection;
        var isLoop = this.isShiftCircular(routeItem, shiftKey, targetDirection);

        if (isLoop) {
            var shiftStops = this.getShiftStopStops(routeItem, shiftKey);
            if (shiftStops.length === 0) return false;
            var lastShiftStop = shiftStops[shiftStops.length - 1];
            return stop.seq === lastShiftStop.seq;
        }

        var shiftStops = this.getShiftStopStops(routeItem, shiftKey);
        if (shiftStops.length === 0) return false;
        var lastShiftStop = shiftStops[shiftStops.length - 1];
        return stop.seq === lastShiftStop.seq;
    },

    getShiftInRangeStops: function (routeItem, shiftKey) {
        var targetDirection = CONFIG.currentDirection;
        var directionStops = routeItem.stops[targetDirection] || [];
        var inRangeStops = [];
        for (var i = 0; i < directionStops.length; i++) {
            var stop = directionStops[i];
            if (stop.visible && this.isStopInShiftRange(routeItem, stop, shiftKey)) {
                inRangeStops.push(stop);
            }
        }
        inRangeStops.sort(function (a, b) {
            return a.seq - b.seq;
        });
        return inRangeStops;
    },

    _shiftInfoCache: {},

    getAllShiftsStartEndInfo: function (routeItem) {
        if (!routeItem) return [];

        const cacheKey = routeItem._id + '_' + CONFIG.currentLang;

        if (this._shiftInfoCache[cacheKey]) {
            return this._shiftInfoCache[cacheKey];
        }

        var shiftInfoList = [];
        var isDirectional = false;

        for (var k in routeItem.shifts) {
            if (typeof routeItem.shifts[k] === 'object') {
                isDirectional = true;
                break;
            }
        }

        var enabledShifts = this.getEnabledShifts(routeItem) || [];

        for (var i = 0; i < enabledShifts.length; i++) {
            var shiftKey = enabledShifts[i];
            var shiftConfig = this.getShiftConfig(routeItem, shiftKey);

            var activeBounds = [];
            if (routeItem.viaDirections && routeItem.viaDirections[shiftKey] && routeItem.viaDirections[shiftKey].bound) {
                activeBounds = routeItem.viaDirections[shiftKey].bound.split(',');
            } else if (isDirectional) {
                for (var bound in routeItem.shifts) {
                    if (routeItem.shifts[bound][shiftKey] === true) activeBounds.push(bound);
                }
            } else {
                var routeBound = this.getRouteBound(routeItem);
                activeBounds = routeBound.split(',');
            }

            var validBoundsData = {};
            activeBounds.forEach(b => {
                var startEnd = this.getShiftStartEnd(routeItem, shiftKey, b);
                if (startEnd.start && startEnd.start !== LangHandler.getText('noInformation')) {
                    validBoundsData[b] = startEnd;
                }
            });

            var validBounds = Object.keys(validBoundsData);

            if (validBounds.includes('A') && validBounds.includes('B')) {
                var startEndA = validBoundsData['A'];
                var startEndB = validBoundsData['B'];

                if (startEndA.start === startEndB.end && startEndA.end === startEndB.start) {
                    shiftInfoList.push({
                        shiftKey: shiftKey,
                        name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                        start: startEndA.start,
                        end: startEndA.end,
                        bound: "A,B",
                        color: shiftConfig?.color || '#4a90e2',
                        textColor: shiftConfig?.textColor || '#ffffff'
                    });
                } else {
                    shiftInfoList.push({
                        shiftKey: shiftKey,
                        name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                        start: startEndA.start,
                        end: startEndA.end,
                        bound: "A",
                        color: shiftConfig?.color || '#4a90e2',
                        textColor: shiftConfig?.textColor || '#ffffff'
                    });
                    shiftInfoList.push({
                        shiftKey: shiftKey,
                        name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                        start: startEndB.start,
                        end: startEndB.end,
                        bound: "B",
                        color: shiftConfig?.color || '#4a90e2',
                        textColor: shiftConfig?.textColor || '#ffffff'
                    });
                }

                if (validBounds.includes('C')) {
                    shiftInfoList.push({
                        shiftKey: shiftKey,
                        name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                        start: validBoundsData['C'].start,
                        end: validBoundsData['C'].end,
                        bound: "C",
                        color: shiftConfig?.color || '#4a90e2',
                        textColor: shiftConfig?.textColor || '#ffffff'
                    });
                }
            } else {
                validBounds.forEach(targetBound => {
                    shiftInfoList.push({
                        shiftKey: shiftKey,
                        name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                        start: validBoundsData[targetBound].start,
                        end: validBoundsData[targetBound].end,
                        bound: targetBound,
                        color: shiftConfig?.color || '#4a90e2',
                        textColor: shiftConfig?.textColor || '#ffffff'
                    });
                });
            }
        }
        this._shiftInfoCache[cacheKey] = shiftInfoList;
        return shiftInfoList;
    },

    // 获取指定班次的站点列表
    getShiftStopStops: function (routeItem, shiftKey) {
        if (!routeItem || !shiftKey) return [];
        var targetDirection = CONFIG.currentDirection || "A"; // 移除覆寫，尊重當前方向
        var directionStops = routeItem.stops[targetDirection] || [];
        var shiftStops = [];

        for (var i = 0; i < directionStops.length; i++) {
            var stop = directionStops[i];
            if (stop.visible && stop.stopFor && stop.stopFor.indexOf(shiftKey) !== -1) {
                shiftStops.push(stop);
            }
        }

        shiftStops.sort(function (a, b) {
            return a.seq - b.seq;
        });

        return shiftStops;
    },

    // 判断是否是班次起点站
    isShiftStartStop: function (routeItem, stop, shiftKey) {
        var shiftStops = this.getShiftStopStops(routeItem, shiftKey);
        if (shiftStops.length === 0) return false;
        return stop.seq === shiftStops[0].seq;
    },

    // 判断是否是班次终点站
    isShiftEndStop: function (routeItem, stop, shiftKey) {
        var shiftStops = this.getShiftStopStops(routeItem, shiftKey);
        if (shiftStops.length === 0) return false;
        return stop.seq === shiftStops[shiftStops.length - 1].seq;
    },

    // 判断站点是否在班次范围内
    isStopInShiftRange: function (routeItem, stop, shiftKey) {
        var shiftStops = this.getShiftStopStops(routeItem, shiftKey);
        if (shiftStops.length === 0) return false;
        var minSeq = shiftStops[0].seq;
        var maxSeq = shiftStops[shiftStops.length - 1].seq;
        return stop.seq >= minSeq && stop.seq <= maxSeq;
    },

    getShiftLocalSeq: function (routeItem, stop, shiftKey) {
        if (!routeItem || !stop || !shiftKey) return "";

        if (!this.isStopInShiftRange(routeItem, stop, shiftKey)) {
            return "";
        }

        // [MODIFIED] 彻底移除 "normal" 班次的硬编码限制，使其遵循 routedata.js 配置
        var shiftStops = this.getShiftStopStops(routeItem, shiftKey);
        if (shiftStops.length === 0) return "";

        for (var i = 0; i < shiftStops.length; i++) {
            if (shiftStops[i].seq === stop.seq) {
                return (i + 1).toString();
            }
        }

        return "";
    },

    // 分页获取站点
    getStopsByPage: function (validStops, pageNum) {
        if (!validStops || validStops.length === 0) return [];
        var startIdx = (pageNum - 1) * CONFIG.pageSize;
        var endIdx = startIdx + CONFIG.pageSize;
        return validStops.slice(startIdx, endIdx);
    },

    // 拆分站点为两列
    splitStopsToColumns: function (pageStops) {
        var leftStops = pageStops.slice(0, CONFIG.singleColumnSize);
        var rightStops = pageStops.slice(CONFIG.singleColumnSize, CONFIG.pageSize);
        return { leftStops: leftStops, rightStops: rightStops };
    },

    // 获取总页数
    getTotalPages: function (validStops) {
        if (!validStops || validStops.length === 0) return 1;
        return Math.ceil(validStops.length / CONFIG.pageSize);
    },

    // 获取运营时间数据（修复：时间表显示问题）
    getTimetableData: function (routeItem, direction = null) {
        if (!routeItem || typeof routeData === 'undefined') return null;

        var targetDirection = direction || CONFIG.currentDirection;

        // 修复：增加更多的时间数据来源适配
        var timetableData = routeItem.timetable || routeItem.operationTime || routeItem.timeTable || null;
        if (!timetableData) return null;

        // 修复：处理不同的数据格式
        if (typeof timetableData === 'string') {
            return {
                direction: targetDirection,
                data: { text: timetableData },
                hasOtherDirection: false
            };
        }

        if (timetableData[targetDirection]) {
            return {
                direction: targetDirection,
                data: timetableData[targetDirection],
                hasOtherDirection: (targetDirection === "A" && timetableData.B) ||
                    (targetDirection === "B" && timetableData.A)
            };
        }

        if (typeof timetableData === 'object' && !timetableData.A && !timetableData.B && !timetableData.C) {
            return {
                direction: targetDirection,
                data: timetableData,
                hasOtherDirection: false
            };
        }

        var otherDirection = targetDirection === "A" ? "B" : "A";
        if (timetableData[otherDirection]) {
            return {
                direction: otherDirection,
                data: timetableData[otherDirection],
                hasOtherDirection: true
            };
        }

        return null;
    },

    // 获取线路支持的运营时间方向
    getTimetableDirections: function (routeItem) {
        if (!routeItem || !routeItem.timetable) return [];

        var directions = [];
        var timetableData = routeItem.timetable;

        if (timetableData.A) directions.push("A");
        if (timetableData.B) directions.push("B");

        return directions.length > 0 ? directions : [];
    },

    // 获取班次运营范围内的所有站点
    getShiftInRangeStops: function (routeItem, shiftKey) {
        var targetDirection = CONFIG.currentDirection || "A";
        var directionStops = routeItem.stops[targetDirection] || [];
        var inRangeStops = [];
        for (var i = 0; i < directionStops.length; i++) {
            var stop = directionStops[i];
            if (stop.visible && this.isStopInShiftRange(routeItem, stop, shiftKey)) {
                inRangeStops.push(stop);
            }
        }
        inRangeStops.sort(function (a, b) { return a.seq - b.seq; });
        return inRangeStops;
    },

    getRouteStartEndInfo: function (routeItem) {
        if (!routeItem) return { start: LangHandler.getText('noInformation'), end: LangHandler.getText('noInformation') };

        // 获取常规班次的起终点
        var normalShiftStartEnd = this.getShiftStartEnd(routeItem, 'normal');
        if (normalShiftStartEnd.start !== LangHandler.getText('noInformation')) {
            return normalShiftStartEnd;
        }

        // 如果没有常规班次，获取第一个可用班次的起终点
        var enabledShifts = this.getEnabledShifts(routeItem);
        for (var i = 0; i < enabledShifts.length; i++) {
            var shiftStartEnd = this.getShiftStartEnd(routeItem, enabledShifts[i]);
            if (shiftStartEnd.start !== LangHandler.getText('noInformation')) {
                return shiftStartEnd;
            }
        }

        return { start: LangHandler.getText('noInformation'), end: LangHandler.getText('noInformation') };
    },

    getRouteTypeDisplay: function (routeItem) {
        if (!routeItem) return '';
        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        return isZh ? (routeItem.routeType || '') : (routeItem.routeTypeEn || routeItem.routeType || '');
    },

    getRouteUnlockLevels: function (routeItem) {
        if (!routeItem || !routeItem.timetable) return [];
        var levels = [];
        var seen = new Set();

        for (var bound in routeItem.timetable) {
            var shifts = routeItem.timetable[bound];
            for (var shiftKey in shifts) {
                var shiftData = shifts[shiftKey];
                var level = null;
                var sunshards = null;
                var unlockRoutes = null;
                var unlockDateCn = null; // 新增：中文自定義日期
                var unlockDateEn = null; // 新增：英文自定義日期

                if (Array.isArray(shiftData) && shiftData.length > 0) {
                    level = shiftData[0].unlockLevel;
                    sunshards = shiftData[0].sunshards;
                    unlockRoutes = shiftData[0].unlockRoutes;
                    unlockDateCn = shiftData[0].unlockDateCn;
                    unlockDateEn = shiftData[0].unlockDateEn;
                } else if (shiftData && typeof shiftData === 'object') {
                    level = shiftData.unlockLevel;
                    sunshards = shiftData.sunshards;
                    unlockRoutes = shiftData.unlockRoutes;
                    unlockDateCn = shiftData.unlockDateCn;
                    unlockDateEn = shiftData.unlockDateEn;
                }

                if ((level !== undefined && level !== null) || (sunshards !== undefined && sunshards !== null) || (unlockRoutes && unlockRoutes.length > 0) || unlockDateCn || unlockDateEn) {
                    // 將新的解鎖條件也加入 key 中以防重複計算
                    var key = bound + '-' + shiftKey + '-' + level + '-' + sunshards + '-' + (unlockRoutes ? unlockRoutes.join(',') : '') + '-' + unlockDateCn + '-' + unlockDateEn;
                    if (!seen.has(key)) {
                        seen.add(key);
                        levels.push({ bound: bound, shift: shiftKey, level: level, sunshards: sunshards, routes: unlockRoutes, unlockDateCn: unlockDateCn, unlockDateEn: unlockDateEn });
                    }
                }
            }
        }
        return levels;
    }
};

// ------------- 增强版DOM渲染层 -------------
var Renderer = {
    // --- 新增：路線類型徽章複合渲染器 ---
    renderTypeBadge: function (tObj, routeItem, extraStyle = '') {
        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        // 判斷是舊版純字串還是新版物件結構
        let t = typeof tObj === 'string' ? tObj : tObj.type;
        let typeKey = 'type' + t.replace(/\s+/g, '');
        let transText = LangHandler.getText(typeKey);
        if (transText === typeKey) transText = t;

        // 基礎類型標籤
        let baseBadge = `<span class="badge-common type-badge" data-type="${t}" style="${extraStyle}">${transText}</span>`;

        // 如果是物件，判斷是否有附加 shift 或 bound
        if (typeof tObj === 'object') {
            let routeBadgeStr = '';
            let shiftNameStr = '';

            // 附加班次
            if (tObj.shift) {
                const shiftConfig = DataHandler.getShiftConfig(routeItem, tObj.shift);
                const shiftColor = shiftConfig.color || '#4a90e2';
                const textColor = shiftConfig.textColor || '#fff';
                let match = shiftConfig.label.match(/^(.+?)\s*\((.+?)\)$/);

                if (match) {
                    routeBadgeStr = `<span class="route-badge" style="background-color: ${shiftColor}; --route-badge-color: ${textColor}">${match[1].trim()}</span>`;
                    shiftNameStr = match[2].trim();
                } else {
                    shiftNameStr = shiftConfig.label;
                }
            }

            // 附加方向 (dest-pill)
            let hasDestPill = false;
            let destTextStr = '';
            if (tObj.bound) {
                hasDestPill = true;
                let isLoop = DataHandler.isShiftCircular(routeItem, tObj.shift, tObj.bound);
                if (isLoop) {
                    destTextStr = isZh ? '循環線' : 'Loop';
                } else {
                    let destName = DataHandler.getShiftStartEnd(routeItem, tObj.shift, tObj.bound).end;
                    if (!destName || destName === LangHandler.getText('noInformation')) {
                        destName = DataHandler.getDirectionStartEndStops(routeItem, tObj.bound).last;
                    }
                    destTextStr = isZh ? `往 ${destName}` : `to ${destName}`;
                }
            }

            // 組合 dest-pill 與 suggest-shift-name 內容 (去除 shift-name 的獨立樣式)
            let combinedPillText = '';
            if (hasDestPill && shiftNameStr) {
                combinedPillText = `${destTextStr} (${shiftNameStr})`;
            } else if (hasDestPill) {
                combinedPillText = destTextStr;
            } else if (shiftNameStr) {
                combinedPillText = shiftNameStr;
            }

            let finalPill = '';
            if (combinedPillText) {
                finalPill = `<span class="dest-pill" style="background: #e2e8f0; color: #334155; padding: 2px 8px; font-size: 12px; font-weight: 600; white-space: nowrap; flex-shrink: 0;">${combinedPillText}</span>`;
            }

            if (routeBadgeStr !== '' && baseBadge !== '' && hasDestPill) {
                return `<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 4px; max-width: 100%; overflow-x: auto;">
                            <div style="display: inline-flex; flex-wrap: nowrap; align-items: center; gap: 4px;">
                                ${routeBadgeStr}
                                ${baseBadge}
                            </div>
                            <div style="display: inline-flex; flex-wrap: nowrap; align-items: center; gap: 4px;">
                                ${finalPill}
                            </div>
                        </div>`;
            } else if (routeBadgeStr || finalPill) {
                // 不滿足分行條件，但在同一行時也要保證順序 (route-badge -> baseBadge -> finalPill)
                let elements = [];
                if (routeBadgeStr) elements.push(routeBadgeStr);
                elements.push(baseBadge);
                if (finalPill) elements.push(finalPill);

                return `<div style="display: inline-flex; flex-wrap: nowrap; align-items: center; gap: 4px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 2px 4px 2px 2px; max-width: 100%; overflow-x: auto;">
                            ${elements.join('')}
                        </div>`;
            }
        }
        return baseBadge;
    },

    updatePageLang: function () {
        LangHandler.renderAllTexts();
        this.updateDynamicLangTexts();
        this.updateTimetablePanelLang();
        this.updatePageTitle();

        const emptySuggestTip = document.getElementById('emptySuggestTip');
        const noMatchSuggestTip = document.getElementById('noMatchSuggestTip');
        if (emptySuggestTip) {
            emptySuggestTip.textContent = LangHandler.getText('emptySuggest');
        }
        if (noMatchSuggestTip) {
            noMatchSuggestTip.textContent = LangHandler.getText('noMatchSuggest');
        }

        this.renderKeyboardFilters();

        if (typeof window.triggerStationSearchLoad === 'function') {
            const stationInput = document.getElementById('stationSearchInput');
            window.triggerStationSearchLoad(stationInput ? stationInput.value : '');
        }

        // --- 新增：動態刷新 P2P 網格語言 ---
        if (typeof P2PManager !== 'undefined' && P2PManager.rawStopsData && P2PManager.rawStopsData.length > 0) {
            P2PManager.renderAllStopsGrid();
        }
    },

    updatePageTitle: function () {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            titleElement.textContent = LangHandler.getText('appTitle');
        }

        const loadingTitle = document.querySelector('.loading-title');
        if (loadingTitle) {
            loadingTitle.textContent = LangHandler.getText('appTitle');
        }
    },

    updateDynamicLangTexts: function () {
        const paginationInfo = document.querySelector('.pagination-info');
        if (paginationInfo && CONFIG.currentRouteData) {
            const validStops = DataHandler.getValidStops(CONFIG.currentRouteData);
            const totalPages = DataHandler.getTotalPages(validStops);
            paginationInfo.textContent = LangHandler.getText('pageLabel', {
                current: CONFIG.currentPage,
                total: totalPages
            });
        }

        const directionBtn = document.querySelector('.toggle-direction-btn');
        if (directionBtn && !directionBtn.disabled && directionBtn.style.display !== 'none') {
            const key = CONFIG.currentDirection === "A" ? 'directionA' : 'directionB';
            if (CONFIG.currentRouteData) {
                const directionInfo = DataHandler.getDirectionStartEndStops(CONFIG.currentRouteData);
                directionBtn.title = `${LangHandler.getText('switchDirection')}`;
            } else {
                directionBtn.title = LangHandler.getText('switchDirection');
            }
        }

        const prevBtn = document.querySelector('.prev-btn');
        if (prevBtn) prevBtn.title = LangHandler.getText('prevPage');

        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) nextBtn.title = LangHandler.getText('nextPage');

        const versionElements = document.querySelectorAll('.app-version');
        versionElements.forEach(el => {
            if (el.textContent.includes('BETA')) {
                el.textContent = el.textContent.replace(LangHandler.getText('appVersion'));
            }
        });
    },

    // 更新运营时间面板语言
    updateTimetablePanelLang: function () {
        const timetablePanel = document.getElementById('timetablePanel');
        if (!timetablePanel) return;

        timetablePanel.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            // 获取元素上的route占位符并替换
            const replacements = {
                route: CONFIG.currentRouteNum || ''
            };
            if (el.tagName === 'INPUT') {
                el.setAttribute('placeholder', LangHandler.getText(key, replacements));
            } else {
                el.textContent = LangHandler.getText(key, replacements);
            }
        });

        // 更新发车间隔单位
        timetablePanel.querySelectorAll('.slot-interval').forEach(el => {
            const intervalText = el.textContent.trim();
            if (intervalText) {
                el.innerHTML = `${intervalText} <span style="font-weight:normal; color:#888;">${LangHandler.getText('minutesPerTrip')}</span>`;
            }
        });
    },

    initKeyboardValidity: function (currentInput) {
        var currentInputUpper = (currentInput || '').toString().toUpperCase().trim();

        var mainKeys = document.querySelectorAll('.main-num-key');
        var subLetterBtns = document.querySelectorAll('.sub-letter-btn');

        // 1. 先將所有按鍵禁用
        if (mainKeys.length > 0) {
            mainKeys.forEach(function (key) {
                key.disabled = true;
                key.style.opacity = CONFIG.keyboardOpacityDisabled;
                key.onclick = function (e) {
                    // --- 防止連點鎖 ---
                    var now = Date.now();
                    // 設定 150 毫秒的冷卻時間
                    if (Renderer._lastClickTime && (now - Renderer._lastClickTime < 150)) {
                        return;
                    }
                    Renderer._lastClickTime = now;
                    // ------------------

                    const input = document.getElementById('routeNumberInput');
                    if (input) {
                        input.value += this.getAttribute('data-key');
                        // 移除 setTimeout，改為直接同步觸發，讓鍵盤狀態能瞬間更新鎖定
                        input.dispatchEvent(new Event('input'));
                    }
                };
            });
        }

        if (subLetterBtns.length > 0) {
            subLetterBtns.forEach(function (btn) {
                btn.disabled = true;
                btn.style.opacity = CONFIG.keyboardOpacityDisabled;
                btn.onclick = function (e) {
                    // --- 防止連點鎖 ---
                    var now = Date.now();
                    if (Renderer._lastClickTime && (now - Renderer._lastClickTime < 150)) {
                        return;
                    }
                    Renderer._lastClickTime = now;
                    // ------------------

                    const input = document.getElementById('routeNumberInput');
                    if (input) {
                        input.value += this.getAttribute('data-key');
                        input.dispatchEvent(new Event('input'));
                    }
                };
            });
        }

        // 2. 處理 deleteBtn 與 clearBtn (移到前方，避免被 early return 跳過)
        const deleteBtn = document.getElementById('keyboardDeleteBtn');
        const clearBtn = document.getElementById('keyboardClearBtn');
        const input = document.getElementById('routeNumberInput');

        // 判斷按鈕是否可點擊 (只要有輸入「或」有篩選條件，就可以點擊)
        const hasInput = currentInputUpper.length > 0;
        const hasFilter = CONFIG.activeFilters.operator !== null || CONFIG.activeFilters.type !== null;

        if (deleteBtn) {
            deleteBtn.disabled = !(hasInput || hasFilter);
            deleteBtn.style.opacity = deleteBtn.disabled ? CONFIG.keyboardOpacityDisabled : CONFIG.keyboardOpacityEnabled;

            deleteBtn.onclick = function () {
                // 清空篩選狀態
                CONFIG.activeFilters.operator = null;
                CONFIG.activeFilters.type = null;

                if (input && input.value.length > 0) {
                    input.value = input.value.substring(0, input.value.length - 1);
                    input.dispatchEvent(new Event('input'));
                    input.dispatchEvent(new Event('change'));
                } else {
                    // 輸入框本來就是空的話，手動觸發連動更新
                    Renderer.renderRouteSuggestions('');
                    Renderer.initKeyboardValidity('');
                }
            };
        }

        if (clearBtn) {
            clearBtn.disabled = !(hasInput || hasFilter);
            clearBtn.style.opacity = clearBtn.disabled ? CONFIG.keyboardOpacityDisabled : CONFIG.keyboardOpacityEnabled;

            clearBtn.onclick = function () {
                // 清空篩選狀態
                CONFIG.activeFilters.operator = null;
                CONFIG.activeFilters.type = null;

                if (input) {
                    input.value = '';
                    input.dispatchEvent(new Event('input'));
                    input.dispatchEvent(new Event('change'));
                } else {
                    // 輸入框本來就是空的話，手動觸發連動更新
                    Renderer.renderRouteSuggestions('');
                    Renderer.initKeyboardValidity('');
                }
            };
        }

        // 3. 處理鍵盤可按鍵的亮起邏輯 (嚴格結合最新的篩選條件)
        if (!currentInputUpper) {
            var firstChars = new Set();
            var filteredRoutes = DataHandler.getMatchedRoutes('');
            filteredRoutes.forEach(function (routeItem) {
                if (routeItem.route.length > 0) {
                    firstChars.add(routeItem.route.charAt(0).toUpperCase());
                }
            });

            if (mainKeys.length > 0) {
                mainKeys.forEach(function (key) {
                    var keyValue = key.getAttribute('data-key');
                    if (firstChars.has(keyValue)) {
                        key.disabled = false;
                        key.style.opacity = CONFIG.keyboardOpacityEnabled;
                    }
                });
            }

            if (subLetterBtns.length > 0) {
                subLetterBtns.forEach(function (btn) {
                    var btnValue = btn.getAttribute('data-key');
                    if (firstChars.has(btnValue)) {
                        btn.disabled = false;
                        btn.style.opacity = CONFIG.keyboardOpacityEnabled;
                    }
                });
            }

            this.renderKeyboardFilters();
            return;
        }

        var matchedRoutes = DataHandler.getMatchedRoutes(currentInputUpper);
        if (matchedRoutes.length > 0) {
            var nextChars = new Set();
            matchedRoutes.forEach(function (routeItem) {
                var rNum = routeItem.route.toUpperCase();
                if (rNum.length > currentInputUpper.length) {
                    nextChars.add(rNum.charAt(currentInputUpper.length));
                }
            });

            if (mainKeys.length > 0) {
                mainKeys.forEach(function (key) {
                    var keyValue = key.getAttribute('data-key');
                    if (nextChars.has(keyValue)) {
                        key.disabled = false;
                        key.style.opacity = CONFIG.keyboardOpacityEnabled;
                    }
                });
            }

            if (subLetterBtns.length > 0) {
                subLetterBtns.forEach(function (btn) {
                    var btnValue = btn.getAttribute('data-key');
                    if (nextChars.has(btnValue)) {
                        btn.disabled = false;
                        btn.style.opacity = CONFIG.keyboardOpacityEnabled;
                    }
                });
            }
        }

        // 4. 更新鍵盤篩選器 UI
        this.renderKeyboardFilters();
    },

    renderRouteSuggestions: function (currentInput) {
        var suggestList = document.getElementById('suggestList');
        if (!suggestList) return;
        suggestList.innerHTML = '';

        var currentInputUpper = (currentInput || '').toString().toUpperCase().trim();
        var matchedRoutes = DataHandler.getMatchedRoutes(currentInputUpper);

        // [刪除] 這裡原本有一段 CONFIG.activeFilters.operator 的 redundant filter，已經刪除了，因為 getMatchedRoutes 已包含過濾邏輯

        if (!matchedRoutes || matchedRoutes.length === 0) {
            var emptyItem = document.createElement('div');
            emptyItem.className = 'empty-suggest';
            emptyItem.style.textAlign = 'center';
            emptyItem.style.padding = '20px';
            emptyItem.style.color = '#999';
            emptyItem.textContent = currentInputUpper
                ? LangHandler.getText('noMatchSuggest')
                : LangHandler.getText('emptySuggest');
            emptyItem.id = currentInputUpper ? 'noMatchSuggestTip' : 'emptySuggestTip';
            emptyItem.setAttribute('data-lang-key', currentInputUpper ? 'noMatchSuggest' : 'emptySuggest');
            suggestList.appendChild(emptyItem);
            return;
        }

        var fragment = document.createDocumentFragment();

        matchedRoutes.forEach(function (routeItem) {
            try {
                var routeNum = routeItem.route; // 讀取顯示用的路線名稱
                var suggestItem = document.createElement('div');
                suggestItem.className = 'suggest-item';
                suggestItem.setAttribute('data-route-id', routeItem._id);

                var routeName = CONFIG.currentLang === 'zh-CN'
                    ? (routeItem.name || routeItem.routeNameCn || routeNum)
                    : (routeItem.routeNameEn || routeItem.name || routeNum);

                var allShiftsInfo = [];
                if (typeof DataHandler.getAllShiftsStartEndInfo === 'function') {
                    allShiftsInfo = DataHandler.getAllShiftsStartEndInfo(routeItem);
                }

                var shiftsHtml = '';
                if (allShiftsInfo.length > 0) {
                    shiftsHtml += '';
                    allShiftsInfo.forEach(function (shiftInfo) {
                        var isLoop = DataHandler.isShiftCircular(routeItem, shiftInfo.shiftKey, shiftInfo.bound);
                        var isTwoWay = shiftInfo.bound === "A,B";
                        var loopSvg = '<svg class="route-loop-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.36l5.67-5.67"/></svg>';
                        var twoWaySvg = '<svg class="route-arrow-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><polyline points="8 4 4 8 8 12"></polyline><line x1="4" y1="8" x2="20" y2="8"></line><polyline points="16 20 20 16 16 12"></polyline><line x1="20" y1="16" x2="4" y2="16"></line></svg>';
                        var arrowSvg = '<svg class="route-arrow-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

                        var separator = isLoop ? loopSvg : (isTwoWay ? twoWaySvg : arrowSvg);

                        let match = shiftInfo.name.match(/^(.+?)\s*\((.+?)\)$/);
                        let currentTextColor = shiftInfo.textColor || '#ffffff';

                        if (match) {
                            shiftNameHtml = `
                                <span class="route-badge" style="background-color: ${shiftInfo.color}; --route-badge-bg: ${shiftInfo.color}; --route-badge-color: ${currentTextColor}; color: ${currentTextColor};">${match[1].trim()}</span>
                                <span class="suggest-shift-name" style="background-color: ${shiftInfo.color}; color: ${currentTextColor};">${match[2].trim()}</span>
                            `;
                        } else {
                            shiftNameHtml = `<span class="suggest-shift-name" style="background-color: ${shiftInfo.color}; color: ${currentTextColor};">${shiftInfo.name}</span>`;
                        }

                        shiftsHtml += `
                            <div class="suggest-shift-item">
                                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 4px;">
                                    ${shiftNameHtml}
                                </div>
                                <div class="suggest-shift-path">
                                    <span class="path-node">${shiftInfo.start}</span>
                                    ${separator}
                                    <span class="path-node">${shiftInfo.end}</span>
                                </div>
                            </div>
                        `;
                    });
                    shiftsHtml += '</div>';
                } else {
                    shiftsHtml = `<div class="suggest-shift-empty">${LangHandler.getText('noShiftInformation')}</div>`;
                }

                var typeText = DataHandler.getRouteTypeDisplay(routeItem);
                var firstShiftColor = '#2563eb';
                var textColor = '#ffffff';
                var enabledShifts = DataHandler.getEnabledShifts(routeItem);
                if (enabledShifts && enabledShifts.length > 0) {
                    var firstConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
                    firstShiftColor = firstConfig.color || firstShiftColor;
                    textColor = firstConfig.textColor || textColor;
                }
                var unlockLevels = DataHandler.getRouteUnlockLevels(routeItem);
                var levelHtml = '';
                if (unlockLevels.length > 0) {
                    var levelsOnly = unlockLevels.map(l => l.level).filter(l => l !== undefined && l !== null);
                    var sunshardsOnly = unlockLevels.map(l => l.sunshards).filter(s => s !== undefined && s !== null);
                    var routesOnly = [];
                    unlockLevels.forEach(l => {
                        if (l.routes && Array.isArray(l.routes)) {
                            l.routes.forEach(r => { if (!routesOnly.includes(r)) routesOnly.push(r); });
                        }
                    });

                    var minLevel = levelsOnly.length > 0 ? Math.min(...levelsOnly) : null;
                    var maxLevel = levelsOnly.length > 0 ? Math.max(...levelsOnly) : null;
                    var minSunshards = sunshardsOnly.length > 0 ? Math.min(...sunshardsOnly) : null;
                    var maxSunshards = sunshardsOnly.length > 0 ? Math.max(...sunshardsOnly) : null;

                    var parts = [];

                    if (minLevel !== null) {
                        var levelText = minLevel === maxLevel ? `Lv.${minLevel}` : `Lv.${minLevel} - ${maxLevel}`;
                        var levelSvg = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
                        parts.push(`<span class="badge-common level-badge level-badge-lvl">${levelSvg}${levelText}</span>`);
                    }

                    if (minSunshards !== null) {
                        var sunshardsText = minSunshards === maxSunshards ? minSunshards : `${minSunshards} - ${maxSunshards}`;
                        var sunshardsSvg = `<svg viewBox="0 0 100 100" width="18" height="18" style="margin-right: 4px;"><circle cx="50" cy="50" r="16" fill="currentColor"/><g stroke="currentColor" stroke-width="6" stroke-linecap="round"><line x1="50" y1="18" x2="50" y2="24" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(45 50 50)" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(90 50 50)" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(135 50 50)" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(180 50 50)" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(225 50 50)" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(270 50 50)" /><line x1="50" y1="18" x2="50" y2="24" transform="rotate(315 50 50)" /></g></svg>`;
                        parts.push(`<span class="badge-common level-badge level-badge-sunshards">${sunshardsSvg}${sunshardsText}</span>`);
                    }

                    if (routesOnly.length > 0) {
                        var routesHtml = routesOnly.map(r => {
                            var routeItemObj = DataHandler.getFirstRouteByNum(r); // [修改] 使用 getFirstRouteByNum 避免報錯
                            var bg = '#4a90e2', txt = '#ffffff';
                            if (routeItemObj) {
                                var sh = DataHandler.getEnabledShifts(routeItemObj);
                                if (sh && sh.length > 0) {
                                    var cfg = DataHandler.getShiftConfig(routeItemObj, sh[0]);
                                    if (cfg.color) bg = cfg.color;
                                    if (cfg.textColor) txt = cfg.textColor;
                                }
                            }
                            return `<span class="route-badge" style="--route-badge-bg: ${bg}; --route-badge-color: ${txt}; background-color: ${bg}; color: ${txt}; padding: 2px 6px; font-size: 11px; border-radius: 4px; margin-left: 2px; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.2); min-width: auto; height: auto; line-height: 1;">${r}</span>`;
                        }).join('');

                        var routesSvg = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px; flex-shrink: 0;"><path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2"/><circle cx="16" cy="17" r="2"/><path d="M9 17h5"/><circle cx="7" cy="17" r="2"/></svg>`;
                        parts.push(`<span class="badge-common level-badge level-badge-routes" style="display:inline-flex; align-items:center; flex-wrap: wrap; padding-right: 6px;">${routesSvg}${routesHtml}</span>`);
                    }

                    var uniqueDates = [];
                    unlockLevels.forEach(l => {
                        var isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
                        var dateText = isZh ? l.unlockDateCn : (l.unlockDateEn || l.unlockDateCn);
                        if (dateText && !uniqueDates.includes(dateText)) {
                            uniqueDates.push(dateText);
                        }
                    });

                    if (uniqueDates.length > 0) {
                        var dateSvg = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
                        uniqueDates.forEach(d => {
                            parts.push(`<span class="badge-common level-badge level-badge-date">${dateSvg}${d}</span>`);
                        });
                    }

                    if (parts.length > 0) {
                        levelHtml = parts.join('');
                    }
                }

                var operatorBadgesHtml = (routeItem.operators || []).map(op => `<span class="badge-common operator-badge" data-operator="${op}">${op}</span>`).join('');
                var typeBadgesHtml = (routeItem.typeTags || []).map(t => Renderer.renderTypeBadge(t, routeItem)).join('');
                const totalBadges = (routeItem.operators || []).length + (routeItem.typeTags || []).length;
                const footerClass = totalBadges <= 3 ? 'suggest-badges-footer split-rows' : 'suggest-badges-footer';

                suggestItem.innerHTML = `
                    <div class="suggest-route-header">
                        <span class="route-badge" style="--route-badge-bg: ${firstShiftColor}; --route-badge-color: ${textColor};">${routeName || LangHandler.getText('noInformation')}</span>
                        ${typeText ? `<span class="suggest-route-type" style="color: ${firstShiftColor}; border-color: ${firstShiftColor}4d; background: ${firstShiftColor}1a;">${typeText}</span>` : ''}
                    </div>
                    ${shiftsHtml}
                    
                    <div class="${footerClass}">
                        <div class="operator-group">
                            ${operatorBadgesHtml}
                        </div>
                        <div class="type-group">
                            ${typeBadgesHtml}
                        </div>
                        ${levelHtml ? `<div class="level-group">${levelHtml}</div>` : ''}
                    </div>
                `;

                suggestItem.addEventListener('click', function () {
                    if (routeNum === 'S1' || routeNum === 'S2') {
                        window.location.href = './travel/index.html';
                        return;
                    }

                    CONFIG.currentRouteNum = routeNum;
                    CONFIG.currentRouteId = routeItem._id;
                    CONFIG.currentPage = 1;

                    var boundStr = DataHandler.getRouteBound(routeItem) || "A";
                    var boundsArray = boundStr.split(',');
                    var firstBound = boundsArray[0];
                    for (var b of boundsArray) {
                        if (routeItem.stops && routeItem.stops[b] && routeItem.stops[b].length > 0) {
                            firstBound = b;
                            break;
                        }
                    }
                    CONFIG.currentDirection = firstBound;

                    Renderer.renderStopPage(routeItem._id);
                });

                fragment.appendChild(suggestItem);
            } catch (e) {
                console.error('渲染线路建议项失败:', routeNum, e);
            }
        });

        suggestList.innerHTML = '';
        suggestList.appendChild(fragment);
    },

    renderStopPage: function (routeId) {
        var stopContainer = document.getElementById('stopContainer');
        var stopPageTitle = document.getElementById('stopPageTitle');
        if (!stopContainer || !stopPageTitle) return;

        document.getElementById('inputScreen').classList.add('hidden');
        document.getElementById('stopScreen').classList.remove('hidden');
        stopContainer.innerHTML = '';

        var routeItem = DataHandler.getRouteById(routeId); // [修改] 使用 getRouteById
        if (!routeItem) {
            stopContainer.innerHTML = `<div class="empty-tip">${CONFIG.emptyTipText[CONFIG.currentLang]}</div>`;
            stopPageTitle.textContent = LangHandler.getText('stopPageTitleWithRoute', {
                route: LangHandler.getText('unknownRoute')
            });
            return;
        }

        stopPageTitle.textContent = LangHandler.getText('stopPageTitleWithRoute', {
            route: routeItem.route
        });

        CONFIG.currentRouteData = routeItem;

        var bound = DataHandler.getRouteBound(routeItem);
        var targetDirection = CONFIG.currentDirection;
        CONFIG.enabledShifts = DataHandler.getEnabledShifts(routeItem, targetDirection);

        // 綁定右上角 Header 搜尋框
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            const newSearchInput = searchInput.cloneNode(true);
            searchInput.parentNode.replaceChild(newSearchInput, searchInput);
            newSearchInput.value = '';
            newSearchInput.addEventListener('input', debounce(() => {
                this.filterStops(newSearchInput.value.trim());
            }, 150));
        }

        // --- 依序掛載全新排版的組件 ---
        stopContainer.appendChild(this.renderRouteInfoBar(routeItem));
        this.renderStopList(routeItem);
        stopContainer.appendChild(this.renderPaginationControl(routeItem)); // 將分頁放在表格下方
        this.renderShiftLines(routeItem);

        this.updatePageLang();
    },

    renderPaginationControl: function (routeItem) {
        var wrap = document.createElement('div');
        wrap.className = 'pagination-wrapper-modern';

        var paginationControl = document.createElement('div');
        paginationControl.className = 'pagination-control modern-pagination';

        var prevBtn = document.createElement('button');
        prevBtn.className = 'action-btn-modern pagination-btn prev-btn';
        prevBtn.title = LangHandler.getText('prevPage');
        prevBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        `;

        var paginationInfo = document.createElement('div');
        paginationInfo.className = 'pagination-info modern-pagination-info';

        var nextBtn = document.createElement('button');
        nextBtn.className = 'action-btn-modern pagination-btn next-btn';
        nextBtn.title = LangHandler.getText('nextPage');
        nextBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        `;

        var validStops = DataHandler.getValidStops(routeItem);
        var totalPages = DataHandler.getTotalPages(validStops);

        paginationInfo.textContent = LangHandler.getText('pageLabel', {
            current: CONFIG.currentPage,
            total: totalPages
        });

        prevBtn.disabled = CONFIG.currentPage <= 1;
        nextBtn.disabled = CONFIG.currentPage >= totalPages;

        if (prevBtn.disabled) {
            prevBtn.style.opacity = '0.4';
            prevBtn.style.cursor = 'not-allowed';
        }
        if (nextBtn.disabled) {
            nextBtn.style.opacity = '0.4';
            nextBtn.style.cursor = 'not-allowed';
        }

        prevBtn.addEventListener('click', function () {
            if (CONFIG.currentPage > 1) {
                CONFIG.currentPage--;
                Renderer.renderStopPage(routeItem._id);
            }
        });

        nextBtn.addEventListener('click', function () {
            if (CONFIG.currentPage < totalPages) {
                CONFIG.currentPage++;
                Renderer.renderStopPage(routeItem._id);
            }
        });

        paginationControl.appendChild(prevBtn);
        paginationControl.appendChild(paginationInfo);
        paginationControl.appendChild(nextBtn);

        wrap.appendChild(paginationControl);

        return wrap;
    },

    // 在 Renderer 物件內新增
    renderSearchBar: function (routeItem) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
        <span style="color:#94a3b8; font-size:18px;">🔍</span>
        <input type="text" id="stopSearchInput" class="search-input" 
               placeholder="${LangHandler.getText('searchStopPlaceholder') || '搜尋站點...'}" />
    `;

        const input = searchContainer.querySelector('#stopSearchInput');
        input.addEventListener('input', debounce(() => {
            this.filterStops(input.value.trim());
        }, 150));

        return searchContainer;
    },

    filterStops: function (keyword) {
        const rows = document.querySelectorAll('.stop-row-visible');
        const lowerKeyword = keyword.toLowerCase();

        rows.forEach(row => {
            const nameCell = row.querySelector('td:last-child');
            if (!nameCell) return;

            const text = nameCell.textContent.toLowerCase();
            row.style.display = text.includes(lowerKeyword) ? '' : 'none';
        });
    },

    renderShiftLines: function (routeItem) {
        if (!routeItem || CONFIG.enabledShifts.length === 0) return;

        const allValidStops = DataHandler.getValidStops(routeItem);
        const currentPageStops = DataHandler.getStopsByPage(allValidStops, CONFIG.currentPage);

        CONFIG.enabledShifts.forEach(function (shiftKey) {
            var shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
            var shiftColor = shiftConfig.color;

            var visibleShiftStops = currentPageStops.filter(stop =>
                DataHandler.isStopInShiftRange(routeItem, stop, shiftKey)
            );

            if (visibleShiftStops.length === 0) return;

            var pageFirstStop = visibleShiftStops[0];
            var pageLastStop = visibleShiftStops[visibleShiftStops.length - 1];

            var isAbsoluteStart = DataHandler.isShiftStartStop(routeItem, pageFirstStop, shiftKey);
            var isAbsoluteEnd = DataHandler.isShiftEndStop(routeItem, pageLastStop, shiftKey);

            var firstStopEl = document.querySelector(
                `.single-shift-seq-wrap[data-shift-key="${shiftKey}"][data-stop-seq="${pageFirstStop.seq}"]`
            );
            var lastStopEl = document.querySelector(
                `.single-shift-seq-wrap[data-shift-key="${shiftKey}"][data-stop-seq="${pageLastStop.seq}"]`
            );

            if (!firstStopEl || !lastStopEl) return;

            firstStopEl.classList.remove('shift-start-stop', 'shift-arrow-top', 'shift-in-range-container');
            lastStopEl.classList.remove('shift-end-stop', 'shift-arrow-bottom');

            var firstRect = firstStopEl.getBoundingClientRect();
            var lastRect = lastStopEl.getBoundingClientRect();

            var startTop = isAbsoluteStart ? (firstRect.height / 2) : -4;
            var endBottomOffset = isAbsoluteEnd ? (lastRect.height / 2) : (lastRect.height + 4);
            var lineDistance = (lastRect.top + endBottomOffset) - (firstRect.top + startTop);

            firstStopEl.classList.add('shift-in-range-container');
            firstStopEl.style.setProperty('--shift-start-top', `${startTop}px`);
            firstStopEl.style.setProperty('--shift-line-height', `${lineDistance}px`); // 改用 line-height 變數
            firstStopEl.style.setProperty('--shift-color', shiftColor);

            if (isAbsoluteStart) {
                firstStopEl.classList.add('shift-start-stop');
            } else {
                firstStopEl.classList.add('shift-arrow-top');
            }

            if (isAbsoluteEnd) {
                lastStopEl.classList.add('shift-end-stop');
            } else {
                lastStopEl.classList.add('shift-arrow-bottom');
            }
        });
    },

    // ==========================================
    // 1. 路線資訊卡 (主函式)
    // ==========================================
    renderRouteInfoBar: function (routeItem) {
        const routeInfoBar = document.createElement('div');
        routeInfoBar.className = 'route-info-bar';

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        const targetDirection = CONFIG.currentDirection;
        const enabledShifts = DataHandler.getEnabledShifts(routeItem, targetDirection);
        let isLoop = routeItem.circular === true;
        if (enabledShifts && enabledShifts.length > 0) {
            // 依據畫面上首個啟用的班次來決定主板面是否顯示為循環
            isLoop = DataHandler.isShiftCircular(routeItem, enabledShifts[0], targetDirection);
        }
        const directionInfo = DataHandler.getDirectionStartEndStops(routeItem);

        let mainRouteColor = '#4a90e2';
        let mainTextColor = routeItem.textColor || '#ffffff';
        if (enabledShifts && enabledShifts.length > 0) {
            const firstShiftConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
            if (firstShiftConfig) {
                if (firstShiftConfig.color) mainRouteColor = firstShiftConfig.color;
                if (firstShiftConfig.textColor) mainTextColor = firstShiftConfig.textColor;
            }
        }
        routeInfoBar.style.setProperty('--route-main-color', mainRouteColor);

        const basicInfo = document.createElement('div');
        basicInfo.className = 'route-basic-info';

        this._buildBasicInfoElements(basicInfo, routeItem, mainRouteColor, mainTextColor, isZh, isLoop, directionInfo, enabledShifts);
        basicInfo.appendChild(this._buildActionButtons(routeItem, mainRouteColor, mainTextColor, isZh, isLoop, directionInfo));

        const details = this._buildMiniTimeline(routeItem, isZh, isLoop, directionInfo, enabledShifts);

        routeInfoBar.appendChild(basicInfo);
        routeInfoBar.appendChild(details);

        return routeInfoBar;
    },

    _buildMiniTimeline: function (routeItem, isZh, isLoop, dirInfo, enabledShifts) {
        const details = document.createElement('div');
        details.className = 'route-details-modern';

        let nodesHTML = `
        <div class="mini-timeline-container">
            <div class="mini-timeline-header">
                <div class="mini-timeline-header-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="6" cy="19" r="3"></circle>
                        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                        <circle cx="18" cy="5" r="3"></circle>
                    </svg>
                </div>
                <span class="title">${LangHandler.getText('viaDirection') || '班次途經路線圖'}</span>
            </div>
            <div class="mini-timeline-scroll-area">
    `;

        let shiftGroups = [];
        const dir = CONFIG.currentDirection || 'A';
        enabledShifts.forEach((shiftKey) => {
            const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
            const shiftViaData = routeItem.viaDirections?.[dir]?.[shiftKey] || routeItem.viaDirections?.[shiftKey]?.[dir] || routeItem.viaDirections?.[shiftKey];

            const viaCn = shiftViaData?.viaCn || routeItem.viaDirectionCn || '';
            const viaEn = shiftViaData?.viaEn || routeItem.viaDirectionEn || '';
            const viaText = isZh ? viaCn : (viaEn || viaCn);

            if (!viaText || viaText === LangHandler.getText('noInformation')) return;
            shiftGroups.push({ shiftKey, shiftConfig, viaText });
        });

        shiftGroups.forEach((group, index) => {
            const startIcon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><circle cx="12" cy="12" r="7"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>`;
            const viaIcon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
            const endIcon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><circle cx="12" cy="12" r="7"></circle><rect x="9" y="9" width="6" height="6" fill="currentColor" stroke="none"></rect></svg>`;

            const shiftBound = routeItem.viaDirections?.[dir]?.[group.shiftKey]?.bound || routeItem.viaDirections?.[group.shiftKey]?.bound || dir;
            const isShiftLoop = DataHandler.isShiftCircular(routeItem, group.shiftKey, dir);
            const shiftStartEnd = DataHandler.getShiftStartEnd(routeItem, group.shiftKey, dir);

            const actualStartName = shiftStartEnd.start;

            const shiftStopsForTimeline = DataHandler.getShiftStopStops(routeItem, group.shiftKey);
            const lastStopObj = shiftStopsForTimeline.length > 0 ? shiftStopsForTimeline[shiftStopsForTimeline.length - 1] : null;
            const actualEndName = lastStopObj ? (isZh ? (lastStopObj.nameCn || '').replace(/\^\^/g, '') : (lastStopObj.nameEn || lastStopObj.nameCn || '').replace(/\^\^/g, '')) : shiftStartEnd.end;

            let viaNodes = group.viaText.split(/[、,]/).map(s => s.trim()).filter(s => s && s !== LangHandler.getText('noInformation'));
            const allNodes = [
                { name: actualStartName, type: 'start' },
                ...viaNodes.map(name => ({ name, type: 'via' })),
                { name: actualEndName, type: 'end' }
            ];

            const isHidden = index > 0 ? 'style="display: none;"' : '';
            const groupClass = index > 0 ? 'shift-timeline-group extra-shift-group' : 'shift-timeline-group';

            nodesHTML += `
            <div class="${groupClass}" ${isHidden}>
                <div class="shift-timeline-label" style="color: ${group.shiftConfig.color}; margin-bottom: 16px;">
                    <span class="shift-color-dot" style="background: ${group.shiftConfig.color}"></span>
                    ${group.shiftConfig.label}
                </div>
                <div class="mini-timeline-list">
        `;

            allNodes.forEach(node => {
                let innerText = viaIcon;
                let seqClass = 'shift-via-stop';
                let isTurningPoint = false;
                let displayName = node.name;

                if (displayName.includes('^^')) {
                    isTurningPoint = true;
                    displayName = displayName.replace(/\^\^/g, '');
                }

                if (node.type === 'start') {
                    innerText = startIcon;
                    seqClass = 'shift-start-stop';
                } else if (node.type === 'end') {
                    innerText = endIcon;
                    seqClass = 'shift-end-stop';
                }

                let tpTagHtml = '';
                if (isShiftLoop && isTurningPoint && node.type === 'via') {
                    tpTagHtml = `<div class="turning-point-tag" style="position: absolute; top: -30px; font-size: 11px; padding: 2px 8px; border-radius: 10px; background: #fee2e2; color: #ef4444; white-space: nowrap; border: 1px solid #fca5a5; font-weight: 600; box-shadow: 0 2px 4px rgba(239, 68, 68, 0.1); z-index: 10;">${isZh ? '轉折點' : 'Turning Point'}</div>`;
                }

                nodesHTML += `
                <div class="mini-timeline-item" style="--shift-color: ${group.shiftConfig.color};">
                    <div class="mini-timeline-visual" style="position: relative; display: flex; justify-content: center;">
                        ${tpTagHtml}
                        <div class="single-shift-seq-wrap ${seqClass}" style="--shift-color: ${group.shiftConfig.color};">
                            <div class="shift-seq-text">${innerText}</div>
                        </div>
                    </div>
                    <div class="mini-timeline-info">
                        <div class="stop-main-name">${displayName}</div>
                    </div>
                </div>
            `;
            });
            nodesHTML += `</div></div>`;
        });
        nodesHTML += `</div>`;

        if (shiftGroups.length > 1) {
            nodesHTML += `
            <button id="expandShiftsBtn" style="width: 100%; margin-top: 16px; padding: 12px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 12px; color: #64748b; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
                ${isZh ? '查看其他班次 ↓' : 'View Other Shifts ↓'}
            </button>
        `;
        }

        nodesHTML += `</div>`;
        details.innerHTML = nodesHTML;

        setTimeout(() => {
            const btn = details.querySelector('#expandShiftsBtn');
            if (btn) {
                let isExpanded = false;
                btn.addEventListener('click', () => {
                    isExpanded = !isExpanded;
                    details.querySelectorAll('.extra-shift-group').forEach(g => {
                        g.style.display = isExpanded ? 'block' : 'none';
                    });
                    btn.innerHTML = isExpanded
                        ? (isZh ? '收起班次 ↑' : 'Collapse Shifts ↑')
                        : (isZh ? '查看其他班次 ↓' : 'View Other Shifts ↓');
                });
            }
        }, 0);

        return details;
    },

    renderInfoModal: function (routeItem) {
        const oldOverlay = document.getElementById('info-popup-overlay');
        if (oldOverlay) oldOverlay.remove();

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        var mainRouteColor = '#4a90e2';
        var textColor = routeItem.textColor || '#ffffff';
        const enabledShifts = DataHandler.getEnabledShifts(routeItem);
        if (enabledShifts && enabledShifts.length > 0) {
            const firstShiftConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
            if (firstShiftConfig && firstShiftConfig.color) mainRouteColor = firstShiftConfig.color;
        }

        const overlay = document.createElement('div');
        overlay.id = 'info-popup-overlay';
        overlay.className = 'timetable-panel-overlay modern-blur';

        const content = document.createElement('div');
        content.className = 'timetable-panel-content';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'timetable-panel-close-modern';
        closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        closeBtn.addEventListener('click', () => overlay.remove());
        content.appendChild(closeBtn);

        const header = document.createElement('div');
        header.className = 'timetable-panel-header-modern';
        const titleText = isZh ? `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> 更多資訊` : `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> More Info`;
        header.innerHTML = `<h2 class="panel-title-modern">${titleText}</h2>`;
        content.appendChild(header);

        const body = document.createElement('div');
        body.className = 'fare-modal-body';
        body.style.display = 'flex';
        body.style.flexDirection = 'column';
        body.style.gap = '12px';
        body.style.padding = '8px 0';

        let hasInfo = false;

        const createInfoRow = (title, badgesHTML) => {
            return `
            <div class="info-row-container">
                <div class="info-row-label">${title}</div>
                <div class="info-row-badges">${badgesHTML}</div>
            </div>`;
        };
        if (routeItem.zones && routeItem.zones.length > 0) {
            hasInfo = true;
            let badges = routeItem.zones.map(z => `<span class="badge-common zone-badge" style="font-size:13px; padding:6px 12px; margin:0;">${z}</span>`).join('');
            body.innerHTML += createInfoRow(isZh ? '區域' : 'Zone', badges);
        }
        if (routeItem.operators && routeItem.operators.length > 0) {
            hasInfo = true;
            let badges = routeItem.operators.map(op => `<span class="badge-common operator-badge" data-operator="${op}" style="font-size:13px; padding:6px 12px; margin:0;">${op}</span>`).join('');
            body.innerHTML += createInfoRow(isZh ? '營運商' : 'Operator', badges);
        }
        if (routeItem.typeTags && routeItem.typeTags.length > 0) {
            hasInfo = true;
            let badges = routeItem.typeTags.map(t => {
                let typeVal = typeof t === 'string' ? t : t.type;
                let typeKey = 'type' + typeVal.replace(/\s+/g, '');
                let transText = LangHandler.getText(typeKey);
                if (transText === typeKey) transText = typeVal;

                let baseBadge = `<span class="badge-common type-badge" data-type="${typeVal}" style="font-size:13px; padding:6px 12px; margin:0;">${transText}</span>`;

                if (typeof t === 'object' && t.shift) {
                    let shiftConfig = DataHandler.getShiftConfig(routeItem, t.shift);
                    let shiftLabel = shiftConfig ? shiftConfig.label : t.shift;
                    let shiftColor = shiftConfig ? shiftConfig.color : '#4a90e2';

                    let shiftTagHTML = `<span class="shift-tag" style="background-color: ${shiftColor}; border-color: ${shiftColor}; margin-left: 0;">${shiftLabel}</span>`;

                    return `<div style="display: inline-flex; flex-wrap: nowrap; align-items: center; gap: 4px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 2px 4px 2px 2px; max-width: 100%; overflow-x: auto;">
                                ${baseBadge}
                                ${shiftTagHTML}
                            </div>`;
                }
                return baseBadge;
            }).join('');

            body.innerHTML += createInfoRow(isZh ? '路線類型' : 'Route Type', `<div style="display:flex; justify-content: flex-end; flex-wrap:wrap; gap:8px;">${badges}</div>`);
        }

        var targetDirection = CONFIG.currentDirection;
        var allRouteCodes = DataHandler.getRouteCodes(routeItem);
        var currentRouteCodes = allRouteCodes.filter(c => !c.bound || c.bound.includes(targetDirection));

        if (currentRouteCodes.length > 0) {
            hasInfo = true;
            let badges = '';

            if (currentRouteCodes.length > 1) {
                let badgeList = currentRouteCodes.map(c => {
                    let shiftConfig = DataHandler.getShiftConfig(routeItem, c.shift);
                    let shiftLabel = shiftConfig ? shiftConfig.label : c.shift;
                    let shiftColor = shiftConfig ? shiftConfig.color : '#4a90e2';

                    return `<div style="display: flex; align-items: center; gap: 8px;">
                                <span class="shift-tag" style="background-color: ${shiftColor}; border-color: ${shiftColor};">${shiftLabel}</span>
                                <span class="badge-common route-code-badge" style="font-size:13px; padding:6px 12px; margin:0;">${c.code}</span>
                            </div>`;
                }).join('');
                badges = `<div style="display: flex; flex-direction: column; gap: 8px; align-items: flex-end;">${badgeList}</div>`;
            } else {
                let text = currentRouteCodes[0].code;
                badges = `<span class="badge-common route-code-badge" style="font-size:13px; padding:6px 12px; margin:0;">${text}</span>`;
            }
            body.innerHTML += createInfoRow(isZh ? '路綫代碼' : 'Route Code', badges);
        }

        if (routeItem.wikiLink) {
            hasInfo = true;
            let wikiBtn = `<a href="${routeItem.wikiLink}" target="_blank" class="info-wiki-btn">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Wiki
            </a>`;
            body.innerHTML += createInfoRow(isZh ? '維基百科' : 'Wiki', wikiBtn);
        }

        if (!hasInfo) {
            body.innerHTML = `<span style="color:#94a3b8; font-size:14px; display:block; text-align:center; padding: 20px;">${LangHandler.getText('noInformation')}</span>`;
        }

        content.appendChild(body);
        overlay.appendChild(content);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
    },

    renderNearbyRoutesModal: function (stop, currentRouteItem) {
        const oldOverlay = document.getElementById('nearby-routes-overlay');
        if (oldOverlay) oldOverlay.remove();

        const overlay = document.createElement('div');
        overlay.id = 'nearby-routes-overlay';
        overlay.className = 'timetable-panel-overlay modern-blur';

        const content = document.createElement('div');
        content.className = 'timetable-panel-content';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'timetable-panel-close-modern';
        closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        closeBtn.addEventListener('click', () => overlay.remove());
        content.appendChild(closeBtn);

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        const stopName = isZh ? stop.nameCn.replace(/\^\^/g, '') : (stop.nameEn || stop.nameCn).replace(/\^\^/g, '');

        const header = document.createElement('div');
        header.className = 'timetable-panel-header-modern';
        header.innerHTML = `<h2 class="panel-title-modern">${stopName} <span class="dest-pill" style="background: #e2e8f0; color: #334155;">${LangHandler.getText('nearbyRoutes')}</span></h2>`;
        content.appendChild(header);

        const body = document.createElement('div');
        body.className = 'station-list-container';
        body.style.maxHeight = '50vh';
        body.style.overflowY = 'auto';

        const allRoutes = DataHandler.getValidRoutes();
        const sameRouteResults = [];
        const otherRouteResults = [];
        const seen = new Set();

        const baseCn = (stop.nameCn || '').replace(/\^\^/g, '');
        const baseEn = (stop.nameEn || '').replace(/\^\^/g, '');

        allRoutes.forEach(r => {
            ['A', 'B', 'C'].forEach(dir => {
                if (r.stops && r.stops[dir]) {
                    const matchedStopIndex = r.stops[dir].findIndex(s => {
                        if (!s.visible) return false;
                        const sCn = (s.nameCn || '').replace(/\^\^/g, '');
                        const sEn = (s.nameEn || '').replace(/\^\^/g, '');
                        return sCn === baseCn || (baseEn && sEn === baseEn);
                    });

                    if (matchedStopIndex !== -1) {
                        const matchedStop = r.stops[dir][matchedStopIndex];
                        const key = `${r._id}-${dir}`;
                        if (!seen.has(key)) {
                            seen.add(key);
                            if (!(r.route === currentRouteItem.route && dir === CONFIG.currentDirection)) {
                                const resultObj = {
                                    routeId: r._id,
                                    routeNum: r.route,
                                    direction: dir,
                                    routeData: r,
                                    targetSeq: matchedStop.seq,
                                    stopFor: matchedStop.stopFor || []
                                };
                                if (r._id === currentRouteItem._id) {
                                    sameRouteResults.push(resultObj);
                                } else {
                                    otherRouteResults.push(resultObj);
                                }
                            }
                        }
                    }
                }
            });
        });

        if (sameRouteResults.length === 0 && otherRouteResults.length === 0) {
            body.innerHTML = `<div class="station-empty-tip">${LangHandler.getText('noInformation')}</div>`;
        } else {
            const renderResultItem = (result) => {
                const routeInfo = result.routeData;
                let shifts = DataHandler.getEnabledShifts(routeInfo, result.direction);

                if (shifts && shifts.length > 0) {
                    if (Array.isArray(result.stopFor)) {
                        shifts = shifts.filter(shiftKey => result.stopFor.includes(shiftKey));
                    }
                    if (shifts.length === 0) return null;
                }

                const item = document.createElement('div');
                item.className = 'station-item';
                item.style.display = 'flex';
                item.style.alignItems = 'flex-start';
                item.style.justifyContent = 'space-between';
                item.style.padding = '14px 16px';
                item.style.borderBottom = '1px solid #f1f5f9';
                item.style.cursor = 'pointer';

                let shiftRowsHtml = '';

                if (shifts && shifts.length > 0) {
                    let seenExtra = new Set();
                    shifts.forEach(shiftKey => {
                        const shiftConfig = DataHandler.getShiftConfig(routeInfo, shiftKey);
                        let badgeText = result.routeNum;
                        let isNormal = (shiftKey === 'normal');

                        if (!isNormal) {
                            let match = shiftConfig.label.match(/^(.+?)\s*\((.+?)\)$/);
                            badgeText = match ? match[1].trim() : shiftConfig.label;
                        }

                        if (!seenExtra.has(badgeText + shiftKey)) {
                            seenExtra.add(badgeText + shiftKey);
                            let badgeColor = shiftConfig.color || '#2563eb';
                            let textColor = shiftConfig.textColor || '#ffffff';

                            let boundKey = result.direction;
                            let isShiftLoop = DataHandler.isShiftCircular(routeInfo, shiftKey, boundKey);
                            let destName = isShiftLoop ? (LangHandler.getText('loopDirection') || '循環線') : DataHandler.getShiftStartEnd(routeInfo, shiftKey, boundKey).end;
                            if (!destName || destName === LangHandler.getText('noInformation')) destName = DataHandler.getDirectionStartEndStops(routeInfo, boundKey).last;
                            let destText = isShiftLoop ? destName : (isZh ? `往 ${destName}` : `to ${destName}`);

                            let badgeHtml = `<span class="route-badge" style="--route-badge-bg: ${badgeColor}; --route-badge-color: ${textColor}; min-width: 45px;">${badgeText}</span>`;
                            let destHtml = `<span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600; flex: 1;">${destText}</span>`;

                            shiftRowsHtml += `
                            <div style="display: flex; align-items: center; width: 100%; margin-top: 6px;">
                                ${badgeHtml}
                                ${destHtml}
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#94a3b8" stroke-width="2" fill="none" style="margin-left:auto; flex-shrink: 0;"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        `;
                        }
                    });
                } else {
                    let badgeHtml = `<span class="route-badge" style="--route-badge-bg: #2563eb; --route-badge-color: #ffffff;">${result.routeNum}</span>`;
                    shiftRowsHtml = `<div style="display: flex; align-items: center; width: 100%; margin-top: 6px;">${badgeHtml}</div>`;
                }

                item.innerHTML = `
                <div class="station-routes" style="display: flex; flex-direction: column; width: 100%; gap: 4px;">
                    ${shiftRowsHtml}
                </div>
            `;

                item.addEventListener('click', () => {
                    if (result.routeNum === 'S1' || result.routeNum === 'S2') {
                        window.location.href = './travel/index.html';
                        return;
                    }

                    overlay.remove();

                    CONFIG.currentRouteNum = result.routeNum;
                    CONFIG.currentRouteId = result.routeId;
                    CONFIG.currentDirection = result.direction;

                    const validStops = DataHandler.getValidStops(result.routeData);
                    let targetIndex = -1;
                    for (let i = 0; i < validStops.length; i++) {
                        if (validStops[i].seq === result.targetSeq) {
                            targetIndex = i;
                            break;
                        }
                    }
                    if (targetIndex !== -1) {
                        CONFIG.currentPage = Math.floor(targetIndex / CONFIG.pageSize) + 1;
                    } else {
                        CONFIG.currentPage = 1;
                    }

                    document.getElementById('stopScreen').scrollTop = 0;
                    Renderer.renderStopPage(result.routeId);

                    if (result.targetSeq !== -1) {
                        setTimeout(() => {
                            const targetRow = document.querySelector('.stop-row-visible[data-seq="' + result.targetSeq + '"]');
                            if (targetRow) {
                                targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                targetRow.classList.add('highlight-flash');
                                setTimeout(() => {
                                    targetRow.classList.remove('highlight-flash');
                                }, 3000);
                            }
                        }, 350);
                    }
                });
                return item;
            };

            if (sameRouteResults.length > 0) {
                const sameRouteContainer = document.createElement('div');
                sameRouteContainer.className = 'nearby-group-container';
                sameRouteContainer.style.cssText = 'margin-bottom: 16px; background: #ffffff; border-radius: 12px; border: 1px solid #bfdbfe; overflow: hidden; box-shadow: 0 2px 8px rgba(37, 99, 235, 0.05);';

                const groupTitle = document.createElement('div');
                groupTitle.style.cssText = "font-size: 13px; font-weight: 800; color: #1d4ed8; padding: 10px 16px; text-transform: uppercase; background: #eff6ff; border-bottom: 1px solid #bfdbfe; display: flex; align-items: center; gap: 6px;";
                groupTitle.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M6 9l6 6 6-6"/></svg> ${isZh ? '同路綫' : 'Same Route'}`;
                sameRouteContainer.appendChild(groupTitle);

                sameRouteResults.forEach(r => {
                    const el = renderResultItem(r);
                    if (el) sameRouteContainer.appendChild(el);
                });
                body.appendChild(sameRouteContainer);
            }

            if (otherRouteResults.length > 0) {
                const nearbyRouteContainer = document.createElement('div');
                nearbyRouteContainer.className = 'nearby-group-container';
                nearbyRouteContainer.style.cssText = 'background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);';

                const groupTitle = document.createElement('div');
                groupTitle.style.cssText = "font-size: 13px; font-weight: 800; color: #475569; padding: 10px 16px; text-transform: uppercase; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 6px;";
                groupTitle.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> ${isZh ? '附近路綫' : 'Nearby Routes'}`;
                nearbyRouteContainer.appendChild(groupTitle);

                otherRouteResults.forEach(r => {
                    const el = renderResultItem(r);
                    if (el) nearbyRouteContainer.appendChild(el);
                });
                body.appendChild(nearbyRouteContainer);
            }
        }

        content.appendChild(body);
        overlay.appendChild(content);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
    },

    // ==========================================
    // 1-1. 渲染：標籤、方向、班次區塊
    // ==========================================
    _buildBasicInfoElements: function (container, routeItem, mainColor, textColor, isZh, isLoop, dirInfo, enabledShifts) {
        const numWrap = document.createElement('div');
        numWrap.className = 'route-num-color-wrap';

        const routeNumEl = document.createElement('div');
        routeNumEl.className = 'route-badge route-num main-route-badge';
        routeNumEl.textContent = routeItem.route;
        routeNumEl.style.setProperty('--route-badge-bg', mainColor);
        routeNumEl.style.setProperty('--route-badge-color', textColor);
        routeNumEl.style.backgroundColor = mainColor;
        numWrap.appendChild(routeNumEl);

        const typeText = DataHandler.getRouteTypeDisplay(routeItem);
        let typeBadgeEl = null;
        if (typeText) {
            typeBadgeEl = document.createElement('div');
            typeBadgeEl.className = 'route-type-badge';
            typeBadgeEl.style.color = mainColor;
            typeBadgeEl.style.backgroundColor = `${mainColor}1A`;
            typeBadgeEl.textContent = typeText;
            numWrap.appendChild(typeBadgeEl);
        }

        const cleanDirUI = document.createElement('div');
        cleanDirUI.className = 'clean-direction-ui';
        if (isLoop) {
            cleanDirUI.innerHTML = `
                <span class="dir-stop">${dirInfo.first}</span>
                <span class="dir-icon loop" style="color:${mainColor}; display: inline-flex; align-items: center;">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.36l5.67-5.67"/></svg>
                </span>
                <span class="dir-stop loop-text" style="color:${mainColor}">${LangHandler.getText('loopDirection') || '循環線'}</span>
            `;
            cleanDirUI.style.backgroundColor = `${mainColor}0D`;
            cleanDirUI.style.borderColor = `${mainColor}33`;
        } else {
            cleanDirUI.innerHTML = `
                <span class="dir-stop">${dirInfo.first}</span>
                <span class="dir-icon route-arrow-icon" style="color:#666; display: inline-flex; align-items: center;">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
                <span class="dir-stop">${dirInfo.last}</span>
            `;
        }

        const shiftTags = document.createElement('div');
        shiftTags.className = 'route-shift-tags';

        enabledShifts.forEach(shiftKey => {
            const config = DataHandler.getShiftConfig(routeItem, shiftKey);
            let shiftLabel = config.label;
            let shiftColor = config.color || '#4a90e2';
            let shiftTextColor = config.textColor || '#ffffff';

            let match = shiftLabel.match(/^(.+?)\s*\((.+?)\)$/);
            if (match) {
                const extraBadge = document.createElement('div');
                extraBadge.className = 'route-badge main-route-badge';
                extraBadge.textContent = match[1].trim();
                extraBadge.style.setProperty('--route-badge-bg', shiftColor);
                extraBadge.style.setProperty('--route-badge-color', shiftTextColor);
                extraBadge.style.backgroundColor = shiftColor;

                if (typeBadgeEl) {
                    numWrap.insertBefore(extraBadge, typeBadgeEl);
                } else {
                    numWrap.appendChild(extraBadge);
                }
                shiftLabel = match[2].trim();
            }

            const tag = document.createElement('div');
            tag.className = `shift-tag`;
            tag.style.background = shiftColor;
            tag.style.backgroundColor = shiftColor;
            tag.innerHTML = `<span class="shift-text">${shiftLabel}</span>`;
            shiftTags.appendChild(tag);
        });

        container.appendChild(numWrap);
        container.appendChild(cleanDirUI);
        container.appendChild(shiftTags);
    },

    // ==========================================
    // 1-2. 渲染：操作按鈕區
    // ==========================================
    _buildActionButtons: function (routeItem, mainColor, textColor, isZh, isLoop, dirInfo) {
        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'route-actions-wrap';

        const supportSwitch = DataHandler.isRouteSupportDirectionSwitch(routeItem);

        if (supportSwitch) {
            const directionBtn = document.createElement('button');
            directionBtn.className = 'action-btn-modern toggle-direction-btn btn-danger-modern';

            // 動態計算下一個方向
            var boundsArray = DataHandler.getRouteBound(routeItem).split(',');
            boundsArray = boundsArray.filter(b => routeItem.stops && routeItem.stops[b] && routeItem.stops[b].length > 0);

            var currentIndex = boundsArray.indexOf(CONFIG.currentDirection);
            if (currentIndex === -1) currentIndex = 0;
            var nextIndex = (currentIndex + 1) % boundsArray.length;
            var nextDir = boundsArray[nextIndex];

            var nextDirInfo = DataHandler.getDirectionStartEndStops(routeItem, nextDir);
            var nextDest = routeItem.circular === true ? (LangHandler.getText('loopDirection') || '循環線') : nextDirInfo.last;

            directionBtn.title = `${LangHandler.getText('switchDirection')} (➔ ${nextDest})`;
            directionBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v11" /><path d="M11 17l-4 4-4-4" /><path d="M17 14V3" /><path d="M13 7l4-4 4 4" /></svg>`;

            directionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                CONFIG.currentDirection = nextDir;
                CONFIG.currentPage = 1;
                Renderer.renderStopPage(routeItem._id);
            });
            actionsWrap.appendChild(directionBtn);
        }

        const levelBtn = document.createElement('button');
        levelBtn.className = 'action-btn-modern';
        levelBtn.title = isZh ? '解鎖條件' : 'Unlock Levels';
        levelBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
        levelBtn.addEventListener('click', (e) => { e.stopPropagation(); Renderer.renderLevelModal(routeItem); });

        const infoBtn = document.createElement('button');
        infoBtn.className = 'action-btn-modern';
        infoBtn.title = isZh ? '更多資訊' : 'More Info';
        infoBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
        infoBtn.addEventListener('click', (e) => { e.stopPropagation(); Renderer.renderInfoModal(routeItem); });

        // 🌟 延遲加載：點擊時才執行 renderFareModal 渲染 DOM
        const fareBtn = document.createElement('button');
        fareBtn.className = 'action-btn-modern';
        fareBtn.title = isZh ? '收費資訊' : 'Fares';
        fareBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
        fareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            Renderer.renderFareModal(routeItem, mainColor, textColor);
        });

        const timeBtn = document.createElement('button');
        timeBtn.className = 'action-btn-modern';
        timeBtn.title = LangHandler.getText('timetableBtn');
        timeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 12"></polyline></svg>`;
        timeBtn.addEventListener('click', () => { this.renderTimetablePanel(routeItem, CONFIG.currentDirection || 'A'); });

        actionsWrap.append(levelBtn, infoBtn, fareBtn, timeBtn);
        return actionsWrap;
    },

    // ==========================================
    // 1-4. 動態渲染：收費彈窗 (Lazy Initialization)
    // ==========================================
    renderFareModal: function (routeItem, mainRouteColor, textColor) {
        const oldFareOverlay = document.getElementById('fare-popup-overlay');
        if (oldFareOverlay) oldFareOverlay.remove();

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        const currentDir = CONFIG.currentDirection;
        const activeShifts = CONFIG.enabledShifts || [];

        const fareOverlay = document.createElement('div');
        fareOverlay.id = 'fare-popup-overlay';
        fareOverlay.className = 'timetable-panel-overlay modern-blur';

        const fareContent = document.createElement('div');
        fareContent.className = 'timetable-panel-content';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'timetable-panel-close-modern';
        closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        closeBtn.addEventListener('click', () => fareOverlay.remove());
        fareContent.appendChild(closeBtn);

        const fareHeader = document.createElement('div');
        fareHeader.className = 'timetable-panel-header-modern';
        const routeColor = routeItem.textColor || '#ffffff';
        const titleText = isZh ? `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${routeColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> 收費資訊` : `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${routeColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> Fares`;
        fareHeader.innerHTML = `<h2 class="panel-title-modern">${titleText}</h2>`;
        fareContent.appendChild(fareHeader);

        const fareWrap = document.createElement('div');
        fareWrap.className = 'fare-modal-body';

        if (routeItem.fares) {
            // 統一調用現代化 SVG
            const ticketSvg = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M8 6v12"></path></svg>`;
            const sectionSvg = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
            const rebateSvg = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6M3 10l6-6"/></svg>`;
            const actionTagSvg = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M12 12h.01"></path></svg>`;
            const arrowSvg = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
            const infoSvg = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

            const fareTypes = [
                { key: 'adult', labelZh: '成人', labelEn: 'Adult', icon: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>` },
                { key: 'child', labelZh: '兒童', labelEn: 'Child', icon: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.2" fill="none"><circle cx="12" cy="8" r="3"></circle><path d="M18 21v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2"></path></svg>` },
                { key: 'elder', labelZh: '長者', labelEn: 'Elder', icon: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="23 21 23 9 19 9"></polyline></svg>` },
                { key: 'student', labelZh: '學生', labelEn: 'Student', icon: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.2" fill="none"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>` }
            ];

            let matchedOverrides = [];
            if (routeItem.fares.overrides) {
                routeItem.fares.overrides.forEach(ov => {
                    const matchBound = !ov.bound || ov.bound.includes(currentDir);
                    const matchShift = !ov.shift || activeShifts.includes(ov.shift);
                    if (matchBound && matchShift) matchedOverrides.push(ov);
                });
            }

            // 構建全程/特惠收費網格 (新增：資料驗證機制)
            const buildFareGrid = (fareData, titleTxt, shiftKey = null, boundKey = null) => {
                // 檢查是否真的包含成人、小童等實際金額資料
                const hasValidFare = fareTypes.some(ft => fareData[ft.key] !== undefined);
                if (!hasValidFare) return null; // 如果沒有資料，直接返回 null 不渲染

                const wrapper = document.createElement('div');
                wrapper.className = 'modern-fare-group';

                let headerHtml = '';
                if (!shiftKey && !boundKey) {
                    headerHtml = `<div class="modern-fare-title">${ticketSvg} ${titleTxt}</div>`;
                } else {
                    let tagsHtml = '';
                    if (shiftKey) {
                        const sc = DataHandler.getShiftConfig(routeItem, shiftKey);
                        tagsHtml += `<span class="shift-tag" style="background-color: ${sc.color}; border-color: ${sc.color};">${sc.label}</span>`;
                    }
                    if (boundKey) {
                        let isShiftLoop = shiftKey ? DataHandler.isShiftCircular(routeItem, shiftKey, boundKey) : false;
                        let destName = '';
                        if (shiftKey && !isShiftLoop) {
                            destName = DataHandler.getShiftStartEnd(routeItem, shiftKey, boundKey).end;
                        }
                        if (!destName || destName === LangHandler.getText('noInformation')) {
                            destName = DataHandler.getDirectionStartEndStops(routeItem, boundKey).last;
                        }
                        if (isShiftLoop) destName = isZh ? '循環線' : 'Loop';
                        const destText = isShiftLoop ? destName : (isZh ? `往 ${destName}` : `to ${destName}`);
                        tagsHtml += `<span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">${destText}</span>`;
                    }
                    headerHtml = `<div style="display: flex; align-items: center;">${tagsHtml}</div>`;
                }

                let gridHtml = `<div class="modern-fare-header">${headerHtml}</div><div class="modern-fare-grid">`;
                fareTypes.forEach(ft => {
                    if (fareData[ft.key] !== undefined) {
                        gridHtml += `<div class="modern-fare-item">
                                        <span class="fare-lbl">${ft.icon} ${isZh ? ft.labelZh : ft.labelEn}</span>
                                        <span class="fare-val"><span class="currency">$</span>${fareData[ft.key].toFixed(1)}</span>
                                     </div>`;
                    }
                });
                gridHtml += `</div>`;
                wrapper.innerHTML = gridHtml;
                return wrapper;
            };

            // 1. 全程收費卡片：若回傳不為 null 則加入 DOM
            const mainFareGrid = buildFareGrid(routeItem.fares, isZh ? '全程收費' : 'Full Fare');
            if (mainFareGrid) {
                fareWrap.appendChild(mainFareGrid);
            }

            // 2. 特惠班次/Overrides 覆寫卡片
            matchedOverrides.forEach(ov => {
                const overrideGrid = buildFareGrid(ov, null, ov.shift, ov.bound);
                if (overrideGrid) {
                    fareWrap.appendChild(overrideGrid);
                }
            });

            const renderNode = (nameCn, nameEn) => {
                const cleanCn = (nameCn || '').replace(/\^\^/g, '');
                const cleanEn = (nameEn || '').replace(/\^\^/g, '');
                return `<div class="route-node-clean"><span class="node-main">${isZh ? cleanCn : (cleanEn || cleanCn)}</span>${isZh && cleanEn ? `<span class="node-sub">${cleanEn}</span>` : ''}</div>`;
            };

            // 3. 分段收費
            const validSectionFares = (routeItem.fares.sectionFares || []).filter(sf => !sf.direction || sf.direction.includes(currentDir));
            if (validSectionFares.length > 0) {
                const sectionContainer = document.createElement('div');
                sectionContainer.className = 'modern-section-container';
                sectionContainer.innerHTML = `<div class="modern-section-title"><div style="display:flex; align-items:center; gap:8px;">${sectionSvg} ${isZh ? '分段收費' : 'Section Fares'}</div></div>`;

                validSectionFares.forEach(sf => {
                    let shiftBadgesHTML = '';
                    const shiftArray = Array.isArray(sf.shift) ? sf.shift : (sf.shift ? [sf.shift] : []);
                    if (shiftArray.length > 0) {
                        shiftBadgesHTML = '<div class="modern-shift-badges">';
                        shiftArray.forEach(shiftKey => {
                            const sc = DataHandler.getShiftConfig(routeItem, shiftKey);
                            let boundKey = sf.direction ? (sf.direction.includes(',') ? sf.direction.split(',')[0] : sf.direction) : currentDir;
                            let isShiftLoop = DataHandler.isShiftCircular(routeItem, shiftKey, boundKey);
                            let destName = isShiftLoop ? (LangHandler.getText('loopDirection') || '循環線') : DataHandler.getShiftStartEnd(routeItem, shiftKey, boundKey).end;
                            if (!destName || destName === LangHandler.getText('noInformation')) destName = DataHandler.getDirectionStartEndStops(routeItem, boundKey).last;
                            const destText = isShiftLoop ? destName : (isZh ? `往 ${destName}` : `to ${destName}`);
                            if (routeItem.stops && routeItem.stops[boundKey]) {
                                const validStops = routeItem.stops[boundKey].filter(s => s.visible);
                                if (validStops.length > 0) {
                                    const lastStop = validStops[validStops.length - 1];
                                    destName = isZh ? (lastStop.nameCn || '').replace(/\^\^/g, '') : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
                                }
                            }
                            shiftBadgesHTML += `<div style="display: flex; align-items: center;"><span class="shift-tag" style="background-color: ${sc.color}; border-color: ${sc.color};">${sc.label}</span><span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${destText}</span></div>`;
                        });
                        shiftBadgesHTML += '</div>';
                    }

                    const pAdult = sf.price;
                    const pChild = sf.childPrice !== undefined ? sf.childPrice : pAdult / 2;
                    const pElder = sf.elderPrice !== undefined ? sf.elderPrice : pAdult / 2;
                    const pStudent = sf.studentPrice !== undefined ? sf.studentPrice : pAdult / 2;

                    const isSameNode = (sf.fromCn === sf.toCn) && (sf.fromEn === sf.toEn);
                    const nodesHtml = isSameNode ? renderNode(sf.fromCn, sf.fromEn) : `${renderNode(sf.fromCn, sf.fromEn)}<div class="flow-arrow-modern">${arrowSvg}</div>${renderNode(sf.toCn, sf.toEn)}`;

                    sectionContainer.innerHTML += `
                        <div class="modern-route-card">
                            ${shiftBadgesHTML}
                            <div class="route-flow-modern">
                                <div class="route-nodes-wrap">${nodesHtml}</div>
                                <div class="multi-price-grid">
                                    <div class="price-cell adult-price"><div class="p-label">${fareTypes[0].icon} ${isZh ? '成人' : 'Adult'}</div><div class="p-value"><span class="cur">$</span>${pAdult.toFixed(1)}</div></div>
                                    <div class="price-cell sub-price"><div class="p-label">${fareTypes[1].icon} ${isZh ? '小童' : 'Child'}</div><div class="p-value"><span class="cur">$</span>${pChild.toFixed(1)}</div></div>
                                    <div class="price-cell sub-price"><div class="p-label">${fareTypes[2].icon} ${isZh ? '長者' : 'Elder'}</div><div class="p-value"><span class="cur">$</span>${pElder.toFixed(1)}</div></div>
                                    <div class="price-cell sub-price"><div class="p-label">${fareTypes[3].icon} ${isZh ? '學生' : 'Student'}</div><div class="p-value"><span class="cur">$</span>${pStudent.toFixed(1)}</div></div>
                                </div>
                            </div>
                        </div>`;
                });
                fareWrap.appendChild(sectionContainer);
            }

            // 4. 雙向/短途下車回贈
            const validRebates = (routeItem.fares.shortDistanceRebates || []).filter(sr => !sr.direction || sr.direction.includes(currentDir));
            if (validRebates.length > 0) {
                const rebateContainer = document.createElement('div');
                rebateContainer.className = 'modern-section-container rebate-theme';
                rebateContainer.innerHTML = `<div class="modern-section-title"><div style="display:flex; align-items:center; gap:8px;">${rebateSvg} ${isZh ? '短途分段收費' : 'Sectional Fare'}</div><span class="action-tag">${actionTagSvg} ${isZh ? '下車再次拍卡' : 'Tap Again'}</span></div>`;

                validRebates.forEach(sr => {
                    const remarkText = isZh ? sr.remarkCn : sr.remarkEn;
                    let shiftBadgesHTML = '';
                    const shiftArray = Array.isArray(sr.shift) ? sr.shift : (sr.shift ? [sr.shift] : []);
                    if (shiftArray.length > 0) {
                        shiftBadgesHTML = '<div class="modern-shift-badges">';
                        shiftArray.forEach(shiftKey => {
                            const sc = DataHandler.getShiftConfig(routeItem, shiftKey);
                            let boundKey = sr.direction ? (sr.direction.includes(',') ? sr.direction.split(',')[0] : sr.direction) : currentDir;
                            let isShiftLoop = DataHandler.isShiftCircular(routeItem, shiftKey, boundKey);
                            let destName = isShiftLoop ? (LangHandler.getText('loopDirection') || '循環線') : DataHandler.getShiftStartEnd(routeItem, shiftKey, boundKey).end;
                            if (!destName || destName === LangHandler.getText('noInformation')) destName = DataHandler.getDirectionStartEndStops(routeItem, boundKey).last;
                            const destText = isShiftLoop ? destName : (isZh ? `往 ${destName}` : `to ${destName}`);
                            if (routeItem.stops && routeItem.stops[boundKey]) {
                                const validStops = routeItem.stops[boundKey].filter(s => s.visible);
                                if (validStops.length > 0) {
                                    const lastStop = validStops[validStops.length - 1];
                                    destName = isZh ? (lastStop.nameCn || '').replace(/\^\^/g, '') : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
                                }
                            }
                            shiftBadgesHTML += `<div style="display: flex; align-items: center;"><span class="shift-tag" style="background-color: ${sc.color}; border-color: ${sc.color};">${sc.label}</span><span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${destText}</span></div>`;
                        });
                        shiftBadgesHTML += '</div>';
                    }

                    const fAdult = sr.actualFare;
                    const fChild = sr.childFare !== undefined ? sr.childFare : fAdult / 2;
                    const fElder = sr.elderFare !== undefined ? sr.elderFare : fAdult / 2;
                    const fStudent = sr.studentFare !== undefined ? sr.studentFare : fAdult / 2;

                    const oAdult = sr.fullFare || (sr.actualFare + sr.rebate);
                    const oChild = sr.childFullFare !== undefined ? sr.childFullFare : oAdult / 2;
                    const oElder = sr.elderFullFare !== undefined ? sr.elderFullFare : oAdult / 2;
                    const oStudent = sr.studentFullFare !== undefined ? sr.studentFullFare : oAdult / 2;

                    const startCn = sr.startStopCn || sr.startStop;
                    const alightCn = sr.alightStopCn || sr.alightStop;
                    const isSameNodeRebate = (startCn === alightCn) && (sr.startStopEn === sr.alightStopEn);
                    const rebateNodesHtml = isSameNodeRebate ? renderNode(startCn, sr.startStopEn) : `${renderNode(startCn, sr.startStopEn)}<div class="flow-arrow-modern">${arrowSvg}</div>${renderNode(alightCn, sr.alightStopEn)}`;

                    rebateContainer.innerHTML += `
                        <div class="modern-route-card rebate-card">
                            ${shiftBadgesHTML}
                            <div class="route-flow-modern">
                                <div class="route-nodes-wrap">${rebateNodesHtml}</div>
                                <div class="multi-price-grid rebate-grid">
                                    <div class="price-cell adult-price"><div class="p-label">${fareTypes[0].icon} ${isZh ? '成人' : 'Adult'}</div><div class="p-value-wrap"><span class="p-strike">$${oAdult.toFixed(1)}</span><span class="p-value success"><span class="cur">$</span>${fAdult.toFixed(1)}</span></div></div>
                                    <div class="price-cell sub-price"><div class="p-label">${fareTypes[1].icon} ${isZh ? '小童' : 'Child'}</div><div class="p-value-wrap"><span class="p-strike">$${oChild.toFixed(1)}</span><span class="p-value success"><span class="cur">$</span>${fChild.toFixed(1)}</span></div></div>
                                    <div class="price-cell sub-price"><div class="p-label">${fareTypes[2].icon} ${isZh ? '長者' : 'Elder'}</div><div class="p-value-wrap"><span class="p-strike">$${oElder.toFixed(1)}</span><span class="p-value success"><span class="cur">$</span>${fElder.toFixed(1)}</span></div></div>
                                    <div class="price-cell sub-price"><div class="p-label">${fareTypes[3].icon} ${isZh ? '學生' : 'Student'}</div><div class="p-value-wrap"><span class="p-strike">$${oStudent.toFixed(1)}</span><span class="p-value success"><span class="cur">$</span>${fStudent.toFixed(1)}</span></div></div>
                                </div>
                            </div>
                            ${remarkText ? `<div class="modern-remark"><span class="remark-icon">${infoSvg}</span><span>${remarkText}</span></div>` : ''}
                        </div>`;
                });
                fareWrap.appendChild(rebateContainer);
            }

            // 5. 若上述所有區塊均未成功渲染（DOM 子節點數量為 0），則顯示空狀態
            if (fareWrap.children.length === 0) {
                fareWrap.innerHTML = `<span class="empty-data-text">${LangHandler.getText('noInformation') || '無收費資訊'}</span>`;
            }

        } else {
            // 完全沒有 fares 屬性時
            fareWrap.innerHTML = `<span class="empty-data-text">${LangHandler.getText('noInformation') || '無收費資訊'}</span>`;
        }

        fareContent.appendChild(fareWrap);
        fareOverlay.appendChild(fareContent);
        fareOverlay.addEventListener('click', (e) => { if (e.target === fareOverlay) fareOverlay.remove(); });

        document.body.appendChild(fareOverlay);
    },

    renderKeyboardFilters: function () {
        const keyboard = document.getElementById('customKeyboard');
        if (!keyboard) return;

        // Target the parent wrapper instead of the keyboard itself to make them siblings
        const container = keyboard.parentElement;

        let filterContainer = document.getElementById('keyboardFilters');
        if (filterContainer) {
            filterContainer.remove();
        }

        const filterOperators = ["CSB", "FT", "SE", "HZ", "REBC"];
        const filterTypes = ["Overnight", "Sightseeing", "Event", "Festival", "Crew Shuttle", "University", "Express", "Limited-stop", "Circular", "Special Departure", "Stadium", "CentralAxis", "CityStepped", "DailyChallenge"];
        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        filterContainer = document.createElement('div');
        filterContainer.id = 'keyboardFilters';
        filterContainer.className = 'keyboard-filter-container';

        // Independent Scrolling Panel
        const scrollPanel = document.createElement('div');
        scrollPanel.className = 'keyboard-filter-scroll-panel';

        // Block 1: Operators
        const operatorGroup = document.createElement('div');
        operatorGroup.className = 'filter-group';

        const operatorTitle = document.createElement('div');
        operatorTitle.className = 'filter-group-title';
        operatorTitle.textContent = isZh ? '營運商 / Operator' : 'Operator';
        operatorGroup.appendChild(operatorTitle);

        const operatorChips = document.createElement('div');
        operatorChips.className = 'filter-chips-wrap';

        filterOperators.forEach(op => {
            const chip = document.createElement('div');
            chip.className = 'filter-chip operator-badge';
            chip.setAttribute('data-operator', op);
            chip.textContent = op;

            if (CONFIG.activeFilters.operator === op) chip.classList.add('active');

            chip.onclick = function () {
                if (CONFIG.activeFilters.operator === op) {
                    CONFIG.activeFilters.operator = null;
                    this.classList.remove('active');
                } else {
                    CONFIG.activeFilters.operator = op;
                    filterContainer.querySelectorAll('.filter-chip[data-operator]').forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                }
                const input = document.getElementById('routeNumberInput');
                Renderer.renderRouteSuggestions(input ? input.value : '');
                Renderer.initKeyboardValidity(input ? input.value : '');
            };
            operatorChips.appendChild(chip);
        });
        operatorGroup.appendChild(operatorChips);

        // Block 2: Route Types
        const typeGroup = document.createElement('div');
        typeGroup.className = 'filter-group';

        const typeTitle = document.createElement('div');
        typeTitle.className = 'filter-group-title';
        typeTitle.textContent = isZh ? '路線類型 / Route Type' : 'Route Type';
        typeGroup.appendChild(typeTitle);

        const typeChips = document.createElement('div');
        typeChips.className = 'filter-chips-wrap';

        filterTypes.forEach(type => {
            const chip = document.createElement('div');
            chip.className = 'filter-chip type-badge';
            chip.setAttribute('data-type', type);

            let typeKey = 'type' + type.replace(/\s+/g, '');
            let displayType = LangHandler.getText(typeKey);
            if (displayType === typeKey) displayType = type;

            chip.textContent = displayType;

            if (CONFIG.activeFilters.type === type) chip.classList.add('active');

            chip.onclick = function () {
                if (CONFIG.activeFilters.type === type) {
                    CONFIG.activeFilters.type = null;
                    this.classList.remove('active');
                } else {
                    CONFIG.activeFilters.type = type;
                    filterContainer.querySelectorAll('.filter-chip[data-type]').forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                }
                const input = document.getElementById('routeNumberInput');
                Renderer.renderRouteSuggestions(input ? input.value : '');
                Renderer.initKeyboardValidity(input ? input.value : '');
            };
            typeChips.appendChild(chip);
        });
        typeGroup.appendChild(typeChips);

        scrollPanel.appendChild(operatorGroup);
        scrollPanel.appendChild(typeGroup);

        filterContainer.appendChild(scrollPanel);

        // Insert the filter container before the keyboard in the DOM structure
        container.insertBefore(filterContainer, keyboard);
    },

    createDetailItem: function (icon, label, value) {
        const item = document.createElement('div');
        item.className = 'detail-item';

        item.innerHTML = `
        <div class="detail-icon">${icon}</div>
        <div class="detail-content">
            <div class="detail-label">${label}</div>
            <div class="detail-value">${value}</div>
        </div>
    `;
        return item;
    },

    renderDirectionPagination: function (routeItem) {
        var wrap = document.createElement('div');
        wrap.className = 'direction-pagination-wrap';

        var directionBtn = document.createElement('button');
        directionBtn.className = 'action-btn-modern toggle-direction-btn';

        var supportSwitch = DataHandler.isRouteSupportDirectionSwitch(routeItem);

        if (supportSwitch) {
            var boundsArray = DataHandler.getRouteBound(routeItem).split(',');
            boundsArray = boundsArray.filter(b => routeItem.stops && routeItem.stops[b] && routeItem.stops[b].length > 0);

            var currentIndex = boundsArray.indexOf(CONFIG.currentDirection);
            if (currentIndex === -1) currentIndex = 0;
            var nextIndex = (currentIndex + 1) % boundsArray.length;
            var nextDir = boundsArray[nextIndex];

            var nextDirInfo = DataHandler.getDirectionStartEndStops(routeItem, nextDir);
            var nextDest = nextDir === 'C' ? (LangHandler.getText('loopDirection') || '循環線') : nextDirInfo.last;

            directionBtn.title = `${LangHandler.getText('switchDirection')} (➔ ${nextDest})`;
            directionBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v11" /><path d="M11 17l-4 4-4-4" /><path d="M17 14V3" /><path d="M13 7l4-4 4 4" /></svg>`;

            directionBtn.addEventListener('click', function () {
                CONFIG.currentDirection = nextDir;
                CONFIG.currentPage = 1;
                Renderer.renderStopPage(routeItem._id);
            });
        } else {
            directionBtn.style.opacity = '0.4';
            directionBtn.style.cursor = 'not-allowed';
            directionBtn.disabled = true;
            directionBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v11" /><path d="M11 17l-4 4-4-4" /><path d="M17 14V3" /><path d="M13 7l4-4 4 4" /></svg>`;
        }

        directionBtn.disabled = !supportSwitch;
        if (!supportSwitch) {
            directionBtn.style.opacity = '0.4';
            directionBtn.style.cursor = 'not-allowed';
        }

        directionBtn.addEventListener('click', function () {
            CONFIG.currentDirection = CONFIG.currentDirection === "A" ? "B" : "A";
            CONFIG.currentPage = 1;
            Renderer.renderStopPage(routeItem._id);
        });

        var paginationControl = document.createElement('div');
        paginationControl.className = 'pagination-control modern-pagination';

        var prevBtn = document.createElement('button');
        prevBtn.className = 'action-btn-modern pagination-btn prev-btn';
        prevBtn.title = LangHandler.getText('prevPage');
        prevBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        `;

        var paginationInfo = document.createElement('div');
        paginationInfo.className = 'pagination-info modern-pagination-info';

        var nextBtn = document.createElement('button');
        nextBtn.className = 'action-btn-modern pagination-btn next-btn';
        nextBtn.title = LangHandler.getText('nextPage');
        nextBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        `;

        var validStops = DataHandler.getValidStops(routeItem);
        var totalPages = DataHandler.getTotalPages(validStops);

        paginationInfo.textContent = LangHandler.getText('pageLabel', {
            current: CONFIG.currentPage,
            total: totalPages
        });

        prevBtn.disabled = CONFIG.currentPage <= 1;
        nextBtn.disabled = CONFIG.currentPage >= totalPages;

        // JS輔助呈現不可點擊狀態
        if (prevBtn.disabled) {
            prevBtn.style.opacity = '0.4';
            prevBtn.style.cursor = 'not-allowed';
        }
        if (nextBtn.disabled) {
            nextBtn.style.opacity = '0.4';
            nextBtn.style.cursor = 'not-allowed';
        }

        prevBtn.addEventListener('click', function () {
            if (CONFIG.currentPage > 1) {
                CONFIG.currentPage--;
                Renderer.renderStopPage(routeItem._id);
            }
        });

        nextBtn.addEventListener('click', function () {
            if (CONFIG.currentPage < totalPages) {
                CONFIG.currentPage++;
                Renderer.renderStopPage(routeItem._id);
            }
        });

        paginationControl.appendChild(prevBtn);
        paginationControl.appendChild(paginationInfo);
        paginationControl.appendChild(nextBtn);

        wrap.appendChild(directionBtn);
        wrap.appendChild(paginationControl);

        return wrap;
    },

    // =============== 站點列表 - 優化版 ===============
    renderStopList: function (routeItem) {
        const stopContainer = document.getElementById('stopContainer');
        if (!stopContainer) return;

        const validStops = DataHandler.getValidStops(routeItem);
        if (validStops.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'empty-tip';
            empty.textContent = CONFIG.emptyTipText[CONFIG.currentLang];
            stopContainer.appendChild(empty);
            return;
        }

        const pageStops = DataHandler.getStopsByPage(validStops, CONFIG.currentPage);
        const columns = DataHandler.splitStopsToColumns(pageStops);

        const stopWrap = document.createElement('div');
        stopWrap.className = 'stop-wrap';

        const table = document.createElement('table');
        table.className = 'stop-table';

        const thead = document.createElement('thead');
        thead.innerHTML = `
        <tr>
            <th data-lang-key="stopNumber" style="text-align: center;">${LangHandler.getText('stopNumber')}</th>
            <th data-lang-key="stopName">${LangHandler.getText('stopName')}</th>
            <th data-lang-key="" style="text-align: center;">${LangHandler.getText('')}</th>
        </tr>
    `; //nearbyRoutes
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        // 左欄 + 右欄合併渲染
        [...columns.leftStops, ...columns.rightStops].forEach(stop => {
            tbody.appendChild(this.renderStopRow(stop, routeItem));
        });

        table.appendChild(tbody);
        stopWrap.appendChild(table);
        stopContainer.appendChild(stopWrap);
    },

    // =============== 單一站點行 - 優化版 ===============
    renderStopRow: function (stop, routeItem) {
        const row = document.createElement('tr');
        row.className = 'stop-row-visible';
        row.setAttribute('data-seq', stop.seq); // 加入這行：綁定序號以便搜尋跳轉定位

        // === 序號格 ===
        const seqCell = document.createElement('td');
        const multiWrap = document.createElement('div');
        multiWrap.className = 'multi-shift-seq-wrap';

        CONFIG.enabledShifts.forEach(shiftKey => {
            const config = DataHandler.getShiftConfig(routeItem, shiftKey);
            const localSeq = DataHandler.getShiftLocalSeq(routeItem, stop, shiftKey);
            const inRange = DataHandler.isStopInShiftRange(routeItem, stop, shiftKey);

            const singleWrap = document.createElement('div');
            singleWrap.className = 'single-shift-seq-wrap';
            singleWrap.setAttribute('data-shift-key', shiftKey);
            singleWrap.setAttribute('data-stop-seq', stop.seq);

            if (!localSeq) singleWrap.classList.add('no-seq');
            if (!inRange) singleWrap.classList.add('shift-out-of-range');

            // 起終點樣式
            if (DataHandler.isShiftStartStop(routeItem, stop, shiftKey)) {
                singleWrap.classList.add('shift-start-stop');
            }
            if (DataHandler.isShiftEndStop(routeItem, stop, shiftKey)) {
                singleWrap.classList.add('shift-end-stop');
            }

            singleWrap.style.setProperty('--shift-color', config.color);

            singleWrap.innerHTML = `
            <div class="shift-line"></div>
            <div class="shift-seq-text">${localSeq || ''}</div>
        `;

            multiWrap.appendChild(singleWrap);
        });

        seqCell.appendChild(multiWrap);
        row.appendChild(seqCell);

        // === 站名格 ===
        // === 站名格 ===
        const nameCell = document.createElement('td');
        const nameContainer = document.createElement('div');
        nameContainer.className = 'stop-name-container';

        const nameHeader = document.createElement('div');
        nameHeader.className = 'stop-name-header';

        const isZh = CONFIG.currentLang === 'zh-CN';

        // 1. 主站名
        const mainName = document.createElement('span');
        mainName.className = 'stop-main-name';
        const nameCn = (stop.nameCn || '').replace(/\^\^/g, '');
        const nameEn = (stop.nameEn || '').replace(/\^\^/g, '');
        mainName.textContent = isZh ? nameCn : (nameEn || nameCn);

        const primarySubName = isZh ? stop.nameSubCn : stop.nameSubEn;
        if (primarySubName) {
            const mainSub = document.createElement('span');
            mainSub.className = 'stop-sub-name';
            mainSub.textContent = `(${primarySubName})`;
            mainName.appendChild(mainSub);
        }
        nameHeader.appendChild(mainName);

        // 2. 標籤群組
        const tagGroup = document.createElement('div');
        tagGroup.className = 'stop-tag-group';

        if ((stop.nameCn && stop.nameCn.includes('^^')) || (stop.nameEn && stop.nameEn.includes('^^'))) {
            const tag = document.createElement('span');
            tag.className = 'turning-point-tag';
            tag.textContent = isZh ? '轉折點' : 'Turning Point';
            tagGroup.appendChild(tag);
        }

        if (stop.tempClose) {
            const tempTag = document.createElement('span');
            tempTag.className = 'temp-close-tag';
            tempTag.setAttribute('data-lang-key', 'tempClose');
            tempTag.textContent = LangHandler.getText('tempClose');
            tagGroup.appendChild(tempTag);
        }

        if (tagGroup.childNodes.length > 0) {
            nameHeader.appendChild(tagGroup);
        }

        nameContainer.appendChild(nameHeader);

        // 3. 英文站名
        if (isZh && stop.nameEn) {
            const enName = document.createElement('div');
            enName.className = 'stop-english-name';
            enName.textContent = stop.nameEn.replace(/\^\^/g, '');

            if (stop.nameSubEn) {
                const enSub = document.createElement('span');
                enSub.className = 'stop-sub-name';
                enSub.textContent = `(${stop.nameSubEn})`;
                enName.appendChild(enSub);
            }
            nameContainer.appendChild(enName);
        }

        // 4. 臨時關閉原因
        if (stop.tempClose && stop.tempCloseReason) {
            const reason = document.createElement('div');
            reason.className = 'temp-close-reason';
            reason.textContent = stop.tempCloseReason;
            nameContainer.appendChild(reason);
        }

        nameCell.appendChild(nameContainer);
        row.appendChild(nameCell);

        const actionCell = document.createElement('td');
        actionCell.style.textAlign = 'center';
        const nearbyBtn = document.createElement('button');
        nearbyBtn.className = 'action-btn-modern nearby-btn';
        nearbyBtn.style.margin = '0 auto';
        nearbyBtn.title = LangHandler.getText('nearbyRoutes');
        nearbyBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
        nearbyBtn.onclick = () => Renderer.renderNearbyRoutesModal(stop, routeItem);

        actionCell.appendChild(nearbyBtn);
        row.appendChild(actionCell);

        return row;
    },

    // 站名渲染輔助函數
    renderStopName: function (container, stop) {
        const isZh = CONFIG.currentLang === 'zh-CN';

        // 1. 建立主站名元素
        const mainName = document.createElement('span');
        mainName.className = 'stop-main-name';

        // 移除轉折點標記符號
        const nameCn = (stop.nameCn || '').replace(/\^\^/g, '');
        const nameEn = (stop.nameEn || '').replace(/\^\^/g, '');

        mainName.textContent = isZh ? nameCn : (nameEn || nameCn);

        // 2. 處理主站名的副站名（中文模式顯示中文，英文模式顯示英文）
        const primarySubName = isZh ? stop.nameSubCn : stop.nameSubEn;
        if (primarySubName) {
            const mainSub = document.createElement('span');
            mainSub.className = 'stop-sub-name';
            mainSub.textContent = `(${primarySubName})`;
            mainName.appendChild(mainSub);
        }

        // 3. 轉折點標記
        if ((stop.nameCn && stop.nameCn.includes('^^')) || (stop.nameEn && stop.nameEn.includes('^^'))) {
            const tag = document.createElement('span');
            tag.className = 'turning-point-tag';
            tag.textContent = isZh ? '轉折點' : 'Turning Point';
            tag.style.color = '#e53e3e';
            mainName.appendChild(tag);
        }

        container.appendChild(mainName);

        // 4. 處理中文模式下的英文站名及英文副站名
        if (isZh && stop.nameEn) {
            const enName = document.createElement('div');
            enName.className = 'stop-english-name';
            enName.textContent = stop.nameEn.replace(/\^\^/g, '');

            if (stop.nameSubEn) {
                const enSub = document.createElement('span');
                enSub.className = 'stop-sub-name';
                enSub.textContent = `(${stop.nameSubEn})`;
                enName.appendChild(enSub);
            }

            container.appendChild(enName);
        }
    },

    renderTimetablePanel: function (routeItem, direction = 'A') {
        const oldPanel = document.getElementById('timetablePanel');
        if (oldPanel) oldPanel.remove();

        const timetableData = DataHandler.getTimetableData(routeItem, direction);
        if (!timetableData) return;

        // 建立外層遮罩
        const panelOverlay = document.createElement('div');
        panelOverlay.id = 'timetablePanel';
        panelOverlay.className = 'timetable-panel-overlay'; // 移除 modern-blur 樣式 class

        // 建立內容面板
        const panelContent = document.createElement('div');
        panelContent.className = 'timetable-panel-content';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'timetable-panel-close-modern';
        closeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
        closeBtn.addEventListener('click', () => {
            panelOverlay.remove();
        });
        panelContent.appendChild(closeBtn);

        // 獲取目的地名稱
        let destName = '';
        let isDirLoop = false;
        const enabledShiftsForDir = DataHandler.getEnabledShifts(routeItem, direction);
        if (enabledShiftsForDir && enabledShiftsForDir.length > 0) {
            isDirLoop = DataHandler.isShiftCircular(routeItem, enabledShiftsForDir[0], direction);
            if (!isDirLoop) {
                destName = DataHandler.getShiftStartEnd(routeItem, enabledShiftsForDir[0], direction).end;
                destName = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW' ? `往 ${destName}` : `to ${destName}`;
            }
        }
        if (!destName || destName === LangHandler.getText('noInformation')) {
            destName = DataHandler.getDirectionStartEndStops(routeItem, direction).last;
            destName = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW' ? `往 ${destName}` : `to ${destName}`;
        }
        if (isDirLoop) {
            destName = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW' ? '循環線' : 'Loop';
        }

        // 獲取該路線第一個班次的顏色
        let mainRouteColor = '#2563eb';
        const enabledShifts = DataHandler.getEnabledShifts(routeItem);
        if (enabledShifts && enabledShifts.length > 0) {
            const firstShiftConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
            if (firstShiftConfig) {
                if (firstShiftConfig.color) mainRouteColor = firstShiftConfig.color;
                if (firstShiftConfig.textColor) textColor = firstShiftConfig.textColor;
            }
        }

        const header = document.createElement('div');
        header.className = 'timetable-panel-header-modern';
        var textColor = routeItem.textColor || '#ffffff';

        // 綁定主色與文字顏色到 route-badge 的背景
        const titleText = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW'
            ? `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> 營運時間表 <span class="dest-pill">${destName}</span>`
            : `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> Timetable <span class="dest-pill">${destName}</span>`;

        header.innerHTML = `<h2 class="panel-title-modern">${titleText}</h2>`;
        panelContent.appendChild(header);

        const scrollPanel = document.createElement('div');
        scrollPanel.className = 'timetable-scroll-panel custom-scrollbar-panel';

        // 循環渲染班次
        if (timetableData.data && Object.keys(timetableData.data).length > 0) {
            const shiftKeys = Object.keys(timetableData.data);

            shiftKeys.forEach((shiftKey, shiftIndex) => {
                const shiftDataRaw = timetableData.data[shiftKey];
                const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
                // 支援陣列 (多日子規則) 或單一物件 (向下相容)
                const shiftEntries = Array.isArray(shiftDataRaw) ? shiftDataRaw : [shiftDataRaw];

                // 針對每個班次 (如 normal) 只建立「一張」外層卡片
                const card = document.createElement('div');
                card.className = 'timetable-shift-card-modern';

                // 建立卡片頂部的班次標題行
                const titleRow = document.createElement('div');
                titleRow.className = 'shift-title-premium';

                const colorRect = document.createElement('span');
                colorRect.className = 'shift-color-rect';
                colorRect.style.backgroundColor = shiftConfig.color || '#4a90e2';
                titleRow.appendChild(colorRect);

                const titleTextSpan = document.createElement('span');
                titleTextSpan.textContent = shiftConfig.label;
                titleRow.appendChild(titleTextSpan);

                card.appendChild(titleRow);

                // 在同一張卡片內，循環渲染該班次的不同日子規則
                shiftEntries.forEach((shift, index) => {
                    const daySection = document.createElement('div');
                    daySection.className = 'shift-day-section';

                    // 如果不是第一個日子規則，加上頂部虛線分隔，增加層次感
                    if (index > 0) {
                        daySection.style.borderTop = '1px dashed #cbd5e1';
                        daySection.style.marginTop = '16px';
                        daySection.style.paddingTop = '16px';
                    }

                    // 渲染營運日子標籤 (Service Days Tag)
                    if (shift.serviceDays) {
                        const tagWrap = document.createElement('div');
                        tagWrap.style.marginBottom = '12px';

                        const tagSpan = document.createElement('span');
                        tagSpan.className = 'service-day-tag';

                        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
                        const dict = {
                            'weekday': { zh: '星期一至五', en: 'Mon - Fri' },
                            'mon_sat': { zh: '星期一至六', en: 'Mon - Sat' },
                            'saturday': { zh: '星期六', en: 'Saturday' },
                            'sunday': { zh: '星期日', en: 'Sunday' },
                            'weekend_holiday': { zh: '星期六、日及公眾假期', en: 'Sat, Sun & Public Holidays' },
                            'holiday': { zh: '星期日及公眾假期', en: 'Sun & Public Holidays' },
                            'daily': { zh: '每日', en: 'Daily' },
                            'custom': {
                                zh: shift.customDaysCn || shift.customDays || '指定日子',
                                en: shift.customDaysEn || shift.customDays || 'Specific Dates'
                            }
                        };

                        let tagText = shift.serviceDays;
                        if (dict[shift.serviceDays]) {
                            tagText = isZh ? dict[shift.serviceDays].zh : dict[shift.serviceDays].en;
                        }
                        tagSpan.textContent = tagText;

                        // 針對假日/週末加上專屬紅色樣式
                        if (['holiday', 'weekend_holiday', 'sunday'].includes(shift.serviceDays)) {
                            tagSpan.classList.add('holiday-tag');
                        }

                        tagWrap.appendChild(tagSpan);
                        daySection.appendChild(tagWrap);
                    }

                    const infoGrid = document.createElement('div');
                    infoGrid.className = 'timetable-info-modern-grid';

                    const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

                    if (shift.is24Hours) {
                        const label24h = isZh ? '24小時營運' : '24-Hour Service';

                        let freqBadgeHtml = '';
                        // 🌟 修改點 1：只有當 cover = true 時，才提取單一間隔作為全天候總結顯示
                        if (shift.cover && shift.interval && shift.interval.length > 0) {
                            const intv = shift.interval[0];
                            // 判斷 interval 是否為 0，若不是才顯示 badge
                            if (intv.interval !== "0" && intv.interval !== 0) {
                                const freqText = isZh ? `${intv.interval} 分鐘` : `${intv.interval} mins`;
                                freqBadgeHtml = `<span class="interval-badge" style="margin-left: 10px;">⏱ ${freqText}</span>`;
                            }
                        }

                        infoGrid.innerHTML = `
                            <div class="info-modern-box first" style="flex: 1; align-items: center; justify-content: center; background: #eff6ff; border-color: #bfdbfe;">
                                <span class="box-time" style="font-size: 16px; color: #1d4ed8;">🕒 ${label24h}</span>
                                ${freqBadgeHtml}
                            </div>
                        `;
                    } else {
                        const firstLabel = isZh ? '首班車' : 'First Bus';
                        const lastLabel = isZh ? '末班車' : 'Last Bus';
                        infoGrid.innerHTML = `
                            <div class="info-modern-box first">
                                <span class="box-lbl">${firstLabel}</span>
                                <span class="box-time">${shift.firstTime || '--:--'}</span>
                            </div>
                            <div class="info-modern-box last">
                                <span class="box-lbl">${lastLabel}</span>
                                <span class="box-time">${shift.lastTime || '--:--'}</span>
                            </div>
                        `;
                    }
                    daySection.appendChild(infoGrid);

                    const shouldHideIntervalTable = shift.is24Hours && shift.cover;

                    if (shift.interval && shift.interval.length > 0 && !shouldHideIntervalTable) {
                        const intervalContainer = document.createElement('div');
                        intervalContainer.className = 'interval-container-modern';

                        const dirInfo = DataHandler.getDirectionStartEndStops(routeItem, direction);
                        const startName = dirInfo.first;
                        const headerRow = document.createElement('div');
                        headerRow.className = 'interval-header-modern';
                        headerRow.style.display = 'flex';
                        headerRow.style.justifyContent = 'space-between';
                        headerRow.style.padding = '4px 8px 10px 8px';
                        headerRow.style.borderBottom = '2px solid #e2e8f0';
                        headerRow.style.marginBottom = '4px';
                        headerRow.style.fontSize = '13px';
                        headerRow.style.fontWeight = '700';
                        headerRow.style.color = '#64748b';

                        const startText = isZh ? `${startName} 開出` : `From ${startName}`;
                        const freqTitle = isZh ? `班次 (分鐘)` : `Freq. (mins)`;

                        headerRow.innerHTML = `
                        <span>${startText}</span>
                        <span>${freqTitle}</span>
                    `;
                        intervalContainer.appendChild(headerRow);

                        const clockSvg = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px; vertical-align: text-bottom;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 12"></polyline></svg>`;

                        shift.interval.forEach(intv => {
                            const row = document.createElement('div');
                            row.className = 'interval-row-modern';

                            if (intv.interval === "0" || intv.interval === 0) {
                                row.innerHTML = `
                                <span class="interval-time-range">${intv.time}</span>
                            `;
                            } else {
                                // 因為表頭已經加上 (分鐘) 單位，這裡只需顯示純數字即可保持簡潔
                                row.innerHTML = `
                                <span class="interval-time-range">${intv.time}</span>
                                <span class="interval-badge">${clockSvg}${intv.interval}</span>
                            `;
                            }
                            intervalContainer.appendChild(row);
                        });
                        daySection.appendChild(intervalContainer);
                    }

                    card.appendChild(daySection);
                });

                scrollPanel.appendChild(card);

                if (shiftIndex < shiftKeys.length - 1) {
                    const separator = document.createElement('div');
                    separator.className = 'shift-card-separator';
                    scrollPanel.appendChild(separator);
                }
            });
        } else {
            const emptyTip = document.createElement('div');
            emptyTip.className = 'empty-tip-modern';
            emptyTip.textContent = CONFIG.emptyTipText[CONFIG.currentLang] || '暫無數據';
            scrollPanel.appendChild(emptyTip);
        }

        panelContent.appendChild(scrollPanel);
        panelOverlay.appendChild(panelContent);
        document.body.appendChild(panelOverlay);

        // 點擊遮罩空白處關閉
        panelOverlay.addEventListener('click', (e) => {
            if (e.target === panelOverlay) panelOverlay.remove();
        });
    },

    renderLevelModal: function (routeItem) {
        const oldOverlay = document.getElementById('level-popup-overlay');
        if (oldOverlay) oldOverlay.remove();

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
        var mainRouteColor = '#4a90e2';
        var textColor = routeItem.textColor || '#ffffff';
        const enabledShifts = DataHandler.getEnabledShifts(routeItem);
        if (enabledShifts && enabledShifts.length > 0) {
            const firstShiftConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
            if (firstShiftConfig && firstShiftConfig.color) mainRouteColor = firstShiftConfig.color;
        }

        const overlay = document.createElement('div');
        overlay.id = 'level-popup-overlay';
        overlay.className = 'timetable-panel-overlay modern-blur';

        const content = document.createElement('div');
        content.className = 'timetable-panel-content';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'timetable-panel-close-modern';
        closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        closeBtn.addEventListener('click', () => overlay.remove());
        content.appendChild(closeBtn);

        const header = document.createElement('div');
        header.className = 'timetable-panel-header-modern';
        const titleText = isZh ? `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> 解鎖條件` : `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> Unlock Levels`;
        header.innerHTML = `<h2 class="panel-title-modern">${titleText}</h2>`;
        content.appendChild(header);

        const body = document.createElement('div');
        body.className = 'fare-modal-body';

        var unlockLevels = DataHandler.getRouteUnlockLevels(routeItem);
        if (unlockLevels.length > 0) {
            const group = document.createElement('div');
            group.className = 'level-unlock-list';

            unlockLevels.forEach(l => {
                var shiftConfig = DataHandler.getShiftConfig(routeItem, l.shift);
                var shiftLabel = shiftConfig ? shiftConfig.label : l.shift;
                var shiftColor = shiftConfig && shiftConfig.color ? shiftConfig.color : '#4a90e2';
                var shiftTextColor = shiftConfig && shiftConfig.textColor ? shiftConfig.textColor : '#ffffff';

                var shiftStartEnd = DataHandler.getShiftStartEnd(routeItem, l.shift, l.bound);
                let isShiftLoop = DataHandler.isShiftCircular(routeItem, l.shift, l.bound);

                // 加入現代美觀的 SVG 箭頭與循環圖示
                var separator = isShiftLoop
                    ? `<span class="dir-icon loop" style="color:${shiftColor}; display: inline-flex; align-items: center;"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.36l5.67-5.67"/></svg></span>`
                    : `<span class="dir-icon" style="color:#94a3b8; display: inline-flex; align-items: center;"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>`;

                var destText = isShiftLoop ? (LangHandler.getText('loopDirection') || '循環線') : shiftStartEnd.end;
                var startText = shiftStartEnd.start;

                group.innerHTML += `
                <div class="level-unlock-card">
                    <div class="level-unlock-left">
                        <div class="shift-tag" style="background-color: ${shiftColor}; border-color: ${shiftColor}; color: ${shiftTextColor};">
                            ${shiftLabel}
                        </div>
                        <div class="level-route-dir" style="display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 16px;">
                            <span class="dir-stop">${startText}</span>
                            ${separator}
                            <span class="dir-stop ${isShiftLoop ? 'loop-text' : ''}" style="${isShiftLoop ? `color:${shiftColor}` : ''}">${destText}</span>
                        </div>
                    </div>
                    <div class="level-unlock-right">
                        <div class="level-req-badge-group">
${l.level !== undefined && l.level !== null ? `
                            <span class="modern-req-pill req-lvl">
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                Lv.${l.level}
                            </span>` : ''}
                            
                            ${l.sunshards !== undefined && l.sunshards !== null ? `
                            <span class="modern-req-pill req-sunshards">
                                <svg viewBox="0 0 100 100" width="20" height="20" style="margin-right:6px;">
                                    <circle cx="50" cy="50" r="16" fill="currentColor"/>
                                    <g stroke="currentColor" stroke-width="6" stroke-linecap="round">
                                        <line x1="50" y1="18" x2="50" y2="24" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(45 50 50)" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(90 50 50)" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(135 50 50)" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(180 50 50)" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(225 50 50)" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(270 50 50)" />
                                        <line x1="50" y1="18" x2="50" y2="24" transform="rotate(315 50 50)" />
                                    </g>
                                </svg>
                                ${l.sunshards}
                            </span>` : ''}

                            ${l.routes && l.routes.length > 0 ? `
                            <span class="modern-req-pill req-routes" style="display:inline-flex; align-items:center; flex-wrap: wrap; gap: 4px; padding-right: 8px;">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px; flex-shrink: 0;"><path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2"/><circle cx="16" cy="17" r="2"/><path d="M9 17h5"/><circle cx="7" cy="17" r="2"/></svg>
${l.routes.map(r => {
                    var routeItemObj = DataHandler.getFirstRouteByNum(r); // Updated function name
                    var bg = '#4a90e2', txt = '#ffffff';
                    if (routeItemObj) {
                        var sh = DataHandler.getEnabledShifts(routeItemObj);
                        if (sh && sh.length > 0) {
                            var cfg = DataHandler.getShiftConfig(routeItemObj, sh[0]);
                            if (cfg.color) bg = cfg.color;
                            if (cfg.textColor) txt = cfg.textColor;
                        }
                    }
                    return `<span class="route-badge" style="--route-badge-bg: ${bg}; --route-badge-color: ${txt}; background-color: ${bg}; color: ${txt}; font-size: 13px; padding: 2px 8px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.3); min-width: auto; height: auto; line-height: 1;">${r}</span>`;
                }).join('')}
                            </span>` : ''}

                            ${((CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW') ? l.unlockDateCn : (l.unlockDateEn || l.unlockDateCn)) ? `
                            <span class="modern-req-pill req-date">
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                ${((CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW') ? l.unlockDateCn : (l.unlockDateEn || l.unlockDateCn))}
                            </span>` : ''}
                        </div>
                    </div>
                </div>
            `;
            });
            body.appendChild(group);
        } else {
            body.innerHTML = `<span style="color:#94a3b8; font-size:14px; display:block; text-align:center; padding: 20px;">${LangHandler.getText('noInformation')}</span>`;
        }

        content.appendChild(body);
        overlay.appendChild(content);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
    },

    // 辅助函数：加深颜色
    darkenColor: function (color, percent) {
        if (!color || !/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color)) {
            return '#3a80d2';
        }
        percent = Math.max(0, Math.min(100, percent || 10));

        color = color.replace(/^#/, '');
        if (color.length === 3) {
            color = color.split('').map(c => c + c).join('');
        }

        var r = parseInt(color.substr(0, 2), 16);
        var g = parseInt(color.substr(2, 2), 16);
        var b = parseInt(color.substr(4, 2), 16);

        r = Math.max(0, Math.round(r * (100 - percent) / 100));
        g = Math.max(0, Math.round(g * (100 - percent) / 100));
        b = Math.max(0, Math.round(b * (100 - percent) / 100));

        var nr = r.toString(16).padStart(2, '0');
        var ng = g.toString(16).padStart(2, '0');
        var nb = b.toString(16).padStart(2, '0');

        return `#${nr}${ng}${nb}`;
    },

    // 渲染更新日志
    renderUpdateLog: function () {
        var logPanel = document.getElementById('updateLogPanel');
        if (!logPanel) return;

        logPanel.innerHTML = '';

        var logHeader = document.createElement('div');
        logHeader.className = 'log-header';

        var logTitle = document.createElement('div');
        logTitle.className = 'log-title';
        logTitle.textContent = LangHandler.getText('updateLog');
        logHeader.appendChild(logTitle);

        logPanel.appendChild(logHeader);

        if (typeof updateLogData !== 'undefined' && updateLogData && updateLogData.logs) {
            var logList = document.createElement('div');
            logList.className = 'log-list';
            logPanel.appendChild(logList);

            updateLogData.logs.forEach(function (logItem) {
                var logItemEl = document.createElement('div');
                logItemEl.className = 'log-item';

                var logItemHeader = document.createElement('div');
                logItemHeader.className = 'log-item-header';

                var version = document.createElement('div');
                version.className = 'log-item-version';
                version.textContent = `${LangHandler.getText('logVersion')} ${logItem.version}`;
                logItemHeader.appendChild(version);

                var time = document.createElement('div');
                time.className = 'log-item-time';
                time.textContent = logItem.time || logItem.updateTime || LangHandler.getText('noInformation');
                logItemHeader.appendChild(time);

                logItemEl.appendChild(logItemHeader);

                var logItemTitle = document.createElement('div');
                logItemTitle.className = 'log-item-title';
                logItemTitle.textContent = logItem.title || LangHandler.getText('logUpdateContent');
                logItemEl.appendChild(logItemTitle);

                var contentCategories = document.createElement('div');
                contentCategories.className = 'log-content-categories';

                var content = logItem.content || {};

                var categories = [
                    { key: 'added', className: 'log-category-added' },
                    { key: 'fixed', className: 'log-category-fixed' },
                    { key: 'removed', className: 'log-category-removed' },
                    { key: 'revamped', className: 'log-category-revamped' },
                    { key: 'improvements', className: 'log-category-improvements' }
                ];

                categories.forEach(function (category) {
                    if (content[category.key] && content[category.key].length > 0) {
                        var categoryWrap = document.createElement('div');
                        categoryWrap.className = `log-category ${category.className}`;

                        var categoryTitle = document.createElement('div');
                        categoryTitle.className = 'log-category-title';
                        categoryTitle.textContent = LangHandler.getText(`log${category.key.charAt(0).toUpperCase() + category.key.slice(1)}`) ||
                            category.key.charAt(0).toUpperCase() + category.key.slice(1);
                        categoryWrap.appendChild(categoryTitle);

                        var categoryList = document.createElement('ul');
                        categoryList.className = 'log-category-list';

                        content[category.key].forEach(function (item) {
                            var li = document.createElement('li');
                            li.textContent = item;
                            categoryList.appendChild(li);
                        });

                        categoryWrap.appendChild(categoryList);
                        contentCategories.appendChild(categoryWrap);
                    }
                });

                logItemEl.appendChild(contentCategories);
                logList.appendChild(logItemEl);
            });
        } else {
            var emptyLog = document.createElement('div');
            emptyLog.className = 'empty-log-tip';
            emptyLog.textContent = LangHandler.getText('noUpdateLog');
            logPanel.appendChild(emptyLog);
        }

        var logFooter = document.createElement('div');
        logFooter.className = 'log-footer';

        logPanel.appendChild(logFooter);
    },

    initPageLoad: function () {
        LangHandler.renderAllTexts();
        PageController.initPageEvents();
        const input = document.getElementById('routeNumberInput');
        if (input) {
            const processInput = function (value) {
                requestAnimationFrame(() => {
                    Renderer.initKeyboardValidity(value);
                    Renderer.renderRouteSuggestions(value);
                });
            };

            const debouncedInputHandler = debounce(function (e) {
                processInput(e.target.value);
            }, 150);

            // Only use 'input', remove the synchronous 'change' listeners
            input.addEventListener('input', debouncedInputHandler);

            setTimeout(() => {
                processInput('');
            }, 300);
        } else {
            console.warn('Error: routeNumberInput');
        }

        window.addEventListener('load', function () {
            setTimeout(() => {
                Renderer.updatePageLang();
                if (input) {
                    Renderer.initKeyboardValidity(input.value);
                }
                console.log('Page initialization done');
                console.log(CONFIG.currentLang);
            }, 500);
        });
    },

};

document.addEventListener('DOMContentLoaded', function () {
    try {
        Renderer.initPageLoad();

        ThemeManager.init();
        ContextMenuManager.init();

        const zhBtn = document.getElementById('switchZhBtn');
        const enBtn = document.getElementById('switchEnBtn');

        if (zhBtn && enBtn) {
            if (CONFIG.currentLang === 'zh-CN') {
                zhBtn.classList.add('active');
                enBtn.classList.remove('active');
            } else {
                enBtn.classList.add('active');
                zhBtn.classList.remove('active');
            }
        }

        console.log('Welcome to Sunshine Islands Route Inquiry System:');
    } catch (error) {
        console.error('Failed to load:', error);
        alert(LangHandler.getText('initFailed'));
    }
});

window.addEventListener('error', function (e) {
    console.error('Failed to catch:', e.message, e.filename, e.lineno);
});

function debounce(func, wait = 200) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function throttle(func, limit = 300) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

function formatDate(date, format = 'YYYY-MM-DD') {
    if (!date) date = new Date();
    if (typeof date === 'string') date = new Date(date);

    const lang = CONFIG.currentLang;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const monthNames = {
        'zh-CN': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        'en-US': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    const weekNames = {
        'zh-CN': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        'en-US': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };

    let result = format;
    result = result.replace('YYYY', year);
    result = result.replace('MM', month);
    result = result.replace('DD', day);
    result = result.replace('HH', hours);
    result = result.replace('mm', minutes);
    result = result.replace('ss', seconds);
    result = result.replace('MMMM', monthNames[lang][date.getMonth()]);
    result = result.replace('ddd', weekNames[lang][date.getDay()]);

    return result;
}

document.addEventListener('DOMContentLoaded', function () {
    const stationInput = document.getElementById('stationSearchInput');
    const listContainer = document.getElementById('stationListContainer');

    if (stationInput && listContainer) {
        window.triggerStationSearchLoad = function (keyword = '') {
            keyword = keyword.trim().toLowerCase();
            const listContainer = document.getElementById('stationListContainer');
            if (!listContainer) return;
            listContainer.innerHTML = '';

            const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

            if (!keyword) {
                listContainer.innerHTML = `<div class="station-empty-tip" data-lang-key="searchStopPlaceholder">${LangHandler.getText('searchStopPlaceholder')}</div>`;
                return;
            }

            const validRoutes = DataHandler.getValidRoutes();
            const matchedRoutesMap = new Map(); // 儲存路綫匹配結果
            const matchedStopsMap = new Map();  // 儲存站點匹配結果

            validRoutes.forEach(route => {
                const allRouteCodesObj = DataHandler.getRouteCodes(route);
                const routeCodesStr = allRouteCodesObj.map(c => c.code.toLowerCase());

                // 1. 判斷是否命中了路綫編號或 RouteCode
                const isMatchRoute = route.route.toLowerCase().includes(keyword) || routeCodesStr.some(code => code.includes(keyword));

                ['A', 'B', 'C'].forEach(dir => {
                    if (!route.stops || !route.stops[dir] || route.stops[dir].length === 0) return;

                    // 如果命中了路綫，將該方向的有效班次加入路綫結果
                    if (isMatchRoute) {
                        const shifts = DataHandler.getEnabledShifts(route, dir);
                        shifts.forEach(shiftKey => {
                            const specificCodeObj = allRouteCodesObj.find(c => c.bound === dir && c.shift === shiftKey);
                            const specificCode = specificCodeObj ? specificCodeObj.code : route.route;

                            // 精確過濾：確保該特定班次的 routeCode 或主編號符合關鍵字
                            const exactMatch = route.route.toLowerCase().includes(keyword) || specificCode.toLowerCase().includes(keyword);

                            if (exactMatch) {
                                const key = `ROUTE-${route._id}-${dir}-${shiftKey}`;
                                if (!matchedRoutesMap.has(key)) {
                                    matchedRoutesMap.set(key, {
                                        routeId: route._id,
                                        routeNum: route.route,
                                        routeCode: specificCode,
                                        direction: dir,
                                        shiftKey: shiftKey,
                                        routeData: route
                                    });
                                }
                            }
                        });
                    }

                    // 2. 判斷是否命中了站點名稱 (新增：如果 searchable 為 false，則跳過不顯示該路綫的站點結果)
                    if (route.searchable !== false) {
                        route.stops[dir].forEach(stop => {
                            if (!stop.visible) return;
                            const nameCn = (stop.nameCn || '').toLowerCase();
                            const nameEn = (stop.nameEn || '').toLowerCase();
                            const isMatchStop = nameCn.includes(keyword) || nameEn.includes(keyword);

                            if (isMatchStop) {
                                const key = `STOP-${route._id}-${dir}-${stop.nameCn}`;
                                if (!matchedStopsMap.has(key)) {
                                    matchedStopsMap.set(key, {
                                        routeId: route._id,
                                        routeNum: route.route,
                                        nameCn: stop.nameCn,
                                        nameEn: stop.nameEn,
                                        direction: dir,
                                        stopFor: [...(stop.stopFor || [])],
                                        targetSeq: stop.seq,
                                        routeData: route
                                    });
                                } else {
                                    const existing = matchedStopsMap.get(key);
                                    (stop.stopFor || []).forEach(s => {
                                        if (!existing.stopFor.includes(s)) existing.stopFor.push(s);
                                    });
                                }
                            }
                        });
                    }
                });
            });

            const routeResults = Array.from(matchedRoutesMap.values());
            const stopResults = Array.from(matchedStopsMap.values());

            if (routeResults.length === 0 && stopResults.length === 0) {
                listContainer.innerHTML = `<div class="station-empty-tip">${LangHandler.getText('noSearch', { keyword: keyword })}</div>`;
                return;
            }

            // === 渲染區塊 A ===
            if (routeResults.length > 0) {
                const routeGroupTitle = document.createElement('div');
                routeGroupTitle.style.cssText = "font-size: 20px; font-weight: 800; color: #4a90e2; padding: 5px 10px; text-transform: uppercase; letter-spacing: 0.5px;";
                routeGroupTitle.textContent = LangHandler.getText('routeResult');
                listContainer.appendChild(routeGroupTitle);

                routeResults.forEach(result => {
                    const item = document.createElement('div');
                    item.className = 'station-item';

                    const shiftConfig = DataHandler.getShiftConfig(result.routeData, result.shiftKey);
                    let badgeText = result.routeNum;
                    if (result.shiftKey !== 'normal') {
                        let match = shiftConfig.label.match(/^(.+?)\s*\((.+?)\)$/);
                        badgeText = match ? match[1].trim() : shiftConfig.label;
                    }

                    const badgeColor = shiftConfig.color || '#2563eb';
                    const textColor = shiftConfig.textColor || '#ffffff';

                    let isShiftLoop = DataHandler.isShiftCircular(result.routeData, result.shiftKey, result.direction);
                    let startEnd = DataHandler.getShiftStartEnd(result.routeData, result.shiftKey, result.direction);
                    let startName = startEnd.start;
                    let endName = startEnd.end;

                    if (!startName || startName === LangHandler.getText('noInformation')) {
                        let dirStops = DataHandler.getDirectionStartEndStops(result.routeData, result.direction);
                        startName = dirStops.first;
                        endName = dirStops.last;
                    }

                    // 動態組合起訖點 UI
                    let destTextHtml = '';
                    if (isShiftLoop) {
                        destTextHtml = `<span style="color: #64748b;">${startName}</span> <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" style="margin: 0 6px; vertical-align: middle; color: ${badgeColor};"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.36l5.67-5.67"/></svg> <span style="color: ${badgeColor};">${endName}</span>`;
                    } else {
                        destTextHtml = `<span style="color: #64748b;">${startName}</span> <svg viewBox="0 0 24 24" width="14" height="14" stroke="#94a3b8" stroke-width="2" fill="none" style="margin: 0 6px; vertical-align: middle;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> <span>${endName}</span>`;
                    }

                    item.innerHTML = `
                        <div style="display: flex; flex-direction: column; width: 100%; gap: 10px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span class="route-badge" style="--route-badge-bg: ${badgeColor}; --route-badge-color: ${textColor}; min-width: 50px;">${badgeText}</span>
                                    <span class="badge-common route-code-badge" style="padding: 4px 8px;">${result.routeCode}</span>
                                </div>
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#94a3b8" stroke-width="2" fill="none" style="flex-shrink: 0;"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                            <span class="dest-pill" style="border: 1px solid #e2e8f0; background-color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 13.5px; font-weight: 600; display: inline-block; width: fit-content;">
                                ${destTextHtml}
                            </div>
                        </div>
                    `;

                    item.addEventListener('click', () => {
                        if (result.routeNum === 'S1' || result.routeNum === 'S2') {
                            window.location.href = './travel/index.html';
                            return;
                        }

                        document.getElementById('stationSearchInput').value = '';
                        if (listContainer) listContainer.scrollTop = 0;

                        CONFIG.currentRouteNum = result.routeNum;
                        CONFIG.currentRouteId = result.routeId;
                        CONFIG.currentDirection = result.direction;
                        CONFIG.currentPage = 1;

                        PageController.showScreen('stopScreen');
                        PageController.hideScreen('stationSearchScreen');
                        Renderer.renderStopPage(result.routeId);
                    });

                    listContainer.appendChild(item);
                });
            }

            // === 渲染區塊 B ===
            if (stopResults.length > 0) {
                const stopGroupTitle = document.createElement('div');
                stopGroupTitle.style.cssText = "font-size: 20px; font-weight: 800; color: #4a90e2; padding: 5px 10px; text-transform: uppercase; letter-spacing: 0.5px;";
                stopGroupTitle.textContent = LangHandler.getText('stopResult');
                listContainer.appendChild(stopGroupTitle);

                stopResults.forEach(result => {
                    const item = document.createElement('div');
                    item.className = 'station-item';
                    const cleanCn = result.nameCn.replace(/\^\^/g, '');
                    const cleanEn = result.nameEn ? result.nameEn.replace(/\^\^/g, '') : '';

                    let shiftRowsHtml = '';

                    // 【修復重點】改用 getRouteById 來獲取路線資料，徹底解決同編號互相覆蓋的 Bug
                    const routeInfo = DataHandler.getRouteById(result.routeId);

                    if (routeInfo) {
                        let shifts = DataHandler.getEnabledShifts(routeInfo, result.direction);
                        if (shifts && shifts.length > 0) {
                            if (Array.isArray(result.stopFor)) {
                                shifts = shifts.filter(shiftKey => result.stopFor.includes(shiftKey));
                            }
                            if (shifts.length > 0) {
                                let seenExtra = new Set();
                                shifts.forEach(shiftKey => {
                                    const shiftConfig = DataHandler.getShiftConfig(routeInfo, shiftKey);
                                    let badgeText = result.routeNum;
                                    let isNormal = (shiftKey === 'normal');

                                    if (!isNormal) {
                                        let match = shiftConfig.label.match(/^(.+?)\s*\((.+?)\)$/);
                                        badgeText = match ? match[1].trim() : shiftConfig.label;
                                    }

                                    if (!seenExtra.has(badgeText + shiftKey)) {
                                        seenExtra.add(badgeText + shiftKey);
                                        let badgeColor = shiftConfig.color || '#2563eb';
                                        let textColor = shiftConfig.textColor || '#ffffff';
                                        let boundKey = result.direction;
                                        let isShiftLoop = DataHandler.isShiftCircular(routeInfo, shiftKey, boundKey);

                                        let destName = DataHandler.getShiftStartEnd(routeInfo, shiftKey, boundKey).end;
                                        if (!destName || destName === LangHandler.getText('noInformation')) {
                                            destName = DataHandler.getDirectionStartEndStops(routeInfo, boundKey).last;
                                        }

                                        let destText = '';
                                        if (isShiftLoop) {
                                            let loopText = LangHandler.getText('loopDirection') || '循環線';
                                            destText = isZh ? `${loopText} (經 ${destName})` : `${loopText} (via ${destName})`;
                                        } else {
                                            destText = isZh ? `往 ${destName}` : `to ${destName}`;
                                        }

                                        let badgeHtml = `<span class="route-badge" style="--route-badge-bg: ${badgeColor}; --route-badge-color: ${textColor}; min-width: 50px;">${badgeText}</span>`;
                                        let destHtml = `<span class="dest-pill" style="margin-left: 8px; padding: 4px 10px; border: 1px solid #e2e8f0; background-color: #f1f5f9; padding: 6px 12px; border-radius: 8px; font-size: 13.5px; font-weight: 600; display: inline-block; width: fit-content;">${destText}</span>`;

                                        shiftRowsHtml += `
                                            <div style="display: flex; align-items: center; width: 100%;">
                                                ${badgeHtml}
                                                ${destHtml}
                                            </div>
                                        `;
                                    }
                                });
                            }
                        }
                    }

                    item.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                            <div style="flex: 1; min-width: 0;">
                                <div class="station-name-cn">${cleanCn}</div>
                                ${cleanEn ? `<div class="station-name-en">${cleanEn}</div>` : ''}
                                <div class="station-routes" style="display: flex; flex-direction: column; width: 100%; gap: 6px; margin-top: 8px;">
                                    ${shiftRowsHtml}
                                </div>
                            </div>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="#94a3b8" stroke-width="2" fill="none" style="margin-left: 12px; flex-shrink: 0;"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    `;

                    item.addEventListener('click', () => {
                        if (result.routeNum === 'S1' || result.routeNum === 'S2') {
                            window.location.href = './travel/index.html';
                            return;
                        }

                        document.getElementById('stationSearchInput').value = '';
                        window.triggerStationSearchLoad();
                        if (listContainer) listContainer.scrollTop = 0;

                        CONFIG.currentRouteNum = result.routeNum;
                        CONFIG.currentRouteId = result.routeId;
                        CONFIG.currentDirection = result.direction;

                        const validStops = DataHandler.getValidStops(routeInfo);
                        let targetSeq = result.targetSeq;
                        let targetIndex = validStops.findIndex(s => s.seq === targetSeq);

                        CONFIG.currentPage = targetIndex !== -1 ? Math.floor(targetIndex / CONFIG.pageSize) + 1 : 1;

                        PageController.showScreen('stopScreen');
                        PageController.hideScreen('stationSearchScreen');
                        Renderer.renderStopPage(result.routeId);

                        if (targetSeq !== -1) {
                            setTimeout(() => {
                                const targetRow = document.querySelector(`.stop-row-visible[data-seq="${targetSeq}"]`);
                                if (targetRow) {
                                    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    targetRow.classList.add('highlight-flash');
                                    setTimeout(() => targetRow.classList.remove('highlight-flash'), 5000);
                                }
                            }, 350);
                        }
                    });
                    listContainer.appendChild(item);
                });
            }
        };

        stationInput.addEventListener('input', debounce(function () {
            window.triggerStationSearchLoad(this.value);
        }, 150));
    }
});

// ==========================================
// ThemeManager: 深色模式切換管理
// ==========================================
var ThemeManager = {
    init: function () {
        this.bindEvents();
        this.loadTheme();

        // 監聽系統主題變化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (localStorage.getItem('sibsTheme') === 'system' || !localStorage.getItem('sibsTheme')) {
                this.applyTheme('system');
            }
        });
    },

    bindEvents: function () {
        const lightBtn = document.getElementById('themeLightBtn');
        const darkBtn = document.getElementById('themeDarkBtn');
        const systemBtn = document.getElementById('themeSystemBtn');

        if (lightBtn) lightBtn.addEventListener('click', () => this.setTheme('light'));
        if (darkBtn) darkBtn.addEventListener('click', () => this.setTheme('dark'));
        if (systemBtn) systemBtn.addEventListener('click', () => this.setTheme('system'));
    },

    setTheme: function (theme) {
        localStorage.setItem('sibsTheme', theme);
        this.applyTheme(theme);
        this.updateUI(theme);
    },

    loadTheme: function () {
        const savedTheme = localStorage.getItem('sibsTheme') || 'system';
        this.applyTheme(savedTheme);
        this.updateUI(savedTheme);
    },

    applyTheme: function (theme) {
        isDark = false;
        if (theme === 'dark') {
            isDark = true;
        } else if (theme === 'light') {
            isDark = false;
        } else {
            isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (isDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    },

    updateUI: function (theme) {
        document.querySelectorAll('.theme-toggle').forEach(btn => btn.classList.remove('active'));
        if (theme === 'light') {
            const btn = document.getElementById('themeLightBtn');
            if (btn) btn.classList.add('active');
        } else if (theme === 'dark') {
            const btn = document.getElementById('themeDarkBtn');
            if (btn) btn.classList.add('active');
        } else {
            const btn = document.getElementById('themeSystemBtn');
            if (btn) btn.classList.add('active');
        }
    }
};

var ContextMenuManager = {
    // 預設使用自訂選單
    useCustom: localStorage.getItem('sibsContextMenu') !== 'native',

    init: function () {
        this.bindSettings();

        this.menu = document.getElementById('customContextMenu');
        if (!this.menu) return;

        document.addEventListener('contextmenu', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (!this.useCustom) return;

            e.preventDefault();
            this.showMenu(e.clientX, e.clientY);
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('#customContextMenu')) return;
            this.hideMenu();
        });

        window.addEventListener('scroll', () => this.hideMenu(), { passive: true });
        window.addEventListener('resize', () => this.hideMenu(), { passive: true });

        this.bindActions();
    },

    bindSettings: function () {
        const customBtn = document.getElementById('menuCustomBtn');
        const nativeBtn = document.getElementById('menuNativeBtn');

        if (!customBtn || !nativeBtn) return;

        // 初始 UI 狀態
        if (this.useCustom) {
            customBtn.classList.add('active');
            nativeBtn.classList.remove('active');
        } else {
            nativeBtn.classList.add('active');
            customBtn.classList.remove('active');
        }

        customBtn.addEventListener('click', () => {
            this.useCustom = true;
            localStorage.setItem('sibsContextMenu', 'custom');
            customBtn.classList.add('active');
            nativeBtn.classList.remove('active');
        });

        nativeBtn.addEventListener('click', () => {
            this.useCustom = false;
            localStorage.setItem('sibsContextMenu', 'native');
            nativeBtn.classList.add('active');
            customBtn.classList.remove('active');
        });
    },

    showMenu: function (x, y) {
        this.menu.classList.remove('hidden');

        const rect = this.menu.getBoundingClientRect();
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        let posX = x;
        let posY = y;

        if (x + rect.width > winWidth) posX = winWidth - rect.width - 10;
        if (y + rect.height > winHeight) posY = winHeight - rect.height - 10;

        this.menu.style.left = posX + 'px';
        this.menu.style.top = posY + 'px';
    },

    hideMenu: function () {
        this.menu.classList.add('hidden');
    },

    bindActions: function () {
        const backBtn = document.getElementById('ctxBackBtn');
        const reloadBtn = document.getElementById('ctxReloadBtn');
        const settingsBtn = document.getElementById('ctxSettingsBtn');

        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.hideMenu();
                PageController.showScreen('funcScreen');
                PageController.hideScreen('inputScreen');
                PageController.hideScreen('stopScreen');
                PageController.hideScreen('stationSearchScreen');
                PageController.hideScreen('updateLogScreen');
                resetRouteQueryState();
            });
        }
        if (reloadBtn) {
            reloadBtn.addEventListener('click', () => {
                this.hideMenu();
                window.location.reload();
            });
        }
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                this.hideMenu();
                const settingsModal = document.getElementById('settingsModal');
                if (settingsModal) settingsModal.classList.remove('hidden');
            });
        }
    }
};

var P2PManager = {
    allStops: [],
    rawStopsData: [],
    activeInputField: 'start',

    init: function () {
        this.bindEvents();
        this.extractAllStops();
        this.renderAllStopsGrid();
    },

    extractAllStops: function () {
        const stopsMap = new Map();
        DataHandler.getValidRoutes().forEach(route => {
            ['A', 'B', 'C'].forEach(dir => {
                if (route.stops && route.stops[dir]) {
                    route.stops[dir].forEach(stop => {
                        if (stop.visible) {
                            let cleanName = stop.nameCn.replace(/\^\^/g, '');
                            let cleanNameEn = stop.nameEn ? stop.nameEn.replace(/\^\^/g, '') : '';
                            if (!stopsMap.has(cleanName)) {
                                stopsMap.set(cleanName, {
                                    nameCn: cleanName,
                                    nameEn: cleanNameEn,
                                    nameSubCn: stop.nameSubCn || '',
                                    nameSubEn: stop.nameSubEn || ''
                                });
                            }
                        }
                    });
                }
            });
        });
        this.rawStopsData = Array.from(stopsMap.values()).sort((a, b) => a.nameCn.localeCompare(b.nameCn, 'zh-HK'));
        this.allStops = this.rawStopsData.map(s => s.nameCn);
    },

    renderAllStopsGrid: function () {
        const grid = document.getElementById('p2pStopsGrid');
        if (!grid) return;
        grid.innerHTML = '';

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        this.rawStopsData.forEach(stop => {
            const btn = document.createElement('button');
            btn.className = 'p2p-stop-pill';

            const dispName = isZh ? stop.nameCn : (stop.nameEn || stop.nameCn);
            const dispSub = isZh ? stop.nameSubCn : (stop.nameSubEn || stop.nameSubCn);

            btn.innerHTML = `<div class="p-cn">${dispName}</div>${dispSub ? `<div class="p-sub">${dispSub}</div>` : ''}`;
            btn.onclick = () => {
                if (this.activeInputField === 'start') {
                    document.getElementById('p2pStartInput').value = dispName;
                    this.activeInputField = 'end';
                } else {
                    document.getElementById('p2pEndInput').value = dispName;
                }
            };
            grid.appendChild(btn);
        });
    },

    bindEvents: function () {
        const startInput = document.getElementById('p2pStartInput');
        const endInput = document.getElementById('p2pEndInput');
        const swapBtn = document.getElementById('p2pSwapBtn');
        const searchBtn = document.getElementById('p2pSearchBtn');
        const radios = document.querySelectorAll('input[name="p2pPref"]');

        startInput.addEventListener('focus', () => this.activeInputField = 'start');
        endInput.addEventListener('focus', () => this.activeInputField = 'end');

        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                document.querySelectorAll('.p2p-radio-label').forEach(lbl => lbl.classList.remove('active'));
                e.target.closest('.p2p-radio-label').classList.add('active');
            });
        });

        swapBtn.onclick = () => {
            const temp = startInput.value;
            startInput.value = endInput.value;
            endInput.value = temp;
        };

        const setupSuggest = (inputEl, suggestEl, fieldType) => {
            inputEl.addEventListener('input', () => {
                const val = inputEl.value.trim().toLowerCase();
                suggestEl.innerHTML = '';
                if (!val) { suggestEl.classList.add('hidden'); return; }

                const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

                const matches = this.rawStopsData.filter(s =>
                    s.nameCn.toLowerCase().includes(val) ||
                    s.nameSubCn.toLowerCase().includes(val) ||
                    (s.nameEn && s.nameEn.toLowerCase().includes(val)) ||
                    (s.nameSubEn && s.nameSubEn.toLowerCase().includes(val))
                ).slice(0, 8);

                if (matches.length > 0) {
                    matches.forEach(match => {
                        const div = document.createElement('div');
                        div.className = 'p2p-suggest-item';

                        const dispName = isZh ? match.nameCn : (match.nameEn || match.nameCn);
                        const dispSub = isZh ? match.nameSubCn : (match.nameSubEn || match.nameSubCn);

                        div.innerHTML = `<span class="m-name">${dispName}</span>${dispSub ? `<span class="s-name">${dispSub}</span>` : ''}`;
                        div.onclick = () => {
                            inputEl.value = dispName;
                            suggestEl.classList.add('hidden');
                        };
                        suggestEl.appendChild(div);
                    });
                    suggestEl.classList.remove('hidden');
                } else {
                    suggestEl.classList.add('hidden');
                }
            });
        };

        setupSuggest(startInput, document.getElementById('p2pStartSuggest'), 'start');
        setupSuggest(endInput, document.getElementById('p2pEndSuggest'), 'end');
        searchBtn.onclick = () => this.calculateRoute();

        document.getElementById('backToP2PBtn').onclick = () => {
            PageController.showScreen('p2pScreen');
            PageController.hideScreen('p2pDetailScreen');
        };
    },

    toggleStopsPanel: function () {
        const grid = document.getElementById('p2pStopsGrid');
        const arrow = document.getElementById('stopsPanelArrow');
        grid.classList.toggle('hidden');
        arrow.style.transform = grid.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    },

    getLegFare: function (routeItem, dir, startIdx, endIdx, stops) {
        let fares = routeItem.fares || {};
        let baseAdult = fares.adult || 0;
        let baseChild = fares.child || (baseAdult / 2);
        let baseElder = fares.elder || (baseAdult / 2);
        let baseStudent = fares.student || (baseAdult / 2);

        let finalAdult = baseAdult, finalChild = baseChild, finalElder = baseElder, finalStudent = baseStudent;
        let fareType = '全程收費';

        let startName = stops[startIdx].nameCn.replace(/\^\^/g, '');
        let endName = stops[endIdx].nameCn.replace(/\^\^/g, '');

        // 1. 自動計算分段收費 (只要上車站點大於等於分段點即可享有)
        if (fares.sectionFares && Array.isArray(fares.sectionFares)) {
            let bestMatchedPrice = baseAdult;
            let bestSection = null;

            for (let sf of fares.sectionFares) {
                if (sf.direction && !sf.direction.includes(dir)) continue;

                // 找出該分段點在路綫中的位置
                let boundIdx = stops.findIndex(s => s.nameCn.replace(/\^\^/g, '') === sf.fromCn);

                // 如果乘客的上車站點(startIdx) 在分段點之後或剛好在分段點上，且價格更便宜
                if (boundIdx !== -1 && startIdx >= boundIdx) {
                    if (sf.price !== undefined && sf.price < bestMatchedPrice) {
                        bestMatchedPrice = sf.price;
                        bestSection = sf;
                    }
                }
            }

            if (bestSection) {
                finalAdult = bestSection.price !== undefined ? bestSection.price : finalAdult;
                finalChild = bestSection.childPrice !== undefined ? bestSection.childPrice : finalChild;
                finalElder = bestSection.elderPrice !== undefined ? bestSection.elderPrice : finalElder;
                finalStudent = bestSection.studentPrice !== undefined ? bestSection.studentPrice : finalStudent;
                fareType = '分段收費';
            }
        }

        // 2. 自動計算短途回贈 / 雙向分段 (需精確匹配起訖點)
        if (fares.shortDistanceRebates && Array.isArray(fares.shortDistanceRebates)) {
            let rebate = fares.shortDistanceRebates.find(sr =>
                (!sr.direction || sr.direction.includes(dir)) &&
                (sr.startStopCn === startName || sr.startStop === startName) &&
                (sr.alightStopCn === endName || sr.alightStop === endName)
            );

            if (rebate) {
                finalAdult = rebate.actualFare !== undefined ? rebate.actualFare : finalAdult;
                finalChild = rebate.childFare !== undefined ? rebate.childFare : finalChild;
                finalElder = rebate.elderFare !== undefined ? rebate.elderFare : finalElder;
                finalStudent = rebate.studentFare !== undefined ? rebate.studentFare : finalStudent;
                fareType = '短途回贈';
            }
        }

        return {
            fare: finalAdult,
            adult: finalAdult, child: finalChild, elder: finalElder, student: finalStudent,
            type: fareType,
            originalAdult: baseAdult
        };
    },

    // 請將此方法加入 P2PManager 內部
    getExpectedWaitTime: function (routeItem, dir) {
        if (!routeItem.timetable || !routeItem.timetable[dir]) return null;

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTimeVal = currentHour * 60 + currentMinute;
        const dayOfWeek = now.getDay(); // 0 是週日

        let activeIntervalText = null;
        const shifts = routeItem.timetable[dir];

        for (let shiftKey in shifts) {
            const shiftConfigs = Array.isArray(shifts[shiftKey]) ? shifts[shiftKey] : [shifts[shiftKey]];

            for (let config of shiftConfigs) {
                // 判斷今日是否為該班次的營運日
                let dayMatch = false;
                const sDays = config.serviceDays;
                if (sDays === 'daily') dayMatch = true;
                else if (sDays === 'weekday' && dayOfWeek >= 1 && dayOfWeek <= 5) dayMatch = true;
                else if (sDays === 'saturday' && dayOfWeek === 6) dayMatch = true;
                else if (sDays === 'sunday' && dayOfWeek === 0) dayMatch = true;
                else if (sDays === 'weekend_holiday' && (dayOfWeek === 0 || dayOfWeek === 6)) dayMatch = true;
                else if (sDays === 'holiday' && dayOfWeek === 0) dayMatch = true; // 簡化處理：將週日視為假日

                if (!dayMatch || !config.interval) continue;

                // 檢查當下時間是否落在該班次的營運區間內
                for (let intv of config.interval) {
                    if (!intv.time || !intv.time.includes('-')) continue;
                    const times = intv.time.split('-');
                    const startVal = parseInt(times[0].split(':')[0]) * 60 + parseInt(times[0].split(':')[1]);
                    let endVal = parseInt(times[1].split(':')[0]) * 60 + parseInt(times[1].split(':')[1]);

                    // 處理跨夜班次 (例如 23:00 - 01:00)
                    if (endVal <= startVal) endVal += 24 * 60;
                    let checkTime = currentTimeVal;
                    if (checkTime < startVal && endVal > 24 * 60) checkTime += 24 * 60;

                    if (checkTime >= startVal && checkTime <= endVal) {
                        activeIntervalText = intv.interval;
                        break;
                    }
                }
                if (activeIntervalText) break;
            }
            if (activeIntervalText) break;
        }

        // 若查無班次或班次標記為停駛 ("0")，直接剔除
        if (!activeIntervalText || activeIntervalText === "0" || activeIntervalText === 0) return null;

        // 若班次為範圍 (例如 "6 - 8")，取平均值或最大值作為保守等車時間
        if (typeof activeIntervalText === 'string' && activeIntervalText.includes('-')) {
            const parts = activeIntervalText.split('-');
            return (parseInt(parts[0].trim()) + parseInt(parts[1].trim())) / 2;
        }
        return parseInt(activeIntervalText);
    },

    calculateRoute: function () {
        const rawStart = document.getElementById('p2pStartInput').value.trim();
        const rawEnd = document.getElementById('p2pEndInput').value.trim();
        const pref = document.querySelector('input[name="p2pPref"]:checked').value;
        const resultContainer = document.getElementById('p2pResultContainer');

        if (!rawStart || !rawEnd || rawStart === rawEnd) return;

        // 翻譯還原器：確保不論輸入中英文，底層路由始終使用 nameCn 計算
        const resolveToCn = (inputName) => {
            const lower = inputName.toLowerCase();
            const found = this.rawStopsData.find(s =>
                s.nameCn.toLowerCase() === lower ||
                (s.nameEn && s.nameEn.toLowerCase() === lower)
            );
            return found ? found.nameCn : inputName;
        };

        const startStop = resolveToCn(rawStart);
        const endStop = resolveToCn(rawEnd);

        resultContainer.innerHTML = `<div class="p2p-loading-msg">正在為您高速規劃最優聯乘方案...</div>`;

        setTimeout(() => {
            const startTime = performance.now();
            const TIME_LIMIT = 2500; // 2.5 秒安全限制，防止卡死

            // === 請嵌入至 P2PManager.calculateRoute 中建立索引的迴圈內 ===
            const validRoutes = DataHandler.getValidRoutes();
            let stopToRoutes = new Map();

            validRoutes.forEach(route => {
                // 1. 檢查是否被禁用搜尋
                if (route.bansearch === true) return;

                // 2. 需求：嚴格檢查是否有時間表或班次間隔配置，無配置則絕不盲目猜測規劃
                const hasTimetable = route.timetable && Object.keys(route.timetable).length > 0;
                const hasInterval = route.interval && Object.keys(route.interval).length > 0;
                if (!hasTimetable && !hasInterval) {
                    console.log(`路綫 ${route.route} 因缺乏時間表/班次間隔配置已被規劃器剔除`);
                    return;
                }

                // 建立轉乘索引圖...
                ['A', 'B', 'C'].forEach(dir => {
                    if (!route.stops || !route.stops[dir]) return;
                    let validStops = route.stops[dir].filter(s => s.visible);
                    validStops.forEach((stop, idx) => {
                        let sName = stop.nameCn.replace(/\^\^/g, '');
                        if (!stopToRoutes.has(sName)) stopToRoutes.set(sName, []);
                        stopToRoutes.get(sName).push({ route, dir, idx, allStops: validStops });
                    });
                });
            });

            let solutions = [];

            // 2. 依據線路數量分層搜尋：1條線 -> 2條線 -> 3條線 -> 4條線
            for (let maxLegs = 1; maxLegs <= 4; maxLegs++) {
                // 如果前一層已經找到完美直達方案，且使用者偏好「最少轉乘」，則可提早結束
                if (solutions.length > 0 && pref === 'lessTransfer') break;

                let queue = [{ currentStop: startStop, legs: [], transfers: 0, fare: 0 }];
                let bestCostToStop = new Map();
                bestCostToStop.set(startStop, { transfers: 0, fare: 0 });

                while (queue.length > 0) {
                    // 性能防卡死檢查
                    if (performance.now() - startTime > TIME_LIMIT) {
                        console.warn("路由計算即將超時，觸發保護機制");
                        break;
                    }

                    let current = queue.shift();

                    // 抵達終點
                    if (current.currentStop === endStop) {
                        solutions.push(current);
                        if (solutions.length >= 15) break; // 收集足夠方案即停止
                        continue;
                    }

                    // 達到當前層級的最大線路數
                    if (current.legs.length >= maxLegs) continue;

                    let availableLines = stopToRoutes.get(current.currentStop) || [];
                    // 在 P2PManager.calculateRoute 內部的 while 迴圈中
                    // 找到 for (let line of availableLines) { ... } 這一段，並替換/插入以下邏輯：

                    for (let line of availableLines) {
                        let alreadyRodeThisRoute = current.legs.some(leg => leg.routeId === line.route._id);
                        if (alreadyRodeThisRoute) continue;

                        // ⛔ 嚴格限制：計算當下等車時間。如果是 null 代表目前收車/無班次，直接跳過！
                        let expectedWait = this.getExpectedWaitTime(line.route, line.dir);
                        if (expectedWait === null) continue;

                        for (let i = line.idx + 1; i < line.allStops.length; i++) {
                            let nextStopName = line.allStops[i].nameCn.replace(/\^\^/g, '');
                            let fareInfo = this.getLegFare(line.route, line.dir, line.idx, i, line.allStops);

                            let newFare = current.fare + fareInfo.fare;
                            let newTransfers = current.legs.length;

                            // 假定每站行駛約需 2 分鐘，加上等車時間作為該段航程的時間成本
                            let travelTime = (i - line.idx) * 2;
                            let legTotalTime = travelTime + expectedWait;
                            let newTimeCost = (current.totalTime || 0) + legTotalTime;

                            let existingBest = bestCostToStop.get(nextStopName);
                            let isWorthExploring = false;

                            if (!existingBest) {
                                isWorthExploring = true;
                            } else if (newTransfers < existingBest.transfers || newFare < existingBest.fare || newTimeCost < existingBest.time) {
                                isWorthExploring = true;
                            }

                            if (isWorthExploring) {
                                bestCostToStop.set(nextStopName, {
                                    transfers: newTransfers,
                                    fare: newFare,
                                    time: newTimeCost
                                });

                                let newLeg = {
                                    routeId: line.route._id,
                                    routeItem: line.route, dir: line.dir,
                                    route: line.route.route, color: line.route.shiftConfig?.normal?.color || '#2563eb',
                                    from: current.currentStop, to: nextStopName,
                                    stopsCount: i - line.idx, fare: fareInfo.fare, fareInfo: fareInfo,
                                    startIdx: line.idx, endIdx: i, fullStops: line.allStops,
                                    waitTime: expectedWait // 將等待時間存入 leg 以供 UI 顯示
                                };

                                queue.push({
                                    currentStop: nextStopName,
                                    legs: [...current.legs, newLeg],
                                    transfers: newTransfers,
                                    fare: newFare,
                                    totalTime: newTimeCost
                                });
                            }
                        }
                    }
                }
                if (performance.now() - startTime > TIME_LIMIT) break;
            }

            // 3. 過濾完全相同搭乘順序的冗餘方案
            let uniqueSolsMap = new Map();
            solutions.forEach(sol => {
                let key = sol.legs.map(l => l.routeId).join('|'); // [修改]
                if (!uniqueSolsMap.has(key) || uniqueSolsMap.get(key).fare > sol.fare) {
                    uniqueSolsMap.set(key, sol);
                }
            });

            let uniqueSols = Array.from(uniqueSolsMap.values());

            if (uniqueSols.length === 0) {
                resultContainer.innerHTML = `<div class="modern-route-card" style="text-align:center; padding:30px; color:#64748b;">找不到可連接的公車路線。</div>`;
                return;
            }

            if (pref === 'lessTransfer') {
                uniqueSols.sort((a, b) => a.transfers - b.transfers || a.fare - b.fare);
            } else {
                uniqueSols.sort((a, b) => a.fare - b.fare || a.transfers - b.transfers);
            }

            this.renderResults(uniqueSols.slice(0, 8), resultContainer);
        }, 50);
    },

    renderResults: function (solutions, container) {
        container.innerHTML = `<h3 class="results-title">${LangHandler.getText('p2pOptionCount', { count: solutions.length })}</h3>`;

        solutions.forEach(sol => {
            let badgesHtml = sol.legs.map(l => `<span class="route-badge" style="background:${l.color}; border: 1px solid rgba(255,255,255,0.2);">${l.route}</span>`).join('<span class="p2p-badge-arrow">➔</span>');

            let transferText = sol.transfers === 0 ? LangHandler.getText('p2pDirect') : LangHandler.getText('p2pTransferCount', { count: sol.transfers });

            let card = document.createElement('div');
            card.className = 'neo-result-card glass-panel';
            card.innerHTML = `
                <div class="neo-res-flow">${badgesHtml}</div>
                <div class="neo-res-meta">
                    <div class="neo-res-price">$${sol.fare.toFixed(1)}</div>
                    <div class="neo-res-transfer">${transferText}</div>
                </div>
            `;
            card.onclick = () => this.showP2PDetail(sol);
            container.appendChild(card);
        });
    },

    showP2PDetail: function (solution) {
        PageController.showScreen('p2pDetailScreen');
        PageController.hideScreen('p2pScreen');

        const container = document.getElementById('p2pDetailContainer');
        container.innerHTML = '';
        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        // 頂部登機證 Summary
        const summary = document.createElement('div');
        summary.className = 'neo-pass-summary';
        summary.innerHTML = `
            <div class="sum-left">
                <span class="sum-lbl">${LangHandler.getText('p2pTotalFare')}</span>
                <span class="sum-val">$${solution.fare.toFixed(1)}</span>
            </div>
            <div class="sum-right">
                ${solution.legs.map(l => `<span class="route-badge" style="background:${l.color}; font-size:15px; padding:6px 12px;">${l.route}</span>`).join('<span class="p2p-badge-arrow">➔</span>')}
            </div>
        `;
        container.appendChild(summary);

        // 每一段航程 (Leg)
        solution.legs.forEach((leg, idx) => {
            const legBox = document.createElement('div');
            legBox.className = 'neo-leg-box glass-panel';

            // 🌟 獲取路線終點站 (Dest-Pill)
            let destName = DataHandler.getDirectionStartEndStops(leg.routeItem, leg.dir).last;
            let isLoop = leg.routeItem.circular === true;
            if (isLoop) destName = isZh ? '循環線' : 'Loop';
            let destText = isLoop ? destName : (isZh ? `往 ${destName}` : `to ${destName}`);

            let timelineHtml = ``;
            leg.fullStops.forEach((stop, sIdx) => {
                let isRiding = sIdx >= leg.startIdx && sIdx <= leg.endIdx;
                if (!isRiding) return;

                let isStart = sIdx === leg.startIdx;
                let isEnd = sIdx === leg.endIdx;
                let cleanName = stop.nameCn.replace(/\^\^/g, '');
                let cleanNameEn = stop.nameEn ? stop.nameEn.replace(/\^\^/g, '') : cleanName;
                let displayName = isZh ? cleanName : cleanNameEn;
                let subNameHtml = stop.nameSubCn ? `<div class="sub-n">${isZh ? stop.nameSubCn : (stop.nameSubEn || stop.nameSubCn)}</div>` : '';

                timelineHtml += `
                    <div class="neo-timeline-row">
                        <div class="neo-time-left">
                            <div class="neo-time-node" style="border-color: ${leg.color}; ${isStart || isEnd ? `background-color: ${leg.color};` : ''}"></div>
                            ${!isEnd ? `<div class="neo-time-line" style="background-color: ${leg.color};"></div>` : ''}
                        </div>
                        <div class="neo-time-main">
                            <div class="main-n">${displayName}</div>
                            ${subNameHtml}
                        </div>
                        <div class="neo-time-right">
                            ${isStart ? `<span class="status-badge board">${LangHandler.getText('p2pBoard')}</span>` : ''}
                            ${isEnd ? `<span class="status-badge alight">${LangHandler.getText('p2pAlight')}</span>` : ''}
                        </div>
                    </div>
                `;
            });

            // 票價資訊與備註
            let fareInfo = leg.fareInfo;
            let sectionFareTips = '';

            if (fareInfo.type === '分段收費') {
                let sectionPrefix = isZh ? 'ⓘ 此為分段收費 (原價 $' : 'ⓘ Section Fare (Original $';
                sectionFareTips = `<div style="font-size:12px; color:#059669; background:#ecfdf5; padding:6px 10px; border-radius:6px; display:inline-block; font-weight:600;">${sectionPrefix}${fareInfo.originalAdult.toFixed(1)})</div>`;
            } else if (fareInfo.type === '短途回贈') {
                let rebateTip = isZh ? '⟲ 短途回贈：下車請再次拍卡！' : '⟲ Rebate: Please tap card again upon alighting!';
                sectionFareTips = `<div style="font-size:12px; color:#d97706; background:#fffbeb; padding:6px 10px; border-radius:6px; display:inline-block; font-weight:600;">${rebateTip}</div>`;
            }

            legBox.innerHTML = `
                <div class="neo-leg-header" style="border-left: 6px solid ${leg.color}">
                    <div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <span class="route-badge" style="background:${leg.color}">${leg.route}</span>
                            <span class="neo-leg-title">${isZh ? leg.from : leg.fullStops[leg.startIdx].nameEn.replace(/\^\^/g, '')} ➔ ${isZh ? leg.to : leg.fullStops[leg.endIdx].nameEn.replace(/\^\^/g, '')}</span>
                            <span class="dest-pill" style="background: #f1f5f9; color: #334155; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: 600;">${destText}</span>
                        </div>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <span class="time-meta-badge">
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 12"></polyline></svg>
                                ${LangHandler.getText('p2pMinsFreq', { time: Math.ceil(leg.waitTime) })}
                            </span>
                            <span class="time-meta-badge">
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                ${LangHandler.getText('p2pStopsCount', { count: leg.stopsCount })}
                            </span>
                        </div>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="font-size: 22px; font-weight: 800; color: #3b82f6;">$${fareInfo.adult.toFixed(1)}</div>
                    </div>
                </div>
                <div class="neo-leg-body">
                    ${sectionFareTips ? `<div style="padding: 0 24px 16px 24px;">${sectionFareTips}</div>` : ''}
                    ${timelineHtml}
                </div>
            `;

            container.appendChild(legBox);

            // 轉乘分隔線
            if (idx < solution.legs.length - 1) {
                const transDivider = document.createElement('div');
                transDivider.style.cssText = 'display: flex; align-items: center; justify-content: center; gap: 10px; color: #94a3b8; font-size: 14px; font-weight: 600; margin: -8px 0;';
                transDivider.innerHTML = `
                    <div style="height: 1px; background: #cbd5e1; flex: 1;"></div>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
                    <span>${LangHandler.getText('p2pTransferAt')}</span>
                    <div style="height: 1px; background: #cbd5e1; flex: 1;"></div>
                `;
                container.appendChild(transDivider);
            }
        });
    }
};