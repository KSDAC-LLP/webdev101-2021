export default class User {
  constructor(id = 0, email = "", role = "", password = "", dob = new Date()) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.password = password;
    this.dob = dob;
  }

  static NewRandomUser() {
    let id = Math.round(Math.random()*100)+"-"+ Date.now();
    let email = id.substr(0,5)+"@somedomain.com";
    let role = Date.now() % 2 === 0 ? "FIRST YEAR" : "THIRD YEAR";
    let password = "klasjdklasd89&U#lkJE9812y3h^&#TUHK";
    let dob = new Date(Date.now() - Math.round(Math.random() * 100000));
    return new User(id, email, role, password, dob);
  }
}

export const defaultUsers = [
  new User(10001, "hanutsingh@gmail.com", "ADMIN", "abcd@123", new Date()),
  new User(
    10002,
    "tarundeep.10101@gmail.com",
    "SECOND YEAR",
    "uioahjwelkdj*)(#@*",
    new Date()
  ),
  new User(
    10003,
    "chiragmandyal82@gmail.com",
    "FINAL YEAR",
    "aklsud8u912jelkad",
    new Date()
  ),
];
