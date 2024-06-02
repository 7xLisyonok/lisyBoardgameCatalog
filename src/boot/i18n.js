import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import locales from "src/i18n/index";

export default boot(({ app }) => {
  let userLanguage =
    navigator.language in locales ? navigator.language : "en-US";

  const i18n = createI18n({
    locale: userLanguage,
    globalInjection: true,
    messages,
  });

  app.use(i18n);
});
