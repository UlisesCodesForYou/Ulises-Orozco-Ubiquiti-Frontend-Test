import { AspectRatio, Card, Container, Image, SimpleGrid, Text, ScrollArea } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useStyles from './DeviceGrid.styles';

export const DeviceGrid = () => {
    const { classes } = useStyles();
    const { isLoading, error, data } = useQuery({
        queryKey: ['gridData'],
        queryFn: () =>
            axios
                .get('https://static.ui.com/fingerprint/ui/public.json')
                .then((res) => res.data),
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>An error has occurred!</h1>;
    }

    const { devices } = data;

    const grid = devices.map((grd: any) => (
        <Card key={grd.id} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={`https://static.ui.com/fingerprint/ui/icons/${grd.icon.id}_${grd.icon.resolutions[2][0]}x${grd.icon.resolutions[2][1]}.png`} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {grd.line.name}
            </Text>
            <Text className={classes.title} mt={5}>
                {grd.product.name}
            </Text>
        </Card>
    ));

    return (
        <ScrollArea className={classes.scrollArea}>
        <Container py="xl">
            <SimpleGrid cols={5} breakpoints={[{ maxWidth: 'sm', cols: 1 }, { maxWidth: 'md', cols: 2 }]}>
                {grid}
            </SimpleGrid>
        </Container>
        </ScrollArea>
    );
};
