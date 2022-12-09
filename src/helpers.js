const helpers = {
  /*
   * TODO add docstring
   */
  dateFormat: (date) => {
    if (date === undefined) return null;

    if (date === null) return "In progress";

    if (typeof date == "object") {
      // Date range
      // e.g. [2009-11-10, 2010-11-10]
      const startDate = formatDate(date[0]);
      const endDate = formatDate(date[1]);

      return `${startDate} - ${endDate}`;
    }

    // Single date
    // e.g. 2009-11-10
    return formatDate(date);
  },

  /*
   * TODO add docstring
   */
  heightFor: ({ bullets, links }) =>
    `${(bullets?.length || 0) * 3 + (links ? 5 : 0)}em`,
  or: (a, b) => a || b,
};

function formatDate(dateString) {
  if (dateString === null) return "present";

  let date = new Date(...dateString.split("-"));
  date.setMonth(date.getMonth() - 1);
  // const date = new Date(...dateString.split("-"));
  const format = {
    month: "long",
    year: "numeric",
  };
  return date.toLocaleString("default", format);
}

module.exports = {
  register: (Handlebars) => Handlebars.registerHelper(helpers),
};
