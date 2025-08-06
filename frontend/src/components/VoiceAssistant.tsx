import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useTranslation } from "react-i18next";

const VoiceAssistant: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => i18n.changeLanguage(lang);

  return (
    <div style={{ background: "#8c128a", color: "#fff", padding: "1rem" }}>
      <button onClick={SpeechRecognition.startListening}>{t("Start Voice")}</button>
      <button onClick={SpeechRecognition.stopListening}>{t("Stop Voice")}</button>
      <button onClick={resetTranscript}>{t("Reset")}</button>
      <select onChange={e => handleLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="yo">Yoruba</option>
        <option value="ig">Igbo</option>
        <option value="ha">Hausa</option>
        <option value="or">Origin</option>
      </select>
      <div>{t("Transcript")}: {transcript}</div>
      <div>{listening ? t("Listening...") : t("Not listening")}</div>
    </div>
  );
};

export default VoiceAssistant; 