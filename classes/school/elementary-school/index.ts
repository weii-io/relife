import { School } from "..";
import { Character } from "../../character";
import { Location } from "../../location";

export class ElementarySchool extends School {
  constructor(tier: number, location: Location, students: Character[] = []) {
    super(
      "elementary_school",
      tier,
      `Tier ${tier} Elementary School`,
      location,
      students
    );
  }

  enroll(student: Character) {
    switch (this.tier) {
      case 1:
        if (this.ageRequirement(student) && student.knowledge >= 5)
          this.students.push(student);
        break;
      case 2:
        if (this.ageRequirement(student) && student.knowledge >= 2)
          this.students.push(student);
        break;
      case 3:
        if (this.ageRequirement(student) && student.knowledge >= 0)
          this.students.push(student);
        break;
      default:
        break;
    }
  }

  ageRequirement(student: Character) {
    return student.age >= 5 && student.age <= 10;
  }
}
