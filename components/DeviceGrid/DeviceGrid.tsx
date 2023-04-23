import { Card, Container, Grid, Image, Modal, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useStyles from './DeviceGrid.styles';
import { GridInfo } from './DeviceGrid.d';

interface DeviceGridProps {
  gridData: GridInfo[];
}

export const DeviceGrid = (props: DeviceGridProps) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDevice, setSelectedDevice] = useState(undefined);

  const gridProps: GridInfo[] = props.gridData;
  const gridData: GridInfo[] = gridProps as GridInfo[];

  const modalOpen = () => open();

  const grid: JSX.Element[] = gridData.map((grd: GridInfo) => (
    <Card
      key={grd.id}
      radius="md"
      className={classes.card}
      component="button"
      onClick={() => {
        setSelectedDevice(selectedDevice);
        modalOpen();
      }}
    >
      <div className={classes.imageContainer}>
        <Card.Section>
          <Image
            src={`https://static.ui.com/fingerprint/ui/icons/${grd.icon.id}_${grd.icon.resolutions[2][0]}x${grd.icon.resolutions[2][1]}.png`}
            height={160}
          />
        </Card.Section>
      </div>
      <Text size="md" transform="uppercase" weight={700} className={classes.nameContainer}>
        {grd.product.name}
      </Text>
      <Text className={classes.title} mt={5} color="dimmed">
        {grd.line.name}
      </Text>
    </Card>
  ));

  return (
    <>
      <ScrollArea className={classes.scrollArea}>
        <Container py="xl">
          <SimpleGrid
            cols={5}
            breakpoints={[
              { maxWidth: 'sm', cols: 1 },
              { maxWidth: 'md', cols: 2 },
            ]}
          >
            {grid}
          </SimpleGrid>
        </Container>
      </ScrollArea>
      <Modal opened={opened} onClose={close}>
        <Container>
          <SimpleGrid cols={2}>
            <Grid>
              <Grid.Col>
                <Image
                  src={`https://static.ui.com/fingerprint/ui/icons/${setSelectedDevice}_${setSelectedDevice}x${setSelectedDevice}`}
                  height={160}
                />
              </Grid.Col>
              <Grid.Col>
                <Text size="md" weight={700} className={classes.nameContainer}>
                  {setSelectedDevice.name}
                </Text>
                <Text className={classes.title} mt={5}>
                  {setSelectedDevice.name}
                </Text>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </Modal>
    </>
  );
};
