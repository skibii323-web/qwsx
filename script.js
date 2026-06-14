const fontsData = [
    { name: "Calligraphia One", fontFamily: "CalligraphiaOne", defaultText: "Aa" },
    { name: "Allegretto Script Two Regular", fontFamily: "AllegrettoScriptTwo", defaultText: "Aa" },
    { name: "Allegretto Script One Regular", fontFamily: "AllegrettoScriptOne", defaultText: "Aa" },
    { name: "AllegroScript Italic", fontFamily: "AllegroScriptItalic", defaultText: "Aa" },
    { name: "Segoe Script", fontFamily: "SegoeScript", defaultText: "Aa" },
    { name: "Brock Script D", fontFamily: "BrockScriptD", defaultText: "Aa" },
    { name: "Discipuli Britannica", fontFamily: "DiscipuliBritannica", defaultText: "Aa" },
    { name: "PresentScript", fontFamily: "PresentScript", defaultText: "Aa" },
    { name: "Euroscript Pro", fontFamily: "EuroscriptPro", defaultText: "Aa" },
    { name: "Lovely Grace BG", fontFamily: "LovelyGrace", defaultText: "Aa" },
    { name: "A Day Without Sun", fontFamily: "ADayWithoutSun", defaultText: "Aa" },
    { name: "Ancient Kyiv", fontFamily: "AncientKyiv", defaultText: "Aa" },
    { name: "AA Higherup", fontFamily: "AAHigherup", defaultText: "Aa" },
    { name: "Ahellya Italic", fontFamily: "AhellyaItalic", defaultText: "Aa" },
    { name: "Ambassadore Type Shura", fontFamily: "AmbassadoreTypeShura", defaultText: "Aa" },
    { name: "Ambassadore Type Italic", fontFamily: "AmbassadoreTypeItalic", defaultText: "Aa" },
    { name: "Antique Olive Italic", fontFamily: "AntiqueOliveItalic", defaultText: "Aa" },
    { name: "Ubuntu Mono Bold", fontFamily: "UbuntuMonoBold", defaultText: "Aa" },
    { name: "VDS Bold", fontFamily: "VDSBold", defaultText: "Aa" },
    { name: "Vera Humana 95 Bold Italic", fontFamily: "VeraHumana95BoldItalic", defaultText: "Aa" },
    { name: "VDS Italic", fontFamily: "VDSItalic", defaultText: "Aa" },
    { name: "VDS Italic New", fontFamily: "VDSItalicNew", defaultText: "Aa" },
    { name: "VDS New", fontFamily: "VDSNew", defaultText: "Aa" },
    { name: "VDS Thin", fontFamily: "VDSThin", defaultText: "Aa" },
    { name: "VDS Thin Italic", fontFamily: "VDSThinItalic", defaultText: "Aa" },
    { name: "Vodafone ExB", fontFamily: "VodafoneExB", defaultText: "Aa" },
    { name: "Vodafone Rg Bold", fontFamily: "VodafoneRgBold", defaultText: "Aa" },
    { name: "Watc", fontFamily: "Watc", defaultText: "Aa" },
    { name: "Aroania", fontFamily: "Aroania", defaultText: "Aa" },
    { name: "Autoradiographic Rg Italic", fontFamily: "AutoradiographicRgItalic", defaultText: "Aa" },
    { name: "Avdira", fontFamily: "Avdira", defaultText: "Aa" },
    { name: "Aver Bold Italic", fontFamily: "AverBoldItalic", defaultText: "Aa" },
    { name: "Azbuka02 Italic", fontFamily: "Azbuka02Italic", defaultText: "Aa" },
    { name: "Bodoni Cyrillic FWF Bold Italic", fontFamily: "BodoniCyrillicFWFBoldItalic", defaultText: "Aa" },
    { name: "Blogger Sans Medium Regular", fontFamily: "BloggerSansMediumRegular", defaultText: "Aa" },
    { name: "Book Antiqua Italic", fontFamily: "BookAntiquaItalic", defaultText: "Aa" },
    { name: "Brill Roman", fontFamily: "BrillRoman", defaultText: "Aa" },
    { name: "Bravo Regular", fontFamily: "BravoRegular", defaultText: "Aa" },
    { name: "Candara Italic", fontFamily: "CandaraItalic", defaultText: "Aa" },
    { name: "Century Gothic Italic", fontFamily: "CenturyGothicItalic", defaultText: "Aa" },
    { name: "Century Schoolbook Italic", fontFamily: "CenturySchoolbookItalic", defaultText: "Aa" },
    { name: "Century Schoolbook Bold", fontFamily: "CenturySchoolbookBold", defaultText: "Aa" },
    { name: "Champagne & Limousines", fontFamily: "ChampagneLimousines", defaultText: "Aa" },
    { name: "Courier New Bold", fontFamily: "CourierNewBold", defaultText: "Aa" },
    { name: "Courier MCY Bold", fontFamily: "CourierMCYBold", defaultText: "Aa" },
    { name: "Courier TM Bold Italic", fontFamily: "CourierTMBoldItalic", defaultText: "Aa" },
    { name: "Cyrillic Garamond Italic", fontFamily: "CyrillicGaramondItalic", defaultText: "Aa" },
    { name: "DejaVu Sans Mono Oblique", fontFamily: "DejaVuSansMonoOblique", defaultText: "Aa" },
    { name: "Driver Gothic Pro Regular", fontFamily: "DriverGothicProRegular", defaultText: "Aa" },
    { name: "Droid Sans Bold", fontFamily: "DroidSansBold", defaultText: "Aa" },
    { name: "Elementa Cyr Bold", fontFamily: "ElementaCyrBold", defaultText: "Aa" },
    { name: "Elementa Cyr Bold Italic SC", fontFamily: "ElementaCyrBoldItalicSC", defaultText: "Aa" },
    { name: "ER Kurier 1251 Bold Italic", fontFamily: "ERKurier1251BoldItalic", defaultText: "Aa" },
    { name: "Eurofurence Italic", fontFamily: "EurofurenceItalic", defaultText: "Aa" },
    { name: "Excelsior LT Std Italic", fontFamily: "ExcelsiorLTStdItalic", defaultText: "Aa" },
    { name: "Exo 2 Extra Light Italic", fontFamily: "Exo2ExtraLightItalic", defaultText: "Aa" },
    { name: "Exo 2 Medium Italic", fontFamily: "Exo2MediumItalic", defaultText: "Aa" },
    { name: "Fagot Condensed", fontFamily: "FagotCondensed", defaultText: "Aa" },
    { name: "Fagot Condensed Italic", fontFamily: "FagotCondensedItalic", defaultText: "Aa" },
    { name: "Gabriela Regular", fontFamily: "GabrielaRegular", defaultText: "Aa" },
    { name: "Humnst777 TL Bold Italic", fontFamily: "Humnst777TLBoldItalic", defaultText: "Aa" },
    { name: "Kovanovic Cirilica Stampana", fontFamily: "KovanovicCirilicaStampana", defaultText: "Aa" },
    { name: "League Gothic Cyrillic", fontFamily: "LeagueGothicCyrillic", defaultText: "Aa" },
    { name: "Ropa Sans SC Italic", fontFamily: "RopaSansSCItalic", defaultText: "Aa" },
    { name: "Yiggivoo Unicode", fontFamily: "YiggivooUnicode", defaultText: "Aa" },
    { name: "Yiggivoo Unicode Italic", fontFamily: "YiggivooUnicodeItalic", defaultText: "Aa" }
];

const translations = {
    en: {
        beta: "Beta test, bugs are possible",
        inputPlaceholder: "Enter your text...",
        size: "Size",
        searchPlaceholder: "Font name...",
        color: "Color",
        weight: "Weight",
        spacing: "Spacing",
        brightness: "Brightness",
        letterSpacing: "Letter",
        lineHeight: "Line",
        glow: "Glow",
        opacity: "Opacity",
        create: "Create",
        modalTitle: "Ready!",
        modalDownload: "Download PNG",
        modalClose: "Close",
        login: "Sign In",
        logout: "Sign Out",
        nothingFound: "Nothing found",
        modalWarning: "Click «Download PNG».<br><strong style='color: #ffcc00; display: block; margin-top: 8px; font-size: 13px;'>If the button does not work (iPhone/Chrome) — try another browser (Safari) or tap and hold the image below and select «Save to Photos».</strong>"
    },
    ru: {
        beta: "Бета-тест, возможны баги",
        inputPlaceholder: "Введите свой текст...",
        size: "Размер",
        searchPlaceholder: "Название шрифта...",
        color: "Цвет",
        weight: "Жирность",
        spacing: "Интервалы",
        brightness: "Яркость",
        letterSpacing: "Межбуквенный",
        lineHeight: "Межстрочный",
        glow: "Свечение",
        opacity: "Прозрачность",
        create: "Создать",
        modalTitle: "Готово!",
        modalDownload: "Скачать PNG",
        modalClose: "Закрыть",
        login: "Войти",
        logout: "Выйти",
        nothingFound: "Ничего не найдено",
        modalWarning: "Нажмите «Скачать PNG».<br><strong style='color: #ffcc00; display: block; margin-top: 8px; font-size: 13px;'>Если кнопка не работает (iPhone/Google chrome) — попробуйте другой браузер (Safari) или просто зажмите картинку ниже пальцем и выберите «Сохранить в Фото».</strong>"
    },
    ua: {
        beta: "Бета-тест, можливі баги",
        inputPlaceholder: "Введіть свій текст...",
        size: "Розмір",
        searchPlaceholder: "Назва шрифту...",
        color: "Колір",
        weight: "Жирність",
        spacing: "Інтервали",
        brightness: "Яскравість",
        letterSpacing: "Міжбуквений",
        lineHeight: "Міжрядковий",
        glow: "Світіння",
        opacity: "Прозорість",
        create: "Створити",
        modalTitle: "Готово!",
        modalDownload: "Завантажити PNG",
        modalClose: "Закрити",
        login: "Увійти",
        logout: "Вийти",
        nothingFound: "Нічого не знайдено",
        modalWarning: "Натисніть «Завантажити PNG».<br><strong style='color: #ffcc00; display: block; margin-top: 8px; font-size: 13px;'>Якщо кнопка не працює (iPhone/Google chrome) — спробуйте інший браузер (Safari) або просто затисніть картинку нижче пальцем і виберіть «Зберегти в Фото».</strong>"
    }
};

let currentLang = 'en';
let currentIndex = 0;
let currentHue = 0;
let currentBrightness = 100;
let currentWeight = 450;
let currentSpacing = 0;
let currentLineHeight = 1.3;
let currentAlignment = 'center';

let glowHue = 0;
let glowBrightness = 100;
let glowOpacity = 70; 
let glowSize = 40; 

let generatedDataUrl = null; 

const fontPreview = document.getElementById('fontPreview');
const fontName = document.getElementById('fontName');
const textInput = document.getElementById('textInput');
const sizeSlider = document.getElementById('sizeSlider');
const sizeLabel = document.getElementById('sizeLabel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const applyBtn = document.getElementById('applyBtn');
const alignButtons = document.querySelectorAll('.align-btn');

const menuToggleBtn = document.getElementById('menuToggleBtn');
const menuWrapper = document.getElementById('menuWrapper');
const menuGrid = document.getElementById('menuGrid');
const subPanels = document.querySelectorAll('.sub-panel');
const menuTiles = document.querySelectorAll('.menu-tile');
const backBtns = document.querySelectorAll('.back-btn');

const colorSlider = document.getElementById('colorSlider');
const brightnessSlider = document.getElementById('brightnessSlider');
const brightLabel = document.getElementById('brightLabel');
const weightSlider = document.getElementById('weightSlider');
const weightLabel = document.getElementById('weightLabel');
const spacingSlider = document.getElementById('spacingSlider');
const spacingLabel = document.getElementById('spacingLabel');
const lineHeightSlider = document.getElementById('lineHeightSlider');
const lineHeightLabel = document.getElementById('lineHeightLabel');
const indicator = document.getElementById('indicator');

const glowColorSlider = document.getElementById('glowColorSlider');
const glowBrightnessSlider = document.getElementById('glowBrightnessSlider');
const glowOpacitySlider = document.getElementById('glowOpacitySlider');
const glowSizeSlider = document.getElementById('glowSizeSlider');
const glowIndicator = document.getElementById('glowIndicator');
const glowBrightLabel = document.getElementById('glowBrightLabel');
const glowOpacityLabel = document.getElementById('glowOpacityLabel');
const glowSizeLabel = document.getElementById('glowSizeLabel');

const searchBtn = document.getElementById('searchBtn');
const searchPanel = document.getElementById('searchPanel');
const fontSearchInput = document.getElementById('fontSearchInput');
const searchResults = document.getElementById('searchResults');

const downloadModal = document.getElementById('downloadModal');
const confirmDownloadBtn = document.getElementById('confirmDownloadBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

const MY_SITE = 'https://skibii323-web.github.io/qwsx/';
const authContainer = document.getElementById('authContainer');

const langDropdown = document.getElementById('langDropdown');
const currentLangBtn = document.getElementById('currentLangBtn');
const langDropdownContent = document.getElementById('langDropdownContent');

function updateInterfaceLanguage(lang) {
    currentLang = lang;
    if (currentLangBtn) {
        currentLangBtn.textContent = lang.toUpperCase();
    }

    document.querySelectorAll('#langDropdownContent button').forEach(btn => {
        if(btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    updateAuthZone();
}

async function saveLanguage(lang) {
    updateInterfaceLanguage(lang);
    if (Clerk && Clerk.user) {
        await Clerk.user.update({
            unsafeMetadata: { lang: lang }
        });
    }
}

function updateAuthZone() {
    if (typeof Clerk === 'undefined' || !Clerk.user) {
        authContainer.innerHTML = `
            <div class="auth-avatar-circle">
                <img src="ikn/icon.svg" alt="Icon">
            </div>
            <span class="auth-text">${translations[currentLang] ? translations[currentLang].login : 'Sign In'}</span>
        `;
    } else {
        authContainer.innerHTML = `
            <div class="auth-avatar-circle">
                <img src="${Clerk.user.imageUrl}" alt="Avatar">
            </div>
            <span class="auth-text">${translations[currentLang] ? translations[currentLang].logout : 'Sign Out'}</span>
        `;
    }
}

currentLangBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
});

langDropdownContent.addEventListener('click', (e) => {
    const target = e.target.closest('[data-lang]');
    if (target) {
        const selectedLang = target.getAttribute('data-lang');
        saveLanguage(selectedLang);
        langDropdown.classList.remove('open');
    }
});

window.addEventListener('load', async function () {
    if (typeof Clerk !== 'undefined') {
        try {
            await Clerk.load();
            if (Clerk.user) {
                const savedLang = Clerk.user.unsafeMetadata.lang || 'en';
                updateInterfaceLanguage(savedLang);

                authContainer.addEventListener('click', async () => {
                    await Clerk.signOut();
                    window.location.href = MY_SITE;
                });
            } else {
                updateInterfaceLanguage('en');
                authContainer.addEventListener('click', () => {
                    Clerk.openSignIn({
                        redirectUrl: MY_SITE,
                        afterSignInUrl: MY_SITE,
                        afterSignUpUrl: MY_SITE
                    });
                });
            }
        } catch (err) {
            updateInterfaceLanguage('en');
        }
    } else {
        updateInterfaceLanguage('en');
    }
});

function updateSlider(index) {
    const currentFont = fontsData[index];
    fontName.textContent = currentFont.name;
    
    document.fonts.ready.then(() => {
        fontPreview.style.fontFamily = `"${currentFont.fontFamily}", sans-serif`;
    });
    
    if (textInput.value.trim() === "") {
        fontPreview.textContent = currentFont.defaultText;
    } else {
        fontPreview.textContent = textInput.value;
    }
}

function updateTextColor() {
    const hslColor = `hsl(${currentHue}, 100%, ${currentBrightness}%)`;
    fontPreview.style.color = hslColor;
    indicator.style.backgroundColor = hslColor;
    brightnessSlider.style.background = `linear-gradient(to right, #000000, hsl(${currentHue}, 100%, 50%), #ffffff)`;

    updateGlowDOM();
}

function updateWeightDOM() {
    const weightValue = parseInt(currentWeight);
    const userSize = parseInt(sizeSlider.value);
    
    if (weightValue > 400) {
        const strokeWidth = userSize * ((weightValue - 400) / 500) * 0.04;
        fontPreview.style.webkitTextStroke = `${strokeWidth}px currentColor`;
        fontPreview.style.fontWeight = 'normal'; 
    } else {
        fontPreview.style.webkitTextStroke = '0px transparent';
        fontPreview.style.fontWeight = 'normal';
    }

    updateTextColor();
}

function updateGlowDOM() {
    const h = glowHue;
    const s = '100%';
    const l = glowBrightness + '%';
    const a = glowOpacity / 100;
    
    const hslColor = `hsl(${h}, ${s}, ${l})`;
    glowIndicator.style.backgroundColor = hslColor;
    glowBrightnessSlider.style.background = `linear-gradient(to right, #000000, hsl(${h}, 100%, 50%), #ffffff)`;

    if (glowOpacity == 0 || glowSize == 0) {
        fontPreview.style.textShadow = 'none';
        return;
    }
    
    const c = `hsla(${h}, ${s}, ${l}, ${a})`;
    let blurMax = parseInt(glowSize);
    
    let shadows = [];
    
    shadows.push(`0px 0px ${blurMax * 0.15}px ${c}`);
    
    shadows.push(`0px 0px ${blurMax * 0.4}px ${c}`);
    shadows.push(`0px 0px ${blurMax * 0.7}px ${c}`);
    
    const outerColor = `hsla(${h}, ${s}, ${l}, ${a * 0.5})`; 
    shadows.push(`0px 0px ${blurMax * 1.3}px ${outerColor}`);
    shadows.push(`0px 0px ${blurMax * 2.0}px ${outerColor}`);

    fontPreview.style.textShadow = shadows.join(', ');
}

menuToggleBtn.addEventListener('click', () => {
    menuToggleBtn.classList.toggle('active');
    menuWrapper.classList.toggle('open');
    if (menuWrapper.classList.contains('open')) {
        searchBtn.classList.remove('active');
        searchPanel.classList.remove('open');
    } else {
        setTimeout(() => {
            subPanels.forEach(p => p.classList.remove('active'));
            menuGrid.style.display = 'grid';
        }, 300);
    }
});

menuTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const targetId = tile.getAttribute('data-target');
        menuGrid.style.display = 'none';
        document.getElementById(targetId).classList.add('active');
    });
});

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        subPanels.forEach(p => p.classList.remove('active'));
        menuGrid.style.display = 'grid';
    });
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('active');
    searchPanel.classList.toggle('open');
    if (searchPanel.classList.contains('open')) {
        menuToggleBtn.classList.remove('active');
        menuWrapper.classList.remove('open');
        fontSearchInput.value = '';
        renderSearchResults('');
        fontSearchInput.focus();
    }
});

fontSearchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
});

function renderSearchResults(query) {
    searchResults.innerHTML = '';
    const filtered = fontsData.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
    
    if (filtered.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'search-item';
        noResult.style.color = '#636370';
        noResult.textContent = translations[currentLang].nothingFound;
        searchResults.appendChild(noResult);
        return;
    }

    filtered.forEach(font => {
        const item = document.createElement('div');
        item.className = 'search-item';
        item.textContent = font.name;
        item.addEventListener('click', () => {
            currentIndex = fontsData.indexOf(font);
            updateSlider(currentIndex);
            searchBtn.classList.remove('active');
            searchPanel.classList.remove('open');
        });
        searchResults.appendChild(item);
    });
}

colorSlider.addEventListener('input', (e) => {
    currentHue = e.target.value;
    updateTextColor();
});

brightnessSlider.addEventListener('input', (e) => {
    currentBrightness = e.target.value;
    brightLabel.textContent = `${currentBrightness}%`;
    updateTextColor();
});

glowColorSlider.addEventListener('input', (e) => {
    glowHue = e.target.value;
    updateGlowDOM();
});

glowBrightnessSlider.addEventListener('input', (e) => {
    glowBrightness = e.target.value;
    glowBrightLabel.textContent = `${glowBrightness}%`;
    updateGlowDOM();
});

glowOpacitySlider.addEventListener('input', (e) => {
    glowOpacity = e.target.value;
    glowOpacityLabel.textContent = `${glowOpacity}%`;
    updateGlowDOM();
});

glowSizeSlider.addEventListener('input', (e) => {
    glowSize = e.target.value;
    glowSizeLabel.textContent = `${glowSize}px`;
    updateGlowDOM();
});

weightSlider.addEventListener('input', (e) => {
    currentWeight = e.target.value;
    weightLabel.textContent = currentWeight;
    updateWeightDOM();
});

spacingSlider.addEventListener('input', (e) => {
    currentSpacing = e.target.value;
    spacingLabel.textContent = `${currentSpacing}px`;
    fontPreview.style.letterSpacing = `${currentSpacing}px`;
});

lineHeightSlider.addEventListener('input', (e) => {
    currentLineHeight = parseFloat(e.target.value);
    lineHeightLabel.textContent = currentLineHeight;
    fontPreview.style.lineHeight = currentLineHeight;
});

sizeSlider.addEventListener('input', (e) => {
    const currentSize = e.target.value;
    fontPreview.style.fontSize = `${currentSize}px`;
    sizeLabel.textContent = `${currentSize}px`;
    updateWeightDOM();
});

textInput.addEventListener('input', () => {
    updateSlider(currentIndex);
});

alignButtons.forEach(button => {
    button.addEventListener('click', () => {
        alignButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); 
        currentAlignment = button.getAttribute('data-align');
        fontPreview.style.textAlign = currentAlignment;
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? fontsData.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === fontsData.length - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
});

function wrapText(ctx, text, maxWidth) {
    const lines = [];
    const paragraphs = text.split('\n');
    
    paragraphs.forEach(paragraph => {
        const words = paragraph.split(' ');
        let currentLine = '';

        for (let n = 0; n < words.length; n++) {
            let testLine = currentLine + (currentLine ? ' ' : '') + words[n];
            let metrics = ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && n > 0) {
                lines.push(currentLine);
                currentLine = words[n];
            } else {
                currentLine = testLine;
            }
        }
        if (currentLine) {
            lines.push(currentLine);
        }
    });
    return lines;
}

applyBtn.addEventListener('click', () => {
    const textToRender = fontPreview.textContent;
    const activeFont = fontsData[currentIndex];
    const userSize = parseInt(sizeSlider.value);
    
    const scaleFactor = 5; 
    const maxGlowBlurCanvas = parseInt(glowSize) * 2.0 * scaleFactor;
    const extraMarginCanvas = 15 * scaleFactor; 
    const dynamicPadding = maxGlowBlurCanvas + extraMarginCanvas;

    const previewRect = fontPreview.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(fontPreview);
    
    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
    const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
    const previewTextWidth = previewRect.width - paddingLeft - paddingRight;

    document.fonts.ready.then(() => {
        const testCanvas = document.createElement('canvas');
        const testCtx = testCanvas.getContext('2d');
        const fontSize = userSize * scaleFactor;
        const scaledSpacing = currentSpacing * scaleFactor;
        
        testCtx.font = `normal ${fontSize}px "${activeFont.fontFamily}"`;
        testCtx.letterSpacing = `${scaledSpacing}px`;
        const maxCanvasTextWidth = previewTextWidth * scaleFactor;

        const lines = wrapText(testCtx, textToRender, maxCanvasTextWidth);

        let actualMaxLineWidth = 0;
        lines.forEach(line => {
            let width = testCtx.measureText(line).width;
            if (width > actualMaxLineWidth) {
                actualMaxLineWidth = width;
            }
        });

        const lineHeight = fontSize * currentLineHeight;
        const bottomBuffer = fontSize * 0.2;
        const totalTextHeight = (lines.length * lineHeight) + bottomBuffer;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = actualMaxLineWidth + (dynamicPadding * 2);
        canvas.height = totalTextHeight + (dynamicPadding * 2);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = `normal ${fontSize}px "${activeFont.fontFamily}"`;
        ctx.letterSpacing = `${scaledSpacing}px`;
        ctx.textBaseline = 'top'; 

        const weightValue = parseInt(currentWeight);
        if (weightValue > 400) {
            ctx.lineWidth = fontSize * ((weightValue - 400) / 500) * 0.04;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
        }

        let xPos = dynamicPadding;
        if (currentAlignment === 'center') {
            ctx.textAlign = 'center';
            xPos = canvas.width / 2;
        } else if (currentAlignment === 'right') {
            ctx.textAlign = 'right';
            xPos = canvas.width - dynamicPadding;
        } else {
            ctx.textAlign = 'left';
        }

        let yPos = dynamicPadding;

        if (glowOpacity > 0 && glowSize > 0) {
            const a = glowOpacity / 100;
            let blurMax = parseInt(glowSize) * scaleFactor;
            
            let shadowLayers = [
                { factor: 0.15, alphaMult: 1.0 },
                { factor: 0.4, alphaMult: 1.0 },
                { factor: 0.7, alphaMult: 1.0 },
                { factor: 1.3, alphaMult: 0.5 },
                { factor: 2.0, alphaMult: 0.5 }
            ];
            
            shadowLayers.forEach(layer => {
                ctx.shadowColor = `hsla(${glowHue}, 100%, ${glowBrightness}%, ${a * layer.alphaMult})`;
                ctx.shadowBlur = blurMax * layer.factor;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                
                lines.forEach((line, i) => {
                    let yPosLine = yPos + (i * lineHeight);
                    if (weightValue > 400) {
                        ctx.strokeStyle = `hsl(${currentHue}, 100%, ${currentBrightness}%)`;
                        ctx.strokeText(line, xPos, yPosLine);
                    }
                    ctx.fillStyle = `hsl(${currentHue}, 100%, ${currentBrightness}%)`;
                    ctx.fillText(line, xPos, yPosLine);
                });
            });
            
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `hsl(${currentHue}, 100%, ${currentBrightness}%)`;
        if (weightValue > 400) {
            ctx.strokeStyle = ctx.fillStyle;
        }

        lines.forEach((line, i) => {
            let yPosLine = yPos + (i * lineHeight);
            if (weightValue > 400) {
                ctx.strokeText(line, xPos, yPosLine);
            }
            ctx.fillText(line, xPos, yPosLine);
        });

        generatedDataUrl = canvas.toDataURL("image/png");

        const modalBox = downloadModal.querySelector('div');
        
        let previewImg = document.getElementById('finalMobileImage');
        if (!previewImg) {
            previewImg = document.createElement('img');
            previewImg.id = 'finalMobileImage';
            previewImg.style.width = '100%';
            previewImg.style.maxHeight = '180px';
            previewImg.style.objectFit = 'contain';
            previewImg.style.borderRadius = '10px';
            previewImg.style.marginBottom = '15px';
            previewImg.style.border = '1px dashed rgba(255,255,255,0.3)';
            modalBox.insertBefore(previewImg, confirmDownloadBtn);
        }
        previewImg.src = generatedDataUrl;

        if (parseInt(currentBrightness) < 30) {
            previewImg.style.backgroundColor = '#ffffff';
        } else {
            previewImg.style.backgroundColor = 'rgba(0,0,0,0.2)'; 
        }

        const textDesc = modalBox.querySelector('p') || Array.from(modalBox.querySelectorAll('div, p, span')).find(el => el.textContent.includes('качест') || el.textContent.includes('x5') || el.textContent.includes('х5') || el.textContent.includes('Click') || el.textContent.includes('PNG'));
        if (textDesc) {
            textDesc.innerHTML = translations[currentLang].modalWarning;
        }

        downloadModal.style.display = 'flex';

        closeModalBtn.onclick = () => {
            downloadModal.style.display = 'none';
        };
    });
});

confirmDownloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!generatedDataUrl) return;

    const filename = `font_${Date.now()}.png`;

    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = generatedDataUrl;
    link.setAttribute('download', filename);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

updateSlider(currentIndex);
updateTextColor();
updateWeightDOM();
updateGlowDOM();
