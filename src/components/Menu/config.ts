import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://beco-swap.netlify.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://beco-swap.netlify.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://becoswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://becoswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://becoswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://becoswap.info/accounts',
      },
    ],
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: '/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Becochain',
    icon: 'ChainIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Stocks',
    icon: 'StockIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Shop',
    icon: 'NftIcon',
    href: 'https://teespring.com/stores/momo-swap?page=1',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/becoswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/monmailprovisoire?tab=repositoriesp',
      },
      {
        label: 'Docs',
        href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
      },
      {
        label: 'Blog',
        href: 'https://monmailprovisoire.medium.com/',
      },
    ],
  },
]

export default config
