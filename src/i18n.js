import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Search: "Search projects…",
      "Welcome back": "Welcome back",
    },
  },
  fr: {
    translation: {
      Search: "Rechercher…",
      "Welcome back": "Bon retour",
    },
  },
  de: {
    translation: {
      Search: "Suchen…",
      "Welcome back": "Willkommen zurück",
    },
  },
  nl: {
    translation: {
      Search: "Zoeken…",
      "Welcome back": "Welkom terug",
    },
  },
  gr: {
    translation: {
      CompanyHeader: "Η Εταιρεία μας",
      FirstPara: "Η εταιρεία μας δραστηριοποιείται στην κατασκευή ανακαίνιση και εκμετάλλευση ακινήτων τουριστικού σκοπού. Ειδικεύεται στην υλοποίηση επενδυτικών σχεδίων στον τομέα του τουρισμού με κύριο σημείο δραστηριότητας το νησί της Νάξου.",
      SecondPara: "Αναλαμβάνουμε κάθε πρότζεκτ από την κατασκευή τουριστικών καταλυμάτων μέχρι και την εκμετάλλευση τους καθόλη την διάρκεια του χρόνου, έχοντας την γνώση και την εμπειρία της κατασκευής αλλά ταυτόχρονα και του τομέα του τουρισμού.",
      Contact: "Επικοινωνία",
      ContactText: "Επικοινωνήστε μαζί μας για οποιαδήποτε πληροφορία χρειαστείτε.",
      AddressTxt: "Καπετάν Χρονά 52, 11525, N. Ψυχικό, Ελλάδα",
      AddressTitle: "Διεύθυνση",
      TelephoneTitle: "Τηλέφωνο",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "gr",
  fallbackLng: "gr",
  interpolation: {
    escapeValue: false,
  },
});
