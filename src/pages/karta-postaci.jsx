import React, { useState, useEffect } from "react";
import styles from "./kp.module.css";
import { apiUrl, discordAuth, discordMe } from "./const";

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
        <div className={styles.formContainer}>
          <form
            id="characterForm"
            action={apiUrl}
            method="post"
            encType="multipart/form-data"
          >
            <input type="hidden" name="accessToken" value={accessToken} />
            <fieldset>
              <legend>Dane postaci:</legend>
              <div className={styles.formField}>
                <label htmlFor="characterName">Imię Postaci:</label>
                <input
                  type="text"
                  id="characterName"
                  name="characterName"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="gameLogin">Login w grze:</label>
                <input type="text" id="gameLogin" name="gameLogin" required />
              </div>
              <div className={styles.formField}>
                <label htmlFor="discordUsername">Discord:</label>
                <input
                  type="text"
                  id="discordUsername"
                  name="discordUsername"
                  value={userData?.username || ""}
                  readOnly
                />
              </div>
            </fieldset>
            <div className={styles.submitContainer}>
              <button type="submit">Wyślij</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CharacterForm;
