import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import data from "../../data/games";
import "./HomeCarousel.css";

const items = [
    {
        src: data[7].imageCarousel,
        caption: data[7].price,
        button: <Link to={'/game/' + data[7].id}><Button className="check-button" color="info">Sprawdź</Button></Link>
    },
    {
        src: data[8].imageCarousel,
        caption: data[8].price,
        button: <Link to={'/game/' + data[8].id}><Button className="check-button" color="info">Sprawdź</Button></Link>
    },
    {
        src: data[5].imageCarousel,
        caption: data[5].price,
        button: <Link to={'/game/' + data[5].id}><Button className="check-button" color="info">Sprawdź</Button></Link>
    }
];

class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
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
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionHeader={item.caption + " zł"} captionText={item.button}/>
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
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }

}

export default HomeCarousel

