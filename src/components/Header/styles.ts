import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 1rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '@desktop': {
    padding: '2rem 0',
  },
})
