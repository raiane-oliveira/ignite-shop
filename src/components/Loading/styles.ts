import { styled } from '@/styles'

export const ContainerLoader = styled('main', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4.5rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Loaders = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: '1',
})

const BaseLoader = styled('div', {
  borderRadius: '0.5rem',
  background: '$gray800',
})

export const BigLoader = styled(BaseLoader, {
  maxWidth: '36.5rem',
  width: '100%',
  height: '41rem',
})

export const LineLoader = styled(BaseLoader, {
  height: '2rem',
  width: '100%',

  '&:nth-child(3)': {
    marginTop: '3rem',
  },
})

export const SmallLineLoader = styled(BaseLoader, {
  width: '8.25rem',
  height: '2rem',
})

export const BtnLoader = styled(BaseLoader, {
  width: '100%',
  marginTop: 'auto',
  padding: '2rem',
})
