import uuid from "uuid";
import pc from "../data/pictures/logo_pc.png";
import ps3 from "../data/pictures/logo_ps3.png";
import ps4 from "../data/pictures/logo_ps4.png";
import xbox360 from "../data/pictures/logo_xbox_360.png";
import xboxOne from "../data/pictures/logo_xbox_one.png";
import BField5image from "../data/pictures/battlefield-v-200x249.jpg";
import BField5imageLarge from "../data/pictures/battlefield-v-957x1200.jpg";
import BFront2image from "../data/pictures/star-wars-battlefront-2-200x249.jpg";
import BFront2imageLarge from "../data/pictures/star-wars-battlefront-2-1000x1246.jpg";
import Diablo3image from "../data/pictures/diablo-iii-ultimate-200x245.jpg";
import Diablo3imageLarge from "../data/pictures/diablo-iii-ultimate-653x800.jpg";
import Surge2image from "../data/pictures/the-surge-2-200x253.jpg";
import Surge2imageLarge from "../data/pictures/the-surge-2-566x715.jpg";
import DirtRally2 from "../data/pictures/dirt-rally-2-200x287.jpg";
import DirtRally2Large from "../data/pictures/dirt-rally-2-835x1200.jpg";
import FinalFantasy from "../data/pictures/final-fantasy-14-200x251.jpg";
import FinalFantasyLarge from "../data/pictures/final-fantasy-14-957x1200.jpg";
import MotoGP19 from "../data/pictures/motogp-19-200x283.jpg";
import MotoGP19Large from "../data/pictures/motogp-19-800x1131.jpg";
import SoulCalibur from "../data/pictures/soul-calibur-6-200x282.png";
import SoulCaliburLarge from "../data/pictures/soul-calibur-6-800x1128.jpg";
import PES2020 from "../data/pictures/efootball-pes-2020-200x257.jpg";
import PES2020Large from "../data/pictures/efootball-pes-2020-737x948.jpg";
import RedFaction from "../data/pictures/red-faction-guerrilla-200x250.jpg";
import RedFactionLarge from "../data/pictures/red-faction-guerrilla-900x1124.jpg";
import Wreckfest from "../data/pictures/wreckfest-200x252.jpg";
import WreckfestLarge from "../data/pictures/wreckfest-900x1134.jpg";
import Zombie from "../data/pictures/zombie-army-4-200x251.jpg";
import ZombieLarge from "../data/pictures/zombie-army-4-957x1200.jpg";

const gamesData = [
    {
        id: uuid.v4(),
        name: "Diablo 3",
        platform: ps4,
        image: Diablo3image,
        imageLarge: Diablo3imageLarge,
        price: 119.99,
        quantity: 11,
        description: "Ponad 13 milionów graczy stawiło czoła demonicznym hordom w Diablo III. Teraz twoja kolej, by " +
            "dołączyć do krucjaty i zmierzyć się z wrogami krain śmiertelników. " +
            "Wydanie Ultimate Evil Edition zawiera pełną wersję gry Diablo III oraz rozszerzenie Reaper of Souls. Szykuj" +
            " się – nadciąga coś naprawdę straszliwego. \n" +
            "Wezwij swoich sojuszników – Graj w pojedynkę lub skrzyknij znajomych i stwórz drużynę złożoną z nawet " +
            "czterech bohaterów — grających lokalnie na jednym ekranie albo w sieci, za pośrednictwem usługi PlayStation" +
            " Network lub Xbox Live.\n" +
            "Zostań legendarnym bohaterem – Wciel się w jednego z ostatnich obrońców ludzkości — krzyżowca, barbarzyńcę," +
            " szamana, mnicha, łowczynię demonów lub czarownicę — i rozwijaj swoją postać, zdobywając legendarne skarby " +
            "oraz opanowując nowe, niszczycielskie moce i zdolności.\n" +
            "Przerwij demoniczne oblężenie – Siej spustoszenie w szeregach sług zła i poznaj fabułę Diablo III na " +
            "przestrzeni wszystkich pięciu aktów; przemierzaj otwarty świat w trybie przygodowym lub poluj na pradawne demony i potwory, które czają się w mrocznych ostępach krain śmiertelników."
    },
    {
        id: uuid.v4(),
        name: "Dirt Rally 2.0",
        platform: pc,
        image: DirtRally2,
        imageLarge: DirtRally2Large,
        price: 134.90,
        quantity: 6,
        description: "W DiRT Rally 2.0 będziesz się ścigać na najpopularniejszych trasach rajdowych na całym świecie," +
            " siedząc za kierownicą najpotężniejszych samochodów off-roadowych, jakie kiedykolwiek powstały. Pamiętaj, " +
            "że nawet najmniejszy błąd może być twoim ostatnim. Współpracuj ze swoim zespołem i wspólnymi siłami" +
            " opracujcie najlepsze strategie rajdowe. Bierz udział w różnorodnych wydarzeniach i mistrzostwach, zarówno" +
            " w trybie kariery dla jednego gracza, jak i w trybie wieloosobowym. \n" +
            "Cechy gry: Ponad 50 najpotężniejszych samochodów offroadowych, jakie powstały – Ścigaj się na różnorodnych " +
            "trasach w historycznych i współczesnych samochodach rajdowych, takich jak: 1995 Subaru Impreza, VW Polo " +
            "GTI R5, Nissan Datsun 240z, Audi Quattro S1 E2 oraz AudiS1 EKS RX quattro.\n" +
            "6 autentycznych lokacji rajdowych – Podziwiaj malownicze krajobrazy Nowej Zelandii, Argentyny, Hiszpanii, " +
            "Polski, Australii oraz USA.\n" +
            "Poczuj dreszcz emocji – Poprawiony model jazdy, nawierzchnie oraz otoczenie gwarantują emocje rajdowe na " +
            "najwyższym poziomie.\n" +
            "Oficjalna gra FIA WORLD RALLYCROSS CHAMPIONSHIP – Ścigaj się w Barcelonie, Montalegre, Mettet, Lohéac " +
            "Bretanii, Trois-Rivieres, Holjes oraz na Silverstone w różnorodnych konkurencjach.\n" +
            "Rozwijaj swój zespół – Zbuduj własny zespół i pracuj nad nim. Wzbogacaj swój garaż o nowe samochody," +
            " zarządzaj ludźmi i stwórz własną aleję serwisową."
    },
    {
        id: uuid.v4(),
        name: "PES 2020",
        platform: xboxOne,
        image: PES2020,
        imageLarge: PES2020Large,
        price: 219.60,
        quantity: 16,
        description: "eFootball PES 2020 zapoczątkowuje nową dekadę wiodącej w branży symulacji piłki nożnej z odważną" +
            " obietnicą zrewolucjonizowania eFootballu i wprowadzenia tego sportu do globalnej publiczności. Seria PES " +
            "kontynuuje swoje dążenie do realizmu, wnosząc ze sobą kilka wpływowych zmian, które łączą każdą chwilę " +
            "zabawy z poczuciem całkowitej wolności i kontroli. Po zdobyciu wiedzy legendarnego pomocnika Andrésa Iniesty," +
            " najnowsza część serii została ukształtowana z nowym naciskiem na głębię rozgrywski i jej autentyczność." +
            " Przygotuj się na nowe umiejętności dryblingu i precyzyjnie dostrojoną fizykę piłki, które pozwolą Ci na " +
            "większą kontrolę nad grą niż kiedykolwiek wcześniej. Zajmij miejsce menedżera w całkowicie odnowionej Master" +
            " League i doświadcz wyjątkowej satysfakcji z organizowania oszałamiającego zwycięstwa zza kulis swojego " +
            "własnego klubu. Daj się porwać energii tłumu, walcząc o dominację w nowym trybie rywalizacji, Matchday." +
            " Wreszcie, spójrz na widoki i dźwięki boiska wykonane w niespotykanych dotąd szczegółach dzięki niezliczonym " +
            "ulepszeniom graficznym i dźwiękowym.\n"
    },
    {
        id: uuid.v4(),
        name: "Battlefield 5",
        platform: ps4,
        image: BField5image,
        imageLarge: BField5imageLarge,
        price: 249.39,
        quantity: 20,
        description: "Weź udział w największym konflikcie w historii w Battlefield™ V – " +
            "seria wraca do swoich korzeni dzięki zupełnie nowemu spojrzeniu na II wojnę światową.\n" +
            "Wraz ze swoim oddziałem weź udział w starciach wieloosobowych, w takich trybach jak ogromne Wielkie " +
            "Operacje i kooperacyjny tryb Wojsk Łączonych, lub poznaj dramatyczne historie rozgrywające się na tle " +
            "globalnej wojny w jednoosobowych opowieściach wojennych. Walcząc w niesamowitych, zaskakujących miejscach" +
            " na całym świecie, możesz cieszyć się największą i najbardziej wciągającą grą z serii Battlefield. \n"
    },
    {
        id: uuid.v4(),
        name: "Battlefront 2",
        platform: ps4,
        image: BFront2image,
        imageLarge: BFront2imageLarge,
        price: 175.29,
        quantity: 5,
        description: "Wyrusz w podróż do świata Star Wars™ w kolejnej odsłonie najpopularniejszej serii gier akcji Star Wars w HD. \n" +
            "\n" +
            "Dziesiątkuj szeregi wroga mieczem świetlnym w Bazie Starkiller. Jako pilot maszyny kroczącej AT-ST " +
            "przebijaj się przez gęstą dżunglę na Yavin 4, uczestnicząc w szturmie na rebeliancką bazę. Zajmij miejsce w" +
            " szyku myśliwców X-wing i weź udział w ataku na ogromny gwiezdny niszczyciel Najwyższego Porządku. Lub wciel" +
            " się w rolę Iden – członkinię elitarnej jednostki specjalnej, najnowszego bohatera uniwersum Star Wars – i " +
            "poznaj porywającą, pełną emocji opowieść, której fabuła obejmuje okres 30 lat."
    },
    {
        id: uuid.v4(),
        name: "Red Faction Guerrilla",
        platform: xboxOne,
        image: RedFaction,
        imageLarge: RedFactionLarge,
        price: 119.19,
        quantity: 13,
        description: "50 lat od wydarzeń z oryginalnej gry Red Faction, fabuła umożliwia graczom wcielenie się w rolę " +
            "powstańca i dołączenie do nowo powstałego ruchu Red Faction, walczącego z Earth Defence Force.\n" +
            "\n" +
            "Red Faction: Guerrilla to gra w otwartym świecie, która oferuje dynamiczną walkę i niczym nieskrępowaną " +
            "destrukcję otoczenia z wykorzystaniem zasad fizyki.\n" +
            "\n" +
            "W stosunku do oryginalnej gry Red Faction Guerrilla z 2009 roku zmianom zostały poddane następujące elementy: \n" +
            "\n" +
            "Całkowicie odświeżona grafika – przerobione tekstury i poprawiona jakość oprawy graficznej \n" +
            "Oświetlenie i dynamiczne cienie\n" +
            "Poprawione modele shaderów i efekty postprocessing\n" +
            "Dodane wsparcie dla rozdzielczości 4K "
    },
    {
        id: uuid.v4(),
        name: "Surge 2",
        platform: ps4,
        image: Surge2image,
        imageLarge: Surge2imageLarge,
        price: 234.79,
        quantity: 78,
        description: "Po drodze do Jericho Twój samolot zostaje strącony przez tajemniczą burzę i rozbija się na " +
            "przedmieściach. Po kilku tygodniach budzisz się w mieście w zrujnowanym więzieniu. Uzbrojeni żołnierze " +
            "ogłaszają stan wojenny, roboty szaleją po ulicach, a nad miastem ciąży ciemna, rosnąca nanoburza. " +
            "Próbując przetrwać, odkrywaj rozległe, zniszczone miasto, Jericho. Walcz z licznymi bezwzględnymi wrogami w" +
            " brutalnych, nieubłaganych starciach, odcinając i odrywając kończyny, by ukraść sprzęt, który uczyni Cię " +
            "silniejszym. Ta siła pozwoli ci zmierzyć się z przerażającymi, stanowiącymi wyzwanie wrogami czającymi się " +
            "w mieście. Większy arsenał broni, zbroi, umiejętności, implantów i dronów, dzięki którym budujesz swoją " +
            "postać, oraz większy, bardziej zróżnicowany i ambitny świat – The Surge 2 rzuca Ci wyzwanie, by przetrwać i" +
            " odkryć jego tajemnice. \n" +
            "Trudna, brutalna walka wręcz\n" +
            "Zabójczy wrogowie i ogromni bossowie\n" +
            "Odcinaj części ciała wrogów, by zebrać łupy\n" +
            "Bogaty rozwój postaci i możliwości personalizacji"
    },
    {
        id: uuid.v4(),
        name: "Final Fantasy XIV",
        platform: pc,
        image: FinalFantasy,
        imageLarge: FinalFantasyLarge,
        price: 118.19,
        quantity: 31,
        description: "Weź udział w kolejnej części sagi wysoko ocenianej gry MMO – FINAL FANTASY® XIV Online dzięki nowemu," +
            " epickiemu rozszerzeniu fabularnemu – SHADOWBRINGERS!Odkryj zapierające dech w piersiach, nieznane dotąd " +
            "lokacje; spotkaj przedstawicieli nowych ras, opanuj do perfekcji nowe profesje i walcz ramię w ramię z " +
            "wybitnymi postaciami dzięki nowemu systemowi Trust, kiedy wyruszysz w nową podróż jako Wojownik Ciemności!" +
            "Cechy gry FINAL FANTASY® XIV: SHADOWBRINGERS: \n" +
            "Nowe profesje\n" +
            "Nowe grywalne rasy\n" +
            "Maksymalny poziom podniesiony z 70 na 80\n" +
            "Podróż przez nowe, obszerne lokacje\n" +
            "Nowe plemiona bestii\n" +
            "Szereg nowych podziemi do eksploracji\n" +
            "Nowe, wymagające 8-osobowe rajdy\n" +
            "Podbijaj samodzielnie podziemia, mając u swojego boku wybitnych bohaterów, dzięki nowemu systemowi Trust\n" +
            "Przeżyj na nowo przygody z przeszłości z obecnym poziomem zaawansowania postaci oraz ekwipunkiem dzięki systemowi New Game+"
    },
    {
        id: uuid.v4(),
        name: "Wreckfest Deluxe Edition",
        platform: xboxOne,
        image: Wreckfest,
        imageLarge: WreckfestLarge,
        price: 239.49,
        quantity: 21,
        description: "Deluxe Edition zawiera Season Pass, 20 nowych samochodów, 20 nowych dekoracji na dach oraz mnóstwo" +
            " nowych opcji kustomizacji samochodów! \n" +
            "\n" +
            "Efektowna gra wyścigowa, opracowana przez twórców kultowej serii FlatOut i dwóch ostatnich odsłon niemniej" +
            " legendarnego Ridge Racera – fińskie studio Bugbear Entertainment.\n" +
            "\n" +
            "Wreckfest czerpie garściami z rozwiązań zastosowanych w popularnej serii FlatOut. W tej grze nie liczy się" +
            " wyłącznie prędkość, ponieważ na torach toczy się ostra walka pomijająca zasady fair play. Możemy przeszkadzać" +
            " rywalom, spychając ich pojazdy z trasy czy doprowadzając do kolizji, by ostatecznie całkowicie wyeliminować" +
            " ich z gry. System zniszczeń w wtjątkowo realistyczny sposób odwzorowuje zachowanie pojazdów. Prowadząc " +
            "uszkodzone auto, możemy odczuć problemy z układem sterowania, hamowaniem oraz pracą silnika. Tytuł oferuje" +
            " dwa podstawowe tryby rozgrywki: tryb kariery przeznaczony dla pojedynczego gracza oraz tryb wieloosobowy. " +
            "Solowa kariera sprowadza się do rywalizacji z S.I. w kolejnych wielkich zawodach podzielonych na pomniejsze " +
            "turnieje. Każdy wyścig w tym trybie to szansa na zdobycie punktów doświadczenia, odblokowania nowych części " +
            "lub nowych pojazdów. Zasady rozgrywki są podobne dla tradycyjnych gier wyścigowych, w których zwycięzcą jest" +
            " ten, kto pierwszy przekroczy linię mety. Wreckfest jednak nawet w tym trybie skupia się głównie na " +
            "przepychankach pomiędzy pojazdami, z których każdy może zostać wyeliminowany z wyścigu przez konkurencję." +
            " Na trasach możemy spodziewać się licznych niespodzianek w stylu niebezpiecznych skrzyżowań z natężonym " +
            "ruchem ulicznym."
    },
    {
        id: uuid.v4(),
        name: "MotoGP 19",
        platform: pc,
        image: MotoGP19,
        imageLarge: MotoGP19Large,
        price: 149.90,
        quantity: 11,
        description: "Seria MotoGP™ 19 kolejny raz celebruje pasję do sportów motorowych!\n" +
            "Oficjalna gra wideo z najpopularniejszych mistrzostw motocykli na świecie powraca z nowym pełnym " +
            "niespodzianek arsenałem!\n" +
            "\n" +
            "\n" +
            "OFICJALNA TREŚĆ 2019\n" +
            "Cała adrenalina sezonu 2019 w Twoich rękach!\n" +
            "Ścigaj się ze wszystkimi oficjalnymi zawodnikami MotoGP ™, Moto2 ™, Moto3 ™, Red Bull MotoGP ™ Rookies Cup " +
            "na 19 różnych torach.\n" +
            "\n" +
            "\n" +
            "HISTORYCZNI Jeźdźcy\n" +
            "Cała historia MotoGP ™ od 500 do ery nowowczesnej. Uzyskaj dostęp do trybu \"Wyzwania historyczne\" i " +
            "przeżyj najbardziej ekscytujące rywalizacje poprzez ataki czasowe i konkretne scenariusze, aby odtworzyć " +
            "momenty, które ukształtowały historię MotoGP ™.\n" +
            "- Ponad 50 legendarnych zawodników\n" +
            "- Ponad 35 motorów\n" +
            "- 3 dodatkowe historyczne tory"
    },
    {
        id: uuid.v4(),
        name: "Zombie Army 4 Dead War",
        platform: xboxOne,
        image: Zombie,
        imageLarge: ZombieLarge,
        price: 179.25,
        quantity: 2,
        description: "Hordy Hitlera powrócą po więcej w nowej, mrożącej krew w żyłach strzelaninie Zombie Army 4: Dead War!" +
            "Czekają na ciebie wstrętni okultystyczni wrogowie, epicki arsenał i wstrząsająca nowa kampania dla 1-4 graczy" +
            " dziejąca się w Europie z lat 40. XX wieku, w której twoim zadaniem będzie uratowanie ludzkości przed nieumarłym Armagedonem! \n" +
            "\n" +
            "Cechy gry: \n" +
            "Nowa, szokująca kampania – Kontynuuj alternatywną historię z Zombie Army Trilogy na nowych ogromnych poziomach" +
            " i odkryj złowieszczy plan, który zabierze cię do Włoch, wypełnionych trupami kanałów, Zombie Zoo i jeszcze dalej,\n" +
            "Nagradzany system strzelania – Doświadcz definiującą gatunek balistykę znaną z serii Sniper Elite i użyj jej" +
            " przeciwko wleczącym się hordom potępionych,\n" +
            "Usprawniona kamera pośmiertna – Oglądaj w obrzydliwie wspaniałym zwolnionym tempie, jak kule, bomby i inne" +
            " miażdżą kości i organy na rentgenie,\n" +
            "Epicki arsenał – Wykorzystaj moc ognia, błyskawicy i boskiej esencji, aby ulepszyć swoje bronie w warsztatach" +
            " i stworzyć nowe! Karabin szturmowy, który strzela błyskawicą? Pistolet z płonącym bagnetem? Wszystko jest możliwe " +
            "w ostatnim bastionie ludzkości,\n" +
            "Modyfikacje i rozwój – Wraz z progresem zbuduj pogromcę, który ci odpowiada! Zabijaj ze stylem, gdy odblokujesz" +
            " nowe stroje, emocje i kpiny dla swojej postaci."
    },
    {
        id: uuid.v4(),
        name: "Soul Calibur VI",
        platform: pc,
        image: SoulCalibur,
        imageLarge: SoulCaliburLarge,
        price: 89.49,
        quantity: 3,
        description: "SOULCALIBUR VI to najnowsza część pionierskiej serii bijatyk 3D opartej na walce bronią białą. " +
            "Rozgrywająca się w XVI wieku akcja SOULCALIBURA VI zabierze graczy w podróż, podczas której odkryją prawdy " +
            "kryjące się w wydarzeniach z oryginalnego SOULCALIBURA. W grze znajdzie się również zróżnicowana lista " +
            "nowych i powracających postaci z ich unikalnymi stylami walki i bronią, w tym podpory serii – Mitsurugi i Sophitia oraz goście, tacy jak Geralt z Rivii z serii Wiedźmin® czy GrØh. \n" +
            "\n" +
            "Cechy gry:\n" +
            "Oszałamiająca grafika stworzona przy użyciu silnika Unreal\n" +
            "Epicka historia o zmaganiach o dwa legendarne miecze\n" +
            "Nowa mechanika walki, która umożliwia szybkie reakcje na poczynania przeciwnika\n" +
            "Duża lista wojowników z różnym stylem walki, w tym Geralt – najsłynniejszy z wiedźminów"
    },
];

export default gamesData;
