import { useState } from 'react';
import { Image, ScrollArea, Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useStyles from './DeviceList.styles';
import { ListInfo } from './DeviceList.d';

export const DeviceList = () => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { isLoading, error, data } = useQuery({
    queryKey: ['listData'],
    queryFn: () =>
      axios.get('https://static.ui.com/fingerprint/ui/public.json').then((res) => res.data),
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>An error has occurred!</h1>;
  }

  const { devices } = data;

  const listData = devices as ListInfo[];

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
