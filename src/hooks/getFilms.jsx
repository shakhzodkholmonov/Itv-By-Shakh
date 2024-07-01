import axios from "axios";
import { useContext, useMemo } from "react";
import { useQuery } from "react-query";
import searchContext from "../modules/context/searchContext";

const GetFilms = () => {
  const { searchText } = useContext(searchContext);

  const goodsQuery = useQuery("goodsData", async () => {
    const response = await axios.get("http://localhost:3001/films");
    return response.data;
  });

  const filteredGoods = useMemo(() => {
    if (searchText.length >= 2) {
      if (!goodsQuery.data) return [];
      return goodsQuery.data.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      return [];
    }
  }, [goodsQuery.data, searchText]);

  return {
    Goods: goodsQuery.data,
    searchHintGoods: filteredGoods,
  };
};

export default GetFilms;
