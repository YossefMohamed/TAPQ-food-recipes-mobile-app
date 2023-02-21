import styled from "styled-components";

export const SwipperContainer = styled.View`
  height: 350px;
  position: relative;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CarDetailsTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Details = styled.ScrollView`
  padding: ${(props) => props.theme.space[4]} 0 0
    ${(props) => props.theme.space[4]};
`;

export const UserContainer = styled.View`
  height: 50px;
  min-width: 120px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 100px;
  margin: 0 ${(props) => props.theme.space[4]};
  padding: 0 ${(props) => props.theme.space[3]};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const RatingContainer = styled.View`
  margin: 0 ${(props) => props.theme.space[1]};
`;

export const TagContainer = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space[4]} 0;
`;

export const Description = styled.View`
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[4]}
    0 0;
`;

export const DescriptionBody = styled.View`
  margin: ${(props) => props.theme.space[2]} 0;
`;