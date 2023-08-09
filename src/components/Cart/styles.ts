import { styled } from '@/styles'
import type * as Stitches from '@stitches/react'

import * as Dialog from '@radix-ui/react-dialog'

export const ShoppingCartButton = styled('button', {
  padding: '0.75rem',
  borderRadius: '0.375rem',
  background: '$gray800',
  border: 0,
  lineHeight: 0,
  transition: '0.3s',
  cursor: 'pointer',
  position: 'relative',
  color: '$gray300',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },

  variants: {
    green: {
      true: {
        background: '$green500',
        color: '$white',

        '&:hover': {
          background: '$green300',
        },

        svg: {
          width: '2rem',
          height: '2rem',
        },
      },
    },
  },
})

export type StyledCartTriggerVariants = Stitches.VariantProps<
  typeof ShoppingCartButton
>

export const CartNumberProducts = styled('div', {
  position: 'absolute',
  top: '-0.75rem',
  right: '-0.75rem',
  background: '$gray900',
  color: '$white',
  borderRadius: '50%',
  padding: '0.25rem',

  div: {
    display: 'grid',
    placeContent: 'center',
    width: '1.5rem',
    height: '1.5rem',
    background: '$green500',
    borderRadius: '50%',

    fontSize: '0.875rem',
    fontWeight: 700,
  },
})

export const CloseShoppingCartList = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  background: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray500',
  },
})

export const ShoppingCartListContainer = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',

  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  padding: '3rem',
  paddingTop: '4.5rem',

  position: 'fixed',
  top: 0,
  right: '-31rem',
  height: '100%',
  maxWidth: '30rem',
  width: '100%',
  zIndex: 999,
  transition: 'all .3s',

  '&[data-state="open"]': {
    right: 0,
  },
})

export const ProductCartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',

  height: '32rem',
  overflowY: 'auto',
  paddingRight: '0.5rem',

  '&::-webkit-scrollbar': {
    width: '3px',
    background: '$gray800',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$green500',
  },
})

export const ProductCart = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'start',

  button: {
    background: 'transparent',
    border: 0,
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.6,
    transition: '0.3s',
    cursor: 'pointer',
    marginTop: '0.5rem',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImgContainerProduct = styled('div', {
  borderRadius: '0.5rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: '0.3rem',

  img: {
    display: 'block',
    width: '5.9rem',
    height: '5.9rem',
    objectFit: 'cover',
  },
})

export const DescriptionProductCart = styled('div', {
  fontSize: '1.125rem',
  color: '$gray300',
  lineHeight: 1.6,

  variants: {
    price: {
      true: {
        color: '$gray100',
        fontWeight: 700,
      },
    },
  },
})

export const CartCheckoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '3.56rem',
  marginTop: 'auto',
  paddingTop: '1rem',
})

export const CartDetailsPrice = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr max-content',
  color: '$gray100',
  justifyContent: 'space-between',
  rowGap: '0.5rem',
  lineHeight: 1.6,

  '.text-right': {
    textAlign: 'right',
  },

  strong: {
    fontWeight: 700,
    fontSize: '1.125rem',
  },
})

export const ButtonCheckoutCart = styled('button', {
  marginTop: 'auto',
  borderRadius: 8,
  background: '$green500',
  color: '$white',
  border: 0,
  transition: '0.3s',
  padding: '1.25rem 2rem',
  cursor: 'pointer',
  width: '100%',

  fontSize: '1.125rem',
  fontWeight: 700,
  lineHeight: 1.6,

  '&:not(:disabled):hover': {
    background: '$green300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
