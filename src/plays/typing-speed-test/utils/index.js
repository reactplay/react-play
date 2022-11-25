const words =
  "turkey till education agree reasonably accident organise mushroom technology concert train character familiar pig article babysitter create attract clearly position one fur pay few jug jam let cab jet run cut due new ice tin bag use act our silly depth judge grade smell check those short flute quick broad delay album argue mango bread shoot trick early gentle easily pirate yankee during before castle potato stress mobile rather enough locker tiring listen winner secret social jungle litter glasses butcher explore service anxious writing despite working burning stomach blogger cottage clothes compare contact defence thought flavour himself diploma wardrobe postpone sunshine electric beginner frequent freezing transfer practice continue charming designer ceremony passport aluminic disabled reporter abattoir boarding together condition waterfall efficient essential surfboard available overnight hitchhike different permanent vegetable confident professor president pronounce translate admission advertise colourful sparkling pedestrian profession atmosphere calculator footballer windscreen facilities definitely strawberry themselves sweatshirt electronic difficulty sunglasses laboratory bloodsport ingredient graduation toothbrush marvellous";

// Return array of 60 random words
export const generateText = () => {
  return words
    .toLowerCase()
    .split(" ")
    .sort(() => Math.random() - 0.5)
    .splice(0, 60);
};

// Return evaluation text based on input
export const getEvaluationText = (wpm) =>
  wpm >= 40 ? "Excellent ... !" : wpm >= 30 ? "Good Job ... !" : "Nice ... !";
