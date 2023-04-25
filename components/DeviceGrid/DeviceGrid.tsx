import {
  ActionIcon,
  Card,
  Container,
  Drawer,
  Grid,
  Image,
  ScrollArea,
  SimpleGrid,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons';
import useStyles from './DeviceGrid.styles';
import { GridInfo } from './DeviceGrid.d';

interface DeviceGridProps {
  gridData: GridInfo[];
}

export const DeviceGrid = (props: DeviceGridProps) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDevice, setSelectedDevice] = useState<GridInfo | null>(null);

  const gridProps: GridInfo[] = props.gridData;
  const gridData: GridInfo[] = gridProps as GridInfo[];

  const drawerOpen = () => open();

  //This is the card holds the data tha is displayed in the cards in the scroll area.
  const grid: JSX.Element[] = gridData.map((item: GridInfo) => (
    <Card
      key={item.id}
      radius="md"
      className={classes.card}
      component="button"
      onClick={() => {
        setSelectedDevice(item);
        drawerOpen();
      }}
    >
      <div className={classes.imageContainer}>
        <Card.Section>
          <Image
            src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[4][0]}x${item.icon.resolutions[4][1]}.png`}
            height="auto"
          />
        </Card.Section>
      </div>
      <Text size="md" transform="uppercase" weight={700} className={classes.nameContainer}>
        {item.product.name}
      </Text>
      <Text className={classes.title} mt={5} color="dimmed">
        {item.line.name}
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

      {/*The Product details are held within this drawer once the user clicks the item.*/}
      <Drawer opened={opened} onClose={close} position="bottom" size="100%" withCloseButton={false}>
        <Drawer.Header>
          <Drawer.CloseButton>
            <ActionIcon>
              {' '}
              <IconChevronDown />
            </ActionIcon>
          </Drawer.CloseButton>
        </Drawer.Header>
        {selectedDevice && (
          <Container className={classes.drawerContainer}>
            <Title order={1} size="h4" mb={10} color="dimmed" className={classes.productTitle}>
              {selectedDevice.product.name}
            </Title>
            <Container>
              <SimpleGrid cols={1}>
                <Grid>
                  <Grid.Col lg={6}>
                    <Image
                      src={`https://static.ui.com/fingerprint/ui/icons/${selectedDevice.icon.id}_${selectedDevice.icon.resolutions[4][0]}x${selectedDevice.icon.resolutions[4][1]}.png`}
                      height="auto"
                    />
                  </Grid.Col>
                  <Grid.Col lg={6} className={classes.detailContainer}>
                    <Table className={classes.tableContainer}>
                      <tbody>
                        <tr key={selectedDevice.icon.id}>
                          <td>Product Line</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.line.name}</Text>
                          </td>
                        </tr>
                        <tr key={selectedDevice.icon.id}>
                          <td>ID</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.line.id}</Text>
                          </td>
                        </tr>
                        <tr key={selectedDevice.icon.id}>
                          <td>Name</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.product.name}</Text>
                          </td>
                        </tr>
                        <tr key={selectedDevice.icon.id}>
                          <td>Short name</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.shortnames}</Text>
                          </td>
                        </tr>
                        {selectedDevice?.unifi?.network?.radios?.na?.maxPower && (
                          <tr key={selectedDevice.icon.id}>
                            <td>Max Power</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.radios.na.maxPower}W
                              </Text>
                            </td>
                          </tr>
                        )}
                        {selectedDevice?.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond && (
                          <tr key={selectedDevice.icon.id}>
                            <td>Speed</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.radios.na.maxSpeedMegabitsPerSecond}{' '}
                                Mbps
                              </Text>
                            </td>
                          </tr>
                        )}
                        {selectedDevice?.unifi?.network?.numberOfPorts && (
                          <tr key={selectedDevice.icon.id}>
                            <td>Number of Ports</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.numberOfPorts}
                              </Text>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Grid.Col>
                </Grid>
              </SimpleGrid>
            </Container>
          </Container>
        )}
      </Drawer>
    </>
  );
};
