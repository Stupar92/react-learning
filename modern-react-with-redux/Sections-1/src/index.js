// Create new component. This component should produce some HTML
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

const API_KEY = "AIzaSyDx2f98jiKeF1te6HJsi6ttAbxxh_kF-mw";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch("surfboards");
   }

   videoSearch(term) {
       YTSearch({ key: API_KEY, term: term }, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
   }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail  video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})} />
            </div>
        );
    }
}

//Comonent needs to be inserted into the DOM
ReactDOM.render(<App />, document.querySelector(".container"));

// @TODO the following is not working, find out why:
// This does not work: ReactDOM.render(<App />, $(".container"))
// This does work: ReactDOM.render(<App />, document.querySelector(".container"));