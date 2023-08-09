import {
  BigLoader,
  BtnLoader,
  ContainerLoader,
  LineLoader,
  Loaders,
  SmallLineLoader,
} from './styles'

export function Loading() {
  return (
    <ContainerLoader>
      <BigLoader />
      <Loaders>
        <LineLoader />
        <SmallLineLoader />

        <LineLoader />
        <LineLoader />

        <BtnLoader />
      </Loaders>
    </ContainerLoader>
  )
}
