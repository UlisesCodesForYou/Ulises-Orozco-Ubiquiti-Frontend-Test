import { useState } from 'react';
import { ScrollArea, Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
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
            fetch('https://static.ui.com/fingerprint/ui/public.json').then(
                (res) => res.json(),
            ),
    });

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred!';

    const rows = data.map((row: any) => (
        <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.company}</td>
        </tr>
    ));

    return (
        <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table miw={700}>
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
