import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import facebookIconWhite from 'assets/social/facebook-white.svg';
import facebookIconBlue from 'assets/social/facebook-blue.svg';
import twitterIconWhite from 'assets/social/twitter-white.svg';
import twitterIconBlue from 'assets/social/twitter-blue.svg';
import instagramIconWhite from 'assets/social/instagram-white.svg';
import instagramIconBlue from 'assets/social/instagram-blue.svg';

const SocialWrapper = styled.div`
  display: flex;
  height: 30px;
`;

const Icon = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  margin-right: 20px;
  width: 30px;
`;

const FacebookIcon = styled(Icon)`
  background-image: url(${facebookIconWhite});

  &:hover {
    background-image: url(${facebookIconBlue});
  }
`;

const TwitterIcon = styled(Icon)`
  background-image: url(${twitterIconWhite});

  &:hover {
    background-image: url(${twitterIconBlue});
  }
`;

const InstagramIcon = styled(Icon)`
  background-image: url(${instagramIconWhite});

  &:hover {
    background-image: url(${instagramIconBlue});
  }
`;

export const Social = () => (
  <SocialWrapper>
    <Link to="/">
      <FacebookIcon />
    </Link>
    <Link to="/">
      <TwitterIcon />
    </Link>
    <Link to="/">
      <InstagramIcon />
    </Link>
  </SocialWrapper>
);
