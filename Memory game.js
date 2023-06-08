Manipular cartas:
----------------------------------------------------------------------
Embaralha e coloca ID de um array de cartas.


const cardImages = [
  { src: "./public/digimon png/agumon.PNG", matched: false },
  { src: "/public/digimon png/angewommon.PNG", matched: false },
  { src: "/public/digimon png/cannon.PNG", matched: false },
  { src: "/public/digimon png/gatommon.PNG", matched: false },
  { src: "/public/digimon png/magnadramon.PNG", matched: false },
  { src: "/public/digimon png/pulsemon.PNG", matched: false },
  { src: "/public/digimon png/veemon.jpg", matched: false },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);



  // embaralhar cartas
  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5);

   //  colocar ID em cada carta
    const setCardsID = shuffledCards.map((card) => {
      return { ...card, id: Math.random() };
    });

    setCards(setCardsID);
    setTurns(0);
  }



------------------------------------------------------------------------

css grid de imagens:






