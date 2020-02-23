export const translateDayNameToEnglish = dayName => {
  const dayNameLowercase = dayName.toLowerCase();
  let dayNameTranslated = "";

  switch (dayNameLowercase) {
    case "lunes":
      dayNameTranslated = "monday";
      break;
    case "martes":
      dayNameTranslated = "tuesday";
      break;
    case "miercoles":
      dayNameTranslated = "wednesday";
      break;
    case "jueves":
      dayNameTranslated = "thursday";
      break;
    case "viernes":
      dayNameTranslated = "friday";
      break;
    case "sabado":
      dayNameTranslated = "saturday";
      break;
    case "sunday":
      dayNameTranslated = "domingo";
      break;
    default:
      dayNameTranslated = "lunes";
      break;
  }

  return dayNameTranslated;
};
