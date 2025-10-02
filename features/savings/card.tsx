import { TText, TView } from '@/components'
import { useColor } from '@/hooks/useColor'
import { TouchableOpacity } from 'react-native'

export function SavingsCard(params: {
  title: string
  balance: string
  percentage: string
  amountAdded: string
  desc: string
  onView: VoidFunction
  onPress?: VoidFunction
  onCreate: VoidFunction
}) {
  const theme = useColor()
  return (
    <TView
      style={{
        width: '100%',
        borderColor: theme.accent,
        borderWidth: 3,
        marginBottom: 15,
        borderRadius: 20,
      }}
    >
      <TView
        style={{
          backgroundColor: theme.card,
          paddingVertical: 8,
          paddingHorizontal: 15,
          borderRadius: 15,
        }}
      >
   

      <TView
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingVertical: 10,
          borderRadius: 15,
        }}
      >
        <TextButton title="View Plans" onClick={params.onView} />
        <TextButton title="Create Plans" onClick={params.onCreate} />
      </TView>
    </TView>
  )
}

function TextButton(params: { title: string; onClick?: VoidFunction }) {
  return (
    <TouchableOpacity onPress={params.onClick}>
      <TText style={{ fontWeight: 700, fontSize: 14 }}>{params.title}</TText>
    </TouchableOpacity>
  )
}
