function isDateValid(dateStr: string) {
  return !isNaN(new Date(dateStr).getTime());
}

export const convertAllDates = (obj: object) => {
  for (const [key, value] of Object.entries(obj)) {
    if (isDateValid(value)) {
      (obj as any)[key] = new Date(value);
    }
  }
};
