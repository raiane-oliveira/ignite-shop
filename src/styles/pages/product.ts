import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  justifyItems: 'center',
  padding: '0 1.5rem',
  gap: '1.5rem',

  '@desktop': {
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4.5rem',
    padding: 0,
  },

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,

  '@desktop': {
    height: 656,
  },

  borderRadius: '0.5rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: '0.25rem',

  display: 'grid',
  placeContent: 'center',

  img: {
    maxWidth: '100%',
    objectFit: 'cover',
    height: 'auto',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    margin: '2rem 0',

    '@desktop': {
      marginTop: 'auto',
    },
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: '.3s',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})
