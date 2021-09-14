import { NextRouter } from 'next/router';

const EN = {
  PAGE_TITLE: 'Erik Welander - Personal web page',
  PAGE_DESCRIPTION: 'Personal web page of Erik Welander',
  ALGORITHMS: 'Algorithms',
  OCCUPATION_1: 'Full Stack Systems Engineer.',
  OCCUPATION_2: 'Frontend, backend, and every unix system in-between',
  PERSONAL_QUOTE: 'Code that does one thing, and one thing well, is art.',
  HI: 'Hi!',
  PROFESSIONAL: 'professional',
  TEAM: 'team',
  DEVELOPER_AT: 'developer at',
  TOOLBAR_HOME: 'Home',
  TOOLBAR_RESUME: 'Resumé',
  TOOLBAR_PROJECTS: 'Projects',
  DATABASES: 'Databases',
  WEB_DEVELOPMENT: 'Web Development',
  TESTING: 'Testing',
  NETWORKS: 'Networks',
  SERVERS: 'Servers',
  TECHNOLOGY: 'TECHNOLOGY',
  ORGANIZATION: 'Organization',
  MEETUP: 'Meetup',
  DOWNLOAD_PDF: 'Download PDF',
  INDEX_INTRODUCTION_1: `My name is Erik Welander. I'm a 29 year old software engineer living is stockholm with a very large interest in technology,
          human-machine interactions (AI), a whole host of programming with different technologies, frameworks, languages and projects.
          Do i love to spend hours in front of a terminal configuring Linux systems like Arch Linux? Yes!
          Do i like to configure infrastructure, networks and hardware? Also yes!
          
          My favorite languages, and that i do almost all my work in these days are Typescript/Javascript and Java/Kotlin with Spring/Micronaut.
          I also do both front-end and back-end. This side is a server-side rendered React page using Next.js and Styled-components for example!`,
  INDEX_INTRODUCTION_2: 'Other things i love spending time on are:',
  INDEX_INTRODUCTION_LIST_ITEM_1: 'Anime, usually with a focus on the super-natural mixed with romance',
  INDEX_INTRODUCTION_LIST_ITEM_2: `Story driven games mixed with horror like Life is Strange, Dreamfall: The Longest Journey, Detroit: Become Human,
            Mass Effect, Beyond two souls, To the moon, Dead Space, SOMA etc`,
  INDEX_INTRODUCTION_LIST_ITEM_3: 'Digital art, mostly in the 3D space',
  INDEX_INTRODUCTION_LIST_ITEM_4: 'Mechs (MechWarrior, Battletech, does this involve a human-machine interface?)',
  INDEX_INTRODUCTION_LIST_ITEM_5: 'Animals, dogs ♥ very much in particular',
  INDEX_INTRODUCTION_LIST_ITEM_6: 'Long walks with casual conversation, no unnecessarily complicated plans!',
  INDEX_INTRODUCTION_CONTACT_ME_1:
    "Feel free to contact me on any of the platforms mentioned above (I won't respond to messages without a subject).",
  INDEX_INTRODUCTION_CONTACT_ME_2_1: 'If you are looking for a',
  INDEX_INTRODUCTION_CONTACT_ME_2_2: 'overview, check out the resume section.',
  RESUME_SECTION_WORK_EXPERIENCE: 'Work Experience',
  RESUME_SECTION_WORK_EXPERIENCE_1_TITLE: 'Full Stack Systems Engineer / Developer',
  RESUME_SECTION_WORK_EXPERIENCE_1_TEXT: `My journey with Atlassian started at a small, but quickly growing company called Riada Development AB.
  At the time, we were about 10 people in rather small office, but we were growing at an exponential rate.
  As our company grew the number of developers quickly doubled, we got new offices, new structures, and a lot of big exciting projects.
  
  Insight is the parent to all of those projects, and is a testament to the excellence of the company and all of my fellow colleges.
  Insight is an asset management engine tightly coupled with Jira that gives you complete control over all of your companies asserts and processes.
  Everything from complex relationships, automations, flows, graphs to even include automatic company asset discoverers with the help on external tools tightly integrated with us.
  
  During my time here i've worked with a myriad of different technologies and environments.   
  From "old-style" large monoliths built in Java utilizing Atlassian SDKs with Spring, Active Objects and an aging but solid Soy/Jquery front-end (ES5 era, Internet Explorer 8).
  To new style microservice "cloud first" architectures relying on many small de-couped components with microservices talking over GRPC.
  Our hosting relied on Docker/Kubernetes and amazon AWS. And our front-end contained the latest that the Javascript/Typescript world had to offer in terms of features and frameworks.
  Mindville is as of summer 2020 a part of Atlassian, with swedish offices closing in January 2022.
  `,
  RESUME_SECTION_WORK_EXPERIENCE_2_TITLE: 'Developer',
  RESUME_SECTION_WORK_EXPERIENCE_2_TEXT: `Shopello is an online shopping API used by a number of sites and partners to drive shopping traffic to different web-stores based on a cost-per-click model.
  During my time at Shopello we've made several of the systems several many faster and partook in several large, if not complete re-writes. And added new functionality that enabled us to manage much larger volumes of traffic, which in turn have allowed us to establish ourselves in new countries. My duties also included improving our feed management for our customers, keep things running smoothly and making sure our traffic doesn't include bots. The role has been a personally large growing point for me and i've learned many new development concepts and technologies. During my time at the company we unfortunately got into SEO and partner issues, and after a company merger and several cuts me and several of my colleges had to go.`,
  RESUME_SECTION_WORK_EXPERIENCE_3_TITLE: 'Junior Developer',
  RESUME_SECTION_WORK_EXPERIENCE_3_TEXT: `Clinicbuddy works within the health services business to manage reservations, journals, payments and document PDF generations.
  My work here includes integrations against payment and bills services, external systems like hearing tests, data import and conversions between various databases and programs like Lotusnotes as well as scripts to generate PDF documents based on form data.
  `,
  RESUME_SECTION_WORK_EXPERIENCE_4_TITLE: 'Android Developer, Linux Developer',
  RESUME_SECTION_WORK_EXPERIENCE_4_TEXT: `Andorid developer for a project known as "Exqube", an IOT solution for measuring and storing various data about connected devices.
  The application consists of a background-service that communicates via bluetooth in order to measure values from our connected box that can replicate things like car dashboards.
  I've also developed a number of smaller projects delivered as embedded systems using Raspberry PIs (GPIO).
  `,
  RESUME_SECTION_WORK_EXPERIENCE_5_TITLE: 'IT Consultant',
  RESUME_SECTION_WORK_EXPERIENCE_5_TAG: 'Computers and store equipment',
  RESUME_SECTION_WORK_EXPERIENCE_5_TEXT: `Fujitsu Sweden AB technician.
Installation of new payment terminals and store equipment at night time.
  `,
  RESUME_SECTION_WORK_EXPERIENCE_6_TITLE: 'IT Consultant',
  RESUME_SECTION_WORK_EXPERIENCE_6_TAG: 'Computer hardware',
  RESUME_SECTION_WORK_EXPERIENCE_6_TEXT: `Tekniker åt Fujitsu Sweden AB.
  Working at SEB (Swedish bank) replacing equipment.
`,
  RESUME_SECTION_WORK_EXPERIENCE_7_TITLE: 'IT Consultant',
  RESUME_SECTION_WORK_EXPERIENCE_7_TAG: 'Computer hardware',
  RESUME_SECTION_WORK_EXPERIENCE_7_TEXT: `Tekniker åt Fujitsu Sweden AB.
  Working at SEB (Swedish bank) replacing equipment.
`,
  RESUME_SECTION_WORK_EXPERIENCE_8_TITLE: 'Webmaster',
  RESUME_SECTION_WORK_EXPERIENCE_8_TEXT: 'Website developer',
  RESUME_SECTION_EDUCATION: 'Education',
  RESUME_SECTION_EDUCATION_1_TITLE: 'Systems Engineer',
  RESUME_SECTION_EDUCATION_1_TAG_DATABASES: 'Databases',
  RESUME_SECTION_EDUCATION_1_TAG_WEB_DEVELOPMENT: 'Web Development',
  RESUME_SECTION_EDUCATION_1_TAG_TESTING: 'Testing',
  RESUME_SECTION_EDUCATION_1_TEXT: `A very hands on practical education with a large focus on competing code assignments from other developers and speakers.
  We had several assignments from diffrent companies involving writing backend services in Java with jersey and spring.
  `,
  RESUME_SECTION_EDUCATION_2_TITLE: 'Computer Science 180HP',
  RESUME_SECTION_EDUCATION_2_OS_DESIGN: 'Operating systems design and threading',
  RESUME_SECTION_EDUCATION_2_TEXT:
    '2 Year university studying data sciences including logcal thinking, algorithms and design.',
  RESUME_SECTION_EDUCATION_3_TITLE: 'Technology, Programming and Networks',
  RESUME_SECTION_EDUCATION_3_TEXT:
    'A technology education with a focus on Programming and Networks using Cisco equipment.',
  RESUME_SECTION_NON_PROFIT: 'Freetime Non-profit activities',
  RESUME_SECTION_NON_PROFIT_1_TITLE: 'Board member',
  RESUME_SECTION_NON_PROFIT_1_TEXT: `IX is a non-profit meeting space for technology enthusiasts to share their knowledge and experiences. The organization has existed since the early Commodore Amiga days with a focus on teaching Programming and systems knowledge.`,
  RESUME_SECTION_NON_PROFIT_2_TITLE: 'Organization Staff / Key-holder',
  RESUME_SECTION_NON_PROFIT_2_TEXT: `Proxxi was a non-profit meeting space hosting other meeting spaces, that in turn held a variety of different activities.
Everything from karaoke, movie nights, pottering, computer games and card games as well as software and hardware development
Unfortunately the organization did not make ends economically and had to eventually close.
`,
  RESUME_SECTION_NON_PROFIT_3_TITLE: 'Local Network Operator / Server Operator',
  RESUME_SECTION_NON_PROFIT_3_TEXT: `JOTI (Jamboree on the Internet) is a scout event that occurs every october.
During 48 hours, our event at Mälarscouterna holds a number of competitions and tournaments in an number of games and activities while we at the same time help them connect to other scouts
The event usually held about 60 computers connected to enterprise switches and a self built linux box managing all the internet traffic.
Most of the work of the event fell upon me and my friend, but as things became increasingly difficult to manage and find volunteers we are no longer active.
`,
  PROJECTS_1_TITLE: 'Studying online broadcasting software like OBS, audio mixing and 3D modelling',
  PROJECTS_1_1_TEXT: `Twitch as over the years become a lot less about gaming, and a lot more about personalities and community. With "just talking" regularly claiming the nr.1 spot on the site.
I've never really been a fan of esport, nor all that interested in watching strangers play games, so as this change slowly took place my interest in the plattform has slowly grown.
This change can not only be attributes by the emergence of cheap professional hardware, but more importantly, software.
We currently have:
`,
  PROJECTS_1_2_TEXT: `Professional audio and video capture equipment readily available and cheap.
Good examples are RTX Voice and VoiceMeter. Wich by utilizing hardware AI cores (on nVidia) can give you crystal clear sound and audio mixing from a variety of sources.
`,
  PROJECTS_1_3_TEXT: `Advanced studio streaming software like OBS+Streamlabs.
This gives us studio features like Scenes, transitions, widgets, color-key transparency, layers, backgrounds, effects, and everything else a streamer might need.`,
  PROJECTS_1_4_TEXT: `Affordable real-time 3D motion capture and VR
  That last part is what has captured my interest the most. `,
  PROJECTS_1_5_TEXT: `I regularly watch people with full body VT tracking dancing to music, play games or just hang out together.
I also watch several "VTubers" that with a simple web-cam and optionally a leap-motion, gets full facial tracking, movements, and arm/hand tracking.
This new landscape has allowed ourselves to seamlessly merge with virtual 3D characters, and to be whatever we want to be in the moment online.
This has been a fascinating journey and i've dived deep into how these things works behind the scenes. The software and the 3D models.
There are not only plenty of free models and clothing stores to get your avatar up and running, and if not getting an artist to make you a comission is surprisingly cheap. You could of course spend a lot of money for a proper model from a Blender 3D artist from scratch, but you could also pay an artist on fiver to make a VROID model for you based on your preferences.

The model of the right side for example is something i've put together using 3D assets i've bought or got for free from booth / vroid hub.
This can quickly turn into a rabbit hole where a lof of computer knowledge becomes necessary and unless you are determined to learn about Unity and 3D modeling i'd suggesting getting an artist.

For new artists i'd strongly recommend starting off at Vroid tutorials, and slowly explore 3D assets stores.
Or maybe you don't really have an intrest in this and want to focus on your stream and content, pay an actual artist on fiverr, they are very affordable and the results can be surprising! 
`,
  PROJECTS_2_TITLE: 'Mechwarrior Timberwolf 3D model printing',
  PROJECTS_2_1_TEXT: `This particular model took about a whole week to print, and required multiple iterations and modifications to an already public 3D model we've found for printing.
Part of me wants to give it a proper paint job, but part of me really enjoys the cleaness/pureness of the clean plastics. Since this would be my first paint-job i should probably practise on something less delicate.
My goal, eventually, is to have a large set of every MechWarrior chassis out there (that's quite a lot!), but it's currently pretty far into the future.
I want to thank my bother`,
  PROJECTS_2_2_TEXT: `(3D/CAD artist) for this wonderful and rather special birthday present.
If you are intrested, send him a message, as he is looking for new projects to take on.`,
};

const SV = {
  PAGE_TITLE: 'Erik Welander - Personlig hemsida',
  PAGE_DESCRIPTION: 'Personlig hemsida av Erik Welander',
  ALGORITHMS: 'Algoritmer',
  OCCUPATION_1: 'Fullstack Systemutvecklare',
  OCCUPATION_2: 'Frontend, backend, och alla unix system imellan',
  PERSONAL_QUOTE: 'Kod som gör en sak, och en sak väl är konst.',
  HI: 'Hej!',
  PROFESSIONAL: 'professionell',
  TEAM: 'team',
  DEVELOPER_AT: 'utvecklare hos',
  TOOLBAR_HOME: 'Hem',
  TOOLBAR_RESUME: 'Resumé',
  TOOLBAR_PROJECTS: 'Projekt',
  DATABASES: 'Databaser',
  WEB_DEVELOPMENT: 'Webb utveckling',
  TESTING: 'testning',
  NETWORKS: 'Nätverk',
  SERVERS: 'Servrar',
  TECHNOLOGY: 'Teknik',
  ORGANIZATION: 'Organisation',
  MEETUP: 'Mötes-plats',
  DOWNLOAD_PDF: 'Ladda ned PDF',
  INDEX_INTRODUCTION_1: `Jag heter Erik Welander, bor i stockholm och är en 29-årig systemutvecklare med ett stort intresse för teknik, Människa-dator interactioner (AI)
          samt en uppsjö utav olika programmerings-tekniker, ramverk, språk och projekt.
          Sitter jag i timmar framför terminaler för att konfigurera Linux system som Arch? Japp!
          Gillar jag att konfigurera infra-struktur, nätverk och hårdvara? Japp!
          
          Jag spenderar majoriteten av min utveckartid dessa dagar i Typescript/Javascript och Java/Kotlin med Spring/Micronaut.
          Jag utvecklar både front-end (det gränssnitt, hemsidor som denna t.ex) samt back-end (komplex affärslogik, databaser etc),
          Den här sidan är t.ex en helt server-renderad React sida med styled components (javascript genererad css),
          kompilerad till statiska sidor med Next.js på Nginx (Såklart!)`,
  INDEX_INTRODUCTION_2: 'Intressen jag älskar att spenderat tid på annars är:',
  INDEX_INTRODUCTION_LIST_ITEM_1:
    'Anime, oftast med ett fokus på fantasi och övernaturliga fenonem / magi blandat med romans',
  INDEX_INTRODUCTION_LIST_ITEM_2: `Tunga story-drivna spel med intressanta världar mixat med horror. Life is Strange, Dreamfall: The Longest Journey, Detroit: Become Human,
           Mass Effect, Beyond two souls, To the moon, Dead Space, SOMA etc`,
  INDEX_INTRODUCTION_LIST_ITEM_3: 'Digital konst, mestadels inom 3D',
  INDEX_INTRODUCTION_LIST_ITEM_4: 'Mechs (MechWarrior, Battletech, inkluderar det gränssnitt mellan robotar?)',
  INDEX_INTRODUCTION_LIST_ITEM_5: 'Djur, hundar ♥ i synnerhet',
  INDEX_INTRODUCTION_LIST_ITEM_6: 'Umgås genom långa promenader eller meet-ups, konversationer utan större planer',
  INDEX_INTRODUCTION_CONTACT_ME_1:
    'Du är välkommen att kontakta mig på någon utan plattformarna ovan (Jag svarar inte utan ämne).',
  INDEX_INTRODUCTION_CONTACT_ME_2_1: 'Om du letar efter en',
  INDEX_INTRODUCTION_CONTACT_ME_2_2: 'överblick, ta en titt på resume sidan.',
  RESUME_SECTION_WORK_EXPERIENCE: 'Arbetslivserfarenhet',
  RESUME_SECTION_WORK_EXPERIENCE_1_TITLE: 'Full Stack Systemutvecklare / Utvecklare',
  RESUME_SECTION_WORK_EXPERIENCE_1_TEXT: `Min resa till Atlassian började på ett litet, men snabbt växande företag som kallades Riada Development AB.
  Vid tidpunkten var vi runt 10 utvecklare, men vi växte snabbt till det dubbla tillsammans med nya kontor, nya rutiner och en hel del större spännande projekt.
  
  Insight är resultatet utav dessa projekt, och är ett resultat av vad ett fantastiskt företag med tillgivna utvecklare kan åstakomma.
  Insight är en asset-management motor som är tätt integrerad mot Jira som ger dig en komplett överblick och kontroll över ditt företafs tillgångar och processer.
  Det täcker allt från komplexa relationer, automatiseringar, flöden, och grafer till automatiskt upptäckter utav nya resurser/tillgångar med hälp av externa verktyg vi tätt integrerat med.
  
  Under min tid så har jag fått jobba med en myriad av olika tekniker och miljöer.
  Från stora monoliter byggda med Java mot Atlassians SDKer runt Spring, Active Objects etc mot ett äldre men solit Soy/Jquery front-end (ES5 eran runt Internet Explorer 8).
  Till nya cloud first arkitekturer byggda med många små enskilda mikro-tjänster som kopplas samman med GRPC.
  Vi använde oss mycket utav Docker/Kubernetes och Amazon AWS för att leverera ut produkten till kund (Insight Cloud). På front-end sidan så använde vi oss också utav det senaste som Javascript/Typescript hade att erbjuda gällade syntax, functionalitet och ramverk.
  Mindville är sedan sommaren 2020 en del utav Atlassian, och kontoret i Sverige stängs i Januari 2022.   
  `,
  RESUME_SECTION_WORK_EXPERIENCE_2_TITLE: 'Utvecklare',
  RESUME_SECTION_WORK_EXPERIENCE_2_TEXT: `Shopello utveklar ett API inom e-handeln där vi driver trafik till ett flertal partners baserat på en "kostnad per klick" modell.
   Utöver att tillhandahålla APIer mot partners så finns det även ett större antal hemsidor utåt som underhålls.
   
  Under min tid på shopello så har vi gjort väldigt stora prestandaförbättringar inom plattformen och utökat dess funktionalitet, vilket låtit oss att lansera i flera nya länder och hantera mycket större volymer data och trafik.
  Utöver utvecklingen av plattformen så har mina uppdrag involverat partnersupport och sett till att partners feeds fungerat korrekt och att trafiken är verklig utan bottar.
  Positionen har haft en enormt växande roll för mig där jag har fått lära mig nya utvecklingskoncept och ramverk. Under min tid som anställd så tvingades bolagen gå ihop pga nedskärningar och SEO problem, där nedskrärningarna drabbade flertalet anställda inklusive mig.`,
  RESUME_SECTION_WORK_EXPERIENCE_3_TITLE: 'Junior Utvecklare',
  RESUME_SECTION_WORK_EXPERIENCE_3_TEXT: `Clinicbuddy jobbar inom hälso och sjukvården med att hantera bokningar, journaler, filer, betalningar och generering av PDF dokument.
  Mina huvudsakliga uppgifer har varit integrationer mot betlasystem/faktureringstjänster, externa system som hörseltest, import/konverting utav diverse data mellan olika databaser och programvaror som Lotusnotes samt att skriva script som generarade pdf doukment.
  `,
  RESUME_SECTION_WORK_EXPERIENCE_4_TITLE: 'Junior Developer',
  RESUME_SECTION_WORK_EXPERIENCE_4_TEXT: `Clinicbuddy works within the health services business to manage reservations, journals, payments and document PDF generations.
  My work here includes integrations against payment and bills services, external systems like hearing tests, data import and conversions between various databases and programs like Lotusnotes as well as scripts to generate PDF documents based on form data.
  `,
  RESUME_SECTION_WORK_EXPERIENCE_5_TITLE: 'IT Konsult',
  RESUME_SECTION_WORK_EXPERIENCE_5_TAG: 'Datorer och butiks-utrustning',
  RESUME_SECTION_WORK_EXPERIENCE_5_TEXT: `Tekniker åt Fujitsu Sweden AB.
  Utbyte/installation utav kassasystem/butiksutrustning nattetid.
  `,
  RESUME_SECTION_WORK_EXPERIENCE_6_TITLE: 'IT Consultant',
  RESUME_SECTION_WORK_EXPERIENCE_6_TAG: 'Dator-utrustning',
  RESUME_SECTION_WORK_EXPERIENCE_6_TEXT: `Tekniker åt Fujitsu Sweden AB.
  Utbyte/Refresh utav SEB dator-utrustning.
`,
  RESUME_SECTION_WORK_EXPERIENCE_7_TITLE: 'IT Consultant',
  RESUME_SECTION_WORK_EXPERIENCE_7_TAG: 'Dator-utrustning',
  RESUME_SECTION_WORK_EXPERIENCE_7_TEXT: `Tekniker åt Fujitsu Sweden AB.
  Utbyte/Refresh utav SEB dator-utrustning.
`,
  RESUME_SECTION_WORK_EXPERIENCE_8_TITLE: 'Webmaster',
  RESUME_SECTION_WORK_EXPERIENCE_8_TEXT: 'Vidareutveckling utav hemsida.',
  RESUME_SECTION_EDUCATION: 'Utbildning',
  RESUME_SECTION_EDUCATION_1_TITLE: 'Systemutvecklare 400YH',
  RESUME_SECTION_EDUCATION_1_TEXT: `En väldigt praktiskt "hands on" utbildning där ett stort fokus legat på att fullfölja projekt från andra utvecklare och talare.
  Ett flertal uppdrag från olika företag involverade att skriva backend-tjänster i Java med Jersey och Spring.
  `,
  RESUME_SECTION_EDUCATION_2_TITLE: 'Datorvetenskap 180HP',
  RESUME_SECTION_EDUCATION_2_OS_DESIGN: 'Operativsystems design och trådning',
  RESUME_SECTION_EDUCATION_2_TEXT: '2 års studier inom logiskt tänkade, algoritmer och design',
  RESUME_SECTION_EDUCATION_3_TITLE: 'Teknik, Programmering och Nätverk',
  RESUME_SECTION_EDUCATION_3_TEXT: 'Teknisk utbildning med fokus på programmering och nätverksteknik.',
  RESUME_SECTION_NON_PROFIT: 'Freetime Non-profit activities',
  RESUME_SECTION_NON_PROFIT_1_TITLE: 'Styrelsemedlem',
  RESUME_SECTION_NON_PROFIT_1_TEXT: `IX ar en förening som erbjuder en plats för teknik och datorintresserade att umgås och utveckla sina kunskaper. Foreningen har sedan Commodore Amiga dagarna främjat att lära ut programmering, teknik och systemkunskap under antingen Unga Forskare Stockholm's tak eller Proxxi's.`,
  RESUME_SECTION_NON_PROFIT_2_TITLE: 'Organisation / Nyckelbärare',
  RESUME_SECTION_NON_PROFIT_2_TEXT: `Proxxi är en lokalförening och mötesplats för ungdomar som erbjuder en mängd reguljära aktiviteter som annordnas utav olika föreningar.
Lokalen har haft regel-bundna aktiviteter som har erbjudit allt fran karaoke, filmkvällar, pyssel och kortspel/datorspel till mjukvaruutveckling och hardvarubyggande
På grund av ekonomiska skäl och rådande klimat så är föreningen tyvärr inte längre aktiv.
`,
  RESUME_SECTION_NON_PROFIT_3_TITLE: 'Lokal Nätverk och Server ansvarig',
  RESUME_SECTION_NON_PROFIT_3_TEXT: `JOTI (Jamboree on the Internet) är ett scout evenemang som sker i oktober varje år.
Alla världens scouter är då välkommna att via internet kommunicera med andra scouter från olika länder via IRC protokollet.
Festivalen firas utav Mälarscouterna med ett antal tävlingar och tunneringar i diverse spel och aktiviteter samtidigt som vi hjälper deltagarna att komma i kontakt med andra scouter.
Envetet brukar ha runt ett 60-tal datorer på plats sammankopplade med ett antal företags switchar kopplade mot en egenkonfigurerad linuxserver som hanterar tjänster och filtrerar/hanterar all nätverkstrafik.
Envetet har till största del sköts utav mig och en kompis och fram tills nu. Men i och med en överväldigande arbetsbörda, hårdvaruproblem samt brist på intresserade medarbetare så ar vi ej längre delaktiga.
`,
  PROJECTS_1_TITLE: 'Studernade utav online streaming, studio mjukvaror som OBS, ljudmixning och 3D modellering',
  PROJECTS_1_1_TEXT: `Twitch har med åretn gått ifrån en spelkultur till att lägga allt större fokus på personligheter och gemenskaper. Där "Bara Chatta" ofta ligger på #1 plats när det kommer till den populäraste kategorin med tittare.
Jag har personligen aldrig riktigt varit ett fan utav e-sport eller att titta på när andra spelar spel, så denna något drastiska ändring har öppnat upp mitt intresse för siten på stort.
Anledningarna till skiftet beror inte endast på tillgången och priset på allt mer sofistikerad hårdvara, men än viktigare, mjukvara.
Stora ändringar som skett är:    
`,
  PROJECTS_1_2_TEXT: `Professionella ljus och video upptagnings enheter du kan köpa billigt och enkelt.
Bra exempel här är RTX Voice och VoiceMeter, som använder AI hårdvara inuti grafikkort (hos nVidia) som ger dig kristall-klart ljud och ljud-mixning från en större mängd olika källor.
`,
  PROJECTS_1_3_TEXT: `Advancerad studio mjukvara som OBS+Streamlabs.
Dessa advancerade mjukvaror ger oss scener, scen-byten, komponenter, färg-nyckels genomskinlighet, färg korrektion, lager, bakgrunder, effekter, och det mesta annat en strömmare kan behöva. 
`,
  PROJECTS_1_4_TEXT: 'Real-tids 3D rörelse-inspelning och VR',
  PROJECTS_1_5_TEXT: `Denna del fångade mitt intresse mest utav allt.
Jag tittar ofta på folk som använder helkropps-realtids-3D inspelning (svenska är svårt med teknik :P) utav sina kroppar. Som antingen dansar till musik eller går omkring i virtuella världar och spelar spel eller bara umgås tillsammans.
"VTubners" har även blivigt ett stort intresse då du kan enkelt kan fånga rörelser, ansiktsuttryck, och även händer/fingrar med enkel hårdvara som webbkameror och eventuellt en Leap Motion för armar/fingrar.
Dessa fantastiska mjukvaror kombinerat med att tröskeln till 3D världen blivit allt mindre innebär att folk kan röra sig och uttrycka sig som vem eller vad de vill vara just för stunden online.
Det är en facinerande resa att ge sig in på och förstå hur allt hänger ihop, och hur en vanlig setup för en vtuber streamer burkar se ut. Mjukvara som 3D och 2D modeller.
Att få tag på 3D modeller är idag relativt lätt, det finns många billiga eller fria modeller att köpa online för att komma igång, bara tillbehör som kläder är en gigantisk markand (see Booth).
Du kan så klart även spendera större summor på att få en modell precis som du vill ha den från grunden genom att betala profissionella Blender artister,
men för det mesta humanoida karaktärer räcker det med att betala en artist på fiver som kan göra en VROID modell baserat på dina önskemål.
För nya artister så skulle jag starkt rekommendera att du tar en titt på Vroid först och och långsamt arbetar dig fram mot ditt mål, 3D butiker med olika föremål/tillbehör kan också vara en bra grund för att ge mer insikt.
För de som vill fokusera på sitt innehåll, inte har tid eller intresse, eller bara vill ha något professionellt gjort utan att lägga för mycket tid själv så rekomenderar jag att du tar en titt på fiver/etsy och tar fram ett koncept med en riktig artist.
De tenderar att vara väldigt billiga och du får mycket mer för priset än du kanske tror.
`,
  PROJECTS_2_TITLE: 'Mechwarrior Timberwolf 3D-utskrift',
  PROJECTS_2_1_TEXT: `Detta projekt tog runt en vecka att skriva ut, och krävde ett flertal iteration och modifieringar av en redan färdig modell som var tänkt att skrivas ut.
Jag är lite delad kring om jag verkligen vill färlägga den, eller om inte den vita rena looken endå har en viss charm till sig. Om jag någon gång målar den så bör jag öva på någonting lättare som inte är lika svårt att återskapa.
Mitt mål är att med tiden ha samtliga MechWarrior Mechs utskriva och presentabla på en hylla (det finns många chassin!), men det är en plan som ligger ganska långt in i framtiden för tillfället.
Jag vill tacka min bror`,
  PROJECTS_2_2_TEXT: `(3D/CAD artist) för denna fantastiska och väldigt speciella födelsedags-present.
Han söker för övrigt efter nya utmaningar om för de som är intresserade.`,
};

const getLang = (router: NextRouter) => {
  const { locale } = router;
  return locale === 'en' ? EN : SV;
};

export default getLang;
