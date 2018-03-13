(function() {
  var categoryLabels = {
    "101": "Fremdwährungs-Anleihen ausländischer öffentlicher Emittenten",
    "102": "Fremdwährungs-Anleihen ausländischer privater Emittenten",
    "104": "Aktien und sonstige Dividendenpapiere ausländischer Emittenten",
    "105": "Geldmarktpapiere ausländischer Emittenten",
    "106": "Sonstige ausländische Investmentfonds mit Ertragsausschüttung (auch bei Wahlmöglichkeit zwischen Barausschüttung und Thesaurierung)",
    "107": "Kapitalherabsetzungen bei ausländischen nicht börsennotierten Aktiengesellschaften",
    "108": "Einzahlungen in die Kapitalrücklagen und Rückzahlungen bei ausländischen Aktiengesellschaften einschl. der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen",
    "110": "Optionsscheine ausländischer Emittenten",
    "111": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen, Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei ausländischen Nicht-Aktiengesellschaften - Zahlungen bei Errichtung und Aufhebung bzw. Erwerb und Veräußerung von ausländischen Zweigniederlassungen und Betriebsstätten",
    "112": "Einzahlungen in die Kapitalrücklagen und entsprechende Rückzahlungen bei ausländischen Nicht-Aktiengesellschaften einschließlich der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen",
    "123": "MFIs",
    "129": "Sonstige ausländische thesaurierende Investmentfonds",
    "132": "MFIs",
    "133": "Kapital-Strips der stripbaren Bundesanleihen",
    "134": "Zins-Strips der stripbaren Bundesanleihen",
    "136": "MFIs",
    "139": "MFIs",
    "140": "Bundesschatzanweisungen",
    "141": "Festverzinsliche Anleihen inländischer öffentlicher Emittenten",
    "143": "Fremdwährungsanleihen inländischer öffentlicher Emittenten",
    "144": "Bankaktien inländischer Emittenten",
    "145": "Geldmarktpapiere inländischer MFIs",
    "146": "Sonstige inländische Investmentfonds mit Ertragsausschüttung (auch bei Wahlmöglichkeit zwischen Barausschüttung und Thesaurierung)",
    "147": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen an inländischen nicht börsennotierten MFIs in der Rechtsform der Aktiengesellschaft sowie Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen in Form von inländischen Aktien, ausgegeben durch nicht börsennotierte MFIs",
    "148": "Einzahlungen in die Kapitalrücklagen und Rückzahlungen einschließlich der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen bei inländischen MFIs in der Rechtsform der Aktiengesellschaft",
    "150": "Optionsscheine inländischer Emittenten",
    "151": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen an inländischen MFIs, die nicht Aktiengesellschaften sind, sowie Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei diesen inländischen MFIs. Zahlungen bei Errichtung und Aufhebung bzw. Erwerb und Veräußerung von inländischen Zweigniederlassungen und Betriebsstätten ausländischer Banken, die inländische MFIs sind",
    "152": "Einzahlungen in die Kapitalrücklagen und Rückzahlungen bei inländischen MFIs in der Rechtsform von Nicht-Aktiengesellschaften einschl. der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen bei diesen inländischen MFIs",
    "155": "Genussscheine inländischer Emittenten",
    "157": "Sonstige inländische thesaurierende Investmentfonds",
    "163": "Emissionen von MFIs",
    "172": "MFIs (Eigengeschäft)",
    "175": "MFIs",
    "176": "MFIs",
    "178": "MFIs",
    "179": "MFIs",
    "180": "Pacht- und Mieterträge sowie –aufwendungen von inländischen MFIs",
    "182": "Zinsen auf Wertpapiere ausländischer öffentlicher Emittenten, die von inländischen MFIs vereinnahmt werden",
    "183": "Zinsen auf Wertpapiere inländischer privater Emittenten, die an Ausländer gezahlt werden bzw. die Inländer als erste inländische Stelle von ausländischen Lagerstellen erhalten ",
    "184": "Zinseinnahmen und –ausgaben der MFIs aus Bankguthaben, Krediten etc.",
    "185": "Erträge aus ausländischen Aktien oder Genussscheinen, die von inländischen MFIs vereinnahmt werden",
    "186": "Erträge aus Anteilen an sonstigen Kapitalgesellschaften (z. B. GmbH-Anteilen), die von inländischen MFIs vereinnahmt oder gezahlt werden",
    "187": "Erträge aus sonstigen Geschäfts- und Kapitalanteilen (z. B. Kommanditanteilen) sowie Zweigniederlassungen, die von inländischen MFIs vereinnahmt oder gezahlt werden",
    "188": "Erträge aus Anteilen an Aktiengesellschaften, die von inländischen MFIs vereinnahmt oder gezahlt werden",
    "190": "Vereinnahmte oder geleistete Zuschüsse von MFIs zur Vermeidung von Verlustvorträgen bzw. Jahresfehlbeträgen sowie Übernahmen der negativen Betriebsergebnisse von Betriebsstätten und Zweigniederlassungen, soweit diese in das Ergebnis aus der gewöhnlichen Geschäftstätigkeit eingehen",
    "197": "Aufwendungen und Erträge von MFIs aus sonstigen, nicht in Wertpapieren verbrieften Unternehmensbeteiligungen bei ausländischen bzw. inländischen Nicht-Aktiengesellschaften",
    "207": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen, Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei ausländischen nicht börsennotierten Aktiengesellschaften",
    "208": "Einzahlungen in die Kapitalrücklagen und Rückzahlungen bei ausländischen Aktiengesellschaften einschl. der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen",
    "211": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen, Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei ausländischen Nicht-Aktiengesellschaften - Zahlungen bei Errichtung und Aufhebung bzw. Erwerb und Veräußerung von ausländischen Zweigniederlassungen und Betriebsstätten",
    "212": "Einzahlungen in die Kapitalrücklagen und entsprechende Rückzahlungen bei ausländischen Nicht-Aktiengesellschaften einschl. der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen",
    "215": "Sonstige Rohrfernleitungstransporte",
    "216": "Binnenschiffsfrachten im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen",
    "217": "Übertragung von Stromfernleitungen",
    "219": "Gewährung und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Finanzierungstöchter (als Kreditgeber) an ausländische Unternehmen und Privatpersonen, die an ihnen unmittelbar oder mittelbar beteiligt sind",
    "221": "Unternehmen und Privatpersonen",
    "222": "Gewährung und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen und Privatpersonen sowie öffentliche Haushalte (als Kreditgeber) an ausländische Unternehmen, an denen sie unmittelbar oder mittelbar beteiligt sind, sowie an Zweigniederlassungen und Betriebsstätten ",
    "223": "Unternehmen und Privatpersonen",
    "225": "Luftfrachten im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen",
    "226": "Rohrfernleitungstransporte im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen",
    "227": "Gewährung und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen (als Kreditgeber) an ausländische Unternehmen und Privatpersonen, die an ihnen unmittelbar oder mittelbar beteiligt sind, sowie Kredite, die inländische Zweigniederlassungen und Betriebsstätten an ihre ausländischen Zentralen geben",
    "228": "Gewährung und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen (als Kreditgeber) an ausländische Unternehmen, die an ihnen oder an denen sie nicht unmittelbar oder mittelbar beteiligt sind, mit denen sie jedoch unmittelbar oder mittelbar einen gemeinsamen Direktinvestor haben",
    "232": "Unternehmen und Privatpersonen",
    "236": "Unternehmen und Privatpersonen ",
    "237": "Explorationsaufwendungen im Ausland",
    "239": "Unternehmen und Privatpersonen",
    "240": "Straßenfrachten im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen",
    "245": "Geldmarktpapiere inländischer Unternehmen  ",
    "247": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen an inländischen nicht börsennotierten Unternehmen in der Rechtsform der Aktiengesellschaft sowie Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen in Form von inländischen Aktien, ausgegeben durch nicht börsennotierte Unternehmen",
    "248": "Einzahlungen in die Kapitalrücklagen und Rückzahlungen einschl. der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen bei inländischen Unternehmen in der Rechtsform der Aktiengesellschaft",
    "251": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen an inländischen Unternehmen, die nicht Aktiengesellschaften sind, sowie Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei diesen inländischen Unternehmen. Zahlungen bei Errichtung und Aufhebung bzw. Erwerb und Veräußerung von inländischen Zweigniederlassungen und Betriebsstätten ausländischer Unternehmen und Privatpersonen",
    "252": "Einzahlungen in die Kapitalrücklagen und Rückzahlungen bei inländischen Unternehmen, die nicht Aktiengesellschaften sind einschl. der Zuschüsse zum Ausgleich von bilanzierten Verlustvorträgen bei diesen inländischen Unternehmen",
    "258": "Nichtbankaktien inländischer Emittenten",
    "261": "Finanzielle Unternehmen",
    "262": "Aufnahme und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen (als Kreditnehmer) bei ausländischen Unternehmen, die an ihnen unmittelbar oder mittelbar beteiligt sind, sowie Kreditaufnahmen von inländischen Zweigniederlassungen und Betriebsstätten bei ihren ausländischen Zentralen",
    "263": "Emissionen von finanziellen Unternehmen",
    "267": "Aufnahme und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen und Privatpersonen sowie öffentliche Haushalte (als Kreditnehmer) von ausländischen Unternehmen, an denen sie unmittelbar oder mittelbar beteiligt sind, sowie von ausländischen Zweigniederlassungen und Betriebsstätten",
    "268": "Aufnahme und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen (als Kreditnehmer) von ausländischen Unternehmen, die an ihnen oder an denen sie nicht unmittelbar oder mittelbar beteiligt sind, mit denen sie jedoch unmittelbar oder mittelbar einen gemeinsamen Direktinvestor haben",
    "269": "Aufnahme und Rückzahlung von Krediten mit einer Laufzeit von mehr als 12 Monaten durch inländische Unternehmen und Privatpersonen sowie öffentliche Haushalte (als Kreditnehmer) von ausländischen Finanzierungstöchtern, an denen sie unmittelbar oder mittelbar beteiligt sind",
    "272": "Unternehmen und Privatpersonen",
    "275": "Finanzielle Unternehmen",
    "276": "Finanzielle Unternehmen",
    "278": "Unternehmen",
    "279": "Unternehmen und Privatpersonen",
    "280": "Pacht- und Mieterträge sowie –aufwendungen von inländischen Unternehmen und Privatpersonen",
    "282": "Zinsen auf Wertpapiere ausländischer öffentlicher Emittenten, die von inländischen Unternehmen und Privatpersonen vereinnahmt werden",
    "283": "Zinsen auf Wertpapiere ausländischer privater Emittenten, die von inländischen Unternehmen und Privatpersonen vereinnahmt werden",
    "284": "Zinseinnahmen und –ausgaben der Unternehmen und Privatpersonen aus Bankguthaben, Krediten etc.",
    "285": "Erträge aus inländischen Aktien oder Genussscheinen, die an Ausländer gezahlt werden bzw. die über ausländische Lagerstellen an Inländer gezahlt werden",
    "286": "Erträge aus Anteilen an sonstigen Kapitalgesellschaften (z.B. GmbH-Anteilen), die von inländischen Unternehmen und Privatpersonen vereinnahmt oder gezahlt werden",
    "287": "Erträge aus sonstigen Geschäfts- und Kapitalanteilen (z. B. Kommanditanteilen) sowie Zweigniederlassungen, die von inländischen Unternehmen und Privatpersonen vereinnahmt oder gezahlt werden",
    "288": "Erträge aus Anteilen an Aktiengesellschaften, die von inländischen Unternehmen und Privatpersonen vereinnahmt oder gezahlt werden",
    "289": "Kredite von Direktinvestoren an Tochterunternehmen: Zinsen aus Kreditgewährungen inländischer Direktinvestoren an deren ausländische Tochterunternehmen sowie Zinsen aus Kreditaufnahmen inländischer Tochterunternehmen von ihren ausländischen Direktinvestoren",
    "290": "Vereinnahmte oder geleistete Zuschüsse von Unternehmen und Privatpersonen zur Vermeidung von Verlustvorträgen bzw. Jahresfehlbeträgen sowie Übernahmen der negativen Betriebsergebnisse von Betriebsstätten und Zweigniederlassungen, soweit diese in das Ergebnis aus der gewöhnlichen Geschäftstätigkeit eingehen",
    "297": "Aufwendungen und Erträge von Unternehmen und Privatpersonen sowie öffentlichen Haushalten aus sonstigen, nicht in Wertpapieren verbrieften Unternehmensbeteiligungen bei ausländischen bzw. inländischen Nicht-Aktiengesellschaften",
    "310": "Transportnebenleistungen für den Seeverkehr",
    "321": "Öffentliche Haushalte",
    "323": "Öffentliche Haushalte",
    "332": "Öffentliche Haushalte",
    "336": "Öffentliche Haushalte",
    "339": "Öffentliche Haushalte",
    "340": "Transportnebenleistungen für den Schienenverkehr",
    "344": "Unverzinsliche Schatzanweisungen des Bundes (Bubills)",
    "345": "Übrige Geldmarktpapiere inländischer öffentlicher Emittenten ",
    "351": "Öffentliche Haushalte",
    "352": "Öffentliche Haushalte",
    "360": "Transportnebenleistungen für den Luftverkehr",
    "361": "Bedarf für Transportmittel",
    "366": "Emissionen des Bundes",
    "367": "Emissionen der Länder",
    "368": "Emissionen von Städten und Gemeinden",
    "372": "Öffentliche Haushalte",
    "373": "Öffentliche Haushalte",
    "379": "Öffentlichen Haushalten",
    "380": "Pacht- und Mieterträge sowie –aufwendungen von inländischen öffentlichen Haushalten",
    "382": "Zinsen auf Wertpapiere inländischer öffentlicher Emittenten, die an Ausländer gezahlt werden bzw. die Inländer als erste inländische Stelle von ausländischen Lagerstellen erhalten ",
    "384": "Zinseinnahmen und –ausgaben der öffentlichen Haushalte aus Bankguthaben, Krediten etc.",
    "400": "Lebensversicherungen inländischer Versicherungsnehmer",
    "401": "Lebensversicherungszweitmarkt",
    "410": "Transportversicherung inländischer Versicherungsnehmer",
    "420": "Sonstiger Versicherungsverkehr inländischer Versicherungsnehmer",
    "439": "Rückversichungsprovision*",
    "440": "Lebensversicherungen inländischer Versicherungsgeber mit Ausländern",
    "441": "Transportversicherung inländischer Versicherungsgeber - Versicherungsvertrag mit Ausländern",
    "442": "Sonstiger Versicherungsverkehr inländischer Versicherungsgeber – Versicherungsvertrag mit Ausländern",
    "443": "Lebensversicherungen inländischer Versicherungsgeber mit Inländern",
    "444": "Transportversicherung inländischer Versicherungsgeber – Versicherungsvertrag mit Inländern",
    "445": "Sonstiger Versicherungsverkehr inländischer Versicherungsgeber – Versicherungsvertrag mit Inländern",
    "447": "Prämien- und Schadensrückerstattung im abgehenden (Retro-) Geschäft*",
    "448": "Prämien- und Schadensrückerstattung im eingehenden (Rück-) Geschäft*",
    "449": "Gewinnbeteiligung bei Rückversicherungen*",
    "450": "Abgehendes (Retro-) Geschäft ",
    "451": "Eingehendes (Rück-) Geschäft",
    "459": "Verlustbeteiligung bei Rückversicherungen*",
    "460": "Sonstige Einnahmen von Versicherungen",
    "461": "Festverzinsliche Euro-Anleihen inländischer MFIs",
    "462": "Festverzinsliche Euro-Anleihen inländischer Unternehmen",
    "465": "Variabel verzinsliche Euro-Anleihen inländischer MFIs",
    "466": "Variabel verzinsliche Euro-Anleihen inländischer Unternehmen",
    "467": "Ausländische Emissionszertifikate",
    "491": "Festverzinsliche Fremdwährungsanleihen inländischer MFIs",
    "492": "Festverzinsliche Fremdwährungsanleihen inländischer Unternehmen",
    "495": "Variabel verzinsliche Fremdwährungsanleihen inländischer MFIs",
    "496": "Variabel verzinsliche Fremdwährungsanleihen inländischer Unternehmen",
    "507": "Inländische Emissionszertifikate",
    "517": "Personalleasing",
    "521": "Entgelte für nicht-selbständige Arbeit",
    "523": "Provisionen",
    "525": "Gehaltszahlungen an ausländische Beschäftige bei deutschen Botschaften und Konsulaten",
    "526": "Renten ",
    "527": "Pensionen",
    "528": "Kriegsopferversorgung",
    "529": "Sonstige Renten",
    "533": "Finanzdienstleistungen",
    "534": "Entsorgungsleistungen",
    "536": "Juristische Dienstleistungen",
    "540": "Werbung, Marktforschung, Messekosten",
    "546": "Wirtschaftsprüfung, Buchführung, Steuerberatung",
    "549": "Forschung und Entwicklung",
    "551": "Produkttests",
    "553": "Technische Dienstleistungen",
    "554": "Architekturdienstleistungen",
    "555": "Ingenieur-Dienstleistungen",
    "556": "Kaufmännische Dienstleistungen",
    "558": "Dienstleistungen für Landwirtschaft und Bergbau",
    "561": "Reparatur von Gebäuden und anderen nicht beweglichen Sachen",
    "564": "Herstellung von audiovisuellen und sonstigen künstlerischen Produkten ",
    "566": "Wartung und Reparatur",
    "567": "Lohnfertigung",
    "569": "Einnahmen und Ausgaben für Baustellen im Inland, die länger als ein Jahr bestehen",
    "570": "Einnahmen und Ausgaben für Baustellen im Inland, die kürzer als ein Jahr bestehen",
    "571": "Sonstige produktbezogene oder unternehmensbezogene Dienstleistungen",
    "572": "Nachrichten- und Informationsdienste",
    "573": "EDV-Dienstleistungen",
    "574": "Speicherung von Informationen sowie Bereitstellung entsprechender Infrastruktur",
    "576": "Telekommunikations-, Computer- und Informationsdienstleistungen; Kommunikationsdienstleistungen",
    "579": "Einnahmen und Ausgaben für Baustellen im Ausland, die länger als ein Jahr bestehen",
    "580": "Einnahmen und Ausgaben für Baustellen im Ausland, die kürzer als ein Jahr bestehen ",
    "583": "Zinsen auf Wertpapiere ausländischer privater Emittenten, die von inländischen MFIs vereinnahmt werden",
    "584": "Swapzinsen und Ausgleichszahlungen / Total Return Swaps",
    "585": "Erträge auf ausländische Investmentzertifikate, die von inländischen MFIs vereinnahmt werden",
    "594": "Miete und Operationelles Leasing",
    "600": "Zahlungen im Zusammenhang mit deutschen Ein- und Ausfuhren und Verbringungen, die den Wert der Waren reduzieren",
    "601": "Abgaben im Zusammenhang mit deutschen Ein- und Ausfuhren",
    "602": "Zahlungen im Zusammenhang mit deutschen Ein- und Ausfuhren und Verbringungen, die den Wert der Waren erhöhen",
    "606": "Ausländische Geldmarktfondszertifikate mit Ertragsausschüttung (auch bei Wahlmöglichkeit zwischen Barausschüttung und Thesaurierung)",
    "607": "Ausländische thesaurierende Geldmarktfonds ",
    "610": "Gewährleistungen, Ersatz- und Rückzahlungen sowie Preisnachlässe im Dienstleistungsverkehr mit dem Ausland",
    "613": "Nutzung von Software",
    "614": "Nutzungen von audiovisuellen Produkten und sonstigen künstlerischen Urheberrechten",
    "615": "Nutzung von Forschungsergebnissen, Erfindungen und Verfahren",
    "616": "Nutzung von Marken-, Warenzeichen, Namensrechten und Franchise",
    "617": "Nutzung von sonstigen Rechten",
    "619": "Amtliche Gebühren",
    "623": "Reproduktion und Vertrieb von Computersoftware",
    "624": "Reproduktion, Vertrieb und Übertragung von audiovisuellen Produkten und sonstigen künstlerischen Urheberrechten",
    "627": "Sonstige Vertriebsrechte",
    "629": "Weltraumtransporte",
    "633": "Kauf/Verkauf von Software",
    "634": "Kauf/Verkauf von audiovisuellen Produkten und sonstigen künstlerischen Urheberrechten",
    "635": "Kauf/Verkauf von Forschungsergebnissen",
    "636": "Kauf/Verkauf von Markenrechten und Warenzeichen",
    "637": "Kauf/Verkauf von sonstigen Rechten",
    "638": "Ausländische Pensionskassen und Vorsorgewerke",
    "639": "Inländische Pensionskassen und Vorsorgewerke",
    "641": "Variabel verzinsliche Anleihen inländischer öffentlicher Emittenten",
    "643": "Freizeit- und Kulturdienstleistungen",
    "646": "Inländische Geldmarktfonds mit Ertragsauschüttung (auch bei Wahlmöglichkeit zwischen Barausschüttung und Thesaurierung)",
    "647": "Inländische thesaurierende Geldmarktfonds",
    "654": "Personenbeförderung auf See",
    "657": "Versicherungsnebenleistungen",
    "658": "Gesundheitsleistungen ",
    "659": "Bildungsdienstleistungen",
    "661": "Sonstige Binnenschiffsfrachten",
    "664": "Personenbeförderung auf Binnenschiffen",
    "669": "Seefrachten im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen ",
    "670": "Transportnebenleistungen für den Straßenverkehr",
    "671": "Sonstige Straßenfrachten",
    "674": "Personenbeförderung auf der Straße",
    "676": "Bahnfrachten im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen",
    "680": "Allgemeine Transportnebenleistungen",
    "681": "Sonstige Bahnfrachten",
    "685": "Erträge auf inländische Investmentanteile, die an Ausländer gezahlt werden bzw. die Inländer von ausländischen Lagerstellen erhalten",
    "689": "Kredite von Tochterunternehmen an Direktinvestoren: Zinsen aus Kreditgewährungen inländischer Tochterunternehmen an deren ausländische Direktinvestoren sowie Zinsen aus Kreditaufnahmen inländischer Direktinvestoren von ihren ausländischen Tochterunternehmen",
    "690": "Transportnebenleistungen für den Binnenschiffsverkehr",
    "691": "Sonstige Post- und Kurierdienste",
    "694": "Pacht",
    "695": "Sonstige personenbezogene Dienstleistungen",
    "696": "Post- und Kurierdienste im Zusammenhang mit den deutschen Ein- und Ausfuhren und Verbringungen",
    "700": "Einnahmen und Ausgaben der Bundeswehr",
    "701": "Euro-Anleihen ausländischer öffentlicher Emittenten",
    "702": "Euro-Anleihen ausländischer privater Emittenten",
    "710": "Zahlungen des Bundes an die diplomatischen Vertretungen im Ausland zur Bestreitung der laufenden Kosten",
    "712": "Gehaltszahlungen an deutsche Beschäftigte bei deutschen Botschaften und Konsulaten",
    "720": "Wiedergutmachungsleistungen öffentlicher Stellen",
    "724": "Wiedergutmachungsleistungen privater Stellen",
    "725": "Schuldenerlass des Bundes",
    "727": "Privater Schuldenerlass",
    "728": "Unterstützungszahlungen zwischen privaten Haushalten",
    "729": "Sonstige private Unterstützungszahlungen",
    "740": "Transaktionen mit Internationalen Organisationen",
    "760": "Sonstige Einnahmen und Ausgaben des Bundes, der Länder, Gemeinden und anderer öffentlicher Stellen",
    "762": "Einkommensteuer und Solidaritätszuschlag",
    "763": "Kapitalertrags- und Körperschaftsteuer",
    "764": "Mehrwertsteuer",
    "765": "Gewerbesteuer",
    "769": "Grund- und  Grunderwerbssteuer",
    "770": "Lieferungen von Waren und Dienstleistungen an die im Inland stationierten ausländischen Streitkräfte",
    "774": "Sonstige Steuern",
    "782": "Zinsen auf Wertpapiere ausländischer öffentlicher Emittenten, die von inländischen öffentlichen Haushalten vereinnahmt werden",
    "783": "Zinsen auf Wertpapiere ausländischer privater  Emittenten, die von inländischen öffentlichen Haushalten vereinnahmt werden",
    "789": "Kredite zwischen Schwesterunternehmen: Zinsen aus Kreditgewährungen verbundener Unternehmen, zwischen denen keine unmittelbare oder mittelbare Beteiligung besteht, die jedoch unmittelbar oder mittelbar einen gemeinsamen Direktinvestor haben",
    "810": "Zahlungen im Verkehr mit ausländischen Behörden",
    "812": "Subventionen der Europäischen Union",
    "820": "OTC-Optionen mit ausländischen Stillhaltern  ",
    "821": "Optionen, ausländische Terminbörsen",
    "827": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen, Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei ausländischen börsennotierten Aktiengesellschaften",
    "830": "OTC-Optionen mit inländischen Stillhaltern",
    "831": "Optionen, inländische Terminbörsen",
    "832": "Mitarbeiteroptionen von inländischen Gesellschaften",
    "833": "Mitarbeiteroptionen von ausländischen Gesellschaften",
    "840": "Credit Default Swaps",
    "842": "Financial Futures, inländische Terminbörsen",
    "847": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen an inländischen börsennotierten MFIs in der Rechtsform der Aktiengesellschaft sowie Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen in Form von inländischen Aktien, ausgegeben durch börsennotierte MFIs",
    "850": "Erbschaft, Vermächtnis, Schenkung, Restitution",
    "854": "Sonstige Übertragungen",
    "861": "Unterstützungszahlungen ausländischer Arbeitnehmer",
    "862": "Kapitalanlagen ausländischer Arbeitnehmer ",
    "882": "Financial Futures, ausländische Terminbörsen",
    "883": "Sonstige außerbörsliche Termingeschäfte",
    "885": "Erträge auf ausländische Investmentzertifikate, die von inländischen Unternehmen, Privatpersonen und öffentlichen Haushalten vereinnahmt werden",
    "889": "Kredite von Finanzierungstöchtern an Direktinvestoren: Zinsen aus Kreditgewährungen inländischer Finanzierungstöchter an deren ausländische Direktinvestoren sowie Zinsen aus Kreditaufnahmen inländischer Direktinvestoren von ihren ausländischen Finanzierungstöchtern",
    "898": "Forward Rate Agreements",
    "927": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen, Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen bei ausländischen börsennotierten Aktiengesellschaften",
    "941": "Nichtfinanzielle Unternehmen und Privatpersonen",
    "947": "Erwerb bzw. Veräußerung von Kapitalbeteiligungen an inländischen börsennotierten Unternehmen in der Rechtsform der Aktiengesellschaft sowie Kapitaleinzahlungen, Kapitalerhöhungen und Kapitalherabsetzungen in Form von inländischen Aktien, ausgegeben durch börsennotierte Unternehmen",
    "950": "Sonstige Transaktionen für Waren und Dienstleistungen",
    "951": "Sonstige Transaktionen im Kapitalverkehr",
    "963": "Emissionen von nichtfinanziellen Unternehmen",
    "975": "Nichtfinanzielle Unternehmen",
    "976": "Nichtfinanzielle Unternehmen",
    "984": "Equity Swaps",
    "985": "Erträge aus ausländischen Aktien oder Genussscheinen, die von inländischen Unternehmen, Privatpersonen und öffentlichen Haushalten vereinnahmt werden",
    "989": "Handel mit Gold",
    "990": "Handel mit Gas – Übergabepunkt im Ausland ",
    "994": "Handel mit elektrischem Strom – Übergabepunkt im Inland ",
    "995": "Handel mit elektrischem Strom – Übergabepunkt im Ausland ",
    "997": "Einnahmen und Ausgaben im Sonstigen Warenverkehr",
    "998": "Handel mit Gas – Übergabepunkt im Inland ",
    "081": "Sonstige Seefrachten",
    "014": "Personenbeförderung in Flugzeugen",
    "082": "Sonstige Luftfrachten",
    "013": "Personenbeförderung auf der Schiene",
    "017": "Reiseverkehr",
    "003": "Transithandel"
  };

  function Balance() {
    this.income = 0;
    this.expenditure = 0;
    this.setAmount = function(amount) {
      if (amount >= 0) {
        this.income += amount;
      } else {
        this.expenditure += amount;
      }
    };
  }

  function readTable() {
    var payments = new Map();
    var rows = document.querySelectorAll('tbody > tr');
    rows.forEach(function(row) {
      var categoryCode = row.querySelectorAll('[name=kategorie]')[0].value;
      var amount = accounting.unformat(row.children[4].innerText);
      var country = row.children[5].innerText;
      var categoryMap = (payments.has(country)) ? payments.get(country) : payments.set(country, new Map()).get(country);
      var balance = (categoryMap.has(categoryCode)) ? categoryMap.get(categoryCode) : categoryMap.set(categoryCode, new Balance()).get(categoryCode);
      balance.setAmount(amount);
    });
    return payments;
  };

  function appendButton() {
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'export-trigger');
    button.className = 'btn btn-default';
    button.innerText = 'Daten einlesen';
    button.addEventListener('click', exportHandler);
    document.body.appendChild(button);
  };

  function exportHandler() {
    var tabledata = readTable();
    var csvData = convertToCSV(tabledata);
    appendLink(csvData);
  };

  function convertToCSV(tableData) {
    var rows = [];

    tableData.forEach(function(categoryMap, country){
      categoryMap.forEach(function(balance, categoryCode) {
        var income = balance.income;
        var expenditure = balance.expenditure;
        var category = categoryLabels[categoryCode];

        if (isAmountValid(income)) {
          rows.push([country, category, accounting.formatMoney(income, '', 0, '', '')]);
        }

        if (isAmountValid(expenditure)) {
          rows.push([country, category, accounting.formatMoney(expenditure, '', 0, '', '') * -1]);
        }
      });
    });

    return rows;
  };

  function appendLink(data) {
    var link = document.getElementById('export-link') || document.createElement('a');
    link.setAttribute('href', encodeURI(createCSV(data)));
    link.setAttribute('id', 'export-link');
    link.setAttribute('download', 'data.csv');
    link.className = 'btn btn-primary';
    link.innerText = 'CSV downloaden';
    document.body.appendChild(link);
  };

  function isAmountValid(amount) {
    return amount >= 12500.0 || amount <= -12500.0;
  };

  function createCSV(data) {
    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function(rowArray){
       let row = rowArray.join(";");
       csvContent += row + "\r\n";
    });
    return csvContent;
  };

  function init () {
    appendButton();
  };

  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  ready(init);
})();
