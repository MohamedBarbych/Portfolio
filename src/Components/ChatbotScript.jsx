import { useEffect } from "react";

const ChatbotScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "FniOWEW-WoqtKjJqibmn7");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "FniOWEW-WoqtKjJqibmn7",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return null;
};

export default ChatbotScript;
