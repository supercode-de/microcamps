let courses = [
    {
        id: 0,
        category: "UX Design",
        title: "Verstehen & Ideen entwickeln",
        titleEN: "UX understand & Ideat",
        modell: "Teilzeit",
        duration: "4 Wochen",
        level: "Beginner",
        image: "data1.png",
        description:
            "Erlerne alle Grundlagen guter User Experience. Durchlaufe die ersten wichtige Schritte beim entwickeln eines digitallen Produktes. Erlerne und nutze unsere Methoden, die dir helfen erfolgreiche Ideen entstehen zu lassen und draus einen digitalen Prototype auf Figma zu designen.",
        tools: [
            "figma.svg",
            "discord.svg"
        ],
        microCamp: "UX-MicroCamp",
        jobtitel: "Designer",
        ablauf: [
            {
                id: 0,
                ablaufTitel: "Vorbereitung und Kennenlernen",
                ablaufZeitraum: "Vorbereitung",
                ablaufBeschreibung: "Lerne deine Camp-Kolegen kennen und richte dir in ruhe alle deine Tools ein, die du für eine erfolgreiche Teilnahme an unserem MicroCamp benötigst. Wir haben ausserdem eine kleine Aufwärmübung  für dich vorbereitet.",
                ablaufBeschreibungPunkte: [
                    "Erstelle einen Account auf Figma und Discord",
                    "Lerne deine Kollegen auf Discord kennen",
                    "Mache dich mit der Discord Umgebung vertraut",
                    "Mache dich mit der Figma Umgebung vertraut",
                    "Bearbeite unser Aufwärmübung auf FigJam",
                    "Schau dir unsere kurze Zusammenfassung zum Thema Design Thinking an"
                ]
            },
            {
                id: 1,
                ablaufTitel: "Design Thinking",
                ablaufZeitraum: "Woche 1",
                ablaufBeschreibung: "Stelle deinen Nutzer in den Mittelpunkt. Untersuche Probleme und Bedürfnisse deiner Zielgruppe. Erarbeite Hypothesen und baue darauf deine Konzeptidee auf.",
                ablaufBeschreibungPunkte: [
                    "Einführung in die Grundlagen des Design Thinking in unserer Live-Class",
                    "Lerne unser FigJam Design Thinking Template kennen und wende es praktisch an",
                    "Führe ein Experteninterview durch und lerne alles über die Zielgruppe und deren Bedürfnisse",
                    "Stelle auf Basis deines Interviews Hypothesen auf, die Lösungansätze enthalten",
                    "Führe eine eigene Untersuchung innerhalb der Zielgruppe durch, um deine Hypothesen zu bestätigen",
                    "Entwickle gemeinsam mit deinen Kollegen eine Produktidee"
                ]
            },
            {
                id: 2,
                ablaufTitel: "Product Field & Personas",
                ablaufZeitraum: "Woche 2",
                ablaufBeschreibung: "Nutze das Product Field um Stärken und Schwächen deiner Produktidee herraus zu arbeiten. Erstelle außerdem eine User Persona auf Basis deiner Zielgruppenanalyse mit den Eigenschaften & Verhaltensmustern deiner Nutzer",
                ablaufBeschreibungPunkte: [
                    "Erlerne die Grundlagen des Product Fields und wende es an",
                    "Untersuche ob deine Produktidee umsetzbar und innovativ ist",
                    "Führe eine Zielgruppenanalyse durch und erstelle eine Persona"
                ]
            },
            {
                id: 3,
                ablaufTitel: "Informationsarchitektur",
                ablaufZeitraum: "Woche 3",
                ablaufBeschreibung: "In Woche 3 bringt ihr Struktur und Ordnung in eure Productidee. Ihr lernt eure Funktionen und Inhalte sinnvoll zu unterteilen, und legt Navigationswege für die Nutzer fest.",
                ablaufBeschreibungPunkte: [
                    "Einführung in die Grundlagen guter Informationsarchitektur",
                    "Nutze FigJam und erstelle deinen ersten Flowchart (User Flow)",
                    "Lerne den Flowchart so zu gestalten, dass den Nutzern der Zugang zu allen Informationen und Funktionen ermöglicht wird"
                ]
            },
            {
                id: 4,
                ablaufTitel: "User Storys",
                ablaufZeitraum: "Woche 4",
                ablaufBeschreibung: "In Woche 4 unseres Kurses lernst du die Stärke von User Storys kennen. Wende dieses Werkzeug an, um gewünschte Funktionalitäten deiner Produktidee aus Sicht des Anwenders zu beschreiben.",
                ablaufBeschreibungPunkte: [
                    "Lerne User Storys zu entwickeln, die leicht zu verstehen sind und die Wünsche der Anwender vermitteln",
                    "Lerne wie du mit Hilfe der User Storys schnell und einfach eine Aufwandsschätzung realisierst",
                    "Verfeinere deine User Storys schrittweise und unterstütze so die iterative Entwicklung des Produktes in seiner Tiefe"
                ]
            }
        ],
        tagesablauf: [
            {
                id: 0,
                wochentag: "Montag",
                blocks: [
                    {
                        block: 1,
                        titel: "Vorbereitung",
                        dauer: "30 min.",
                        beschreibung: "Warmup & Kurzeinführung in den Themenbereich"
                    }
                ]
            },
            {
                id: 1,
                wochentag: "Dienstag",
                blocks: [
                    {
                        block: 1,
                        titel: "Live Kurs",
                        dauer: "2 Stunden",
                        beschreibung: "Live Kurs mit deinem Trainer und den Kursteilnehmern"
                    },
                    {
                        block: 2,
                        titel: "Design Meet Up",
                        dauer: "1 Stunde",
                        beschreibung: "Unsere Profis auf dem Gebiet stehen Rede und Antwort"
                    }
                ]
            },
            {
                id: 2,
                wochentag: "Mittwoch",
                blocks: [
                    {
                        block: 1,
                        titel: "Vertiefung",
                        dauer: "30 min.",
                        beschreibung: "Wiederhole das Gelernte und bereite Fragen für den WS vor"
                    }
                ]
            },
            {
                id: 3,
                wochentag: "Donnerstag",
                blocks: [
                    {
                        block: 1,
                        titel: "Workshop",
                        dauer: "1 Stunde",
                        beschreibung: "Arbeite mit deinem Team und stelle Fragen an den Trainer"
                    },
                    {
                        block: 2,
                        titel: "Workout",
                        dauer: "1 Stunde",
                        beschreibung: "Unser kleines Workout mit Trainern & Teilnehmern"
                    }
                ]
            },
            {
                id: 4,
                wochentag: "Freitag",
                blocks: [
                    {
                        block: 1,
                        titel: "Praxisaufgabe",
                        dauer: "2 Stunden",
                        beschreibung: "Bearbeite die praktische Aufgabe zum Wochenthema"
                    }
                ]
            }
        ]
    }
];
export default courses;
