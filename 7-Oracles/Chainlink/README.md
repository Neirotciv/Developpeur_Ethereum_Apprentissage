# Oracles Chainlink

## Utilisation d'un Data Feed
Testnet Kovan
```bash
# Initialisation
npm init -y
npm truffle init
npm install @chainlink/contracts @openzeppelin/contracts @truffle/hdwallet-provider dotenv
```

Récupérer le prix d'un actif en connectant un data feed à son contrat

Le contrat doit avoir une référence à l'interface **AggregatorV3Interface**

```javascript
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// Dans le contrat
AggregatorV3Interface internal priceFeed;
```

- [Contrat de récupération d'un prix](https://docs.chain.link/docs/get-the-latest-price/#solidity)

- [Data Feeds Kovan](https://docs.chain.link/docs/ethereum-addresses/#Kovan%20Testnet)

Après avoir déployé le contrat sur Kovan, récupération du prix dans la console
```javascript
truffle console --network kovan

const instance = await nomDuContrat.deployed()
let price = await instance.getLatestPrice()
price.toString()
```

---
## Générer un nombre aléatoire Chainlink VRF
Testnet Rinkeby
- [VRF](https://docs.chain.link/docs/chainlink-vrf/)

L'utilisation de VRF consomme du LINK, afin de ne pas avoir à valider une transaction à chaque fois que l'on à besoin d'un nombre aléatoire, il faut souscrire à un contrat et prépayer les transactions. https://vrf.chain.link/new

Sélectionner **I'll do it later** après avoir ajouté les fonds pour récupérer l'id de souscription.

Après avoir déployé le contrat, récupérer l'adresse et l'ajouter en tant que consumer.

Après avoir déployé le contrat sur Rinkeby, récupération du prix dans la console
```javascript
truffle console --network rinkeby

const instance = await nomDuContrat.deployed()
let randomWords = await instance.requestRandomWords()
let nombre = await instance.s_randomWords.call(0)
nombre.toString()
```