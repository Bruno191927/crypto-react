import styled from '@emotion/styled';
import '../styles/Spinner.css';
const Center = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    width: 100%;
`;
const Spinner = () => {
  return (
    <Center>
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </Center>
  )
}

export default Spinner