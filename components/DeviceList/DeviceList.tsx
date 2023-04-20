import { useState } from 'react';
import { Image, ScrollArea, Table } from '@mantine/core';
import useStyles from './DeviceList.styles';
import { ListInfo } from './DeviceList.d';

interface DeviceListProps {
  listData: ListInfo[];
}

export const DeviceList = (props: DeviceListProps) => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const listProps = props.listData;
  const listData = listProps as ListInfo[];

  const rows: JSX.Element[] = listData.map((row: ListInfo) => (
    <tr key={row.id}>
      <td>
        <Image
          src={`https://static.ui.com/fingerprint/ui/icons/${row.icon.id}_${row.icon.resolutions[1][0]}x${row.icon.resolutions[1][1]}.png`}
          alt=""
          width={row.icon.resolutions[1][0]}
          height={row.icon.resolutions[1][1]}
        />
      </td>
      <td>{row.line.name}</td>
      <td>{row.product.name}</td>
    </tr>
  ));

  return (
    // eslint-disable-next-line max-len
    <ScrollArea
      className={classes.scrollArea}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table highlightOnHover>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>123 Devices</th>
            <th>Product Line</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
