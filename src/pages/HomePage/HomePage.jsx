import React, { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard, SideBar } from 'components';
import Backdrop from 'components/Backdrop/Backdrop';
import Header from 'components/AppShell/Header/Header';
import ScreenSizeInfo from 'components/Controllers/ScreenSiziInfo';
import { useDispatch } from 'react-redux';
import { setModalStatus } from 'redux/modalSlice';
import { useTheme } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { HomePageView, ScreenPage } from '../../components';
import { setNewBoardCreate } from '../../redux/modalSlice';
import { fetchBoards } from '../../redux/boards/operations';
import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';
import { selectBoards } from 'redux/boards/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const { boardId } = useParams();
  const isBoardId = boardId ? true : false;
  const history = createBrowserHistory();
  const navigate = useNavigate();

  const boards = useSelector(selectBoards);

  const [prevBoardsLength, setPrevBoardsLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBoards());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (boards.length > prevBoardsLength) {
      const idNewBoard = boards[0]._id;
      navigate(`/home/${idNewBoard}`);
      dispatch(setNewBoardCreate(false));
    }
    setPrevBoardsLength(boards.length);
  }, [boards, prevBoardsLength, navigate, dispatch]);

  useEffect(() => {
    function handleResize() {
      setIsMenuOpen(prevIsMenuOpen => {
        if (showModal) {
          return false;
        } else {
          return window.innerWidth >= 1440 ? true : prevIsMenuOpen;
        }
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showModal, boards, history, dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const createBoard = () => {
    dispatch(setModalStatus(false));
    // dispatch(setNewBoardCreate(true));
    // console.log('setNewBoardCreate(true)');
    toggleModal();
  };

  const editBoard = id => {
    toggleModal();
    dispatch(setModalStatus(true));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ScreenSizeInfo />
      <Header toggleMenu={toggleMenu} addModal={createBoard}></Header>
      <div className={css.sideBarSectionContainer}>
        <SideBar
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          editBoard={editBoard}
          createBoard={createBoard}
        ></SideBar>

        {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
        <section
          style={{ background: theme.screensPage.background }}
          className={css.section}
        >
          {isBoardId ? (
            <ScreenPage id={boardId} />
          ) : (
            <HomePageView theme={theme} createBoard={createBoard} />
          )}

          {showModal && (
            <BasicModal onClose={createBoard}>
              <AddEditBoard onClose={toggleModal} boardId={boardId} />
            </BasicModal>
          )}
        </section>
      </div>
    </>
  );
};

export default HomePage;
