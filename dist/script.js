"use strict";
const dataGerman = [
    {
        info: `<details class="word group"><summary>FPM<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">FPM steht für Floorplan Manager. Es ist ein Baukasten in SAP, mit dem man Oberflächen (Masken) für SAP-Anwendungen einfach zusammenstellen kann. FPM hilft, dass die Benutzeroberfläche übersichtlich und einheitlich aussieht. <span> <br> <a href="https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/9f/95467bbefc4a808fffeba4c5177258/frameset.htm">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>WDI5<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">WDI5 ist ein Testwerkzeug für SAP UI5-Anwendungen. Es hilft Entwicklern, die Benutzeroberfläche automatisch zu prüfen, ob alles richtig funktioniert. So spart man Zeit bei der Qualitätssicherung. <span> <br> <a href="https://github.com/ui5-community/wdi5">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Web Components<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">Web Components sind kleine Bausteine für Webseiten und Apps. Sie helfen, moderne und wiederverwendbare SAP-Oberflächen zu bauen, die in verschiedenen Projekten genutzt werden können. <span> <br> <a href="https://sap.github.io/ui5-webcomponents/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Fiori Launchpad<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">Das Fiori Launchpad ist die Startseite für alle SAP Fiori Apps. Jeder Nutzer sieht hier seine wichtigsten Anwendungen als Kacheln, was die Bedienung einfacher und übersichtlicher macht. <span> <br> <a href="https://experience.sap.com/fiori-design-web/launchpad/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Fiori UX<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">Fiori UX ist das moderne Design von SAP. Es sorgt dafür, dass alle SAP-Anwendungen gleich aussehen und leicht zu bedienen sind. So finden sich Nutzer schneller zurecht und machen weniger Fehler. <span> <br> <a href="https://www.sap.com/products/technology-platform/fiori.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>MDK<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">MDK steht für Mobile Development Kit. Damit kann man mobile SAP-Apps bauen, die auf Smartphones und Tablets laufen. Es ist einfach und braucht wenig Programmierwissen. <span> <br> <a href="https://developers.sap.com/topics/mobile-development-kit.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Personas<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">Personas hilft, alte SAP-Oberflächen zu verbessern. Man kann Felder ausblenden oder Farben ändern, damit die Arbeit leichter wird. Es ist besonders für Nutzer ohne Programmierkenntnisse geeignet. <span> <br> <a href="https://pages.community.sap.com/topics/screen-personas">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>UI Flexibility<span>(UI-Benutzeroberfläche)</span></summary> <p class="text">UI Flexibility erlaubt es, SAP-Oberflächen individuell anzupassen. Nutzer können Felder verschieben, ausblenden oder hinzufügen, ohne Programmierer zu sein. So wird die Oberfläche persönlicher und einfacher. <span> <br> <a href="https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/6f020371ca9f4bbb8ec6e59e21da2e98/cb9d86d182674b499b6d1048b8cd470b.html?source=social-Global-YOUTUBE-MarketingCampaign-Digital+Supply+Chain-S4HANA-spr-6948108751-account_name&campaigncode=CRM-XB22-MKT-DGECOM&sprinklrid=6948108751">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>BTP<span>(Technologie)</span></summary> <p class="text">BTP steht für Business Technology Platform. Es ist die Cloud-Plattform von SAP, auf der man neue Anwendungen bauen und betreiben kann. BTP verbindet viele SAP- und Fremdsysteme einfach miteinander. <span> <br> <a href="https://www.sap.com/products/technology-platform.html?campaigncode=crm-ya22-int-1517065&source=ppc-ch-googleads-search-71700000119511100-58700008754272963-btp_bts-x-x-x&gad_campaignid=21556408226">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>OData v4<span>(Technologie)</span></summary> <p class="text">OData v4 ist eine moderne Technik, um Daten zwischen SAP und anderen Programmen auszutauschen. Sie macht es einfach, Daten zu lesen oder zu schreiben. OData ist ein Standard für Web-Dienste. <span> <br> <a href="https://github.com/SAP-samples/gateway-odata-v4">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Steampunk<span>(Technologie)</span></summary> <p class="text">Steampunk ist eine neue ABAP-Umgebung in der Cloud. Sie erlaubt Entwicklern, ABAP-Programme sicher und schnell zu schreiben, ohne einen eigenen Server zu brauchen. <span> <br> <a href="https://community.sap.com/t5/technology-blog-posts-by-members/demystifying-sap-btp-abap-environment-steampunk-abap-on-cloud-embedded/ba-p/13567772">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Workzone<span>(Technologie)</span></summary> <p class="text">Workzone ist ein digitaler Arbeitsplatz von SAP. Hier finden Nutzer wichtige Informationen, Anwendungen und Dokumente an einem Ort. Es hilft Teams, besser zusammenzuarbeiten. <span> <br> <a href="https://www.sap.com/assetdetail/2024/01/ba121cc3-a77e-0010-bca6-c68f7e60039b.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>CDS View Entity<span>(Technologie)</span></summary> <p class="text">CDS View Entity ist eine moderne Methode, um Daten in SAP zu modellieren und anzuzeigen. Sie ist schneller und flexibler als ältere Techniken. Entwickler können damit komplexe Daten einfacher nutzen. <span> <br> <a href="https://help.sap.com/docs/abap-cloud/abap-data-models/cds-view-entities-8b3e8e8b8797432abecd7d1fbb6d5c12">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>FES embedded<span>(Technologie)</span></summary> <p class="text">FES embedded bedeutet, dass das SAP Fiori-System direkt im SAP-System läuft. Man braucht keinen extra Server, was die Installation und Wartung einfacher macht. <span> <br> <a href="https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/22bbe89ef68b4d0e98d05f0d56a7f6c8/4275a5114ddf4e1f8b5f7696a3b2ee6a.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>OData v2<span>(Technologie)</span></summary> <p class="text">OData v2 ist die ältere Version von OData für den Datenaustausch in SAP. Sie wird noch oft genutzt, ist aber weniger modern als OData v4. <span> <br> <a href="https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752/468a97775123488ab3345a0c48cadd8f/6c47b2b39db9404582994070ec3d57a2.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>ABAP Cloud<span>(Framework)</span></summary> <p class="text">ABAP Cloud ist die neue Art, ABAP in der Cloud zu entwickeln. Sie bietet moderne Werkzeuge und mehr Sicherheit für Entwickler. So kann man schneller und flexibler programmieren. <span> <br> <a href="https://help.sap.com/docs/abap-cloud">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>CUBCO<span>(Framework)</span></summary> <p class="text">CUBCO ist ein neues Framework von SAP für Business-Logik. Es hilft, Programme klar und sauber zu strukturieren, damit sie leichter zu verstehen sind. <span> <br> <a href="https://help.sap.com/docs/btp/sap-business-technology-platform/creating-business-configuration-apps-with-abap-restful-application-programming-model-and-custom-business-configurations-app">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>RAP managed draft<span>(Framework)</span></summary> <p class="text">RAP managed draft ist eine Technik, um Daten-Entwürfe in SAP zu speichern. So kann man Änderungen erst prüfen, bevor sie endgültig gespeichert werden. Das erhöht die Datensicherheit. <span> <br> <a href="https://help.sap.com/docs/abap-cloud/abap-rap/draft-enabling-managed-business-object">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>ABAP Unit<span>(Framework)</span></summary> <p class="text">ABAP Unit ist ein Werkzeug, um ABAP-Programme automatisch zu testen. Es prüft, ob der Code richtig funktioniert und keine Fehler hat. Das hilft, Qualität zu sichern. <span> <br> <a href="https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/49/18061c005338a1e10000000a421937/content.htm?no_cache=true">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>AMDP<span>(Framework)</span></summary> <p class="text">AMDP steht für ABAP Managed Database Procedures. Damit kann man schnelle Datenbank-Programme direkt in ABAP schreiben. So laufen Abfragen viel schneller. <span> <br> <a href="https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abenamdp.htm">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>BRF+<span>(Framework)</span></summary> <p class="text">BRF+ ist ein Werkzeug, um Geschäftsregeln zu verwalten. Man kann Regeln ändern, ohne zu programmieren. So bleiben Prozesse flexibel. <span> <br> <a href="https://help.sap.com/docs/SAP_DECISION_SERVICE_MANAGEMENT/90c77b45fd0f42febd69eea239037688/9a6b67ce7c26446483af079719edf679.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>CAP js<span>(Framework)</span></summary> <p class="text">CAP js ist ein Framework von SAP für die Entwicklung von Cloud-Apps mit JavaScript. Es hilft, schnell und einfach Anwendungen zu bauen. <span> <br> <a href="https://capjs.js.org/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Clean ABAP<span>(Framework)</span></summary> <p class="text">Clean ABAP sind Regeln für sauberen und gut lesbaren ABAP-Code. Sie helfen Entwicklern, bessere Programme zu schreiben, die einfacher zu verstehen sind. <span> <br> <a href="https://github.com/SAP/styleguides/blob/main/clean-abap/cheat-sheet/CleanABAPTheGoldenRulesV1.0.0.pdf">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Custom Fields & Logic<span>(Framework)</span></summary> <p class="text">Mit Custom Fields & Logic kann man SAP-Felder und Geschäftslogik anpassen, ohne zu programmieren. So lassen sich SAP-Systeme schnell auf die eigenen Bedürfnisse einstellen. <span> <br> <a href="https://learning.sap.com/learning-journeys/get-started-with-in-app-extensibility-in-sap-s-4hana/using-custom-fields-and-logic_c3abf136-f83f-475d-95e0-2d21d699d890">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Fiori Elements<span>(Framework)</span></summary> <p class="text">Fiori Elements ist ein Baukasten für SAP Fiori Apps. Entwickler können damit schnell Apps bauen, weil viele Funktionen schon fertig sind. <span> <br> <a href="https://experience.sap.com/fiori-design-web/v1-54/smart-templates/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>OpenUI5<span>(Framework)</span></summary> <p class="text">OpenUI5 ist ein kostenloses Framework von SAP für Web-Apps. Es ist die Basis für viele SAP Fiori Anwendungen und nutzt moderne Web-Technologien. <span> <br> <a href="https://openui5.org/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>RAP managed<span>(Framework)</span></summary> <p class="text">RAP managed ist eine moderne Methode, um SAP-Anwendungen sicher und schnell zu entwickeln. Sie sorgt für klare Strukturen und gute Datenverwaltung. <span> <br> <a href="https://pages.community.sap.com/topics/abap/rap">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>RAP unmanaged<span>(Framework)</span></summary> <p class="text">RAP unmanaged ist ähnlich wie RAP managed, bietet aber mehr Freiheit für Entwickler. Man muss mehr selbst programmieren und kontrollieren. <span> <br> <a href="https://software-heroes.com/en/blog/abap-rap-unmanaged-scenario">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>SAPUI5<span>(Framework)</span></summary> <p class="text">SAPUI5 ist das Haupt-Framework von SAP für Webanwendungen. Es basiert auf JavaScript und HTML5 und ist sehr flexibel für moderne Apps. <span> <br> <a href="https://sapui5.hana.ondemand.com/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Cloud ALM<span>(Tools-Werkzeuge)</span></summary> <p class="text">Cloud ALM ist ein Werkzeug, um SAP-Projekte in der Cloud zu planen und zu überwachen. Es hilft, den Überblick zu behalten und Probleme schnell zu finden. <span> <br> <a href="https://support.sap.com/en/alm/sap-cloud-alm.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>gCTS<span>(Tools-Werkzeuge)</span></summary> <p class="text">gCTS steht für Git-enabled Change and Transport System. Es verbindet SAP-Entwicklung mit Git, damit man Code besser verwalten und teilen kann. <span> <br> <a href="https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/3c24c83b2c0a4eee83cac387f96905ee.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>UI5 linter<span>(Tools-Werkzeuge)</span></summary> <p class="text">UI5 linter prüft den Code von UI5-Anwendungen auf Fehler und Stil. So bleibt der Code sauber und funktioniert besser. <span> <br> <a href="https://github.com/SAP/ui5-linter">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>ABAP Cleaner<span>(Tools-Werkzeuge)</span></summary> <p class="text">ABAP Cleaner ist ein Werkzeug, das ABAP-Code automatisch aufräumt und lesbar macht. Es hilft, den Code besser zu verstehen und zu pflegen. <span> <br> <a href="https://github.com/SAP/abap-cleaner">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>abapGit<span>(Tools-Werkzeuge)</span></summary> <p class="text">abapGit ist ein Tool, um ABAP-Code mit Git zu verwalten. So kann man Codeversionen speichern und mit anderen Entwicklern teilen. <span> <br> <a href="https://abapgit.org/">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>ADT<span>(Tools-Werkzeuge)</span></summary> <p class="text">ADT steht für ABAP Development Tools. Es ist eine moderne Entwicklungsumgebung in Eclipse für ABAP-Programmierer. <span> <br> <a href="https://developers.sap.com/tutorials/abap-install-adt..html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>ATC<span>(Tools-Werkzeuge)</span></summary> <p class="text">ATC ist das ABAP Test Cockpit. Es analysiert ABAP-Code automatisch und findet Fehler oder schlechte Stellen. So wird die Qualität verbessert. <span> <br> <a href="https://community.sap.com/t5/application-development-and-automation-blog-posts/atc-the-key-to-successful-abap-development/ba-p/13577493">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>BAS<span>(Tools-Werkzeuge)</span></summary> <p class="text">BAS steht für Business Application Studio. Es ist eine moderne Cloud-Entwicklungsumgebung von SAP, um Apps zu bauen. <span> <br> <a href="https://www.sap.com/swiss/products/technology-platform/business-application-studio.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>eCATT<span>(Tools-Werkzeuge)</span></summary> <p class="text">eCATT ist ein Werkzeug, um SAP-Tests zu automatisieren. Damit kann man Abläufe in SAP prüfen, ohne alles manuell zu machen. <span> <br> <a href="https://help.sap.com/docs/ABAP_PLATFORM_NEW/c6663103e6ad47dcb8bb830d85137077/496d2715e0221ec6e10000000a42189b.html">Link weiter</a></span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>VS Code<span>(Tools-Werkzeuge)</span></summary> <p class="text">VS Code ist ein moderner Code-Editor, den viele Entwickler nutzen. Man kann ihn auch für SAP-Entwicklung verwenden, besonders mit Erweiterungen. <span> <br> <a href="https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/17efa217f7f34a9eba53d7b209ca4280.html">Link weiter</a></span></p> </details>`,
    },
];
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((reg) => console.log("Service Worker registered!", reg))
        .catch((err) => console.error("Service Worker registration failed:", err));
}
const btn = document.querySelector("button");
const example = document.querySelector("p");
const getDataGerman = () => {
    const dataGermanLength = dataGerman.length;
    const randomNum = Math.floor(Math.random() * dataGermanLength);
    example.innerHTML = dataGerman[randomNum].info;
};
btn.addEventListener("click", getDataGerman);
