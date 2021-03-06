import React, { Fragment } from 'react'
import { Box, Text, HorizontalRule, P, Flex } from 'serverless-design-system'
import styled from 'styled-components'

const Point = styled(P)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  color: white;
  margin-bottom: 17px;
  font-family: 'Soleil';
`

const HorizontalStyle = styled(HorizontalRule)`
  border-top-style: solid;
  border-color: #eaeaea;
`

const ComparisonBox = ({ points, heading }) => (
  <Box color='white' px={'32px'} pt={'92px'} pb={'16px'}>
    <Text fontSize={['16px']} letterSpacing='0.67px' m={0}>
      serverless framework
    </Text>
    <Text fontSize={['36px']} letterSpacing={['1.5px']} mb={['62px']}>
      {heading}
    </Text>

    {points.map((point, index) => {
      return (
        <Fragment key={point}>
          <HorizontalStyle color='#eaeaea' height='1px' width='100%' />
          <Flex
            flexDirection={['column', 'column', 'row']}
            justifyContent='space-between'
          >
            <Box width={[1, 1, 0.5]} pr={[0, 0, 0, 2, 3]}>
              <Point>{point[0]}</Point>
            </Box>
            <Box
              display={[
                index == 0 || heading == 'open source' ? 'none' : 'block',
                index == 0 || heading == 'open source' ? 'none' : 'block',
                'none',
              ]}
            >
              <HorizontalStyle color='#eaeaea' height='1px' width='100%' />
            </Box>
            <Box width={[1, 1, 0.5]}>
              <Point>{point[1]}</Point>
            </Box>
          </Flex>
        </Fragment>
      )
    })}
  </Box>
)

export default ComparisonBox
