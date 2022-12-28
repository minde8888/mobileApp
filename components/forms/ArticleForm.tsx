import React from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput, GestureResponderEvent } from 'react-native';
import { globalStyle } from '../../styles/globalStyle';
import { Formik } from 'formik';
import { articleProps } from '../main/Main';

interface AddArticle {
    addArticle: (values: articleProps) => void;
}

export default function ArticleForm({ addArticle }: AddArticle) {
    return (
        <View style={globalStyle.main}>
            <Formik onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm();
            }} initialValues={{ name: '', anons: '', full: '', img: '' }} >
                {({ handleChange,
                    handleSubmit,
                    values,
                    errors, }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={values.name}
                            placeholder='name'
                            onChangeText={handleChange('name')} />
                        <TextInput
                            style={styles.input}
                            value={values.anons}
                            multiline
                            placeholder='anons'
                            onChangeText={handleChange('anons')} />
                        <TextInput
                            style={styles.input}
                            value={values.full}
                            multiline
                            placeholder='content'
                            onChangeText={handleChange('full')} />
                        <TextInput
                            style={styles.input}
                            value={values.img}
                            placeholder='Picture'
                            onChangeText={handleChange('img')} />
                        <View style={styles.submit}>
                            <Button
                                onPress={
                                    handleSubmit as (values:
                                        GestureResponderEvent |
                                        React.FormEvent<HTMLFormElement> |
                                        undefined) => void
                                } title="Submit" />
                        </View>

                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5
    },
    submit: {
        marginTop: 15
    }

});