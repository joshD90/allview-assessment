import * as yup from "yup";

export const appointmentDetailSchema = yup.object({
  appointmentType: yup.string().required("You must select type of appointment"),
  appointmentLocation: yup.string().required("You must select a location"),
  describeIssues: yup
    .string()
    .required("Please give a brief description of the issues")
    .min(10, "Must be over 10 characters long"),
});

const phoneRegExp = /^\+?(\(\d+\))?[\d\s-]+$/;

export const patientDetailsSchema = yup.object({
  patientFName: yup.string().required("First name is Required").min(3),
  patientLName: yup.string().required("Last Name is Required"),
  patientEmail: yup
    .string()
    .email("must be in an email format")
    .required("Email is required"),
  patientEmailConfirm: yup
    .string()
    .email("Must adhere to an Email Format")
    .required("Confirmation Email is Required")
    .oneOf([yup.ref("email")], "Emails must match")
    .required("Confirm Email is Required"),
  patientPhone: yup
    .string()
    .required("Please enter a phone number")
    .matches(phoneRegExp, "Only + ( ) and numbers allowed"),
  dob: yup.date().required("Please enter patient's date of birth"),
  over16: yup.boolean().required("Please select one"),
});

export const patientAddressSchema = yup.object({
  patientStreetAddress: yup.string().required("Mustn't be left blank"),
  patientAddressLine2: yup.string(),
  patientAddressCity: yup.string().required("Please provide a city"),
  patientAddressCounty: yup.string(),
  paitentAddressEircode: yup.string(),
  patientAddressCountry: yup.string().required("Please Select A Country"),
});

export const gpContactSchema = yup.object({
  gpFName: yup.string().required("Please give a first name"),
  gpLName: yup.string().required("Please provide a last name"),
  gpClinicAddress: yup.string().required("Please Enter an Address"),
  medicalInsurer: yup.string().required("Please select one"),
  insurancePolicyNum: yup.string().required("Please enter policy number"),
});

export const consentSchema = yup.object({
  appointmentProcessConsent: yup
    .boolean()
    .isTrue("Please confirm")
    .required("Please confirm"),
  privacyPolicyConsent: yup
    .boolean()
    .isTrue("Please confirm")
    .required("Please confirm required"),
  insuranceConsentToShare: yup
    .boolean()
    .isTrue("Please confirm")
    .required("Please confirm "),
});
