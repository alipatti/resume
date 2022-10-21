module.exports = {
  register: (Handlebars) => {
    Handlebars.registerHelper("dateFormat", function (dateString) {
      if (dateString === undefined)
        return "present"

      const date = new Date(...dateString.split("-")); // 2009-11-10
      return date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
    });
  },
};

