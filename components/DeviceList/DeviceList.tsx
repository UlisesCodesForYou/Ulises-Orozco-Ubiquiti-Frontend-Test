import { useState } from 'react';
import { ScrollArea, Table, Image } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useStyles from './DeviceList.styles';

// interface TableScrollAreaProps {
//     data: { name: string; email: string; company: string }[];
// }

export const DeviceList = () => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { isLoading, error, data } = useQuery({
        queryKey: ['listData'],
        queryFn: () =>
            axios
                .get('https://static.ui.com/fingerprint/ui/public.json')
                .then((res) => res.data),
    });

    if (isLoading) {
        return <h1>Loading....</h1>;
    }

    if (error) {
        return <h1>An error has occurred!</h1>;
    }
    // className={classes.imageContainer}
    const { devices } = data;
    const rows = devices.map((row: any) => (
        <tr key={row.id}>
            <td><Image src={`https://static.ui.com/fingerprint/ui/icons/${row.icon.id}_${row.icon.resolutions[0][0]}x${row.icon.resolutions[0][1]}.png`} alt="" width={row.icon.resolutions[0][0]} height={row.icon.resolutions[0][1]} /></td>
            <td>{row.line.name}</td>
            <td>{row.product.name}</td>
        </tr>
    ));

    return (
        <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
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
