
- [x] All values MUST be connected to a redux-store.
- [x] All values MUST be persistent after a page reload.

- [x] Last name input field
- [x] First name input field
- [x] Nick name input field
- [x] Email input field
- [x] Password input field
- [x] Repeat password input field
= 1am ~= 5h

- [x] "Show Address" checkbox
- [x] Street input field
- [x] House number input field
- [x] ZIP input field
- [x] City input field
- [x] Text area field for additional information
    - are these additional information for the address or in general for the user?

- [x] All address related fields MUST only be visible if the "Show Address" checkbox is checked.

- [x] A submit button

The form MUST submit the information only when the following requirements are met:
- [x] Last name input field MUST be at least 2 characters long.
- [x] First name input field MUST be at least 2 characters long.

- [x] Password must be at least 6 characters long.
- [x] Password must contain at least 2 numbers.
- [x] Password and repeat password fields MUST contain the same value.

- [ ] Nick name input field MAY not be empty.
    - `may not` equals `must not` in actual english language meaning
    - used RFC meaning of MAY here
- [x] Street input field MUST be at least 4 characters long.
- [x] City input field MUST be at least 4 characters long.
- [ ] Text area MAY not be empty.
    - `may not` equals `must not` in actual english language meaning
    - used RFC meaning of MAY here
- [ ] Email input field MUST be a valid email.
- [x] ZIP input field MUST be 5 characters long and all characters MUST be decimal numbers.
- [x] All input fields which must contain a value MUST have a value.
- [x] Submit button SHOULD be disabled when all the input requirements are not met.
- [x] You MUST not use external form validation libraries.
- [ ] Your implementation SHOULD contain test with a framework of your choice.

---

- [ ] refactor errors (or everything) to use immutable
    - when using only for errors immutable (and errors in the redux store), it is problematic with JSON convert for localeStorage persistence
- [ ] remove inpEmail reference and use it another way (email validation is not done currently)
