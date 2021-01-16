const { ethers } = require("hardhat");
const { solidity } = require("ethereum-waffle");
const chai = require("chai");

chai.use(solidity);

describe("OpynV2 contract", function () {
  let owner;
  let OpynV2;
  let opynV2;

  beforeEach(async function () {
    // the owner is the account that makes deployment
    [owner] = await ethers.getSigners();

    OpynV2 = await ethers.getContractFactory("DeriOneV1OpynV2");
    opynV2 = await OpynV2.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      chai.expect(await opynV2.owner()).to.equal(owner.address);
    });
  });

  describe("Testing OpynV2", function () {
    it("testing the otokenfactory token lenght get function", async function () {
      await opynV2.getOtokensLength();
      await opynV2.getOtokensInARange();
      chai.expect(await opynV2.length()).to.equal(25);
    });
  });
});
