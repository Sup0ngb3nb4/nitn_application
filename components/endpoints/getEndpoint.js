import {
  STUDENT_ACCOUNT_DETAILS_ENDPOINT,
  STUDENT_COMPLAIN_FORM_ENDPOINT,
  STUDENT_CONTACTS_ENDPOINT,
  STUDENT_DELETE_FORM_ENDPOINT,
  STUDENT_DELETE_PROFILE_PICTURE_ENDPOINT,
  STUDENT_LIST_FORM_ENDPOINT,
  STUDENT_LOGIN_ENDPOINT,
  STUDENT_LOGOUT_ENDPOINT,
  STUDENT_REGISTER_ENDPOINT,
  STUDENT_UPDATE_ACCOUNT_ENDPOINT,
  STUDENT_UPDATE_PROFILE_PICTURE_ENDPOINT,
} from "./endpoint";

export const getEndPoint = (endpoint) => {
  switch (endpoint) {
    /* Sign Up */
    case "STUDENT_REGISTER":
      return STUDENT_REGISTER_ENDPOINT;

    case "STUDENT_LOGIN":
      return STUDENT_LOGIN_ENDPOINT;

    case "STUDENT_LOGOUT":
      return STUDENT_LOGOUT_ENDPOINT;

    /* Complain Form */
    case "STUDENT_COMPLAIN_FORM":
      return STUDENT_COMPLAIN_FORM_ENDPOINT;

    case "STUDENT_LIST_FORM":
      return STUDENT_LIST_FORM_ENDPOINT;

    case "STUDENT_DELETE_FORM":
      return STUDENT_DELETE_FORM_ENDPOINT;

    /* Contacts */
    case "STUDENT_CONTACTS":
      return STUDENT_CONTACTS_ENDPOINT;

    /* Profile */
    case "STUDENT_UPDATE_ACCOUNT":
      return STUDENT_UPDATE_ACCOUNT_ENDPOINT;

    case "STUDENT_UPDATE_PROFILE_PICTURE":
      return STUDENT_UPDATE_PROFILE_PICTURE_ENDPOINT;

    case "STUDENT_DELETE_PROFILE_PICTURE":
      return STUDENT_DELETE_PROFILE_PICTURE_ENDPOINT;

    case "STUDENT_ACCOUNT_DETAILS":
      return STUDENT_ACCOUNT_DETAILS_ENDPOINT;
  }
};

export default getEndPoint;