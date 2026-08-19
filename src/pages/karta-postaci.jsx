import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import CharacterFormContent from "../components/CharacterForm";
import { getAppUrls } from "../components/const/urls";
import styles from "./kp.module.css";

export default function CharacterForm() {
  const { siteConfig } = useDocusaurusContext();
  const { apiUrl, discordAuthUrl, discordMeUrl } = getAppUrls(
    siteConfig.customFields,
  );
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("code");

    if (!token) {
      return;
    }

    setAccessToken(token);

    fetch(discordMeUrl, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error:", error));
  }, [discordMeUrl]);

  const redirectToDiscordAuth = () => {
    window.location.href = discordAuthUrl;
  };

  return (
    <main className={clsx(styles.container, styles.body)}>
      {!accessToken ? (
        <button className={styles.loginButton} onClick={redirectToDiscordAuth}>
          Login with Discord
        </button>
      ) : (
        <CharacterFormContent
          discordUserName={userData?.username}
          accessToken={accessToken}
          apiUrl={apiUrl}
        />
      )}
    </main>
  );
}
