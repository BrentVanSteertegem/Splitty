import { Pressable, ScrollView, View } from 'react-native'
import { PersonPreview } from '../../Design/PersonPreview'
import { Variables } from '../../../style'
import { PersonProps } from '../../../types'
import { StActivePersonPreviewContainer, StPersonSelector } from './PersonSelector.styled'
import { PersonPreviewBubbleColors } from '../../../style/PersonPreviewBubbleColors'

type PersonSelectorProps = {
    people: PersonProps[]
    activePersonIndex: number
    setActivePersonIndex: (index: number) => void
}

export type StActivePersonPreviewContainerProps = {
    key?: number
    hasNext: boolean
}

export const PersonSelector = ({people, activePersonIndex, setActivePersonIndex}: PersonSelectorProps) => {
    return (
        <View>
            <ScrollView horizontal={true}>
                <StPersonSelector>
                    <View style={{width:Variables.spacing.medium}}/>
                    {people.map(( person, index ) => index == activePersonIndex ? (
                        <StActivePersonPreviewContainer
                        key={index}
                        hasNext={index !== people[people.length - 1].id}
                        >
                            <PersonPreview
                                name={person.name}
                                bubbleColor={Object.values(PersonPreviewBubbleColors)[person.id % Object.values(PersonPreviewBubbleColors).length]}
                                gap={Variables.spacing.xxsmall}
                                />
                        </StActivePersonPreviewContainer>
                    ) : (
                        <Pressable
                        key={index}
                        onPress={() => setActivePersonIndex(index)}
                        >
                            <PersonPreview
                                name={person.name}
                                showFullName={false}
                                bubbleColor={Object.values(PersonPreviewBubbleColors)[person.id % Object.values(PersonPreviewBubbleColors).length]}
                                />
                        </Pressable>
                    ))}
                    <View style={{width:Variables.spacing.medium}}/>
                </StPersonSelector>
            </ScrollView>
        </View>
    )
}