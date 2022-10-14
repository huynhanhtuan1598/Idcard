import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { GoogleFont, useAllGoogleFontQuery } from '../generated/graphql';
// import { GoogleFont, useAllGoogleFontQuery } from '../../generated/graphql';

const useStyle = makeStyles({
  list: {
    marginLeft: -15,
    marginRight: -15,
    height: 400,
    overflow: 'auto',
  },
});

interface Props {
  selectFont: (font?: string) => void;
  font?: string;
}

const ListFont = ({ selectFont, font }: Props) => {
  const { loading, data } = useAllGoogleFontQuery()
  const [text, setText] = useState<string>();
  const classes = useStyle();

  const handleChangeText = debounce((e: any) => {
    setText(e.target.value);
  }, 300);

  const handleSelectFont = (value:GoogleFont) => () => {
    selectFont(value.family);
  };

  if (loading) {
    return <CircularProgress />;
  }

  const fonts = data?.allGoogleFont || []

  const fontsData =
    text && text.length > 0
      ? fonts.filter((item) =>
        item.family.toLowerCase().includes(text.toLowerCase())
      )
      : fonts;

  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={handleChangeText}
        placeholder="Tìm kiếm font"
        autoFocus
      />

      <List className={classes.list}>
        {fontsData.map((item) => {
          return (
            <ListItem
              selected={item.family === font}
              key={item.family}
              button
              onClick={handleSelectFont(item)}
            >
              <ListItemText>{item.family}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export { ListFont };
