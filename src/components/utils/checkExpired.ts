import jwtDecode, { JwtPayload } from 'jwt-decode';

export function checkExpired(token: string): boolean {
    const decode = jwtDecode<JwtPayload>(token);
    const expration = decode.exp || 0;

    return Date.now() >= expration * 1000 - 60000;
}
