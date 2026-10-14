import Member111111 from "./member.js";

export default class Admin extends Member111111 {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
}
