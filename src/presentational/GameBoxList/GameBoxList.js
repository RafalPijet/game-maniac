import React from "react";
import {Link} from "react-router-dom";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GameBox from "../GameBox/GameBox";
import AddToBasket from "../../presentational/AddToBasket/AddToBasket";
import "./GameBoxList.css";

class GameBoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearchMode: false
        };
        this.pageSize = 8;
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.searchState && !this.state.isSearchMode) {
            this.props.setCurrentPage(0);
            this.setState({isSearchMode: true});
        } else if (!nextProps.searchState) {
            this.setState({isSearchMode: false});
        }
        this.props.setPagesCount(Math.ceil(nextProps.games.length / this.pageSize));
    }

    handleClick(event, index) {
        event.preventDefault();
        this.props.setCurrentPage(index);
    }

    render() {
        const currentPage = this.props.currentPage;
        return (
            <div className="box-list-container">
                <div className="box-list-main">
                    {this.props.games
                        .slice(currentPage * this.pageSize, (currentPage + 1) * this.pageSize)
                        .map(game => (
                                <div className="box-list" key={game.id}>
                                    <Link className="box" to={'/game/' + game.id}>
                                        <GameBox game={game}/>
                                    </Link>
                                    <AddToBasket game={game}/>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="pagination-wrapper">
                    <Pagination aria-label="Page navigation">
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink
                                className="bg-dark text-warning border-dark"
                                onClick={event => this.handleClick(event, currentPage - 1)}
                                previous
                                href="#"
                            />
                        </PaginationItem>
                        {[...Array(this.props.pagesCount)].map((page, i) => (
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink className="bg-dark text-warning border-dark" onClick={event => this.handleClick(event, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem disabled={currentPage >= this.props.pagesCount - 1}>
                            <PaginationLink
                                className="bg-dark text-warning border-dark"
                                onClick={event => this.handleClick(event, currentPage + 1)}
                                next
                                href="#"
                            />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}

export default GameBoxList;
