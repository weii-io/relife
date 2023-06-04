import { School } from "..";

import { Character } from "../../character";
import { Location } from "../../location";

export class CommunityCollege extends School {
  constructor(tier: number, location: Location, students: Character[] = []) {
    super(
      "community_college",
      tier,
      `Tier ${tier} Community College`,
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
        if (this.ageRequirement(student) && student.knowledge >= 17)
          this.students.push(student);
        break;
      case 3:
        if (this.ageRequirement(student) && student.knowledge >= 16)
          this.students.push(student);
        break;
      default:
        break;
    }
  }

  ageRequirement(student: Character) {
    return student.age >= 18;
  }
}
