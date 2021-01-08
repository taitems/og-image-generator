import React from 'react'
import { Box } from '@chakra-ui/react'

const EmptyState = ({ text }) => (
    <Box textAlign="center" fontSize="14px" color="gray.600" py={2}>{text}</Box>
)

export { EmptyState }