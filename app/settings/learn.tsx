import { Wrapper, HeaderBar } from '@/components/layout'
import React from 'react'
import { Row, TView } from '@/components'
import { ActivityIndicator, Linking } from 'react-native'
import { Api, StaticLinkGroup } from '@/graphql'

export default function Page() {
  const { data, loading: isLoading } = Api.useStatic_GetLinks()

  if (isLoading) {
    return (
      <Wrapper>
        <HeaderBar title="Learn" showBackBtn backTo="/settings" />
        <ActivityIndicator />
      </Wrapper>
    )
  }

  return (
    <>
      <HeaderBar title="Learn" showBackBtn backTo="/settings" />
      <Wrapper>
       
      </Wrapper>
    </>
  )
}
