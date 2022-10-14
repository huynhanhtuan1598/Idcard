import axios from 'axios';
import { checkExpired } from '../utils/checkExpired'

export async function fetchAccessToken(): Promise<string> {
    const url = `/refresh_token`;

    try {
        const res = await axios(url, {
            method: 'POST',
            withCredentials: true,
        });

        const { access_token } = res.data;

        return access_token as string;
    } catch (error) {
        return '';
    }
}

export const getToken = (): string | null => {
    const token = localStorage.getItem('token');
    return token;
};

export const setToken = (token: string): void =>
    localStorage.setItem('token', token);

export const getAccessToken = async (): Promise<string | null> => {
    try {
        const token = getToken();

        if (!token || token.length === 0) return null;

        const isExpired = checkExpired(token);

        if (isExpired) {
            const access_token = await fetchAccessToken();

            setToken(access_token);

            return access_token;
        }

        return token;
    } catch (error) {
        return '';
    }
};

export const removeToken = () => localStorage.removeItem('token');
