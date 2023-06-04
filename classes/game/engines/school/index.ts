import { ISerializedSchool } from "../../../../interface";
import { Character } from "../../../character";
import { Location } from "../../../location";
import { CommunityCollege } from "../../../school/community-college";
import { ElementarySchool } from "../../../school/elementary-school";
import { HighSchool } from "../../../school/high-school";
import { MiddleSchool } from "../../../school/middle-school";
import { University } from "../../../school/university";
import { CharactersEngine } from "../characters";

export class SchoolEngine {
  constructor() {}

  generateElementarySchool(tier: number, location: Location) {
    // NOTE: all elementary school are free
    return new ElementarySchool(tier, location);
  }

  generateExistingElementarySchool(serializedSchool: ISerializedSchool) {
    if (serializedSchool._type === "elementary_school") {
      const students = serializedSchool._students.map((student) =>
        new CharactersEngine().generateExistingCharacter(student)
      );

      return new ElementarySchool(
        serializedSchool._tier,
        new Location(
          serializedSchool._location._state,
          serializedSchool._location._country
        ),
        students
      );
    }
  }

  generateMiddleSchool(tier: number, location: Location) {
    return new MiddleSchool(tier, location);
  }

  generateExistingMiddleSchool(serializedSchool: ISerializedSchool) {
    if (serializedSchool._type === "middle_school") {
      const students = serializedSchool._students.map((student) =>
        new CharactersEngine().generateExistingCharacter(student)
      );

      return new MiddleSchool(
        serializedSchool._tier,
        new Location(
          serializedSchool._location._state,
          serializedSchool._location._country
        ),
        students
      );
    }
  }

  generateHighSchool(tier: number, location: Location) {
    return new HighSchool(tier, location);
  }

  generateExistingHighSchool(serializedSchool: ISerializedSchool) {
    if (serializedSchool._type === "high_school") {
      const students = serializedSchool._students.map((student) =>
        new CharactersEngine().generateExistingCharacter(student)
      );

      return new HighSchool(
        serializedSchool._tier,
        new Location(
          serializedSchool._location._state,
          serializedSchool._location._country
        ),
        students
      );
    }
  }

  generateCommunityCollege(tier: number, location: Location) {
    return new CommunityCollege(tier, location);
  }

  generateExistingCommunityCollege(serializedSchool: ISerializedSchool) {
    if (serializedSchool._type === "community_college") {
      const students = serializedSchool._students.map((student) =>
        new CharactersEngine().generateExistingCharacter(student)
      );

      return new CommunityCollege(
        serializedSchool._tier,
        new Location(
          serializedSchool._location._state,
          serializedSchool._location._country
        ),
        students
      );
    }
  }

  generateUniversity(tier: number, location: Location) {
    return new University(tier, location);
  }

  generateExistingUniversity(serializedSchool: ISerializedSchool) {
    if (serializedSchool._type === "university") {
      const students = serializedSchool._students.map((student) =>
        new CharactersEngine().generateExistingCharacter(student)
      );

      return new University(
        serializedSchool._tier,
        new Location(
          serializedSchool._location._state,
          serializedSchool._location._country
        ),
        students
      );
    }
  }
}
