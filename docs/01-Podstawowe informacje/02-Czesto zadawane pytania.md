---
sidebar_label: 'Często zadawane pytania'
---

# Często zadawane pytania

## 1. W książce którą kupiłem 12 lat temu dla mojego siostrzeńca, Drizzt wspominał o Ważnym Wydarzeniu Fabularnym "X" które miało miejsce w Faerunie/Neverwinter w roku 1372. Na serwerze nie wzięliście tego pod uwagę, dlaczego?

Serwer jest naszą adaptacją świata Zapomnianych Krain (Forgotten Realms). Chociaż w dużej mierze bazujemy na książkach i ogólnodostępnej wiedzy z internetu, zastrzegamy sobie prawo do modyfikacji lub pominięcia pewnych elementów fabuły oryginalnego świata. Ostatecznie, to Administracja decyduje o fabule serwera.

To tak jak z książkami o Wiedźmienie i serialem "Wiedźmin". Tutaj my jesteśmy Netflixem.

## 2. Co z "Zarazą"? Była, będzie?

Ani widu, ani słychu, ponad to patrz punkt 1.

## 3. Widziałem Aribeth, przecież to zdrajczyni Neverwinter! Czemu jest w mieście?

Fabuła serwera zaczęła się przed wydarzeniami z kampanii NWN1, ponad to nie zamierzamy kalkować całej fabuły. Patrz punkt 1.

## 4. Czy na 40 poziomie moja postać zostaje bogiem?

Na serwerze zdobywa się doświadczenie znacznie szybciej niż w tradycyjnym D&D, więc siłą rzeczy ważni NPC będą mieć wyższe poziomy. Technicznie rzecz biorąc mag na 40 poziomie będzie prawie tak dobry jak Elminster.



| NPC      | Poziom |
| ----------- | ----------- |
| Mieszkaniec Neverwinter      | 1-5       |
| Strażnik Miejski, Rekrut  | 5-10        |
| Czarodziej Wielogwieznych Płaszczy     | 15-18     |
| Dziewiątka Neverwinter  | 20       |
| Ważni NPC, np. Aribeth      | 20-30       |
| Manshoon  | 35        |
| Halaster      | 40       |
| Elminster  | 44       |
| Pomniejsze bóstwa      | 50      |
| Większe bóstwa  | 60        |


## 5. Skoro są drowy, to czy planujecie dodawać osobne rasy premium dla innych podras z Podmroku (duergary/svirfnebliny/illithidy/itp.)?

Nie. Jeśli masz pomysł na niestandardową postać, w pierwszej kolejności skonsultuj się z MG. 

## 6. Kiedy planujecie dodać Menzoberranzan?

Oloth plynn dos! Nie planujemy, Drizzt. 

## 7. Gdzie znajdę wzór karty postaci?

W naszym formularzu: [Karta postaci Kronik Neverwinter](https://wiki.nwn.net.pl/karta-postaci) - wymagane jest zalogowanie przez konto Discord.

## 8. Dlaczego nie mogę jeździć na koniku? Chcę Płotkę!

Nasz moduł nie jest przystosowany do jeździectwa i zostało ono wyłączone.

## 9. Builder dodał jakiś przycisk do drzwi w moim domku. O co chodzi?

Zacznijmy od objaśnienia terminologii, żeby odróżnić różne "stany" w jakich mogą się znaleźć Drzwi:
- Zamknięte (Closed) - skrzydło drzwi zatrzaśnięte na klamkę
- Otwarte (Opened) - skrzydło drzwi rozwarte
- Zakluczone (Locked) - drzwi zamknięte na klucz
- Odkluczone (Unlocked) - drzwi nie zamknięte na klucz

Zwróćmy uwagę, że w NWN stany Zamknięte/Otwarte mogą równocześnie być Zakluczone/Odkluczone, niezależnie czy ma to logiczny sens (np.: drzwi Otwarte mogą być równocześnie Zakluczone).

Drugą ważną podstawą jest zrozumienie, że 1 model postawiony na module = 1 Drzwi. Co to oznacza?
- Stan Zakluczone/Odkluczone jest zupełnie oddzielny dla każdego postawionego modelu.
- Stan Zamknięte/Otwarte może być wspólny dla dwóch modeli Drzwi, ale wyłącznie jeśli są ze sobą połączone jako Przejście (Przejście jest wtedy, kiedy po otwarciu Drzwi widzicie niebieskawe pole, a po kliknięciu na nim LPM postać gdzieś się przemieszcza).

Żeby ukazać to na przykładzie, weźmy drzwi wejściowe do Targowiska Awanturników: mają one dwa modele. Jeden model jest ustawiony w Centrum miasta, a drugi model we wnętrzu Targowiska.
- W momencie gdy ktoś Otworzy drzwi wejściowe z poziomu Targowiska, to drzwi wejściowe z poziomu Centrum również będą Otwarte (tak samo w drugą stronę i z Zamykaniem).
- W momencie gdy ktoś Zakluczy drzwi wejściowe z poziomu Targowiska, to drzwi wejściowe z poziomu Centrum pozostaną dalej Odkluczone.

Aby rozwiązać to ograniczanie mechaniczne Zakluczania/Odkluczania powstała dźwignia/przycisk, które Zakluczają/Odkluczają wskazany konkretny model drzwi (przy okazji, Zakluczając również Zamykają, a Odkluczając również Otwierają).\
Rozwiązanie to jest zazwyczaj stosowane w prywatnych rezydencjach graczy, bądź w siedzibach organizacji. Dźwignia/przycisk zwykle znajdują się we wnętrzu pomieszczenia by pozwolić Zakluczyć za sobą model drzwi, który ustawiony jest na zewnętrznej lokacji. Dźwignia/przycisk wskazuje tylko jeden wybrany model drzwi - zazwyczaj ten, do którego nie ma bezpośredniego dostępu.

Działa to tak samo, jeśli dwa modele drzwi połączone Przejściem znajdują się na jednym obszarze (np. przejście z jednego piętra na inne).

Przydatna notatka: klikając PPM na Drzwiach (nawet jeśli w danym momencie widoczne jest tylko Przejście), pozwala na ich Zamknięcie/Otwarcie, bądź Zakluczenie/Odkluczenie (jeśli posiada się odpowiedni klucz).
