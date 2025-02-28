import React, { useState } from "react";
import styles from "./styles.module.css";
import { apiUrl } from "./const/urls";

const MAX_INPUT_LENGTH = 100;
const MAX_TEXT_AREA_LENGTH = 2000;

const CharacterFormContent = ({ discordUserName, accessToken }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = ({ target }) => {
    const file = target?.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <div styles={styles.formContainer}>
          <form
            id="characterForm"
            action={apiUrl}
            method="post"
            enctype="multipart/form-data"
          >
            <input
              type="hidden"
              id="accessTokenField"
              name="accessToken"
              value={accessToken}
            />
            <fieldset>
              <legend>Dane postaci:</legend>
              <div className={styles.formField}>
                <label for="characterName">Imię Postaci:</label>
                <input
                  type="text"
                  id="characterName"
                  name="characterName"
                  required
                  maxLength={MAX_INPUT_LENGTH}
                />
              </div>
              <div className={styles.formField}>
                <label for="gameLogin">Login w grze:</label>
                <input
                  type="text"
                  id="gameLogin"
                  name="gameLogin"
                  maxLength={MAX_INPUT_LENGTH}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="discordUsername">
                  Discord:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Twój właściwy nick zostanie uzupełniony automatycznie,
                      zgodnie z tym co masz ustawione na serwerze Discord.
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  id="discordUsername"
                  name="discordUsername"
                  value={discordUserName || ""}
                  readOnly
                />
              </div>
              <div className={styles.formField}>
                <label for="characterClass">
                  Klasy Postaci:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Planowane klasy postaci.
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  id="characterClass"
                  name="characterClass"
                  maxLength={MAX_INPUT_LENGTH}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label>Płeć postaci:</label>
                <div className={styles.radioGroup}>
                  <label for="genderFemale">
                    <input
                      type="radio"
                      id="genderFemale"
                      name="characterGender"
                      value="Kobieta"
                      required
                    />{" "}
                    Kobieta
                  </label>
                  <label for="genderMale">
                    <input
                      type="radio"
                      id="genderMale"
                      name="characterGender"
                      value="Mężczyzna"
                      required
                    />{" "}
                    Mężczyzna
                  </label>
                </div>
              </div>
              <div className={styles.formField}>
                <label for="characterRace">Rasa postaci:</label>
                <input
                  type="text"
                  id="characterRace"
                  name="characterRace"
                  maxLength={MAX_INPUT_LENGTH}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="characterAge">Wiek postaci:</label>
                <input
                  type="number"
                  id="characterAge"
                  name="characterAge"
                  min="18"
                  max="300"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="characterReligion">Wyznanie postaci:</label>
                <input
                  type="text"
                  id="characterReligion"
                  name="characterReligion"
                  maxLength={MAX_INPUT_LENGTH}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="characterOrigin">
                  Pochodzenie postaci:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Region lub miasto, np. Waterdeep
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  id="characterOrigin"
                  name="characterOrigin"
                  maxLength={MAX_INPUT_LENGTH}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="characterPersonality">Charakter:</label>
                <select
                  id="characterPersonality"
                  name="characterPersonality"
                  required
                >
                  <option value="">Wybierz charakter</option>
                  <option value="Praworządny Dobry">Praworządny Dobry</option>
                  <option value="Neutralny Dobry">Neutralny Dobry</option>
                  <option value="Chaotyczny Dobry">Chaotyczny Dobry</option>
                  <option value="Praworządny Neutralny">
                    Praworządny Neutralny
                  </option>
                  <option value="Prawdziwie Neutralny">
                    Prawdziwie Neutralny
                  </option>
                  <option value="Chaotyczny Neutralny">
                    Chaotyczny Neutralny
                  </option>
                  <option value="Praworządny Zły">Praworządny Zły</option>
                  <option value="Neutralny Zły">Neutralny Zły</option>
                  <option value="Chaotyczny Zły">Chaotyczny Zły</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label for="characterLanguages">
                  Znane języki:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Nie musisz pisać, że krasnolud zna język krasonludzki. Czy
                      postać zna jakieś niestandardowe języki? Nie zapomnij
                      podać uzasadnienia!
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  id="characterLanguages"
                  name="characterLanguages"
                  maxLength={MAX_INPUT_LENGTH}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Cechy postaci:</legend>
              <div className={styles.formField}>
                <label for="strength">Siła:</label>
                <input
                  type="number"
                  id="strength"
                  name="strength"
                  min="6"
                  max="20"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="dexterity">Zręczność:</label>
                <input
                  type="number"
                  id="dexterity"
                  name="dexterity"
                  min="6"
                  max="20"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="constitution">Kondycja:</label>
                <input
                  type="number"
                  id="constitution"
                  name="constitution"
                  min="6"
                  max="20"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="intelligence">Inteligencja:</label>
                <input
                  type="number"
                  id="intelligence"
                  name="intelligence"
                  min="6"
                  max="20"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="wisdom">Mądrość:</label>
                <input
                  type="number"
                  id="wisdom"
                  name="wisdom"
                  min="6"
                  max="20"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label for="charisma">Charyzma:</label>
                <input
                  type="number"
                  id="charisma"
                  name="charisma"
                  min="6"
                  max="20"
                  required
                />
              </div>
            </fieldset>
            <fieldset className={styles.wideSection}>
              <legend>Historia i opis:</legend>
              <div className={styles.formField}>
                <label for="characterHistory">
                  Historia:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Życiorys, edukacja, osiągnięcia, porażki, traumy, relacje
                      rodzinne, kontakty społeczne.
                    </span>
                  </span>
                </label>
                <textarea
                  id="characterHistory"
                  name="characterHistory"
                  rows="6"
                  maxLength={MAX_TEXT_AREA_LENGTH}
                  placeholder="Maksymalnie 2000 znaków. Dłuższe historie lub opowiadania załącz jako PDF w seksji Załącznik"
                ></textarea>
              </div>
              <div className={styles.formField}>
                <label for="characterAppearance">
                  Opis Wyglądu:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Ogólny stan zdrowia, twarz, ciało, mowa ciała, odzienie i
                      rekwizyty, manieryzmy, higiena, głos, zapach
                    </span>
                  </span>
                </label>
                <textarea
                  id="characterAppearance"
                  name="characterAppearance"
                  maxLength={MAX_TEXT_AREA_LENGTH}
                  rows="6"
                ></textarea>
              </div>
              <div className={styles.formField}>
                <label for="characterPsychology">
                  Rys psychologiczny:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Moralność i filozofia, charakterystyka intelektualna,
                      motywacje, co postać lubi/nie lubi, wady, zalety, hobby,
                      stosunek do innych, co wywołuje w postaci silne emocje
                      (strach, wściekłość, euforię), stosunek do innych ras,
                      klas czy wyznań, sposób radzenia sobie z problemami
                      (siłowo, sprytem, magią, stopień zaradności i
                      samodzielności życiowej)
                    </span>
                  </span>
                </label>
                <textarea
                  id="characterPsychology"
                  name="characterPsychology"
                  maxLength={MAX_TEXT_AREA_LENGTH}
                  rows="6"
                ></textarea>
              </div>
              <div className={styles.formField}>
                <label for="deityView">
                  Spojrzenie na bóstwo: (Tylko dla kapłana i paladyna)
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Religijność, historia wiary, czemu to bóstwo jest
                      opiekunem, czy i jak często modli się do kogoś innego,
                      ogólne zrozumienie dogmatu
                    </span>
                  </span>
                </label>
                <textarea
                  id="deityView"
                  name="deityView"
                  maxLength={MAX_TEXT_AREA_LENGTH}
                  rows="6"
                ></textarea>
              </div>
              <div className={styles.formField}>
                <label
                  for="attachment"
                  className={
                    fileName ? styles.fileUploaded : styles.uploadButton
                  }
                >
                  Załącznik:
                  <span className={styles.tooltipContainer}>
                    <button type="button" className={styles.tooltipButton}>
                      ?
                    </button>
                    <span className={styles.tooltipText}>
                      Miejsce na portret postaci, concept art lub opowiadanie.
                      Wspierane formaty: JPEG, PNG, PDF. Maksymalnie 10 MB.
                    </span>
                  </span>
                  <input
                    className={styles.uploadInput}
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".jpeg,.jpg,.png,.pdf"
                    onChange={handleFileChange}
                  />
                  <p>
                    {fileName
                      ? `Wybrany plik: ${fileName}`
                      : "Nie wybrano pliku"}
                  </p>
                </label>
              </div>
            </fieldset>
            <div className={styles.submitContainer}>
              <button type="submit">Wyślij</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default CharacterFormContent;
