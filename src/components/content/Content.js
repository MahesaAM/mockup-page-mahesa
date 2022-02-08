import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Movie from './Movie';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=94661849&s=avenger")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.Search
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, items } = this.state;
        return(
            <div id="layoutSidenav_content">
                    <main>
                        <div class="container px-5 mt-5">
                        <div className='row mb-5'>
                            <div className='col-12'>
                            <Banner/>
                            <Card/>
                            <Card2/>
                            <Card3/>
                            <Card4/>
                            <Movie items={items}/>
                            </div>
                        </div>
                        </div>
                    </main>
                </div>
        )
    }
}

export default Content;