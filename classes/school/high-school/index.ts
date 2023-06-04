import { School } from "..";

import { Character } from "../../character";
import { Location } from "../../location";
import { World } from "../../world";

export class HighSchool extends School {
  constructor(tier: number, location: Location, students: Character[] = []) {
    super(
      "elementary_school",
      tier,
      `Tier ${tier} High School`,
      location,
      students
    );
  }

  enroll(student: Character) {
    switch (this.tier) {
      case 1:
        if (this.ageRequirement(student) && student.knowledge >= 18)
          this.students.push(student);
        break;
      case 2:
        if (this.ageRequirement(student) && student.knowledge >= 16)
          this.students.push(student);
        break;
      case 3:
        if (this.ageRequirement(student) && student.knowledge >= 14)
          this.students.push(student);
        break;
      default:
        break;
    }
  }

  ageRequirement(student: Character) {
    return student.age >= 14 && student.age <= 18;
  }
}
