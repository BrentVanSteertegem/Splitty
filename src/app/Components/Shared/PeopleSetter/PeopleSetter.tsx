import { useState } from 'react'
import { Pressable } from 'react-native'
import { Person } from '../../../types'
import { Button } from '../../Design/Button'
import { PersonPreview } from '../../Design/PersonPreview'
import { Modal } from '../../Design/Modal'
import { Text } from '../../Design/Text'
import { TextInput } from '../../Design/Input'
import { StPeoplecontainer } from './PeopleSetter.styled'
import { PersonPreviewBubbleColors } from '../../../style/PersonPreviewBubbleColors'
import { MediumHorizontalPadding } from '../../Design/Padding'
import { Variables } from '../../../style'

type PeopleSetterProps = {
    people: Person[]
    setPeople: (people: Person[]) => void
}

export const PeopleSetter = ({ people, setPeople }: PeopleSetterProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    const renderAddPersonModal = () => {
        const onContinue = () => {
            if (name.trim() == '') {
                return window.alert('Name cannot be empty')

            }
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
                buttons={[
                    <Button
                        key={0}
                        type='negative'
                        onPress={onCancel}
                    >
                        Cancel
                    </Button>,
                    <Button
                        key={1}
                        onPress={onContinue}
                    >
                        Add person
                    </Button>
                ]}
            >
                <MediumHorizontalPadding>
                    <Text>Enter name</Text>
                </MediumHorizontalPadding>
                <TextInput
                    focus={true}
                    onChangeText={setName}
                    placeholder='John'
                    onSubmitEditing={onContinue}
                />
            </Modal>
        )
    }
    
    const renderPeople = (people: Person[]) => {
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
            <StPeoplecontainer>
                {renderPeople(people)}
            </StPeoplecontainer>
            <Button
                type='text'
                color={Variables.colors.green}
                faIconLeft='plus'
                onPress={() => setShowModal(true)}
            >
                Add person
            </Button>
        </>
    )
}