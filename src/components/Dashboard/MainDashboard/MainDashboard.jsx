import {
  AddEditCard,
  AddEditColumn,
  AddIconButton,
  Card,
  Column,
} from 'components';
// import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { useState } from 'react';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { deleteCard } from '../../../redux/сard/сardOperations';
import { useDispatch } from 'react-redux';

// import { getCurrentBoardById } from 'redux/boards/selectors';
// 64f0a120f65c664a596fe318
// 64f0a158f65c664a596fe31c
// 64f0a169f65c664a596fe320
export function MainDashboard({ board }) {
  const [showModalColumn, setShowModalColumn] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);
  const dispatch = useDispatch();

  // const { payload: board } = await dispatch(getBoardByID(id));

  // console.log('board - ', board.payload);

  const handleDeleteCard = id => {
    console.log('deleteCard');
    dispatch(deleteCard(id));
  };

  const toggleModalCard = () => {
    setShowModalCard(!showModalCard);
  };

  const toggleModalColumn = () => {
    setShowModalColumn(!showModalColumn);
  };

  return (
    <div className={css.board}>
      {board?.columns.length > 0 && (
        <ul className={css.column__item}>
          {board.columns.map(column => (
            <li key={column._id} className={css.column__list}>
              <Column
                toggleModalColumn={toggleModalColumn}
                title={column.title}
              />

              <ul className={css.card__item}>
                {column.cards.map(card => (
                  <li key={card._id}>
                    <Card
                      toggleModalCard={toggleModalCard}
                      deleteCard={handleDeleteCard}
                      title={card.title}
                      desc={card.description}
                      priority={card.priority}
                      deadline={card.deadline}
                    />
                  </li>
                ))}
                <li>
                  <div className={css.button__column}>
                    <AddIconButton
                      className={css.btn__card}
                      pushButton={toggleModalCard}
                      theme="dark"
                    >
                      <span className={css.btn__text}>Add another card</span>
                    </AddIconButton>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      <AddIconButton
        pushButton={toggleModalColumn}
        className={css.btn__alonecolumn}
      >
        <span className={css.btn__text}>Add another column</span>
      </AddIconButton>
      {showModalColumn && (
        <BasicModal onClose={toggleModalColumn}>
          <AddEditColumn onClose={toggleModalColumn} />
        </BasicModal>
      )}
      {showModalCard && (
        <BasicModal onClose={toggleModalCard}>
          <AddEditCard onClose={toggleModalCard} />
        </BasicModal>
      )}
    </div>
  );
}
