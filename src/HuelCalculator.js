import React, { Component } from 'react'

export default class HuelCalculator extends Component {

    constructor() {
        super()

        this.state = {
            huel_grams: 0,
            huel_scoops: 0,
            water_ml: 0,
            calories: 0,
        }

    }

    calculate( number, type ) {

        switch ( type ) {

            case "huel_grams":
                    this.setState( {
                        huel_grams: number,
                        huel_scoops: ( number / 38 ).toFixed( 2 ),
                        water_ml: number * 5,
                        calories: number * 4,
                    } )
                break

            case "huel_scoops":
                    this.setState( {
                        huel_grams: number * 38,
                        huel_scoops: number,
                        water_ml: ( number * 38 ) * 5,
                        calories: number * 152,
                    } )
                break

            case "water_ml":
                    this.setState( {
                        huel_grams: number / 5,
                        huel_scoops: ( ( number / 5 ) / 38 ).toFixed( 2 ),
                        water_ml: number,
                        calories: ( ( number / 5 ) / 38 ) * 152,
                    } )
                break

            case "calories":
                    this.setState( {
                        huel_grams: number / 4,
                        huel_scoops: ( ( number / 4 ) / 38 ).toFixed( 2 ),
                        water_ml: (  number / 4 ) * 5,
                        calories: number,
                    } )
                break

            default:
                return

        }

    }

    render() {

        return <div className="HuelCalculator">

            <div className="huel-amount">

                <p>Huel: </p>
                <div className="huel-grams">
                    <input
                        type="number"
                        id="huel_grams"
                        value={ this.state.huel_grams }
                        onChange={ e => this.calculate( e.target.value, "huel_grams" ) } />
                    <label htmlFor="huel_grams">grams</label>
                </div>
                <div className="huel-scoops">
                    <input
                        type="number"
                        id="huel_scoops"
                        value={ this.state.huel_scoops }
                        onChange={ e => this.calculate( e.target.value, "huel_scoops" ) } />
                    <label htmlFor="huel_scoops">scoops</label>
                </div>

            </div>

            <div className="water-amount">

                <p>Water:</p>

                <div className="water-ml">
                    <input
                        type="number"
                        id="water_ml"
                        value={ this.state.water_ml }
                        onChange={ e => this.calculate( e.target.value, "water_ml" ) } />
                    <label htmlFor="water_ml">ml</label>
                </div>

            </div>

            <div className="calories-amount">

                <p>Calories:</p>

                <div className="calories">
                    <input
                        type="number"
                        id="calories"
                        value={ this.state.calories }
                        onChange={ e => this.calculate( e.target.value, "calories" ) } />
                    <label htmlFor="calories">calories</label>
                </div>

            </div>

        </div>

    }

}
