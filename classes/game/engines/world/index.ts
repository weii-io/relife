import { Location } from "../../../location";
import { World } from "../../../world";

export class WorldEngine {
  constructor() {}

  public generateWorld() {
    const city = "New York City";
    const state = "New York";
    const country = "United States of America";

    const location = new Location(
      "New York City",
      "New York",
      "United States of America"
    );

    return new World(location);
  }
}
