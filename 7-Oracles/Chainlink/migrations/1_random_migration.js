const Random = artifacts.require("Random");

const subscriptionId = 8938;

module.exports = function (deployer) {
  deployer.deploy(Random, subscriptionId);
};
