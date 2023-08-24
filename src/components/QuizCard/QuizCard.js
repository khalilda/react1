import { useState } from "react";
import { Topic, Wrapper, Text } from "./QuizCard.styled";
import { useState } from "react";



const customStyle = {
    content: {
        top: '50',
        left: '50%',
        right: 'auto',
        buttom: 'auto',
        marginRight: '-50%',
        transfrom: 'translate(-50%, -50%)',
    },
};

modal.setAppElement('#root');

export const QuizCard ({
    item: { id, topic, level, time, questions},
    onDelete
}) => {



    const [isModalOpen, setIsModalOpen] = useState(false);
    
  


    return (
        <Wrapper>
            <Topic onClick={() => setIsModalOpen(true)}>{topic}</Topic>
            <Text>
                <b>Level: {level}</b>
            </Text>
            <Text>
                <b>Time: {time} min</b>
            </Text>
            <Text>
                <b>Questions: {questions}</b>
            </Text>
            <div>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>

            <Modal 
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h1>{topic}</h1>
                <button onClick={() => setIsModalOpen(flase)}>close</button>
            </Modal>
        </Wrapper>
    
    );
}






    


