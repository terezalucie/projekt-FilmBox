const filmy = [
	{
		id: 'pelisky',
		nazev: 'Pelíšky',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/165/059/165059101_56d52a.jpg',
			sirka: 663,
			vyska: 909,
		},
		ochutnavka: 'České drama z období 1968.',
		popis:
			'A je tu zpět jedna z nejúspěšnějších českých filmových komedií od renomovaných tvůrců - režiséra J. Hřebejka a scenáristy P. Jarchovského s řadou skvělých herců. Vraťme se tedy s oblíbenými postavami k rodinným rituálům, láskám a trapasům odehrávajícím se na sklonku šedesátých let minulého století v jedné pražské čtvrti. Jemná poetika a humorná nadsázka jsou charakteristické pro vyprávění životních osudů tří generací mužů a žen ve zvláštním období našich dějin v roce 1968… V jedné dvoupatrové vile tu žijí dvě rodiny - Šebkovi a Krausovi. Otec Šebek (M. Donutil), prostoduchý, ale dobrácký důstojník z povolání, je zastáncem panujícího režimu a stejně vehementně obhajuje i vlastní neomylnost v roli hlavy rodiny. Elegantní otec Kraus (J. Kodet), bývalý odbojář s trpkou válečnou zkušeností, je naopak zarytým opozičníkem. Také on je přesvědčený o tom, že má za všech okolností pravdu - není proto divu, že se tihle dva nemají zrovna v lásce. Jejich děti - gymnazista Michal (M. Beran) a jeho spolužačka Jindřiška (K. Nováková) - spolu vycházejí docela dobře. I když Michal by byl rád, kdyby ho jeho sousedka brala trochu víc na vědomí. Ta má ale oči pro jiného. Nezbývá mu tedy nic jiného, než aby smutně přihlížel, jak mu jeho první milostné body krade spolužák Elien (O. Brousek). U Šebků a Krausů se zatím střídají rodinné návštěvy, ve vší obřadnosti se tu slaví Vánoce, svatba i nečekaný, bolestný pohřeb. Do zabydlených domácností vtrhnou i některé novodobé vymoženosti v podobě umělohmotných lžiček, nerozbitných sklenic i podivných her pro statečné pionýry. Mládež zatím pokukuje po lákadlech světa kapitalismu a snaží se žít svůj vlastní, na rodičovských autoritách a "velké" historii nezávislý život. V soukromí rodinných pelíšků se tak čas od času odehrají malá dramata názorů a vztahů, která se v paměti jejich účastníků otisknou už nejspíš navždy… (csfd.cz, Česká televize)',
		premiera: '2019-04-08',
	},
	{
		id: 'promlceno',
		nazev: 'Promlčeno',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/164/987/164987945_c36f6f.jpg',
			sirka: 420,
			vyska: 595,
		},
		ochutnavka: 'Český krimi thriller s Karlem Rodenem.',
		popis:
			'Šokující živé vysílaní, které během chvíle změní životy několika nevinných lidí. Radek (Karel Roden) se po téměř dvaceti letech nečekaně vrací do svého rodného města, aby zde nalezl jistou mladou ženu a jednou provždy se vyrovnal se svou minulostí. V pátrání po neznámé ženě mu pomáhá Eva, ambiciózní rozhlasová moderátorka, která jeho příběh dostane do své živě vysílané noční show. Chtěla mít ve vysílání senzační událost, ale k jejímu zděšení a ke zděšení všech posluchačů začne na povrch vyplouvat něco, s čím nikdo nepočítal. Svůj plán připravoval Radek několik let a během jeho vyprávění je do pochmurného příběhu vtažena nejen ona sama, ale i pražská kriminálka a další aktéři dlouho zapomenutých událostí. Začíná napínavý boj o čas a o spravedlnost. Opravdu už je vše nenávratně promlčeno? (csfd.cz, Bontonfilm)',
		premiera: '2022-04-28',
	},
	{
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
			sirka: 420,
			vyska: 594,
		},
		ochutnavka: 'Romantické Sci-Fi z blízké budoucnosti',
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '2013-12-18',
	},
	{
		id: 'rrrrrrr',
		nazev: 'RRRrrrr!!!',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/162/393/162393560_2aca32.jpg',
			sirka: 663,
			vyska: 919,
		},
		ochutnavka: 'Francouzská komedie.',
		popis:
			'Pred 35 000 rokmi v časoch, kedy bol boj o oheň už dávno vybojovaný, prišiel na rad šampón, kvôli ktorému bol spáchaný prvý zločin v histórii ľudstva. Dva praveké kmene, Špinavovlasých a Čistovlasých žijú v harmónii a mieri až do chvíle, keď si Špinavovlasí uvedomia, že sa od susedného kmeňa líšia... Čistotou vlasov. Ale tajnú receptúru na peniacu zmes majú iba Čistovlasí a tí sa o ňu nechcú podeliť... Čistovlasí až doteraz žili pokojný, šťastný a čistý život. Nikoho z nich nenapadlo, že by im mohol niekto závidieť ich krásne čisté vlasy. Dokonca ani špinavý a smradľavý susedný kmeň Špinavovlasých. Ale v jednu noc sa to stalo. Po prvý raz v histórii ľudstva bol spáchaný zločin. Človek zabil človeka... Čo bolo vlastne jeho motívom? Kto vyrieši tento záhadný rébus? Čo ak je táto vrrrrražda iba začiatkom hrôzostrašnej série? Všetky tieto otázky začínajú riešiť prrrrehistorickí vyšetrovatelia. Začína sa prrrraveká špionáž a s ňou prichádza aj prvý vyšetrovaný zločin v dejinách ľudskej spoločnosti. Zažijete prvé vypočúvania, sledovania a podozrievania. V bláznivej komédii režiséra Chabata vstúpite do prrrrehistorickej doby, kedy bola platená starostlivosť o deti nutnosťou, profesionálny volejbal zábavou a sledovanie nástenných malieb ako predchodcov televízie samozrejmosťou. Nezľaknite sa hrôzostrašných zvukov vychádzajúcich z jaskýň. Podmienky základných ľudských potrieb, boli pred 35 000 rokmi nedokonalé. (csfd.cz, oficiální text distributora)',
		premiera: '2004-09-23',
	},
	{
		id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Česká komedie.',
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '2019-11-19',
	},
	{
		id: 'kimi',
		nazev: 'KIMI',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/002/166002844_2e67c1.jpg',
			sirka: 420,
			vyska: 622,
		},
		ochutnavka: 'Americký thriller o IT pracovnici s agorafobií.',
		popis:
			'Pracovnice IT oddělení trpící agorafobií najde nahrávku násilného trestného činu a nahlásí ji svým nadřízeným. Uvědomuje si však, že bude muset opustit svůj byt, aby mohl být zločin vyšetřen. (csfd.cz, HBO Max)',
		premiera: '2022-02-10',
	},
	{
		id: 'petrolejove-lampy',
		nazev: 'Petrolejové lampy',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/163/486/163486952_22889f.jpg',
			sirka: 663,
			vyska: 937,
		},
		ochutnavka: 'Sugestivní filmové drama podle románu Jaroslava Havlíčka.',
		popis:
			'Sugestivní filmové drama Petrolejové lampy natočil Juraj Herz podle stejnojmenného románu Jaroslava Havlíčka. Vypráví v něm tragický příběh stárnoucí dívky Štěpy, žijící na přelomu století v dusném prostředí českého maloměsta, v ovzduší nepochopení a předstíraných citů, přetvářky a falše. Štěpě jsou neustále matkou vnucováni adepti na ženění, kteří ovšem musejí pocházet z téhož okruhu jako ona. Štěpa je však jiná než ostatní dívky. Jakoby zasažena duchem emancipace vyslouží si pověst dívky volných mravů a ta přirozeně nápadníky z řad městské honorace odrazuje. Než by se stala starou pannou, provdá se za bratrance, zkrachovalého důstojníka. V den svatby ale ještě netuší, jaká strašlivá nemoc pronásleduje jejího ženicha... Pečlivě rekonstruované období secese v sobě tají osudové lidské trápení: stárnoucí dívka z rodiny maloměstské honorace se dočká svého štěstí, když se provdá na pohledného důstojníka. Netuší ovšem, že muž trpí zhoubnou pohlavní chorobu - s marnou obětavostí pak o něho pečuje, vystavena zlomyslnému posměchu svého okolí. Vynikající, stále sugestivní snímek Juraje Herze se opírá o procítěné, jemně odstíněné herecké výkony Ivy Janžurové a Petra Čepka. (csfd.cz, oficiální text distributora)',
		premiera: '1971-10-01',
	},
	{
		id: 'krakonosovo-tajemstvi',
		nazev: 'Krakonošovo tajemství',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/933/166933672_58ebbc.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Česká vánoční pohádka z Krkonoš.',
		popis:
			'Na zámek v podhůří Krkonoš přijíždí jeho nový majitel Štěpán se svojí snoubenkou, krásnou komtesou Blankou, a mladším bratrem Adamem. Cestou kočár nešťastně srazí kolemjdoucí dívku, Adam jí pomůže a ona se do něj zamiluje. Na zámku Adam objeví starou vlašskou knihu, která by měla obsahovat cestu k pokladům. Tajemné značky vlašské knihy však nedokáže vyluštit ani národopisec Jiráček, který v kraji sbírá pověsti a nevychází z údivu nad tím, že zdejší lidé stále věří v Krakonoše. Na zámku se objeví záhadný cizinec a nabídne Štěpánovi, že jej k pokladu za určitých podmínek dovede. Výprava do hor může začít. Naplní se Liduščina láska k Adamovi? Jakou záhadu skrývá starý obraz na zámku Hůrka a co strašlivého se v horách kdysi odehrálo? A kdo je vlastně Krakonoš a jaké je jeho největší tajemství? (csfd.cz, Česká televize)',
		premiera: '2022-12-24',
	},
	{
		id: 'avatar',
		nazev: 'Avatar',
		plakat: {
			url: 'images/avatar1.jpeg',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Americké sci-fi o střetu pozemšťanů a domorodců.',
		popis:
			'Avatar před námi otevírá neuvěřitelný svět za hranicemi naší fantazie, svět střetu dvou naprosto odlišných civilizací. Nově objevená vzdálená planeta Pandora je mírumilovné místo s obyvatelstvem - Na’vi, žijícím v souladu s divukrásnou vegetací planety. Posádka vyslaná ze Země na své průzkumné misi objeví na Pandoře velmi cenný minerál, který by měl na Zemi nevyčíslitelnou hodnotu. Pobyt na Pandoře je ovšem pro člověka možný teprve po vytvoření jeho genetického dvojníka, hybrida Avataru, který může být ovládán psychikou oddělenou od lidského těla a fyzicky odpovídá původnímu obyvatelstvu Pandory, které má fluorescentní modrou kůži a dosahuje 3m výšky. Na tuto náročnou misi je vybrán mezi jinými také Jake Sully (Sam Worthington), bývalý námořník, který byl při jedné ze svých předešlých misí paralyzován od pasu dolů. A právě šance opět chodit přiměla Jakea, aby se do programu Avatar přihlásil.Průzkumná mise je vyslána a po přistání na Pandoře je zcela ohromena úžasnou rozmanitostí místní vegetace. Stromy dosahují výšky mrakodrapů a světélkující prales je plný nádherných tvorů, které jste nikdy neviděli, ale také hrozných prehistorických predátorů. To je jen zrnko překvapení, které posádku čeká. I když se zdá, že po počáteční nedůvěře lidí Na’vi se posádce podařilo adaptovat a také získat prostor pro diplomatickou misi, pandořané se rozhodně nehodlají nechat kolonizovat a dojde ke tvrdému střetu. Jake, který se postupně sblížil s místním obyvatelstvem, a především s místní princeznou Neytiri, stojí před rozhodnutím, za koho bojovat ve finální bitvě, která má rozhodnout o osudu a vývoji celého světa.(csfd.cz, oficiální text distributora)', 
		premiera: '2009-12-10',
	},
]

// ZADÁNÍ 5 
const nazevFilmu = document.querySelector(".card-title")
const popisFilmu = document.querySelector(".card-text")
const plakatFilmu = document.querySelector("img")

const filmId = window.location.hash.slice(1)
const film = filmy.find((movie) => movie.id === filmId)

nazevFilmu.textContent = `${film.nazev}`
popisFilmu.textContent = `${film.popis}`
plakatFilmu.src = `${film.plakat.url}`
// ZADÁNÍ 5 

// ZADÁNÍ 6
const premiera = document.querySelector("#premiera")

let dnes = dayjs()
let premieraFilmu = dayjs(film.premiera) 

let zbyvajiciCas = premieraFilmu.diff(dayjs(), "days")
let ubehlyCas = dayjs().diff(premieraFilmu, "days")

if(dnes.isBefore(premieraFilmu)) {

	if (zbyvajiciCas === 1){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bude za ${zbyvajiciCas} den.`
	} else if(zbyvajiciCas > 1 && zbyvajiciCas <= 4){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bude za ${zbyvajiciCas} dny.`
	} else if(zbyvajiciCas >= 5 && zbyvajiciCas <= 364){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bude za ${zbyvajiciCas} dní.`
	}

} else if(zbyvajiciCas === 0){

	 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což je dnes.`
	
} else if(dnes.isAfter(premieraFilmu)){
	
	if (ubehlyCas === 1){
		premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před 1 dnem.`
	}else if (ubehlyCas > 1 && ubehlyCas <= 364 ){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${ubehlyCas} dny.`
	}else if (ubehlyCas === 365 ){
		premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${Math.floor(ubehlyCas / 365)} rokem.`
	}else if(ubehlyCas === 366){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${Math.floor(ubehlyCas / 365)} rokem a ${ubehlyCas % 365} dnem.`
	} else if(ubehlyCas > 366 && ubehlyCas < 730){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${Math.floor(ubehlyCas / 365)} rokem a ${ubehlyCas % 365} dny.`
	} else if(ubehlyCas % 365 === 0 && ubehlyCas > 366){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${Math.floor(ubehlyCas / 365)} lety.`
	}else if(ubehlyCas % 365 === 1 && ubehlyCas > 730){
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${Math.floor(ubehlyCas / 365)} lety a ${ubehlyCas % 365} dnem.`
	} else {
		 premiera.innerHTML = `Premiéra <strong>${premieraFilmu.format("D.M.YYYY")}</strong>, což bylo před ${Math.floor(ubehlyCas / 365)} lety a ${ubehlyCas % 365} dny.`
		 
	}
}
// ZADÁNÍ 6

// ZADÁNÍ 7
const elStars = document.querySelectorAll(".fa-star")

const stars = (number) => {

		if (number === 1){
			elStars[0].classList.remove("far")
			elStars[0].classList.add("fas")

			elStars[1].classList.add("far")
			elStars[2].classList.add("far")
			elStars[3].classList.add("far")
			elStars[4].classList.add("far")
			elStars[1].classList.remove("fas")
			elStars[2].classList.remove("fas")
			elStars[3].classList.remove("fas")
			elStars[4].classList.remove("fas")

		} else if(number === 2){
			elStars[0].classList.remove("far")
			elStars[1].classList.remove("far")
			elStars[0].classList.add("fas")
			elStars[1].classList.add("fas")
			
			elStars[2].classList.add("far")
			elStars[3].classList.add("far")
			elStars[4].classList.add("far")
			elStars[2].classList.remove("fas")
			elStars[3].classList.remove("fas")
			elStars[4].classList.remove("fas")
		} else if(number === 3){
			elStars[0].classList.remove("far")
			elStars[1].classList.remove("far")
			elStars[2].classList.remove("far")
			elStars[0].classList.add("fas")
			elStars[1].classList.add("fas")
			elStars[2].classList.add("fas")
			
			
			elStars[3].classList.add("far")
			elStars[4].classList.add("far")
			elStars[3].classList.remove("fas")
			elStars[4].classList.remove("fas")
		}else if(number === 4){
			elStars[0].classList.remove("far")
			elStars[1].classList.remove("far")
			elStars[2].classList.remove("far")
			elStars[3].classList.remove("far")
			elStars[0].classList.add("fas")
			elStars[1].classList.add("fas")
			elStars[2].classList.add("fas")
			elStars[3].classList.add("fas")

			elStars[4].classList.add("far")
			elStars[4].classList.remove("fas")
		} else if(number === 5){
			elStars[0].classList.remove("far")
			elStars[1].classList.remove("far")
			elStars[2].classList.remove("far")
			elStars[3].classList.remove("far")
			elStars[4].classList.remove("far")
			elStars[0].classList.add("fas")
			elStars[1].classList.add("fas")
			elStars[2].classList.add("fas")
			elStars[3].classList.add("fas")
			elStars[4].classList.add("fas")
			
		}
}

let klik 
elStars.forEach((star) => {
	star.addEventListener("click", (event) => {
		klik = Number(event.target.textContent)
		stars(klik)
	})
})

elStars.forEach((star) => {
	star.addEventListener("mouseenter", (event) => {
		stars(Number(event.target.textContent))
	})
})

elStars.forEach((star) => {
	star.addEventListener("mouseleave", () => {
		stars(klik)
	})
})
// ZADÁNÍ 7

// ZADÁNÍ 8
const noteForm = document.querySelector("#note-form")
const messageInput = document.querySelector("#message-input")
const checkbox = document.querySelector("#terms-checkbox")

noteForm.addEventListener("submit", (event) => {
	event.preventDefault()
	if(messageInput.value === ""){
		messageInput.classList.add("is-invalid")
		messageInput.focus()
	} else if(checkbox.checked === false){
		checkbox.classList.add("is-invalid")
		checkbox.focus()
	} else {
		noteForm.innerHTML = `<p class="card-text">${messageInput.value}</p>`
	}

})
// ZADÁNÍ 8

// ZADÁNÍ 9

	// PŘEHRÁVAČ
const prehravac = document.querySelector("#prehravac")
const video = document.querySelector("video")
const btnPause = document.querySelector(".pause")
const btnPlay = document.querySelector(".play")


btnPlay.addEventListener("click", () => {
	video.play()

})

video.addEventListener("playing", () => {
	prehravac.classList.add("playing")
}) 


btnPause.addEventListener("click", () => {
	video.pause()	
})

video.addEventListener("pause", () => {
	prehravac.classList.remove("playing")
})
	// PŘEHRÁVAČ

	// ČASOVAČ V PŘEHRÁVAČI 
const aktualniCas = document.querySelector(".current-time");

video.addEventListener("timeupdate", () => {
    let sekundy = Math.ceil(video.currentTime)
    let minuty = Math.floor(sekundy / 60)
    sekundy = sekundy % 60

    aktualniCas.textContent = `${String(minuty).padStart(2, "0")}:${String(sekundy).padStart(2, "0")}`
	
})
	// ČASOVAČ V PŘEHRÁVAČI 

	// BONUS
		// POZASTAVENÍ PŘEHRÁVÁNÍ
document.addEventListener("keyup", (event) => {
	if (event.code === "Space" && event.target.tagName !== 'TEXTAREA' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') {
		if (video.paused) {
			video.play()
		} else {
			video.pause()
		}
	}
})
		// POZASTAVENÍ PŘEHRÁVÁNÍ

		// SKRYTÍ OVLÁDACÍHO PANELU

const playerControls = document.querySelector(".player-controls")
let timer

const casovac = () => {
	clearTimeout(timer)
	timer = setTimeout(() => {
		playerControls.classList.add("hidden")
	}, 3000)
}

document.addEventListener("mousemove", () => {
	playerControls.classList.remove("hidden")
	casovac()
})
document.addEventListener("keypress", () => {
	playerControls.classList.remove("hidden")
	casovac()
})
		// SKRYTÍ OVLÁDACÍHO PANELU
	// BONUS
// ZADÁNÍ 9


/* 
SLOVNÍ ŘEŠENÍ PRO ZADÁNÍ 5 - 9:

5.	1. Do odkazu za href jsem přidala odkazovanou stránku, # a id.
	2. Do proměnné filmId jsem uložila vlastnost, která vytáhne id, které budeme chtít zobrazit.
	3. Pomocí metody find, která projde pole filmy a jejich id a najde to, které se shoduje s id uloženým v filmId.
	4. Pomocí textContentu jsem vypsala požadované informace.

6. 	1. Připojila jsem knihovnu s dayjs
	2. Vytvořila jsem si proměnné, které obsahují potřebné data (aktuální den, datum s premiérou, která se vezme z pole, a potom odečet dnešního dne od premiéry pomocí metody diff).
	3. Vytvořila jsem podmínku, která první zkontroluje, jestli den  - před, v den premiéry a anebo po premiéře. Na základě toho, kolik času zbývá anebo uplynulo se vypíše do stránky datum. Podmínka má za úkol správně skloňovat všechny možnosti.

7.	1. Vybrala jsem si všechny elementy s třídou .fa-star a uložila do proměnné elStars.
	2. Vytvořila jsem funkci, která bude podle zadaného argumentu (číslo) zabarvovat určený počet hvězdiček.
	3. Vytvořila jsem ve funkci podmínku, která k jednotlivým prvkům přidává a odebírá třídy, podle zadaného čísla.
	4. Vytvořila jsem proměnnou klik, která v průběhu kódu do sebe uloží textContent ze zakliknutého prvku.
	5. Třikrát na pole prvků dávám forEach a třikrát na prvek star vkládám posluchače událostí pouze s odlišným eventem.
	6. Pomocí event.target.textContent zjišťuji číslo, na které bylo kliknuto a převádím ho na číslo. Tuto hodnotu vkládám jako argument do funkce.

8.	1. Vybírám si elementy, se kterými se bude pracovat.
	2. Na formulář přidávám posluchač událostí s eventem submit. Dokud se nesplní podmínky formulář nepůjde odeslat, to umožňuje event.preventDefault.
	3. Podmínka kontroluje, že uživatel vůbec zadal nějaký text do messageInput, pokud ne přidá třídu a zaměří textové pole.
	4. Poté kontroluje, zda byl zaškrtnut checkbox, jestli ne opět přidá třídu a zaměří element.
	5. Poté co jsou podmínky splněné, se vezme text z messageInput a je po odeslání nahrazen ve formuláři.

9.	2.
		1. Vybrala jsem si požadované elementy a uložila.
		2. Na elementy je přidala posluchače událostí, který podle typu událostí spouští anebo pozastavuje video a přidává třídu playing.
	
	3.
		1. Vybrala jsem element pro časovač v přehrávači.
		2. Na element video jsem dala posluchač událostí s eventem timeupdate, který bude zaznamenávat aktuální čas videa v reálném čase.
		3. Do proměnné sekundy jsem uložila hodnotu z vlastnosti currentTime z videa a tu jsem zaokrouhlila nahoru. Zároveň sekundy jsou děleny každou sekundu podílem.
		4. Minuty jsem zaokrouhlila dolů, tak aby se zaspalo vždy až celé číslo.
		5. Čas jsem vypsala na požadované místo. Doplnila jsem nuly a udělala z čísla string.

	4.
	Na document jsem dala posluchač událostí s eventem keyup. Dokument bude sledovat, zda byl stisknut mezerník. Pokud ano, tak pozoruje, jestli je video vypnuto, pokud je spustí ho, pokud ne zastaví ho.

	5. 
		1. Vybrala jsem element, na který se bude přidávat třída hidden.
		2. Proměnná timer bude uchovávat informace o spuštění anebo vyčištění časovače mimo funkci.
		3. Ve funkci časovač se nejprve časovač resetuje. Potom se časovač přidá třídu hidden a to za 3 sekundy.
		4. Na document jsem přidala posluchač události s pohnutím myši a se stisknutím klávesnice. Po nastání události se odebere třída hidden a pak se spustí funkce časovač.
*/