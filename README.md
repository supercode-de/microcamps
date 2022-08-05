# Wichtiges zum Aufbau der Seite

!!!Bitte gründlich durchlesen, bevor du dich an die Arbeit begibst, da hier die allermeisten Fragen im Vorfeld klären lassen. Falls dann immer noch Probleme bestehen, gerne Bescheid sagen. :)!!! 

Grundsätzlich ist die Unterseite so dynamisch aufgebaut, wie es nur irgendwie geht. Das heißt, es werden Daten aus den im folgenden Absatz beschriebenen Objekten gezogen, abgeglichen und eingesetzt. An einigen Stellen wurde mit einem Ternary Operator gearbeitet, um abzugleichen, um welches Überthema (design, coding, data) es sich handelt, um darauf entsprechend den Text anzupassen. Dazu unten in der Erklärung der courseData.json Datei mehr.

Hier ein Überblick über die Objekte in /components/data. 

**alumniBewertungen.js**
Wie der Name schon sagt befinden sich hier drin die Bewertungen unserer Alumnis. Sollte irgendwann Zeit vorhanden sein, könnte man überlegen, die Google API für die Bewertungen einzubinden.
Bis dahin gilt: Hier werden neue Bewertungen eingefügt oder mit einer bestehenden ausgetauscht.

**alumniInterviewsData.js**
Auch hier ist der Name selbsterklärend: Sie beinhaltet die Daten für die Alumni Sektion, in der die Interviews zu sehen sind. 
Auch hier gilt: Neue Interviews werden hier eingepflegt oder entsprechend ausgetauscht.

**courseData.json**
Hier befinden sich die gesamten Daten sämtlicher Kurse. ***Daher eine sehr wichtige Datei!***
Die wichtigsten Infos aus der Datei im Überblick:
```
"id": "ux-design-verstehen-ideen-entwickeln-microcamp",
"theme": "design",
"category": "UX/UI-Design",
"subTheme": "UX-Design",
"title": "verstehen & Ideen entwickeln"
"toolsInternal": [
      {
        "name": "Figma",
        "image": "tools/figma.svg"
      },
      {
        "name": "Discord",
        "image": "tools/discord.svg"
      },
      {
        "name": "VSCode",
        "image": "tools/vscode.svg"
      },
      {
        "name": "HTML",
        "image": "tools/html.svg"
      } 
    ]
```
Der Key "id" ist wichtig für die URL - aus ihr wird die URL generiert.
"theme" ist wichtig für die Abfragen mit dem Ternary Operator. Es gibt drei an der Zahl:
**"design" -> für sämtliche UX/UI Design Kurse**
**"coding" -> für sämtliche Frontend/Backend/*Fullstack Kurse**
**"data" -> für sämtliche Data Science Kurse**
Hier bitte daran halten und keine neuen Werte ausdenken, da sonst die Funktionen innerhalb der Komponenten nicht mehr funktionieren bzw ausgetauscht werden müsste und das grenzt an Strafarbeit. :-)

### Beispiel:
```
Steig ein in die Praxis {theme === "design" ? "des UX/UI-Designs" : theme === "coding" ? "der Web-Entwicklung" : theme === "data" ? "der Datenwissenschaften" : "" }
```

**"category"** und **"subTheme"** scheinen gleich zu sein, ist aber an einigen Stellen wichtig zu unterscheiden. "category" meint die übergreifende Kategorie. Bei den UX UND UI Design Kursen meint das also "UX/UI-Design". Bei den Frontend/Backend/FullStack Kursen lautet die Kategorie "Web-Entwicklung". Bei den Data Kursen ist es "Data-Science". Diese Begriffe werden an manchen Stellen wichtig und sind aus dem **"subTheme"** nicht immer abzuleiten.
Im **"subTheme"** findet man die Unterkategorien. Bei UX/UI-Design wäre das dann zum Beispiel "UX-Design" und "UI-Design. Bei den Web-Entwicklungskursen stünde da zum Beispiel "Frontend", "Backend" oder "Fullstack".
**"title"** ist selbsterklärend der Titel des Kurses. 
**"toolsInternal"** wird verwendet, um mit der **"toolsDataExternal.js"** Datei zu kommunizieren. Hier sind alle Tools, die in dem jeweiligen Kurs verwendet werden, hinterlegt. Um dann für die *ToolsSection.js* alle weiterführenden Informationen zu ziehen, wird der **"name"** aus **"toolsInternal"** mit dem **"name"** aus **"toolsDataExternal.js"** gefiltert und gibt aus der externen Datei nur noch die Tools wieder, die auch tatsächlich im Kurs vorhanden sind. Daher wichtig an der Stelle, **"toolsInternal"** innerhalb der Kurs-Informationen vernünftig zu pflegen.

**faqdata.js**
Diese Datei beinhaltet die Informationen unserer FAQ Sektion. Auch hier gilt: Neue Informationen oder der Austausch von bestehenden findet hier statt.

**reasonsData.js**
**reasonsDataScienceData.js**
**reasonsDesignData.js**
**reasonsWebDevData.js**
Diese Dateien beinhalten die Informationen für die "scheduleSection__list" Sektion innerhalb der *"ScheduleSection.js"* Komponente. Dort findet der Ternary Operator auch wieder Anwendung, um die verschiedenen Inhalte den verschiedenen Themengebieten zuordnen zu können. 

**toolsDataExternal.js**
Hier befinden sich die Informationen sämtlicher Tools, die in den Kursen verwendet werden - GEBÜNDELT. Erklärung dazu siehe oben. 
*Wichtig:*
Sollten Tools hinzukommen, ausgetauscht oder entfernt werden muss zwingend auch die **"toolsInternal"** Stelle innerhalb der Kurs-Informationen in der **courseData.json** bearbeitet werden, da dies wichtig für den Abgleich ist.

**alumniBewertungen.js**
Hier befinden sich die Bewertungen unserer Alumnis. 

### Reminder:
Damit alles funktioniert, muss natürlich genau auf die Rechtschreibung geachtet werden. Variablen müssen immer genauso heißen wie ihre Counterpart Key:Value Paare in den jeweiligen .json oder .js Dateien. 

Bei den Benennenungen sämtlicher Variablen oder Key:Value Paaren habe ich mir grundsätzlich etwas gedacht. Sollten Unklarheiten herrschen, immer gerne nachfragen und fix klären, damit kein Chaos entsteht. :) 
Bei Benennung von Variablen oder ähnlichen gilt grundsätzlich die camelCase Konvention.
Bei Klassen verwenden wir eine Mischung aus camelCase und Snake case.
Bitte daran halten und sich den Aufbau bereits erstellter Klassen oder Variablen etc. im Zweifel anschauen. 

## Wichtiges zum Arbeiten an der Seite
Wir erstellen für jedes neue Feature oder jede größere Änderungen einen Branch, den wir sinnvoll nach der Änderung benennen. Wollen wir die FAQ Section überarbeiten, könnte der branch heißen "faqFeature". Oder irgendwas sinnvolles, anhand des Namens man erkennt, worum es geht.
Dann wird gepusht und wer auch immer dann Master of Disaster ist merged das mit dem Main Branch und kümmert sich um etwaige Konflikte. Danach wird der Feature Branch wieder gelöscht. 

Für Commits gilt ein ähnliches Vorgehen: Bitte schreibt sinnvolle Commits auf Deutsch. Ganze Sätze bzw in verständlichen Stichpunkten. Denkt daher auch daran regelmäßig zu commiten, damit ihr im besten Fall nicht 50 Änderungen beschreiben müsst. Sollte das passiert sein, dann bleibt allgemein und beschreibt vllt die Phasen der Änderungen. Ihr wollt zum Beispiel eine weitere data.js Datei implementieren und habt erst bei Fertigstellung committet? Dann könnte euer commit lauten "data.js erstellt, testphase mit statischen daten durchgeführt, data.js mit echten daten befüllt und komponenten dynamisch aufgebaut".
Beispiel: "schriftgröße in FAQ Sektion angepasst, faqData erweitert".
oder "kurseData.json angelegt und mit Test Informationen befüllt"
Sollten noch Fehler oder Bugs existieren, dann erwähnt es gerne im commit oder deutet auf ein potenzielles Kommentar im Code hin. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
