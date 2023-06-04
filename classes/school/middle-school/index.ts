import { School } from "..";

import { Character } from "../../character";
import { Location } from "../../location";
import { World } from "../../world";

export class MiddleSchool extends School {
  constructor(tier: number, location: Location, students: Character[] = []) {
    super(
      "middle_school",
      tier,
      `Tier ${tier} Middle School`,
      location,
      students
    );
  }

  enroll(student: Character) {
    switch (this.tier) {
      case 1:
        if (this.ageRequirement(student) && student.knowledge >= 14)
          this.students.push(student);
        break;
      case 2:
        if (this.ageRequirement(student) && student.knowledge >= 12)
          this.students.push(student);
        break;
      case 3:
        if (this.ageRequirement(student) && student.knowledge >= 10)
          this.students.push(student);
        break;
      default:
        break;
    }
  }

  ageRequirement(student: Character) {
    return student.age >= 11 && student.age <= 13;
  }
}
