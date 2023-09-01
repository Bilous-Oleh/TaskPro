import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './AddEditColumn.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn, editColumn } from 'redux/columns/columnsOperations';
import { useTheme } from '@emotion/react';
import columnSchema from '../Schemas/columnSchema';

export default function AddEditColumn({ onClose, isEditing, columnId }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    console.log();
    try {
      if (!isEditing) {
        await dispatch(addColumn({ title: values.title }));
      } else {
        await dispatch(editColumn({ title: values.title, id: columnId }));
      }
      resetForm();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg
          style={{ stroke: theme.popUp.closeIconColor }}
          width="18"
          height="18"
        >
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleBoard}>
        {!isEditing ? 'Add column' : 'Edit column'}
      </h3>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={columnSchema}
      >
        <Form>
          <label className={css.label}>
            <ErrorMessage
              className={css.errorMessage}
              name="title"
              component="p"
            />
            <Field
              style={{
                color: theme.popUp.inputTextColor,
                borderColor: theme.popUp.inputBorderColor,
                '::placeholder': { color: theme.popUp.inputPlaceholderColor },
              }}
              className={css.input}
              type="text"
              name="title"
              placeholder="Title"
            />
          </label>
          <AddIconButton buttonType="submit" className={css.btn}>
            <span
              style={{ color: theme.popUp.buttonTextColor }}
              className={css.btnSumbitAction}
            >
              Add
            </span>
          </AddIconButton>
        </Form>
      </Formik>
    </>
  );
}
