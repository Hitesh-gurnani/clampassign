
import WBTC from '../src/assets/WBTC.svg'
import WETH from "../src/assets/WETH.svg"
import USDC from "../src/assets/USDC.svg"
import WMATIC from "../src/assets/WMATIC.svg"
import DAI from '../src/assets/DAI.svg'
export const data=[
    {
        "name":"WBTC-WETH",
        "price":"-0.1%",
        "tokens":[WBTC,WETH],
        "colors":["#f19241","#e74694"]
    },
    {
        "name":"USDC-WETH",
        "price":"0.0%",
        "tokens":[USDC,WETH],
        "colors":["#2775ca","#e74694"]
    },
    {
        "name":"USDC-WBTC",
        "price":"-0.1%",
        "tokens":[USDC,WBTC],
        "colors":["#2775ca","#f19241"]
    },
    {
        "name":"WETH-WMATIC",
        "price":"-0.2%",
        "tokens":[WETH,WMATIC],
        "colors":["#e74694","#8b5cf6"]
    },
    {
        "name":"USDC-WMATIC",
        "price":"-0.2%",
        "tokens":[USDC,WMATIC],
        "colors":["#2775ca","#8b5cf6"]
    },
    {
        "name":"WBTC-WETH-USDC",
        "price":"0.0%",
        "tokens":[WBTC,WETH,USDC],
        "colors":["#f19241","#e74694","#2775ca"]
    },
    {
        "name":"WBTC-WETH-WMATIC",
        "price":"-0.2%",
        "tokens":[WBTC,WETH,WMATIC],
        "colors":["#f19241","#e74694","#8b5cf6"]
    },
    {
        "name":"DAI-USDC-WBTC",
        "price":"0.0%",
        "tokens":[DAI,USDC,WBTC],
        "colors":["#faca15","#2775ca","#f19241"]
    },
    {
        "name":"DAI-WETH-WBTC",
        "price":"0.0%",
        "tokens":[DAI,WETH,WBTC],
        "colors":["#faca15","#e74694","#f19241"]
    }
]

export default data