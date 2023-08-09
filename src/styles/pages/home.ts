import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',

  '@desktop': {
    minHeight: 656,
  },
  position: 'relative',
})

const BaseButtonSlider = styled('button', {
  display: 'none',
  position: 'absolute',
  height: '100%',
  zIndex: 9999,
  border: 0,

  cursor: 'pointer',

  '&:disabled': {
    display: 'none',
  },

  svg: {
    width: '2rem',
    height: '2rem',
    color: '$gray300',
  },

  '@desktop': {
    display: 'block',
    paddingRight: '1rem',
    paddingLeft: '4.5rem',

    svg: {
      width: '3rem',
      height: '3rem',
    },
  },
})

export const PrevButtonSlider = styled(BaseButtonSlider, {
  background:
    'linear-gradient(to left, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  left: 0,
})

export const NextButtonSlider = styled(BaseButtonSlider, {
  background:
    'linear-gradient(to right, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  right: 0,
})

export const Product = styled('div', {
  display: 'grid',
  placeContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  color: '$gray100',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',

    background: 'rgba(0,0,0,0.6)',

    '@desktop': {
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
    },

    strong: {
      fontSize: '$lg',
      lineHeight: '1.6',
    },

    span: {
      display: 'block',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      marginTop: '0.25rem',
      lineHeight: '1.4',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
