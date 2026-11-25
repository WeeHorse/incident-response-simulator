# Circle — Incident Response Simulator

Statisk undervisningssimulator för DevSecOps. All data är fiktiv. Ingen faktisk attack eller produktionsmiljö.

## Publicering
I GitHub: Settings → Pages → Deploy from a branch → main / (root) → Save. Studentvy: https://weehorse.github.io/incident-response-simulator/ och lärarvy: https://weehorse.github.io/incident-response-simulator/teacher.html.

## Läraren
Öppna teacher.html. För direktpublicering: skapa en fine-grained personal access token i https://github.com/settings/personal-access-tokens/new med kort giltighetstid, endast detta repository, Repository permissions → Contents: Read and write (Metadata: Read följer automatiskt). Ange token i lärarvyn och klicka Anslut. Klicka Publicera ändringar eller Nästa incidentsteg och publicera. Token hålls i sidans minne, aldrig i localStorage, URL eller repo. Koppla från efter lektionen och återkalla token vid behov. Vid konflikt, hämta live och välj ändringarna igen. Alternativ manuell metod: Välj ett tidssteg eller aktivera enskilda händelser/rapporter. Kopiera JSON, öppna länken Redigera styrfil på GitHub, ersätt data/control.json och committa. Studentvyer hämtar raw-filen var tionde sekund; CDN-cache kan fördröja. Reserv: kopiera reservkoden och dela med grupperna; de anger den under Simuleringsanslutning. Återgå till live när det fungerar. Nytt sessionId ger separat lokal logg. Återställ händelser med 09:00 och stäng av eventuella extrarapporter.

## Studenter
Undersök vyerna, skilj observationer från hypoteser, dokumentera beslut. Incidentlogg, hypoteser och post-mortem sparas lokalt per session. Exportera JSON för backup/överföring och Markdown för rapport. Import ersätter lokalt arbetsunderlag efter bekräftelse. Ingen synk mellan datorer. Undvik riktiga personuppgifter.

## Scenario
Ingen entydig rotorsak. Börja med supportärende; därefter API/auth, databastillväxt, registreringar, aggressiva kommentarer och verksamhetens besked. Rapporter släpps efter behov. Vissa rapporter är ögonblicksbilder med egna tidsangivelser: släpp dem först när relevant. Datafilerna är publika och synlighetsflaggor är inte åtkomstkontroll.

## Lokalt
python3 -m http.server 8000 och öppna http://localhost:8000. Live hämtar fortfarande GitHub; använd reservkod för lokala scenarier. Inga externa JS-beroenden.
