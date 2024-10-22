import React, { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
    // Detect user's preferred language
    const detectBrowserLanguage = () => {
        const userLang = navigator.language || navigator.userLanguage;
        return userLang.includes('fr') ? 'fr' : userLang.includes('ar') ? 'ar' : 'en'; // Default to 'en'
    };

    const [selectedLanguage, setSelectedLanguage] = useState(detectBrowserLanguage()); // Automatically detect language
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Initialize Google Translate when the component mounts
    useEffect(() => {
        const googleTranslateInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: selectedLanguage, // Use detected language as default
                includedLanguages: 'en,fr,ar', // Add the languages you want to support
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        };

        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(script);
        };

        window.googleTranslateElementInit = googleTranslateInit;
        addGoogleTranslateScript(); // Add the Google Translate script

    }, [selectedLanguage]); // Re-run effect if selectedLanguage changes

    const toggleLanguageDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);

        if (window.google && window.google.translate) {
            const translateElement = window.google.translate.TranslateElement.getInstance();
            if (translateElement) {
                translateElement.setEnabled(true);
                translateElement.setLanguage(language);
                console.log(`Language changed to: ${language}`);
            } else {
                console.error("Translate Element is not initialized.");
            }
        } else {
            console.error("Google Translate is not initialized.");
        }
    };

    return (
        <div className="relative inline-block">
            <div id="google_translate_element" style={{ display: 'none' }}></div> {/* Hidden by default */}
            <button
                onClick={toggleLanguageDropdown}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
                {selectedLanguage === 'fr' ? '🇫🇷' : selectedLanguage === 'en' ? '🇺🇸' : '🇲🇦'}
            </button>
            {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <button
                        onClick={() => changeLanguage('fr')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Français 🇫🇷
                    </button>
                    <button
                        onClick={() => changeLanguage('en')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        English 🇺🇸
                    </button>
                    <button
                        onClick={() => changeLanguage('ar')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        العربية 🇲🇦
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
