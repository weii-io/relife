import { School } from "..";

import { Character } from "../../character";
import { Location } from "../../location";

export class University extends School {
  constructor(tier: number, location: Location, students: Character[] = []) {
    super("university", tier, `Tier ${tier} University`, location, students);
  }

  enroll(student: Character) {
    switch (this.tier) {
      case 1:
        if (this.ageRequirement(student) && student.knowledge >= 35)
          this.students.push(student);
        break;
      case 2:
        if (this.ageRequirement(student) && student.knowledge >= 30)
          this.students.push(student);
        break;
      case 3:
        if (this.ageRequirement(student) && student.knowledge >= 25)
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
