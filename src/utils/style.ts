export const getBeerItemColorClass = (ibu: number): string => {
  const digit = ibu.toString().charAt(0);

  switch (digit) {
    case "1":
      return "cardBg1";
    case "2":
      return "cardBg2";
    case "3":
      return "cardBg3";
    case "4":
      return "cardBg4";
    case "5":
      return "cardBg5";
    case "6":
      return "cardBg6";
    case "7":
      return "cardBg7";
    case "8":
      return "cardBg8";
    case "9":
      return "cardBg9";
    default:
      return "cardBg1";
  }
};
