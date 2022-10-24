import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import {
    Container,
    AppBar,
    CircularProgress,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Theme,
    Toolbar,
    Typography,
    Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { debounce, get, map, sortBy } from 'lodash';
import { forwardRef, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from '../../../../components/transition/transtion';
import { removeAlias } from '../../../../components/utils/removeAlias';
// import { Transition } from '../../../../components';
// import { removeAlias } from '../../../../components/utils';
import {
    bankLists,
    IBankLists,
    // ISocialLists,
    // socialLists,
} from '../../constants/bank-list';
// import {ISocialLists, socialLists } from '../../constants/social-list';

const useStyles = makeStyles((theme: Theme) => ({
    wrap: { background: '#eee', borderRadius: 10, cursor: 'pointer' },
    label: {
        position: 'absolute',
        top: 0,
        padding: '10px 15px',
        fontSize: 15,
        color: theme.palette.grey[800],
    },
    wrapInput: {
        position: 'relative',
    },
    input: {
        display: 'block',
        padding: '40px 15px 15px',
        minHeight: 60,
        width: '100%',
        border: 'none',
        background: 'transparent',
        fontSize: 19,
        position: 'relative',
        zIndex: 10,
        '&:focus': {
            outline: 'none',
        },
    },
    searchInput: {
        border: `1px solid ${theme.palette.grey[300]}`,
        padding: 15,
        borderRadius: 5,
        width: '100%',
    },
    searchIcon: {
        position: 'absolute',
        top: '50%',
        marginTop: -10,
        right: 10,
        color: theme.palette.grey[500],
    },
}));

export enum ETypeSelect {
    BANK = 'bank',
    SOCIAL = 'social',
}

interface IListData {
    type: ETypeSelect;
    // lists: ISocialLists | IBankLists;
    label: string;
    placeholder: string;
}

interface Props {
    setValue?: (value: any) => void;
    type: ETypeSelect;
}

const getIndexString = (str: string, text: string): number =>
    removeAlias(str).toLowerCase().indexOf(removeAlias(text));

const getSortList = (key: any): any[] => {
    return sortBy(Object.values(key), ['name']);
};

const SelectBankOrSocial = forwardRef<HTMLInputElement, Props>(
    ({ setValue, type = ETypeSelect.SOCIAL, ...props }, ref: any) => {
        const { t } = useTranslation('add_contact');
        const classes = useStyles();

        const selectsListData: { [key in ETypeSelect]: IListData } = useMemo(
            () => ({
                [ETypeSelect.BANK]: {
                    type: ETypeSelect.BANK,
                    lists: bankLists,
                    label: t('choose_bank'),
                    placeholder: t('search_bank'),
                },
                [ETypeSelect.SOCIAL]: {
                    type: ETypeSelect.SOCIAL,
                    // lists: socialLists,
                    label: t('choose_social'),
                    placeholder: t('search_social'),
                },
            }),
            [t]
        );

        const typeLists = useMemo(
            () => selectsListData[type],
            [selectsListData, type]
        );

        const [open, setOpen] = useState<boolean>(false);
        const [name, setName] = useState<string>();
        const [textSearch, setTextSearch] = useState<string>('');
        const [loading, setLoading] = useState<boolean>(false);
        // const [lists, setLists] = useState(() => getSortList(typeLists.lists));

        const changeTextSearch = debounce((text: string) => {
            setTextSearch(text);
        }, 300);

        const toggle = () => {
            setOpen((o) => !o);
        };

        const handleCloseModal = () => {
            setOpen(false);
            setTextSearch('');
            // setLists(Object.values(typeLists.lists));
        };

        // const itemListExist = name ? typeLists.lists[name] : undefined;

        // const newLists = useMemo(() => {
        //     if (textSearch.length === 0) {
        //         return //lists;
        //     }

        //     const textSearchFormat = textSearch.trim();

        //     return lists.filter((item) => {
        //         if (!item.shortname) {
        //             return getIndexString(item.name, textSearchFormat) >= 0;
        //         }

        //         return (
        //             getIndexString(item.shortname, textSearchFormat) >= 0 ||
        //             getIndexString(item.name, textSearchFormat) >= 0
        //         );
        //     });
        // }, [textSearch, lists]);

        return (
            <>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.wrap}
                    onClick={() => setOpen(true)}
                >
                    <Grid item xs>
                        <div className={classes.label}>{typeLists.label}</div>
                        <input
                            // value={get(itemListExist, 'name')}
                            className={classes.input}
                            {...props}
                            autoFocus
                            readOnly
                        />
                    </Grid>
                    <Grid item style={{ marginRight: 10 }}>
                        <ChevronRightIcon />
                    </Grid>
                </Grid>

                <Dialog
                    onClose={handleCloseModal}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    fullScreen
                    TransitionComponent={Transition}
                >
                    <AppBar color="transparent" position="static">
                        <Toolbar>
                            <IconButton edge="start" onClick={handleCloseModal}>
                                <ArrowBackIcon />
                            </IconButton>

                            <Typography variant="h6">
                                {typeLists.label}
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <DialogContent dividers style={{ padding: 0 }}>
                        <Box sx={{ position: 'relative', paddingTop: '80px' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: 10,
                                    py: 2,
                                }}
                            >
                                <Container maxWidth="sm">
                                    <Box
                                        style={{
                                            position: 'relative',
                                        }}
                                    >
                                        <input
                                            className={classes.searchInput}
                                            onChange={(e) =>
                                                changeTextSearch(e.target.value)
                                            }
                                            placeholder={typeLists.placeholder}
                                            // value={textSearch}
                                        />
                                        <SearchIcon
                                            className={classes.searchIcon}
                                        />
                                    </Box>
                                </Container>
                            </Box>

                            <Box
                                sx={{
                                    height: 'calc(100vh - 58px - 80px)',
                                    overflow: 'hidden',
                                }}
                            >
                                <Container maxWidth="sm">
                                    <Box
                                        sx={{
                                            overflowY: 'auto',
                                            height: 'calc(100vh - 58px - 80px)',
                                        }}
                                    >
                                        {loading && <CircularProgress />}

                                        {/* <List component="nav">
                                            {map(newLists, (item) => {
                                                const handleSelect = () => {
                                                    setName(item.value);
                                                    setValue &&
                                                        setValue(item.value);
                                                    toggle();
                                                };

                                                if (
                                                    type === ETypeSelect.SOCIAL
                                                ) {
                                                    return (
                                                        <ListItem
                                                            button
                                                            key={item.name}
                                                            onClick={
                                                                handleSelect
                                                            }
                                                        >
                                                            <ListItemText
                                                                primary={
                                                                    item.name
                                                                }
                                                            />
                                                        </ListItem>
                                                    );
                                                }

                                                return (
                                                    <ListItem
                                                        button
                                                        key={item.name}
                                                        onClick={handleSelect}
                                                    >
                                                        <ListItemText
                                                            primary={
                                                                item.shortname
                                                            }
                                                            secondary={
                                                                item.name
                                                            }
                                                        />
                                                    </ListItem>
                                                );
                                            })}
                                        </List> */}
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
);

export { SelectBankOrSocial };
