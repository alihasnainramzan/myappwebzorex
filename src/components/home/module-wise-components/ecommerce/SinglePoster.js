import React from "react";
import CustomImageContainer from "../../../CustomImageContainer";
import { styled } from "@mui/material";
import { CustomBoxFullWidth } from "../../../../styled-components/CustomStyles.style";
const ImageWrapper = styled(CustomBoxFullWidth)(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  height: "318px",
  [theme.breakpoints.down("sm")]: {
    height: "110px",
  },
}));
const SinglePoster = ({ bannerData }) => {
  return (
    <>
      {bannerData?.bottom_section_banner && (
        <ImageWrapper>
          <CustomImageContainer
            height="100%"
            width="100%"
            src={bannerData?.bottom_section_banner_full_url}
            objectfit="cover"
          />
        </ImageWrapper>
      )}
    </>
  );
};

SinglePoster.propTypes = {};

export default SinglePoster;
