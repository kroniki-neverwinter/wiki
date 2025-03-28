import React, { useState, useEffect } from "react";
import styles from "./kp.module.css";
import CharacterFormContent from "../components/CharacterFormContent";
import { discordAuth, discordMe } from "../components/const/urls";

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
        <CharacterFormContent
          discordUserName={userData?.username}
          accessToken={accessToken}
        />
      )}
    </div>
  );
};

export default CharacterForm;
