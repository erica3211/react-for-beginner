import React from "react";
import GoBackHome from "../components/GoBackHome";
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://i.namu.wiki/i/9SGTpXioNJPxC9XVHpFra7EIRqroYm27-lTQ4V7Nx7S5B8N_Na3A0p8E2lZG6KgOwGRuUOHq8mUKBYDv1di6TmRTvoTHwfGEKw-QJliIhhprJvMq2mZ_bDdtB3A4bsFWYmGjTkVffso8VpDCKXsTCA.webp",
        rating: 5.0,
    },
    {
        id: 2,
        name: "bulgogi",
        image: "https://i.namu.wiki/i/FVjTJd5Q29vTu5IvPrO7Ufzu259o2I7kFEE7GJT2qeBlVRvlGZb4dSe4ArCzX47R5MD-SAKNc0W9_MiUqrF80O8rzCEXqQ94Gvo-FTpVcWw0-d5rEBpNL4UOpNlztHKTeXie8sMZdKZBbll7ElZ65g.webp",
        rating: 4.0,
    },
    {
        id: 3,
        name: "kimbap",
        image: "https://i.namu.wiki/i/n5fZLU24sO7Spu6AWIiNQ2lqP2tAq33FGhIbZ3haWvN4JZSa42Zko0MHCO8C4ck8nxihj2RukQVbhPLx0GvTK9kDMPVxDsDt3wCtHVRkbgWY28wulVgCbwX3Tqph_z5FFtPbIOvzmvsOL0a7FqP1-g.webp",
        rating: 4.5,
    },
    {
        id: 4,
        name: "samgyetang",
        image: "https://i.namu.wiki/i/KydjbpIHstNkRU77d6cO3a8zfQI8fz1IuZszStm_QrUQ_czakDwsqeYpnhsRKjdHowbxVbNOykkemNH-jr0RWUQY7R2vwbJ95UwMS7esr6L1gDyRH4MvU1hKo5_hTPcW6JjL4IanHpI8FPo5n_O3qg.webp",
        rating: 4.7,
    }
];

function renderFood(dish) {
    // console.log(dish);
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function Food(props) {
    console.log(props);
    return (
        <div>
            <h2>I love {props.name}</h2>
            <h4>{props.rating}/5.0</h4>
            <img src={props.picture} alt={props.name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}

function FoodList() {
    return (
        <div>
            <GoBackHome page={"/"} />
            <div>
                {foodILike.map(renderFood)}
            </div>
        </div>
    );
}

export default FoodList;