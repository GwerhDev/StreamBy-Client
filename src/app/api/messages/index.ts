import { fail } from "assert";

export const message = {
  file: {
    body: {
      notfound: "File not found in request body"
    },
    url: {
      notfound: "File url not found in request body"
    },
    format: {
      invalid: "Invalid file data format"
    }
  },
  permission: {
    denied: "Permission denied"
  },
  auth: {
    failure: "Auth failure",
    error: "Auth error"
  },
  user: {
    notfound: "User not found"
  },
  login: {
    success: "Login successfull",
    failure: "Login failed",
    notexistinguser: "Wrong credentials",
    error: "Error logging in",
    pending: "User pending"
  },
  signup: {
    success: "Signup successfull",
    failure: "Signup failed",
    existinguser: "User already exists",
    error: "Error signing up",
  },
}
