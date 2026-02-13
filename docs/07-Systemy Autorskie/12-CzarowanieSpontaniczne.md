---
sidebar_label: 'Progresja Spontanicznego Czarowania'
---
# System Progresji Czarowania Spontanicznego Hirana (SPCS)

## Podstawowe informacje

Na Kronikach Neverwinter rozwiązany został odwieczny problem NWN1 - braku uzyskiwania nowych zaklęć i kręgów, gdy Czarownik czy Bard rozwija się w prestiżowej klasie mistycznej.

System ignoruje graczy, którzy nie posiadają kombinacji Barda lub Czarownika z mistyczną klasą prestiżową. Pierwszy raz uaktywnia się dopiero wtedy, gdy gracz rozda mistyczną klasę prestiżową jednocześnie posiadając jedną z tych dwóch klas bazowych. 

**WAŻNE**: W przypadku, jeśli postać jest zarówno Czarownikiem i Bardem, system bierze pod uwagę tę klasę, która była wzięta jako pierwsza.

## Jak to działa?

W momencie rozdania mistycznej klasy prestiżowej system sprawdza, czy postać posiada Czarownika lub Barda. Analogicznie, jeśli rozda poziom Czarownika lub Barda system sprawdzi, czy posiada mistyczną klasę prestiżową. Jeśli odnajdzie taką kombinację, otwiera się okno wyboru zaklęć. 

Gdy zaklęcia zostaną wybrane i gracz wciśnie OK, zostaną mu one przyznane i zapisane do bazy danych. Wciśnięcie przycisku Anuluj spowoduje cofnięcie i oddanie rozdanego poziomu.\
W przypadku utraty połączenia/crashu serwera poziom zostanie cofnięty i oddany.

![zaklęcia](../../static/img/wiki/wiki-systemy/czar_spontan.png)

## Często zadawane pytania

> _Czy mogę zrobić Szamana/Czarownika/Teurga? Czy wtedy Szaman również będzie dostawał odpowiednie kręgi i zaklęcia?_

Szaman połączony z Teurgiem nie jest fabularnie spójny i może się spotkać z zażądaniem przez MG *solidnego* uzasadnienia, ale szanuję próbę powerbuildowania. System dotyczy tylko klas mistycznych. Jeżeli dodamy w przyszłości jeszcze jakieś klasy prestiżowe z progresją magii objawień (orpócz DPH), możliwe, że system zostanie poszerzony.

> _Rozdałem poziom w klasie prestiżowej, ale ilość znanych zaklęć nie zwiększyła się?_

Większość mistycznych klas prestiżowych posiada progresję 1/2 poziomu czarującego. To oznacza, że nieparzyste poziomy w tych klasach nic ci nie dają - mimo to, dalej przysługuje postaci prawo do wymiany zaklęć, dlatego po rozdaniu poziomu menu wyboru zaklęć zostanie otwarte.

> _Po relogu miałem jedno użycie zaklęcia mniej niż przed nim. O co chodzi?_

Silnik NWNa nie pozwala na nadprogramowe zaklęcia/kręgi ani ich użycia - dlatego tak naprawdę po wylogowaniu się tracisz wszystkie ekstra zaklęcia i ich użycia, a po zalogowaniu system przywraca ci je z powrotem tak szybko, że wygląda jakby nic się nie stało. Niestety, z powodu fochów silnika to oznacza czasami, że na niektórych kombinacjach poziomów/cech postaci zabraknie jednego użycia tu i tam. Próby "poprawienia" tego wymagałyby tak mocnych ingerencji w logikę gry, że nie jest to warte potencjalnych skutków ubocznych. Po odpoczynku użycie zaklęcia wróci. O ile nie jesteś seryjnym reloggerem nie powinieneś specjalnie odczuć tej drobnej niedogodności.

> _Mam już postać która ma kombinację tych klas, gdzie moje zaklęcia i kręgi?_

Dostaniesz je przy kolejnym rozdaniu jednej z tych klas. Jeśli rozdałeś już wszystkie planowane poziomy tych klas możesz poprosić MG o cofnięcie i oddanie poziomu, by go rozdać ponownie i "obudzić" system. 
