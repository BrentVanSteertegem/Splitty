import { useState } from 'react'
import { Pressable } from 'react-native'
import { PersonProps } from '../../../types'
import { Button } from '../../Design/Button'
import { Offset } from '../../Design/Offset'
import { PersonPreview } from '../../Design/PersonPreview'
import { Modal } from '../../Design/Modal'
import { Text } from '../../Design/Text'
import { TextInput } from '../../Design/Input'
import { StPeoplecontainer } from './PeopleSetter.styled'
import { PersonPreviewBubbleColors } from '../../../style/PersonPreviewBubbleColors'

type PeopleSetterProps = {
    people: PersonProps[]
    setPeople: (people: PersonProps[]) => void
}

export const PeopleSetter = ({ people, setPeople }: PeopleSetterProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    const renderAddPersonModal = () => {
        const onContinue = () => {
            setPeople([...people, { 
                id: people[people.length - 1].id + 1,
                name,
                items: [],
                total: 0,
            }])
            setName('')
            setShowModal(false)
        }

        const onCancel = () => {
            setName('')
            setShowModal(false)
        }

        return (
            <Modal
                onCancel={onCancel}
                onCancelText='cancel'
                onContinue={onContinue}
                onContinueText='Add person'
            >
                <Offset>
                    <Text>Enter name</Text>
                </Offset>
                <TextInput
                    focus={true}
                    onChangeText={setName}
                    placeholder='John'
                    onSubmitEditing={onContinue}
                />
            </Modal>
        )
    }
    
    const renderPeople = (people: PersonProps[]) => {
        const deletePersonPreview = (name: string) => {
            people.splice(people.findIndex(person => person.name == name), 1)
            setPeople([...people])
        }
        return people.map((person, index) => {
            return (
                <Pressable
                    onPress={() => deletePersonPreview(person.name)}
                    key={index}
                >
                    <PersonPreview
                        name={person.name}
                        bubbleColor={Object.values(PersonPreviewBubbleColors)[person.id % Object.values(PersonPreviewBubbleColors).length]}
                    />
                </Pressable>
            )
        })
    }

    return (
        <>
            {showModal && renderAddPersonModal()}
            <Offset>
                <StPeoplecontainer>
                    {renderPeople(people)}
                </StPeoplecontainer>
            </Offset>
            <Button
                faIconLeft='plus'
                onPress={() => setShowModal(true)}
                >
                Add person
            </Button>
        </>
    )
}