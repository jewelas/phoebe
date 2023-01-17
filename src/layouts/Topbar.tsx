import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

import Menu from 'assets/images/menu.png'
import Search from 'assets/images/search.png'

interface Pros {
    isMenuOn: boolean
    setIsMenuOn: any
    isDropDownOn: boolean
    setIsDropDownOn: any
}

const Topbar: React.FC<Pros> = ({isMenuOn, setIsMenuOn, isDropDownOn, setIsDropDownOn}) => {
    return (
        <StyledContainer display={'flex'} alignItems={'center'} width='100%'>
            <MenuBtn onClick={() => {setIsMenuOn(!isMenuOn)}}>
                <Box>
                    <img src={Menu} alt='' />
                </Box>
                <Text ml='15px'>MENU</Text>
            </MenuBtn>
            <Box width='calc(100% - 120px - 123px)' display={'flex'} pl='25px' position={'relative'}>
                <img src={Search} alt='' />
                <Title>phoebe heese</Title>
            </Box>
            <Box pl='34px' pr='32px' display={'flex'} alignItems={'center'} width="54px" borderLeft="1px solid #c4c4c4" height="100%" onClick={() => {setIsDropDownOn(!isDropDownOn)}}>
                <Text >DROPS</Text>
            </Box>
        </StyledContainer>
    );
}

const MenuBtn = styled(Box)`
    padding-left: 24px;
    padding-right:22px;
    display:flex;
    align-items: center;
    width: 75px;
    height: 100%;
    border-right: 1px solid #c4c4c4;
`

const Title = styled(Box)`
    color: #101010;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
`

const Text = styled(Box)`
    font-weight: 250px;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 3%;
    text-align: center;
`

const StyledContainer = styled(Box)`
    height: 80px;
    background: transparent;
    border-bottom: 1px solid #C4C4C4;
    position: fixed;
    z-index: 10;
`

export default Topbar;