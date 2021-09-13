import React from "react";
import NextImage from 'next/image'
import styled from "styled-components";

function ImageCard({ url, timestamp }) {

  return (
    <Container>
      <ImageWrapper>
        <NextImage alt="" src={url} width={200} height={200} objectFit="cover" />
      </ImageWrapper>
      <DateText>{new Date(timestamp).toDateString()}</DateText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const DateText = styled.span`
  color: #808080;
  font-weight: lighter;
  margin-top: 5px;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  & > * {
    border-radius: 10px;
  }
  img {
    transition: 0.3s ease-in-out all;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

export default ImageCard;
