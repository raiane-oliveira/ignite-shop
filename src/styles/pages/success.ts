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
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    maxWidth: 560,
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
  borderRadius: '0.5rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: '1.22rem 0.3rem',
  width: '100%',
  maxWidth: 130,
  height: 145,
  margin: '4rem 0 2rem 0',

  display: 'grid',
  placeContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
