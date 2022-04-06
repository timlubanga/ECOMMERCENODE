const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");

const {
  correctuserDetails,
  invaliUserEmail,
  UserinvalidPassword,
} = require("./test_data");
const { testDatabaseConnect, databaseClose } = require("../test/testdatabase");

describe("/POST/register", () => {
  before((done) => {
    require("dotenv").config({ path: ".env" });
    testDatabaseConnect();

    done();
  });

  after((done) => {
    databaseClose()
      .then(() => done())
      .catch((err) => done(err));
  });

  it("successfully register a user with email password", (done) => {
    request(app)
      .post("/api/v1/users/register")
      .send(correctuserDetails)
      .then((res) => {
        const body = res.body;
        expect(body).to.have.property("token");
        expect(body).to.be.an("object");
        done();
      })

      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("check invalid mailerror", (done) => {
    request(app)
      .post("/api/v1/users/register")
      .send(invaliUserEmail)
      .then((res) => {
        expect(res.status).equals(400);
        expect(res.body.message).equals(
          "ValidationError: email: please provide a valid email address"
        );

        done();
      })

      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("check for input validation", (done) => {
    request(app)
      .post("/api/v1/users/register")
      .send(UserinvalidPassword)
      .then((res) => {
        expect(res.status).equals(400);
        expect(res.body.status).equals("fail");
        expect(res.body.message).equals(
          "ValidationError: confirmPassword: The passwords are not the same"
        );
        done();
      })

      .catch((err) => {
        console.log(err);
        done();
      });
  });
});
