import LibraryContainer from "@containers/home/library";
import StoreContainer from "@containers/home/store";
import ProfileContainer from "@containers/home/profile";
import BookContainer from "@containers/book"
import SearchContainer from "@containers/search"
import AudioReaderContainer from "@containers/reader/audioReader"

export default {
  home: {
    library: {
      screen: LibraryContainer
    },
    store: {
      screen: StoreContainer
    },
    profile: {
      screen: ProfileContainer
    }
  },
  book: {
    screen: BookContainer,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null
    })
  },
  search: {
    screen: SearchContainer,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null
    })
  },
  audioReader: {
    screen: AudioReaderContainer,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null
    })
  }
};
