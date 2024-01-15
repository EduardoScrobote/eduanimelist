"use client";

import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { api, getAnimeData } from "@/data/services/kitsu";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { stars } from "@/data/services/rating";

import "./video.css";
import GlobalStyle from "../globalStyles";
import { Text } from "@/components/Text/text.styled";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import {
  AnimeBody,
  AnimeContainer,
  AnimeHeader,
  Arrow,
  CoverImage,
  HomeContainer,
  HomeMainDiv,
  HomeMainDivArrow,
  Poster,
  Tittle,
  VideoContainer,
} from "./home.styled";
import Container from "react-bootstrap/Container";
import { Prev } from "react-bootstrap/esm/PageItem";

const queryClient = new QueryClient();

function Page() {
  const [animeNumber, setAnimeNumber] = useState<number>(1);

  const { data, isLoading } = useQuery(["animes", animeNumber], () =>
    api.getAnimeData(animeNumber)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <span>No data available</span>;
  }

  const animeData = data.data.attributes;

  const dateString = animeData.startDate;
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const youtubeLink = `https://www.youtube.com/embed/${animeData.youtubeVideoId}`;

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <span> Loading... </span>
      ) : (
        <HomeMainDiv>
          <GlobalStyle />
          <CoverImage
            bgImg={
              animeData.coverImage?.original
                ? animeData.coverImage.original
                : null
            }
          >
            <Arrow
              onClick={() =>
                setAnimeNumber((prevState) =>
                  animeData.id > 1 ? prevState : prevState - 1
                )
              }
            >
              <FaLongArrowAltLeft></FaLongArrowAltLeft>
            </Arrow>
            <AnimeContainer>
              <AnimeHeader>
                <Poster posterImg={animeData.posterImage.original} />
                <Tittle>
                  <Text color="white" fontSize="32px" mb="12px">
                    {animeData.titles.en}
                  </Text>
                  <Text color="white" fontSize="18px" mt="24px">
                    Rating: {animeData.averageRating}
                  </Text>
                  <Text color="white" fontSize="18px" mt="8px">
                    Relase: {day}/{month}/{year}
                  </Text>
                  <Text color="white" fontSize="18px" mt="8px">
                    Parental rating: {animeData.ageRatingGuide}
                  </Text>
                </Tittle>
              </AnimeHeader>
              <AnimeBody>
                <Text color="white" fontSize="16px">
                  {animeData.description}
                </Text>
              </AnimeBody>
              <VideoContainer>
                <iframe
                  width="950"
                  height="450"
                  src={youtubeLink}
                  title="Ghost in the Shell (1995 Movie) Official IMAX Trailer - Mamoru Oshii, Masamune Shirow"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </VideoContainer>
            </AnimeContainer>
            <Arrow onClick={() => setAnimeNumber((prevState) => prevState + 1)}>
              <FaLongArrowAltRight></FaLongArrowAltRight>
            </Arrow>
          </CoverImage>
        </HomeMainDiv>
      )}
    </QueryClientProvider>
  );
}
export default Page;
