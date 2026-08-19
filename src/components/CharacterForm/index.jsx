import React, { useState } from "react";
import FormField from "../FormField";
import TextInput from "../TextInput";
import Tooltip from "../Tooltip";
import styles from "./styles.module.css";

const MAX_INPUT_LENGTH = 100;
const MAX_TEXT_AREA_LENGTH = 2000;

const basicFields = [
  {
    id: "characterName",
    label: "Imię Postaci:",
    required: true,
  },
  {
    id: "gameLogin",
    label: "Login w grze:",
    required: true,
  },
  {
    id: "characterClass",
    label: "Klasy Postaci:",
    tooltip: "Planowane klasy postaci.",
    required: true,
  },
  {
    id: "characterRace",
    label: "Rasa postaci:",
    required: true,
  },
  {
    id: "characterAge",
    label: "Wiek postaci:",
    type: "number",
    min: "18",
    max: "300",
    required: true,
  },
  {
    id: "characterReligion",
    label: "Wyznanie postaci:",
    required: true,
  },
  {
    id: "characterOrigin",
    label: "Pochodzenie postaci:",
    tooltip: "Region lub miasto, np. Waterdeep",
    required: true,
  },
  {
    id: "characterLanguages",
    label: "Znane języki:",
    tooltip:
      "Nie musisz pisać, że krasnolud zna język krasnoludzki. Czy postać zna jakieś niestandardowe języki? Nie zapomnij podać uzasadnienia!",
  },
];

const statFields = [
  { id: "strength", label: "Siła:" },
  { id: "dexterity", label: "Zręczność:" },
  { id: "constitution", label: "Kondycja:" },
  { id: "intelligence", label: "Inteligencja:" },
  { id: "wisdom", label: "Mądrość:" },
  { id: "charisma", label: "Charyzma:" },
];

const storyFields = [
  {
    id: "characterHistory",
    label: "Historia:",
    tooltip:
      "Życiorys, edukacja, osiągnięcia, porażki, traumy, relacje rodzinne, kontakty społeczne.",
    placeholder:
      "Maksymalnie 2000 znaków. Dłuższe historie lub opowiadania załącz jako PDF w sekcji Załącznik",
  },
  {
    id: "characterAppearance",
    label: "Opis Wyglądu:",
    tooltip:
      "Ogólny stan zdrowia, twarz, ciało, mowa ciała, odzienie i rekwizyty, manieryzmy, higiena, głos, zapach",
  },
  {
    id: "characterPsychology",
    label: "Rys psychologiczny:",
    tooltip:
      "Moralność i filozofia, charakterystyka intelektualna, motywacje, co postać lubi/nie lubi, wady, zalety, hobby, stosunek do innych, co wywołuje w postaci silne emocje, stosunek do innych ras, klas czy wyznań, sposób radzenia sobie z problemami.",
  },
  {
    id: "deityView",
    label: "Spojrzenie na bóstwo: (Tylko dla kapłana i paladyna)",
    tooltip:
      "Religijność, historia wiary, czemu to bóstwo jest opiekunem, czy i jak często modli się do kogoś innego, ogólne zrozumienie dogmatu.",
  },
];

const alignmentOptions = [
  "Praworządny Dobry",
  "Neutralny Dobry",
  "Chaotyczny Dobry",
  "Praworządny Neutralny",
  "Prawdziwie Neutralny",
  "Chaotyczny Neutralny",
  "Praworządny Zły",
  "Neutralny Zły",
  "Chaotyczny Zły",
];

function BasicTextField({ field }) {
  return (
    <FormField id={field.id} label={field.label} tooltip={field.tooltip}>
      <TextInput
        id={field.id}
        type={field.type}
        min={field.min}
        max={field.max}
        maxLength={field.type === "number" ? undefined : MAX_INPUT_LENGTH}
        required={field.required}
      />
    </FormField>
  );
}

function DiscordField({ discordUserName }) {
  return (
    <FormField
      id="discordUsername"
      label="Discord:"
      tooltip="Twój właściwy nick zostanie uzupełniony automatycznie, zgodnie z tym co masz ustawione na serwerze Discord."
    >
      <TextInput
        id="discordUsername"
        value={discordUserName || ""}
        readOnly
      />
    </FormField>
  );
}

function GenderField() {
  return (
    <div className={styles.formField}>
      <span className={styles.fieldLabel}>Płeć postaci:</span>
      <div className={styles.radioGroup}>
        <label htmlFor="genderFemale">
          <input
            type="radio"
            id="genderFemale"
            name="characterGender"
            value="Kobieta"
            required
          />{" "}
          Kobieta
        </label>
        <label htmlFor="genderMale">
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
  );
}

function AlignmentField() {
  return (
    <FormField id="characterPersonality" label="Charakter:">
      <select id="characterPersonality" name="characterPersonality" required>
        <option value="">Wybierz charakter</option>
        {alignmentOptions.map((alignment) => (
          <option key={alignment} value={alignment}>
            {alignment}
          </option>
        ))}
      </select>
    </FormField>
  );
}

function StatField({ field }) {
  return (
    <FormField id={field.id} label={field.label}>
      <TextInput
        id={field.id}
        type="number"
        min="6"
        max="20"
        required
      />
    </FormField>
  );
}

function StoryField({ field }) {
  return (
    <FormField id={field.id} label={field.label} tooltip={field.tooltip}>
      <textarea
        id={field.id}
        name={field.id}
        rows="6"
        maxLength={MAX_TEXT_AREA_LENGTH}
        placeholder={field.placeholder}
      />
    </FormField>
  );
}

function AttachmentField({ fileName, onFileChange }) {
  const labelClassName = fileName ? styles.fileUploaded : styles.uploadButton;

  return (
    <div className={styles.formField}>
      <label htmlFor="attachment" className={labelClassName}>
        Załącznik:
        <Tooltip>
          Miejsce na portret postaci, concept art lub opowiadanie. Wspierane
          formaty: JPEG, PNG, PDF. Maksymalnie 10 MB.
        </Tooltip>
        <input
          className={styles.uploadInput}
          type="file"
          id="attachment"
          name="attachment"
          accept=".jpeg,.jpg,.png,.pdf"
          onChange={onFileChange}
        />
        <span>
          {fileName ? `Wybrany plik: ${fileName}` : "Nie wybrano pliku"}
        </span>
      </label>
    </div>
  );
}

export default function CharacterFormContent({
  discordUserName,
  accessToken,
  apiUrl,
}) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = ({ target }) => {
    const file = target?.files?.[0];
    setFileName(file?.name || "");
  };

  return (
    <section className={styles.body} aria-label="Character form">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form
            id="characterForm"
            action={apiUrl}
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              id="accessTokenField"
              name="accessToken"
              value={accessToken}
              readOnly
            />

            <fieldset>
              <legend>Dane postaci:</legend>
              <BasicTextField field={basicFields[0]} />
              <BasicTextField field={basicFields[1]} />
              <DiscordField discordUserName={discordUserName} />
              <BasicTextField field={basicFields[2]} />
              <GenderField />
              {basicFields.slice(3, 7).map((field) => (
                <BasicTextField key={field.id} field={field} />
              ))}
              <AlignmentField />
              <BasicTextField field={basicFields[7]} />
            </fieldset>

            <fieldset>
              <legend>Cechy postaci:</legend>
              {statFields.map((field) => (
                <StatField key={field.id} field={field} />
              ))}
            </fieldset>

            <fieldset className={styles.wideSection}>
              <legend>Historia i opis:</legend>
              {storyFields.map((field) => (
                <StoryField key={field.id} field={field} />
              ))}
              <AttachmentField
                fileName={fileName}
                onFileChange={handleFileChange}
              />
            </fieldset>

            <div className={styles.submitContainer}>
              <button type="submit">Wyślij</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
