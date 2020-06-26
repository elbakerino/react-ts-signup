export const CHANGE_NICKNAME = 'CHANGE_NICKNAME';
export const CHANGE_FIRSTNAME = 'CHANGE_FIRSTNAME';
export const CHANGE_LASTNAME = 'CHANGE_LASTNAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_CONFIRM = 'CHANGE_PASSWORD_CONFIRM';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeNickname = text => ({
    type: CHANGE_NICKNAME,
    text
});

export const changeFirstname = text => ({
    type: CHANGE_FIRSTNAME,
    text
});

export const changeLastname = text => ({
    type: CHANGE_LASTNAME,
    text
});

export const changePassword = password => ({
    type: CHANGE_PASSWORD,
    password
});

export const changePasswordConfirm = password => ({
    type: CHANGE_PASSWORD_CONFIRM,
    password
});

export const changeEmail = email => ({
    type: CHANGE_EMAIL,
    email
});
