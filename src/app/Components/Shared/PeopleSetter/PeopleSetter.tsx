import { useRef, useState } from 'react'
import { Pressable, TextInput as RNTextInput } from 'react-native'
import { Person } from '../../../types'
import { Button } from '../../Design/Button'
import { PersonPreview } from '../../Design/PersonPreview'
import { Modal } from '../../Design/Modal'
import { TextInput } from '../../Design/Input'
import { StPeoplecontainer } from './PeopleSetter.styled'
import { PersonPreviewBubbleColors } from '../../../style/PersonPreviewBubbleColors'
import { Variables } from '../../../style'

type PeopleSetterProps = {
    people: Person[]
    addPerson: (person: Person) => void
    onPersonPress: (id: number) => void
}

export const PeopleSetter = ({ people, addPerson, onPersonPress }: PeopleSetterProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isValidName, setIsValidName] = useState<boolean>(true)
    const [name, setName] = useState<string>('')
    const nameRef = useRef<RNTextInput>(null)

    const onTextChange = (text: string) => {
        setName(text)
        setIsValidName(true)
    }

    const openModal = () => {
        setShowModal(true)
        setTimeout(() => {
            nameRef.current?.focus()
        }
        , 100)
    }

    const renderAddPersonModal = () => {
        const onContinue = () => {
            if (name.trim() == '') {
                setName('')
                setIsValidName(false)
                return
            }
            addPerson({
                id: people[people.length - 1].id + 1,
                name,
                items: [],
                total: 0,
            })
            setName('')
            setIsValidName(true)
            setShowModal(false)
        }

        const onCancel = () => {
            setName('')
            setIsValidName(true)
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
                <TextInput
                    value={name}
                    ref={nameRef}
                    label='Enter name'
                    onChangeText={onTextChange}
                    placeholder='John'
                    onSubmitEditing={onContinue}
                    error={!isValidName ? 'Name cannot be empty' : undefined}
                />
            </Modal>
        )
    }

    return (
        <>
            {showModal && renderAddPersonModal()}
            <StPeoplecontainer>
                {people.map((person, index) => {
                    return (
                        <Pressable
                            onPress={() => onPersonPress(person.id)}
                            key={index}
                        >
                            <PersonPreview
                                name={person.name}
                                bubbleColor={Object.values(PersonPreviewBubbleColors)[person.id % Object.values(PersonPreviewBubbleColors).length]}
                            />
                        </Pressable>
                    )
                })}
            </StPeoplecontainer>
            <Button
                type='text'
                color={Variables.colors.green}
                faIconLeft='plus'
                onPress={openModal}
            >
                Add person
            </Button>
        </>
    )
}