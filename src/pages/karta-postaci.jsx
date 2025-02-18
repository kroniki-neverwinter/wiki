import React, { useState, useEffect } from "react";
import styles from "./kp.module.css";
import { discordAuth, discordMe } from "./const";
import CharacterFormContent from "../components/CharacterFormContent";

const CharacterForm = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("code");

    if (token) {
      setAccessToken(token);
      fetch(discordMe, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error:", error));
    }
  }, []);

  const redirectToDiscordAuth = () => {
    window.location.href = discordAuth;
  };

  return (
    <div className={(styles.container, styles.body)}>
      {!accessToken ? (
        <button className={styles.loginButton} onClick={redirectToDiscordAuth}>
          Login with Discord
        </button>
      ) : (
        <CharacterFormContent discordUserName={userData?.username} />
      )}
    </div>
  );
};

export default CharacterForm;
