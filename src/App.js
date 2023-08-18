import { QuizList } from './components/QuizList/QuizList';
import quizItems from '../data.json'
import { SearchBar } from "./components/SearchBar/SearchBar";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
import { IconButton } from 'components/IconButton/IconButton';


export const App = () => {
  return (
    <Layout>
      <SearchBar/> 
      <QuizList items={quizItems}/>
      
      <IconButton variant="primary" size= "sm">
        <HiAcademicCap  />
      </IconButton>
      <IconButton variant="secondary" size="md">
        <HiAdjustments  />
      </IconButton>
      <IconButton variant="second" size="lg">
        <HiArchive  />
      </IconButton>
      
      <GlobalStyle />
    </Layout>
  ); 
};