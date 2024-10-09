// import { createContext, useState, useContext } from "react";
// import { dictionary } from "../../data/dictionary";

// // Create the context with the default value set to dictionary.navigation

// // Provider component
// export const DictionaryContext = createContext(dictionary.navigation); // Correct

// const DictionaryProvider = ({ children }) => {
//   const [appDictionary, setAppDictionary] = useState(dictionary.navigation);

//   return (
//     <DictionaryContext.Provider value={{ appDictionary, setAppDictionary }}>
//       {children}
//     </DictionaryContext.Provider>
//   );
// };

// export default DictionaryProvider;
// // Custom hook to use the dictionary context
// export const useDictionaryContext = () => useContext(DictionaryContext);
