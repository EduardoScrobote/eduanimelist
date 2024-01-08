import { Theme } from "@/constants/Theme";
import styled from "styled-components";

export const HomeMainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeMainDivArrow = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 7rem;
  height: 7rem;
  margin: 32px;
  border-radius: 50%;
  background-color: slategray;
  &:hover {
    cursor: pointer;
    background-color: #809090;
  }
`;

export const HomeContainer = styled.div`
  width: 60%;
  height: 100em;
  border-radius: 38px;
`;

export const CoverImage = styled.div<{ bgImg: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AnimeContainer = styled.div`
  width: 85%;
  height: 100vh;
  border: 2px solid ${Theme.colors.primary};
  border-radius: 26px;
  background: rgba(11, 11, 11, 0.93);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.8px);
  -webkit-backdrop-filter: blur(1.8px);
  border: 1px solid rgba(11, 11, 11, 0.3);
`;

export const AnimeHeader = styled.div`
  width: 100%;
  height: 24vh;
  display: flex;
  padding: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AnimeBody = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

export const Tittle = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding-left: 16px;
`;

export const Poster = styled.div<{ posterImg: string }>`
  width: 20%;
  height: 22vh;
  background-image: url(${(props) => props.posterImg});
  border-radius: 32px;
  background-color: red;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 0vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
