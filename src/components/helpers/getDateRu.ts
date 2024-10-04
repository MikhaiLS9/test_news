const getDateRu = (date: string) => {
  try {
    const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Moscow",
    });

    return dateFormatter.format(new Date(date));
  } catch (error) {
    if (error instanceof Error) {
      return error?.message;
    } else return String(error);
  }
};

export default getDateRu;
