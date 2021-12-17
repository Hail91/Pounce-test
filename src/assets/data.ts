export class SCU {
  public name: string;
  public id: number;
  public rooms: Array<IRooms>;
  public hasAlert: boolean;

  private constructor(
    name: string,
    id: number,
    rooms?: Array<IRooms>,
    alert?: boolean
  ) {
    this.name = name;
    this.id = id;
    this.rooms = rooms;
    this.hasAlert = alert;
  }

  public static childrens_center: SCU = new SCU(`Ithaca Children's Center`, 1, [
    { ID: 46, Name: 'Front Lobby' },
  ]);

  public static codinton_ne: SCU = new SCU('Coddington NE', 2, [
    { ID: 48, Name: 'Front Lobby' },
  ]);

  public static codinton_sw: SCU = new SCU('Coddington SW', 3, [
    { ID: 234, Name: 'Front Lobby' },
  ]);

  public static codinton_main: SCU = new SCU('Coddington Main', 4, [
    { ID: 64, Name: 'Front Lobby' },
  ]);

  public static codinton_se: SCU = new SCU(
    'Coddington SE',
    5,
    [
      { ID: 34, Name: 'Front Lobby' },
      { ID: 67, Name: 'Corridor' },
      { ID: 98, Name: 'Ladies Room' },
      { ID: 123, Name: "Men's Room", HasAlert: true },
      { ID: 31, Name: 'Main Corridor' },
    ],
    true
  );

  public static All(): Array<SCU> {
    return new Array<SCU>(
      this.codinton_ne,
      this.codinton_sw,
      this.codinton_main,
      this.codinton_se
    );
  }
}

export interface IRooms {
  ID: number;
  Name: string;
  Devices?: Array<IDevices>;
  HasAlert?: boolean;
}

export interface IDevices {
  ID: number;
  Name: string;
}

export class Devices {}
