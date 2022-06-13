class Person {
  firstName;
  lastName;
  middleName;
  constructor(data = {}) {
    this.firstName = data.firstName || "";
    this.lastName = data.lastName || "";
    this.middleName = data.middleName;
  }
}

describe("Modal component", () => {
  it("opens on click", () => {
    expect(true).toBe(false);
  });
});
