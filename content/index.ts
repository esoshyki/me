import { contactContent } from "./contact";
import { contactFormContent } from "./form";
import { headerContent } from "./header";
import { homeContent } from "./home";

export const content = {
    home: {
        ...homeContent
    },
    header: {
        ...headerContent
    },
    contact: {
        ...contactContent
    },
    contactForm: {
        ...contactFormContent
    }
}