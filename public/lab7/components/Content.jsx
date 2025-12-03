import React, { Component } from "react";

export default class Content extends Component {
    constructor(props) {
        super(props);

        const variant = 7;
        const firstIndex = (variant % 10) + 1;
        const secondIndex = firstIndex + 1;

        this.state = {
            firstIndex,
            secondIndex,
            activeFirst: false,
            activeSecond: false
        };
    }

    toggle(index) {
        if (index === this.state.firstIndex) {
            this.setState({ activeFirst: !this.state.activeFirst });
        }
        if (index === this.state.secondIndex) {
            this.setState({ activeSecond: !this.state.activeSecond });
        }
    }

    cls(index) {
        const { firstIndex, secondIndex, activeFirst, activeSecond } = this.state;

        let c = "";
        if (index === firstIndex || index === secondIndex) c = "clickable";
        if (index === firstIndex && activeFirst) c += " active";
        if (index === secondIndex && activeSecond) c += " active";

        return c.trim();
    }

    render() {
        return (
            <>
                <h2 className={this.cls(1)} onClick={() => this.toggle(1)}>
                    Токій Олександра Романівна
                </h2>

                <p className={this.cls(2)} onClick={() => this.toggle(2)}>
                    Дата народження: 24 листопада, 2005 року, м.Маріуполь
                </p>

                <p className={this.cls(3)} onClick={() => this.toggle(3)}>
                    Освіта: Маріупольський міський ліцей
                </p>

                <p className={this.cls(4)} onClick={() => this.toggle(4)}>
                    Хоббі:
                </p>

                <ul className={this.cls(5)} onClick={() => this.toggle(5)}>
                    <li>Спорт</li>
                    <li>Створення програмних проєктів</li>
                    <li>Графічний дизайн</li>
                </ul>

                <p className={this.cls(6)} onClick={() => this.toggle(6)}>
                    Улюблені фільми:
                </p>

                <ol className={this.cls(7)} onClick={() => this.toggle(7)}>
                    <li>"Початок"</li>
                    <li>"Інтерстеллар"</li>
                    <li>"1+1"</li>
                </ol>

                <p className={this.cls(8)} onClick={() => this.toggle(8)}>
                    Моє улюблене місто — Одеса…
                </p>
            </>
        );
    }
}
