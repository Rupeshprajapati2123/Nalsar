import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebaseconfig";

const NalsarContext = createContext();

const useNalsarContext = () => useContext(NalsarContext);

const NalsarProvider = ({ children }) => {
  // states
  const [data, setData] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoriesPod, setCategoriesPod] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchResultReady, setIsSearchResultsReady] = useState(false);
  const articleRef = collection(db, "Articles");
  const podcastRef = collection(db, "conversations");

  // functions
  const fetchData = async () => {
    try {
      const temp = await getDocs(articleRef, orderBy("createdAt"));
      const articles = temp.docs.map((doc) => ({
        res: doc.data(),
        id: doc.id,
      }));
      return articles;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const fetchPodcast = async () => {
    try {
      const temp = await getDocs(podcastRef);
      const podcast = temp.docs.map((doc) => ({ res: doc.data(), id: doc.id }));
      return podcast;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const extractCategories = (data) => {
    const categoriesSet = new Set();
    data.forEach((article) => {
      if (article.res.tags && Array.isArray(article.res.tags)) {
        article.res.tags.forEach((category) => {
          categoriesSet.add(category);
        });
      }
    });
    const uniqueCategories = Array.from(categoriesSet);
    return uniqueCategories;
  };

  const fetchDataAndCategories = async () => {
    setIsLoading(true);
    try {
      const articles = await fetchData();
      setData(articles);
      const cat = extractCategories(articles);
      setCategories(cat);
      const podcasts = await fetchPodcast();
      setConversations(podcasts);
      const cat2 = extractCategories(podcasts);
      setCategoriesPod(cat2);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    console.log("temp");
    setIsSearchResultsReady(false);
    try {
      const results = data.filter((item) =>
        item.res.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }finally {
      setIsSearchResultsReady(true);
    }
  };

  // function calls;
  useEffect(() => {
    fetchDataAndCategories();
  }, []);

  useEffect(() => {
    if(searchQuery!=='')
    {
      handleSearch();
    }else{
      setIsSearchResultsReady(false)
    }
  }, [searchQuery]);

  // export functions and states
  const contextValue = {
    data,
    conversations,
    categories,
    categoriesPod,
    isLoading,
    searchQuery,
    setSearchQuery,
    handleSearch,
    searchResults,
    isSearchResultReady,
  };

  return (
    <NalsarContext.Provider value={contextValue}>
      {children}
    </NalsarContext.Provider>
  );
};

export { NalsarProvider, useNalsarContext };
