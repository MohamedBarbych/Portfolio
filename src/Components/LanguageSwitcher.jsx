import React, { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Effect to set the default language when the component mounts
    useEffect(() => {
        changeLanguage(selectedLanguage); // Ensure the default language is set
    }, []);

    const toggleLanguageDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        
        // Check if Google Translate is available
        if (window.google && window.google.translate) {
            const translateElement = window.google.translate.TranslateElement.getInstance();
            if (translateElement) {
                // Change the language in real-time
                translateElement.setEnabled(true);
                translateElement.setLanguage(language);
                console.log(`Language changed to: ${language}`); // Debug log
            } else {
                console.error("Translate Element is not initialized.");
            }
        } else {
            console.error("Google Translate is not initialized.");
        }
    };

    return (
        <div className="relative inline-block">
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
