import { ISerializedLocation } from "./serialized-location";

export interface ISerializedProperty {
  _name: string;
  _value: number;
  _location: ISerializedLocation;
}
