import { QuizList } from './components/QuizList/QuizList';
import initialQuizItems from '../data.json'
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Layout } from './Layout';
import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
import { IconButton } from 'components/IconButton/IconButton';
import { Component, useState } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { LevelFilter } from 'LevelFilter';
import { TopicFilter } from 'TopicFilter';
import { createQuiz, deleteQuiz, fetchQuizzes } from 'api';
import { useEffect, useState } from 'react';


const localStorageKey = 'quiz-filters';

const initialFilters = {
  topic: '';
  level: 'all';
}




export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [ filters, setFilters] = useState(initialFilters);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true)
        const quizItems = await fetchQuizzes();
        setQuizItems(quizItems);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getQuizzes();
  }, []);
  useEffect(() => {
    console.log('[filters]')
    localStorage.setItem(localStorageKey, JSON.stringify(filters));
  }, [filters])
  const resetFilters = () => {
    setFilters = (initialFilters);
  };


  const changeTopicFilter = newTopic => {
    setFilters(prevState => ({
      ...prevState,
      topic: newTopic
    }))
  };


  const changeLevelFilter = newLevel => {
    setFilters(prevState => ({
      ...prevState,
      level: newLevel,
    }));
  };


  const addQuiz = async newQuiz => {
    try { 
      const createdQuiz = await createQuiz(newQuiz);

      setQuizItems(prevState => [...prevState, createdQuiz]);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteQuiz = async quizId => {
    try {
      const deleteQuiz = await deleteQuiz(quizId);
      setQuizItems(prevState => prevState.filter(quiz => quiz.id !== deletedQuiz.id)
      );
    } catch (error) {
      console.log(error);
    }
  }
  

  const getVisibleQuizItems = () => {
    const { quizItems, filters } = this.state;
    

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      const hasMatchingLevel = quiz.level === filters.level;
      return filters.level === 'all' ? hasTopic : hasTopic && hasMatchingLevel;
    });
  };

  const visibleQuizItems = getVisibleQuizItems();

  return (
    <Layout>
    <SearchBar onReset={resetFilters}>
      <TopicFilter
       value={filters.topic}
       onChange={changeTopicFilter}
      />
      <LevelFilter
       value={filters.level}
       onChange={changeLevelFilter}
      />
    </SearchBar>
    <QuizForm onAdd={addQuiz}  />

    {loading ? (
      <div>LOADING...</div>
    ) : (
      <QuizList items={visibleQuizItems} onDelete={handleDelete} />
    )}
  </Layout>
  )
};