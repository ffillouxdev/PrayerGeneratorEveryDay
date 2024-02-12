import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:8000";

const REGISTER_URL = `${BACKEND_DOMAIN}/api/auth/users/`;
const LOGIN_URL = `${BACKEND_DOMAIN}/api/auth/jwt/create/`
const ACTIVATE_URL = `${BACKEND_DOMAIN}/api/auth/users/activation/`
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/auth/users/reset_password/`
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/api/auth/users/reset_password_confirm/`
const GET_USER_INFO = `${BACKEND_DOMAIN}/api/auth/users/me/`


// register
const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(REGISTER_URL, userData, config);

    return response.data;
}

// Login
const login = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    const response = await axios.post(LOGIN_URL, userData, config);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

// Logout
const logout = async (userData) => {
    return localStorage.removeItem("user");
}

// Activate account
const activate = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(ACTIVATE_URL, userData, config);

    return response.data;
}


const resetPassword = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(RESET_PASSWORD_URL, userData, config);

    return response.data;
}

const resetPasswordConfirm = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config);

    return response.data;
}


const authService = { register, login, logout, activate, resetPassword, resetPasswordConfirm };

export default authService;