const getStupidAnswers = (nb, power, max) => {
  switch (nb) {
    case 1:
      if (power > max) {
        return 'faut pas rever';
      }
      return `encore ${4 - nb} bagarreurs`;
    case 2:
      if (power > max) {
        return 'Baboum';
      }
      return `encore ${4 - nb} bagarreurs`;
    case 3:
      if (power > max) {
        return "Ah ouais t'as envie d'une grosse castagne";
      }
      return `encore ${4 - nb} bagarreur`;
    case 4:
      if (power > max) {
        return "oulah tu t'es emballé mon grand";
      }
      return "C'est parti pour la castagne !!!";
    default:
      return `ajoutes des bagarreurs`;
  }
};
export default getStupidAnswers;
