import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        {children}
    </Web3ReactProvider>
  )
}

export default Providers
