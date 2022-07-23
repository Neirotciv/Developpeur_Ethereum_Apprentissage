const { ChainId, Fetcher, WETH, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk');
const ethers = require('ethers');

// Fetcher - classe statique, appel directement des méthodes 

const chainId = ChainId.ROPSTEN; // 1 - ROPSTEN, RINKEBY, MAINET
const tokenAddress = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'; // DAI address ropsten
 
const init = async () => {
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress); // Objet Token {decimals, symbol, name, ...}
    const weth = WETH[chainId]; // Les différents Wrapped Ether sur toute les chaînes
    const pair = await Fetcher.fetchPairData(dai, weth); // Objet Pair {liquidityToken, tokenAmounts}, créer une nouvelle pair
    const route = new Route([pair], weth); // Route entre le token d'entrée et le token de sortie pour faciliter les interactions avec la paire
    const trade = new Trade(route, new TokenAmount(weth, '100000000000000000'), TradeType.EXACT_INPUT); // Pour avoir le prix à l'instant T, besoind de créer un trade

    // toSignificant. Fraction, classe de base

    // Prix théoriques
    console.log("midPrice", route.midPrice.toSignificant(6)); // Formate une fraction avec le nombre spécifié de chiffres
    console.log("midPrice invert", route.midPrice.invert().toSignificant(6)); // Inverse le numérateur et le dénominateur de la fraction
    // Prix du trade
    console.log("executionPrice", trade.executionPrice.toSignificant(6));
    console.log("nextMidPrice", trade.nextMidPrice.toSignificant(6));
    
    const slippageTolerance = new Percent('50', '10000'); // tolérance prix 50 bips = 0.050%
    
    const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw; // minimum des tokens à récupérer avec une tolérance de 0.050%
    const path = [weth.address, dai.address]; // les tokens à échanger
    const to = '';
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // le délai après lequel le trade n’est plus valable, timestamp en millisecondes, /1000 = secondes
    const value = trade.inputAmount.raw; // la valeur des ethers à envoyer 
}
 
init();