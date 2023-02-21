import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import CustomButton from "../../../components/button";
import CarouselCars from "../../../components/carousel";
import { SafeArea } from "../../../components/safeArea";
import Tag from "../../../components/tag";
import CarsInfoCard from "../components/cars-info-card/cars-info-card";
import ScreenHeader from "../components/screen-header";
import SearchComponent from "../components/search-component";

const ListHeader = ({ onChangeSearch, searchQuery }: any) => (
  <>
    <ScreenHeader>
      Let's find a <HeaderBold>great</HeaderBold> {"\n"}
      <HeaderBold>car</HeaderBold> for you
    </ScreenHeader>

    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SearchContainer>
    <View style={styles.tagsContainer}>
      <Tag text="BMW" />
      <Tag text="Tesla" />
      <Tag text="Porsche " />
      <Tag text="Ford " />
      <Tag text="Kia " />
      <Tag text="Honda" />
      <Tag text="Peugeot" />
      <Tag text="Mazda" />
      <Tag text="Volvo" />
      <Tag text="Jaguar" />
    </View>
    <Section>
      <Title>New cars :</Title>
      <CustomButton text="More" />
    </Section>
  </>
);

const data = [
  {
    name: "Peugeot",
    icon: "S",
    photos: [
      "https://media.autoexpress.co.uk/image/private/s--VxqYOYmG--/f_auto,t_content-image-full-mobile@1/v1614096781/autoexpress/2021/02/Jaguar%20XF%202021%20-%20front%20driving.jpg",
    ],
    address:
      "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
    rating: 3.5,
    isOpen: true,
  },
  {
    name: "BMW",
    icon: "S",
    photos: [
      "https://cdn.pixabay.com/photo/2020/06/13/16/29/fiat-5294867__340.jpg",
    ],
    address:
      "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
    rating: 4,
    isOpen: true,
  },
];

const tags = [
  "BMW",
  "Tesla",
  "Porsche",
  "Ford",
  "Honda",
  "Kia",
  "Peugeot",
  "Mazda",
  "Volvo",
  "Jaguar",
  "Others",
];

const CarsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);

  return (
    <SafeArea>
      <ListContainer>
        <ScreenHeader />
        <SearchComponent
          onChangeSearch={onChangeSearch}
          searchQuery={searchQuery}
        />
        <TagContainer>
          {tags.map((tag) => (
            <Tag text={tag} />
          ))}
        </TagContainer>
        <Section>
          <Title>New cars :</Title>
          <CustomButton text="More" />
        </Section>

        {data.map((item) => (
          <CarsInfoCard {...item} />
        ))}
        <Section>
          <Title>Top cars :</Title>
          <CustomButton text="More" />
        </Section>

        {data.map((item) => (
          <CarsInfoCard {...item} />
        ))}
      </ListContainer>
    </SafeArea>
  );
};

const TagContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const CarsList = styled(FlatList)`
  padding: ${(props) => props.theme.space[0]} 0;
`;

export const Title = styled(Text)`
  margin: ${(props) => props.theme.space[3]} 0;
  line-height: ${(props) => props.theme.lineHeights.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  text-transform: uppercase;
`;

const ListContainer = styled.ScrollView`
  padding: 0 ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export default CarsScreen;
