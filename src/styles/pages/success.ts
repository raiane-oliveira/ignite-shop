import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'grid',
  placeContent: 'center',
  placeItems: 'center',
  height: 656,
  margin: '0 auto',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: 'bold',
    lineHeight: 1.4,
    marginBottom: '1.5rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    maxWidth: '36.875rem',
    textAlign: 'center',
  },

  a: {
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: 1.6,
    textDecoration: 'none',
    transition: '0.2s',
    marginTop: '5.5rem',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3.25rem',
})

export const ImageBg = styled('div', {
  borderRadius: '50%',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
  padding: '1.22rem',
  width: '100%',
  maxWidth: '8.75rem',
  height: '8.75rem',
  overflow: 'hidden',

  '& + &': {
    marginLeft: '-2.5rem',
  },

  display: 'grid',
  placeContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
