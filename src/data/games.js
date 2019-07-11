import uuid from "uuid";
import BField5image from "../data/pictures/battlefield-v-200x249.jpg";
import BField5imageLarge from "../data/pictures/battlefield-v-957x1200.jpg";
import BFront2image from "../data/pictures/star-wars-battlefront-2-200x249.jpg";
import BFront2imageLarge from "../data/pictures/star-wars-battlefront-2-1000x1246.jpg";
import Diablo3image from "../data/pictures/diablo-iii-ultimate-200x245.jpg";
import Diablo3imageLarge from "../data/pictures/diablo-iii-ultimate-653x800.jpg";
import Surge2image from "../data/pictures/the-surge-2-200x253.jpg";
import Surge2imageLarge from "../data/pictures/the-surge-2-566x715.jpg";

const gamesData = [
    {
        id: uuid.v4(),
        name: "Battlefield 5",
        platform: "PS4",
        image: BField5image,
        imageLarge: BField5imageLarge,
        price: 249,
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
        platform: "PS4",
        image: BFront2image,
        imageLarge: BFront2imageLarge,
        price: 179,
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
        name: "Diablo 3",
        platform: "PS4",
        image: Diablo3image,
        imageLarge: Diablo3imageLarge,
        price: 119,
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
        name: "Surge 2",
        platform: "PS4",
        image: Surge2image,
        imageLarge: Surge2imageLarge,
        price: 239,
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
];

export default gamesData;
