import { SCHOOL } from "../types";
import { ISerializedCharacter } from "./serialized-character";
import { ISerializedLocation } from "./serialized-location";

export interface ISerializedSchool {
  _tier: number;
  _type: SCHOOL;
  _location: ISerializedLocation;
  _students: ISerializedCharacter[];
}
