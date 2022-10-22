module.exports = {
  register: (Handlebars) => {
    Handlebars.registerHelper("dateFormat", function (date) {
      if (date === undefined) return null;

      if (date === null) return 'In progress'


      if (typeof date == 'object') {
        // Date range
        // e.g. [2009-11-10, 2010-11-10]
        const startDate = dateFormatHelper(date[0]);
        const endDate = dateFormatHelper(date[1]);

        return `${startDate} - ${endDate}`;
      }

      // Single date
      // e.g. 2009-11-10
      return dateFormatHelper(date);
    });
  },
};

function dateFormatHelper(dateString) {
  if (dateString === null)
    return "present"

  const date = new Date(...dateString.split("-"));
  const format = {
    month: "long",
    year: "numeric",
  };
  return date.toLocaleString("default", format);
}
