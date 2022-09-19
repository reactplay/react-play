let words =
  "North Gorgeous deposit withdrawal Cadillac BMW male deposit system online Hybrid redundant Tennessee neural across Bicycle Mouse gigantic Vermont override oh Account quantifying red victoriously Delaware Seaborgium Movies the Lats synthesizing park Blues Protactinium North atop feline pantsuit Toyota used incubate outshine nostrum bypass Response Principal Clothing Cotton bluetooth web female Response SCSI Senegal Card Volvo Koby male nectarine Brand up optical Industrial Scandium Erbium program program Cargo Account strain Hybrid pixel Berkshire East magenta withdrawal South SUV Clothing Southwest Cambridgeshire deprave Implementation Central Tenge Awesome Integration Underpass Steel distant Cordoba port Avon Niue Rolls Tuna monumental Technician academic Hybrid";

// Return array of 50 random words
export const generateWords = () => {
  return words
    .split(" ")
    .sort(() => Math.random() - 0.5)
    .splice(0, 50);
};
