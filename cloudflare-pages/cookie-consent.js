/**
 * Simple Cookie Consent Banner
 * Voor Jos Visser ICT
 * GDPR/AVG Compliant
 */

(function() {
    'use strict';
    
    const COOKIE_NAME = 'josvisser_cookie_consent';
    const COOKIE_DURATION = 365; // dagen
    
    // Check of consent al gegeven is
    function hasConsent() {
        return document.cookie.split(';').some(function(cookie) {
            return cookie.trim().indexOf(COOKIE_NAME + '=') === 0;
        });
    }
    
    // Set cookie
    function setConsent() {
        const date = new Date();
        date.setTime(date.getTime() + (COOKIE_DURATION * 24 * 60 * 60 * 1000));
        document.cookie = COOKIE_NAME + '=true; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
    }
    
    // Maak banner
    function createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(26, 26, 26, 0.98);
                color: #fff;
                padding: 20px;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
                z-index: 9999;
                backdrop-filter: blur(10px);
            ">
                <div style="
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    flex-wrap: wrap;
                ">
                    <div style="flex: 1; min-width: 300px;">
                        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
                            <strong>🍪 Deze website gebruikt cookies</strong><br>
                            We gebruiken alleen functionele cookies voor basis website functionaliteit. 
                            Geen tracking of analytics. 
                            <a href="/privacy.html" style="color: #ea8b39; text-decoration: underline;">Lees meer</a>
                        </p>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="window.acceptCookies()" style="
                            background: linear-gradient(135deg, #ea8b39 0%, #ffa500 100%);
                            color: #000;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            font-weight: 600;
                            cursor: pointer;
                            font-size: 14px;
                            transition: transform 0.2s;
                        " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                            Accepteren
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
    }
    
    // Accept functie
    window.acceptCookies = function() {
        setConsent();
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.transition = 'opacity 0.3s, transform 0.3s';
            banner.style.opacity = '0';
            banner.style.transform = 'translateY(100%)';
            setTimeout(function() {
                banner.remove();
            }, 300);
        }
    };
    
    // Toon banner als nog geen consent
    if (!hasConsent()) {
        // Wacht tot DOM geladen is
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createBanner);
        } else {
            createBanner();
        }
    }
})();

