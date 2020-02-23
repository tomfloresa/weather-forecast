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
    case "domingo":
      dayNameTranslated = "sunday";
      break;
    default:
      dayNameTranslated = "monday";
      break;
  }

  return dayNameTranslated;
};

export const translateDayNameToSpanish = dayName => {
  const dayNameLowercase = dayName.toLowerCase();
  let dayNameTranslated = "";

  switch (dayNameLowercase) {
    case "monday":
      dayNameTranslated = "lunes";
      break;
    case "tuesday":
      dayNameTranslated = "martes";
      break;
    case "wednesday":
      dayNameTranslated = "miercoles";
      break;
    case "thursday":
      dayNameTranslated = "jueves";
      break;
    case "friday":
      dayNameTranslated = "viernes";
      break;
    case "saturday":
      dayNameTranslated = "sabado";
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
