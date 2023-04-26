import { useState } from 'react';
import {
  ActionIcon,
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
import { IconChevronDown } from '@tabler/icons';
import useStyles from './DeviceList.styles';
import { ListInfo } from './DeviceList.d';

interface DeviceListProps {
  listData: ListInfo[];
}

export const DeviceList = (props: DeviceListProps) => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDevice, setSelectedDevice] = useState<ListInfo | null>(null);

  const listProps = props.listData;
  const listData = listProps as ListInfo[];

  const modalOpen = () => open();

  //This is the data used to generate the row list.
  const rows: JSX.Element[] = listData.map((row: ListInfo, index: number) => (
    <tr
      key={`${row.icon} + ${row.line.name} + ${index}`}
      onClick={() => {
        setSelectedDevice(row);
        modalOpen();
      }}
    >
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
    <>
      {/*eslint-disable-next-line max-len*/}
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
            <Title order={1} size="h3" mb={10} color="dimmed" align="center">
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
                    <Table className={classes.tableContainer} fontSize="xl">
                      <tbody>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>Product Line</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.line.name}</Text>
                          </td>
                        </tr>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>ID</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.line.id}</Text>
                          </td>
                        </tr>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>Name</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.product.name}</Text>
                          </td>
                        </tr>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>Short name</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.shortnames}</Text>
                          </td>
                        </tr>
                        {selectedDevice?.unifi?.network?.radios?.na?.maxPower && (
                          <tr
                            key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                          >
                            <td>Max Power</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.radios.na.maxPower}W
                              </Text>
                            </td>
                          </tr>
                        )}
                        {selectedDevice?.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond && (
                          <tr
                            key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                          >
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
                          <tr
                            key={`${selectedDevice.product.name} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                          >
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
