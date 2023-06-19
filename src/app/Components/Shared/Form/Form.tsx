import { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { Variables } from '../../../style'
import { Container } from '../../Design/Container'

type FormProps = {
    width?: number | string
    initialValues: any
    validationSchema: any
    onSubmit: (values: any) => void
    children: ReactNode
}

export const Form = ({ width, initialValues, validationSchema, onSubmit, children }: FormProps) => {
    return (
        <Formik
            validateOnMount={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 200}
            >
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    <Container
                        width={width}
                        gap={Variables.sizes.large}
                        alignItems='center'
                    >
                        {children}
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </Formik>
    )
}