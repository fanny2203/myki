// Icons
import emailIcon from "../resources/icons/register/email.png";
import securityIcon from "../resources/icons/register/password.png";
import phoneIcon from "../resources/icons/register/phone.png";
import calendarIcon from "../resources/icons/register/calendar.png";
import companyIcon from "../resources/icons/register/company.png";

export const INPUTS = [
  {
    label: "Email*",
    variant: "standard",
    icon: emailIcon,
    alt: "type email here",
    helperText: "",
    error: false,
    value: "",
    name: "email",
  },
  {
    label: "Password*",
    variant: "standard",
    icon: securityIcon,
    alt: "type password here",
    helperText: "",
    error: false,
    value: "",
    name: "password",
    type: "password",
  },
  {
    label: "Repeat password*",
    variant: "standard",
    icon: securityIcon,
    alt: "type password here",
    helperText: "",
    error: false,
    value: "",
    name: "passwordRepeat",
    type: "password",
  },
  {
    label: "Phone number",
    variant: "standard",
    icon: phoneIcon,
    alt: "type email here",
    helperText: "",
    error: false,
    value: "",
    name: "phone",
  },
  {
    label: "Date of Birth",
    variant: "standard",
    icon: calendarIcon,
    alt: "select birth date",
    type: "date",
    helperText: "",
    error: false,
    value: "",
    name: "date",
  },
  {
    label: "Company",
    variant: "standard",
    icon: companyIcon,
    alt: "input-copyIcon",
    helperText: "",
    error: false,
    value: "",
    name: "company",
  },
];
