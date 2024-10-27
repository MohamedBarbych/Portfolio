import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleLanguageDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language).then(() => {
            setDropdownVisible(false);
        });
    };

    const getFlagIcon = (language) => {
        switch (language) {
            case 'fr':
                return '🇫🇷';
            case 'en':
                return '🇺🇸';
            case 'ar':
                return '🇲🇦';
            default:
                return '🇺🇸'; 
        }
    };

    return (
        <div className="relative inline-block language-switcher-container">
            <button
                onClick={toggleLanguageDropdown}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
                {getFlagIcon(i18n.language)}
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
