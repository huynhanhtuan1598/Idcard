import React, {
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Loading } from '../loading/loading';

interface IContext {
    i18n: any;
    changeLanguage: (language: string) => void;
}

const initalContext: IContext = {
    changeLanguage: () => {},
    i18n: {},
};

const Context = React.createContext<IContext>(initalContext);

interface Props {
    children: ReactNode;
}

export function LanguageContext({ children }: Props) {
    const [loading, setLoading] = useState<boolean>(true);
    const { i18n } = useTranslation();

    useEffect(() => {
        function progress(): Promise<string> {
            return new Promise((resolve, _reject) => {
                let language = localStorage.getItem('vipid-language');

                if (language) {
                    resolve(language);
                } else {
                    if (
                        window.navigator.language === 'en-US' ||
                        window.navigator.language === 'en-UK'
                    ) {
                        resolve('en');
                    } else {
                        resolve('vi');
                    }
                }
            });
        }

        progress().then((language) => {
            i18n.changeLanguage(language);
            localStorage.setItem('vipid-language', language);
            setLoading(false);
        });
    }, [i18n]);

    const changeLanguage = useCallback(
        (language: string) => {
            setLoading(true);
            localStorage.setItem('vipid-language', language);
            i18n.changeLanguage(language);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        },
        [i18n]
    );

    const value = useMemo(
        () => ({ i18n, changeLanguage }),
        [i18n, changeLanguage]
    );

    if (loading) {
        return <Loading full />;
    }

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useChangeLanguage() {
    const context = useContext(Context);

    return { ...context };
}
