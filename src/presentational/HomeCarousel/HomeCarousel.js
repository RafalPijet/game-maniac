import React from "react";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";
import CarouselSlide from "../../presentational/CarouselSlide/CarouselSlide";
import data from "../../data/games";

const items = [
    {
        id: data[7].id,
        name: data[7].name,
        src: data[7].imageCarousel,
        price: data[7].price
    },
    {
        id: data[8].id,
        name: data[8].name,
        src: data[8].imageCarousel,
        price: data[8].price
    },
    {
        id: data[5].id,
        name: data[5].name,
        src: data[5].imageCarousel,
        price: data[5].price,
    },
    {
        id: data[20].id,
        name: data[20].name,
        src: data[20].imageCarousel,
        price: data[20].price,
    },
    {
        id: data[21].id,
        name: data[21].name,
        src: data[21].imageCarousel,
        price: data[21].price,
    }
];

class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <CarouselSlide src={item.src} name={item.name} price={item.price} id={item.id}/>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }

}

export default HomeCarousel

