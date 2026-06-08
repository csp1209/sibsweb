// ------------- 全局配置常量 -------------
var CONFIG = {
    singleColumnSize: 10,
    pageSize: 20,
    currentPage: 1,
    currentDirection: "A",
    currentRouteNum: "",
    currentRouteData: null,
    enabledShifts: [],
    loadingTime: 1,
    keyboardOpacityDisabled: '0.5',
    keyboardOpacityEnabled: '1',
    emptyTipText: {
        'zh-CN': '暂无站点数据',
        'en-US': 'No stop data available'
    },
    suggestTimeout: null,
    currentLang: 'zh-CN',
    activeFilters: { operator: null, type: null }
};


// ------------- 增强版语言处理工具类 -------------
var LangHandler = {
    getText: function (key, replacements = {}) {
        const lang = CONFIG.currentLang || 'zh-CN';
        // 兜底机制：优先当前语言 -> 中文 -> 原key
        let text = (LANG_PACK?.[lang]?.[key] || LANG_PACK?.['zh-CN']?.[key] || key);

        // 修复：确保替换所有占位符，处理边界情况
        if (typeof text === 'string' && Object.keys(replacements).length > 0) {
            Object.keys(replacements).forEach(placeholder => {
                // 使用全局替换，确保所有相同占位符都被替换
                const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
                text = text.replace(regex, replacements[placeholder] || '');
            });
        }

        return text;
    },

    // 批量渲染所有带data-lang-key的元素（增强版）
    renderAllTexts: function () {
        // 更新HTML根元素lang属性，适配CSS语言样式
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

                // 为语言切换添加UI过渡效果
                el.style.opacity = '0.8';
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 200);

            } catch (e) {
                console.warn(`渲染语言文案失败 [${key}]`, e);
            }
        });

        // 更新动态生成的空提示文本
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
            'special3': 'specialShift3'
        };
        return this.getText(keyMap[shiftKey] || shiftKey);
    }
};

// ------------- 重置函数优化 -------------
function resetRouteQueryState() {
    // 1. 重置全局配置
    CONFIG.currentRouteNum = "";
    CONFIG.currentRouteData = null;
    CONFIG.enabledShifts = [];
    CONFIG.currentPage = 1;
    CONFIG.currentDirection = "A";

    // 徹底清空鍵盤篩選器狀態
    CONFIG.activeFilters = { operator: null, type: null };

    // 2. 清空线路编号输入框
    const input = document.getElementById('routeNumberInput');
    if (input) {
        input.value = '';
        Renderer.initKeyboardValidity('');
        Renderer.renderRouteSuggestions(''); // 确保重置时也重新渲染
        // 重置输入框占位符
        input.setAttribute('placeholder', LangHandler.getText('inputPlaceholder'));
    }

    // 👇 [新增] 清空全站點搜尋框與隱藏下拉選單
    const stationInput = document.getElementById('stationSearchInput');
    if (stationInput) stationInput.value = '';
    const stationDropdown = document.getElementById('stationSearchDropdown');
    if (stationDropdown) stationDropdown.classList.add('hidden');

    // 3. 关闭运营时间面板（如果打开）
    const timetablePanel = document.getElementById('timetablePanel');
    if (timetablePanel) timetablePanel.remove();

    // 4. 重置空提示文本
    LangHandler.updateDynamicEmptyTips();
}

// ------------- 增强版页面切换控制层 -------------
var PageController = {
    // 初始化页面切换事件
    initPageEvents: function () {
        const self = this;

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
        });

        document.getElementById('backToInputBtn')?.addEventListener('click', () => {
            self.showScreen('inputScreen');
            self.hideScreen('stopScreen');
            resetRouteQueryState();
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
            // 添加切換動畫
            this.style.transform = 'scale(1.05)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);

            CONFIG.currentLang = 'zh-CN';
            Renderer.updatePageLang();

            // 如果在搜尋頁，同步刷新建議列表
            const input = document.getElementById('routeNumberInput');
            if (input && !document.getElementById('inputScreen').classList.contains('hidden')) {
                Renderer.renderRouteSuggestions(input.value);
            }
        });

        document.getElementById('modalSwitchEnBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('modalSwitchZhBtn').classList.remove('active');
            // 添加切換動畫
            this.style.transform = 'scale(1.05)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);

            CONFIG.currentLang = 'en-US';
            Renderer.updatePageLang();

            // 如果在搜尋頁，同步刷新建議列表
            const input = document.getElementById('routeNumberInput');
            if (input && !document.getElementById('inputScreen').classList.contains('hidden')) {
                Renderer.renderRouteSuggestions(input.value);
            }
        });

        // 增强版语言切换事件（带UI反馈 + 修复线路建议即时翻译）
        document.getElementById('switchZhBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('switchEnBtn').classList.remove('active');
            // 添加切换动画
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            CONFIG.currentLang = 'zh-CN';
            Renderer.updatePageLang();

            // 修复核心：语言切换时重新渲染线路建议列表
            const input = document.getElementById('routeNumberInput');
            if (input) {
                Renderer.renderRouteSuggestions(input.value); // 重新渲染建议列表
            }
        });

        document.getElementById('switchEnBtn')?.addEventListener('click', function () {
            this.classList.add('active');
            document.getElementById('switchZhBtn').classList.remove('active');
            // 添加切换动画
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            CONFIG.currentLang = 'en-US';
            Renderer.updatePageLang();

            // 修复核心：语言切换时重新渲染线路建议列表
            const input = document.getElementById('routeNumberInput');
            if (input) {
                Renderer.renderRouteSuggestions(input.value); // 重新渲染建议列表
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

                // 【核心修復】：動畫結束後，徹底清除 inline 樣式，確保 position: fixed 生效
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
                // 【核心修復】：隱藏後也必須徹底清除殘留樣式，避免下次進入時報錯
                screen.style.opacity = '';
                screen.style.transform = '';
                screen.style.transition = '';
            }, 300);
        }
    }
};

// ------------- 数据处理核心层 -------------
var DataHandler = {

    getValidRoutes: function () {
        if (typeof routeData === 'undefined' || !routeData || !routeData.data) return [];
        var validRoutes = [];
        for (var i = 0; i < routeData.data.length; i++) {
            if (routeData.data[i].enabled === true) {
                validRoutes.push(routeData.data[i]);
            }
        }
        return validRoutes;
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

    getValidRouteNums: function () {
        var validRoutes = this.getValidRoutes();
        var nums = [];
        for (var i = 0; i < validRoutes.length; i++) {
            nums.push(validRoutes[i].route.toUpperCase());
        }
        return nums;
    },

    getRouteByNum: function (routeNum) {
        if (!routeNum || typeof routeData === 'undefined' || !routeData || !routeData.data) return null;
        var validRoutes = this.getValidRoutes();
        for (var i = 0; i < validRoutes.length; i++) {
            if (validRoutes[i].route.toUpperCase() === routeNum.toUpperCase()) {
                return validRoutes[i];
            }
        }
        return null;
    },

    getEnabledShifts: function (routeItem, direction = null) {
        if (!routeItem || !routeItem.shifts) return [];
        var shifts = new Set();

        // 判斷是否為分方向的 shifts 結構 (例如 { "A": {"normal": true}, "B": {"normal": true} })
        var isDirectional = false;
        for (var k in routeItem.shifts) {
            if (typeof routeItem.shifts[k] === 'object') {
                isDirectional = true;
                break;
            }
        }

        if (isDirectional) {
            if (direction && routeItem.shifts[direction]) {
                // 如果有指定方向，僅抓取該方向開啟的班次
                for (var key in routeItem.shifts[direction]) {
                    if (routeItem.shifts[direction][key] === true) shifts.add(key);
                }
            } else if (!direction) {
                // 若無指定方向（例如主頁建議列表），聯集所有方向開啟的班次
                for (var bound in routeItem.shifts) {
                    for (var key in routeItem.shifts[bound]) {
                        if (routeItem.shifts[bound][key] === true) shifts.add(key);
                    }
                }
            }
        } else {
            // 向下相容原本的全域扁平結構
            for (var key in routeItem.shifts) {
                if (routeItem.shifts[key] === true) {
                    shifts.add(key);
                }
            }
        }
        return Array.from(shifts);
    },

    getShiftConfig: function (routeItem, shiftKey) {
        if (!routeItem || !shiftKey || !routeItem.shiftConfig) {
            return {
                label: LangHandler.getShiftLabel(shiftKey),
                color: shiftKey === 'normal' ? '#4a90e2' : '#e53e3e'
            };
        }

        const config = routeItem.shiftConfig[shiftKey] || {};
        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        // 核心修復：動態判斷當前語言並抓取對應的 labelEn 或 labelCn
        const label = isZh
            ? (config.labelCn || config.label || LangHandler.getShiftLabel(shiftKey))
            : (config.labelEn || config.label || LangHandler.getShiftLabel(shiftKey));

        return {
            label: label,
            color: config.color || '#4a90e2'
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

    getShiftStartEnd: function (routeItem, shiftKey, specificBound) {
        if (!routeItem || !shiftKey) return { start: LangHandler.getText('noInformation'), end: LangHandler.getText('noInformation') };

        var targetDirection = specificBound || "A";
        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            targetDirection = "C";
        }

        var shiftStops = [];
        if (routeItem.stops && routeItem.stops[targetDirection]) {
            for (var i = 0; i < routeItem.stops[targetDirection].length; i++) {
                var stop = routeItem.stops[targetDirection][i];
                if (stop.visible && stop.stopFor && stop.stopFor.indexOf(shiftKey) !== -1) {
                    shiftStops.push(stop);
                }
            }
        }

        shiftStops.sort(function (a, b) {
            return a.seq - b.seq;
        });

        if (shiftStops.length === 0) {
            var directions = ["A", "B", "C"];
            for (var d = 0; d < directions.length; d++) {
                var dir = directions[d];
                if (dir === targetDirection || !routeItem.stops[dir]) continue;

                for (var i = 0; i < routeItem.stops[dir].length; i++) {
                    var stop = routeItem.stops[dir][i];
                    if (stop.visible && stop.stopFor && stop.stopFor.indexOf(shiftKey) !== -1) {
                        shiftStops.push(stop);
                    }
                }
                if (shiftStops.length > 0) break;
            }

            if (shiftStops.length === 0) {
                return { start: LangHandler.getText('noInformation'), end: LangHandler.getText('noInformation') };
            }
            shiftStops.sort(function (a, b) {
                return a.seq - b.seq;
            });
        }

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

        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
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

    // 获取当前方向下的有效站点
    getValidStops: function (routeItem) {
        if (!routeItem || !routeItem.stops) return [];

        var targetDirection = CONFIG.currentDirection;
        var bound = this.getRouteBound(routeItem); // 使用封装好的方法
        if (bound && bound.indexOf("C") !== -1) {
            targetDirection = "C";
            CONFIG.currentDirection = "C";
        }

        var directionStops = routeItem.stops[targetDirection] || [];
        var validStops = [];

        for (var i = 0; i < directionStops.length; i++) {
            var stop = directionStops[i];
            if (stop.visible) {
                validStops.push(stop);
            }
        }

        if (validStops.length === 0) {
            for (var dir in routeItem.stops) {
                if (routeItem.stops.hasOwnProperty(dir)) {
                    var dirStops = routeItem.stops[dir];
                    for (var s = 0; s < dirStops.length; s++) {
                        var stop = dirStops[s];
                        if (stop.visible) {
                            validStops.push(stop);
                        }
                    }
                }
                if (validStops.length > 0) break;
            }
        }

        validStops.sort(function (a, b) {
            return a.seq - b.seq;
        });

        return validStops;
    },

    // 获取当前方向下的首尾站点（修复：多语言适配）
    getDirectionStartEndStops: function (routeItem, targetDirectionOverride) {
        if (!routeItem) return { first: LangHandler.getText('noInformation'), last: LangHandler.getText('noInformation') };

        var targetDirection = targetDirectionOverride || CONFIG.currentDirection;
        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            targetDirection = "C";
        }

        var directionStops = routeItem.stops[targetDirection] || [];
        var validStops = [];

        for (var i = 0; i < directionStops.length; i++) {
            var stop = directionStops[i];
            if (!stop.visible) continue;

            var hasShift = false;
            for (var j = 0; j < CONFIG.enabledShifts.length; j++) {
                var shiftKey = CONFIG.enabledShifts[j];
                if (stop.stopFor && stop.stopFor.indexOf(shiftKey) !== -1) {
                    hasShift = true;
                    break;
                }
            }

            if (hasShift) {
                validStops.push(stop);
            }
        }

        if (validStops.length === 0) {
            for (var i = 0; i < directionStops.length; i++) {
                var stop = directionStops[i];
                if (stop.visible) {
                    validStops.push(stop);
                }
            }
        }

        if (validStops.length === 0) {
            var allDirections = ["A", "B", "C"];
            for (var d = 0; d < allDirections.length; d++) {
                var dir = allDirections[d];
                if (dir === targetDirection) continue;

                var altDirectionStops = routeItem.stops[dir] || [];
                for (var s = 0; s < altDirectionStops.length; s++) {
                    var stop = altDirectionStops[s];
                    if (stop.visible) {
                        validStops.push(stop);
                    }
                }

                if (validStops.length > 0) break;
            }
        }

        if (validStops.length === 0) {
            return { first: LangHandler.getText('noInformation'), last: LangHandler.getText('noInformation') };
        }

        validStops.sort(function (a, b) {
            return a.seq - b.seq;
        });

        var firstName = CONFIG.currentLang === 'zh-CN'
            ? (validStops[0].nameCn || LangHandler.getText('noInformation'))
            : (validStops[0].nameEn || validStops[0].nameCn || LangHandler.getText('noInformation'));

        var lastName = CONFIG.currentLang === 'zh-CN'
            ? (validStops[validStops.length - 1].nameCn || LangHandler.getText('noInformation'))
            : (validStops[validStops.length - 1].nameEn || validStops[validStops.length - 1].nameCn || LangHandler.getText('noInformation'));

        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            lastName = firstName;
        }

        return {
            first: firstName,
            last: lastName
        };
    },

    // 在 DataHandler 中更新 isRouteSupportDirectionSwitch
    isRouteSupportDirectionSwitch: function (routeItem) {
        if (!routeItem) return false;

        var bound = this.getRouteBound(routeItem);
        if (bound.indexOf("C") !== -1) return false;

        var hasABBound = bound.indexOf("A") !== -1 && bound.indexOf("B") !== -1;

        var hasAStops = false;
        var hasBStops = false;
        if (routeItem.stops) {
            hasAStops = routeItem.stops.A && routeItem.stops.A.length > 0;
            hasBStops = routeItem.stops.B && routeItem.stops.B.length > 0;
        }

        return hasABBound && hasAStops && hasBStops;
    },

    getAllShiftsStartEndInfo: function (routeItem) {
        if (!routeItem) return [];

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
            if (isDirectional) {
                for (var bound in routeItem.shifts) {
                    if (routeItem.shifts[bound][shiftKey] === true) activeBounds.push(bound);
                }
            } else {
                var routeBound = this.getRouteBound(routeItem);
                activeBounds = routeBound.split(',');
            }

            var isLoop = routeItem.bound && routeItem.bound.indexOf("C") !== -1;

            if (isLoop) {
                var startEnd = this.getShiftStartEnd(routeItem, shiftKey, "C");
                shiftInfoList.push({
                    name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                    start: startEnd.start,
                    end: startEnd.end,
                    bound: "C",
                    color: shiftConfig?.color || '#4a90e2'
                });
            } else if (activeBounds.indexOf('A') !== -1 && activeBounds.indexOf('B') !== -1) {
                var startEndA = this.getShiftStartEnd(routeItem, shiftKey, 'A');
                var startEndB = this.getShiftStartEnd(routeItem, shiftKey, 'B');

                // 判斷是否為完美對稱路線 (A起點=B終點 且 A終點=B起點)
                if (startEndA.start === startEndB.end && startEndA.end === startEndB.start) {
                    shiftInfoList.push({
                        name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                        start: startEndA.start,
                        end: startEndA.end,
                        bound: "A,B",
                        color: shiftConfig?.color || '#4a90e2'
                    });
                } else {
                    // 若起訖點不同 (不對稱)，則將 A 與 B 獨立拆分顯示
                    shiftInfoList.push({
                        name: (shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1)),
                        start: startEndA.start,
                        end: startEndA.end,
                        bound: "A",
                        color: shiftConfig?.color || '#4a90e2'
                    });
                    shiftInfoList.push({
                        name: (shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1)),
                        start: startEndB.start,
                        end: startEndB.end,
                        bound: "B",
                        color: shiftConfig?.color || '#4a90e2'
                    });
                }
            } else {
                var targetBound = activeBounds[0] || 'A';
                var startEnd = this.getShiftStartEnd(routeItem, shiftKey, targetBound);
                shiftInfoList.push({
                    name: shiftConfig?.label || LangHandler.getText('shiftName') + (i + 1),
                    start: startEnd.start,
                    end: startEnd.end,
                    bound: targetBound,
                    color: shiftConfig?.color || '#4a90e2'
                });
            }
        }
        return shiftInfoList;
    },

    // 获取指定班次的站点列表
    getShiftStopStops: function (routeItem, shiftKey) {
        if (!routeItem || !shiftKey) return [];

        var targetDirection = CONFIG.currentDirection;
        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            targetDirection = "C";
        }

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
        var firstShiftStop = shiftStops[0];
        return stop.seq === firstShiftStop.seq;
    },

    // 判断是否是班次终点站
    isShiftEndStop: function (routeItem, stop, shiftKey) {
        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
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

    getMatchedRoutePrefixes: function (currentInput) {
        var currentInputUpper = (currentInput || '').toString().toUpperCase().trim();
        var validRoutes = this.getValidRouteNums();
        var matchedRoutes = [];

        for (var i = 0; i < validRoutes.length; i++) {
            var routeNum = validRoutes[i];
            var routeItem = this.getRouteByNum(routeNum);

            if (!routeItem) continue;

            var passOperator = !CONFIG.activeFilters.operator || (routeItem.operators && routeItem.operators.includes(CONFIG.activeFilters.operator));
            var passType = !CONFIG.activeFilters.type || (routeItem.typeTags && routeItem.typeTags.some(t => (typeof t === 'string' ? t : t.type) === CONFIG.activeFilters.type));

            if (passOperator && passType) {
                if (!currentInputUpper || routeNum.startsWith(currentInputUpper)) {
                    matchedRoutes.push(routeNum);
                }
            }
        }
        return matchedRoutes;
    },

    // 获取运营时间数据（修复：时间表显示问题）
    getTimetableData: function (routeItem, direction = null) {
        if (!routeItem || typeof routeData === 'undefined') return null;

        var targetDirection = direction || CONFIG.currentDirection;

        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            targetDirection = "C";
        }

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

        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            return ["C"];
        }

        if (timetableData.A) directions.push("A");
        if (timetableData.B) directions.push("B");

        return directions.length > 0 ? directions : [];
    },

    // 获取班次运营范围内的所有站点
    getShiftInRangeStops: function (routeItem, shiftKey) {
        var targetDirection = CONFIG.currentDirection;
        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            targetDirection = "C";
        }
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
    }, // <--- Make sure there is a comma here!

    // NEW FUNCTION PLACED CORRECTLY HERE
    getRouteUnlockLevels: function (routeItem) {
        if (!routeItem || !routeItem.timetable) return [];
        var levels = [];
        var seen = new Set();

        for (var bound in routeItem.timetable) {
            var shifts = routeItem.timetable[bound];
            for (var shiftKey in shifts) {
                var shiftData = shifts[shiftKey];
                var level = null;

                if (Array.isArray(shiftData) && shiftData.length > 0) {
                    level = shiftData[0].unlockLevel;
                } else if (shiftData && typeof shiftData === 'object') {
                    level = shiftData.unlockLevel;
                }

                if (level !== undefined && level !== null) {
                    var key = bound + '-' + shiftKey + '-' + level;
                    if (!seen.has(key)) {
                        seen.add(key);
                        levels.push({ bound: bound, shift: shiftKey, level: level });
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
                let match = shiftConfig.label.match(/^(.+?)\s*\((.+?)\)$/);

                if (match) {
                    routeBadgeStr = `<span class="route-badge" style="background-color: ${shiftColor};">${match[1].trim()}</span>`;
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
                let isLoop = tObj.bound.indexOf("C") !== -1;
                if (isLoop) {
                    destTextStr = isZh ? '循環線' : 'Loop';
                } else {
                    let destName = '';
                    if (routeItem.stops && routeItem.stops[tObj.bound]) {
                        const validStops = routeItem.stops[tObj.bound].filter(s => s.visible);
                        if (validStops.length > 0) {
                            const lastStop = validStops[validStops.length - 1];
                            destName = isZh ? (lastStop.nameCn || '').replace(/\^\^/g, '') : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
                        }
                    }
                    destTextStr = isZh ? `往 ${destName}` : `To ${destName}`;
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

            // 【條件判斷】：只有 route-badge、type-badge 與 bound 同時存在時，才拆成兩行
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
        // 1. 批量渲染静态文案
        LangHandler.renderAllTexts();
        // 2. 更新动态文案
        this.updateDynamicLangTexts();
        // 3. 更新运营时间面板文案
        this.updateTimetablePanelLang();
        // 4. 更新页面标题
        this.updatePageTitle();

        // 额外保障：确保建议列表的空提示文本也能更新
        const emptySuggestTip = document.getElementById('emptySuggestTip');
        const noMatchSuggestTip = document.getElementById('noMatchSuggestTip');
        if (emptySuggestTip) {
            emptySuggestTip.textContent = LangHandler.getText('emptySuggest');
        }
        if (noMatchSuggestTip) {
            noMatchSuggestTip.textContent = LangHandler.getText('noMatchSuggest');
        }

        // 重新渲染鍵盤篩選器以更新多語言標題
        this.renderKeyboardFilters();
    },

    // 更新页面标题（多语言适配）
    updatePageTitle: function () {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            titleElement.textContent = LangHandler.getText('appTitle');
        }

        // 更新加载页面标题
        const loadingTitle = document.querySelector('.loading-title');
        if (loadingTitle) {
            loadingTitle.textContent = LangHandler.getText('appTitle');
        }
    },

    updateDynamicLangTexts: function () {
        // 分頁信息更新
        const paginationInfo = document.querySelector('.pagination-info');
        if (paginationInfo && CONFIG.currentRouteData) {
            const validStops = DataHandler.getValidStops(CONFIG.currentRouteData);
            const totalPages = DataHandler.getTotalPages(validStops);
            paginationInfo.textContent = LangHandler.getText('pageLabel', {
                current: CONFIG.currentPage,
                total: totalPages
            });
        }

        // 更新方向切換按鈕 Title
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

        // 【新增】更新分頁左右按鈕的 Title
        const prevBtn = document.querySelector('.prev-btn');
        if (prevBtn) prevBtn.title = LangHandler.getText('prevPage');

        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) nextBtn.title = LangHandler.getText('nextPage');

        // 更新版本信息文本
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
                key.onclick = function () {
                    const input = document.getElementById('routeNumberInput');
                    if (input) {
                        input.value += this.getAttribute('data-key');
                        input.dispatchEvent(new Event('input'));
                    }
                };
            });
        }

        if (subLetterBtns.length > 0) {
            subLetterBtns.forEach(function (btn) {
                btn.disabled = true;
                btn.style.opacity = CONFIG.keyboardOpacityDisabled;
                btn.onclick = function () {
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
            var filteredRoutes = DataHandler.getMatchedRoutePrefixes('');
            filteredRoutes.forEach(function (route) {
                if (route.length > 0) {
                    firstChars.add(route.charAt(0));
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

            // 【修復核心】：即使沒有輸入，提早結束前也必須呼叫這行，才能取消標籤上的 active 樣式！
            this.renderKeyboardFilters();
            return;
        }

        var matchedRoutes = DataHandler.getMatchedRoutePrefixes(currentInputUpper);
        if (matchedRoutes.length > 0) {
            var nextChars = new Set();
            matchedRoutes.forEach(function (route) {
                if (route.length > currentInputUpper.length) {
                    var nextChar = route.charAt(currentInputUpper.length);
                    nextChars.add(nextChar);
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
        var matchedRoutes = DataHandler.getMatchedRoutePrefixes(currentInputUpper);

        if (CONFIG.activeFilters.operator || CONFIG.activeFilters.type) {
            matchedRoutes = matchedRoutes.filter(routeNum => {
                var routeItem = DataHandler.getRouteByNum(routeNum);
                if (!routeItem) return false;

                var passOperator = !CONFIG.activeFilters.operator || (routeItem.operators && routeItem.operators.includes(CONFIG.activeFilters.operator));
                var passType = !CONFIG.activeFilters.type || (routeItem.typeTags && routeItem.typeTags.some(t => (typeof t === 'string' ? t : t.type) === CONFIG.activeFilters.type));

                return passOperator && passType;
            });
        }

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

        matchedRoutes.forEach(function (routeNum) {
            try {
                var routeItem = DataHandler.getRouteByNum(routeNum);
                if (!routeItem) return;

                var suggestItem = document.createElement('div');
                suggestItem.className = 'suggest-item';
                suggestItem.setAttribute('data-route', routeNum);

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
                        var isLoop = shiftInfo.bound && shiftInfo.bound.indexOf("C") !== -1;
                        var isTwoWay = shiftInfo.bound === "A,B";
                        var separator = isLoop ? '<span class="route-loop-icon">↺</span>' :
                            (isTwoWay ? '<span class="route-arrow-icon">⬌</span>' : '<span class="route-arrow-icon">➔</span>');

                        // 判斷並拆分帶有括號的班次名稱
                        let shiftNameHtml = '';
                        let match = shiftInfo.name.match(/^(.+?)\s*\((.+?)\)$/);
                        if (match) {
                            shiftNameHtml = `
                                <span class="route-badge" style="background-color: ${shiftInfo.color};">${match[1].trim()}</span>
                                <span class="suggest-shift-name" style="background-color: ${shiftInfo.color};">${match[2].trim()}</span>
                            `;
                        } else {
                            shiftNameHtml = `<span class="suggest-shift-name" style="background-color: ${shiftInfo.color};">${shiftInfo.name}</span>`;
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
                var enabledShifts = DataHandler.getEnabledShifts(routeItem);
                if (enabledShifts && enabledShifts.length > 0) {
                    firstShiftColor = DataHandler.getShiftConfig(routeItem, enabledShifts[0]).color || firstShiftColor;
                }
                var textColor = routeItem.textColor || '#ffffff';
                var unlockLevels = DataHandler.getRouteUnlockLevels(routeItem);
                var levelHtml = '';
                if (unlockLevels.length > 0) {
                    var levelsOnly = unlockLevels.map(l => l.level);
                    var minLevel = Math.min(...levelsOnly);
                    var maxLevel = Math.max(...levelsOnly);
                    if (minLevel === maxLevel) {
                        var levelText = LangHandler.getText('unlockLevelReq', { level: minLevel });
                        levelHtml = `<span class="badge-common level-badge"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px; display: inline-block; vertical-align: middle;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><i class="fas fa-lock" style="margin-right: 4px;"></i>${levelText}</span>`;
                    } else {
                        levelHtml = `<span class="badge-common level-badge"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px; display: inline-block; vertical-align: middle;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><i class="fas fa-lock" style="margin-right: 4px;"></i>Lv.${minLevel} - Lv.${maxLevel}</span>`;
                    }
                }

                var operatorBadgesHtml = (routeItem.operators || []).map(op => `<span class="badge-common operator-badge" data-operator="${op}">${op}</span>`).join('');
                var typeBadgesHtml = (routeItem.typeTags || []).map(t => Renderer.renderTypeBadge(t, routeItem)).join('');

                // 1. 計算當前路綫的營運商與類型標籤總數
                const totalBadges = (routeItem.operators || []).length + (routeItem.typeTags || []).length;

                // 2. 根據總數是否大於 3 來決定是否啟用分行 Class
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
                    CONFIG.currentRouteNum = routeNum;
                    CONFIG.currentPage = 1;
                    CONFIG.currentDirection = "A";
                    Renderer.renderStopPage(routeNum);
                });

                suggestList.appendChild(suggestItem);
            } catch (e) {
                console.error('渲染线路建议项失败:', routeNum, e);
            }
        });
    },

    renderStopPage: function (routeNum) {
        var stopContainer = document.getElementById('stopContainer');
        var stopPageTitle = document.getElementById('stopPageTitle');
        if (!stopContainer || !stopPageTitle) return;

        document.getElementById('inputScreen').classList.add('hidden');
        document.getElementById('stopScreen').classList.remove('hidden');
        stopContainer.innerHTML = '';

        var routeItem = DataHandler.getRouteByNum(routeNum);
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
        if (bound && bound.indexOf("C") !== -1) {
            targetDirection = "C";
            CONFIG.currentDirection = "C";
        }
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
                Renderer.renderStopPage(routeItem.route);
            }
        });

        nextBtn.addEventListener('click', function () {
            if (CONFIG.currentPage < totalPages) {
                CONFIG.currentPage++;
                Renderer.renderStopPage(routeItem.route);
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

            // 刷新樣式
            firstStopEl.classList.remove('shift-start-stop', 'shift-arrow-top', 'shift-in-range-container');
            lastStopEl.classList.remove('shift-end-stop', 'shift-arrow-bottom');

            // 【核心修復】：精確計算跨行的高度距離
            var firstRect = firstStopEl.getBoundingClientRect();
            var lastRect = lastStopEl.getBoundingClientRect();

            // 【核心修復】：若有上箭頭，線條往上延伸 4px 完美接合箭頭底部
            var startTop = isAbsoluteStart ? (firstRect.height / 2) : -4;
            // 若有下箭頭，線條往下延伸 4px 完美接合箭頭頂部
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

    renderRouteInfoBar: function (routeItem) {
        const routeInfoBar = document.createElement('div');
        routeInfoBar.className = 'route-info-bar';

        const basicInfo = document.createElement('div');
        basicInfo.className = 'route-basic-info';

        // --- 動態獲取第一個班次的顏色，作為路線主色 (取消漸層，改純色) ---
        var targetDirection = CONFIG.currentDirection;
        if (routeItem.bound && routeItem.bound.indexOf("C") !== -1) {
            targetDirection = "C";
        }
        // 核心修改：只抓取屬於當前方向啟用的班次，不顯示反向獨立班次
        const enabledShifts = DataHandler.getEnabledShifts(routeItem, targetDirection);

        let mainRouteColor = '#4a90e2';
        if (enabledShifts && enabledShifts.length > 0) {
            const firstShiftConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
            if (firstShiftConfig && firstShiftConfig.color) {
                mainRouteColor = firstShiftConfig.color;
            }
        }

        routeInfoBar.style.setProperty('--route-main-color', mainRouteColor);

        const numWrap = document.createElement('div');
        numWrap.className = 'route-num-color-wrap';

        const routeNumEl = document.createElement('div');
        routeNumEl.className = 'route-badge';
        routeNumEl.textContent = routeItem.route;

        var textColor = routeItem.textColor || '#ffffff'; // 👈 新增這行

        routeNumEl.style.setProperty('--route-badge-bg', mainRouteColor);
        routeNumEl.style.setProperty('--route-badge-color', textColor); // 👈 新增這行
        routeNumEl.style.backgroundColor = mainRouteColor;

        numWrap.appendChild(routeNumEl);

        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

        if (routeItem.routeType || routeItem.routeTypeEn) {
            const typeText = DataHandler.getRouteTypeDisplay(routeItem);
            if (typeText) {
                const typeBadge = document.createElement('div');
                typeBadge.className = 'route-type-badge';
                typeBadge.style.color = mainRouteColor;
                typeBadge.style.backgroundColor = `${mainRouteColor}1A`; // 10% 透明度
                typeBadge.textContent = typeText;
                numWrap.appendChild(typeBadge);
            }
        }

        const directionInfo = DataHandler.getDirectionStartEndStops(routeItem);
        var bound = DataHandler.getRouteBound(routeItem);
        var isLoop = bound.includes("C");
        var isTwoWay = bound === "A,B";

        const cleanDirUI = document.createElement('div');
        cleanDirUI.className = 'clean-direction-ui';

        if (isLoop) {
            cleanDirUI.innerHTML = `
                <span class="dir-stop">${directionInfo.first}</span>
                <span class="dir-icon loop" style="color:${mainRouteColor}">↺</span>
                <span class="dir-stop loop-text" style="color:${mainRouteColor}">${LangHandler.getText('loopDirection') || '循環線'}</span>
            `;
            cleanDirUI.style.backgroundColor = `${mainRouteColor}0D`;
            cleanDirUI.style.borderColor = `${mainRouteColor}33`;
        } else {
            cleanDirUI.innerHTML = `
                <span class="dir-stop">${directionInfo.first}</span>
                <span class="dir-icon route-arrow-icon" style="color:#666;">➔</span>
                <span class="dir-stop">${directionInfo.last}</span>
            `;
        }

        const shiftTags = document.createElement('div');
        shiftTags.className = 'route-shift-tags';

        // 班次標籤取消漸變，使用純色
        enabledShifts.forEach(shiftKey => {
            const config = DataHandler.getShiftConfig(routeItem, shiftKey);
            const tag = document.createElement('div');
            tag.className = `shift-tag`;

            let shiftColor = config.color || '#4a90e2';
            tag.style.background = shiftColor; // 改為純色
            tag.style.backgroundColor = shiftColor;

            tag.innerHTML = `<span class="shift-text">${config.label}</span>`;
            shiftTags.appendChild(tag);
        });

        const renderCenteredFareNode = (nameCn, nameEn, isZh) => {
            const cleanCn = (nameCn || '').replace(/\^\^/g, '');
            const cleanEn = (nameEn || '').replace(/\^\^/g, '');
            if (isZh) {
                return `
            <div class="fare-node centered-stop-name">
                <div class="stop-main-name">${cleanCn}</div>
                ${cleanEn ? `<div class="stop-english-name">${cleanEn}</div>` : ''}
            </div>
        `;
            } else {
                return `
            <div class="fare-node centered-stop-name">
                <div class="stop-main-name">${cleanEn || cleanCn}</div>
            </div>
        `;
            }
        };

        // --- 高級收費資訊區域 ---
        const fareWrap = document.createElement('div');
        fareWrap.className = 'fare-modal-body';

        if (routeItem.fares) {
            const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';

            // SVG 圖標庫 (完全取代 Emoji)
            const arrowSvg = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
            const infoSvg = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

            const fareTypes = [
                { key: 'adult', labelZh: '成人', labelEn: 'Adult' },
                { key: 'child', labelZh: '兒童', labelEn: 'Child' },
                { key: 'elder', labelZh: '長者', labelEn: 'Elder' },
                { key: 'student', labelZh: '學生', labelEn: 'Student' }
            ];

            // 1. 處理基礎收費與 Overrides (動態收費)
            const currentDir = CONFIG.currentDirection;
            const activeShifts = CONFIG.enabledShifts || [];

            let matchedOverrides = [];
            if (routeItem.fares.overrides) {
                routeItem.fares.overrides.forEach(ov => {
                    const matchBound = !ov.bound || ov.bound.includes(currentDir);
                    const matchShift = !ov.shift || activeShifts.includes(ov.shift);
                    if (matchBound && matchShift) {
                        matchedOverrides.push(ov);
                    }
                });
            }

            const buildFareGrid = (fareData, titleText, shiftKey = null, boundKey = null) => {
                const wrapper = document.createElement('div');
                wrapper.className = 'modern-fare-group';

                let themeColor = '#64748b'; // 默認灰色
                if (shiftKey) {
                    const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
                    if (shiftConfig && shiftConfig.color) themeColor = shiftConfig.color;
                }

                wrapper.style.setProperty('--fare-theme', themeColor);

                let headerHtml = '';

                // 如果沒有 shiftKey 且沒有 boundKey，代表是基礎常規收費，保留標題文字
                if (!shiftKey && !boundKey) {
                    headerHtml = `<span class="modern-fare-title">${titleText}</span>`;
                } else {
                    // 根據 shift 與 bound 動態組裝表頭 (取消原先的 label/labelEn)
                    let tagsHtml = '';
                    if (shiftKey) {
                        const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
                        tagsHtml += `<span class="shift-tag" style="background-color: ${shiftConfig.color}; border-color: ${shiftConfig.color};">${shiftConfig.label}</span>`;
                    }
                    if (boundKey) {
                        let destName = '';
                        if (routeItem.stops && routeItem.stops[boundKey]) {
                            const validStops = routeItem.stops[boundKey].filter(s => s.visible);
                            if (validStops.length > 0) {
                                const lastStop = validStops[validStops.length - 1];
                                destName = isZh
                                    ? (lastStop.nameCn || '').replace(/\^\^/g, '')
                                    : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
                            }
                        }
                        const destText = isZh ? `往 ${destName}` : `To ${destName}`;
                        tagsHtml += `<span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 2px 12px; font-size: 13px; font-weight: 600;">${destText}</span>`;
                    }
                    headerHtml = `<div style="display: flex; align-items: center;">${tagsHtml}</div>`;
                }

                let gridHtml = `
                    <div class="modern-fare-header">
                        ${headerHtml}
                    </div>
                    <div class="modern-fare-grid">
                `;

                fareTypes.forEach(ft => {
                    if (fareData[ft.key] !== undefined) {
                        gridHtml += `
                            <div class="modern-fare-item">
                                <span class="fare-lbl">${isZh ? ft.labelZh : ft.labelEn}</span>
                                <span class="fare-val"><span class="currency">$</span>${fareData[ft.key].toFixed(1)}</span>
                            </div>
                        `;
                    }
                });
                gridHtml += `</div>`;
                wrapper.innerHTML = gridHtml;
                return wrapper;
            };

            // 渲染全程常規收費
            fareWrap.appendChild(buildFareGrid(routeItem.fares, isZh ? '全程收費' : 'Full Fare'));

            // 渲染 Overrides 動態收費
            matchedOverrides.forEach(ov => {
                // 不傳遞 ov.label，改由 shift 與 bound 動態生成表頭
                fareWrap.appendChild(buildFareGrid(ov, null, ov.shift, ov.bound));
            });

            const renderNode = (nameCn, nameEn) => {
                const cleanCn = (nameCn || '').replace(/\^\^/g, '');
                const cleanEn = (nameEn || '').replace(/\^\^/g, '');
                return `<div class="route-node-clean">
                            <span class="node-main">${isZh ? cleanCn : (cleanEn || cleanCn)}</span>
                            ${isZh && cleanEn ? `<span class="node-sub">${cleanEn}</span>` : ''}
                        </div>`;
            };

            // 2. 處理分段收費
            const validSectionFares = (routeItem.fares.sectionFares || []).filter(sf =>
                !sf.direction || sf.direction.includes(currentDir)
            );

            if (validSectionFares.length > 0) {
                const sectionContainer = document.createElement('div');
                sectionContainer.className = 'modern-section-container';
                sectionContainer.innerHTML = `<div class="modern-section-title">${isZh ? '分段收費' : 'Section Fares'}</div>`;

                validSectionFares.forEach(sf => {
                    let shiftBadgesHTML = '';
                    const shiftArray = Array.isArray(sf.shift) ? sf.shift : (sf.shift ? [sf.shift] : []);
                    if (shiftArray.length > 0) {
                        shiftBadgesHTML = '<div class="modern-shift-badges" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">';
                        shiftArray.forEach(shiftKey => {
                            const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
                            let boundKey = sf.direction ? (sf.direction.includes(',') ? sf.direction.split(',')[0] : sf.direction) : currentDir;
                            let destName = '';
                            if (routeItem.stops && routeItem.stops[boundKey]) {
                                const validStops = routeItem.stops[boundKey].filter(s => s.visible);
                                if (validStops.length > 0) {
                                    const lastStop = validStops[validStops.length - 1];
                                    destName = isZh
                                        ? (lastStop.nameCn || '').replace(/\^\^/g, '')
                                        : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
                                }
                            }
                            const destText = isZh ? `往 ${destName}` : `To ${destName}`;
                            shiftBadgesHTML += `
                                <div style="display: flex; align-items: center;">
                                    <span class="shift-tag" style="background-color: ${shiftConfig.color}; border-color: ${shiftConfig.color};">${shiftConfig.label}</span>
                                    <span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 2px 12px; font-size: 13px; font-weight: 600;">${destText}</span>
                                </div>
                            `;
                        });
                        shiftBadgesHTML += '</div>';
                    }

                    // 動態獲取票價，若無則預設為成人票價的一半
                    const pAdult = sf.price;
                    const pChild = sf.childPrice !== undefined ? sf.childPrice : pAdult / 2;
                    const pElder = sf.elderPrice !== undefined ? sf.elderPrice : pAdult / 2;
                    const pStudent = sf.studentPrice !== undefined ? sf.studentPrice : pAdult / 2;

                    // 【優化】判斷分段收費起訖站是否完全相同
                    const isSameNode = (sf.fromCn === sf.toCn) && (sf.fromEn === sf.toEn);
                    const nodesHtml = isSameNode
                        ? renderNode(sf.fromCn, sf.fromEn) // 相同則只顯示第一個站點
                        : `${renderNode(sf.fromCn, sf.fromEn)}<div class="flow-arrow-modern">${arrowSvg}</div>${renderNode(sf.toCn, sf.toEn)}`;

                    sectionContainer.innerHTML += `
                        <div class="modern-route-card">
                            ${shiftBadgesHTML}
                            <div class="route-flow-modern">
                                <div class="route-nodes-wrap">
                                    ${nodesHtml}
                                </div>
                                <div class="multi-price-grid">
                                    <div class="price-cell adult-price">
                                        <div class="p-label">${isZh ? '成人' : 'Adult'}</div>
                                        <div class="p-value"><span class="cur">$</span>${pAdult.toFixed(1)}</div>
                                    </div>
                                    <div class="price-cell sub-price">
                                        <div class="p-label">${isZh ? '小童' : 'Child'}</div>
                                        <div class="p-value"><span class="cur">$</span>${pChild.toFixed(1)}</div>
                                    </div>
                                    <div class="price-cell sub-price">
                                        <div class="p-label">${isZh ? '長者' : 'Elder'}</div>
                                        <div class="p-value"><span class="cur">$</span>${pElder.toFixed(1)}</div>
                                    </div>
                                    <div class="price-cell sub-price">
                                        <div class="p-label">${isZh ? '學生' : 'Student'}</div>
                                        <div class="p-value"><span class="cur">$</span>${pStudent.toFixed(1)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
                fareWrap.appendChild(sectionContainer);
            }

            // 3. 處理短途下車回贈
            const validRebates = (routeItem.fares.shortDistanceRebates || []).filter(sr =>
                !sr.direction || sr.direction.includes(currentDir)
            );

            if (validRebates.length > 0) {
                const rebateContainer = document.createElement('div');
                rebateContainer.className = 'modern-section-container rebate-theme';
                rebateContainer.innerHTML = `
                    <div class="modern-section-title">
                        <span>${isZh ? '短途下車回贈' : 'Short-distance Rebate'}</span>
                        <span class="action-tag">${isZh ? '下車再次拍卡' : 'Tap Again on Alight'}</span>
                    </div>
                `;

                validRebates.forEach(sr => {
                    const remarkText = isZh ? sr.remarkCn : sr.remarkEn;
                    let shiftBadgesHTML = '';
                    const shiftArray = Array.isArray(sr.shift) ? sr.shift : (sr.shift ? [sr.shift] : []);
                    if (shiftArray.length > 0) {
                        shiftBadgesHTML = '<div class="modern-shift-badges" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">';
                        shiftArray.forEach(shiftKey => {
                            const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
                            let boundKey = sr.direction ? (sr.direction.includes(',') ? sr.direction.split(',')[0] : sr.direction) : currentDir;
                            let destName = '';
                            if (routeItem.stops && routeItem.stops[boundKey]) {
                                const validStops = routeItem.stops[boundKey].filter(s => s.visible);
                                if (validStops.length > 0) {
                                    const lastStop = validStops[validStops.length - 1];
                                    destName = isZh ? (lastStop.nameCn || '').replace(/\^\^/g, '') : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
                                }
                            }
                            const destText = isZh ? `往 ${destName}` : `To ${destName}`;
                            shiftBadgesHTML += `
                                <div style="display: flex; align-items: center;">
                                    <span class="shift-tag" style="background-color: ${shiftConfig.color}; border-color: ${shiftConfig.color};">${shiftConfig.label}</span>
                                    <span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 2px 12px; font-size: 13px; font-weight: 600;">${destText}</span>
                                </div>
                            `;
                        });
                        shiftBadgesHTML += '</div>';
                    }

                    // 實際支付票價
                    const fAdult = sr.actualFare;
                    const fChild = sr.childFare !== undefined ? sr.childFare : fAdult / 2;
                    const fElder = sr.elderFare !== undefined ? sr.elderFare : fAdult / 2;
                    const fStudent = sr.studentFare !== undefined ? sr.studentFare : fAdult / 2;

                    // 原本全程票價 (用於劃掉顯示)
                    const oAdult = sr.fullFare || (sr.actualFare + sr.rebate);
                    const oChild = sr.childFullFare !== undefined ? sr.childFullFare : oAdult / 2;
                    const oElder = sr.elderFullFare !== undefined ? sr.elderFullFare : oAdult / 2;
                    const oStudent = sr.studentFullFare !== undefined ? sr.studentFullFare : oAdult / 2;

                    // 提取起訖站名稱變數
                    const startCn = sr.startStopCn || sr.startStop;
                    const startEn = sr.startStopEn;
                    const alightCn = sr.alightStopCn || sr.alightStop;
                    const alightEn = sr.alightStopEn;

                    // 【優化】判斷回贈起訖站是否完全相同
                    const isSameNodeRebate = (startCn === alightCn) && (startEn === alightEn);
                    const rebateNodesHtml = isSameNodeRebate
                        ? renderNode(startCn, startEn) // 相同則只顯示第一個站點
                        : `${renderNode(startCn, startEn)}<div class="flow-arrow-modern success">${arrowSvg}</div>${renderNode(alightCn, alightEn)}`;

                    rebateContainer.innerHTML += `
                        <div class="modern-route-card rebate-card">
                            ${shiftBadgesHTML}
                            <div class="route-flow-modern">
                                <div class="route-nodes-wrap">
                                    ${rebateNodesHtml}
                                </div>
                                <div class="multi-price-grid rebate-grid">
                                    <div class="price-cell adult-price">
                                        <div class="p-label">${isZh ? '成人' : 'Adult'}</div>
                                        <div class="p-value-wrap">
                                            <span class="p-strike">$${oAdult.toFixed(1)}</span>
                                            <span class="p-value success"><span class="cur">$</span>${fAdult.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <div class="price-cell sub-price">
                                        <div class="p-label">${isZh ? '小童' : 'Child'}</div>
                                        <div class="p-value-wrap">
                                            <span class="p-strike">$${oChild.toFixed(1)}</span>
                                            <span class="p-value success"><span class="cur">$</span>${fChild.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <div class="price-cell sub-price">
                                        <div class="p-label">${isZh ? '長者' : 'Elder'}</div>
                                        <div class="p-value-wrap">
                                            <span class="p-strike">$${oElder.toFixed(1)}</span>
                                            <span class="p-value success"><span class="cur">$</span>${fElder.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <div class="price-cell sub-price">
                                        <div class="p-label">${isZh ? '學生' : 'Student'}</div>
                                        <div class="p-value-wrap">
                                            <span class="p-strike">$${oStudent.toFixed(1)}</span>
                                            <span class="p-value success"><span class="cur">$</span>${fStudent.toFixed(1)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ${remarkText ? `
                            <div class="modern-remark">
                                <span class="remark-icon">${infoSvg}</span>
                                <span>${remarkText}</span>
                            </div>` : ''}
                        </div>
                    `;
                });
                fareWrap.appendChild(rebateContainer);
            }

        } else {
            fareWrap.innerHTML = `<span class="empty-data-text">${LangHandler.getText('noInformation') || '無收費資訊'}</span>`;
        }

        // 👉 構建與時間表完全一致的現代化彈窗 (Modal)
        const oldFareOverlay = document.getElementById('fare-popup-overlay');
        if (oldFareOverlay) oldFareOverlay.remove(); // 清除舊有的避免重複

        const fareOverlay = document.createElement('div');
        fareOverlay.id = 'fare-popup-overlay';
        // 💡 修正 1：移除 hidden 類別，因為我們改為動態加載
        fareOverlay.className = 'timetable-panel-overlay modern-blur';

        const fareContent = document.createElement('div');
        fareContent.className = 'timetable-panel-content';

        // 關閉按鈕
        const closeBtn = document.createElement('button');
        closeBtn.className = 'timetable-panel-close-modern';
        closeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
        closeBtn.addEventListener('click', () => {
            fareOverlay.remove();
        });
        fareContent.appendChild(closeBtn);

        // 彈窗標題
        const fareHeader = document.createElement('div');
        fareHeader.className = 'timetable-panel-header-modern';
        const titleText = isZh ? `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> 收費資訊` : `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> Fares`;
        fareHeader.innerHTML = `<h2 class="panel-title-modern">${titleText}</h2>`;
        fareContent.appendChild(fareHeader);

        // 將組裝好的收費內容放入彈窗
        fareContent.appendChild(fareWrap);
        fareOverlay.appendChild(fareContent);

        // 💡 修正 3：刪除這裡的 document.body.appendChild(fareOverlay); 
        // 絕對不能在頁面一載入就把它塞進 body 裡！

        // 點擊背景關閉
        fareOverlay.addEventListener('click', (e) => {
            if (e.target === fareOverlay) fareOverlay.remove(); // 💡 修正 4：點擊背景時移除
        });

        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'route-actions-wrap';

        // 0. 切換方向按鈕 (紅色，位於最左側。如果是循環線則不建立此按鈕)
        var supportSwitch = DataHandler.isRouteSupportDirectionSwitch(routeItem);
        if (!isLoop) {
            const directionBtn = document.createElement('button');
            directionBtn.className = 'action-btn-modern toggle-direction-btn btn-danger-modern';

            var dirKey = CONFIG.currentDirection === "A" ? 'directionA' : 'directionB';
            directionBtn.title = `${LangHandler.getText('switchDirection')} (${LangHandler.getText(dirKey)} ➔ ${directionInfo.last})`;

            // 雙向箭頭 Icon
            directionBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 10v11" />
                    <path d="M11 17l-4 4-4-4" />
                    <path d="M17 14V3" />
                    <path d="M13 7l4-4 4 4" />
                </svg>
            `;

            directionBtn.disabled = !supportSwitch;
            if (!supportSwitch) {
                directionBtn.style.opacity = '0.4';
                directionBtn.style.cursor = 'not-allowed';
            }

            directionBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                CONFIG.currentDirection = CONFIG.currentDirection === "A" ? "B" : "A";
                CONFIG.currentPage = 1;
                Renderer.renderStopPage(routeItem.route);
            });

            actionsWrap.appendChild(directionBtn);
        }

        const levelPopupBtn = document.createElement('button');
        levelPopupBtn.className = 'action-btn-modern';
        levelPopupBtn.title = isZh ? '解鎖條件' : 'Unlock Levels';
        levelPopupBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        `;
        levelPopupBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            Renderer.renderLevelModal(routeItem);
        });

        const infoPopupBtn = document.createElement('button');
        infoPopupBtn.className = 'action-btn-modern';
        infoPopupBtn.title = isZh ? '更多資訊' : 'More Info';
        infoPopupBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        `;
        infoPopupBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            Renderer.renderInfoModal(routeItem);
        });

        const farePopupBtn = document.createElement('button');
        farePopupBtn.className = 'action-btn-modern';
        farePopupBtn.title = isZh ? '收費資訊' : 'Fares';
        farePopupBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        `;
        farePopupBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.appendChild(fareOverlay);
        });

        const timetableBtn = document.createElement('button');
        timetableBtn.className = 'action-btn-modern';
        timetableBtn.title = LangHandler.getText('timetableBtn') || '營運時間表';
        timetableBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 12"></polyline>
            </svg>
        `;
        timetableBtn.addEventListener('click', () => { this.renderTimetablePanel(routeItem, CONFIG.currentDirection || 'A'); });

        // 只需加入 level、info、fare、timetable。方向按鈕已在前方條件句判斷並加入了！
        actionsWrap.appendChild(levelPopupBtn);
        actionsWrap.appendChild(infoPopupBtn);
        actionsWrap.appendChild(farePopupBtn);
        actionsWrap.appendChild(timetableBtn);

        // 組合基礎資訊列
        basicInfo.appendChild(numWrap);
        basicInfo.appendChild(cleanDirUI);
        basicInfo.appendChild(shiftTags);
        basicInfo.appendChild(actionsWrap);

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

        // 核心修改：先過濾出真正有效且帶有途經點的班次
        let shiftGroups = [];
        enabledShifts.forEach((shiftKey) => {
            const shiftConfig = DataHandler.getShiftConfig(routeItem, shiftKey);
            const routeBound = DataHandler.getRouteBound(routeItem);
            const dir = routeBound.includes('C') ? 'C' : (CONFIG.currentDirection || 'A');
            const shiftViaData = routeItem.viaDirections?.[dir]?.[shiftKey] || routeItem.viaDirections?.[shiftKey]?.[dir] || routeItem.viaDirections?.[shiftKey];

            const viaCn = shiftViaData?.viaCn || routeItem.viaDirectionCn || '';
            const viaEn = shiftViaData?.viaEn || routeItem.viaDirectionEn || '';
            const viaText = isZh ? viaCn : (viaEn || viaCn);

            if (!viaText || viaText === LangHandler.getText('noInformation')) return;
            shiftGroups.push({ shiftKey, shiftConfig, viaText });
        });

        shiftGroups.forEach((group, index) => {
            const startTextZh = group.shiftConfig.startTextCn || '始';
            const startTextEn = group.shiftConfig.startTextEn || 'S';
            const viaTextZh = group.shiftConfig.viaTextCn || '➔';
            const viaTextEn = group.shiftConfig.viaTextEn || '➔';
            const endTextZh = group.shiftConfig.endTextCn || '終';
            const endTextEn = group.shiftConfig.endTextEn || 'E';

            let viaNodes = group.viaText.split(/[、,]/).map(s => s.trim()).filter(s => s && s !== LangHandler.getText('noInformation'));

            const allNodes = [
                { name: directionInfo.first, type: 'start' },
                ...viaNodes.map(name => ({ name, type: 'via' })),
                { name: directionInfo.last, type: 'end' }
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
                let innerText = isZh ? viaTextZh : viaTextEn;
                let seqClass = 'shift-via-stop';
                let isTurningPoint = false;
                let displayName = node.name;

                // 檢查是否為轉折點 (包含 ^^)
                if (displayName.includes('^^')) {
                    isTurningPoint = true;
                    displayName = displayName.replace(/\^\^/g, ''); // 清理名稱供顯示
                }

                if (isLoop && node.type === 'via') {
                    innerText = '➔';
                }

                if (node.type === 'start') {
                    innerText = isZh ? startTextZh : startTextEn;
                    seqClass = 'shift-start-stop';
                } else if (node.type === 'end') {
                    innerText = isZh ? endTextZh : endTextEn;
                    seqClass = 'shift-end-stop';
                }

                // 準備轉折點專屬的 HTML 標籤
                let tpTagHtml = '';
                if (isLoop && isTurningPoint && node.type === 'via') {
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

            nodesHTML += `
                    </div>
                </div>
            `;
        });

        nodesHTML += `</div>`;

        // 核心修改：判斷有效的班次陣列（有途經點）長度大於 1 才會顯示展開按鈕
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
                    const extraGroups = details.querySelectorAll('.extra-shift-group');
                    extraGroups.forEach(g => {
                        g.style.display = isExpanded ? 'block' : 'none';
                    });
                    btn.innerHTML = isExpanded
                        ? (isZh ? '收起班次 ↑' : 'Collapse Shifts ↑')
                        : (isZh ? '查看其他班次 ↓' : 'View Other Shifts ↓');
                });
            }
        }, 0);

        routeInfoBar.appendChild(basicInfo);
        routeInfoBar.appendChild(details);

        return routeInfoBar;
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
        const filterTypes = ["Overnight", "Sightseeing", "Event", "Festival", "Crew Shuttle", "University", "Express", "Limited-stop", "Circular", "Special Departure", "Stadium", "CentralAxis", "CityStepped"];
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
        var isLoop = routeItem.bound && routeItem.bound.includes("C");

        if (isLoop) {
            directionBtn.style.display = 'none';
        } else {
            var directionInfo = DataHandler.getDirectionStartEndStops(routeItem);
            var dirKey = CONFIG.currentDirection === "A" ? 'directionA' : 'directionB';

            directionBtn.title = `${LangHandler.getText('switchDirection')} (${LangHandler.getText(dirKey)} ➔ ${directionInfo.last})`;

            // 【修改點1】改為上下雙向平行箭頭
            directionBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 10v11" />
                    <path d="M11 17l-4 4-4-4" />
                    <path d="M17 14V3" />
                    <path d="M13 7l4-4 4 4" />
                </svg>
            `;
        }

        directionBtn.disabled = !supportSwitch;
        if (!supportSwitch) {
            directionBtn.style.opacity = '0.4';
            directionBtn.style.cursor = 'not-allowed';
        }

        directionBtn.addEventListener('click', function () {
            CONFIG.currentDirection = CONFIG.currentDirection === "A" ? "B" : "A";
            CONFIG.currentPage = 1;
            Renderer.renderStopPage(routeItem.route);
        });

        // 【修改點2】翻新 Pagination 區塊，賦予 modern-pagination 樣式
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
                Renderer.renderStopPage(routeItem.route);
            }
        });

        nextBtn.addEventListener('click', function () {
            if (CONFIG.currentPage < totalPages) {
                CONFIG.currentPage++;
                Renderer.renderStopPage(routeItem.route);
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

        // 表頭
        const thead = document.createElement('thead');
        thead.innerHTML = `
        <tr>
            <th data-lang-key="stopNumber" style="text-align: center;">${LangHandler.getText('stopNumber')}</th>
            <th data-lang-key="stopName">${LangHandler.getText('stopName')}</th>
        </tr>
    `;
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
        const nameCell = document.createElement('td');
        const nameContainer = document.createElement('div');
        nameContainer.className = 'stop-name-container';

        this.renderStopName(nameContainer, stop);

        // 臨時關閉標記
        if (stop.tempClose) {
            const tempTag = document.createElement('div');
            tempTag.className = 'temp-close-tag';
            tempTag.setAttribute('data-lang-key', 'tempClose');
            tempTag.textContent = LangHandler.getText('tempClose');
            nameContainer.appendChild(tempTag);

            if (stop.tempCloseReason) {
                const reason = document.createElement('div');
                reason.className = 'temp-close-reason';
                reason.textContent = stop.tempCloseReason;
                nameContainer.appendChild(reason);
            }
        }

        nameCell.appendChild(nameContainer);
        row.appendChild(nameCell);

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

            // 【核心修改】：中文模式下，英文的 main-name 旁邊顯示 sub-name
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
        if (routeItem.stops && routeItem.stops[direction]) {
            const validStops = routeItem.stops[direction].filter(s => s.visible);
            if (validStops.length > 0) {
                const lastStop = validStops[validStops.length - 1];
                destName = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW'
                    ? (lastStop.nameCn || '').replace(/\^\^/g, '')
                    : ((lastStop.nameEn || lastStop.nameCn) || '').replace(/\^\^/g, '');
            }
        }

        // 獲取該路線第一個班次的顏色
        let mainRouteColor = '#2563eb';
        const enabledShifts = DataHandler.getEnabledShifts(routeItem);
        if (enabledShifts && enabledShifts.length > 0) {
            const firstShiftConfig = DataHandler.getShiftConfig(routeItem, enabledShifts[0]);
            if (firstShiftConfig && firstShiftConfig.color) {
                mainRouteColor = firstShiftConfig.color;
            }
        }

        const header = document.createElement('div');
        header.className = 'timetable-panel-header-modern';
        var textColor = routeItem.textColor || '#ffffff';

        // 綁定主色與文字顏色到 route-badge 的背景
        const titleText = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW'
            ? `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> 營運時間表 <span class="dest-pill">往 ${destName}</span>`
            : `<span class="route-badge" style="--route-badge-bg: ${mainRouteColor}; --route-badge-color: ${textColor}; background-color: ${mainRouteColor};">${routeItem.route}</span> Timetable <span class="dest-pill">To ${destName}</span>`;

        header.innerHTML = `<h2 class="panel-title-modern">${titleText}</h2>`;
        panelContent.appendChild(header);

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

                        // 【新增 1】：獲取起點名稱並新增表頭
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

                        // 【新增 2】：定義 SVG Icon
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

                panelContent.appendChild(card);

                // 【新增】：如果後面還有其他班次 (如 special1)，則加上一條優雅的分隔線
                if (shiftIndex < shiftKeys.length - 1) {
                    const separator = document.createElement('div');
                    separator.className = 'shift-card-separator';
                    panelContent.appendChild(separator);
                }
            });
        } else {
            const emptyTip = document.createElement('div');
            emptyTip.className = 'empty-tip-modern';
            emptyTip.textContent = CONFIG.emptyTipText[CONFIG.currentLang] || '暫無數據';
            panelContent.appendChild(emptyTip);
        }
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
                var shiftColor = shiftConfig ? shiftConfig.color : '#4a90e2';

                // 動態獲取該解鎖條件對應的路線方向起迄站點
                var dirInfo = DataHandler.getDirectionStartEndStops(routeItem, l.bound);
                var isLoop = l.bound.indexOf("C") !== -1;

                var separator = isLoop
                    ? `<span class="dir-icon loop" style="color:${shiftColor}">↺</span>`
                    : `<span class="dir-icon" style="color:#94a3b8">➔</span>`;

                var destText = isLoop ? (LangHandler.getText('loopDirection') || '循環線') : dirInfo.last;

                group.innerHTML += `
                    <div class="level-unlock-card">
                        <div class="level-unlock-left">
                            <div class="shift-tag" style="background-color: ${shiftColor}; border-color: ${shiftColor};">
                                ${shiftLabel}
                            </div>
                            <div class="level-route-dir">
                                <span class="dir-stop">${dirInfo.first}</span>
                                ${separator}
                                <span class="dir-stop ${isLoop ? 'loop-text' : ''}" style="${isLoop ? `color:${shiftColor}` : ''}">${destText}</span>
                            </div>
                        </div>
                        <div class="level-unlock-right">
                            <div class="level-req-badge">
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                Lv.${l.level}
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
        body.style.gap = '12px'; // 讓每條訊息欄之間有適當呼吸空間
        body.style.padding = '8px 0';

        let hasInfo = false;

        const createInfoRow = (title, badgesHTML) => {
            return `
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 14px 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; transition: all 0.2s ease;">
                <div style="font-size: 14px; font-weight: 600; color: #475569; flex-shrink: 0; margin-top: 4px;">${title}</div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; flex: 1 1 auto; min-width: 200px;">${badgesHTML}</div>
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
                // 解析基本類型名稱與翻譯
                let typeVal = typeof t === 'string' ? t : t.type;
                let typeKey = 'type' + typeVal.replace(/\s+/g, '');
                let transText = LangHandler.getText(typeKey);
                if (transText === typeKey) transText = typeVal;

                // 基礎路線類型徽章
                let baseBadge = `<span class="badge-common type-badge" data-type="${typeVal}" style="font-size:13px; padding:6px 12px; margin:0;">${transText}</span>`;

                // 若帶有班次資訊 (代表一個班次時)
                if (typeof t === 'object' && t.shift) {
                    let shiftConfig = DataHandler.getShiftConfig(routeItem, t.shift);
                    let shiftLabel = shiftConfig ? shiftConfig.label : t.shift;
                    let shiftColor = shiftConfig ? shiftConfig.color : '#4a90e2';

                    // 使用與「路線代碼」完全一致的 shift-tag 結構，不拆分成 route-badge
                    let shiftTagHTML = `<span class="shift-tag" style="background-color: ${shiftColor}; border-color: ${shiftColor}; margin-left: 0;">${shiftLabel}</span>`;

                    // 套用指定的虛線框容器樣式，確保同一班次的標籤不換行並排顯示
                    return `<div style="display: inline-flex; flex-wrap: nowrap; align-items: center; gap: 4px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 2px 4px 2px 2px; max-width: 100%; overflow-x: auto;">
                                ${baseBadge}
                                ${shiftTagHTML}
                            </div>`;
                }

                // 如果沒有班次資訊，直接返回單一標籤
                return baseBadge;
            }).join('');

            // 外層容器使用 flex-wrap:wrap 確保多個班次並排時能自然折行，而不是一行一個
            body.innerHTML += createInfoRow(isZh ? '路線類型' : 'Route Type', `<div style="display:flex; justify-content: flex-end; flex-wrap:wrap; gap:8px;">${badges}</div>`);
        }


        var boundStr = DataHandler.getRouteBound(routeItem);
        var targetDirection = CONFIG.currentDirection;
        if (boundStr && boundStr.includes("C")) {
            targetDirection = "C";
        }

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

        if (!hasInfo) {
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
        // 修正容器ID，确保指向正确的元素
        var logPanel = document.getElementById('updateLogPanel');
        if (!logPanel) return;

        logPanel.innerHTML = '';

        // 确保从updatelog.js获取数据
        if (typeof updateLogData !== 'undefined' && updateLogData && updateLogData.logs) {
            var logList = document.createElement('div');
            logList.className = 'log-list';
            logPanel.appendChild(logList);

            // 遍历更新日志数据
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

                // 日志标题
                var logItemTitle = document.createElement('div');
                logItemTitle.className = 'log-item-title';
                logItemTitle.textContent = logItem.title || LangHandler.getText('logUpdateContent');
                logItemEl.appendChild(logItemTitle);

                // 分类内容容器
                var contentCategories = document.createElement('div');
                contentCategories.className = 'log-content-categories';

                // 处理分类内容
                var content = logItem.content || {};

                // 定义分类顺序和样式
                var categories = [
                    { key: 'added', className: 'log-category-added' },
                    { key: 'fixed', className: 'log-category-fixed' },
                    { key: 'removed', className: 'log-category-removed' },
                    { key: 'revamped', className: 'log-category-revamped' },
                    { key: 'improvements', className: 'log-category-improvements' }
                ];

                // 渲染每个分类
                categories.forEach(function (category) {
                    if (content[category.key] && content[category.key].length > 0) {
                        var categoryWrap = document.createElement('div');
                        categoryWrap.className = `log-category ${category.className}`;

                        // 分类标题
                        var categoryTitle = document.createElement('div');
                        categoryTitle.className = 'log-category-title';
                        categoryTitle.textContent = LangHandler.getText(`log${category.key.charAt(0).toUpperCase() + category.key.slice(1)}`) ||
                            category.key.charAt(0).toUpperCase() + category.key.slice(1);
                        categoryWrap.appendChild(categoryTitle);

                        // 分类列表
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
            // 无更新日志数据时显示提示
            var emptyLog = document.createElement('div');
            emptyLog.className = 'empty-log-tip';
            emptyLog.textContent = LangHandler.getText('noUpdateLog');
            logPanel.appendChild(emptyLog);
        }

        var logFooter = document.createElement('div');
        logFooter.className = 'log-footer';

        logPanel.appendChild(logFooter);
    },

    // 初始化页面加载
    initPageLoad: function () {
        // 初始化语言
        LangHandler.renderAllTexts();

        // 初始化页面事件
        PageController.initPageEvents();

        // 修复4：确保DOM完全加载后初始化键盘
        const input = document.getElementById('routeNumberInput');
        if (input) {
            // 修复5：使用防抖函数优化输入事件
            const debouncedInputHandler = debounce(function () {
                Renderer.initKeyboardValidity(this.value);
                Renderer.renderRouteSuggestions(this.value);
            }, 100);

            input.addEventListener('input', debouncedInputHandler);

            // 修复6：添加键盘按钮点击后的输入同步
            input.addEventListener('change', function () {
                Renderer.initKeyboardValidity(this.value);
                Renderer.renderRouteSuggestions(this.value);
            });

            // 确保页面加载完成后初始化键盘
            setTimeout(() => {
                Renderer.initKeyboardValidity('');
                Renderer.renderRouteSuggestions('');
            }, 300);
        } else {
            console.warn('线路编号输入框未找到，请检查 ID: routeNumberInput');
        }

        // 页面加载完成后的初始化
        window.addEventListener('load', function () {
            // 确保所有DOM元素加载完成
            setTimeout(() => {
                Renderer.updatePageLang();
                // 再次初始化键盘，确保元素已加载
                if (input) {
                    Renderer.initKeyboardValidity(input.value);
                }
                console.log('页面初始化完成，当前语言：', CONFIG.currentLang);
            }, 500);
        });
    }

};

// ------------- 全局初始化 -------------
// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function () {
    try {
        // 初始化渲染器
        Renderer.initPageLoad();

        // 确保语言切换按钮的初始状态正确
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

        console.log('应用初始化完成');
    } catch (error) {
        console.error('应用初始化失败:', error);
        // 初始化失败时的兜底处理
        alert(LangHandler.getText('initFailed'));
    }
});

// ------------- 全局错误处理 -------------
window.addEventListener('error', function (e) {
    console.error('全局错误捕获:', e.message, e.filename, e.lineno);
    // 可以在这里添加错误上报逻辑
});

// ------------- 工具函数 -------------
// 防抖函数
function debounce(func, wait = 200) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

// 节流函数
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

// 格式化日期（多语言适配）
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

    // 月份名称（多语言）
    const monthNames = {
        'zh-CN': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        'en-US': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    // 星期名称（多语言）
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

// ==========================================
// 全站點搜尋功能 (Station Search)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const stationInput = document.getElementById('stationSearchInput');
    const dropdown = document.getElementById('stationSearchDropdown');
    const listContainer = document.getElementById('stationListContainer');

    if (stationInput && dropdown && listContainer) {
        // 1. 監聽輸入事件 (利用你現有的 debounce 防抖函數避免卡頓)
        stationInput.addEventListener('input', debounce(function (e) {
            const keyword = e.target.value.trim().toLowerCase();

            // 2. 執行全資料庫篩選邏輯
            const results = [];
            const validRoutes = DataHandler.getValidRoutes(); // 取得所有啟用的路線

            validRoutes.forEach(route => {
                // 遍歷該路線的所有方向 (A, B, C)
                ['A', 'B', 'C'].forEach(dir => {
                    if (route.stops && route.stops[dir]) {
                        route.stops[dir].forEach(stop => {
                            if (!stop.visible) return; // 略過隱藏站點

                            const nameCn = (stop.nameCn || '').toLowerCase();
                            const nameEn = (stop.nameEn || '').toLowerCase();

                            // 檢查中文或英文是否包含關鍵字
                            if (nameCn.includes(keyword) || nameEn.includes(keyword)) {
                                results.push({
                                    routeNum: route.route,
                                    nameCn: stop.nameCn,
                                    nameEn: stop.nameEn,
                                    direction: dir
                                });
                            }
                        });
                    }
                });
            });

            // 3. 渲染結果到畫面上
            renderStationSearchResults(results, keyword);
        }, 300));

        function renderStationSearchResults(results, keyword) {
            listContainer.innerHTML = ''; // 清空舊結果

            if (results.length === 0) {
                // 新增判斷中英文
                const emptyText = CONFIG.currentLang === 'en-US'
                    ? `No stations found for "${keyword}"`
                    : `找不到符合「${keyword}」的站點`;
                listContainer.innerHTML = `<div class="station-empty-tip">${emptyText}</div>`;
            } else {
                // 去重處理：避免同一個站點在同一條線的雙向被重複顯示兩次
                const uniqueResults = [];
                const seen = new Set();
                results.forEach(r => {
                    const key = `${r.routeNum}-${r.direction}-${r.nameCn}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        uniqueResults.push(r);
                    }
                });

                uniqueResults.forEach(result => {
                    const item = document.createElement('div');
                    item.className = 'station-item';

                    const cleanCn = result.nameCn.replace(/\^\^/g, '');
                    const cleanEn = result.nameEn ? result.nameEn.replace(/\^\^/g, '') : '';

                    let badgeColor = '#2563eb';
                    let textColor = '#ffffff';
                    let destText = ''; // 👈 新增目的地文字變數

                    const routeInfo = DataHandler.getRouteByNum(result.routeNum);
                    if (routeInfo) {
                        textColor = routeInfo.textColor || '#ffffff';
                        const shifts = DataHandler.getEnabledShifts(routeInfo);
                        if (shifts && shifts.length > 0) {
                            badgeColor = DataHandler.getShiftConfig(routeInfo, shifts[0]).color || badgeColor;
                        }

                        // 👇 計算該方向的目的地文字
                        const isZh = CONFIG.currentLang === 'zh-CN' || CONFIG.currentLang === 'zh-TW';
                        const isLoop = routeInfo.bound && routeInfo.bound.includes("C");
                        const dirInfo = DataHandler.getDirectionStartEndStops(routeInfo, result.direction);
                        const destName = isLoop ? (LangHandler.getText('loopDirection') || '循環線') : dirInfo.last;
                        destText = isLoop ? destName : (isZh ? `往 ${destName}` : `To ${destName}`);
                    }

                    // 👇 在 HTML 結構中加入 dest-pill，並用 flex 對齊
                    item.innerHTML = `
                        <div class="station-name-cn">${cleanCn}</div>
                        ${cleanEn ? `<div class="station-name-en">${cleanEn}</div>` : ''}
                        <div class="station-routes" style="display: flex; align-items: center;">
                            <span class="route-badge" style="--route-badge-bg: ${badgeColor}; --route-badge-color: ${textColor};">${result.routeNum}</span>
                            <span class="dest-pill" style="margin-left: 8px; background: #f1f5f9; color: #334155; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600;">${destText}</span>
                        </div>
                    `;

                    // 4. 點擊站點項目時的跳轉邏輯與高亮
                    item.addEventListener('click', () => {
                        dropdown.classList.add('hidden');
                        stationInput.value = ''; // 點擊後清空搜尋框

                        // 設定系統狀態並跳轉到該路線
                        CONFIG.currentRouteNum = result.routeNum;
                        CONFIG.currentDirection = result.direction;

                        // 計算目標站點在哪一頁
                        const routeItem = DataHandler.getRouteByNum(result.routeNum);
                        const validStops = DataHandler.getValidStops(routeItem);
                        let targetSeq = -1;
                        let targetIndex = -1;

                        for (let i = 0; i < validStops.length; i++) {
                            if (validStops[i].nameCn === result.nameCn) {
                                targetIndex = i;
                                targetSeq = validStops[i].seq;
                                break;
                            }
                        }

                        // 根據索引計算頁碼
                        if (targetIndex !== -1) {
                            CONFIG.currentPage = Math.floor(targetIndex / CONFIG.pageSize) + 1;
                        } else {
                            CONFIG.currentPage = 1;
                        }

                        // 切換畫面
                        PageController.showScreen('stopScreen');
                        PageController.hideScreen('inputScreen');
                        Renderer.renderStopPage(result.routeNum);

                        if (targetSeq !== -1) {
                            setTimeout(() => {
                                const targetRow = document.querySelector(`.stop-row-visible[data-seq="${targetSeq}"]`);
                                if (targetRow) {
                                    // 平滑滾動到畫面中間
                                    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    // 加入高亮 Class
                                    targetRow.classList.add('highlight-flash');
                                    // 5秒後移除高亮，保持版面乾淨 (已修改為5秒)
                                    setTimeout(() => {
                                        targetRow.classList.remove('highlight-flash');
                                    }, 5000);
                                }
                            }, 350); // 留點時間給畫面渲染及轉場動畫
                        }
                    });

                    listContainer.appendChild(item);
                });
            }

            // 顯示下拉選單
            dropdown.classList.remove('hidden');
        }

        // 5. 點擊畫面其他空白處時，自動隱藏下拉選單
        document.addEventListener('click', (e) => {
            if (!stationInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // 6. 點擊輸入框本身時，自動觸發搜尋以顯示所有站點
        stationInput.addEventListener('click', () => {
            stationInput.dispatchEvent(new Event('input'));
        });


    }

    const mobileSearchBtn = document.getElementById('mobileSearchToggle');
const mobileCloseBtn = document.getElementById('mobileSearchClose');
const searchWrap = document.getElementById('searchContainerWrap');
const searchInput = document.getElementById('stationSearchInput');

if (mobileSearchBtn && mobileCloseBtn && searchWrap) {
    mobileSearchBtn.addEventListener('click', () => {
        searchWrap.classList.add('active');
        if (searchInput) searchInput.focus();
    });

    mobileCloseBtn.addEventListener('click', () => {
        searchWrap.classList.remove('active');
    });
}
});
