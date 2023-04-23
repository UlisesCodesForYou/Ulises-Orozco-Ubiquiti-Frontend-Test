import { Button, Checkbox, Menu } from '@mantine/core';
import { useState } from 'react';
import useStyles from './FilterDropdown.styles';

export const FilterDropdown = () => {
  const [opened, setIsOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <Menu shadow="md" width={300} opened={opened} onChange={setIsOpened}>
      <Menu.Target>
        <Button size="xs">Filter</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label className={classes.productLabel}>Product Line</Menu.Label>
        <Checkbox label="UniFi" className={classes.checkboxItems} size="md" />
        <Checkbox label="UniFi LTE" className={classes.checkboxItems} size="md" />
        <Checkbox label="UniFi Protect" className={classes.checkboxItems} size="md" />
        <Checkbox label="UniFi Access" className={classes.checkboxItems} size="md" />
        <Checkbox label="airMax" className={classes.checkboxItems} size="md" />
        <Checkbox label="EdgeMax" className={classes.checkboxItems} size="md" />
      </Menu.Dropdown>
    </Menu>
  );
};
