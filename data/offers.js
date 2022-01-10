import { Icon } from '@iconify/react';
import { BiBuildingHouse } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { v4 as uuid } from 'uuid';

const iconSize = 40;

export const offersData = {
  title: 'Usługi',
  homeOffersShort: {
    heading: 'Czym się zajmujemy?',
    description:
      'W naszej ofercie znajduje się również sprzątanie poremontowe i pobudowlane. Wykonujemy indywidualne wyceny zgodnie z zapotrzebowaniem klienta. Dysponujemy odpowiednim zapleczem sprzętowym i logistycznym. Świadczymy usługi na terenie Lublina oraz całej Polski.',
  },
  offers: [
    {
      title: 'Sprzątanie obiektów przemysłowych',
      description:
        'Specjalizujemy się w porządkowaniu przestrzeni przemysłowych i hal magazynowych. Do usług z tego zakresu należą: mycie i odkurzanie hal, czyszczenie powierzchni szklanych, czyszczenie infrastruktury przemysłowej.',
      shortDescription:
        'Specjalizujemy się w porządkowaniu przestrzeni przemysłowych i hal magazynowych. Do usług z tego zakresu należą...',
      homeOfferDescription: 'Specjalizujemy się w porządkowaniu przestrzeni przemysłowych i hal magazynowych.',
      offerChecklistTitle: 'Do czyszczonych nawierzchni należą mi.:',
      offerChecklist: [
        'podłogi i ściany',
        'słupy i inne konstrukcje przemysłowe',
        'okna, przeszklenia i powierzchnie wystawowe',
        'taśmy i linie produkcyjne',
      ],
      icon: <Icon icon="cil:factory" width={iconSize} height={iconSize} />,
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie obiektów handlowo-usługowych',
      description:
        'Specjalizujemy się w utrzymywaniu czystości we wszelkiego rodzaju obiektach handlowych i usługowych. Powierzchnie komercyjne wymagają ciągłego utrzymania w porządku w związku z permanentną ekspozycją na klientów. Dotyczy to sklepów, galerii i pasaży ale również obiektów użyteczności publicznej jak kina, szkoły czy urzędy. Dbałość o porządek w tych miejscach oznacza  dbałość o komfort i zdrowie potencjalnych klientów. To wizytówka lokalu czy instytucji.',
      shortDescription:
        'Specjalizujemy się w utrzymywaniu czystości we wszelkiego rodzaju obiektach handlowych i usługowych. Powierzchnie komercyjne wymagają ciągłego utrzymania w porządku w związku z permanentną ekspozycją na klientów...',
      homeOfferDescription:
        'Specjalizujemy się w utrzymywaniu czystości we wszelkiego rodzaju obiektach handlowych i usługowych. Powierzchnie komercyjne wymagają ciągłego utrzymania w porządku w związku z permanentną ekspozycją na klientów.',
      icon: <Icon icon="ant-design:shopping-cart-outlined" width={iconSize} height={iconSize} />,
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie biur',
      description:
        'Specjalizujemy się w sprzątaniu powierzchni biurowych. Porządkowanie tego typu powierzchni to nie tylko utrzymywanie czystości na małej powierzchni wypełnionej infrastrukturą biurową gromadzącą kurz i inne drobinki zanieczyszczeń ale również zwolnienie pracowników z tego fakultatywnego obowiązku. Oszczędność zasobów i czasu. Połączenie które gwarantujemy.',
      shortDescription:
        'Specjalizujemy się w sprzątaniu powierzchni biurowych. Porządkowanie tego typu powierzchni to nie tylko utrzymywanie czystości na małej powierzchni wypełnionej infrastrukturą biurową gromadzącą kurz i inne drobinki zanieczyszczeń ale również...',
      homeOfferDescription:
        'Specjalizujemy się w sprzątaniu powierzchni biurowych. Porządkowanie tego typu powierzchni to nie tylko utrzymywanie czystości na małej powierzchni wypełnionej infrastrukturą biurową gromadzącą kurz i inne drobinki zanieczyszczeń ale również zwolnienie pracowników z tego fakultatywnego obowiązku.',
      icon: <HiOutlineOfficeBuilding size={iconSize} />,
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie obiektów mieszkaniowych',
      description:
        'Specjalizujemy się w utrzymywaniu porządku w budynkach wielorodzinnych administrowanych przez Wspólnoty Mieszkaniowe i Spółdzielnie. Jesteśmy świadomi jak ważną kwestią są dla mieszkańców tych budynków są czyste powierzchnie wspólne tj. klatki schodowe i przedsionki. Myjemy podłogi i ściany. Czyścimy i dezynfekujemy poręcze i klamki. Czyścimy wejścia do klatek, przeszklenia i szyby. Myjemy okna. Czyścimy parapety. Porządkujemy windy.',
      shortDescription:
        'Specjalizujemy się w utrzymywaniu porządku w budynkach wielorodzinnych administrowanych przez Wspólnoty Mieszkaniowe i Spółdzielnie...',
      homeOfferDescription:
        'Specjalizujemy się w utrzymywaniu porządku w budynkach wielorodzinnych administrowanych przez Wspólnoty Mieszkaniowe i Spółdzielnie. Jesteśmy świadomi jak ważną kwestią są dla mieszkańców tych budynków są czyste powierzchnie wspólne.',
      offerChecklistTitle: 'Oferta zawiera mi.:',
      offerChecklist: [
        'mycie klatek schodowych i przedsionków',
        'mycie ścian i podłóg',
        'czyszczenie i dezynfekcja poręczy i klamek',
        'czyszczenie wejść do klatek, przeszkleń i szyb',
        'mycie okien',
        'czyszczenie parapetów',
        'porządkowanie wind',
      ],
      icon: <BiBuildingHouse size={iconSize} />,
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie hoteli',
      description:
        'Specjalizujemy się w sprzątaniu powierzchni w hotelach i hostelach. Usługi porządkowe obejmują czyszczenie pokoi ale również lobby i wind. W zależności od charakteru pomieszczeń sprzątanie przebiega wg. modelu dostosowanego do ich powierzchni i zróżnicowania. Pozwala to na sprawne przygotowanie pomieszczeń dla gości hotelowych i szybsze ich oddanie.',
      shortDescription:
        'Specjalizujemy się w sprzątaniu powierzchni w hotelach i hostelach. Usługi porządkowe obejmują czyszczenie...',
      homeOfferDescription:
        'Specjalizujemy się w sprzątaniu powierzchni w hotelach i hostelach. Usługi porządkowe obejmują czyszczenie pokoi ale również lobby i wind. W zależności od charakteru pomieszczeń sprzątanie przebiega wg. modelu dostosowanego do ich powierzchni i zróżnicowania.',
      icon: <Icon icon="healthicons:clean-hands-outline" width={iconSize} height={iconSize} />,
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie poremontowe i pobudowlane',
      description:
        'Rozwijający się rynek budownictwa w Polsce powoduje powstawanie wielu nowych obiektów wymagających sprawnego przygotowania do odbioru. Nieodłącznym elementem tego procesu jest doprowadzenie do czystości wszystkich pomieszczeń. Zapewnimy kompleksowe sprzątanie wszelkich powierzchni poremontowych i pobudowlanych. Znacząco przyspieszamy zakończenie procesu inwestycyjnego. To element, bez którego żaden budynek nie zostanie odebrany przez Inwestora pomimo wykonania innych niezbędnych czynności. Oferujemy sprzątanie poremontowe i pobudowlane we wszystkich kategoriach obiektów objętych pozostałym zakresem oferty.',
      shortDescription:
        'Rozwijający się rynek budownictwa w Polsce powoduje powstawanie wielu nowych obiektów wymagających sprawnego przygotowania do odbioru. Nieodłącznym elementem tego procesu jest doprowadzenie do...',
      homeOfferDescription:
        'Zapewnimy kompleksowe sprzątanie wszelkich powierzchni poremontowych i pobudowlanych. Znacząco przyspieszamy zakończenie procesu inwestycyjnego. Oferujemy sprzątanie poremontowe i pobudowlane we wszystkich kategoriach obiektów objętych pozostałym zakresem oferty.',
      icon: <Icon icon="carbon:clean" width={iconSize} height={iconSize} />,
      uuid: uuid(),
    },
  ],
};

export const faq = {
  title: 'Poznaj naszą ofertę',
  description:
    'Wiele osób zadaje pytania związane z naszą działalnością, część z nich zebraliśmy w formie krótkiego FAQ.',
  questions: [
    // todo: rewrite faq section
    {
      question: 'Ile kosztują Wasze usługi?',
      answer:
        'Wiele czynników wpływa na cenę końcową naszych usług. Dla każdego naszego klienta sporządzamy wycenę w oparciu o informacje na temat warunków pracy, częstotliwości wykonywanych usług, czy też technologii jakie powinny być wykorzystane przy wykonaniu zlecenia.',
    },
    {
      question: 'Czy możliwa jest stała współpraca?',
      answer:
        'Tak! Jak najbardziej przewidujemy taką formę współpracy, ze względu na wygodę i oszczędność czasu, a klienci za spokój i pewność, że wszystko będzie wykonane solidnie i na czas.',
    },
    {
      question: 'Co, jeśli zajdzie konieczność wykonania dodatkowego zadania?',
      answer:
        'Przewidujemy taką sytuację. W przypadku stałych zleceń pracujemy według ustalonego harmonogramu i zakresu prac, ale jeśli w wyniku nieprzewidzianych okoliczności zajdzie potrzeba wykonania ponadprogramowego zadania, to zawsze jesteśmy do dyspozycji i dla stałych klientów mamy korzystne warunki.',
    },
    {
      question: 'Gdzie można skorzystać z waszych usług?',
      answer:
        'Z racji na to, że siedzibę posiadamy w Lublinie to właśnie tam mamy największą liczbę zleceń. Jednak jesteśmy otwarci na współpracę w innych lokalizacjach.',
    },
  ],
};
