
import { Chip } from '@mui/material';
import React from 'react';
import { ITab, TTabId } from './group-tab';

interface Props {
  tab: ITab;
  onClick: (id: TTabId) => void
  active?: boolean
}

const GroupTabItem = ({ tab, onClick, active = false }: Props) => {
  function handleClick() {
    onClick(tab.id)
  }

  const color = active ? 'primary' : 'default';

  return (
    <Chip
      label={tab.label}
      color={color}
      onClick={handleClick}
    />
  )
}

export {
  GroupTabItem
};

