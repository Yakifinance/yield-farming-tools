import { Tokens } from '../../../data/TokenManager'
import { StakingPool, PoolToken } from '../../../data/token'
import { SYNTHETIX_STAKING_ABI } from '../../../data/constants'
import { getSnxBasedBalPool } from '../../pool-templates/lp-staking'
import { PoolData, RiskLevel } from '../../../types'
// todo: pool data
const mtaPoolData: PoolData = {
  provider: 'mStable',
  name: 'Bal',
  added: '2020-08-09 22:50:58',
  risk: {
    smartContract: RiskLevel.LOW,
    impermanentLoss: RiskLevel.LOW,
  },
  links: [
    {
      title: 'Info',
      link: 'https://medium.com/mstable/introducing-mstable-earn-6ac5f4e7560e',
    },
    {
      title: 'Balancer Pool',
      link:
        'https://pools.balancer.exchange/#/pool/0x72Cd8f4504941Bf8c5a21d1Fd83A96499FD71d2C',
    },
    {
      title: 'Stake',
      link: 'https://app.mstable.org/earn',
    },
  ],
}
// todo: add bal rewards
export const mUsdUsdc = async (tokens: Tokens) => {
  const stakingPool = new StakingPool({
    address: '0x881c72D1e6317f10a1cDCBe05040E7564E790C80',
    ABI: SYNTHETIX_STAKING_ABI,
  })

  const liquidityPool = new PoolToken(
    {
      address: '0x72Cd8f4504941Bf8c5a21d1Fd83A96499FD71d2C',
      ticker: 'BPT',
    },
    {
      poolToken1: tokens.musd,
      poolToken2: tokens.usdc,
    }
  )

  const data = await getSnxBasedBalPool(
    {
      stakingPool,
      liquidityPool,
      rewardToken: tokens.mta,
    },
    mtaPoolData
  )
  console.log(data)

  return data
}

export const mtaWeth = async (tokens: Tokens) => {
  const stakingPool = new StakingPool({
    address: '0x9B4abA35b35EEE7481775cCB4055Ce4e176C9a6F',
    ABI: SYNTHETIX_STAKING_ABI,
  })

  const liquidityPool = new PoolToken(
    {
      address: '0x0d0d65E7A7dB277d3E0F5E1676325E75f3340455',
      ticker: 'UNI-V2',
    },
    {
      poolToken1: tokens.mta,
      poolToken2: tokens.weth,
    }
  )

  const data = await getSnxBasedBalPool(
    {
      stakingPool,
      liquidityPool,
      rewardToken: tokens.mta,
    },
    mtaPoolData
  )

  return data
}

export const musdWeth = async (tokens: Tokens) => {
  const stakingPool = new StakingPool({
    address: '0xf7575D4D4DB78F6Ba43C734616C51E9fD4bAA7fb',
    ABI: SYNTHETIX_STAKING_ABI,
  })

  const liquidityPool = new PoolToken(
    {
      address: '0xe036CCE08cf4E23D33bC6B18e53Caf532AFa8513',
      ticker: 'BPT',
    },
    {
      poolToken1: tokens.musd,
      poolToken2: tokens.weth,
    }
  )

  const data = await getSnxBasedBalPool(
    {
      stakingPool,
      liquidityPool,
      rewardToken: tokens.mta,
    },
    mtaPoolData
  )

  return data
}

export const musdMta = async (tokens: Tokens) => {
  const stakingPool = new StakingPool({
    address: '0xf4a7d2d85F4BA11B5C73c35E27044c0c49F7f027',
    ABI: SYNTHETIX_STAKING_ABI,
  })

  const liquidityPool = new PoolToken(
    {
      address: '0xa5DA8Cc7167070B62FdCB332EF097A55A68d8824',
      ticker: 'BPT',
    },
    {
      poolToken1: tokens.musd,
      poolToken2: tokens.mta,
    }
  )

  const data = await getSnxBasedBalPool(
    {
      stakingPool,
      liquidityPool,
      rewardToken: tokens.mta,
    },
    mtaPoolData
  )

  return data
}